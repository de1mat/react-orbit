// @flow
import * as React from "react";

import type { Props } from "..";
import Svg from "../Svg";

const Text = ({ ...props }: Props): React.Node => {
  return (
    <Svg {...props}>
      <rect x="0" y="0" rx="3" ry="3" width="40%" height="21px" />
      <rect x="0" y="29px" rx="3" ry="3" width="100%" height="21px" />
      <rect x="0" y="58px" rx="3" ry="3" width="100%" height="21px" />
      <rect x="0" y="87px" rx="3" ry="3" width="100%" height="21px" />
    </Svg>
  );
};

export default Text;
