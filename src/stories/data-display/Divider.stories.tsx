import React from 'react';
import { Meta, Story } from '@storybook/react';
import Divider, { DividerProps } from '../../components/data-display/Divider';

export default {
  title: 'Data Display/Divider',
  component: Divider,
  argTypes: {
    color: { control: 'color' },
    thickness: { control: 'number' },
  },
} as Meta;

const Template: Story<DividerProps> = (args) => <Divider {...args} />;

export const Default = Template.bind({});
Default.args = {
  color: 'gray',
  thickness: 1,
};

export const Thick = Template.bind({});
Thick.args = {
  color: 'black',
  thickness: 5,
};