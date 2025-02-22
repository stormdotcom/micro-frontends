import { CustomInput, CustomSelect, RadioButtons, Textarea, DatePicker, CheckboxGroup, DropDown } from "./components";


const FormController = ({ controlType, ...rest }) => {
    switch (controlType) {
        case "input":
            return <CustomInput {...rest} />;
        case "select":
            return <CustomSelect {...rest} />;
        case "dropDown":
            return <DropDown {...rest} />;
        case "textarea":
            return <Textarea {...rest} />;
        case "radio":
            return <RadioButtons {...rest} />;
        case "checkbox":
            return <CheckboxGroup {...rest} />;
        case "date":
            return <DatePicker {...rest} />;
        default:
            return null;
    }
};

export default FormController;
