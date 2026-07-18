export type ServiceStatus = "Aberto" | "Finalizado";

export interface ServiceOrder {
  id: string;
  clientName: string;
  deviceModel: string;
  defect: string;
  status: ServiceStatus;
  createdAt: Date;
}
