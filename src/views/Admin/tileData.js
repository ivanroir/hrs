import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Dashboard from '@material-ui/icons/Dashboard';
import WorkOff from '@material-ui/icons/Work';
import Employee from '@material-ui/icons/AccountBox';
import AccessTime from '@material-ui/icons/AccessTime';
import MailIcon from '@material-ui/icons/Mail';
import DeleteIcon from '@material-ui/icons/Delete';
import ReportIcon from '@material-ui/icons/Report';

import { Link } from 'react-router-dom';



export const mailFolderListItems = (

  <div>
    <Link to="/admin" style={{ textDecoration: 'none' }}>
      <ListItem button>
        <ListItemIcon style={{ fill: '#FDFDFD' }}>
          <Dashboard />
        </ListItemIcon>
        <ListItemText primary={<Typography type="body2" style={{ color: '#FFFFFF' }}>Dashboard</Typography>} />
      </ListItem>
    </Link>
    <Link to="/admin/employee" style={{ textDecoration: 'none' }}>
      <ListItem button>
        <ListItemIcon style={{ fill: '#FDFDFD' }}>
          <Employee />
        </ListItemIcon>
        <ListItemText primary={<Typography type="body2" style={{ color: '#FFFFFF' }}>Employee</Typography>} />
      </ListItem>
    </Link>
    <Link to="/admin/timekeeping" style={{ textDecoration: 'none' }}>
      <ListItem button>
        <ListItemIcon style={{ fill: '#FDFDFD' }}>
          <AccessTime />
        </ListItemIcon>
        <ListItemText primary={<Typography type="body2" style={{ color: '#FFFFFF' }}>Time Keeping</Typography>} />
      </ListItem>
    </Link>
    <Link to="/admin/leave" style={{ textDecoration: 'none' }}>
    <ListItem button>
      <ListItemIcon style={{ fill: '#FDFDFD' }}>
        <WorkOff />
      </ListItemIcon>
      <ListItemText primary={<Typography type="body2" style={{ color: '#FFFFFF' }}>Leave</Typography>} />
    </ListItem>
    </Link>
  </div>
);

export const otherMailFolderListItems = (
  <div>
    <ListItem button>
      <ListItemIcon style={{ fill: '#FDFDFD' }}>
        <MailIcon />
      </ListItemIcon>
      <ListItemText primary={<Typography type="body2" style={{ color: '#FFFFFF' }}>All mail</Typography>} />
    </ListItem>
    <ListItem button>
      <ListItemIcon style={{ fill: '#FDFDFD' }}>
        <DeleteIcon />
      </ListItemIcon>
      <ListItemText primary={<Typography type="body2" style={{ color: '#FFFFFF' }}>Trash</Typography>} />
    </ListItem>
    <ListItem button>
      <ListItemIcon style={{ fill: '#FDFDFD' }}>
        <ReportIcon />
      </ListItemIcon>
      <ListItemText primary={<Typography type="body2" style={{ color: '#FFFFFF' }}>Spam</Typography>} />
    </ListItem>
  </div>
);
