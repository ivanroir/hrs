import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import StarIcon from '@material-ui/icons/Star';
import SendIcon from '@material-ui/icons/Send';
import MailIcon from '@material-ui/icons/Mail';
import DeleteIcon from '@material-ui/icons/Delete';
import ReportIcon from '@material-ui/icons/Report';

export const mailFolderListItems = (
  <div>
    <ListItem button>
      <ListItemIcon style={{fill: '#FDFDFD'}}>
        <InboxIcon />
      </ListItemIcon>
      <ListItemText primary={<Typography type="body2" style={{ color: '#FFFFFF' }}>Inbox</Typography>} />
    </ListItem>
    <ListItem button>
      <ListItemIcon style={{fill: '#FDFDFD'}}>
        <StarIcon />
      </ListItemIcon>
      <ListItemText primary={<Typography type="body2" style={{ color: '#FFFFFF' }}>Starred</Typography>} />
    </ListItem>
    <ListItem button>
      <ListItemIcon style={{fill: '#FDFDFD'}}>
        <SendIcon />
      </ListItemIcon>
      <ListItemText primary={<Typography type="body2" style={{ color: '#FFFFFF' }}>Send mail</Typography>} />
    </ListItem>
    <ListItem button>
      <ListItemIcon style={{fill: '#FDFDFD'}}>
        <DraftsIcon />
      </ListItemIcon>
      <ListItemText primary={<Typography type="body2" style={{ color: '#FFFFFF' }}>Drafts</Typography>} />
    </ListItem>
  </div>
);

export const otherMailFolderListItems = (
  <div>
    <ListItem button>
      <ListItemIcon style={{fill: '#FDFDFD'}}>
        <MailIcon />
      </ListItemIcon>
      <ListItemText primary={<Typography type="body2" style={{ color: '#FFFFFF' }}>All mail</Typography>} />
    </ListItem>
    <ListItem button>
      <ListItemIcon style={{fill: '#FDFDFD'}}>
        <DeleteIcon />
      </ListItemIcon>
      <ListItemText primary={<Typography type="body2" style={{ color: '#FFFFFF' }}>Trash</Typography>} />
    </ListItem>
    <ListItem button>
      <ListItemIcon style={{fill: '#FDFDFD'}}>
        <ReportIcon />
      </ListItemIcon>
      <ListItemText primary={<Typography type="body2" style={{ color: '#FFFFFF' }}>Spam</Typography>} />
    </ListItem>
  </div>
);
