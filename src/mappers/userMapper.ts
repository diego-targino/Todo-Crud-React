import { ObjectId } from "mongodb";
import { User } from "../data/models/user";

export class UserMapper {
  static mapUser(object: any) {
    return new User(
      object.name,
      object.email,
      object.password,
      new ObjectId(object.id as string)
    );
  }
}
