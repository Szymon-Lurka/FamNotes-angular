export class User {
  constructor(
    public login: string,
    public id: string,
    public groupID: string = null,
    public groupTitle: string = null,
    public groupDescription: string = null,
    public groupTag: string = null,
  ) {}
}
