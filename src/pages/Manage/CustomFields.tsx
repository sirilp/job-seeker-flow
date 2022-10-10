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
  Popover,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  FormGroup,
  FormControlLabel,
  Paper,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";
import VisibilityIcon from "@mui/icons-material/Visibility";
import BorderColorIcon from "@mui/icons-material/BorderColor";
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
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Calendar from "../../components/Calendar/Calendar";
import clsx from "clsx";

const useStyles = makeStyles(() => ({
  iconColor: {
    color: "#4d6cd9",
    margin: "8px",
  },
  uploadText: {
    color: "#4d6cd9",
  },
  viewAssessmentCard: {
    border: "1px solid grey",
    height: "200px ",
    marginTop: "10px",
    marginRight: "5px",
    marginLeft: "5px",
    fontSize: "15px",
  },
  assessmentActionButton: {
    height: "2px",
    width: "1px",
    float: "right",
    margin: "3px 3px 0px 0px",
    cursor: "pointer",
  },
  assessmentButton: {
    textAlign: "center",
    marginTop: 3,
  },
  assessmentDeleteAction: {
    border: "1px solid gray",
    borderRadius: 0,
    display: "flex",
    flexDirection: "row",
    justifyContent: "left",
    alignItems: "center",
    paddingLeft: "40px",
    width: "250px",
    color: "gray",
    height: "55px",
    fontSize: "16px",
  },
  deleteActionButton: {
    width: "250px",
    justifyContent: "left",
    paddingLeft: "25px",
    color: "gray",
    height: "55px",
    fontSize: "16px",
  },
  deleteIcon: {
    marginRight: "15px",
    cursor: "pointer",
  },
  assessmentUpdateAction: {
    borderLeft: "1px solid gray",
    borderRight: "1px solid gray",
    borderBottom: "1px solid gray",
    borderRadius: 0,
    display: "flex",
    flexDirection: "row",
    justifyContent: "left",
    alignItems: "center",
    paddingLeft: "43px",
    width: "250px",
    color: "gray",
    height: "55px",
    fontSize: "16px",
  },
  updateActionButton: {
    width: "250px",
    justifyContent: "left",
    color: "gray",
    height: "55px",
    fontSize: "16px",
  },
  updateIcon: {
    marginRight: "17px",
    backgroundColor: "gray",
    color: "white",
    borderRadius: 3,
    cursor: "pointer",
    padding: "2px",
  },
  uploadIcon: {
    size: "small",
    marginRight: "18px",
    marginLeft: "25px",
    backgroundColor: "gray",
    color: "white",
    borderRadius: "2px",
    fontSize: "14px",
  },
  assessmentDialogueBox: {
    backgroundColor: "#4D6CD9",
    width: "600px",
    textAlign: "center",
  },
  assessmentDialogueContent: {
    textAlign: "center",
  },
  assessmentDialogueText: {
    paddingTop: "50px",
    paddingBottom: "40px",
    justifyContent: "center",
    textAlign: "center",
  },
  assessmentDialogueAction: {
    paddingTop: "10px",
    paddingBottom: "40px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "600px",
  },
  delete: {
    backgroundColor: "#4D6CD9",
    borderRadius: 20,
    color: "black",
    paddingLeft: "30px",
    paddingRight: "30px",
    height: "30px",
    paddingTop: "3px",
    cursor: "pointer",
    marginRight: "20px",
  },
  cancel: {
    backgroundColor: "#4D6CD9",
    borderRadius: 20,
    color: "black",
    paddingLeft: "20px",
    paddingRight: "20px",
    height: "30px",
    paddingTop: "3px",
    cursor: "pointer",
    marginLeft: "20px",
  },
  leftDrawerBox: {
    width: "390px",
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    top: 0,
    overflowY: "auto",
  },
  viewAssessmentTitle: {
    textAlign: "center",
    backgroundColor: "#4D6CD9",
    height: "50px",
    // width: "390px",
    color: "#FFFFFF",
    padding: "10px",
    fontSize: "20px",
    fontWeight: "bold",
  },
  assessmentDetailsCard: {
    border: "1px solid grey",
    height: "180px ",
    marginTop: "20px",
    marginRight: "5px",
    marginLeft: "5px",
    fontSize: "13px",
    marginBottom: "10px",
  },
  assessmentDetails: {
    width: "190px",
    "& legend": { display: "none" },
    "& fieldset": { top: 0 },
  },
  partnerAssessment: {
    fontSize: "20px",
    fontWeight: "bold",
    textAlign: "center",
  },
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    height: 687,
    width: 390,
    margin: 1,
    border: "1px solid #E5E5E5",
  },
  section1: {
    textAlign: "center",
    backgroundColor: "#4D6CD9",
    height: "50px",
    width: "390px",
    color: "#FFFFFF",
    padding: "10px",
  },
  section2: {
    marginTop: "15px",
    width: "390px",
    textAlign: "center",
  },
  section3: {
    marginTop: "15px",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  card: {
    marginLeft: "18px",
    backgroundColor: "white",
    width: "350px",
    height: "auto",
    borderRadius: "10px",
  },
  timeSlotTitleContainer: {
    marginTop: "40px",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  commonColor: {
    color: "#4d6cd9",
  },
  commonMargin: {
    margin: "10px",
  },
  dropdown: {
    border: "1px solid #DFE5FF",
  },
  dropdownContent: {
    display: "inline-flex",
    alignItems: "center",
  },
  closeIcon: {
    float: "right",
  },
  formControl: {
    top: 5,
    minWidth: 120,
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
    <div className={classes.assessmentDialogueContent}>
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
    <div className={classes.assessmentDialogueContent}>
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
        <Box className={classes.leftDrawerBox}>
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
  // const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
  //   <Tooltip
  //     {...props}
  //     placement="right"
  //     arrow
  //     classes={{ popper: className, arrow: classes.arrow }}
  //     // className={classes.arrowStyle}
  //   />
  // ))(({ theme }) => ({
  //   [`& .${tooltipClasses.tooltip}`]: {
  //     backgroundColor: "#ffffff",
  //     border: `1px solid ${option.color}`,
  //     maxWidth: 220,
  //     fontSize: theme.typography.pxToRem(12),
  //     borderRadius: "1vw",
  //   },
  // }));
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
          className={classes.dropdown}
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
      <div className={classes.dropdownContent}>
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
  const [anchorElView, setAnchorElView] = useState<HTMLButtonElement | null>(
    null
  );
  const [anchorElUpload, setAnchorElUpload] =
    useState<HTMLButtonElement | null>(null);
  const [isDeleteBoxOpen, setIsDeleteBoxOpen] = useState(false);
  const [isUpdateBoxOpen, setIsUpdateBoxOpen] = useState(false);
  const [isUploadBoxOpen, setIsUploadBoxOpen] = useState(false);
  const [isDeleteSuccessBoxOpen, setIsDeleteSuccessBoxOpen] = useState(false);

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

  const handleCloseView = () => {
    setAnchorElView(null);
  };

  const handleViewReport = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElView(event.currentTarget);
  };

  const openViewPop = Boolean(anchorElView);

  const ViewAssessmentReport = () => {
    return (
      <Card className={classes.viewAssessmentCard} elevation={3}>
        <Box className={classes.assessmentDialogueContent}>
          <div className={classes.commonMargin}>
            Assessment Type - Interview as a Service
            <IconButton
              onClick={handleViewReport}
              className={classes.assessmentActionButton}
            >
              <DehazeIcon className={classes.commonColor} />
            </IconButton>
            <Popover
              id="view-popover"
              open={openViewPop}
              anchorEl={anchorElView}
              onClose={handleCloseView}
              anchorReference="anchorPosition"
              anchorPosition={{ top: 345, left: 355 }}
            >
              <Box className={classes.assessmentDeleteAction}>
                <DeleteForeverIcon
                  className={classes.deleteIcon}
                  onClick={() => {
                    setIsDeleteBoxOpen(true);
                  }}
                />
                <Typography>Delete</Typography>
              </Box>
              <Box className={classes.assessmentUpdateAction}>
                <BorderColorIcon
                  className={classes.updateIcon}
                  onClick={() => {
                    setIsUpdateBoxOpen(true);
                  }}
                  fontSize="small"
                />
                <Typography>Update</Typography>
              </Box>
            </Popover>
          </div>
          <div className={classes.commonMargin}>
            Assessment Partner - Interviewplus
          </div>
          <div className={classes.commonMargin}>
            Assessment Partner - Interviewplus
          </div>
          <div className={classes.commonMargin}>
            Assessment Partner - Interviewplus
          </div>
        </Box>
        <Box className={classes.assessmentButton}>
          <Button variant="contained">View Assesment Report</Button>
        </Box>
      </Card>
    );
  };

  const handleCloseUpload = () => {
    setAnchorElUpload(null);
  };

  const handleUploadReport = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElUpload(event.currentTarget);
  };

  const openUploadPop = Boolean(anchorElUpload);

  const UploadAssessmentReport = () => {
    return (
      <Card className={classes.viewAssessmentCard} elevation={3}>
        <Box textAlign={"center"}>
          <div className={classes.commonMargin}>
            Assessment Type - Interview as a Service
            <IconButton
              onClick={handleUploadReport}
              className={classes.assessmentActionButton}
            >
              <DehazeIcon className={classes.commonColor} />
            </IconButton>
            <Popover
              id="upload-popover"
              open={openUploadPop}
              anchorEl={anchorElUpload}
              onClose={handleCloseUpload}
              anchorReference="anchorPosition"
              anchorPosition={{ top: 565, left: 355 }}
            >
              <Box className={classes.assessmentDeleteAction}>
                <DeleteForeverIcon
                  className={classes.deleteIcon}
                  onClick={() => {
                    setIsDeleteBoxOpen(true);
                  }}
                />
                <Typography>Delete</Typography>
              </Box>
              <Box className={classes.assessmentUpdateAction}>
                <BorderColorIcon
                  className={classes.updateIcon}
                  onClick={() => {
                    setIsUploadBoxOpen(true);
                  }}
                  fontSize="small"
                />
                <Typography>Upload</Typography>
              </Box>
            </Popover>
          </div>
          <div className={classes.commonMargin}>
            Assessment Partner - Interviewplus
          </div>
          <div className={classes.commonMargin}>
            Assessment Partner - Interviewplus
          </div>
          <div className={classes.commonMargin}>
            Assessment Partner - Interviewplus
          </div>
        </Box>
        <Box className={classes.assessmentButton}>
          <Button variant="contained">Upload Assesment Report</Button>
        </Box>
      </Card>
    );
  };

  const handleDelete = () => {
    //Delete Method

    setIsDeleteBoxOpen(false);
    setAnchorElUpload(null);
    setAnchorElView(null);

    setIsDeleteSuccessBoxOpen(true);
  };

  const DeleteAssessment = () => {
    return (
      <Dialog
        open={isDeleteBoxOpen}
        aria-labelledby="delete-dialog-title"
        aria-describedby="delete-dialog-description"
      >
        <DialogTitle
          id="delete-dialog-title"
          className={classes.assessmentDialogueBox}
        >
          {"Delete Assessment"}
          <CloseIcon
            onClick={() => {
              setIsDeleteBoxOpen(false);
            }}
            className={classes.assessmentActionButton}
          />
        </DialogTitle>
        <DialogContent className={classes.assessmentDialogueContent}>
          <DialogContentText
            id="delete-dialog-description"
            className={classes.assessmentDialogueText}
          >
            Are you sure you want to Delete Assessment of the Job Seeker from
            the platfrom?
          </DialogContentText>
        </DialogContent>
        <Box className={classes.assessmentDialogueAction}>
          <Box className={classes.delete} onClick={handleDelete}>
            <Typography>Yes</Typography>
          </Box>
          <Box
            className={classes.cancel}
            onClick={() => {
              setIsDeleteBoxOpen(false);
              setAnchorElUpload(null);
              setAnchorElView(null);
            }}
          >
            <Typography>Cancel</Typography>
          </Box>
        </Box>
      </Dialog>
    );
  };

  const DeleteAssessmentSuccess = () => {
    return (
      <Dialog
        open={isDeleteSuccessBoxOpen}
        aria-labelledby="delete-success-dialog-title"
        aria-describedby="delete-success-dialog-description"
      >
        <DialogTitle
          id="delete-success-dialog-title"
          className={classes.assessmentDialogueBox}
        >
          {"Delete Assessment"}
          <CloseIcon
            onClick={() => {
              setIsDeleteSuccessBoxOpen(false);
            }}
            className={classes.assessmentActionButton}
          />
        </DialogTitle>
        <DialogContent className={classes.assessmentDialogueContent}>
          <DialogContentText
            id="delete-success-dialog-description"
            className={classes.assessmentDialogueText}
          >
            Assessment has been deleted!
          </DialogContentText>
        </DialogContent>
      </Dialog>
    );
  };

  const UpdateAssessment = () => {
    return (
      <Dialog
        open={isUpdateBoxOpen}
        aria-labelledby="update-dialog-title"
        aria-describedby="update-dialog-description"
      >
        <DialogTitle
          id="update-dialog-title"
          className={classes.assessmentDialogueBox}
        >
          {"Update Assessment"}
          <CloseIcon
            onClick={() => {
              setIsUpdateBoxOpen(false);
              setAnchorElView(null);
            }}
            className={classes.assessmentActionButton}
          />
        </DialogTitle>
        <DialogContent className={classes.assessmentDialogueContent}>
          <DialogContentText
            id="update-dialog-description"
            className={classes.assessmentDialogueText}
          >
            Job Seeker Name -
          </DialogContentText>
        </DialogContent>
      </Dialog>
    );
  };

  const UploadAssessment = () => {
    return (
      <Dialog
        open={isUploadBoxOpen}
        aria-labelledby="upload-dialog-title"
        aria-describedby="upload-dialog-description"
      >
        <DialogTitle
          id="upload-dialog-title"
          className={classes.assessmentDialogueBox}
        >
          {"Upload Assessment"}
          <CloseIcon
            onClick={() => {
              setIsUploadBoxOpen(false);
              setAnchorElUpload(null);
            }}
            className={classes.assessmentActionButton}
          />
        </DialogTitle>
        <DialogContent className={classes.assessmentDialogueContent}>
          <DialogContentText
            id="upload-dialog-description"
            className={classes.assessmentDialogueText}
          >
            Job Seeker Name -
          </DialogContentText>
        </DialogContent>
      </Dialog>
    );
  };

  return (
    <div className={classes.assessmentDialogueContent}>
      <Typography onClick={handleClick} className={classes.uploadText}>
        View Assessments
      </Typography>

      <Drawer
        anchor="left"
        open={toggleDrawer}
        onClose={() => setToggleDrawer(false)}
      >
        <Box className={classes.leftDrawerBox}>
          <Grid>
            <Box>
              <Typography className={classes.viewAssessmentTitle}>
                View Assessments
                <CloseIcon
                  className={classes.closeIcon}
                  onClick={() => setToggleDrawer(false)}
                />
              </Typography>
            </Box>
            <Typography className={classes.assessmentDialogueContent}>
              Request New Assessment
            </Typography>
            <Typography className={classes.assessmentDialogueContent}>
              Job Seeker Name - Rajesh Sharma
            </Typography>
            <Box>
              <Card className={classes.assessmentDetailsCard} elevation={3}>
                <Box display={"flex"}>
                  <Typography p={2.2}>Assessment Type</Typography>
                  <FormControl className={classes.formControl} size="small">
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
                      className={classes.assessmentDetails}
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
                  <FormControl className={classes.formControl} size="small">
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
                      className={classes.assessmentDetails}
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
                <Box
                  className={clsx(
                    classes.assessmentDialogueContent,
                    classes.section3
                  )}
                >
                  <Button variant="contained">Request Assessment</Button>
                </Box>
              </Card>
              <Typography className={classes.partnerAssessment}>
                Partner Assessment Reports
              </Typography>
              <ViewAssessmentReport />
              <UploadAssessmentReport />

              <DeleteAssessment />
              <DeleteAssessmentSuccess />
              <UpdateAssessment />
              <UploadAssessment />
            </Box>
          </Grid>
        </Box>
      </Drawer>
    </div>
  );
};

export const Interview = (params) => {
  const classes = useStyles();

  const [toggleDrawer, setToggleDrawer] = useState(false);
  const times = ["11:00am to 01:00pm", "03:00pm to 06:00pm"];

  const Card = (props) => {
    const handleOnChange = (e) => {
      if (e.target.checked) {
        const time = e.target.value;
        alert(e.target.value);
      }
    };
    return (
      <Grid>
        <Box>
          <Typography className={classes.viewAssessmentTitle}>
            Interview Scheduling
            <CloseIcon onClick={handleClose} className={classes.closeIcon} />
          </Typography>
        </Box>
        <Box className={classes.section2}>
          <h5 className={classes.commonColor}>Phase - L1</h5>
        </Box>
        <Box className={classes.section3}>
          <p>Choose Date</p>
          <Box>
            <Calendar status={true} />
          </Box>
        </Box>

        <Box p={1} className={classes.timeSlotTitleContainer}>
          <p>Time Slots Available</p>
          <FormGroup>
            {times.map((time) => (
              <FormControlLabel
                onChange={handleOnChange}
                value={time}
                control={<Checkbox />}
                label={time}
              />
            ))}
          </FormGroup>
        </Box>
      </Grid>
    );
  };

  const handleClose = () => {
    setToggleDrawer(false);
  };

  return (
    <div className={classes.assessmentDialogueContent}>
      <Button
        size="small"
        onClick={() => setToggleDrawer(true)}
        variant="contained"
        sx={{ background: "#4D6CD9", borderRadius: "15px", height: "25px" }}
      >
        Schedule
      </Button>
      <Drawer anchor="right" open={toggleDrawer} onClose={handleClose}>
        <Card handleCloseIcon={handleClose} />
      </Drawer>
    </div>
  );
};

const CustomFields = () => {
  return <div>CustomFields</div>;
};
export default CustomFields;
