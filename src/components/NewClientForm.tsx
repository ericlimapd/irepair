import { useState } from "react";
import { createClient } from "../services/clientService";
import { formatPhone } from "../utils/formatPhone";
import type { Client } from "../types";

interface NewClientFormProps {
  onClientCreated: (client: Client) => void;
}

export const NewClientForm = ({ onClientCreated }: NewClientFormProps) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const created = await createClient({ name, phone, email });
      onClientCreated(created);
      setName("");
      setPhone("");
      setEmail("");
    } catch {
      setError("Não foi possível cadastrar o cliente.");
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
        Novo Cliente
      </h2>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.4fr_1fr_1.4fr_0.8fr] lg:items-end">
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="text-sm text-muted-foreground">
            Nome
          </label>
          <input
            id="name"
            type="text"
            placeholder="Nome do cliente"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
            className="h-10 rounded border border-border bg-input px-3 py-2 text-foreground placeholder-muted-foreground"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="phone" className="text-sm text-muted-foreground">
            Telefone
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="(00) 00000-0000"
            value={phone}
            onChange={(event) => setPhone(formatPhone(event.target.value))}
            required
            minLength={14}
            className="h-10 rounded border border-border bg-input px-3 py-2 text-foreground placeholder-muted-foreground"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-sm text-muted-foreground">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="email@exemplo.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
            className="h-10 rounded border border-border bg-input px-3 py-2 text-foreground placeholder-muted-foreground"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="h-10 w-full rounded bg-[image:var(--gradient-button)] px-4 font-heading font-semibold text-white transition-opacity hover:opacity-90 hover:cursor-pointer disabled:cursor-not-allowed disabled:opacity-60 lg:h-11"
        >
          {isSubmitting ? "Salvando..." : "Salvar"}
        </button>
      </div>

      {error && <p className="text-sm text-destructive">{error}</p>}
    </form>
  );
};
