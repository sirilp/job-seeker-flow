import React, { ReactElement, FC, useEffect, useState } from "react";
import { Step, Stack, Stepper, StepLabel } from "@mui/material";
import "../../App.css";
import { JobSeekerAddStepper, ColorlibConnector } from "../StepIcons";
import { useAppSelector } from "../../services/StoreHooks";
import { FULL_WIDTH_PERCENT } from "../../InternalStyles/CommonStyleVariables";
import "./JobSeekerProfileFlow.css";
import JobSeekerProfileDetails from "./JobSeekerProfileDetails";
import JobSeekerProfileWorkStatus from "./JobSeekerProfileWorkStatus";
import JobSeekerProfileNoticePeriod from "./JobSeekerProfileNoticePeriod";
import JobSeekerProfileReview from "./JobSeekerProfileReview";
import JobSeekerProfileJD from "./JobSeekerProfileJD";
import JobSeekerProfileUpload from "./JobSeekerProfileUpload";
import JobSeekerAddProfile from "../../pages/JobSeekerAddProfile/JobSeekerAddProfile";

const JobSeekerProfileFlow: FC<any> = (props): ReactElement => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState<{
    [k: number]: boolean;
  }>({});
  const [gotData, setGotData] = React.useState(false);
  const [progressBar, setProgressBar] = useState(true);

  const userDataState = useAppSelector((state) => state.currentUser);

  useEffect(() => {}, [gotData]);

  const steps = [
    "Duplication Check with hiringhood",
    "Upload Resume",
    "Job Seeker Details",
    "Work Status",
    "Notice Period",
    "JD Specific Questions",
  ];

  const isLastStep = () => {
    return activeStep === steps.length - 1;
  };

  const handleNext = () => {
    // if(isLastStep()) {
    //   props.setComplete(true);
    // }
    const newActiveStep = activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleComplete = (position?: number) => {
    const newCompleted = completed;
    newCompleted[position || activeStep] = true;
    setCompleted(newCompleted);
  };

  return (
    <div>
      {progressBar ? (
        <>
          <div className="stepper-container">
            <Stack sx={{ width: FULL_WIDTH_PERCENT }} spacing={4}>
              <Stepper
                alternativeLabel
                activeStep={activeStep}
                connector={<ColorlibConnector />}
              >
                {steps.map((label, index) => (
                  <Step key={label} completed={completed[index] === true}>
                    <StepLabel StepIconComponent={JobSeekerAddStepper}>
                      {label}
                    </StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Stack>
          </div>
        </>
      ) : (
        <></>
      )}

      {activeStep + 1 === 1 ? (
        <JobSeekerAddProfile
          hasButtons={true}
          setOpen={props.setOpen}
          setType={props.setType}
          handleNext={handleNext}
          handleBack={handleBack}
          contestId={props.contestId}
          handleComplete={handleComplete}
          setDataMessage={props.setDataMessage}
        />
      ) : activeStep + 1 === 2 ? (
        <JobSeekerProfileUpload
          hasButtons={true}
          setOpen={props.setOpen}
          setType={props.setType}
          handleNext={handleNext}
          handleBack={handleBack}
          handleComplete={handleComplete}
          setDataMessage={props.setDataMessage}
        />
      ) : activeStep + 1 === 3 ? (
        <JobSeekerProfileDetails
          hasButtons={true}
          setOpen={props.setOpen}
          setType={props.setType}
          handleNext={handleNext}
          handleBack={handleBack}
          handleComplete={handleComplete}
          setDataMessage={props.setDataMessage}
        />
      ) : activeStep + 1 === 4 ? (
        <JobSeekerProfileWorkStatus
          hasButtons={true}
          setOpen={props.setOpen}
          setType={props.setType}
          handleNext={handleNext}
          handleBack={handleBack}
          handleComplete={handleComplete}
          setDataMessage={props.setDataMessage}
        />
      ) : activeStep + 1 === 5 ? (
        <JobSeekerProfileNoticePeriod
          hasButtons={true}
          setOpen={props.setOpen}
          setType={props.setType}
          handleNext={handleNext}
          handleBack={handleBack}
          handleComplete={handleComplete}
          setDataMessage={props.setDataMessage}
        />
      ) : activeStep + 1 === 6 ? (
        <JobSeekerProfileJD
          hasButtons={true}
          setOpen={props.setOpen}
          setType={props.setType}
          handleNext={handleNext}
          handleBack={handleBack}
          contestId={props.contestId}
          handleComplete={handleComplete}
          setDataMessage={props.setDataMessage}
        />
      ) : (
        <JobSeekerProfileReview
          contestId={props.contestId}
          setOpen={props.setOpen}
          setType={props.setType}
          setActiveStep={setActiveStep}
          setDataMessage={props.setDataMessage}
          setProgressBar={setProgressBar}
        />
      )}
    </div>
  );
};

export default JobSeekerProfileFlow;
