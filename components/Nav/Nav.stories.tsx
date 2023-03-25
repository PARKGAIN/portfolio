import React from "react";
import { Story, Meta } from "@storybook/react";
import Nav from "components/Nav/Nav";

export default {
  title: "Nav",
  component: Nav,
} as Meta;

const Template: Story = (args) => <Nav {...args} />;

export const Default = Template.bind({});
Default.args = {
  isMobile: false,
};
