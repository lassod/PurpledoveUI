import { z } from "zod";

export const formSchemaContact = z.object({
	firstname: z.string().min(2, "First name field is required.").default(""),
	lastname: z.string().min(2, "Last name field is required.").default(""),
	company: z.string().min(2, "Company field is required.").default(""),
	email: z.string().min(2, "Email field is required.").default(""),
	country: z.string().default("US"),
	phone: z.string().min(2, "Phone number field is required.").default(""),
	industry: z.string().min(2, "Industry field is required.").default(""),
});
