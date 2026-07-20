import { useEffect, useState } from "react";
import { ClientCard } from "../components/ClientCard";
import { Loading } from "../components/Loading";
import { getAllClients } from "../services/clientService";
import type { Client } from "../types";

export const ClientsPage = () => {
  const [clients, setClients] = useState<Client[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadClients() {
      try {
        const data = await getAllClients();
        setClients(data);
      } catch {
        setError("Não foi possível carregar os clientes.");
      } finally {
        setIsLoading(false);
      }
    }

    loadClients();
  }, []);

  return (
    <section className="mx-auto flex w-full max-w-7xl flex-col rounded-lg border border-border bg-surface px-6 py-6 lg:min-h-0 lg:flex-1 lg:overflow-hidden">
      <h2 className="shrink-0 font-heading text-xl font-semibold text-foreground">
        Clientes
      </h2>

      <div className="mt-6 lg:min-h-0 lg:flex-1 lg:overflow-y-auto lg:pr-2">
        {isLoading && <Loading label="Carregando clientes..." />}

        {error && <p className="text-destructive">{error}</p>}

        {!isLoading && !error && clients.length === 0 && (
          <p className="text-muted-foreground">
            Nenhum cliente cadastrado ainda.
          </p>
        )}

        {!isLoading && !error && clients.length > 0 && (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {clients.map((client) => (
              <ClientCard key={client.id} client={client} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
