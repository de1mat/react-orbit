// @flow
import * as React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import InputFile from "..";
import SPACINGS_AFTER from "../../common/getSpacingToken/consts";

describe("InputFile", () => {
  it("should have expected DOM output", () => {
    const label = "Select file";
    const buttonLabel = "Click on me";
    const name = "name";
    const placeholder = "Not file has been selected";
    const dataTest = "test";
    const allowedFileTypes = [".png", ".jpg", ".pdf"];
    const onChange = jest.fn();
    const onFocus = jest.fn();
    const tabIndex = "-1";
    const spaceAfter = SPACINGS_AFTER.NORMAL;
    const file = new File(["blin"], "blin.png", { type: "image/png" });

    render(
      <InputFile
        name={name}
        label={label}
        buttonLabel={buttonLabel}
        placeholder={placeholder}
        dataTest={dataTest}
        allowedFileTypes={allowedFileTypes}
        spaceAfter={spaceAfter}
        help="help"
        tabIndex={tabIndex}
        onChange={onChange}
        onFocus={onFocus}
      />,
    );

    screen.getByRole("button", { name: buttonLabel });
    screen.getByText(placeholder);
    screen.getByText(label);

    const input: any = screen.getByTestId(dataTest);
    expect(input).toHaveAttribute("name", name);
    expect(input).toHaveAttribute("tabindex", "-1");
    expect(input).toHaveAttribute("accept", ".png,.jpg,.pdf");

    userEvent.upload(input, file);
    expect(onChange).toHaveBeenCalled();
  });

  it("should have filename, onRemoveFile", () => {
    const onRemoveFile = jest.fn();

    render(<InputFile fileName="bur" onRemoveFile={onRemoveFile} />);

    const button = screen.getByRole("button", { name: "remove" });
    userEvent.click(button);
    expect(onRemoveFile).toHaveBeenCalled();
  });

  it("should have error", () => {
    const onFocus = jest.fn();
    const onBlur = jest.fn();

    render(
      <InputFile
        dataTest="test"
        onFocus={onFocus}
        onBlur={onBlur}
        error="chuck norris counted to infinity twice"
      />,
    );

    userEvent.tab((screen.getByTestId("test"): any));
    expect(onFocus).toHaveBeenCalled();
    fireEvent.blur((screen.getByTestId("test"): any));
    expect(onBlur).toHaveBeenCalled();
    screen.getByText("chuck norris counted to infinity twice");
  });
});
