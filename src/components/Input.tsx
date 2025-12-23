import React from "react";

interface InputProps {
  value: string;
  onChange: (value: string) => void;
  onKeyPress?: (e: React.KeyboardEvent) => void;
  placeholder?: string;
  autoFocus?: boolean;
  type?: string;
}

export function Input({
  value,
  onChange,
  onKeyPress,
  placeholder = "",
  autoFocus = false,
  type = "text",
}: InputProps) {
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onKeyPress={onKeyPress}
      placeholder={placeholder}
      autoFocus={autoFocus}
      style={{
        padding: "8px 12px",
        border: "1px solid #ccc",
        borderRadius: "4px",
        fontSize: "1em",
        marginRight: "8px",
        minWidth: "250px",
      }}
    />
  );
}
