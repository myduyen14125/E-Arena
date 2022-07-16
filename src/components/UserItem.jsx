import { Avatar } from "antd";
const UserItem = ({ name }) => {
  return (
    <div className="flex items-center py-3 px-2">
      <Avatar src="https://joeschmoe.io/api/v1/random" />
      <div>
        <span className=" mx-4 font-bold">{name}</span>
        <span className="text-xl font-semibold text-cyan-400">5000</span>
      </div>
    </div>
  );
};

export default UserItem;

UserItem.defaultProps = {
  name: "Nguyễn Văn A",
};
