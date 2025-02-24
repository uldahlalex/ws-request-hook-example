import {
    ClientWantsToSubscribeToTopicDto,
    ServerHasSubscribedClientToTopicDto,
    StringConstants
} from "../types-from-open-api.ts";
import {useWsClient} from "ws-request-hook";

export default function SubscribeToTopic() {

    const { sendRequest } = useWsClient();


    const subscribeToTopic = async() => {
        const subcribeDto: ClientWantsToSubscribeToTopicDto = {
            eventType: StringConstants.ClientWantsToSubscribeToTopicDto,
            topic: "Messages"
        };
        const subscribeResult = await sendRequest<ClientWantsToSubscribeToTopicDto, ServerHasSubscribedClientToTopicDto>(subcribeDto, "ServerHasSubscribedClientToTopic");
        console.log(subscribeResult)
    }
    return (<>
        <button className="btn btn-teritary" onClick={subscribeToTopic}>then click this to subscribe to broadcast</button>
    </>)
}