import { prisma } from "../../config/prismaClient";

interface CreateServiceOrderData {
  clientId: number;
  device: string;
  issue: string;
  status: string;
}

export class ServiceOrdersService {
  async getAll() {
    return prisma.serviceOrder.findMany({ orderBy: { createdAt: "desc" } });
  }

  async create(data: CreateServiceOrderData) {
    return prisma.serviceOrder.create({ data });
  }

  async delete(id: number) {
    await prisma.serviceOrder.delete({ where: { id } });
  }
}
