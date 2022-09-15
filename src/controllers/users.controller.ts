import { Request, Response } from 'express';
import UserService from '../services/users.services';
import generator from '../middlewares/tokenGenerator';

class UserController {
  constructor(private userService = new UserService()) { }

  public create = async (req: Request, res: Response) => {
    const product = req.body;

    const productCreated = await this.userService.create(product);

    const token = await generator(productCreated);
    res.status(201).json({ token });
  };
}

export default UserController;