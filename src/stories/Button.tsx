import React from 'react';
import Button from '@mui/material/Button';

interface ButtonProps {
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * Optional box shadow
   */
  boxShadow?: string;
  /**
     * Text color to use
     */
  textColor?: string;
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional text transform
   */
  textTransform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase';
  /**
   * Optional text decoration
   */
  textDecoration?: 'none' | 'underline' | 'overline' | 'line-through';
  /**
   * Optional font family
   */
  fontFamily?: string;
  /**
   * Optional font weight
   */
  fontWeight?: 400 | 500 | 700;
  /**
   * Optional border radius
   */
  borderRadius: number;
  /**
   * Optional border color
   */
  borderColor: string;
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
}

/**
 * Primary UI component for user interaction
 */
export const MUIButton = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  boxShadow='none',
  label ='Button',
  onClick,
  textColor,
  textDecoration='none',
  textTransform = 'none',
  fontFamily='Untitled sans',
  fontWeight=500,
  borderColor,
  borderRadius=8,
  disableRipple=true,
}: ButtonProps) => {
  const variant = primary ? 'contained' : 'outlined';

  return (
    <Button
      variant={variant}
      size={size}
      onClick={onClick}
      style={{
        backgroundColor: primary ? backgroundColor : undefined,
        boxShadow: boxShadow,
        color: textColor,
        textTransform,
        textDecoration,
        borderColor: borderColor,
        borderRadius: borderRadius,
        fontFamily: fontFamily,
        fontWeight: fontWeight,
        
      }}
      disableRipple={disableRipple}
    >
      {label}
    </Button>
  );
};