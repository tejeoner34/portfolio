import * as React from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import ProjectCard from "../project-card/project-card";
import { DiAngularSimple } from 'react-icons/di';
import { FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import './styles.css';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box className='projects__container'>
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export const TabsComponent = ({projects}) => {
  const [value, setValue] = React.useState(0);
  const {width} = useWindowDimensions();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}
        >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          textColor="inherit"
          variant={width <= 600 ? "scrollable" : "fullWidth"}
          scrollButtons="auto"
          sx={{
            "& button.Mui-selected": { color: "rgb(48 255 64);" },
            "& span.MuiTabs-indicator": { backgroundColor: "rgb(48 255 64);" },
          }}
        >
          <Tab label={<><FaReact size={33}/> <span>projects</span></>} {...a11yProps(0)} />
          <Tab label={<><DiAngularSimple size={33}/> <span>projects</span></>} {...a11yProps(1)} />
          <Tab label={<><IoLogoJavascript size={33}/> <span>projects</span></>} {...a11yProps(2)} />
          <Tab label={'Recently done'} {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        {projects
          .filter((project) => project.framework === "react")
          .map((e, i) => (
            <ProjectCard data={e} key={i}></ProjectCard>
          ))}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {projects
          .filter((project) => project.framework === "angular")
          .map((e, i) => (
            <ProjectCard data={e} key={i}></ProjectCard>
          ))}
      </TabPanel>
      <TabPanel value={value} index={2}>
        {projects
          .filter((project) => project.framework === "")
          .map((e, i) => (
            <ProjectCard data={e} key={i}></ProjectCard>
          ))}
      </TabPanel>
      <TabPanel value={value} index={3}>
        {projects
          .filter((project) => project.isLastProject)
          .map((e, i) => (
            <ProjectCard data={e} key={i}></ProjectCard>
          ))}
      </TabPanel>
    </Box>
  );
};
