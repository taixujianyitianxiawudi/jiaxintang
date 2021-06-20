interface ChatInputProps {
    chatRef: React.RefObject<HTMLInputElement>;
    setChat: React.Dispatch<React.SetStateAction<string>>;
  }

const RecordVoice:React.FC<ChatInputProps> = ({chatRef, setChat}) => {
    return (
      <div>RecordVoice</div>
    ) 
  }
  export default RecordVoice;