import React, {
  ReactElement,
  FC,
  useEffect,
  useRef,
  useState,
  useMemo,
  useCallback,
} from "react";

import Checkbox from "@mui/material/Checkbox";
import { Button, Grid, Typography, Box } from "@mui/material";
import { AgGridReact } from "ag-grid-react";
import { relations, LISTING_GENERIC_HEADERS } from "./ColumnHeaders";
import { ColDef } from "ag-grid-community";
import StepCount from "../../components/StepCount";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import { LIGHT_GREY } from "../../color";
import ColumnSelection from "../../components/ColumnSelection/ColumnSelection";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import AgGridWithPagination from "../GridItem/AgGridWithPagination";
import { PAGE_SIZE_ARRAY } from "../../constants";
import {
  statusFilterContestLinkedJobsekeers,
  consentStatusFilterContestLinkedJobsekeers,
  getConsentAggregateData,
  getAggregateData,
} from "../../services/JobSeekerService";
import moment from "moment";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  deleteIcon: { color: "#4D6CD9", margin: "10px" },
  actions1: { fontSize: "15px !important" },
  bookmarkIcon: { color: "#4D6CD9" },
}));

const Vetting = (props) => {
  const classes = useStyles();
  const { contestId } = props;
  const gridRef = useRef<AgGridReact<any>>();
  const [columnDefs, setColumnDefs] = useState(LISTING_GENERIC_HEADERS);
  const [pageSize, setPageSize] = useState(10);
  const [pageNo, setPageNo] = React.useState(0);
  const [selectedRows, setSelectedRows] = useState<any>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [rowData, setRowData] = React.useState<any>([]);
  const [selectedButtonValue, setSelectedButtonValue] =
    useState("JOB_SEEKER_APPLIED");
  const [selectedButtonId, setSelectedButtonId] = React.useState<Number>(1);
  const [columnsListOpen, setColumnsListOpen] = React.useState(false);
  const [floatingFilter, setFloatingFilter] = React.useState(true);
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const [agCount, setAgCount] = useState<any>({
    submitted: 0,
    consent: 0,
  });

  useEffect(() => {
    handleAggregateData(contestId);
    getTableRowData(pageNo, pageSize, contestId, selectedButtonValue);
  }, [pageNo, pageSize, contestId, selectedButtonValue]);

  const setSelectedButton = (id: number, filterValue: string) => {
    setSelectedButtonId(id);
    setSelectedButtonValue(filterValue);
    getTableRowData(0, 10, contestId, filterValue);
  };

  const handleAggregateData = async (contestId) => {
    let result1: any;
    const statusCount: any = await getAggregateData(contestId);
    if (statusCount.data.success) {
      result1 = statusCount.data.data.filter(
        (data) => data.status === "JOB_SEEKER_APPLIED"
      );
    } else {
      result1 = [];
    }

    const response: any = await getConsentAggregateData(contestId);

    if (response.data.success) {
      const result2 = response.data.data.filter(
        (data) => data.status === "JOB_SEEKER_CONSENT_PASS"
      );
      const result3 = response.data.data.filter(
        (data) => data.status === "JOB_SEEKER_CONSENT_PENDING"
      );
      const result4 = response.data.data.filter(
        (data) => data.status === "JOB_SEEKER_CONSENT_FAIL"
      );
      setAgCount({
        submitted: (result1.length > 0 && result1[0].count) || 0,
        consentPass: (result2.length > 0 && result2[0].count) || 0,
        consentPending: (result3.length > 0 && result3[0].count) || 0,
        consentFail: (result4.length > 0 && result4[0].count) || 0,
      });
    } else {
      setAgCount({
        submitted: 0,
        consentPass: 0,
        consentPending: 0,
        consentFail: 0,
      });
    }
  };

  const handlestatusFilterContestLinkedJobsekeers = async (
    pageNo,
    pageSize,
    contestId,
    selectedButtonValue
  ) => {
    const response: any = await statusFilterContestLinkedJobsekeers(
      contestId,
      selectedButtonValue,
      pageNo,
      pageSize
    );

    if (response.data.success) {
      let mapData = response.data.data.content;
      let result = mapData.map((item, index) => {
        item.appliedDate = moment(item.appliedDate).format("DD-MM-YYYY");

        let Data = {
          ...item,
          ...item.matchedProfileLogsList[0],
          ...item.matchedProfilesList[0],
        };

        return Data;
      });

      setRowData(result);
      setTotalPages(response?.data?.data?.totalPages);
      setPageNo(response?.data?.data?.pageNo);
      setPageSize(response?.data?.data?.pageSize);
    } else {
      setRowData([]);
    }
  };

  const handleconsentStatusFilterContestLinkedJobsekeers = async (
    pageNo,
    pageSize,
    contestId,
    selectedButtonValue
  ) => {
    const response: any = await consentStatusFilterContestLinkedJobsekeers(
      contestId,
      selectedButtonValue,
      pageNo,
      pageSize
    );

    if (response.data.success) {
      let mapData = response.data.data.content;
      let result = mapData.map((item, index) => {
        item.appliedDate = moment(item.appliedDate).format("DD-MM-YYYY");

        let Data = {
          ...item,
          ...item.matchedProfileLogsList[0],
          ...item.matchedProfilesList[0],
        };

        return Data;
      });
      setRowData(result);
      setTotalPages(response?.data?.data?.totalPages);
      setPageNo(response?.data?.data?.pageNo);
      setPageSize(response?.data?.data?.pageSize);
    } else {
      setRowData([]);
    }
  };

  const getTableRowData = async (
    pageNo,
    pageSize,
    contestId,
    selectedButtonValue
  ) => {
    if (selectedButtonValue === "JOB_SEEKER_APPLIED") {
      handlestatusFilterContestLinkedJobsekeers(
        pageNo,
        pageSize,
        contestId,
        selectedButtonValue
      );
    } else {
      handleconsentStatusFilterContestLinkedJobsekeers(
        pageNo,
        pageSize,
        contestId,
        selectedButtonValue
      );
    }
  };

  const autoGroupColumnDef = useMemo<ColDef>(() => {
    return {
      headerName: "Group",
      minWidth: 170,
      field: "athlete",
      valueGetter: (params) => {
        if (params.node!.group) {
          return params.node!.key;
        } else {
          return params.data[params.colDef.field!];
        }
      },
      headerCheckboxSelection: true,
      cellRenderer: "agGroupCellRenderer",
      cellRendererParams: {
        checkbox: true,
      },
    };
  }, []);
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

  const setColumnsDisplay = (columnList) => {
    const newColumnDefs = columnDefs.map((colDef) => {
      const columnReference = columnList.find(
        (col) => col.headerName === colDef.headerName
      );
      if (columnReference) {
        return { ...colDef, hide: !columnReference.hide };
      }
    });
    onUpdateColumns(newColumnDefs);
  };

  const toogleFloatingFilter = (toggleOption: any) => {
    setFloatingFilter(toggleOption);
    const newColumnDefs = columnDefs.map((colDef) => {
      return { ...colDef, floatingFilter: toggleOption };
    });
    onUpdateColumns(newColumnDefs);
  };

  const onUpdateColumns = useCallback((data) => {
    if (gridRef?.current) gridRef.current.api.setColumnDefs(data);
  }, []);

  const onSelectionChanged = useCallback(() => {
    if (gridRef.current) {
      const rowSelection = gridRef.current.api.getSelectedRows();
      setSelectedRows(rowSelection);
    }
  }, []);
  const pageChange = (pageNumber) => {
    setPageNo(pageNumber - 1);
  };
  const pageSizeChange = (pageSizeChanged) => {
    setPageSize(pageSizeChanged);
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} p={2}>
        <Typography fontSize={30}>Profiles</Typography>
        <StepCount
          StepCountList={[
            {
              label: "Submitted",
              tooltip: "Submitted",
              id: 1,
              value: "JOB_SEEKER_APPLIED",
            },
            {
              label: "Consent Pass",
              tooltip: "Consent Pass",
              id: 2,
              value: "JOB_SEEKER_CONSENT_PASS",
            },
            {
              label: "Consent Pending",
              tooltip: "Consent Pending",
              id: 3,
              value: "JOB_SEEKER_CONSENT_PENDING",
            },
            {
              label: "Consent Fail",
              tooltip: "Consent Fail",
              id: 4,
              value: "JOB_SEEKER_CONSENT_FAIL",
            },
          ]}
          countsList={[
            { _id: 1, count: agCount.submitted },
            { _id: 2, count: agCount.consentPass },
            { _id: 3, count: agCount.consentPending },
            { _id: 4, count: agCount.consentFail },
          ]}
          setSelectedButton={setSelectedButton}
          selectedButton={selectedButtonId}
        />
      </Grid>
      <Grid item xs={12}>
        <div className="forms-button-container">
          <div>
            <Button
              variant="outlined"
              className="save-draft-button"
              onClick={() => setColumnsListOpen(true)}
              disabled={columnsListOpen}
            >
              Columns <GridViewOutlinedIcon className="generic-icon" />
            </Button>
            <Button
              variant="outlined"
              className="save-draft-button"
              onClick={() => toogleFloatingFilter(!floatingFilter)}
              sx={{ background: floatingFilter ? LIGHT_GREY : "inherit" }}
            >
              Filters <FilterAltOutlinedIcon className="generic-icon" />
            </Button>
          </div>
          <div>
            <Box display={"inline-block"} className={classes.actions1}>
              <Checkbox /> {selectedRows.length} Selected
              <DeleteOutlineIcon className={classes.deleteIcon} />
              <BookmarkBorderIcon className={classes.bookmarkIcon} />
            </Box>
          </div>
        </div>
      </Grid>
      <ColumnSelection
        AllColumns={columnDefs.map((cl) =>
          Object.assign({ headerName: cl.headerName, hide: !cl.hide })
        )}
        setColumnsDisplay={setColumnsDisplay}
        onClose={setColumnsListOpen}
        open={columnsListOpen}
      />
      <Grid item xs={12}>
        <AgGridWithPagination
          gridRef={gridRef}
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          autoGroupColumnDef={autoGroupColumnDef}
          suppressRowClickSelection={true}
          groupSelectsChildren={true}
          rowSelection={"multiple"}
          rowGroupPanelShow={"always"}
          pivotPanelShow={"always"}
          enableRangeSelection={true}
          pagination={false}
          pageSize={pageSize}
          onSelectionChanged={onSelectionChanged}
          pageSizeArray={PAGE_SIZE_ARRAY}
          totalPages={totalPages}
          pageChange={pageChange}
          pageSizeChange={pageSizeChange}
          // onCellValueChanged={onCellValueChanged}
        />
      </Grid>
    </Grid>
  );
};

export default Vetting;
