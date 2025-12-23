import React from "react";

interface CardProps {
  children: React.ReactNode;
  title?: string;
}

export function Card({ children, title }: CardProps) {
  return (
    <div
      style={{
        backgroundColor: "#f8f9fa",
        border: "1px solid #e9ecef",
        borderRadius: "8px",
        padding: "20px",
        marginBottom: "20px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      {title && (
        <h3 style={{ marginTop: 0, marginBottom: "15px", color: "#333" }}>
          {title}
        </h3>
      )}
      {children}
    </div>
  );
}
