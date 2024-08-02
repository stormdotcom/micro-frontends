import React from "react";
import { PlayIcon, CalendarIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";
import { convertToHumanReadableDate } from "../../../../../utils/dateUtils";

const CourseOverView = ({ data }) => {
    const { Course, updatedAt, progress, videoId } = data;
    const navigate = useNavigate();
    const handleNavigate = () => navigate(`../course/${Course.slug}/learn/lecture/${videoId}`);
    return (
        <div className="bg-gray-100 rounded-lg p-4 shadow-md">
            <div className="flex justify-between items-center mb-2">
                <p className="text-lg font-semibold">{Course.title}</p>
                <div className="flex items-center">
                    <span className="text-secondary">{progress}% </span>
                    <button className="ml-2 px-2 py-1 bg-primary text-white rounded-full flex items-center" onClick={() => handleNavigate()}>
                        <PlayIcon className="h-5 w-5 mr-1" />
                        Resume
                    </button>
                </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                <div
                    className="bg-primary h-2 rounded-full"
                    style={{ width: `${progress}%` }}
                ></div>
            </div>
            <p className="text-sm text-secondary flex items-center">
                <CalendarIcon className="h-5 w-5 mr-1" />
                Last Accessed: {convertToHumanReadableDate(updatedAt)}
            </p>
        </div>
    );
};

export default CourseOverView;
