import {ClientWantsToBroadcastToTopicDto, ServerConfirmsDto, StringConstants} from "../types-from-open-api.ts";
import { useWsClient} from "ws-request-hook";

export default function BroadcastMessage() {

    const {
        readyState,
        sendRequest
    } = useWsClient();

    const broadcast = async () => {
        if(readyState != 1) {
            console.log("Connection not open")
            return;
        }
        const broadcastDto: ClientWantsToBroadcastToTopicDto = {
            eventType: StringConstants.ClientWantsToBroadcastToTopicDto,
            topic: "Messages",
            message: "Hello world"
        }
        const broadcastConfirmationResult = await sendRequest<ClientWantsToBroadcastToTopicDto, ServerConfirmsDto>(broadcastDto, "ServerConfirms");
        console.log(broadcastConfirmationResult)
    }

    return (
        <div >
            <button className="btn btn-primary"
                onClick={() => broadcast()}>and then click here to broadcast
                (also test with multiple browsers)
            </button>
        </div>
    );
}