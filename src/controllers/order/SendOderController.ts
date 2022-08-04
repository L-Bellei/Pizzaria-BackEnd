import { Request, Response } from "express";
import { SendOrderService } from "../../services/order/SendOderService";

class SendOrderController {
  async handle(req: Request, res: Response) {

    const order_id = req.body.order_id as string;

    const sendOrderService = new SendOrderService();

    const order = await sendOrderService.execute({
      order_id,
    });

    return res.json(order);
  }
}

export { SendOrderController };