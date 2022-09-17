import React from "react";
import PropTypes from "prop-types";
import { E_BUTTON_SIZES, E_BUTTON_VARIANTS } from "../constants/enums";
import "./button.scss";

/**
 * Primary UI component for user interaction
 */

interface IProps {
  variant: E_BUTTON_VARIANTS;
  size: E_BUTTON_SIZES;
  label: string;
}

export const Button = ({
  variant = E_BUTTON_VARIANTS.PRIMARY,
  size = E_BUTTON_SIZES.MEDIUM,
  label,
  ...props
}: IProps) => {
  const mode = `storybook-button--${variant}`;
  return (
    <button
      type="button"
      disabled={variant === "disabled"}
      className={["storybook-button", `storybook-button--${size}`, mode].join(
        " "
      )}
      {...props}
    >
      {label}
    </button>
  );
};

// Button.propTypes = {
//   /**
//    * Is this the principal call to action on the page?
//    */
//   variant: PropTypes.oneOf(["primary", "secondary", "outlined", "disabled"]),
//   /**
//    * What background color to use
//    */
//   backgroundColor: PropTypes.string,
//   /**
//    * How large should the button be?
//    */
//   size: PropTypes.oneOf(["small", "medium", "large"]),
//   /**
//    * Button contents
//    */
//   label: PropTypes.string.isRequired,
//   /**
//    * Optional click handler
//    */
//   onClick: PropTypes.func,
// };

// Button.defaultProps = {
//   backgroundColor: null,
//   variant: "primary",
//   size: "medium",
//   onClick: undefined,
// };
