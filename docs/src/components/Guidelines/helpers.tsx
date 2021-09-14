import React from "react";
import { imageWrapperClass } from "gatsby-remark-images/constants";
import { css } from "styled-components";

import { Content } from ".";

const isImage = obj => obj.props?.children?.props?.className === imageWrapperClass;

export const extractContent = data => {
  return React.Children.toArray(data).reduce(
    (acc: Content, cur) => {
      if (isImage(cur)) acc.images.push(cur);
      else acc.content = cur;

      return acc;
    },
    { images: [], content: null },
  );
};

export const resolveBorders = ({ type, theme, coloredBorder }) => {
  if (coloredBorder) {
    if (type === "do")
      return css`
        border-left: 3px solid ${theme.orbit.paletteGreenNormal};
      `;

    if (type === "dont") {
      return css`
        border-left: 3px solid ${theme.orbit.paletteRedNormal};
      `;
    }
  }

  return css`
    border-left: 3px solid ${theme.orbit.paletteInkLight};
  `;
};
