import ChatUploadImage from "./chatuploadimage"
import Cropper from "./cropper";
import RecordVoice from "./recordvoice";
import SelectPictures from "./selectpicutres";


interface ChatInputProps {
  chatRef: React.RefObject<HTMLInputElement>;
  setChat: React.Dispatch<React.SetStateAction<string>>;
}

const ChatUtils:React.FC<ChatInputProps> = ({chatRef, setChat}) => {
  return (
    <div>
    <ChatUploadImage chatRef={chatRef} setChat={setChat} />
    <SelectPictures chatRef={chatRef} setChat={setChat} />
    <Cropper chatRef={chatRef} setChat={setChat} />
    <RecordVoice chatRef={chatRef} setChat={setChat} />
    </div>
  ) 
}
export default ChatUtils;