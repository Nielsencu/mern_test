import './App.css';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';



import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Icon from '@mui/material/Icon';
import CircleIcon from '@mui/icons-material/Circle';

import List from '@mui/material/List';
import Drawer from '@mui/material/Drawer';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import CssBaseline from '@mui/material/CssBaseline';
import AddIcon from '@mui/icons-material/Add';

const drawerWidth = 240;

const tempBatchSize=32;
const tempTrainingCycles=32;


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
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function App() {

  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{zIndex: (theme) => theme.zIndex.drawer + 1}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Projects models
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />

        <List>
          {['Project 1', 'Project 2'].map((text, index) => (
            <ListItem button key={text}
              selected={selectedIndex === index}
              onClick={(event) => handleListItemClick(event, index)}
            >
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Typography variant="h4">
            Project {selectedIndex + 1}
        </Typography>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Models" {...a11yProps(0)} />
          <Tab label="Real-datasets" {...a11yProps(1)} />
        </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
        <Box sx={{display: 'flex', alignItems:'center'}}>
          <Typography sx={{marginRight:'1rem', fontWeight:'bold', fontSize:'2rem'}}>
              models
            </Typography>
            <Button>
              <Icon sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                <AddIcon/>
              </Icon>
              <Typography>
                Create new model
              </Typography>
            </Button>
          </Box>
          <Box sx={{margin:'1rem 3rem', }}>
            {['model-1', 'model-2'].map((text, index) => (
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                  <Box className="model-box" sx={{display:'flex', alignItems:'center'}}>
                    <Typography sx={{marginRight:'1rem'}}>{text}</Typography>
                    <Button className="delete-button">Delete model</Button>
                    <Button className="update-button">Update name</Button>
                  </Box>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Box>
                        <List>
                            <ListItem className="parameters-box" key={"parameters"}>
                              <ListItemIcon sx={{color:'#0a2540'}}>
                                <CircleIcon/>
                              </ListItemIcon>
                              <ListItemText primary="parameters"/>
                            </ListItem>
                        </List>
                      <Box className="parameters-box">
                        <Typography>parameters : </Typography>
                          <List>
                            {['batch-size', 'training-cycles'].map((text, index) => (
                              <ListItem key={text}>
                                <ListItemIcon sx={{color:'#0a2540'}}>
                                  <CircleIcon/>
                                </ListItemIcon>
                                <ListItemText primary={text} />
                              </ListItem>
                            ))}
                          </List>
                      </Box>
                      <Box className="synthdata-box">
                        <Typography></Typography>
                        <Box>
                          <Typography>synthetic-data-1</Typography>
                        </Box>
                      </Box>
                    </Box>
                  </AccordionDetails>
                </Accordion>
            ))}
          </Box>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Box sx={{display: 'flex', alignItems:'center'}}>
            <Typography sx={{marginRight:'1rem', fontWeight:'bold', fontSize:'2rem'}}>
              real-datasets
            </Typography>
            <Button>
              <Icon sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                <AddIcon/>
              </Icon>
              <Typography>
                Create dataset
              </Typography>
            </Button>
          </Box>
          <Box sx={{margin:'1rem 3rem', }}>
            {['real-data-1.csv', 'real-data-2.csv'].map((text, index) => (
                <Box className="dataset-button" sx={{display:'flex', alignItems:'center'}}>
                  <Typography sx={{marginRight:'1rem'}}>{text}</Typography>
                  <Button className="delete-button">Delete data</Button>
                  <Button className="view-button">View/edit data</Button>
                  <Button className="update-button">Update name</Button>
                </Box>
            ))}
          </Box>
        </TabPanel>

      </Box>

    </Box>
  )
}
