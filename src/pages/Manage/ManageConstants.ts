import React from "react";

export const commentsInvalid = [
  {
    title: "N/A",
    value: "N/A",
  },
  {
    title: "Wrong Notice Period",
    value: "wrongNoticePeriod",
  },
  {
    title: "Wrong Resume",
    value: "wrongResume",
  },
  {
    title: "Others",
    value: "others",
  },
];

export const mainStages = [
  {
    title: "N/A",
    value: "N/A",
  },
  {
    title: "HH-Shortlisting",
    value: "hhShortlisting",
  },
  {
    title: "HH-Screening",
    value: "hhScreening",
  },
];

export const subStages = {
  hhShortlisting: {
    subStages: [
      {
        title: "N/A",
        value: "N/A",
      },
      { title: "On Hold", value: "onHold" },
      { title: "Dropped", value: "dropped" },
      { title: "Rejected", value: "rejected" },
      { title: "Shortlisted", value: "shortlisted" },
      { title: "Invalid", value: "invalid" },
    ],
    shortlisted: [
      {
        title: "N/A",
        value: "N/A",
      },
      {
        title: "Second Priority",
        value: "secondPriority",
      },
      {
        title: "Others",
        value: "others",
      },
    ],
    rejected: [
      {
        title: "N/A",
        value: "N/A",
      },
      {
        title: "High CTC",
        value: "highCtc",
      },
      {
        title: "Missing Mandatory Skills",
        value: "missingMandatorySkills",
      },
      {
        title: "Bad Communication Skills",
        value: "badCommunicationSkills",
      },
      {
        title: "Long Notice Period",
        value: "longNoticePeriod",
      },
      {
        title: "Location",
        value: "location",
      },
      {
        title: "Less Relavent Experience",
        value: "lessRelaventExperience",
      },
    ],
    dropped: [
      {
        title: "N/A",
        value: "N/A",
      },
      {
        title: "Js not responding",
        value: "jsNotResponding",
      },
      {
        title: "Js not Interested",
        value: "jsNotInterested",
      },
      {
        title: "Other",
        value: "other",
      },
    ],
    onHold: [
      {
        title: "N/A",
        value: "N/A",
      },
      {
        title: "Postion on Hold",
        value: "positionOnHold",
      },
      {
        title: "Not Responding",
        value: "notResponding",
      },
      {
        title: "Second Priority",
        value: "secondPriority",
      },
      {
        title: "Awaiting updated resume",
        value: "awaitingUpdatedResume",
      },
      {
        title: "Other",
        value: "other",
      },
    ],
    invalid: commentsInvalid,
    "N/A": [
      {
        title: "N/A",
        value: "N/A",
      },
    ],
  },
  hhScreening: {
    subStages: [
      {
        title: "N/A",
        value: "N/A",
      },
      { title: "Invalid", value: "invalid" },
      { title: "Assigned", value: "assigned" },
      { title: "In Progress", value: "inProgress" },
      { title: "Shortlisted", value: "shortlisted" },
      { title: "On Hold", value: "onHold" },
      { title: "Rejected", value: "rejected" },
    ],
    rejected: [
      {
        title: "N/A",
        value: "N/A",
      },
      {
        title: "Suitable For Other Requirement",
        value: "suitableForOtherRequirement",
      },
      {
        title: "High CTC",
        value: "highCtc",
      },
      {
        title: "Less Relavent Experience",
        value: "lessRelaventExperience",
      },
    ],
    onHold: [
      {
        title: "N/A",
        value: "N/A",
      },
      {
        title: "Incorrect Profile Submission",
        value: "incorrectProfileSubmission",
      },
      {
        title: "Postion on Hold",
        value: "positionOnHold",
      },
      {
        title: "High CTC",
        value: "highCtc",
      },
      {
        title: "Less Relavent Experience",
        value: "lessRelaventExperience",
      },
      {
        title: "Profile Info Missing",
        value: "profileInfoMissing",
      },
      {
        title: "Other",
        value: "other",
      },
    ],
    assigned: [
      {
        title: "N/A",
        value: "N/A",
      },
    ],
    inProgress: [
      {
        title: "N/A",
        value: "N/A",
      },
    ],
    shortlisted: [
      {
        title: "N/A",
        value: "N/A",
      },
    ],
    invalid: commentsInvalid,
    "N/A": [
      {
        title: "N/A",
        value: "N/A",
      },
    ],
  },
  "N/A": {
    subStages: [],
    "N/A": [
      {
        title: "N/A",
        value: "N/A",
      },
    ],
  },
};
