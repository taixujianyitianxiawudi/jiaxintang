interface ChatInputProps {
  chatRef: React.RefObject<HTMLInputElement>;
  setChat: React.Dispatch<React.SetStateAction<string>>;
}

const ChatUploadImage:React.FC<ChatInputProps> = ({chatRef, setChat}) => {
    return (
      <div>upload image</div>
    ) 
  }
  export default ChatUploadImage;