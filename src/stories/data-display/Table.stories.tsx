import React from 'react';
import { Meta, Story } from '@storybook/react';
import Table from 'components/data-display/Table';

export default {
  title: 'Data Display/Table',
  component: Table,
} as Meta;

const Template: Story = (args) => <Table {...args} />;

export const Default = Template.bind({});
Default.args = {
  // Add default props here
};

export const WithData = Template.bind({});
WithData.args = {
  // Add props to display table with data
};