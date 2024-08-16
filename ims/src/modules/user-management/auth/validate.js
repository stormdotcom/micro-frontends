import * as yup from "yup";

export const loginValidation = yup.object().shape({
    email: yup.string().required("Email is required"),
    password: yup.string().required("Password is required"),
    savePassword: yup.boolean()
});


export const SignUpValidation = yup.object().shape({
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup.string().required("Password is required").min(3, "Password must be at least 3 characters")
});
