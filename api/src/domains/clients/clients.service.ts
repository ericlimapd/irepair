import { prisma } from "../../config/prismaClient";

interface CreateClientData {
  name: string;
  phone: string;
  email: string;
}

export class ClientsService {
  async getAll() {
    return prisma.client.findMany({ orderBy: { createdAt: "desc" } });
  }

  async create(data: CreateClientData) {
    return prisma.client.create({ data });
  }

  async delete(id: number) {
    await prisma.client.delete({ where: { id } });
  }
}
