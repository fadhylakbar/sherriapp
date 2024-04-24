import { ReactNode } from "react";
import { SideBar } from "./sidebar";
import { Navbar } from "./navbar";

interface Props {
  children: ReactNode;
}
export const Wrapper = ({ children }: Props) => {
  return (
    <main className="flex flex-col h-screen">
      <div className="flex overflow-y-auto verflow-x-auto">
        {/* <div className="sideBar">
          <SideBar />
        </div> */}
        <div className="flex-1">
          <div className="sticky top-0 z-[9]">
            <Navbar />
          </div>
          <div className="px-8 py-6">
            <div className="flex flex-col">
              <span className="text-2xl">Dashboard</span>
              <span className="text-sm font-thin">Real time Dashboard</span>
            </div>
              <div className="mt-6 p-6 rounded shadow">{children}</div>
          </div>
        </div>
      </div>
    </main>
  );
};
