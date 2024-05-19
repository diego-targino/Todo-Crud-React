import { FieldValues } from "react-hook-form";

export const confirmPasswordValidation = (value: any, fields: FieldValues) => {
	const { password } = fields;
	return value === password;
}