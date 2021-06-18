import { MyProfile_me } from "../pages/__generated__/MyProfile";

const Avatar: React.FC<MyProfile_me> = ({ id, name, email }) => {
  return (
    <div>
      <p>{id}</p>
      <p>{name}</p>
      <p>{email}</p>
    </div>
  );
};

export default Avatar;
