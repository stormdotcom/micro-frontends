import { createSlice } from "@reduxjs/toolkit";
import { STATE_REDUCER_KEY } from "./constants";
import { ACTION_TYPES } from "./actions";

const initialState = {
    dashboard: {
        requestInProgress: false,
        data: {
            lastAccessed: [],
            userProfile: {},
            overAllProgress: 0
        }
    },
    learningProgress: {
        requestInProgress: false,
        data: {
            dailyGoal: 0,
            weeklyGoal: 0,
            monthlyGoal: 0,
            mileStoneAchieved: 0,
            totalLearningHours: 0
        }
    },
    achievements: {
        requestInProgress: false,
        data: []
    },
    recentActivities: {
        requestInProgress: false,
        data: []
    },
    recommendedCourse: {},
    courseList: {
        requestInProgress: false,
        data: []
    },
    isMenuOpen: false
};


const slice = createSlice({
    initialState,
    name: STATE_REDUCER_KEY,
    reducers: {
        clearAll: () => initialState,
        setMenuOpen: (state, { payload }) => {
            state.isMenuOpen = payload;
        }
    }, extraReducers: (builder) => {
        builder.addCase(ACTION_TYPES.RECENT_ACTIVITIES_REQUEST, (state) => {
            state.recentActivities.requestInProgress = true;
        }).addCase(ACTION_TYPES.RECENT_ACTIVITIES_SUCCESS, (state, { payload }) => {
            state.recentActivities.requestInProgress = false;
            state.recentActivities.data = payload;
        }).addCase(ACTION_TYPES.RECENT_ACTIVITIES_FAILURE, (state) => {
            state.recentActivities.requestInProgress = false;
        }).addCase(ACTION_TYPES.FETCH_COURSE_LIST_REQUEST, (state) => {
            state.courseList.requestInProgress = true;
        }).addCase(ACTION_TYPES.FETCH_COURSE_LIST_SUCCESS, (state, { payload }) => {
            state.courseList.requestInProgress = false;
            state.courseList.data = payload.data;
        }).addCase(ACTION_TYPES.FETCH_COURSE_LIST_FAILURE, (state) => {
            state.courseList.requestInProgress = false;
        })
            .addCase(ACTION_TYPES.DASHBOARD_REQUEST, (state) => {
                state.dashboard.requestInProgress = true;
            }).addCase(ACTION_TYPES.DASHBOARD_SUCCESS, (state, { payload }) => {
                state.dashboard.requestInProgress = false;
                state.dashboard.data = payload.data;
            }).addCase(ACTION_TYPES.DASHBOARD_FAILURE, (state) => {
                state.dashboard.requestInProgress = false;
            })
            .addCase(ACTION_TYPES.FETCH_FETCH_LEARNING_REQUEST, (state) => {
                state.learningProgress.requestInProgress = true;
            }).addCase(ACTION_TYPES.FETCH_FETCH_LEARNING_SUCCESS, (state, { payload }) => {
                state.learningProgress.requestInProgress = false;
                state.learningProgress.data = payload.data;
            }).addCase(ACTION_TYPES.FETCH_FETCH_LEARNING_FAILURE, (state) => {
                state.learningProgress.requestInProgress = false;

            });

    }
});

export const { actions, reducer } = slice;
