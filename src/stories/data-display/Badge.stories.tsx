import React from 'react';
import { Meta, Story } from '@storybook/react';
import Badge, { BadgeProps } from '../../components/data-display/Badge';

export default {
  title: 'Data Display/Badge',
  component: Badge,
  argTypes: {
    color: { control: 'color' },
  },
} as Meta;

const Template: Story<BadgeProps> = (args) => <Badge {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Default Badge',
  color: 'gray',
};

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary Badge',
  color: 'blue',
};