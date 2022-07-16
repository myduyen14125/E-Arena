import { Avatar } from "antd";
const UserItem = ({ name, score }) => {
  return (
    <div className="flex items-center py-3 px-2">
      <Avatar src="https://joeschmoe.io/api/v1/random" />
      <div className="flex items-center w-full justify-between">
        <span className="block  mx-4 font-bold">{name}</span>
        <span className="block text-xl font-semibold text-cyan-400">
          {score}
        </span>
      </div>
    </div>
  );
};

export default UserItem;

UserItem.defaultProps = {
  name: "Nguyễn Văn A",
};
