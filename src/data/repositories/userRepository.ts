import { Collection, Document, ObjectId } from "mongodb";
import { User } from "../models/user";
import { GetCollection } from "../mongoConfiguration/mongoConfiguration";

export class UserRepository {
  async GetUserById(id?: string): Promise<User | undefined> {
    const userCollection: Collection<Document> = await GetCollection("users");
    const user = await userCollection.findOne({ _id: new ObjectId(id) });

    if (user) return new User(user.name, user.email, user.password, user._id);
  }

  async GetUserByEmail(email: string): Promise<User | undefined> {
    const userCollection: Collection<Document> = await GetCollection("users");
    const user = await userCollection.findOne({ email: email });

    if (user) return new User(user.name, user.email, user.password, user._id);
  }

  async AddUser(user: User): Promise<void> {
    const userCollection = await GetCollection("users");

    let insertResult = await userCollection.insertOne(user);

    if (!insertResult.acknowledged) throw "falha ao salvar";
  }

  async UpdateUser(user: User): Promise<void> {
    const userCollection = await GetCollection("users");

    let query = { _id: user._id };

    let result = await userCollection.updateOne(query, { $set: user });
    if (result.matchedCount === 0) throw "usuário não encontrado";
  }
}
