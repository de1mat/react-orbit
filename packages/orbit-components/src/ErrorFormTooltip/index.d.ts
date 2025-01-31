// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit
import React from "react";

import * as Common from "../common/common";

export interface Props extends Common.Global, Common.SpaceAfter {
  readonly id?: string;
  readonly error?: React.ReactNode;
  readonly shown: boolean;
  readonly help?: React.ReactNode;
  readonly inlineLabel?: boolean;
  readonly referenceElement: HTMLElement | null;
  readonly inputSize?: "small" | "normal";
  readonly onShown?: React.Dispatch<React.SetStateAction<boolean>>;
}

declare const ErrorFormTooltip: React.FC<Props>;
export { ErrorFormTooltip, ErrorFormTooltip as default };
