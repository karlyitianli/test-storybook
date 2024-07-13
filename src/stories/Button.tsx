import React from 'react';
import Button from '@mui/material/Button';

interface ButtonProps {
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
     * Text color to use
     */
  textColor?: string;
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional border radius
   */
  borderRadius: number;
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * Should the button have ripple?
   */
  disableRipple?: boolean;
  /**
   * Optional text transform
   */
  textTransform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase';
}

/**
 * Primary UI component for user interaction
 */
export const MUIButton = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label ='Button',
  onClick,
  textColor,
  borderRadius=8,
  disableRipple=true,
  textTransform = 'none',
}: ButtonProps) => {
  const variant = primary ? 'contained' : 'outlined';

  return (
    <Button
      variant={variant}
      size={size}
      onClick={onClick}
      style={{
        backgroundColor: primary ? backgroundColor : undefined,
        color: textColor,
        borderRadius: borderRadius,
        textTransform,
      }}
      disableRipple={disableRipple}
    >
      {label}
    </Button>
  );
};