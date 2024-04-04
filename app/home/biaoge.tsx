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
import User from "./user";
import Bot from "./bot";
import Chatbox from "./chatbox";

export default function Biaoge() {
  return (
    <>
      <div className="bg-blue-50 p-4 rounded-md" id="#biaoge">
        <div className="my-2 rounded bg-blue-50 p-2 text-blue-900">
          三步让微信机器人成为群表单工具
        </div>

        <div>
          <div className="mx-8 rounded-md bg-gray-100 p-2 leading-6 text-gray-700 text-gray-800 shadow-md">
            <div className="text-center font-black">李鲁味集团销售内部群</div>
            <div className="flex  items-start justify-end ">
              <Chatbox>
                <div>创建表单:春暖花开</div>
                <div>关键字:促销活动</div>
                <div>字段:战队</div>
                <div>字段:成员</div>
                <div>字段:行动</div>
                <div>字段:积分</div>
              </Chatbox>
              <User>管理员</User>
            </div>

            <div className="flex items-start justify-start">
              <Bot></Bot>
              <Chatbox>成功创建新的表单：春暖花开</Chatbox>
            </div>

            <div className="flex items-start justify-end">
              <Chatbox>
                <div>促销活动:春暖花开</div>
                <div>战队:A战队</div>
                <div>成员:老田</div>
                <div>行动:引流到店</div>
                <div>积分:10</div>
              </Chatbox>
              <User>业务员</User>
            </div>

            <div className="flex items-start justify-start">
              <Bot></Bot>
              <Chatbox>提交表单成功</Chatbox>
            </div>

            <div className="flex items-start justify-end">
              <Chatbox>
                <p>导出表单:春暖花开</p>
              </Chatbox>
              <User>管理员</User>
            </div>

            <div className="flex items-start justify-start">
              <Bot></Bot>
              <Chatbox>导出成功 *****.csv</Chatbox>
            </div>
          </div>
        </div>

        <Table className="my-4 rounded-sm border bg-white">
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
            <TableRow>
              <TableCell className="font-medium">B战队</TableCell>
              <TableCell>茂里</TableCell>
              <TableCell>成交</TableCell>
              <TableCell className="text-right">100</TableCell>
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
          填单机器人有丰富的应用场景， 比如常见的每日打卡，
          目前通过表单小程序的很多场景都可以用表单机器人在群里直接完成。
          比如销售线索的收集，市场人员的销售业绩登记等等
        </div>

        <div className="mt-4 font-black">优缺点</div>
        <div>
          比起小程序，
          群里直接发表单信息让机器人收集整理。更加直观，人们通过模仿就可以学会填写。其次群内气氛更活跃，一个小程序接龙丢群里，
          管理员还要提醒大家。缺点是，大家在群里填，如果涉及隐私就不方便用这方案，
          还有整天炸群不太好。
        </div>
      </div>
    </>
  );
}
