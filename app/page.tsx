import Image from "next/image";
import { BotIcon, UserIcon } from "lucide-react";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function Home() {
  return (
    <div className="mx-auto max-w-2xl p-4 leading-8">
      <div className="my-4 flex items-center text-lg font-black">
        <img src="logo.webp" className="w-16 rounded-full" />
        <div className="mx-2">微信表格机器人</div>
      </div>
      <div className="my-2 rounded bg-blue-50 p-2 text-blue-900">
        三步让微信机器人成为微信里的Excel工具
      </div>

      <div>
        <div className="rounded-md rounded-sm bg-gray-50 p-2 leading-6 text-gray-700 text-gray-800">
          <div className="text-center font-black">李鲁味集团销售内部群</div>
          <div className="flex  items-start justify-end ">
            <div className="bg-green-50 p-2">
              <div>创建表格:春暖花开</div>
              <div>关键字:促销活动</div>
              <div>字段:战队</div>
              <div>字段:成员</div>
              <div>字段:行动</div>
              <div>字段:积分</div>
            </div>
            <div className="mx-1 rounded-lg border bg-white p-2 text-center">
              <UserIcon className="mx-auto"></UserIcon>
              <div className="text-xs text-gray-400">管理员</div>
            </div>
          </div>

          <div className="flex items-start justify-start  ">
            <div className="mx-1 rounded-lg border bg-white p-2 text-center">
              <BotIcon className="mx-auto"></BotIcon>
              <div className="text-xs text-gray-400">机器人</div>
            </div>
            <div className="bg-green-50 p-2">创建表格成功</div>
          </div>

          <div className="flex items-start justify-end">
            <div className="bg-green-50 p-2">
              <div>促销活动:春暖花开</div>
              <div>战队:A战队</div>
              <div>成员:老田</div>
              <div>行动:引流到店</div>
              <div>积分:10</div>
            </div>
            <div className="mx-1 rounded-lg border bg-white p-2 text-center">
              <UserIcon className="mx-auto"></UserIcon>
              <div className="text-xs text-gray-400">业务员</div>
            </div>
          </div>

          <div className="flex items-start justify-start">
            <div className="mx-1 rounded-lg border bg-white p-2 text-center">
              <BotIcon className="mx-auto"></BotIcon>
              <div className="text-xs text-gray-400">机器人</div>
            </div>
            <div className="bg-green-50 p-2">插入数据成功</div>
          </div>

          <div className="flex items-start justify-end">
            <div className="bg-green-50 p-2">
              <p>导出表格:春暖花开</p>
            </div>
            <div className="mx-1 rounded-lg border bg-white p-2 text-center">
              <UserIcon className="mx-auto"></UserIcon>
              <div className="text-xs text-gray-400">管理员</div>
            </div>
          </div>

          <div className="flex items-start justify-start">
            <div className="mx-1 rounded-lg border bg-white p-2 text-center">
              <BotIcon className="mx-auto"></BotIcon>
              <div className="text-xs text-gray-400">机器人</div>
            </div>
            <div className="bg-green-50 p-2">导出成功 *****.csv</div>
          </div>
        </div>
      </div>

      <Table className="my-4 rounded-sm border">
        <TableCaption>导出Excel进行数据处理</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">战队</TableHead>
            <TableHead>成员</TableHead>
            <TableHead>行动</TableHead>
            <TableHead className="text-right">积分</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">A战队</TableCell>
            <TableCell>老田</TableCell>
            <TableCell>引流到店</TableCell>
            <TableCell className="text-right">10</TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <div className="mt-4 font-black">工作原理</div>
      <div>
        管理员拉机器人入群 ，然后建表命令创建一个数据表。
        群成员就可以通过对应的格式自行录入数据，通过导出记录到excel可以对记录数据进行统计和维护
      </div>

      <div className="mt-4 font-black">使用场景</div>
      <div>
        表格机器人有丰富的应用场景，
        比如目前常见的每日打卡，但是更多的是目前通过表单小程序的行为，其实可以直接在群里进行。比如销售线索的收集，市场人员的销售业绩登记等等
      </div>

      <div className="mt-8">
        <div>免费内测开放中，支持源码定制部署</div>
        <div>添加微信 tianshe00</div>
        <img src="qrcode.webp" className="w-96" />
        {/* <div>
          <div>更多模板</div>
          <div></div>
        </div> */}
      </div>
    </div>
  );
}
