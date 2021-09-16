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

const setBorder = ({ coloredBorder, type, theme }) => {
  if (coloredBorder) {
    if (type === "do") return `${theme.orbit.paletteGreenNormal}`;
    if (type === "dont") return `${theme.orbit.paletteRedNormal}`;
  }

  return theme.orbit.paletteInkLight;
};

export const resolveBorders = () => {
  return css`
    border-top: 3px solid ${setBorder};
    ${mq.desktop(css`
      border-top: none;
      border-left: 3px solid ${setBorder};
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
