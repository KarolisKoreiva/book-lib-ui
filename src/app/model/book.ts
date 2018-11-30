export class Book {
  public _id: string;
  public _rev: string;

  constructor(
    public title: string,
    public author: string,
    public year: string,
    public description: string,
    public genre: string[]
  ) {}
}
