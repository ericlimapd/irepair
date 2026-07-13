import { useState } from "react";
import { Header } from "./components/Header";
import { NewServiceForm } from "./components/NewServiceForm";
import { Services } from "./components/Services";
import type { ServiceOrder } from "./types";

export default function App() {
  const [services, setServices] = useState<ServiceOrder[]>([]);

  const handleAddService = (service: ServiceOrder) => {
    setServices((prev) => [...prev, service]);
  };

  return (
    <div className="flex flex-col lg:h-screen lg:overflow-hidden">
      <Header />
      <main className="flex flex-col gap-5 px-6 py-5 lg:min-h-0 lg:flex-1 lg:overflow-hidden">
        <NewServiceForm onAddService={handleAddService} />
        <Services services={services} />
      </main>
    </div>
  );
}
