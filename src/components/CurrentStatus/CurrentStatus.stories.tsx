import { Meta, StoryFn } from "@storybook/react";
import { CurrentStatus, CurrentStatusProps } from "./CurrentStatus";
import { withSetup } from "../../../.storybook/withSetup";

export default {
  title: "CurrentStatus",
  component: CurrentStatus,
  decorators: [withSetup]
} as Meta;

const Template: StoryFn<CurrentStatusProps> = args => <CurrentStatus {...args} />;

export const Default = Template.bind({});
Default.args = {
  projectName: "Testaustime"
};
