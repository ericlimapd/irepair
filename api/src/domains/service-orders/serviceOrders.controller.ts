import { Request, Response } from "express";
import { ServiceOrdersService } from "./serviceOrders.service";

const serviceOrdersService = new ServiceOrdersService();

export class ServiceOrdersController {
  async getAll(_req: Request, res: Response) {
    const serviceOrders = await serviceOrdersService.getAll();
    res.status(200).json(serviceOrders);
  }

  async create(req: Request, res: Response) {
    const { clientId, device, issue, status } = req.body;
    const serviceOrder = await serviceOrdersService.create({
      clientId,
      device,
      issue,
      status,
    });
    res.status(201).json(serviceOrder);
  }

  async delete(req: Request, res: Response) {
    const id = Number(req.params.id);
    await serviceOrdersService.delete(id);
    res.status(204).send();
  }
}
