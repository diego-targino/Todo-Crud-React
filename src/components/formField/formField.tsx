import "./formField.style.css";
import { ReactElement } from "react";
import { UseFormRegister, ValidationRule } from "react-hook-form";
import { confirmPasswordValidation } from "../../utils/validations/confirmPassword";

type FormFildProps = {
  fieldName: string;
  label: string;
  required?: boolean;
  register: UseFormRegister<any>;
  patther?: ValidationRule<RegExp>;
  type: "text" | "password" | "number" | "color";
  error?: boolean;
  errorMessage?: string;
};

export function FormField(props: FormFildProps): ReactElement<FormFildProps> {
  return (
    <div className="form-group">
      <label className="input-label">{props.label}</label>
      <input
        className="form-input"
        type={props.type}
        {...props.register(props.fieldName, {
          required: props.required,
          pattern: props.patther,
          validate: {
            confirmPassword: (value, formValues) => {
              if (props.fieldName === "confirmPassword")
                return confirmPasswordValidation(value, formValues);
            },
          },
        })}
      />
      {props.error ? <p className="field-error">{props.errorMessage}</p> : null}
    </div>
  );
}
