export class MicroCMS {
  constructor(
    public id: string,
    public title: string,
    public date: string,
    public url: string,
    public thumbnail: { url: string }
  ) {}
}