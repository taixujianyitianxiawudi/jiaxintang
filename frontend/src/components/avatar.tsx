interface ChatVariables {
  id: number,
  name: string,
  createdAt: string,
  image?: string,
  content?: string
}

const Avatar: React.FC<ChatVariables> = ({ id, name, createdAt, image, content }) => {
  const userId = localStorage.getItem("userId");
  let color = "max-w-xs  bg-white max-h-12 rounded-xl shadow-md flex items-center text-blue-400";
  let img = "/img/1.jpg";
  if (id == userId as unknown as number) { 
    color = "max-w-xs max-h-12 bg-white rounded-xl shadow-md flex items-center text-pink-400"
    img = "/img/3.jpg";
  }
  return (
    <div className={color} >
  <div className="flex-shrink-0">
    <img className="h-8 w-8" src={img} alt="Profile" />
  </div>
  <div>
    <div className="font-medium text-black">{name}</div>
    <p >{content}</p>
  </div>
</div>
  );
};

export default Avatar;
