export interface IDemo {
  id?: number;
  demofield?: string;
}

export class Demo implements IDemo {
  constructor(public id?: number, public demofield?: string) {}
}
