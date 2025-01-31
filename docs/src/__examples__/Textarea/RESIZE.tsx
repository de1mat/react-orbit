import React from "react";
import { Stack, Textarea } from "@kiwicom/orbit-components";

export default {
  Example: () => (
    <Stack>
      <Textarea label="Given names" placeholder="Sofia Cruz" resize="vertical" />
      <Textarea label="Given names" placeholder="Sofia Cruz" resize="none" />
    </Stack>
  ),
  info: {
    title: "Resizing",
    description:
      "You can set text areas so they can be resized vertically (the default) or so they can't be resized at all. If you set the fullHeight prop, the text area cannot be resized.",
  },
};
