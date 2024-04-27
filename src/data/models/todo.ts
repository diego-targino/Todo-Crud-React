import { ObjectId } from "mongodb";

export class Todo {
	constructor(
		public description: string,
		public completed: boolean,
		public userId: ObjectId,
		public _id?: ObjectId
	) { }
}