import React, { useState, useRef, useEffect } from "react";
import {
  Typography,
  Divider,
  Button,
  TextField,
  Box,
  TooltipProps,
  tooltipClasses,
  Tooltip,
  ClickAwayListener,
  IconButton,
  Drawer,
  Grid,
  Card,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";
import VisibilityIcon from "@mui/icons-material/Visibility";

import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import CloseIcon from "@mui/icons-material/Close";

import DehazeIcon from "@mui/icons-material/Dehaze";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";
import PauseCircleFilledIcon from "@mui/icons-material/PauseCircleFilled";
import { openFile } from "../../services/DocumentService";
import MessageBox from "../Broadcast/MessageBox";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";

const useStyles = makeStyles(() => ({
  buttonContainer: {
    "&.MuiButton-root": {
      minWidth: "2vw",
    },
  },

  arrow: {
    "&:before": {
      border: "1px solid #36454F",
      color: "#ffffff",
    },
  },
  iconColor: {
    color: "#4d6cd9",
    margin: "8px",
  },
  uploadText: {
    color: "#4d6cd9",
  },
}));

export const ResumeUploaded = (params) => {
  const classes = useStyles();
  const handleViewResume = async () => {
    const resumeId = params.getValue();
    console.log(resumeId);
    await openFile(resumeId);
  };

  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <Typography onClick={handleViewResume} className={classes.uploadText}>
        View Resume Uploaded
      </Typography>
    </div>
  );
};

export const Icons = (params) => {
  const [toggleDrawer, setToggleDrawer] = useState(false);

  const classes = useStyles();
  const handleClick = () => {
    console.log(params);
  };
  const handleChat = () => {
    console.log("Chat Icon clicked");
    setToggleDrawer(true);
  };

  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <VisibilityIcon className={classes.iconColor} onClick={handleClick} />

      <LocalPhoneRoundedIcon
        className={classes.iconColor}
        onClick={handleClick}
      />
      <ChatBubbleOutlineIcon
        className={classes.iconColor}
        onClick={handleChat}
      />
      <DehazeIcon className={classes.iconColor} onClick={handleClick} />
      <Drawer
        anchor="left"
        open={toggleDrawer}
        onClose={() => setToggleDrawer(false)}
      >
        <Box
          sx={{
            width: "380px",
            overflow: "hidden",
            justifyContent: "center",
            alignItems: "center",
            top: 0,
            left: 0,
          }}
          // onClick={() => setToggleDrawer(false)}
          // onKeyDown={() => setToggleDrawer(false)}
        >
          <MessageBox closeIt={() => setToggleDrawer(false)} params={params} />
          {console.log("Left Drawer called")}
        </Box>
      </Drawer>
    </div>
  );
};

