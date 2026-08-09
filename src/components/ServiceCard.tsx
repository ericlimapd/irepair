import type { ServiceOrder } from "../types";
import { getStatusStyle } from "../utils/serviceOrderStatus";

interface ServiceCardProps {
  service: ServiceOrder;
  clientName: string;
  onDelete?: (id: number) => void;
}

export const ServiceCard = ({
  service,
  clientName,
  onDelete,
}: ServiceCardProps) => {
  const { id, device, issue, status } = service;
  const statusStyle = getStatusStyle(status);

  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-border bg-card px-4 py-4">
      <div className="flex items-start justify-between gap-2">
        <div className="flex flex-col gap-0.5">
          <span className="text-xs uppercase tracking-wide text-muted-foreground">
            Cliente
          </span>
          <span className="font-heading text-base font-medium text-foreground">
            {clientName}
          </span>
        </div>

        <span
          className={`flex items-center gap-1.5 text-sm font-medium ${statusStyle.textClass}`}
        >
          <span className={`h-2 w-2 rounded-full ${statusStyle.dotClass}`} />
          {statusStyle.label}
        </span>
      </div>

      <div className="flex flex-col gap-0.5">
        <span className="text-xs uppercase tracking-wide text-muted-foreground">
          Modelo
        </span>
        <span className="font-heading text-base font-medium text-foreground">
          {device}
        </span>
      </div>

      <div className="flex flex-col gap-0.5">
        <span className="text-xs uppercase tracking-wide text-muted-foreground">
          Defeito
        </span>
        <span className="font-heading text-base font-medium text-foreground">
          {issue}
        </span>
      </div>

      {onDelete && (
        <button
          type="button"
          onClick={() => onDelete(id)}
          className="mt-1 self-end rounded border border-border px-3 py-1.5 text-sm font-medium text-destructive transition-colors hover:bg-destructive hover:text-white"
        >
          Remover
        </button>
      )}
    </div>
  );
};
