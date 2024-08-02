
import { useEffect, useRef } from "react";

// eslint-disable-next-line no-undef
const processedEventIds = new Map();

const useSocketEvent = (socket, event, handler) => {
    const savedHandler = useRef();

    useEffect(() => {
        savedHandler.current = handler;
    }, [handler]);

    useEffect(() => {
        if (socket) {
            const eventListener = (payload) => {
                const { socketId, createdAt } = payload;


                if (processedEventIds.has(socketId) && processedEventIds.get(socketId) === createdAt) {

                    return;
                }


                savedHandler.current(payload);
                processedEventIds.set(socketId, createdAt);
            };


            socket.on(event, eventListener);

            return () => {

                socket.off(event, eventListener);
            };
        }
    }, [socket, event]);

};

export default useSocketEvent;
