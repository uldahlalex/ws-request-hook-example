import {useEffect, useState} from 'react';
import {useWsClient} from "ws-request-hook";
import {ServerBroadcastsMessageDto, StringConstants} from '../types-from-open-api.ts';


export default function ListenToMessages() {
    const {
        onMessage,
        readyState
    } = useWsClient();

    const [receivedMessage, setReceivedMessage] = useState<string>("Waiting for broadcast...");

    useEffect(() => {
        if (readyState != 1) return;
        reactToBroadcasts();
    }, [onMessage, readyState]);

    const reactToBroadcasts = async () => {
        const unsubscribe = onMessage<ServerBroadcastsMessageDto>(
            StringConstants.ServerBroadcastsMessageDto,
            (message) => {
                setReceivedMessage(message.message || "No message received");
            }
        );
        return () => unsubscribe();
    }


    return (<div className="p-10">
            <div className="mb-10">
                <div data-testid="broadcast-message">{receivedMessage}</div>
            </div>

            <div className="card-title">Ready state: {readyState}</div>
            <div>(0 = connection, 1 = connected, 2 = closing, 3 = closed)
            </div>
        </div>

    );
}

