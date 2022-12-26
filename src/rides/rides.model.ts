export class Ride {
  constructor(
    public start_address: string,
    public destination_address: string,
    public distance: number,
    public price: number,
    public date: any,
  ) {}
}
