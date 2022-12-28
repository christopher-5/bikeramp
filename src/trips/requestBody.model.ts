export class RequestBody {
  constructor(
    public start_address: string,
    public destination_address: string,
    public price: number,
    public date: Date,
  ) {}
}
