export class MicroCMS {
  constructor(
    public id: string,
    public title: string,
    public date: string,
    public thumbnail: { url: string },
    public body: string
  ) {}
}