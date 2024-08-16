/* eslint-disable no-unused-vars */
import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import { Button } from "../../../../common/components";
import { OPENAI_API_KEY } from "../../../../common/constants";
import { ChatGPT } from "../../../../common/components/Icons";
import { CameraIcon } from "@heroicons/react/24/solid";
import { generateJsonFromText, performOCR } from "../../../../utils/commonUtils";

const CameraCapture = ({ onImageCaptured, handleJson }) => {
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const streamRef = useRef(null);
    const [isCameraOpen, setIsCameraOpen] = useState(false);
    const [capturedImage, setCapturedImage] = useState(null);

    const startCamera = () => {
        setIsCameraOpen(true);
        navigator.mediaDevices
            .getUserMedia({ video: true })
            .then(stream => {
                streamRef.current = stream;
                videoRef.current.srcObject = stream;
            })
            .catch(err => {
                // eslint-disable-next-line no-console
                console.error("Error accessing camera: ", err);
            });
    };

    const stopCamera = () => {
        if (streamRef.current) {
            streamRef.current.getTracks().forEach(track => track.stop());
            streamRef.current = null;
        }
        setIsCameraOpen(false);
    };

    const captureImage = () => {
        const video = videoRef.current;
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        const image = canvas.toDataURL("image/png");
        setCapturedImage(image);
        stopCamera();
    };

    const processImageAndGenerateJson = async () => {
        try {
            const extractedText = await performOCR(capturedImage);
            if (extractedText) {
                const jsonResponse = await generateJsonFromText(extractedText);
                handleJson(jsonResponse);
            }
        } catch (error) {
            console.error("Error processing image and generating JSON:", error);
        }
    };

    useEffect(() => {

        return () => {
            stopCamera();
        };
    }, []);

    return (
        <div className="camera-capture">
            {!isCameraOpen ? (
                <div className="flex justify-center items-center">
                    <Button onClick={startCamera} variant="contained-primary">
                        <p>Open Camera</p>
                    </Button>
                </div>
            ) : (
                <div>
                    <video ref={videoRef} autoPlay className="w-full h-auto" />
                    <canvas ref={canvasRef} style={{ display: "none" }} width="640" height="480"></canvas>
                    <div className="flex justify-center items-center mt-4">
                        <Button onClick={captureImage} variant="contained-primary">
                            <CameraIcon className="w-4 h-4 mt-1" />  <p className="ml-1">Capture</p>
                        </Button>
                    </div>
                </div>
            )}

            {capturedImage && (
                <div className="mt-4">
                    <img src={capturedImage} alt="Captured" className="w-full h-auto" />
                    <div className="flex justify-center items-center">
                        <Button onClick={processImageAndGenerateJson} variant="contained-primary" extraClass="relative top-[-35px]" >
                            <ChatGPT className="w-4 h-4 mr-2" /> Send to GPT
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CameraCapture;
