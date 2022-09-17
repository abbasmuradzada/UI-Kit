import React from "react";
import { E_BUTTON_SIZES, E_BUTTON_VARIANTS } from "../constants/enums";

import { Button } from "./Button";

export default {
  title: "Example/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args: any) => <Button {...args} />;

export const Primary: any = Template.bind({});
Primary.args = {
  variant: E_BUTTON_VARIANTS.SECONDARY,
  label: "Button",
};

export const Secondary: any = Template.bind({});
Secondary.args = {
  label: "Button",
};

export const Large: any = Template.bind({});
Large.args = {
  size: E_BUTTON_SIZES.LARGE,
  label: "Button",
};

export const Medium: any = Template.bind({});
Medium.args = {
  size: E_BUTTON_SIZES.MEDIUM,
  label: "Button",
};

export const Small: any = Template.bind({});
Small.args = {
  size: E_BUTTON_SIZES.SMALL,
  label: "Button",
};
