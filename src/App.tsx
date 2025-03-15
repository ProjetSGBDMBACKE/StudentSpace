import { Admin, Resource } from "react-admin";
import { ThemeOptions } from "@mui/material";
import GradingIcon from "@mui/icons-material/Grading";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";

import { Dashboard } from "./component/Dashboard";
import { authProvider } from "./authProvider";

import dataProvider from "./dataProvider";

import { ExerciseList } from "./component/SujetDeposer/ExerciseList";
import { ExerciseShow } from "./component/SujetDeposer/ExerciseShow";
import { SubmissionList } from "./component/Submit/SubmissionList";
import { CorrectionList } from "./component/Correction/CorrectionList";
import { CorrectionShow } from "./component/Correction/CorrectionShow";
import Assignment from "@mui/icons-material/Assignment";
import Grading from "@mui/icons-material/Grading";
import Upload from "@mui/icons-material/Upload";

const theme: ThemeOptions = {
  palette: {
    primary: {
      main: "#003049",
      contrastText: "#000",
    },
    secondary: {
      main: "#bf7e46",
      contrastText: "#fff",
    },
    info: {
      main: "#ffeedd",
      contrastText: "#3a0e73",
    },
  },
  typography: {
    fontFamily: "'Helvetica Neue', sans-serif",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
  components: {
    MuiDrawer: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: "#F3EFE0",
          height: "100vh !important",
          "& .MuiMenuItem-root": {
            color: theme.palette.primary.contrastText,
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
          },
          "& .MuiListItemIcon-root": {
            color: theme.palette.primary.contrastText,
          },
          "& .MuiMenuItem-root.RaMenuItemLink-active": {
            background: theme.palette.secondary.main,
            borderRadius: theme.spacing(1),
          },
          "& .MuiMenuItem-root.RaMenuItemLink-active .MuiListItemIcon-root": {
            color: theme.palette.primary.contrastText,
          },
        }),
      },
    },
    //@ts-ignore
    RaCreateButton: {
      styleOverrides: {
        root: ({
          //@ts-ignore
          theme,
        }) => ({
          backgroundColor: theme.palette.secondary.main,
          color: theme.palette.secondary.contrastText,
          borderRadius: theme.spacing(1),
          padding: theme.spacing(1, 2),
          "&:hover": {
            backgroundColor: theme.palette.secondary.dark,
          },
        }),
      },
    },
    RaSaveButton: {
      styleOverrides: {
        root: ({
          //@ts-ignore
          theme,
        }) => ({
          backgroundColor: theme.palette.secondary.main,
          color: theme.palette.primary.contrastText,
          borderRadius: theme.spacing(1),
          padding: theme.spacing(1),
          "&:hover": {
            backgroundColor: theme.palette.secondary.dark,
          },
        }),
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.primary.main,
        }),
      },
    },
    MuiDialogActions: {
      styleOverrides: {
        root: ({ theme }) => ({
          padding: theme.spacing(3, 3, 5),
        }),
      },
    },
    MuiCard: {
      styleOverrides: {
        root: ({ theme }) => ({
          "&.MuiPaper-elevation0": {
            backgroundColor: theme.palette.info.main,
            borderRadius: theme.spacing(1),
          },
        }),
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: theme.spacing(1),
        }),
      },
    },
    MuiTable: {
      styleOverrides: {
        root: {
          borderCollapse: "separate",
          borderSpacing: "0px 9px",
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            backgroundColor: "black",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          "&.RaList-content": {
            boxShadow: "none !important",
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: theme.palette.info.main,
          borderRadius: "25px",
          padding: theme.spacing(0.75, 1),
          minHeight: "38px",
        }),
      },
      defaultProps: {
        TabIndicatorProps: {
          sx: {
            display: "none",
          },
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: ({ theme }) => ({
          "&:first-of-type": {
            borderTopLeftRadius: "25px",
            borderBottomLeftRadius: "25px",
          },
          "&.Mui-selected": {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
            borderRadius: "25px",
          },
          padding: theme.spacing(1, 6),
          minHeight: "38px",
        }),
      },
    },
    MuiTableCell: {
      styleOverrides: {
        body: {
          borderTop: "1px solid #F1F1F1",
          borderBottom: "1px solid #F1F1F1",
          "&:first-of-type": {
            borderLeft: "1px solid #F1F1F1",
            borderTopLeftRadius: 15,
            borderBottomLeftRadius: 15,
          },
          "&:last-child": {
            borderRight: "1px solid #F1F1F1",
            borderTopRightRadius: 15,
            borderBottomRightRadius: 15,
          },
        },
        head: ({ theme }) => ({
          fontWeight: 600,
          borderWidth: 0,
          backgroundColor: theme.palette.info.main,
          color: theme.palette.info.contrastText,
          "&:first-of-type": {
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
          },
          "&:last-child": {
            borderTopRightRadius: 10,
            borderBottomRightRadius: 10,
          },
        }),
      },
    },
  },
};

export const App = () => {
  return (
    <Admin
      authProvider={authProvider}
      dataProvider={dataProvider}
      dashboard={Dashboard}
      theme={theme}
    >
      <Resource
        name="exercises"
        list={ExerciseList}
        show={ExerciseShow}
        icon={Assignment}
        options={{ label: "Sujet " }}
      />

      <Resource
        name="corrections"
        list={CorrectionList}
        show={CorrectionShow}
        icon={Grading}
        options={{ label: "Corrections" }}
      />
      <Resource name="Soumission" list={SubmissionList} icon={Upload} />
    </Admin>
  );
};
