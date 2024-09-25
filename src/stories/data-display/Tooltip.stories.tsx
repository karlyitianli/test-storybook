import React from 'react';
import { Meta, Story } from '@storybook/react';
import Tooltip from 'components/data-display/Tooltip';

export default {
  title: 'Data Display/Tooltip',
  component: Tooltip,
} as Meta;

const Template: Story = (args) => <Tooltip {...args} />;

export const Default = Template.bind({});
Default.args = {
  // Add default props here
};

export const WithContent = Template.bind({});
WithContent.args = {
  // Add props to display tooltip with content
};