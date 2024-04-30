import { ObjectId } from "mongodb";

export class Todo {
  constructor(
    public description: string,
    public completed: boolean,
    public userId: string,
    public _id?: ObjectId
  ) {}
}
