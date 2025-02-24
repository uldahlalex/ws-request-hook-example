import BroadcastMessage from "./BroadcastMessage.tsx";
import Auth from "./SignIn.tsx";
import ListenToMessages from "./ListenToMessages.tsx";
import SubscribeToTopic from "./Subscribe.tsx";

export default function App() {
    return(<div className="flex flex-col">
        <Auth />
        <SubscribeToTopic />
        <BroadcastMessage />
        <ListenToMessages />

    </div>)
}