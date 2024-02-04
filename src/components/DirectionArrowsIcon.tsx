import { useTheme } from "@storybook/theming";
import React, { useState } from "react";

export const DirectionArrowsIcon = ({
  direction,
}: {
  direction: "ltr" | "rtl";
}) => {
  const theme = useTheme();
  return (
    <div
      style={{
        width: "20px",
        height: "20px",
        position: "relative",
      }}
    >
      <div
        style={{
          marginBottom: "-45%",
          top: 0,
          display: "flex",
          justifyContent: "center",
          backgroundColor: "transparent",
          width: "100%",
          transition: "transform 0.3s",
          transform:
            direction === "rtl" ? "scale(0.5) translate(0, -35%)" : "scale(1)",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          style={{
            transition: "fill 0.3s",

            fill:
              direction === "ltr" ? theme.barSelectedColor : theme.barTextColor,
            height: "100%",
            width: "80%",
          }}
        >
          <path d="M502.6 278.6l-128 128c-12.51 12.51-32.76 12.49-45.25 0c-12.5-12.5-12.5-32.75 0-45.25L402.8 288H32C14.31 288 0 273.7 0 255.1S14.31 224 32 224h370.8l-73.38-73.38c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l128 128C515.1 245.9 515.1 266.1 502.6 278.6z" />
        </svg>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "transparent",
          width: "100%",
          scale: direction === "rtl" ? 1 : 0.5,
          transition: "transform 0.3s",
          transform:
            direction === "ltr"
              ? "scale(0.5) translate(0, -1px)"
              : "scale(1) translate(0, -20%)",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          style={{
            transition: "fill 0.3s",

            fill:
              direction === "rtl" ? theme.barSelectedColor : theme.barTextColor,
            transform: "rotate(180deg)",
            height: "100%",
            width: "80%",
          }}
        >
          <path d="M502.6 278.6l-128 128c-12.51 12.51-32.76 12.49-45.25 0c-12.5-12.5-12.5-32.75 0-45.25L402.8 288H32C14.31 288 0 273.7 0 255.1S14.31 224 32 224h370.8l-73.38-73.38c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l128 128C515.1 245.9 515.1 266.1 502.6 278.6z" />
        </svg>
      </div>
    </div>
  );
};
