interface EmptyStateProps {
  icon?: string;
  title: string;
  message?: string;
}

export function EmptyState({
  icon = "📭",
  title,
  message = "Nenhum dado disponível",
}: EmptyStateProps) {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "40px 20px",
        color: "#999",
      }}
    >
      <div style={{ fontSize: "48px", marginBottom: "15px" }}>{icon}</div>
      <h3 style={{ margin: "10px 0" }}>{title}</h3>
      <p style={{ margin: "5px 0" }}>{message}</p>
    </div>
  );
}
