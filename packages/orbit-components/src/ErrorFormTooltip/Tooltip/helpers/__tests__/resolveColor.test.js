// @flow
import resolveColor from "../resolveColor";
import defaultTheme from "../../../../defaultTheme";

const params = isHelp => ({
  isHelp,
  theme: defaultTheme,
});

describe("resolveColor", () => {
  it("isHelp true", () => {
    expect(resolveColor(params(true))).toBe(defaultTheme.orbit.paletteBlueDark);
  });
  it("isHelp false", () => {
    expect(resolveColor(params(false))).toBe(defaultTheme.orbit.paletteRedNormal);
  });
});
