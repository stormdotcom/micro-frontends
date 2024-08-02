import React from "react";
import { UserIcon } from "@heroicons/react/24/solid";
import ProfileStats from "./ProfileStats";
import CourseOverView from "./CourseOverView";
import LearningProgress from "./LearningProgress";
import AchievementsOverView from "./AchievementsOverView";
import { useSelector } from "react-redux";
import { STATE_REDUCER_KEY } from "../../constants";


const CourseStats = () => {
    const { userProfile: { firstName = "", lastName = "", options: { bio } = {} } = {}, lastAccessed = [], overAllProgress = 0 } = useSelector(state => state[STATE_REDUCER_KEY].dashboard.data);
    return (
        <div className="h-[45vh] overflow-y-scroll px-4 py-2 bg-white rounded-lg shadow-md">
            <div className="flex items-center mb-4">
                <UserIcon className="h-16 w-16 text-secondary mr-4" />
                <div>
                    <p className="text-2xl font-bold">{`${firstName} ${lastName}`}</p>
                    <p className="text-sm italic text-secondary">{bio}</p>
                </div>
            </div>

            <ProfileStats overAllProgress={overAllProgress} />

            {(lastAccessed.length > 0) && <div className="mt-6">
                <p className="text-lg font-semibold mb-2">Continue  Watching</p>
                <div className="grid grid-cols-1 gap-4">
                    {/* <CourseOverView />
                    <CourseOverView />
                    <CourseOverView /> */}
                    {lastAccessed.map((item, idx) => <div key={idx}>
                        <CourseOverView data={item} />
                    </div>

                    )}
                </div>
            </div>}

            <LearningProgress />
            <AchievementsOverView />
        </div>
    );
};

export default CourseStats;
