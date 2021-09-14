import React from "react";
import styled, { css } from "styled-components";

const StyledWrapper = styled.div`
  ${({ theme }) => css`
    border-left: 4px solid ${theme.orbit.paletteInkLight};
    padding: ${theme.orbit.spaceMedium} 0;
    background: ${theme.orbit.paletteCloudLight};
    border-radius: ${theme.orbit.borderRadiusLarge};
  `};
`;

const StyledContent = styled.div`
  ${({ theme }) => css`
    padding: ${theme.orbit.spaceXSmall} ${theme.orbit.spaceLarge} ${theme.orbit.spaceXSmall}
      ${theme.orbit.spaceMedium};
    font-style: italic;
    font-weight: 500;
    blockquote > * + *,
    figcaption {
      margin-top: ${theme.orbit.spaceXSmall};
    }
  `};
`;

const StyledAuthor = styled.p`
  ${({ theme }) => css`
    color: ${theme.orbit.paletteInkLight};
  `}
`;

interface Props {
  children: React.ReactNode;
}

export default function BlockQuote({ children }: Props) {
  const lastChild = React.Children.toArray(children)[React.Children.count(children) - 1];

  // if quote ends with author
  if (
    React.isValidElement(lastChild) &&
    typeof lastChild.props.children === "string" &&
    lastChild.props.children.startsWith("—")
  ) {
    return (
      <StyledWrapper>
        <StyledContent>
          <figure>
            <blockquote>
              {React.Children.map(
                children,
                (child, index) => index < React.Children.count(children) - 1 && child,
              )}
            </blockquote>
            <figcaption>
              <StyledAuthor>{lastChild.props.children}</StyledAuthor>
            </figcaption>
          </figure>
        </StyledContent>
      </StyledWrapper>
    );
  }

  return (
    <StyledWrapper>
      <StyledContent>
        <blockquote>{children}</blockquote>
      </StyledContent>
    </StyledWrapper>
  );
}
