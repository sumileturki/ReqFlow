import { auth } from "@/lib/auth";
import { currentUser } from "@/modules/authentication/actions";
import Footer from "@/modules/layout/components/footer";
import Header from "@/modules/layout/components/header";
import { initializeWorkspace } from "@/modules/workspaces/actions";
import { headers } from "next/headers";
import React from "react";

const Rootlayout = async ({ children }: { children: React.ReactNode }) => {
    const workspace = await initializeWorkspace()
    const user = await currentUser()

    console.log(workspace)
  return (
    <>
       <Header user={user}/>
      <main className="max-h-[calc(100vh-4rem)] h-[calc(100vh-4rem)] flex flex-1 overflow-hidden ">
        <div className="flex h-full w-full">
          {/* <div className="w-12 border-r border-zinc-800 bg-zinc-900">
            TabbedLeftPanel
          </div> */}
          <div className="flex-1 bg-zinc-950">{children}</div>
        </div>
      </main>

      <Footer/>
    </>
  );
};

export default Rootlayout;
