import { BotIcon, UserIcon } from "lucide-react";

export default function User(props) {
  return (
    <>
      <div className="mx-1 rounded-lg border bg-white p-2 text-center">
        <UserIcon className="mx-auto"></UserIcon>
        <div className="text-xs text-gray-400">{props.children}</div>
      </div>
    </>
  );
}
