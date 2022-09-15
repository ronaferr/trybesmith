import jwt from 'jsonwebtoken';

import User from '../interfaces/users.interface';

export default function generator(user: User): string {
  const token = jwt.sign({ data: user.username }, 'secret', { expiresIn: '1d' });
  return token;
}
