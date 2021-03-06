export class Account {
  id: number;
  username: string;
  password: string;
  firstname: string;
  lastname: string;
  role: string;
  email: string;
  phone: number;
  gender: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
