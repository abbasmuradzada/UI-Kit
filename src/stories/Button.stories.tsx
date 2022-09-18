import React from "react";
import { E_BUTTON_SIZES, E_BUTTON_VARIANTS } from "../constants/enums";
import { Add } from "@mui/icons-material";
import { Button } from "../components";

export default {
  title: "Example/Button",
  component: Button,
};

const Template = (args: any) => <Button {...args} />;

export const Primary: any = Template.bind({});
Primary.args = {
  variant: E_BUTTON_VARIANTS.PRIMARY,
  label: "Button",
  size: E_BUTTON_SIZES.MEDIUM,
};

export const Secondary: any = Template.bind({});
Secondary.args = {
  variant: E_BUTTON_VARIANTS.SECONDARY,
  label: "Secondary",
};

export const Outlined: any = Template.bind({});
Outlined.args = {
  variant: E_BUTTON_VARIANTS.OUTLINED,
  label: "Button",
};

export const Disabled: any = Template.bind({});
Disabled.args = {
  variant: E_BUTTON_VARIANTS.DISABLED,
  label: "Button",
};

export const Icon: any = Template.bind({});
Icon.args = {
  label: "Button",
  icon: <Add />,
};

export const Loader: any = Template.bind({});
Loader.args = {
  label: "Button",
  loader: true,
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
