import React, {
  ReactElement,
  FC,
  useEffect,
  useRef,
  useState,
  useMemo,
  useCallback,
} from "react";
import { ERROR_KEY, TEMPLATE_BUTTON } from "../../constants";
import { Typography, Button, Grid } from "@mui/material";
import JobSeekerTempleteButton from "../../components/JobSeekerProfile/JobSeekerTempleteButton";
import "../JobSeekerBaseStyles.css";
import { AgGridReact } from "ag-grid-react";
import { LISTING_GENERIC_HEADERS } from "./AddProfileColumnHeaders";
import GridItem from "../GridItem/GridItem";
import { useAppSelector, useAppDispatch } from "../../services/StoreHooks";
import Notification from "../../components/Notification";
import { initialAlertState } from "../../modules/notificationState";
import RefreshIcon from "@mui/icons-material/Refresh";
import { createJobSeekerProfile } from "../../services/FormDataService";

const JobSeekerAddProfile: FC<any> = (props: any): ReactElement => {
  const dispatch = useAppDispatch();
  const gridRef = useRef<AgGridReact<any>>();
  const userDataState = useAppSelector((state) => state.currentUser);
  const notifyDataState = useAppSelector((state) => state.notificationAlert);

  const [columnDefs, setColumnDefs] = useState(LISTING_GENERIC_HEADERS);
  const [selectedRows, setSelectedRows] = useState<any[]>([]);

  const fulfillUpload = (data: any) => {
    callResumeUpload(data?.profileLogId);
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
      props.handleComplete(0);
      props.handleNext();
    } else {
      console.log(seekerProfile);
      props.setType(ERROR_KEY);
      props.setDataMessage("Something went wrong");
      props.setOpen(true);
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
    contestId: props.contestId,
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
    contestId: props.contestId,
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
    contestId: props.contestId,
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
    contestId: props.contestId,
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
    contestId: props.contestId,
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
      cellStyle: { "borderRightColor": "#DFE5FF" },
    };
  }, []);

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
                key={button.title}
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
            onSelectionChanged={onSelectionChanged}
            onCellValueChanged={onCellValueChanged}
            fulfillUpload={fulfillUpload}
          />
        </div>
      </div>
    </div>
  );
};

export default JobSeekerAddProfile;
