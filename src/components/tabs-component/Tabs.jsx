import * as React from 'react';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import ProjectCard from '../project-card/project-card';
import { DiAngularSimple } from 'react-icons/di';
import { FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import './styles.css';

const techs = {
  react: {
    icon: <FaReact size={33} />,
    tech: 'react',
  },
  angular: {
    icon: <DiAngularSimple size={33} />,
    tech: 'angular',
  },
  js: {
    icon: <IoLogoJavascript size={33} />,
    tech: 'js',
  },
  recent: {
    icon: null,
    tech: 'recent',
  },
};

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
      {value === index && <Box className="projects__container">{children}</Box>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export const TabsComponent = ({ projects }) => {
  const [value, setValue] = React.useState(0);
  const { width } = useWindowDimensions();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          textColor="inherit"
          variant={width <= 600 ? 'scrollable' : 'fullWidth'}
          scrollButtons="auto"
          sx={{
            '& button.Mui-selected': { color: 'rgb(48 255 64);' },
            '& span.MuiTabs-indicator': { backgroundColor: 'rgb(48 255 64);' },
          }}
        >
          {Object.keys(techs).map((tech, index) => (
            <Tab
              key={index}
              label={
                <>
                  {techs[tech].icon} <span>{tech}</span>
                </>
              }
              {...a11yProps(index)}
            />
          ))}
        </Tabs>
      </Box>
      {Object.keys(techs).map((teck, index) => {
        return (
          <TabPanel value={value} index={index} key={index}>
            {projects[teck].map((project, i) => (
              <ProjectCard data={project} key={i}></ProjectCard>
            ))}
          </TabPanel>
        );
      })}
    </Box>
  );
};
