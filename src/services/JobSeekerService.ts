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
}) => {console.log('tokennnnnn', localStorage.getItem("react-token"))
  return await axios
    .post(
      `${process.env.REACT_APP_MAIN_SERVER_URL}hiringhood/v1/profile-log/check-duplicates`,
      bodyPayload,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("react-token")}`,
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
) => {console.log('tokennnnnn', localStorage.getItem("react-token"))
  return await axios
    .patch(
      `${process.env.REACT_APP_MAIN_SERVER_URL}hiringhood/v1/profile-log/${profileLogId}/check-duplicates`,
      { panNumber: panNumber, dateOfBirth: dob },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("react-token")}`,
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
) => {console.log('tokennnnnn', localStorage.getItem("react-token"))
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
