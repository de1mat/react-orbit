import React from "react";
import { imageWrapperClass } from "gatsby-remark-images/constants";

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
