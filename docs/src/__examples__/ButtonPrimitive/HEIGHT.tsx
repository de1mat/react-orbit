import React from "react";
import { Stack, Heading } from "@kiwicom/orbit-components";
import Button from "@kiwicom/orbit-components/lib/primitives/ButtonPrimitive";

export default {
  Example: () => (
    <Stack flex>
      <Stack shrink direction="column" spacing="XSmall">
        <Heading type="title3">Relative height</Heading>
        <div style={{ height: "240px" }}>
          <Button height="50%">Save</Button>
        </div>
      </Stack>
      <Stack shrink direction="column" spacing="XSmall">
        <Heading type="title3">Fixed height</Heading>
        <Button height="40px">Save</Button>
      </Stack>
      <Stack shrink direction="column" spacing="XSmall">
        <Heading type="title3">Normal height</Heading>
        <Button>Save</Button>
      </Stack>
    </Stack>
  ),
  info: {
    title: "Height",
    description:
      "In addition to width as with buttons, button primitives can have heights relative to their containers or fixed.",
  },
};
