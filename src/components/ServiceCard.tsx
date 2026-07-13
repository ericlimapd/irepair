import type { ServiceOrder } from "../types";

interface ServiceCardProps {
  service: ServiceOrder;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const { clientName, deviceModel, defect, status } = service;
  const isOpen = status === "Aberto";

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
          className={`flex items-center gap-1.5 text-sm font-medium ${
            isOpen ? "text-success" : "text-destructive"
          }`}
        >
          <span
            className={`h-2 w-2 rounded-full ${
              isOpen ? "bg-success" : "bg-destructive"
            }`}
          />
          {status}
        </span>
      </div>

      <div className="flex flex-col gap-0.5">
        <span className="text-xs uppercase tracking-wide text-muted-foreground">
          Modelo
        </span>
        <span className="font-heading text-base font-medium text-foreground">
          {deviceModel}
        </span>
      </div>

      <div className="flex flex-col gap-0.5">
        <span className="text-xs uppercase tracking-wide text-muted-foreground">
          Defeito
        </span>
        <span className="font-heading text-base font-medium text-foreground">
          {defect}
        </span>
      </div>
    </div>
  );
}
