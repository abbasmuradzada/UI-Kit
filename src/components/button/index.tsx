import React from "react";
import PropTypes from "prop-types";
import { E_BUTTON_SIZES, E_BUTTON_VARIANTS } from "../../constants/enums";
import "./button.scss";
import { CircularProgress } from "@mui/material";
import { btnIconSizes } from "../../constants/objects";

/**
 * Primary UI component for user interaction
 */

interface IProps {
  variant: E_BUTTON_VARIANTS;
  size: E_BUTTON_SIZES;
  label: string;
  loader: boolean;
  icon?: React.ReactElement;
}

export const Button = ({
  variant = E_BUTTON_VARIANTS.PRIMARY,
  size = E_BUTTON_SIZES.MEDIUM,
  label,
  loader,
  icon,
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
      <div>
        {loader ? (
          <CircularProgress
            style={{ marginRight: 6 }}
            size={btnIconSizes[size]}
            color="info"
          />
        ) : (
          icon
        )}
      </div>
      {label}
    </button>
  );
};
