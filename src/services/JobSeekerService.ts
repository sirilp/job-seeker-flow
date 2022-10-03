import React from "react";
import axios from "axios";

export const preDuplicationCheck = async (bodyPayload: {
  referralCompanyId: string;
  contestId: string;
  emailId: string;
  mobileNumber: string;
  firstName: string;
  lastName: string;
  interviewAttended: string;
}) => {
  return await axios
    .post(
      `${process.env.REACT_APP_MAIN_SERVER_URL}hiringhood/v1/profile-log/check-duplicates`,
      bodyPayload,
      {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("react-token")}`,
        },
      }
    )
    .catch((error) => {
      console.log(error);
    });
};

export const fullDuplicationCheck = async (
  profileLogId: string,
  panNumber: string,
  dob: string
) => {
  return await axios
    .patch(
      `${process.env.REACT_APP_MAIN_SERVER_URL}hiringhood/v1/profile-log/${profileLogId}/check-duplicates`,
      { panNumber: panNumber, dateOfBirth: dob },
      {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("react-token")}`,
        },
      }
    )
    .catch((error) => {
      console.log(error);
    });
};

export const contestLinkedJobsekeers = async (
  id: string,
  page: number,
  size: number
) => {
  return await axios
    .get(
      `${process.env.REACT_APP_MAIN_SERVER_URL}hiringhood/v1/job-seekers?contestId=${id}&page=${page}&size=${size}`,
      {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("react-token")}`,
        },
      }
    )
    .catch((error) => {
      console.log(error);
    });
};

export const getAggregateData = async (contestId: string) => {
  return await axios
    .get(
      `${process.env.REACT_APP_MAIN_SERVER_URL}hiringhood/v1/job-seekers/aggregate?filterColumn=contestId&filterValue=${contestId}`,
      {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("react-token")}`,
        },
      }
    )
    .catch((error) => {
      console.log(error);
    });
};
export const getDuplicationFailedProfiles = async (
  filterValue: string,
  page: number,
  size: number
) => {
  return await axios
    .get(
      `${
        process.env.REACT_APP_MAIN_SERVER_URL
      }hiringhood/v1/profile-log?filterColumn=status&filterValue=${filterValue}${
        page ? "&page=" + page : "&page=" + 0
      }${size ? "&size=" + size : ""}`,
      {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("react-token")}`,
        },
      }
    )
    .catch((error) => {
      console.log(error);
    });
};
export const getDuplicationFailedProfilesAggregate = async () => {
  return await axios
    .get(
      `${process.env.REACT_APP_MAIN_SERVER_URL}hiringhood/v1/profile-log/aggregate`,
      {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("react-token")}`,
        },
      }
    )
    .catch((error) => {
      console.log(error);
    });
};
export const startJobSeekerWorkflow = async (bodyPayload: {
  jobSeekerId: string;
  action: string;
}) => {
  return await axios
    .post(
      `${process.env.REACT_APP_MAIN_SERVER_URL}hiringhood/v1/job-seeker/${bodyPayload.jobSeekerId}/submit?action=${bodyPayload.action}`,
      bodyPayload,
      {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("react-token")}`,
        },
      }
    )
    .catch((error) => {
      console.log(error);
    });
};
export const getContestAggregateStatistics = async () => {
  return await axios
    .get(
      `${process.env.REACT_APP_MAIN_SERVER_URL}hiringhood/v1/profiles/aggregate/status`,
      {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("react-token")}`,
        },
      }
    )
    .catch((error) => {
      console.log(error);
    });
};
