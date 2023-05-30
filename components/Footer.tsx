import { IconBrandGithub, IconBrandTwitter } from "@tabler/icons-react";
import { FC } from "react";

export const Footer: FC = () => {
  return (
    <div className="flex h-[50px] border-t border-gray-300 py-2 px-8 items-center justify-center">
      <div className="text-sm">
        内容来源以及版权所有：
        <a
          className="hover:opacity-50"
          href="http://www.csco.org.cn/cn/index.aspx"
          target="_blank"
          rel="noreferrer"
        >
          中国临床肿瘤学会
        </a>
      </div>
    </div>
  );
};
