import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
  User,
  DropdownSection,
  Button,
  Tooltip,
  Listbox,
  ListboxItem,
} from "@nextui-org/react";
import { MdOutlineDashboard, MdSunny } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { RxDot } from "react-icons/rx";

export const Navbar = () => {
  const menu = [
    {
      title: "Dashboard",
      link: "/",
      icon: <MdOutlineDashboard />,
      list: [
        {
          title: "Evaluasi & Kepatuhan Hukum",
          link: "#",
          icon: <MdOutlineDashboard />,
        },
        {
          title: "Evaluasi & Kepatuhan Hukum",
          link: "#",
          icon: <MdOutlineDashboard />,
        },
      ],
    },
    {
      title: "Daftar Peraturan",
      link: "#",
      icon: <MdOutlineDashboard />,
      list: [
        {
          title: "Daftar Peraturan",
          link: "#",
          icon: <MdOutlineDashboard />,
        },
        {
          title: "Daftar Peraturan",
          link: "#",
          icon: <MdOutlineDashboard />,
        },
      ],
    },
    {
      title: "Evaluasi & Kepatuhan Hukum",
      link: "#",
      icon: <MdOutlineDashboard />,
      list: [
        {
          title: "Evaluasi & Kepatuhan Hukum",
          link: "#",
          icon: <MdOutlineDashboard />,
        },
        {
          title: "Evaluasi & Kepatuhan Hukum",
          link: "#",
          icon: <MdOutlineDashboard />,
        },
        {
          title: "Evaluasi & Kepatuhan Hukum",
          link: "#",
          icon: <MdOutlineDashboard />,
        },
        {
          title: "Evaluasi & Kepatuhan Hukum",
          link: "#",
          icon: <MdOutlineDashboard />,
        },
      ],
    },
    {
      title: "Daftar Peraturan",
      link: "#",
      icon: <MdOutlineDashboard />,
      list: [
        {
          title: "Daftar Peraturan",
          link: "#",
          icon: <MdOutlineDashboard />,
        },
        {
          title: "Daftar Peraturan",
          link: "#",
          icon: <MdOutlineDashboard />,
        },
      ],
    },
  ];

  return (
    <div className="h-[55px] bg-white z-9999 flex items-center justify-between px-6 py-8 shadow-md">
      <div>LOGO</div>
      <div className="flex gap-6">
        {menu.map((e, index) => {
          return (
            <Tooltip
              placement="bottom-start"
              key={index}
              closeDelay={10}
              showArrow
              className="w-[350px]"
              content={
                <Listbox className="px-1 py-2">
                  {e.list.map((list, index) => {
                    return (
                      <ListboxItem key={index}>
                        <div className="flex gap-1 items-center text-[#66748e]">
                          <span>
                            <RxDot size={26} />
                          </span>
                          {/* <span className="text-xl">{list.icon}</span> */}
                          <span>{list.title}</span>
                        </div>
                      </ListboxItem>
                    );
                  })}
                </Listbox>
              }
            >
              <Button
                className="text-[#66748e]"
                endContent={<IoIosArrowDown />}
                variant="light"
              >
                {e.title}
              </Button>
            </Tooltip>
          );
        })}
      </div>
      <div className="flex items-center gap-4">
        <Dropdown
          showArrow
          radius="sm"
          classNames={{
            base: "before:bg-default-200", // change arrow background
            content: "p-0 border-small border-divider bg-background",
          }}
        >
          <DropdownTrigger>
          <User
              as="button"
              avatarProps={{
                isBordered: true,
                src: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
              }}
              className="transition-transform"
              description="Super Admin"
              name="Admin Paketin"
            />
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Custom item styles"
            disabledKeys={["profile"]}
            className="p-3"
            itemClasses={{
              base: [
                "rounded-md",
                "text-default-500",
                "transition-opacity",
                "data-[hover=true]:text-foreground",
                "data-[hover=true]:bg-default-100",
                "dark:data-[hover=true]:bg-default-50",
                "data-[selectable=true]:focus:bg-default-50",
                "data-[pressed=true]:opacity-70",
                "data-[focus-visible=true]:ring-default-500",
              ],
            }}
          >
            <DropdownSection aria-label="Profile & Actions" showDivider>
              <DropdownItem
                isReadOnly
                key="profile"
                className="opacity-100 h-14 gap-2"
              >
                <User
                  name="Junior Garcia"
                  description="@jrgarciadev"
                  classNames={{
                    name: "text-default-600",
                    description: "text-default-500",
                  }}
                  avatarProps={{
                    size: "sm",
                    src: "https://avatars.githubusercontent.com/u/30373425?v=4",
                  }}
                />
              </DropdownItem>
              <DropdownItem key="dashboard">Dashboard</DropdownItem>
              <DropdownItem key="settings">Settings</DropdownItem>
              <DropdownItem
                key="new_project"
                endContent={<RxDot className="text-large" />}
              >
                New Project
              </DropdownItem>
            </DropdownSection>

            <DropdownSection aria-label="Preferences" showDivider>
              <DropdownItem key="quick_search" shortcut="⌘K">
                Quick search
              </DropdownItem>
              <DropdownItem
                isReadOnly
                key="theme"
                className="cursor-default"
                endContent={
                  <select
                    className="z-10 outline-none w-16 py-0.5 rounded-md text-tiny group-data-[hover=true]:border-default-500 border-small border-default-300 dark:border-default-200 bg-transparent text-default-500"
                    id="theme"
                    name="theme"
                  >
                    <option>System</option>
                    <option>Dark</option>
                    <option>Light</option>
                  </select>
                }
              >
                Theme
              </DropdownItem>
            </DropdownSection>

            <DropdownSection aria-label="Help & Feedback">
              <DropdownItem key="help_and_feedback">
                Help & Feedback
              </DropdownItem>
              <DropdownItem key="logout">Log Out</DropdownItem>
            </DropdownSection>
          </DropdownMenu>
        </Dropdown>
      </div>
    </div>
  );
};
