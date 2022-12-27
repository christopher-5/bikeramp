export class Trip {
  constructor(
    public start_address: string,
    public destination_address: string,
    public distance: number,
    public price: number,
    public date: any,
  ) {}
}
