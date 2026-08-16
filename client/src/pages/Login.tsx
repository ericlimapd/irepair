import { useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../contexts/AuthContext";
import logo from "../assets/ijunior-logo.svg";

export const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      await login(email, password);
      navigate("/");
    } catch {
      setError("Email ou senha inválidos.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center px-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm space-y-6 rounded-lg border border-border bg-surface px-6 py-8"
      >
        <div className="flex flex-col items-center gap-2">
          <img className="h-9 w-auto" src={logo} alt="Logo iJunior" />
          <span className="bg-[image:var(--gradient-logo)] bg-clip-text font-heading text-2xl font-semibold text-transparent">
            iRepair
          </span>
          <p className="font-heading text-sm text-muted-foreground">
            Entre para acessar o painel
          </p>
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-sm text-muted-foreground">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="voce@exemplo.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
            className="h-10 rounded border border-border bg-input px-3 py-2 text-foreground placeholder-muted-foreground"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="password" className="text-sm text-muted-foreground">
            Senha
          </label>
          <input
            id="password"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
            className="h-10 rounded border border-border bg-input px-3 py-2 text-foreground placeholder-muted-foreground"
          />
        </div>

        {error && <p className="text-sm text-destructive">{error}</p>}

        <button
          type="submit"
          disabled={isSubmitting}
          className="h-10 w-full rounded bg-[image:var(--gradient-button)] px-4 font-heading font-semibold text-white transition-opacity hover:opacity-90 hover:cursor-pointer disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? "Entrando..." : "Entrar"}
        </button>
      </form>
    </div>
  );
};
