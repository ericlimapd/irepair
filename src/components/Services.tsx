import { ServiceCard } from "./ServiceCard";
import type { ServiceOrder } from "../types";

interface ServicesProps {
  services: ServiceOrder[];
}

export function Services({ services }: ServicesProps) {
  const byMostRecent = (a: ServiceOrder, b: ServiceOrder) =>
    b.createdAt.getTime() - a.createdAt.getTime();

  const openServices = services
    .filter((service) => service.status === "Aberto")
    .sort(byMostRecent);
  const finishedServices = services
    .filter((service) => service.status === "Finalizado")
    .sort(byMostRecent);

  return (
    <section className="mx-auto flex w-full max-w-7xl flex-col rounded-lg border border-border bg-surface px-6 py-6 lg:min-h-0 lg:flex-1 lg:overflow-hidden">
      <h2 className="shrink-0 font-heading text-xl font-semibold text-foreground">
        Ordens de Serviço
      </h2>

      <div className="mt-6 space-y-6 lg:min-h-0 lg:flex-1 lg:overflow-y-auto lg:pr-2">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-success" />
            <h3 className="font-heading text-lg font-semibold text-foreground">
              Abertos
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {openServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-destructive" />
            <h3 className="font-heading text-lg font-semibold text-foreground">
              Finalizados
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {finishedServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
