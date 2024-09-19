import React from 'react';
import { Meta, Story } from '@storybook/react';
import Icons, { IconProps } from '../../components/data-display/Icons';

export default {
  title: 'Data Display/Icons',
  component: Icons,
  argTypes: {
    size: { control: 'number' },
    color: { control: 'color' },
  },
} as Meta;

const Template: Story<IconProps> = (args) => <Icons {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'home',
  size: 24,
  color: 'black',
};

export const Large = Template.bind({});
Large.args = {
  name: 'settings',
  size: 48,
  color: 'blue',
};