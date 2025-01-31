import React from "react";
import { InputField, ListChoice, Popover, Tag } from "@kiwicom/orbit-components";

export default {
  Example: () => {
    const [choices, setChoices] = React.useState<string[]>([]);
    const [selectMilan, setSelectMilan] = React.useState(false);
    const [selectOslo, setSelectOslo] = React.useState(false);
    const [selectPrague, setSelectPrague] = React.useState(false);
    return (
      <Popover
        renderInPortal={false}
        content={
          <>
            <ListChoice
              selectable
              selected={selectOslo}
              title="Oslo, Norway"
              onClick={() => {
                setSelectOslo(!selectOslo);
                if (!selectOslo) {
                  setChoices([...choices, "Oslo"]);
                } else {
                  setChoices(choices.filter(choice => choice !== "Oslo"));
                }
              }}
            />
            <ListChoice
              selectable
              selected={selectPrague}
              title="Prague, Czechia"
              onClick={() => {
                setSelectPrague(!selectPrague);
                if (!selectPrague) {
                  setChoices([...choices, "Prague"]);
                } else {
                  setChoices(choices.filter(choice => choice !== "Prague"));
                }
              }}
            />
            <ListChoice
              selectable
              selected={selectMilan}
              title="Milan, Italy"
              onClick={() => {
                setSelectMilan(!selectMilan);
                if (!selectMilan) {
                  setChoices([...choices, "Milan"]);
                } else {
                  setChoices(choices.filter(choice => choice !== "Milan"));
                }
              }}
            />
          </>
        }
        noPadding
      >
        <InputField
          tags={
            <>
              {choices.map(choice => (
                <Tag>{choice}</Tag>
              ))}
            </>
          }
          label="To"
          inlineLabel
          value=""
        />
      </Popover>
    );
  },
  info: {
    title: "Selectable",
    description:
      "You can allow users to select multiple list choices using the <code>selectable</code> and <code>selected</code> props.",
  },
};
