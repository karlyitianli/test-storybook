import React from 'react';
import { Meta, Story } from '@storybook/react';
import List from '../../components/data-display/List';

export default {
  title: 'Data Display/List',
  component: List,
} as Meta;

const Template: Story<ListProps> = (args) => <List {...args} />;

export const Default = Template.bind({});
Default.args = {};
