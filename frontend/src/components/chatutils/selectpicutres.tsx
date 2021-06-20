interface ChatInputProps {
    chatRef: React.RefObject<HTMLInputElement>;
    setChat: React.Dispatch<React.SetStateAction<string>>;
  }

const SelectPictures:React.FC<ChatInputProps> = ({chatRef, setChat}) => {
    return (
      <div>select pictures</div>
    ) 
  }
  export default SelectPictures;