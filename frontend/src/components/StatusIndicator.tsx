import React from "react";

interface StatusIndicatorProps {
  status: "development" | "production";
}

const StatusIndicator: React.FC<StatusIndicatorProps> = ({ status }) => {
  // Derive UI from props — deterministic rendering (no hidden state)
  const color = status === "development" ? "bg-yellow-400" : "bg-green-500";
  const text = status === "development" ? "In Development" : "Live";

  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1 mt-4 rounded-full text-sm ${color} text-white`}
    >
      <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
      {text}
    </div>
  );
};

export default StatusIndicator;
