import React from "react";
import { imageWrapperClass } from "gatsby-remark-images/constants";
import { css } from "styled-components";
import { mediaQueries as mq } from "@kiwicom/orbit-components";

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

const setBorders = isMobile => ({ coloredBorder, type, theme }) => {
  const position = isMobile ? "top" : "left";

  if (coloredBorder) {
    if (type === "do")
      return css`
        border-${position}: 3px solid ${theme.orbit.paletteGreenNormal};
      `;

    if (type === "dont") {
      return css`
        border-${position}: 3px solid ${theme.orbit.paletteRedNormal};
      `;
    }
  }

  return css`
    border-${position}: 3px solid ${theme.orbit.paletteInkLight};
  `;
};

export const resolveBorders = () => {
  return css`
    ${setBorders(true)};
    ${mq.desktop(css`
      border-top: none;
      ${setBorders(false)};
    `)}
  `;
};

export const resolveColumns = (images, isDesktop) => {
  if (isDesktop) {
    if (images === 1) return `1fr 1fr`;
    if (images === 2) return `1fr 1fr 1fr`;

    return `1fr`;
  }

  return `1fr`;
};
