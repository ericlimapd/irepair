import { Router } from "express";
import { ServiceOrdersController } from "./serviceOrders.controller";
import { authMiddleware } from "../../middlewares/authMiddleware";

const serviceOrdersRoutes = Router();
const serviceOrdersController = new ServiceOrdersController();

serviceOrdersRoutes.use(authMiddleware);
serviceOrdersRoutes.get("/", serviceOrdersController.getAll.bind(serviceOrdersController));
serviceOrdersRoutes.post("/", serviceOrdersController.create.bind(serviceOrdersController));
serviceOrdersRoutes.delete("/:id", serviceOrdersController.delete.bind(serviceOrdersController));

export { serviceOrdersRoutes };
