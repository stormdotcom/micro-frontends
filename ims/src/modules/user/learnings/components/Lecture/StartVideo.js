import React, { useEffect, useRef } from "react";

import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { STATE_REDUCER_KEY } from "../../constants";
import { fetchCurrentLecturePlaylist } from "../../actions";
import RenderAttachments from "../../../../../common/components/File/RenderAttachments";
import { HiClock } from "react-icons/hi";
import { formatDuration } from "../../../../../utils/dateUtils";
import VideoListSkelton from "../../../../../common/components/Custom/Skelton/VideoListSkelton";
import { PlayIcon } from "@heroicons/react/24/solid";
import { sentEvent } from "../../../../common/actions";
import { EVENT_TYPES } from "../../../../../common/constants";

const StartVideo = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { videoId, slug } = useParams();
    const pageVisitStartTimeRef = useRef(null);
    const { sourceUrl, videoList, videoNo, title, attachments = [], courseId, duration } = useSelector(state => state[STATE_REDUCER_KEY].currentLecture.data);
    const requestInProgress = useSelector(state => state[STATE_REDUCER_KEY].currentLecture.requestInProgress);
    const latestDuration = useSelector(state => state[STATE_REDUCER_KEY].currentLecture.duration);
    useEffect(() => {
        dispatch(fetchCurrentLecturePlaylist(videoId));
    }, [dispatch, videoId, courseId]);
    // /course/sd/learn
    const handleVideoClick = ({ id }) => {
        navigate(`../course/${slug}/learn/lecture/${id}`);
    };
    useEffect(() => {
        pageVisitStartTimeRef.current = Date.now();
        return () => {
            const pageVisitEndTime = Date.now();
            const timeSpentOnPage = (pageVisitEndTime - pageVisitStartTimeRef.current) / 1000;
            dispatch(sentEvent({ type: EVENT_TYPES.PAGE_VISIT_DURATION, durationInSeconds: timeSpentOnPage, courseId, videoId, pageName: "lecture" }));
        };
    }, []);

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">
            <div className="col-span-2 w-full px-2">

                <div className="w-full border rounded px-4 py-2 lg:mt-10 flex flex-col">
                    <p className="font-bold">Lecture Attachments</p>
                    <div className="flex flex-wrap">
                        {attachments && attachments.length > 0 ? (
                            attachments.map((attachment, idx) => (
                                <div key={idx}>
                                    <RenderAttachments attachment={attachment} source="remote" />
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-400 text-sm pt-3"> No Lecture attachments...</p>
                        )}
                    </div>

                </div>
            </div>
            <div className="col-span-1 p-4 overflow-y-auto h-screen md:border-l md:border-b border-gray-300">
                <h2 className="text-xl font-semibold mb-4">{"Course Content"}</h2>
                <ul className="space-y-2">
                    {requestInProgress ? (
                        <VideoListSkelton length={6} />
                    ) : (
                        videoList.map((content, index) => (
                            <li
                                key={index}
                                className={"relative cursor-pointer hover:bg-gray-50 text-gray-700 xs:text-sm"}
                                onClick={() => handleVideoClick(content)}
                            >
                                <div className={`flex ${videoNo === parseInt(content.videono) ? "bg-primary text-white" : "bg-white"} justify-between p-2 w-full rounded-lg border border-gray-300 `}>
                                    <div className="flex justify-between w-full">
                                        <div className="flex space-x-3">
                                            <div>
                                                <PlayIcon className="mt-[3px] pl-1 w-5 h-5" />
                                            </div>
                                            <span className="text-lg font-semibold xs:text-sm">{content.title}</span>
                                        </div>
                                        <div className="flex pr-2 xs:text-sm">
                                            <HiClock className="mt-[3px] pl-1 w-5 h-5" />
                                            <span>{formatDuration(content.duration) || "00.00"}</span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))
                    )}
                </ul>
            </div>
        </div>
    );
};

export default StartVideo;
