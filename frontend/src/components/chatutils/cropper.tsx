interface ChatInputProps {
    chatRef: React.RefObject<HTMLInputElement>;
    setChat: React.Dispatch<React.SetStateAction<string>>;
  }

const Cropper:React.FC<ChatInputProps> = ({chatRef, setChat}) => {
    return (
      <div>Cropper</div>
    ) 
  }
  export default Cropper;