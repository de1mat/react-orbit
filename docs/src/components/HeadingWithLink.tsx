import React from "react";
import styled, { css } from "styled-components";
import { Stack } from "@kiwicom/orbit-components";
import { Link as LinkIcon } from "@kiwicom/orbit-components/icons";
import { SpaceAfter } from "@kiwicom/orbit-components/lib/common/common";

import { getTextFromChildren, slugify } from "../utils/common";

export const StyledAnchorWrapper = styled.div`
  svg {
    opacity: 0;
  }

  &:hover svg {
    opacity: 1;
  }
`;

const StyledAnchor = styled(({ className, children, title, href }) => (
  <a className={className} title={title} href={href}>
    {children}
  </a>
))`
  ${({ theme }) => css`
    display: inline-block;
    padding: 10px;
    margin: -10px;
    margin-left: 1px;
    :hover,
    :active,
    :focus {
      outline: none;
      svg {
        transition: fill ${theme.orbit.durationFast} ease-in;
        fill: ${theme.orbit.paletteProductNormal};
      }
    }
  `}
`;

interface Props extends SpaceAfter {
  children?: React.ReactNode;
  noId?: boolean;
}

const HeadingWithLink = ({ children, noId, spaceAfter = "none" }: Props) => {
  const headingText = getTextFromChildren(children);
  const slugifiedText = slugify(headingText);

  return (
    <StyledAnchorWrapper id={noId ? "" : slugifiedText}>
      <Stack flex spacing="none" align="center" spaceAfter={spaceAfter}>
        {children}
        <StyledAnchor href={`#${slugifiedText}`} title={`Link to heading: ${headingText}`}>
          <LinkIcon />
        </StyledAnchor>
      </Stack>
    </StyledAnchorWrapper>
  );
};

export default HeadingWithLink;
