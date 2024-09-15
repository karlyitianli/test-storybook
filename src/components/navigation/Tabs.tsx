import React from 'react';
import Tabs, { TabsProps as MUITabsProps } from '@mui/material/Tabs';

export interface TabsProps extends MUITabsProps {
  // Add any custom props here
}

export const MUITabs: React.FC<TabsProps> = ({ children, ...props }) => {
  return <Tabs {...props}>{children}</Tabs>;
};