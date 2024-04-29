import { ObjectId } from "mongodb";

export class Category {
	constructor(public name: string, public color: string, public _id?: ObjectId) { }
}