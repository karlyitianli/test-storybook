import React from 'react';
import {
  List as MuiList,
  ListProps as MUIListProps
} from '@mui/material';

export interface ListProps extends MUIListProps {
  /**
   * The content of the list.
   */
  children?: React.ReactNode;
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used for the list and list items.
   * The prop is available to descendant components as the `dense` context.
   * @default false
   */
  dense?: boolean;
  /**
   * If `true`, vertical padding is removed from the list.
   * @default false
   */
  disablePadding?: boolean;
  /**
   * The content of the subheader, normally `ListSubheader`.
   */
  subheader?: React.ReactNode;

}

export const List: React.FC<ListProps> = ({ children, ...props }) => {
    return <MuiList {...props}>{children}</MuiList>;
};

export default List;
