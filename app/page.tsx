import Image from "next/image";

import Biaoge from "./home/biaoge";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Jifen from "./home/jifen";
import Daka from "./home/daka";
import Ribao from "./home/ribao";

export default function Home() {
  return (
    <div className="mx-auto max-w-2xl p-4 leading-8">
      <div className="my-4 flex items-center text-xs font-black font-bold">
        <img src="logo.webp" className="w-8 rounded-full" />
        <div className="mx-2">
          <div>PUGAI</div>
          <div>扑街机器人</div>
        </div>
      </div>

      <Tabs defaultValue="biaoge">
        <TabsList>
          <TabsTrigger value="ribao">日报</TabsTrigger>
          <TabsTrigger value="jifen">积分</TabsTrigger>
          <TabsTrigger value="daka">打卡</TabsTrigger>
          <TabsTrigger value="biaoge">表格</TabsTrigger>
        </TabsList>
        <TabsContent value="ribao">
          <Ribao></Ribao>
        </TabsContent>
        <TabsContent value="jifen">
          <Jifen></Jifen>
        </TabsContent>
        <TabsContent value="daka">
          <Daka></Daka>
        </TabsContent>
        <TabsContent value="biaoge">
          <Biaoge></Biaoge>
        </TabsContent>
      </Tabs>
      <div className="mt-8">
        <div>内测开放中，支持源码定制部署</div>
        <div>支持企业微信</div>
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
