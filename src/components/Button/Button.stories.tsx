import React from "react";
import { Meta, Story } from "@storybook/react";
import Button from "./Button";
import { ButtonProps } from "./Button.types";
import { defaultTheme, darkTheme } from "../../utils";

const meta: Meta = {
  title: "Components/Button",
  component: Button,
  argTypes: {},
};
export default meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const DefaultTheme = Template.bind({});
DefaultTheme.args = {
  primary: true,
  // size: 'medium',
  text: 'Default Button',
};

export const DarkTheme = Template.bind({});
DarkTheme.args = {
  primary: true,
  // size: 'medium',
  text: 'Dark Theme Button',
};

export const Small = Template.bind({});
Small.args = {
  primary: true,
  // size: 'small',
  text: 'Small Button',
};

export const Large = Template.bind({});
Large.args = {
  primary: true,
  // size: 'large',
  text: 'Large Button',
};

export const Disabled = Template.bind({});
Disabled.args = {
  primary: true,
  // size: 'medium',
  text: 'Disabled',
  disabled: true,
};

// export const Success = Template.bind({});
// Success.args = {
//   primary: true,
//   size: 'medium',
//   text: 'Success',
// };

// export const Error = Template.bind({});
// Error.args = {
//   primary: true,
//   size: 'medium',
//   text: 'Error',
// };

// export const Warning = Template.bind({});
// Warning.args = {
//   primary: true,
//   size: 'medium',
//   text: 'Warning',
// };
