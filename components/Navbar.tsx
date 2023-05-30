import { IconExternalLink } from "@tabler/icons-react";
import React, { FC } from 'react';

// Rest of your code ...


export const Navbar: FC = () => {
  return (
    <div className="flex h-[60px] border-b border-gray-300 py-2 px-8 items-center justify-between">
      <div className="font-bold text-2xl flex items-center">
        <a
          className="flex hover:opacity-50 items-center"
          href="http://www.csco.org.cn/cn/index.aspx"
        >
          <div className="ml-2">查指南</div>
        </a>
      </div>
      <div>
        <a
          className="flex items-center hover:opacity-50"
          href="http://www.csco.org.cn/cn/index.aspx"
          target="_blank"
          rel="noreferrer"
        >
          <div className="hidden sm:flex">中国临床肿瘤学会</div>

          <IconExternalLink
            className="ml-1"
            size={20}
          />
        </a>
      </div>
    </div>
  );
};
