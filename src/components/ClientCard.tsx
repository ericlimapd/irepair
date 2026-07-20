import type { Client } from "../types";

interface ClientCardProps {
  client: Client;
  onDelete?: (id: number) => void;
}

export const ClientCard = ({ client, onDelete }: ClientCardProps) => {
  const { id, name, phone, email } = client;

  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-border bg-card px-4 py-4">
      <div className="flex flex-col gap-0.5">
        <span className="text-xs uppercase tracking-wide text-muted-foreground">
          Cliente
        </span>
        <span className="font-heading text-base font-medium text-foreground">
          {name}
        </span>
      </div>

      <div className="flex flex-col gap-0.5">
        <span className="text-xs uppercase tracking-wide text-muted-foreground">
          Telefone
        </span>
        <span className="font-heading text-base font-medium text-foreground">
          {phone}
        </span>
      </div>

      <div className="flex flex-col gap-0.5">
        <span className="text-xs uppercase tracking-wide text-muted-foreground">
          Email
        </span>
        <span className="font-heading text-base font-medium text-foreground">
          {email}
        </span>
      </div>

      {onDelete && (
        <button
          type="button"
          onClick={() => onDelete(id)}
          className="mt-1 self-end rounded border border-border px-3 py-1.5 text-sm font-medium text-destructive transition-colors hover:bg-destructive hover:text-white hover:cursor-pointer"
        >
          Remover
        </button>
      )}
    </div>
  );
};
