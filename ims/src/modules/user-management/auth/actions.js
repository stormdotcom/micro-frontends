import { createAction } from "@reduxjs/toolkit";
import { STATE_REDUCER_KEY } from "./constants";

export const ACTION_TYPES = {
    LOGIN: `${STATE_REDUCER_KEY}/LOGIN`,
    LOGIN_REQUEST: `${STATE_REDUCER_KEY}/LOGIN_REQUEST`,
    LOGIN_SUCCESS: `${STATE_REDUCER_KEY}/LOGIN_SUCCESS`,
    LOGIN_FAILURE: `${STATE_REDUCER_KEY}/LOGIN_FAILURE`,

    REGISTER: `${STATE_REDUCER_KEY}/REGISTER`,
    REGISTER_REQUEST: `${STATE_REDUCER_KEY}/REGISTER_REQUEST`,
    REGISTER_SUCCESS: `${STATE_REDUCER_KEY}/REGISTER_SUCCESS`,
    REGISTER_FAILURE: `${STATE_REDUCER_KEY}/REGISTER_FAILURE`,

    GET_USER_DETAILS: `${STATE_REDUCER_KEY}/GET_USER_DETAILS`,
    GET_USER_DETAILS_REQUEST: `${STATE_REDUCER_KEY}/GET_USER_DETAILS_REQUEST`,
    GET_USER_DETAILS_SUCCESS: `${STATE_REDUCER_KEY}/GET_USER_DETAILS_SUCCESS`,
    GET_USER_DETAILS_FAILURE: `${STATE_REDUCER_KEY}/GET_USER_DETAILS_FAILURE`,

    POST_AUTHENTICATION_DETAILS: `${STATE_REDUCER_KEY}/POST_USER_DETAILS`,
    POST_AUTHENTICATION_DETAILS_REQUEST: `${STATE_REDUCER_KEY}/POST_USER_DETAILS_REQUEST`,
    POST_AUTHENTICATION_DETAILS_SUCCESS: `${STATE_REDUCER_KEY}/POST_USER_DETAILS_SUCCESS`,
    POST_AUTHENTICATION_DETAILS_FAILURE: `${STATE_REDUCER_KEY}/POST_USER_DETAILS_FAILURE`,

    POST_OTP: `${STATE_REDUCER_KEY}/POST_OTP`,
    POST_OTP_REQUEST: `${STATE_REDUCER_KEY}/POST_OTP_REQUEST`,
    POST_OTP_SUCCESS: `${STATE_REDUCER_KEY}/POST_OTP_SUCCESS`,
    POST_OTP_FAILURE: `${STATE_REDUCER_KEY}/POST_OTP_FAILURE`,

    POST_RESET_PASSWORD: `${STATE_REDUCER_KEY}/POST_RESET_PASSWORD`,
    POST_RESET_PASSWORD_REQUEST: `${STATE_REDUCER_KEY}/POST_RESET_PASSWORD_REQUEST`,
    POST_RESET_PASSWORD_SUCCESS: `${STATE_REDUCER_KEY}/POST_RESET_PASSWORD_SUCCESS`,
    POST_RESET_PASSWORD_FAILURE: `${STATE_REDUCER_KEY}/POST_RESET_PASSWORD_FAILURE`,


    REFRESH_TOKEN: `${STATE_REDUCER_KEY}/REFRESH_TOKEN`,
    REFRESH_TOKEN_REQUEST: `${STATE_REDUCER_KEY}/REFRESH_TOKEN_REQUEST`,
    REFRESH_TOKEN_SUCCESS: `${STATE_REDUCER_KEY}/REFRESH_TOKEN_SUCCESS`,
    REFRESH_TOKEN_FAILURE: `${STATE_REDUCER_KEY}/REFRESH_TOKEN_FAILURE`

};

export const login = createAction(ACTION_TYPES.LOGIN);
export const register = createAction(ACTION_TYPES.REGISTER);
export const refreshToken = createAction(ACTION_TYPES.REFRESH_TOKEN);