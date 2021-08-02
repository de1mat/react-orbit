// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import { ItinerarySegmentProvider } from "./context";
import Stack from "../../Stack";
import getSpacingToken from "../../common/getSpacingToken";
import defaultTheme from "../../defaultTheme";
import handleKeyDown from "../../utils/handleKeyDown";

import type { Props } from ".";

const StyledWrapper = styled.div`
  ${({ theme, noElevation }) => css`
    cursor: pointer;
    margin-bottom: ${getSpacingToken};
    box-shadow: ${!noElevation && theme.orbit.boxShadowFixed};
    border-radius: ${theme.orbit.borderRadiusLarge};
    padding: ${theme.orbit.spaceSmall} 0;
    &:hover {
      box-shadow: ${theme.orbit.boxShadowActionActive};
    }
    &:focus {
      outline: none;
      box-shadow: ${theme.orbit.boxShadowActionActive};
    }
  `}
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledWrapper.defaultProps = {
  theme: defaultTheme,
};

const ItinerarySegment = ({
  children,
  spaceAfter,
  dataTest,
  noElevation,
  onClick,
}: Props): React.Node => {
  const content = React.Children.toArray(children);
  const [opened, setOpened] = React.useState(false);

  const parts = (
    <Stack direction="column" spacing="small">
      {React.Children.map(children, (el, i) => {
        return (
          <ItinerarySegmentProvider
            index={i}
            opened={opened}
            toggleOpened={() => setOpened(prev => !prev)}
            last={i === React.Children.count(children) - 1}
            isNextHidden={content[i + 1] && content[i + 1].props.hidden}
            count={React.Children.count(children)}
            isHidden={el.props.hidden}
            noElevation={!!noElevation}
          >
            {el}
          </ItinerarySegmentProvider>
        );
      })}
    </Stack>
  );

  const handleClick = (ev: SyntheticEvent<HTMLDivElement>) => {
    if (onClick) onClick(ev);
    setOpened(prev => !prev);
  };

  return (
    <StyledWrapper
      spaceAfter={spaceAfter}
      data-test={dataTest}
      tabIndex={0}
      onKeyDown={handleKeyDown(() => setOpened(prev => !prev))}
      onClick={handleClick}
      noElevation={noElevation}
    >
      {parts}
    </StyledWrapper>
  );
};

export default ItinerarySegment;