export const CustomDropDown = (params: any) => {
  // console.log("Vetting custom feild", params);
  const Passed = {
    option: "passed",
    color: "#22C55E",
    title: "Success",
    body: "Passed",
  };

  const Pending = {
    option: "pending",
    color: "#ff781f",
    title: "",
    body: "Pending",
  };
  const Failed = {
    option: "failed",
    color: "#EF4444",
    title: "",
    body: "Failed",
  };
  const [option, setOption] = useState({
    option: "",
    color: "",
    title: "",
    body: "",
  });
  useEffect(() => {
    console.log(params.getValue());
    if (params.getValue() === null || "") {
      setOption({
        option: "",
        color: "",
        title: "",
        body: "",
      });
    } else if (params.getValue() === "passed") {
      setOption(Passed);
    } else if (params.getValue() === "pending") {
      setOption(Pending);
    } else if (params.getValue() === "failed") {
      setOption(Failed);
    }
  }, []);

  const id = `cellNo${params.rowIndex}${params.column.instanceId}`;
  const iconId = `iconNo${params.rowIndex}${params.column.instanceId}`;

  const [message, setMessage] = useState("");
  const handleChange = (event: any) => {
    params.setValue(event.target.value);
    if (event.target.value == "passed") {
      console.log("Can call Api to change status to Passed");
      setOption(Passed);
    } else if (event.target.value == "pending") {
      setOption(Pending);
    } else if (event.target.value == "failed") {
      setOption(Failed);
    } else if (event.target.value == "") {
      setOption({
        option: "",
        color: "",
        title: "",
        body: "",
      });
    }
  };
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip
      {...props}
      placement="right"
      arrow
      classes={{ popper: className, arrow: classes.arrow }}
      // className={classes.arrowStyle}
    />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: "#ffffff",
      border: `1px solid ${option.color}`,
      maxWidth: 220,
      fontSize: theme.typography.pxToRem(12),
      borderRadius: "1vw",
    },
  }));
  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
    }, 4000);
  };
  return (
    <>
      <div>
        <select
          id={id}
          style={{ border: "1px solid #DFE5FF" }}
          value={option.option}
          onChange={handleChange}
          disabled
        >
          <option value="">Null</option>
          <option value="passed">Passed</option>
          <option value="pending">Pending</option>
          <option value="failed">Failed</option>
        </select>
      </div>
      <div style={{ display: "inline-flex", alignItems: "center" }}>
        {(() => {
          if (option.option == "passed") {
            return (
              <Tooltip title={option.body} placement="right-start">
                <IconButton>
                  <CheckCircleIcon
                    id={iconId}
                    sx={{ color: option.color, fontSize: "25px" }}
                  />
                </IconButton>
              </Tooltip>
            );
          } else if (option.option == "pending") {
            return (
              <Tooltip title={option.body} placement="right-start">
                <IconButton>
                  <PauseCircleFilledIcon
                    id={iconId}
                    sx={{ color: option.color, fontSize: "25px" }}
                  />
                </IconButton>
              </Tooltip>
            );
          } else if (option.option == "failed") {
            return (
              <Tooltip title={option.body} placement="right-start">
                <IconButton>
                  <ErrorIcon
                    id={iconId}
                    sx={{ color: option.color, fontSize: "25px" }}
                  />
                </IconButton>
              </Tooltip>
            );
          }
        })()}
      </div>
    </>
  );
};

