import React from 'react';
import { Meta, Story } from '@storybook/react';
import Typography from 'components/data-display/Typography';

export default {
  title: 'Data Display/Typography',
  component: Typography,
} as Meta;

const Template: Story = (args) => <Typography {...args} />;

export const Default = Template.bind({});
Default.args = {
  // Add default props here
};

export const WithText = Template.bind({});
WithText.args = {
  // Add props to display typography with text
};