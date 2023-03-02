import { Meta, StoryFn } from "@storybook/react";
import { BlinkingDot, BlinkingDotProps } from "./BlinkingDot";
import { withSetup } from "../../../.storybook/withSetup";

export default {
  title: "BlinkingDot",
  component: BlinkingDot,
  decorators: [withSetup]
} as Meta;

const Template: StoryFn<BlinkingDotProps> = args => <BlinkingDot {...args} />;
export const Default = Template.bind({});
Default.args = {
  color: "green"
};
