import React, { useState } from "react";
import Graph from "../../components/AnalyticsGraph/Graph";
import JobSeekerProfileCard from "../../components/JobSeekerProfile/JobSeekerProfileCard";
import TabWrapper, { TabPanel } from "../../components/TabWrapper/TabWrapper";

import { Box, Typography } from "@mui/material";
import { JOB_SEEKER_COMLETE_PROFILE_TEXT } from "../../constants";

const JobSeekerCompleteProfile = (props) => {
  const [activeTab, setActiveTab] = useState(0);

  const jobSeekerTabs = [
    {
      title: "Profile Uploading",
      index: 0,
      component: <div>{""}</div>,
    },
    {
      title: "Full Name : Sai Anvesh",
      index: 1,
      component: <div>{""}</div>,
    },
    {
      title: "DOB : 19/01/1991 ",
      index: 2,
      component: <div>{""}</div>,
    },
    {
      title: "View Profile",
      index: 3,
      component: <div>{""}</div>,
    },
  ];
  return (
    <>
      <Box>
        <Box>
          <Typography
            variant="h5"
            color={"#22C55E"}
            textAlign={"center"}
            padding={"2vw"}
          >
            {JOB_SEEKER_COMLETE_PROFILE_TEXT.title}
          </Typography>
          <Typography variant="h5" textAlign={"center"} padding={".5vw"}>
            {JOB_SEEKER_COMLETE_PROFILE_TEXT.titleOne}
          </Typography>
          <Typography
            variant="body2"
            color={"#474747"}
            textAlign={"center"}
            padding={".5vw"}
          >
            {JOB_SEEKER_COMLETE_PROFILE_TEXT.notification1}
          </Typography>
          <Typography
            variant="subtitle1"
            color={"#474747"}
            textAlign={"center"}
            padding={".5vw"}
          >
            {JOB_SEEKER_COMLETE_PROFILE_TEXT.notification2}
          </Typography>
          <div style={{ padding: "3vw 0 3vw 0" }}>
            <JobSeekerProfileCard contestId={props.contestId} />
          </div>
          <div>
            <TabWrapper
              tabIndex={activeTab}
              setTabIndex={setActiveTab}
              tabsList={jobSeekerTabs}
            />
            {jobSeekerTabs.map((tab) => (
              <TabPanel
                value={activeTab}
                index={tab.index}
                key={tab.index}
                disablePadding={true}
              >
                {tab.component}
              </TabPanel>
            ))}
          </div>
          <div style={{ padding: "2vw" }}>
            <Typography variant="h5" textAlign={"center"} padding={".5vw"}>
              {JOB_SEEKER_COMLETE_PROFILE_TEXT.notification3}
            </Typography>
            <Typography variant="h5" textAlign={"center"} padding={".5vw"}>
              {JOB_SEEKER_COMLETE_PROFILE_TEXT.notification4}
            </Typography>
          </div>
        </Box>

        <Box sx={{ padding: "0vw" }}>
          <Typography variant="h4" textAlign={"center"} padding={"3vw"}>
            {JOB_SEEKER_COMLETE_PROFILE_TEXT.alyticsTitle}
          </Typography>
          <Graph />
        </Box>
      </Box>
    </>
  );
};

export default JobSeekerCompleteProfile;