export const ViewAssessments = (params) => {
  const [toggleDrawer, setToggleDrawer] = useState(false);
  const [assessmentType, setAssessmentType] = React.useState<string[]>([]);
  const [assessmentPartner, setAssessmentPartner] = React.useState<string[]>(
    []
  );

  const assessmentTypes = [
    "Assessment Services",
    "Interview as a Service",
    "Resume Builder",
    "Learning Management System",
  ];
  const assessmentPartners = [
    "Assessment Services",
    "Interview as a Service",
    "Resume Builder",
    "Learning Management System",
  ];

  const handleChangeAssessmentType = (
    event: SelectChangeEvent<typeof assessmentType>
  ) => {
    const {
      target: { value },
    } = event;
    setAssessmentType(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleChangeAssessmentPartner = (
    event: SelectChangeEvent<typeof assessmentPartner>
  ) => {
    const {
      target: { value },
    } = event;
    setAssessmentPartner(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const classes = useStyles();
  const handleClick = () => {
    console.log(params);
    setToggleDrawer(true);
  };

  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <Typography onClick={handleClick} className={classes.uploadText}>
        View Assessments
      </Typography>

      <Drawer
        anchor="left"
        open={toggleDrawer}
        onClose={() => setToggleDrawer(false)}
      >
        <Box
          sx={{
            width: "400px",
            overflow: "hidden",
            justifyContent: "center",
            alignItems: "center",
            top: 0,
            overflowY: "auto",
          }}
        >
          <Grid>
            <Box>
              <Typography
                sx={{
                  textAlign: "center",
                  backgroundColor: "#4D6CD9",
                  height: "50px",
                  width: "390px",
                  color: "#FFFFFF",
                  padding: "10px",
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                View Assessments
                <CloseIcon
                  sx={{ float: "right" }}
                  onClick={() => setToggleDrawer(false)}
                />
              </Typography>
            </Box>
            <Typography textAlign={"center"}>Request New Assessment</Typography>
            <Typography>Job Seeker Name - Rajesh Sharma</Typography>
            <Box>
              <Card
                sx={{
                  border: "1px solid grey",
                  height: "180px ",
                  marginTop: "20px",
                  marginRight: "5px",
                  marginLeft: "5px",
                  fontSize: "13px",
                }}
                elevation={3}
              >
                <Box display={"flex"}>
                  <Typography p={2}>Assessment Type</Typography>
                  <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                    {/* <InputLabel id="demo-multiple-checkbox-label">
                      Assessment Type
                    </InputLabel> */}
                    <Select
                      labelId="demo-multiple-checkbox-label"
                      id="demo-multiple-checkbox"
                      multiple
                      value={assessmentType}
                      onChange={handleChangeAssessmentType}
                      input={<OutlinedInput label="Tag" />}
                      renderValue={(selected) => selected.join(", ")}
                      sx={{
                        width: "190px",
                        "& legend": { display: "none" },
                        "& fieldset": { top: 0 },
                      }}
                    >
                      {assessmentTypes.map((name) => (
                        <MenuItem key={name} value={name}>
                          <Checkbox
                            checked={assessmentType.indexOf(name) > -1}
                          />
                          <ListItemText primary={name} />
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Box>
                <Box display={"flex"}>
                  <Typography p={1}>Assessment Partner</Typography>
                  <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                    {/* <InputLabel id="demo-multiple-checkbox-label">
                      Assessment Type
                    </InputLabel> */}
                    <Select
                      labelId="demo-multiple-checkbox-label"
                      id="demo-multiple-checkbox"
                      multiple
                      value={assessmentPartner}
                      onChange={handleChangeAssessmentPartner}
                      input={<OutlinedInput label="Tag" />}
                      renderValue={(selected) => selected.join(", ")}
                      sx={{
                        width: "190px",
                        "& legend": { display: "none" },
                        "& fieldset": { top: 0 },
                      }}
                    >
                      {assessmentPartners.map((name) => (
                        <MenuItem key={name} value={name}>
                          <Checkbox
                            checked={assessmentPartner.indexOf(name) > -1}
                          />
                          <ListItemText primary={name} />
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Box>
                <Box textAlign={"center"}>
                  <Button variant="contained">Request Assessment</Button>
                </Box>
              </Card>
              <Typography
                sx={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Partner Assessment Reports
              </Typography>
              <Card
                sx={{
                  border: "1px solid grey",
                  height: "200px ",
                  marginTop: "20px",
                  marginRight: "5px",
                  marginLeft: "5px",
                  fontSize: "15px",
                }}
                elevation={3}
              >
                <Box textAlign={"center"}>
                  <div style={{ margin: "10px" }}>
                    Assessment Type - Interview as a Service
                    <FormatAlignJustifyIcon
                      sx={{ color: "blue", float: "right" }}
                    />
                  </div>
                  <div style={{ margin: "10px" }}>
                    Assessment Partner - Interviewplus
                  </div>
                  <div style={{ margin: "10px" }}>
                    Assessment Partner - Interviewplus
                  </div>
                  <div style={{ margin: "10px" }}>
                    Assessment Partner - Interviewplus
                  </div>
                </Box>
                <Box textAlign={"center"} mt={3}>
                  <Button variant="contained">View Assesment Report</Button>
                </Box>
              </Card>

              <Card
                sx={{
                  border: "1px solid grey",
                  height: "200px ",
                  marginTop: "20px",
                  marginRight: "5px",
                  marginLeft: "5px",
                  fontSize: "15px",
                }}
                elevation={3}
              >
                <Box textAlign={"center"}>
                  <div style={{ margin: "10px" }}>
                    Assessment Type - Interview as a Service
                    <FormatAlignJustifyIcon
                      sx={{ color: "blue", float: "right" }}
                    />
                  </div>
                  <div style={{ margin: "10px" }}>
                    Assessment Partner - Interviewplus
                  </div>
                  <div style={{ margin: "10px" }}>
                    Assessment Partner - Interviewplus
                  </div>
                  <div style={{ margin: "10px" }}>
                    Assessment Partner - Interviewplus
                  </div>
                </Box>
                <Box textAlign={"center"} mt={3}>
                  <Button variant="contained">Upload Assesment Report</Button>
                </Box>
              </Card>
            </Box>
          </Grid>
        </Box>
      </Drawer>
    </div>
  );
};

const CustomFields = () => {
  return <div>CustomFields</div>;
};
export default CustomFields;
