import { Link } from "react-router";

export const NotFoundPage = () => {
  return (
    <section className="mx-auto flex w-full max-w-7xl flex-col items-center gap-4 py-16 text-center">
      <h2 className="font-heading text-2xl font-semibold text-foreground">
        Página não encontrada
      </h2>
      <Link
        to="/"
        className="rounded bg-[image:var(--gradient-button)] px-4 py-2 font-heading font-semibold text-white transition-opacity hover:opacity-90"
      >
        Voltar ao Dashboard
      </Link>
    </section>
  );
};
