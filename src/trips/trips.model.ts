import { RequestBody } from './requestBody.model';

export class Trip extends RequestBody {
  constructor(
    public start_address: string,
    public destination_address: string,
    public distance: any,
    public price: number,
    public date: Date,
  ) {
    super(start_address, destination_address, price, date);
  }
}
