import React, { useState, useEffect } from "react";
import Graph from "../../components/AnalyticsGraph/Graph";
import JobSeekerProfileCard from "../../components/JobSeekerProfile/JobSeekerProfileCard";
import TabWrapper, { TabPanel } from "../../components/TabWrapper/TabWrapper";

import { Divider, Grid, Box, Typography } from "@mui/material";
import { shadows } from "@mui/system";
import { getContestAggregateStatistics } from "../../services/JobSeekerService";
import { JOB_SEEKER_COMLETE_PROFILE_TEXT } from "../../constants";

const JobSeekerCompleteProfile = (props) => {
  const [activeTab, setActiveTab] = useState(0);
  const [dataMessage, setDataMessage] = useState("");
  const [open, setOpen] = useState(false);
  const [type, setType] = useState("");

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
      <Grid container display="flex" justifyContent={"center"}>
        <Grid item xs={9.5} sx={{ boxShadow: 2 }}>
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
          <div style={{ padding: "3vw" }}>
            <JobSeekerProfileCard contestId={props.contestId} />
          </div>
          <div style={{ padding: "0 3vw 0 3vw" }}>
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
        </Grid>

        <Grid item xs={9.5} sx={{ padding: "0vw" }}>
          <Typography variant="h4" textAlign={"center"} padding={"3vw"}>
            {JOB_SEEKER_COMLETE_PROFILE_TEXT.alyticsTitle}
          </Typography>
          <Graph />
        </Grid>
      </Grid>
    </>
  );
};

export default JobSeekerCompleteProfile;
