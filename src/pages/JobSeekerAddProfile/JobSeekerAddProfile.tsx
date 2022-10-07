import React, {
  ReactElement,
  FC,
  useEffect,
  useRef,
  useState,
  useMemo,
  useCallback,
} from "react";
import { JOB_SEEKER_TABS, TEMPLATE_BUTTON } from "../../constants";
import { Typography, Divider, Button, Grid } from "@mui/material";
import TabButton from "../../components/TabButtons/TabButtons";
import JobSeekerTempleteButton from "../../components/JobSeekerProfile/JobSeekerTempleteButton";
import JobSeekerProfileCard from "../../components/JobSeekerProfile/JobSeekerProfileCard";
import { Card, CardContent, CardMedia } from "@mui/material";
import profilePic from "../assets/avatar-male.png";
import { makeStyles } from "@mui/styles";
import "../JobSeekerBaseStyles.css";
import { AgGridReact } from "ag-grid-react";
import { relations, LISTING_GENERIC_HEADERS } from "./AddProfileColumnHeaders";
import GridItem from "../GridItem/GridItem";
import { useAppSelector, useAppDispatch } from "../../services/StoreHooks";
import Notification from "../../components/Notification";
import { initialAlertState } from "../../modules/notificationState";
import RefreshIcon from "@mui/icons-material/Refresh";
import { createJobSeekerProfile } from "../../services/FormDataService";

const useStyles = makeStyles(() => ({
  buttonCardContainer: {
    "&.MuiCardContent-root": {
      paddingBottom: "0vw",
    },
  },
}));

