import Link from "next/link";
import { useRouter } from "next/router";
import { MdOutlineDashboard } from "react-icons/md";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import { CiViewTable } from "react-icons/ci";
import { CiPen } from "react-icons/ci";

export const SideBar = () => {
  const router = useRouter();

  const menu = [
    {
      title: "Dashboard",
      link: "/",
      icon: <MdOutlineDashboard />,
    },
    {
      title: "Daftar Peraturan",
      link: "#",
      icon: <MdOutlineDashboard/>,
    },
    {
      title: "Evaluasi & Kepatuhan Hukum",
      link: "#",
      icon: <CiPen/>,
    },
    {
      title: "Rencana Perbaikan",
      link: "#",
      icon: <HiOutlineWrenchScrewdriver/>,
    },
    {
      title: "Ringkasan Tabel Ekstaksi",
      link: "#",
      icon: <CiViewTable/>,
    },
  ];
  return (
    <>
      <div className="flex items-center justify-center h-[55px] gap-1">
        <span className="font-md">Sherri</span>
      </div>
      <div className="p-2">
        {menu.map((e, index) => {
          return (
            <ul
              key={index}
              className="flex flex-col py-3"
            >
              <li className="g-4">
              <Link
                      key={index}
                      href={`${e.link}`}
                      className={
                        router.pathname === e.link
                          ? "relative flex flex-row items-center h-10 focus:outline-none text-black font-bold text-lg"
                          : "relative flex flex-row items-center text-xl focus:outline-none text-slate-500 hover:text-primary-500"
                      }
                    >
                      <span className="inline-flex justify-center items-center text-md">
                        {e.icon}
                      </span>
                      <span className="ml-4 tracking-wide truncate text-sm">
                        {e.title}
                      </span>
                    </Link>
              </li>
              
            </ul>
          );
        })}
      </div>
    </>
  );
};
