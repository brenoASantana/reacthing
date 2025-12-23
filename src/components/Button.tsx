import React from "react";

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "danger";
  disabled?: boolean;
}

export function Button({
  onClick,
  children,
  variant = "primary",
  disabled = false,
}: ButtonProps) {
  const styleMap = {
    primary: {
      backgroundColor: "#007bff",
      color: "white",
    },
    secondary: {
      backgroundColor: "#6c757d",
      color: "white",
    },
    danger: {
      backgroundColor: "#dc3545",
      color: "white",
    },
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        ...styleMap[variant],
        padding: "8px 16px",
        border: "none",
        borderRadius: "4px",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.6 : 1,
        marginRight: "8px",
      }}
    >
      {children}
    </button>
  );
}
