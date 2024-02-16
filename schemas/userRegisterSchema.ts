import * as yup from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const userRegisterValidationSchema = yup.object({
  name: yup
    .string()
    .required("Name is required")
    .min(5, "Name must be at least 5 characters"),
  userName: yup
    .string()
    .required("UserName is required")
    .min(5, "Username must be at least 5 characters"),
  password: yup
    .string()
    .required("Password is required")
    .min(5, "Password must be at least 5 characters"),
  confirmPassword: yup
    .string()
    .required("Confirm Password is required")
    .oneOf([yup.ref("password")], "Passwords must match"),
  telephone: yup.string().matches(phoneRegExp, "Phone number is not valid"),
  email: yup.string().email("Email is not valid").required("Email is required"),
  address: yup.string().required(),
});