const JobSeekerAddProfile: FC<any> = (props: any): ReactElement => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const gridRef = useRef<AgGridReact<any>>();
  const userDataState = useAppSelector((state) => state.currentUser);
  const notifyDataState = useAppSelector((state) => state.notificationAlert);

  const [columnDefs, setColumnDefs] = useState(LISTING_GENERIC_HEADERS);
  const [pageSize, setPageSize] = useState(10);
  const [selectedRows, setSelectedRows] = useState<any[]>([]);
  const [totalPages, setTotalPages] = useState(1);

  const fulfillUpload = (data: any) => {
    callResumeUpload(data?.profileLogId);
    props.handleComplete(0);
    props.handleNext();
  };

  const callResumeUpload = async (profileLogId: any) => {
    const seekerProfile = await createJobSeekerProfile({
      profileLogId: profileLogId,
      profileData: {
        profileLastCompletedStep: "1",
      },
    });
    if (seekerProfile?.data?.success) {
      dispatchProfileId(
        seekerProfile?.data?.data?.profileId,
        seekerProfile?.data?.data?.jobSeekerId
      );
    }
  };
  const dispatchProfileId = (profileId, jobSeekerId) => {
    dispatch({
      type: "USER_ADD",
      data: {
        userData: {
          ...userDataState.userData,
          profileId,
          jobSeekerId,
        },
        userId: userDataState.userId,
      },
    });
  };

  // const dispatchProfileLogId = (profileLogId) => {
  //   dispatch({
  //     type: "USER_ADD",
  //     data: {
  //       userData: {
  //         ...userDataState.userData,
  //         profileLogId,
  //       },
  //       userId: userDataState.userId,
  //     },
  //   });
  // };

  const resetNotificationData = () => {
    dispatch({
      type: "SEND_ALERT",
      data: {
        enable: initialAlertState.enable,
        type: initialAlertState.type,
        message: initialAlertState.message,
        duration: initialAlertState.duration,
      },
    });
  };
  let r1 = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    interviewed: "no",
    pdcStatus: null,
    profileLogId: "",
    dob: "",
    lastFiveDigitOfPan: "",
    fdcStatus: null,
    uploadProfile: "",
  };
  let r2 = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    interviewed: "no",
    pdcStatus: null,
    profileLogId: "",
    dob: "",
    lastFiveDigitOfPan: "",
    fdcStatus: null,
    uploadProfile: "",
  };
  let r3 = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    interviewed: "no",
    pdcStatus: null,
    profileLogId: "",
    dob: "",
    lastFiveDigitOfPan: "",
    fdcStatus: null,
    uploadProfile: "",
  };
  let r4 = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    interviewed: "no",
    pdcStatus: null,
    profileLogId: "",
    dob: "",
    lastFiveDigitOfPan: "",
    fdcStatus: null,
    uploadProfile: "",
  };
  let r5 = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    interviewed: "no",
    pdcStatus: null,
    profileLogId: "",
    dob: "",
    lastFiveDigitOfPan: "",
    fdcStatus: null,
    uploadProfile: "",
  };
  // let row = [r1, r2, r3, r4, r5];
  let row = [{ ...r1 }, { ...r2 }, { ...r3 }, { ...r4 }, { ...r5 }];
  const defaultColDef = useMemo(() => {
    return {
      flex: 1,
      minWidth: 170,
      maxWidth: 250,
      sortable: true,
      floatingFilter: true,
      enableRowGroup: true,
      enablePivot: true,
      enableValue: true,
      resizable: true,
      cellStyle: { "border-right-color": "#DFE5FF" },
    };
  }, []);
  // const onGridReady = React.useCallback(
  //   (params) => {
  //     apiCallRelatedFormData();
  //   },
  //   [gotData]
  // );
  // const onUpdateColumns = useCallback((data) => {
  //   if (gridRef?.current) gridRef.current.api.setColumnDefs(data);
  // }, []);
  // const autoGroupColumnDef = useMemo<ColDef>(() => {
  //   return {
  //     headerName: "Group",
  //     minWidth: 170,
  //     field: "athlete",
  //     valueGetter: (params) => {
  //       if (params.node!.group) {
  //         return params.node!.key;
  //       } else {
  //         return params.data[params.colDef.field!];
  //       }
  //     },
  //     headerCheckboxSelection: true,
  //     cellRenderer: "agGroupCellRenderer",
  //     cellRendererParams: {
  //       checkbox: true,
  //     },
  //   };
  // }, []);
  // const pageChange = (pageNumber) => {
  //   setPageNo(pageNumber);
  //   apiCallRelatedFormData(contestStatus, pageNumber - 1);
  // };

  // const pageSizeChange = (pageSizeChanged) => {
  //   setPageSize(pageSizeChanged);
  //   apiCallRelatedFormData(contestStatus, 0, pageSizeChanged);
  // };

  const onSelectionChanged = useCallback(() => {
    if (gridRef.current) {
      const rowSelection = gridRef.current.api.getSelectedRows();
      setSelectedRows(rowSelection);
    }
  }, []);

  const onCellValueChanged = useCallback((event) => {
    // console.log(event);
    // if (gridRef.current) {
    //   const rowSelection = gridRef.current.api.getSelectedRows();
    // }
  }, []);
  const clearTable = () => {
    // console.log(gridRef.current);
    row = [{ ...r1 }, { ...r2 }, { ...r3 }, { ...r4 }, { ...r5 }];
    gridRef.current?.api.setRowData(row);
    // console.log(gridRef.current);
  };

  return (
    <div className="form-encapsulate">
      <div className="form-card-holder">
        {notifyDataState && (
          <Notification
            open={notifyDataState.enable}
            type={notifyDataState.type}
            message={notifyDataState.message}
            duration={notifyDataState.duration}
            setOpen={() => resetNotificationData()}
          />
        )}
        {/* <div className="forms-button-container">
            <div
              className="card-container"
              style={{
                margin: "1vw .5vw 1vw 1vw",
              }}
            >
              <Card
                sx={{
                  padding: ".6vw",
                }}
              >
                <CardMedia
                  className="card-profile-image"
                  component="img"
                  alt="green iguana"
                  image={profilePic}
                />
                <CardContent className="card-profile-details-container">
                  <Typography
                    className="card-profile-details-text"
                    variant="caption"
                    component="div"
                  >
                    Rahul Dravid
                  </Typography>
                  <Typography
                    className="card-profile-details-text-text"
                    variant="caption"
                    color="text.secondary"
                  >
                    Patna,Bihar
                  </Typography>
                  <Typography
                    className="card-profile-details-text-text"
                    variant="caption"
                    color="text.secondary"
                  >
                    Right Hand
                  </Typography>
                </CardContent>
                <div className="profile-card-button-container">
                  <Button color="secondary" className="profile-card-button">
                    <div className="profile-card-button-image">
                      <img
                        src="assets/images/shape.png"
                        width={"60%"}
                        height={"60%"}
                      />
                    </div>
  
                    <div className="profile-card-button-text">
                      {"\u00a0\u00a0"}Go to Dashbord
                    </div>
                  </Button>
                  <Button className="profile-card-button" color="secondary">
                    <div className="profile-card-button-image">
                      <img
                        src="assets/images/shape2.png"
                        width={"60%"}
                        height={"60%"}
                      />
                    </div>
                    <div className="profile-card-button-text">
                      {"\u00a0\u00a0"}Contests
                    </div>
                  </Button>
                  <Button className="profile-card-button" color="secondary">
                    <div className="profile-card-button-image">
                      <img
                        src="assets/images/User.png"
                        width={"60%"}
                        height={"60%"}
                      />
                    </div>
                    <div className="profile-card-button-text">
                      {"\u00a0\u00a0"}Uploaded Job Seekers
                    </div>
                  </Button>
                </div>
              </Card>
            </div>
            <div
              style={{
                width: "80%",
                borderRadius: "1vw",
                margin: "1vw 1vw 1vw .5vw",
              }}
            >
              <JobSeekerProfileCard />
            </div>
          </div> */}
        <div>
          <div>
            <Typography
              variant="h4"
              gutterBottom
              component="div"
              color="black"
              margin={"2vw 1vw 0vw 2vw"}
            >
              For Bulk Duplication Check
            </Typography>
          </div>

          <div style={{ margin: "1vw 1vw 1vw 1vw" }}>
            {TEMPLATE_BUTTON.map((button) => (
              <JobSeekerTempleteButton
                fileName={button.iconFileName}
                title={button.title}
              />
            ))}
          </div>

          <div>
            <Typography
              variant="h6"
              gutterBottom
              component="div"
              color="black"
              display="flex"
              justifyContent="center"
            >
              <hr className="line" />
              {"( OR )"}
              <hr className="line" />
            </Typography>
          </div>
        </div>
        <div>
          <Typography
            variant="h4"
            gutterBottom
            component="div"
            color="black"
            margin={"2vw 1vw 2vw 2vw"}
          >
            Enter the Details Manually
          </Typography>
        </div>
        <div>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <div className="forms-button-container">
                <div>
                  <Button
                    variant="outlined"
                    className="save-draft-button"
                    onClick={() => clearTable()}
                    // disabled={columnsListOpen}
                  >
                    <RefreshIcon className="generic-icon" />
                    Clear Table
                  </Button>
                </div>
                <div></div>
              </div>
            </Grid>
          </Grid>
        </div>
        <div>
          <GridItem
            gridRef={gridRef}
            rowData={row}
            columnDefs={columnDefs}
            defaultColDef={defaultColDef}
            suppressRowClickSelection={true}
            groupSelectsChildren={true}
            rowSelection={"multiple"}
            rowGroupPanelShow={"always"}
            pivotPanelShow={"always"}
            enableRangeSelection={true}
            pagination={false}
            // pageSize={pageSize}
            onSelectionChanged={onSelectionChanged}
            // pageSizeArray={PAGE_SIZE_ARRAY}
            // totalPages={totalPages}
            // pageChange={pageChange}
            // pageSizeChange={pageSizeChange}
            onCellValueChanged={onCellValueChanged}
            fulfillUpload={fulfillUpload}
          />
        </div>
      </div>
    </div>
  );
};

export default JobSeekerAddProfile;
