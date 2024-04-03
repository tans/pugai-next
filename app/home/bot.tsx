import { BotIcon, UserIcon } from "lucide-react";

export default function Bot() {
  return (
    <>
      <div className="mx-1 rounded-lg border bg-white p-2 text-center">
        <BotIcon className="mx-auto"></BotIcon>
        <div className="text-xs text-gray-400">机器人</div>
      </div>
    </>
  );
}
