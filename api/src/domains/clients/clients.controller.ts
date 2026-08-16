import { Request, Response } from "express";
import { ClientsService } from "./clients.service";

const clientsService = new ClientsService();

export class ClientsController {
  async getAll(_req: Request, res: Response) {
    const clients = await clientsService.getAll();
    res.status(200).json(clients);
  }

  async create(req: Request, res: Response) {
    const { name, phone, email } = req.body;
    const client = await clientsService.create({ name, phone, email });
    res.status(201).json(client);
  }

  async delete(req: Request, res: Response) {
    const id = Number(req.params.id);
    await clientsService.delete(id);
    res.status(204).send();
  }
}
