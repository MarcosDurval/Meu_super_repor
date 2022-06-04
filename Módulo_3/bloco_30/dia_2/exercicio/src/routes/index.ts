// src/Routes/Router.ts

import { Router } from 'express';
import Controller from '../controllers';

class CustomRouter<T> {
  public router: Router;

  constructor() {
    this.router = Router();
  }

  public addRoute(
    route: string,
    controller: Controller<T>,
  ) {
    this.router.post(route, async (req, res) => {
      console.log(route);
      const data = await controller.create(req.body);
      return res.status(200).json(data);
    });
    this.router.get(`${route}/:id`, controller.readOne);
    this.router.post(route, controller.create);
  }
}

export default CustomRouter;