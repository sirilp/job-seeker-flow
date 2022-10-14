import React, { ReactElement, FC, useEffect } from "react";
import {
  Select,
  MenuItem,
  Checkbox,
  TextField,
  InputLabel,
  FormControl,
  CircularProgress,
  Stack,
} from "@mui/material";
import InlineInputs from "../../components/InlineInputs/InlineInputs";
import {
  CTCDetails,
  FRESHER_TEXT,
  TCTC_SUB_TEXT,
  TOTAL_CTC_TEXT,
  FIXED_CTC_TEXT,
  TOTAL_EXP_TEXT,
  CTC_DETAIL_TEXT,
  TOTAL_CTC_LABEL,
  WorkStatusArray,
  YearMonthDetails,
  TCTC_PLACEHOLDER,
  EXPERIENCE_TITLE,
  WORK_STATUS_TEXT,
  RELEVANT_EXP_TEXT,
  VARIABLE_CTC_TEXT,
  EXPECTED_CTC_TEXT,
} from "./JobSeekerProfileFlowConstants";
import "./JobSeekerProfileFlow.css";
import PreviousNextButtons from "../../components/PreviousNextButtons/PreviousNextButtons";
import {
  getJobSeekerProfile,
  updateJobSeekerProfile,
} from "../../services/FormDataService";
import { useAppSelector, useAppDispatch } from "../../services/StoreHooks";
import {
  ERROR_KEY,
  SUCCESS_KEY,
  FORM_SUBMISSION_SUCCESS,
  EXPEXTED_CTC_DET,
  WARNING_KEY,
} from "../../constants";

