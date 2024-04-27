import { User } from '../models/user';
import { GetCollecton } from '../mongoConfiguration/mongoConfiguration';

export async function GetUserByEmail(email: string): Promise<User> {
	const userCollection = await GetCollecton('users');
	const user = await userCollection.findOne({ email: email });

	if (user === null || user === undefined)
		throw ("User not found");

	return new User(user.name, user.email, user.password, user._id);
}

export async function AddUser(user: User): Promise<void> {
	const userCollection = await GetCollecton('users');

	await userCollection.insertOne(user);
}
