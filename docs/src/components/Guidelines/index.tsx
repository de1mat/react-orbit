import React from "react";
import styled, { css } from "styled-components";
import { CheckCircle, CloseCircle } from "@kiwicom/orbit-components/icons";
import { Stack, Text, Heading } from "@kiwicom/orbit-components";

import HeadingWithLink from "../HeadingWithLink";
import { slugify } from "../../utils/common";
import { extractContent, resolveBorders } from "./helpers";

export interface GuidelineType {
  type: "do" | "dont";
}
export interface Content {
  images: React.ReactNode[];
  content: React.ReactNode;
}
interface GuidelineProps extends GuidelineType {
  title: string;
  children: React.ReactNode;
}

interface GuidelineComponent extends GuidelineType {
  id: string;
  coloredBorder: boolean;
}

const StyledComponent = styled.div<GuidelineComponent>`
  ${({ theme }) => css`
    background: ${theme.orbit.paletteCloudLight};
    border-radius: ${theme.orbit.borderRadiusLarge};
    border-left: 3px solid ${theme.orbit.paletteInkLight};
    padding: ${theme.orbit.spaceMedium} 0;
    ${resolveBorders};
  `}
`;

const StyledWrapper = styled.div<GuidelineType>`
  ${({ theme }) => css`
    display: flex;
    padding: ${theme.orbit.spaceXSmall} ${theme.orbit.spaceLarge} ${theme.orbit.spaceXSmall}
      ${theme.orbit.spaceMedium};
  `}
`;

const ContentContainer = styled.div`
  ${({ theme }) => css`
    padding-left: ${theme.orbit.spaceXSmall};
  `}
`;

interface ImageContainerProps extends GuidelineType {
  noLeftPadding?: boolean;
  middleAlign?: boolean;
}

const StyledImageContainer = styled.div<ImageContainerProps>`
  ${({ noLeftPadding, theme, type }) => css`
    padding: ${noLeftPadding ? theme.orbit.spaceMedium : theme.orbit.spaceLarge};
    ${noLeftPadding && "padding-left: 0"};
    width: 100%;
    max-width: 360px;
    background: ${theme.orbit.paletteWhite};
    border-radius: ${theme.orbit.borderRadiusNormal};
    border-top: 3px solid
      ${type === "do" ? theme.orbit.paletteGreenNormal : theme.orbit.paletteRedNormal};
  `}
`;

const StyledImageBorder = styled.div<GuidelineType>`
  ${({ theme }) => css`
    padding: ${theme.orbit.spaceMedium};
    padding-left: ${theme.orbit.spaceXLarge};
    height: 100%;
  `}
`;

export const DoDontHeader = ({ type }: GuidelineType) => (
  <Stack inline spacing="XXSmall">
    {type === "do" ? <CheckCircle color="success" /> : <CloseCircle color="critical" />}
    <Text weight="bold" type={type === "do" ? "success" : "critical"}>
      {type === "do" ? "Do" : "Don't"}
    </Text>
  </Stack>
);

export default function Guideline({ type = "do", title, children }: GuidelineProps) {
  const { images, content } = extractContent(children);
  const typeOpposite = type === "do" ? "dont" : "do";

  return (
    <StyledComponent id={slugify(title)} type={type} coloredBorder={!(images.length > 1)}>
      <StyledWrapper type={type}>
        {images.length < 2 &&
          (type === "do" ? (
            <CheckCircle color="success" ariaLabel="Do" />
          ) : (
            <CloseCircle color="critical" ariaLabel="Don't" />
          ))}
        <Stack justify="between" shrink direction="column" desktop={{ direction: "row" }}>
          <ContentContainer>
            <HeadingWithLink noId>
              <Heading as="h3" type="title3">
                {title}
              </Heading>
            </HeadingWithLink>
            {content}
          </ContentContainer>
          {images.length === 1 && (
            <StyledImageContainer type={type} middleAlign>
              {images}
            </StyledImageContainer>
          )}
          {images.length > 1 && (
            <Stack
              basis="65%"
              direction="column"
              justify="start"
              desktop={{ justify: "end" }}
              tablet={{ direction: "row" }}
            >
              <Stack shrink direction="column" spacing="XSmall">
                <DoDontHeader type={type} />
                <StyledImageContainer type={type} noLeftPadding>
                  <StyledImageBorder type={type}>{images[0]}</StyledImageBorder>
                </StyledImageContainer>
              </Stack>
              <Stack shrink direction="column" spacing="XSmall">
                <DoDontHeader type={typeOpposite} />
                <StyledImageContainer type={typeOpposite} noLeftPadding>
                  <StyledImageBorder type={typeOpposite}>{images[1]}</StyledImageBorder>
                </StyledImageContainer>
              </Stack>
            </Stack>
          )}
        </Stack>
      </StyledWrapper>
    </StyledComponent>
  );
}