const JobSeekerProfileDetails: FC<any> = (props): ReactElement => {
  const dispatch = useAppDispatch();
  const userDataState = useAppSelector((state) => state.currentUser);

  const [freshGraduate, setFreshGraduate] = React.useState(false);
  const [loader, setLoader] = React.useState(false);
  const [workStatus, setWorkStatus] = React.useState("");
  const [totalCtc, setTotalCtc] = React.useState("");
  const [totalExperience, setTotalExperience] = React.useState<{
    totalExperienceYears: string;
    totalExperienceMonths: string;
  }>({ totalExperienceYears: "", totalExperienceMonths: "" });
  const [relevantExperience, setRelevantExperience] = React.useState<{
    relevantExperienceYears: string;
    relevantExperienceMonths: string;
  }>({ relevantExperienceYears: "", relevantExperienceMonths: "" });
  const [fixedCtc, setFixedCtc] = React.useState<{
    fixedCtcLakh: string;
    fixedCtcThousand: string;
  }>({ fixedCtcLakh: "", fixedCtcThousand: "" });
  const [variableCtc, setVariableCtc] = React.useState<{
    variableCtcLakh: string;
    variableCtcThousand: string;
  }>({ variableCtcLakh: "", variableCtcThousand: "" });
  const [expectedCtc, setExpectedCtc] = React.useState<{
    expectedCtcLakh: string;
    expectedCtcThousand: string;
  }>({ expectedCtcLakh: "", expectedCtcThousand: "" });

  const handleTotalExperience = (value: string, index: number) => {
    if (index === 0 && value)
      setTotalExperience({
        totalExperienceYears: value,
        totalExperienceMonths: totalExperience.totalExperienceMonths,
      });
    else if (index === 1 && value)
      setTotalExperience({
        totalExperienceYears: totalExperience.totalExperienceYears,
        totalExperienceMonths: value,
      });
  };

  const handleRelevantExperience = (value: string, index: number) => {
    if (index === 0 && value)
      setRelevantExperience({
        relevantExperienceYears: value,
        relevantExperienceMonths: relevantExperience.relevantExperienceMonths,
      });
    else if (index === 1 && value)
      setRelevantExperience({
        relevantExperienceYears: relevantExperience.relevantExperienceYears,
        relevantExperienceMonths: value,
      });
  };

  const handleFixedCtc = (value: string, index: number) => {
    if (index === 0) {
      setFixedCtc({
        fixedCtcLakh: value,
        fixedCtcThousand: fixedCtc.fixedCtcThousand,
      });
      handleTotalCtc(value ? value : '0', '', '', '')
    }
    else if (index === 1) {
      setFixedCtc({
        fixedCtcLakh: fixedCtc.fixedCtcLakh,
        fixedCtcThousand: value,
      });
      handleTotalCtc('', value ? value : '0', '', '')
    }
  };

  const handleVariableCtc = (value: string, index: number) => {
    if (index === 0) {
      setVariableCtc({
        variableCtcLakh: value,
        variableCtcThousand: variableCtc.variableCtcThousand,
      });
      handleTotalCtc('', '', value ? value : '0', '')
    }
    else if (index === 1) {
      setVariableCtc({
        variableCtcLakh: variableCtc.variableCtcLakh,
        variableCtcThousand: value,
      });
      handleTotalCtc('', '', '', value ? value : '0')
    }
  };

  const handleTotalCtc = (fL: string, fT: string, vL: string, vT: string) => {
    setTotalCtc((
      (parseInt(fL ? fL : (fixedCtc.fixedCtcLakh ? fixedCtc.fixedCtcLakh : '0')) +
        parseInt(vL ? vL : (variableCtc.variableCtcLakh ? variableCtc.variableCtcLakh : '0'))) * 100000 +
      (parseInt(fT ? fT : (fixedCtc.fixedCtcThousand ? fixedCtc.fixedCtcThousand : '0'))
        + parseInt(vT ? vT : (variableCtc.variableCtcThousand ? variableCtc.variableCtcThousand : '0'))) * 1000).toString());
  }

  const handleExpectedCtc = (value: string, index: number) => {
    if (index === 0)
      setExpectedCtc({
        expectedCtcLakh: value ? value : '0',
        expectedCtcThousand: expectedCtc.expectedCtcThousand,
      });
    else if (index === 1)
      setExpectedCtc({
        expectedCtcLakh: expectedCtc.expectedCtcLakh,
        expectedCtcThousand: value ? value : '0',
      });
  };

  const submitDetails = async () => {
    setLoader(true);
    const profileDetailsMap = buildDetailsPayload();

    if (profileDetailsMap.expectedCtc.expectedCtcLakh && profileDetailsMap.expectedCtc.expectedCtcThousand) {
      try {
        const profileDetailsResponse = await updateJobSeekerProfile({
          profileId: props.profileDataId || userDataState.userData.profileId,
          profileData: { profileDetailsMap, profileLastCompletedStep: "3" },
        });
        if (profileDetailsResponse?.data?.success) {
          dispatchWorkStatus(workStatus);
          props.setType(SUCCESS_KEY);
          props.setDataMessage(FORM_SUBMISSION_SUCCESS);
          props.setOpen(true);
          props.handleComplete(2);
          props.handleNext();
        }
      } catch (error: any) {
        console.log(error);
        props.setType(ERROR_KEY);
        props.setDataMessage(error?.message);
        props.setOpen(true);
      }
    } else {
      props.setType(WARNING_KEY);
      props.setDataMessage(EXPEXTED_CTC_DET);
      props.setOpen(true);
    }
    setLoader(false);
  };

  const buildDetailsPayload = () => {
    return {
      totalCtc,
      expectedCtc,
      fixedCtc,
      variableCtc,
      totalExperience,
      relevantExperience,
      freshGraduate: freshGraduate.toString(),
      workStatus,
      currentlyWorking: workStatus === WorkStatusArray[0] ? "Yes" : "No"
    };
  };

  const dispatchWorkStatus = (workStatus) => {
    dispatch({
      type: "USER_ADD",
      data: {
        userData: {
          ...userDataState.userData,
          workStatus,
        },
        userId: userDataState.userId,
      },
    });
  };

  useEffect(() => {
    if (props.profileDataId || userDataState.userData.profileId)
      callPrefillData();
  }, []);

  const callPrefillData = async () => {
    try {
      setLoader(true);
      const profileDataFetched = await getJobSeekerProfile(
        props.profileDataId || userDataState.userData.profileId
      );
      if (profileDataFetched?.data?.data?.profileDetailsMap) {
        patchProfileDetails(profileDataFetched?.data?.data?.profileDetailsMap);
      }
    } catch (error: any) {
      console.log(error);
      props.setType(ERROR_KEY);
      props.setDataMessage("Something went wrong");
      props.setOpen(true);
    }
    setLoader(false);
  };

  const patchProfileDetails = (patchData: any) => {
    console.log(patchData);
    setFreshGrad(patchData.freshGraduate);
    setTotalExp(patchData.totalExperience);
    setRelevantExperience({
      relevantExperienceYears:
        patchData.relevantExperience.relevantExperienceYears,
      relevantExperienceMonths:
        patchData.relevantExperience.relevantExperienceMonths,
    });
    setFixedCtc({
      fixedCtcLakh: patchData.fixedCtc.fixedCtcLakh,
      fixedCtcThousand: patchData.fixedCtc.fixedCtcThousand,
    });
    setVariableCtc({
      variableCtcLakh: patchData.variableCtc.variableCtcLakh,
      variableCtcThousand: patchData.variableCtc.variableCtcThousand,
    });
    setExpectedCtc({
      expectedCtcLakh: patchData.expectedCtc.expectedCtcLakh,
      expectedCtcThousand: patchData.expectedCtc.expectedCtcThousand,
    });
    setWorkStatus(patchData.workStatus);
    setTotalCtc(patchData.totalCtc);
  };

  const setTotalExp = (patchObj: any) => {
    setTotalExperience({
      totalExperienceMonths: patchObj.totalExperienceMonths,
      totalExperienceYears: patchObj.totalExperienceYears,
    });
  };
  const setFreshGrad = (data: any) => {
    if (data === "true") {
      setFreshGraduate(true);
    } else {
      setFreshGraduate(false);
    }
  };

  const emptyExperienceCTCDetatils = () => {
    setRelevantExperience({
      relevantExperienceYears: "",
      relevantExperienceMonths: ""
    })
    setTotalExperience({
      totalExperienceMonths: "",
      totalExperienceYears: "",
    })
    setFixedCtc({
      fixedCtcLakh: "",
      fixedCtcThousand: "",
    });
    setVariableCtc({
      variableCtcLakh: "",
      variableCtcThousand: "",
    });
  }

  return (
    <>
      {!loader ? (
        <div className="job-seeker-profile-content">
          <p className="step-content-title-text">{EXPERIENCE_TITLE}</p>
          <div className="experience-details-card">
            <div className="experience-card-title">
              <div>
                <span>
                  {TOTAL_EXP_TEXT}
                  <span className="asterisk-span"> *</span>
                </span>
              </div>
              <div>
                <span>{FRESHER_TEXT}</span>
                <Checkbox
                  disabled={!props.hasButtons}
                  checked={freshGraduate}
                  onChange={(e) => {
                    setFreshGraduate(e?.target?.checked)

                    if(e.target.checked === true){
                      emptyExperienceCTCDetatils();
                      setWorkStatus("Fresh Graduate");
                    } else {
                      setWorkStatus("")
                    }

                  }}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </div>
            </div>
            <InlineInputs
              InlineInputsArray={YearMonthDetails}
              disabled={!props.hasButtons || freshGraduate}
              setValues={handleTotalExperience}
              value={totalExperience}
            />
            <InlineInputs
              InlineInputsArray={YearMonthDetails}
              InlineInputTitle={RELEVANT_EXP_TEXT}
              disabled={!props.hasButtons || freshGraduate}
              setValues={handleRelevantExperience}
              value={relevantExperience}
            />
          </div>
          <div className="generic-container">
            <div className="inline-div">
              <div>
                <p className="step-content-title-text">
                  {" "}
                  {WORK_STATUS_TEXT} <span className="asterisk-span"> *</span>
                </p>
              </div>
              <div className="work-status-select">
                <FormControl sx={{ minWidth: 250 }}>
                  <InputLabel id="demo-simple-select-helper-label">
                    {WORK_STATUS_TEXT}
                  </InputLabel>
                  <Select
                    disabled={!props.hasButtons || freshGraduate}
                    value={freshGraduate ? 'Fresh Graduate' : workStatus}
                    label={WORK_STATUS_TEXT}
                    onChange={(e) => {
                      if (e.target.value !== 'Fresh Graduate') {
                        setFreshGraduate(false);
                      }
                      else {
                        emptyExperienceCTCDetatils();
                        setFreshGraduate(true);
                      }
                      setWorkStatus(e.target.value)
                    }}

                  >
                    {WorkStatusArray.map((item: string) => (
                      <MenuItem key={item} value={item}>
                        {item}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
            </div>
          </div>
          <div className="conditional-container">
            <div>
              <p className="ctc-details-text"> {CTC_DETAIL_TEXT}</p>
            </div>
            <InlineInputs
              InlineInputsArray={CTCDetails}
              InlineInputTitle={FIXED_CTC_TEXT}
              disabled={!props.hasButtons || freshGraduate}
              setValues={handleFixedCtc}
              value={fixedCtc}
            />
            <InlineInputs
              InlineInputsArray={CTCDetails}
              InlineInputTitle={VARIABLE_CTC_TEXT}
              disabled={!props.hasButtons || freshGraduate}
              setValues={handleVariableCtc}
              value={variableCtc}
            />
            <div>
              <div className="experience-card-title">
                <div>
                  <p>{TOTAL_CTC_TEXT}</p>
                </div>
              </div>
              <div className="inline-div">
                <TextField
                  disabled
                  type="text"
                  value={totalCtc}
                  label={TOTAL_CTC_LABEL}
                  placeholder={TCTC_PLACEHOLDER}
                  InputProps={{
                    inputProps: {
                      maxLength: 12,
                    },
                  }}
                  size="small"
                />
                <div className="tctc-text">
                  <span>{TCTC_SUB_TEXT}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="generic-container">
            <div className="expected-ctc">
              <p className="step-content-title-text">
                {" "}
                {EXPECTED_CTC_TEXT} <span className="asterisk-span"> *</span>
              </p>
            </div>
            <div className="experience-details-card">
              <InlineInputs
                required
                InlineInputsArray={CTCDetails}
                disabled={!props.hasButtons}
                setValues={handleExpectedCtc}
                value={expectedCtc}
              />
            </div>
          </div>
          {props.hasButtons ? (
            <PreviousNextButtons
              handleNext={submitDetails}
              handleBack={props.handleBack}
            />
          ) : null}
        </div>
      ) : (
        <Stack alignItems="center">
          <CircularProgress />
        </Stack>
      )}
    </>
  );
};

export default JobSeekerProfileDetails;
