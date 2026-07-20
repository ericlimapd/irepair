import { useState } from "react";
import { createServiceOrder } from "../services/serviceOrderService";
import type { Client, ServiceOrder, ServiceOrderStatus } from "../types";

interface NewServiceOrderFormProps {
  clients: Client[];
  onServiceOrderCreated: (serviceOrder: ServiceOrder) => void;
}

export const NewServiceOrderForm = ({
  clients,
  onServiceOrderCreated,
}: NewServiceOrderFormProps) => {
  const [clientId, setClientId] = useState("");
  const [device, setDevice] = useState("");
  const [issue, setIssue] = useState("");
  const [status, setStatus] = useState<ServiceOrderStatus>("open");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const hasClients = clients.length > 0;

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const created = await createServiceOrder({
        clientId: Number(clientId),
        device,
        issue,
        status,
      });
      onServiceOrderCreated(created);
      setClientId("");
      setDevice("");
      setIssue("");
      setStatus("open");
    } catch {
      setError("Não foi possível registrar a ordem de serviço.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto w-full max-w-7xl shrink-0 space-y-4 rounded-lg border border-border bg-surface px-6 py-6"
    >
      <h2 className="font-heading text-xl font-semibold text-foreground">
        Nova Ordem de Serviço
      </h2>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.2fr_1.2fr_1.2fr_0.8fr_1fr] lg:items-end">
        <div className="flex flex-col gap-1">
          <label htmlFor="clientId" className="text-sm text-muted-foreground">
            Cliente
          </label>
          <div className="relative">
            <select
              id="clientId"
              value={clientId}
              onChange={(event) => setClientId(event.target.value)}
              required
              disabled={!hasClients}
              className="h-10 w-full appearance-none rounded border border-border bg-input px-3 py-2 pr-10 text-foreground disabled:cursor-not-allowed disabled:opacity-60"
            >
              <option value="" disabled>
                {hasClients ? "Selecione um cliente" : "Nenhum cliente cadastrado"}
              </option>
              {clients.map((client) => (
                <option key={client.id} value={client.id}>
                  {client.name}
                </option>
              ))}
            </select>

            <svg
              className="pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 transform text-muted-foreground"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="device" className="text-sm text-muted-foreground">
            Modelo do Aparelho
          </label>
          <input
            id="device"
            type="text"
            placeholder="Indique o nome do aparelho"
            value={device}
            onChange={(event) => setDevice(event.target.value)}
            required
            className="h-10 rounded border border-border bg-input px-3 py-2 text-foreground placeholder-muted-foreground"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="issue" className="text-sm text-muted-foreground">
            Defeito
          </label>
          <input
            id="issue"
            type="text"
            placeholder="Indique o defeito do aparelho"
            value={issue}
            onChange={(event) => setIssue(event.target.value)}
            required
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
              onChange={(event) =>
                setStatus(event.target.value as ServiceOrderStatus)
              }
              className="h-10 w-full appearance-none rounded border border-border bg-input px-3 py-2 pr-10 text-foreground"
            >
              <option value="open">Aberto</option>
              <option value="done">Finalizado</option>
            </select>

            <svg
              className="pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 transform text-muted-foreground"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting || !hasClients}
          className="h-10 w-full rounded bg-[image:var(--gradient-button)] px-4 font-heading font-semibold text-white transition-opacity hover:opacity-90 hover:cursor-pointer disabled:cursor-not-allowed disabled:opacity-60 lg:h-11"
        >
          {isSubmitting ? "Salvando..." : "Salvar"}
        </button>
      </div>

      {error && <p className="text-sm text-destructive">{error}</p>}
    </form>
  );
};
