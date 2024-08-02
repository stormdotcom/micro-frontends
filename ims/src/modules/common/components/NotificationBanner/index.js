
import React from "react";
import { useDispatch } from "react-redux";
import { actions as sliceActions } from "../../../socket/slice";
import NotifyMenu from "./NotifyMenu";
import MobileNotificationMenu from "./MobileNotificationMenu";
import { useSocket } from "../../../../@app/SocketProvider";
import { MoonLoader } from "react-spinners";
import useSocketEvent from "../../../../common/hooks/useSocketHook";

const NotificationBanner = ({ isMobileScreen = false }) => {
  const dispatch = useDispatch();
  const socket = useSocket();
  useSocketEvent(socket, "real-time-notify", (payload) => {
    dispatch(sliceActions.setNotification(payload));
  });

  if (!socket) {
    return <MoonLoader size={13} speedMultiplier={0.8} className="w-1 h-1" />;
  }

  return (
    <>
      {isMobileScreen ? <MobileNotificationMenu /> : <NotifyMenu />}
    </>
  );
};

export default NotificationBanner;
