import { useState } from "react";
import type { ServiceStatus } from "../types";

export function NewServiceForm() {
  const [clientName, setClientName] = useState("");
  const [deviceModel, setDeviceModel] = useState("");
  const [defect, setDefect] = useState("");
  const [status, setStatus] = useState<ServiceStatus>("Aberto");

  return (
    <form className="mx-auto w-full max-w-7xl shrink-0 space-y-4 rounded-lg border border-border bg-surface px-6 py-6">
      <h2 className="font-heading text-xl font-semibold text-foreground">
        Nova Ordem de Serviço
      </h2>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.2fr_1.2fr_1.2fr_0.8fr_1fr] lg:items-end">
        <div className="flex flex-col gap-1">
          <label htmlFor="clientName" className="text-sm text-muted-foreground">
            Cliente
          </label>
          <input
            id="clientName"
            type="text"
            placeholder="Nome do cliente"
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
            className="h-10 rounded border border-border bg-input px-3 py-2 text-foreground placeholder-muted-foreground"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="deviceModel" className="text-sm text-muted-foreground">
            Modelo do Aparelho
          </label>
          <input
            id="deviceModel"
            type="text"
            placeholder="Indique o nome do aparelho"
            value={deviceModel}
            onChange={(e) => setDeviceModel(e.target.value)}
            className="h-10 rounded border border-border bg-input px-3 py-2 text-foreground placeholder-muted-foreground"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="defect" className="text-sm text-muted-foreground">
            Defeito
          </label>
          <input
            id="defect"
            type="text"
            placeholder="Indique o defeito do aparelho"
            value={defect}
            onChange={(e) => setDefect(e.target.value)}
            className="h-10 rounded border border-border bg-input px-3 py-2 text-foreground placeholder-muted-foreground"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="status" className="text-sm text-muted-foreground">
            Status
          </label>
          <div className="relative">
            <select
              id="status"
              value={status}
              onChange={(e) => setStatus(e.target.value as ServiceStatus)}
              className="h-10 w-full appearance-none rounded border border-border bg-input px-3 py-2 pr-10 text-foreground"
            >
              <option value="Aberto">Aberto</option>
              <option value="Finalizado">Finalizado</option>
            </select>

            <svg
              className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 transform text-muted-foreground"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>

        <button
          type="button"
          className="h-10 w-full rounded bg-[image:var(--gradient-button)] px-4 font-heading font-semibold text-white transition-opacity hover:opacity-90 lg:h-11"
        >
          Salvar
        </button>
      </div>
    </form>
  );
}
