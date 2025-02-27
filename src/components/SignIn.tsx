import {ClientWantsToSignInDto, ServerAuthenticatesClientDto, StringConstants} from "../types-from-open-api.ts";
import {useWsClient} from "ws-request-hook";

export default function SignIn() {

    const { sendRequest } = useWsClient();

    const signIn = async () => {
        const signInDto: ClientWantsToSignInDto = {
            eventType: StringConstants.ClientWantsToSignInDto,
            password: "abc",
            username: "bob"
        }
        const signInResult: ServerAuthenticatesClientDto = await sendRequest<ClientWantsToSignInDto, ServerAuthenticatesClientDto>(signInDto,"ServerAuthenticatesClient");
        console.log(signInResult)
    };

    return (<>
        <button className="btn btn-secondary" onClick={signIn}>click this first to sign in</button>
    </>)
}