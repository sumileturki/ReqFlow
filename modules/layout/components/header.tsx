"use client";

import React from "react";
import { UserProps } from "../types";
import { PlugZap, Unplug } from "lucide-react";
import UserButton from "@/modules/authentication/components/user-button";
import SearchBar from "./search-bar";
import InviteMember from "./invite-members";
import Workspace from "./workspace";

interface Props {
  user: UserProps;
}

const Header = ({ user }: Props) => {
  return (
    <header className=" grid grid-cols-5 grid-rows-1 gap-2 overflow-x-auto overflow-hidden p-2 border ">
      <button
        onClick={() => console.log("PingIt clicked")}
        className="col-span-2 flex items-center space-x-2 hover:opacity-80 ml-4"
      >
        <PlugZap size={28} className="text-indigo-400" />
        <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 250 60"
    className="h-12 w-auto"
  >
    <defs>
      {/* Gradient for fancy fill */}
      <linearGradient id="pingit-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#6366f1" />   {/* indigo-500 */}
        <stop offset="100%" stopColor="#3b82f6" /> {/* blue-500 */}
      </linearGradient>
    </defs>

    <text
      x="10"
      y="40"
      fontFamily="'Poppins', sans-serif"
      fontSize="32"
      fontWeight="700"
      fill="url(#pingit-gradient)"
    >
      ReqFlow
    </text>

    <style>{`
      text {
        stroke: #312e81;
        stroke-width: 1px;
        paint-order: stroke fill;
       
      }

      @keyframes pingit-fade {
        from { opacity: 0.7; transform: translateX(0px); }
        to { opacity: 1; transform: translateX(4px); }
      }
    `}</style>
  </svg>
      </button>

      <div className="col-span-1 flex items-center justify-between space-x-2">
        <div
          className="border-animation relative p-[1px] rounded flex-1 self-stretch overflow-hidden flex items-center justify-center"
          aria-hidden="true"
        >
          <SearchBar />
        </div>
      </div>
      <div className="col-span-2 flex items-center justify-end space-x-2 hover:cursor-pointer hover:opacity-80">
        <InviteMember />
        <Workspace />
        <UserButton user={user} size="sm" />
      </div>
    </header>
  );
};

export default Header;
