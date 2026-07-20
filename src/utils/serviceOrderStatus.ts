import type { ServiceOrderStatus } from "../types";

interface StatusStyle {
  label: string;
  textClass: string;
  dotClass: string;
}

const statusStyles: Record<ServiceOrderStatus, StatusStyle> = {
  open: { label: "Aberto", textClass: "text-success", dotClass: "bg-success" },
  in_progress: {
    label: "Em andamento",
    textClass: "text-warning",
    dotClass: "bg-warning",
  },
  done: {
    label: "Finalizado",
    textClass: "text-destructive",
    dotClass: "bg-destructive",
  },
};

export function getStatusStyle(status: ServiceOrderStatus): StatusStyle {
  return statusStyles[status];
}
