import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { productValidator } from "../validator";
import { Button, FormController } from "../../../../common/components";
import { addProduct } from "../actions";
import FileUpload from "../../profile/Details/FileUpload";
import { verifyFile } from "../../../../utils/commonUtils";
import { actions as sliceActions } from "../slice";
import CameraCapture from "../../../common/components/Camera/CameraCapture";

const InventoryAdd = () => {
    const [fileError, setFileError] = useState("");
    const [isFile, setIsFile] = useState(false);
    const [fileName, setFileName] = useState("");
    const dispatch = useDispatch();

    const {
        handleSubmit,
        control
    } = useForm({
        resolver: yupResolver(productValidator)
    });

    const onSubmit = (data) => dispatch(addProduct(data));
    const handleImage = (e) => {
        setFileError("");
        setIsFile(false);
        let files = e.target.files;
        if (files && files.length > 0) {
            const { isVerified, message = "", currFileName = "" } = verifyFile(files);
            if (isVerified) {
                const currentFile = files[0];
                dispatch(sliceActions.setImage(currentFile));
                setIsFile(true);
                setFileName(currFileName);
            } else {
                setIsFile(false);
                setFileError(message);
            }
        }
    };

    const handleUpload = () => {
        setIsFile(false);
    };
    const handleJson = (data) => {
        // eslint-disable-next-line no-console
        console.log("here", data);
    };
    return (
        <div className="w-full mx-auto p-8 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
                Add Product
            </h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <FormController
                                controlType="input"
                                control={control}
                                name="category"
                                placeholder="Category"
                                label="Category"
                            />
                        </div>

                        <div>
                            <FormController
                                controlType="input"
                                control={control}
                                name="name"
                                placeholder="Product Name"
                                label="Name"
                            />
                        </div>

                        <div>
                            <FormController
                                controlType="input"
                                control={control}
                                name="sku"
                                placeholder="SKU"
                                label="SKU"
                            />
                        </div>

                        <div>
                            <FormController
                                controlType="input"
                                control={control}
                                name="price"
                                type="number"
                                placeholder="Price"
                                label="Price"
                            />
                        </div>

                        <div>
                            <FormController
                                controlType="input"
                                control={control}
                                name="stock_quantity"
                                type="number"
                                placeholder="Stock Quantity"
                                label="Stock Quantity"
                            />
                        </div>

                        <div>
                            <FormController
                                controlType="input"
                                control={control}
                                name="min_stock_level"
                                type="number"
                                placeholder="Minimum Stock Level"
                                label="Minimum Stock Level"
                            />
                        </div>
                        <div>
                            <FormController
                                controlType="input"
                                control={control}
                                name="supplier_id"
                                placeholder="Supplier ID"
                                label="Supplier ID"
                            />
                        </div>
                        <div className="col-span-1 md:col-span-2">
                            <FormController
                                controlType="textarea"
                                control={control}
                                name="description"
                                placeholder="Description"
                                label="Description"
                                rows="3"
                            />
                        </div>

                        <div className="col-span-1 md:col-span-2">
                            <FormController
                                controlType="file"
                                control={control}
                                name="img"
                                label="Upload Image"
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="col-span-1 md:col-span-2">
                            <FileUpload
                                handleImage={handleImage}
                                fileError={fileError}
                                handleUpload={handleUpload}
                                isFileExists={isFile}
                                fileName={fileName}
                                label="Upload Product"
                            />
                        </div>

                    </div>
                </div>

                <div className="flex justify-end mt-6 xs:justify-center">
                    <Button
                        variant="contained-primary"
                        type="submit"
                    >
                        Save
                    </Button>
                </div>
            </form>
            <div className="col-span-1 md:col-span-2 flex justify-center mt-3">
                <CameraCapture handleJson={handleJson} />
            </div>
        </div>
    );
};

export default InventoryAdd;
