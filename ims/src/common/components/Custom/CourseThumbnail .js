import React from "react";
import { useNavigate } from "react-router-dom";
import { PlayIcon, VideoCameraIcon } from "@heroicons/react/24/solid";

const CourseThumbnail = ({ url, imgUrl }) => {
    const navigate = useNavigate();

    return (
        <div
            className="relative cursor-pointer group"
            onClick={() => navigate(url)}
        >
            {!imgUrl ? <VideoCameraIcon className="w-full h-20 text-secondary" /> : <img
                style={{ margin: "auto" }}
                src={imgUrl}
                alt="course_view_thumbnail"
                className="w-full"
            />
            }

            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <PlayIcon className="w-24 h-24 text-white" />
            </div>
        </div>
    );
};

export default CourseThumbnail;
