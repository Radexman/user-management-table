import { z } from 'zod';

// Define the schema for a single user
const userSchema = z.object({
	id: z.number(),
	name: z.string(),
	username: z.string(),
	email: z.string(),
	address: z.object({
		street: z.string(),
		suite: z.string(),
		city: z.string(),
		zipcode: z.string(),
		geo: z.object({
			lat: z.string(),
			lng: z.string(),
		}),
	}),
	phone: z.string(),
	website: z.string(),
	company: z.object({
		name: z.string(),
		catchPhrase: z.string(),
		bs: z.string(),
	}),
});

// Define the schema for the array of users
export const usersSchema = z.array(userSchema);

export type User = z.infer<typeof userSchema>;
