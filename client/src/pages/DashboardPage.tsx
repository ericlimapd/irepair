import { useEffect, useState } from "react";
import { Services } from "../components/Services";
import { Loading } from "../components/Loading";
import { getAllServiceOrders } from "../services/serviceOrderService";
import { getAllClients } from "../services/clientService";
import type { Client, ServiceOrder } from "../types";

export const DashboardPage = () => {
  const [serviceOrders, setServiceOrders] = useState<ServiceOrder[]>([]);
  const [clients, setClients] = useState<Client[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadData() {
      try {
        const [orders, clientList] = await Promise.all([
          getAllServiceOrders(),
          getAllClients(),
        ]);
        setServiceOrders(orders);
        setClients(clientList);
      } catch {
        setError("Não foi possível carregar as ordens de serviço.");
      } finally {
        setIsLoading(false);
      }
    }

    loadData();
  }, []);

  const clientNameOf = (clientId: number) => {
    const client = clients.find((item) => item.id === clientId);
    return client ? client.name : "Cliente removido";
  };

  if (isLoading) return <Loading label="Carregando ordens de serviço..." />;

  if (error)
    return (
      <p className="mx-auto w-full max-w-7xl text-destructive">{error}</p>
    );

  return <Services services={serviceOrders} clientNameOf={clientNameOf} />;
};
