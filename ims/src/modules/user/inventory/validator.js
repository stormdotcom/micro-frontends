import * as yup from "yup";


export const productValidator = yup.object().shape({
    category: yup.string().required("Category is required"),
    description: yup.string().required("Description is required"),
    img: yup.string().url("Image must be a valid URL").required("Image URL is required"),
    min_stock_level: yup
        .number()
        .typeError("Minimum Stock Level must be a number")
        .required("Minimum Stock Level is required")
        .min(0, "Minimum Stock Level cannot be negative"),
    name: yup.string().required("Product Name is required"),
    price: yup
        .number()
        .typeError("Price must be a number")
        .required("Price is required")
        .positive("Price must be a positive number"),
    sku: yup.string().required("SKU is required"),
    stock_quantity: yup
        .number()
        .typeError("Stock Quantity must be a number")
        .required("Stock Quantity is required")
        .min(0, "Stock Quantity cannot be negative"),
    supplier_id: yup.string().required("Supplier ID is required")
});
