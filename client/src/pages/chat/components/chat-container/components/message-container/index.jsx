import { apiClient } from "@/lib/api-client";
import { useAppStore } from "@/store";
import { GET_ALL_MESSAGES_ROUTE, HOST } from "@/utils/constants";
import moment from "moment";
import { useEffect, useRef } from "react";
import {MdFolderZip} from "react-icons/md"
import {IoMdArrowRoundDown} from "react-icons/io"

const MessageContainer = () => {

  const scrollRef = useRef();
  const {selectedChatType,selectedChatData,userInfo,selectedChatMessages,setSelectedChatMessages}=useAppStore();

  useEffect(()=>{
    const getMessages = async () => {
      try {
        const response = await apiClient.post(GET_ALL_MESSAGES_ROUTE,
          {id:selectedChatData._id},
          {withCredentials:true}
        );
        console.log('Fetched messages: ', response.data.messages);
        if(response.data.messages){
          console.log("Fetched messages after refresh: ", response.data.messages); // Verify the messages are fetched
          setSelectedChatMessages(response.data.messages);
          console.log("Updated state: ", selectedChatMessages); 
        }else {
          console.log('No messages found');
      }
        
      } catch (error) {
        console.log({error});
      }
    }
    if(selectedChatData._id){
      if(selectedChatType==="contact") getMessages();
    }
  },[selectedChatData,selectedChatType,setSelectedChatMessages]);
  useEffect(()=>{
    if(scrollRef.current){
      scrollRef.current.scrollIntoView({
        behavior:"smooth"
      });
    }
  },[selectedChatMessages]);

  const checkIfImage = (filePath) =>{
    const imageRegex =
      /\.(jpg|jpeg|png|gif|bmp|tiff|webp|svg|ico|heic|heif)$/i;
    return imageRegex.test(filePath);
  };


  const  renderMessages = () =>{
    console.log('Messages to render:', selectedChatMessages); // Debug log
    let lastDate = null;
    return selectedChatMessages.map((message,index)=>{
      const messageDate = moment(message.timestamp).format("YYYY-MM-DD");
      const showDate = messageDate !== lastDate;
      lastDate=messageDate;
      return (
        <div key={index}>
          {showDate && (<div className="text-center text-gray-500 my-2">
              {moment(message.timestamp).format("LL")} 
            </div>
          )}
          {
            selectedChatType ==="contact" && renderDMMessages(message)
          }
        </div>
      )
    });
  };

  const downloadFile = async(url)=>{
    const response = await apiClient.get(`${HOST}/${url}`,{
      responseType:"blob",

    });
    const urlBlob = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement("a");
    link.href= urlBlob;
    link.setAttribute("download",url.split("/").pop());
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.URL.revokeObjectURL(urlBlob);
  }

  const renderDMMessages = (message ) => {
    console.log('Rendering message:', message); // Debug log
    return (
    <div className={`${message.sender === selectedChatData._id? "text-left":"text-right"}`}>
      {
        message.messageType ==="text" && (
          <div 
            className={`${
              message.sender !== selectedChatData._id
                ? "bg-[#8417ff]/5 text-[#8417ff]/90 border-[#8417ff]/50"
                : "bg-[#202b33]/5 text-white/80 border-[#ffffff]/20"
            } border inline-block p-4 rounded my-1 max-w-[50%] break-words`}
          >
            {message.content}
          </div>
        )
      }
      {
        message.messageType==="file" && (
          <div 
            className={`${
              message.sender !== selectedChatData._id
                ? "bg-[#8417ff]/5 text-[#8417ff]/90 border-[#8417ff]/50"
                : "bg-[#202b33]/5 text-white/80 border-[#ffffff]/20"
            } border inline-block p-4 rounded my-1 max-w-[50%] break-words`}
          >
            {checkIfImage(message.fileUrl) ? 
            <div className="cursor-pointer">
              <img src={`${HOST}/${message.fileUrl}`} height={300} width={300} alt="" />
            </div> 
            : <div className="flex items-center justify-center gap-4">
              <span className="text-white/80 text-3xl bg-black/20 rounded-full p-3 ">
              <MdFolderZip />
              </span>
              <span>{message.fileUrl.split("/").pop()}</span>
              <span className="bg-black/20 p-3 text-2xl rounded-full hover:bg-black/50 cursor-pointer transition-all duration-300"
              onClick={()=>downloadFile(message.fileUrl)}
              >
                <IoMdArrowRoundDown />
              </span>
              </div>}
          </div>
        )
      }
      <div className="text=xs text-gray-600 ">
        {moment(message.timestamp).format("LT")}
      </div>
    </div>
    )
  };
  return (
    <div className="flex-1 overflow-y-auto scrollbar-hidden p-4 px-8 md:w-[60vw] lg:w-[70vw] xl:w-[80vw] w-full">
      {renderMessages()}
      <div ref={scrollRef}/>
    </div>
  )
}

export default MessageContainer