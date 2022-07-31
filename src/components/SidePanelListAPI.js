import { MdAdminPanelSettings, MdSupportAgent, MdReport } from "react-icons/md";
import { FaUser, FaBuilding } from "react-icons/fa";
import { TbNotes } from "react-icons/tb";
import { AiFillSetting } from "react-icons/ai";
import { IoIosRocket } from "react-icons/io";
const sidePanelList = [
  {
    id: 1,
    list: "Admin",
    listIcon: <MdAdminPanelSettings color="#fff" size="2rem" />,
    dropdownList: "block",
    dropdownList1: "Admin1",
    dropdownList2: "Admin2",
    dropdownList3: "Admin3",
    icon: "inline-block",
  },
  {
    id: 2,
    list: "Employee",
    listIcon: <FaUser color="#fff" size="2rem" />,
    dropdownList: "block",
    dropdownList1: "Employee1",
    dropdownList2: "Employee2",
    dropdownList3: "Employee3",
    icon: "inline-block",
  },
  {
    id: 3,
    list: "Customer Support",
    listIcon: <MdSupportAgent color="#fff" size="2rem" />,
    dropdownList: "block",
    dropdownList1: "Support1",
    dropdownList2: "Support2",
    dropdownList3: "Support3",
    icon: "inline-block",
  },
  {
    id: 4,
    list: "Report",
    listIcon: <MdReport color="#fff" size="2rem" />,
    dropdownList: "block",
    dropdownList1: "Report1",
    dropdownList2: "Report2",
    dropdownList3: "Report3",
    icon: "inline-block",
  },
  {
    id: 5,
    list: "Organization",
    listIcon: <FaBuilding color="#fff" size="2rem" />,
    dropdownList: "block",
    dropdownList1: "Organization1",
    dropdownList2: "Organization2",
    dropdownList3: "Organization3",
    icon: "inline-block",
  },
  {
    id: 6,
    list: "Leave Note",
    listIcon: <TbNotes color="#fff" size="2rem" />,
    dropdownList: "none",
    icon: "none",
  },
  {
    id: 7,
    list: "Projects",
    listIcon: <IoIosRocket color="#fff" size="2rem" />,
    dropdownList: "none",
    icon: "none",
  },
  {
    id: 8,
    list: "Settings",
    listIcon: <AiFillSetting color="#fff" size="2rem" />,
    dropdownList: "block",
    dropdownList1: "Settings1",
    dropdownList2: "Settings2",
    dropdownList3: "Settings3",
    icon: "inline-block",
  },
];

export default sidePanelList;
