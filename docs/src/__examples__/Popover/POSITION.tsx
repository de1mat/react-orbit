import React from "react";
import { Popover, Button, ButtonLink, Heading, Stack } from "@kiwicom/orbit-components";
import { QuestionCircle } from "@kiwicom/orbit-components/icons";

export default {
  Example: () => (
    <Stack>
      <Stack>
        <Heading type="title3" as="h4">
          Bottom
        </Heading>
        <Popover
          renderInPortal={false}
          placement="bottom-start"
          content={
            <Stack spacing="small">
              <ButtonLink
                external
                type="secondary"
                fullWidth
                href="https://orbit.kiwi/components/popover/react/"
              >
                Reference
              </ButtonLink>
              <ButtonLink
                external
                type="secondary"
                fullWidth
                href="https://orbit.kiwi/components/popover/"
              >
                Guidelines
              </ButtonLink>
            </Stack>
          }
        >
          <Button circled title="Help" iconLeft={<QuestionCircle />} />
        </Popover>
      </Stack>
      <Stack>
        <Heading type="title3" as="h4">
          Top
        </Heading>
        <Popover
          renderInPortal={false}
          placement="bottom-start"
          content={
            <Stack spacing="small">
              <ButtonLink
                external
                type="secondary"
                fullWidth
                href="https://orbit.kiwi/components/popover/react/"
              >
                Reference
              </ButtonLink>
              <ButtonLink
                external
                type="secondary"
                fullWidth
                href="https://orbit.kiwi/components/popover/"
              >
                Guidelines
              </ButtonLink>
            </Stack>
          }
        >
          <Button circled title="Help" iconLeft={<QuestionCircle />} />
        </Popover>
      </Stack>
    </Stack>
  ),
  info: {
    title: "Position",
    description:
      "If you set a preferred position relative to the child, the popover will be placed there if there's room. Otherwise, preference is given in the order of bottom then top.",
  },
};
