import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Typography } from "@mui/material";
import { FcMoneyTransfer } from "react-icons/fc";
import { IoIosSend } from "react-icons/io";
import { TbAwardFilled } from "react-icons/tb";
import { FaCalendarCheck,FaHandHoldingMedical } from "react-icons/fa6"; 
export default function ScrollableTabsButtonVisible() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabData = [
    {
      label: <IoIosSend className="icons" />,
      heading: "Your Enquiry",
      text: `Contact us to discuss your requirements and we'll help you to identify the right investment for you`,
    },
    {
      label: <TbAwardFilled className="icons" />,
      heading: "Recommandations",
      text: `We will provide advice and recommendations that match your requirements and goals`,
    },
    {
      label: <FaCalendarCheck className="icons" />,
      heading: "You Decide and Reserve",
      text: `Make your informed decision, and we will take you smoothly through the reservation process`,
    },
    {
      label: <FaHandHoldingMedical className="icons" />,
      heading: "Support Support",
      text: `The journey doesn't end there; we will be at hand to provide continual ongoing support`,
    },
    {
      label: <FcMoneyTransfer className="icons" />,
      heading: "Example",
      text: `Make your informed decision, and we will take you smoothly through the reservation process`,
    },
  ];

  return (
    <Box
      sx={{
        flexGrow: 1,
        maxWidth: { md: 950, sm: 480 },
        bgcolor: "background.paper",
        marginBottom:"30rem",
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        aria-label="visible arrows tabs example"
        TabIndicatorProps={{
          style: { display: "none" }, // Remove default active effect
        }}
        sx={{
          "& .MuiTab-root": {
            width: "220px", // Decrease the width of each tab
          },
          "& .MuiTab-textIcon": {
            borderBottom: "none",
          },
          "& .Mui-focusVisible": {
            outline: "none", // Remove default focus effect
          },
        }}
      >
        {tabData.map((tab, index) => (
          <Tab
            key={index}
            icon={tab.label}
            label={
              <div>
                <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                  {tab.heading}
                </Typography>
                <Typography variant="body2">{tab.text}</Typography>
              </div>
            }
          />
        ))}
      </Tabs>
    </Box>
  );
}
