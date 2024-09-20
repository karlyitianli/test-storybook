import React from 'react';
import { Meta, Story } from '@storybook/react';
import Chip from '../../components/data-display/Chip';
import { ChipProps } from '../../components/data-display/Chip';

export default {
  title: 'Data Display/Chip',
  component: Chip,
} as Meta;

const Template: Story<ChipProps> = (args) => <Chip {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Default Chip',
};

export const Deletable = Template.bind({});
Deletable.args = {
  label: 'Deletable Chip',
  onDelete: () => alert('Chip deleted'),
};