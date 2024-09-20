import ChatHeader from "./components/chat-header";
import MessageBar from "./components/message-bar";
import MessageContainer from "./components/message-container";


const ChatContainer = () => {
  return (
    <div className="flex flex-col h-full w-full bg-[#1c1d25] md:flex-1">
        <ChatHeader />
        <MessageContainer />
        <MessageBar />
        
    </div>
  )
}

export default ChatContainer;