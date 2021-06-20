interface ChatVariables {
  id: number,
  name: string,
  createdAt: string,
  image?: string,
  content?: string
}

const Avatar: React.FC<ChatVariables> = ({ id, name, createdAt, image, content }) => {
  const userId = localStorage.getItem("userId");
  let color = "text-blue-400";
  if (id == userId as unknown as number) //if user created this message
  { color = "text-pink-400"}
  return (
    <div className={color}>{name}: {content}</div>
  );
};

export default Avatar;
