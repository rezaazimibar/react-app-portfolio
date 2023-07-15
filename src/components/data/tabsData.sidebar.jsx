import {
  HomeRounded,
  Face6Rounded,
  TextSnippetRounded,
  TerminalRounded,
  MessageRounded,
  ConnectWithoutContactRounded,
} from "@mui/icons-material";

const tabProps = (index) => {
  return {
    id: `sidebar-tab-${index}`,
    "aria-controls": `tabpanel-${index}`,
  };
};
export const tabsData = () => {
  const tabs = [
    { label: "صفحه اصلی", icon: <HomeRounded />, ...tabProps(0) },
    { label: "درباره من", icon: <Face6Rounded />, ...tabProps(1) },
    { label: "رزومه من", icon: <TextSnippetRounded />, ...tabProps(2) },
    { label: "نمونه کار ها", icon: <TerminalRounded />, ...tabProps(3) },
    { label: "نظرات", icon: <MessageRounded />, ...tabProps(4) },
    {
      label: "ارتباط با من",
      icon: <ConnectWithoutContactRounded />,
      ...tabProps(5),
    },
  ];
  return tabs;
};
