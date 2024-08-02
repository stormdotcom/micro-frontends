import { createSlice } from "@reduxjs/toolkit";
import { STATE_REDUCER_KEY } from "./constants";
import { ACTION_TYPES } from "./actions";
import { getCounts } from "./utils";
import { UI_SEARCH_LOCATION } from "../../common/constants";

const initialState = {
    data: [],
    count: 0,
    isLoading: false,
    pagination: { offset: 0, limit: 10 },
    hasMore: false,
    search: {
        isPopoverOpen: false,
        requestInProgress: false,
        data: [...UI_SEARCH_LOCATION]
    }
};


const slice = createSlice({
    initialState,
    name: STATE_REDUCER_KEY,
    reducers: {
        clearAll: () => initialState,
        setNotification: (state, action) => {
            state.data.unshift(action.payload);
            if (!action.payload.hasRead) {
                state.count += 1;
            }
        },
        setPagination: (state, { payload }) => {
            state.pagination = payload;
        },
        setPopover: (state, { payload }) => {
            state.search.isPopoverOpen = payload;
        },
        readNotification: (state, action) => {

            const newData = state.data.map(notification =>
                notification.id === action.payload
                    ? { ...notification, hasRead: true }
                    : notification
            );
            state.count = state.count - 1;
            state.data = newData;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(ACTION_TYPES.NOTIFICATION_LIST_REQUEST, (state) => {
                state.isLoading = true;
            })
            .addCase(ACTION_TYPES.NOTIFICATION_LIST_SUCCESS, (state, { payload }) => {
                state.data = payload.data.notifications;
                state.isLoading = false;
                state.hasMore = payload.data.notifications.hasMore;
                state.count += getCounts(payload.data.notifications);
            })
            .addCase(ACTION_TYPES.NOTIFICATION_LIST_FAILURE, (state) => {
                state.isLoading = false;
            })
            .addCase(ACTION_TYPES.SEARCH_REQUEST, (state) => {
                state.search.requestInProgress = true;
            })
            .addCase(ACTION_TYPES.SEARCH_SUCCESS, (state, { payload }) => {
                state.search.requestInProgress = false;
                state.search.data = payload.data;
            })
            .addCase(ACTION_TYPES.SEARCH_FAILURE, (state) => {
                state.search.requestInProgress = false;
            });
    }
});

export const { actions, reducer } = slice;
