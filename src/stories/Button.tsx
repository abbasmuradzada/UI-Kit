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
