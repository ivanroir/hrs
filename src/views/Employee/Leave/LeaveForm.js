import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Avatar from '@material-ui/core/Avatar';
import displayPicture from "../../../assets/img/avatar.jpg";
import Divider from '@material-ui/core/Divider';



const styles = theme => ({
    root: {
        flexGrow: 1,
    },


    content: {
        background: "#136a8a",  /* fallback for old browsers */
        background: "-webkit-linear-gradient(to top, #136a8a, #267871)",  /* Chrome 10-25, Safari 5.1-6 */
        background: "linear-gradient(to top, #136a8a, #267871)", /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        position: "relative",
        height: "100%",

    }
});

class Dashboard extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.content}>
                <div>
                    <Typography variant="display2" align="center" style={{ fontWeight: 700, color: "#FDFDFD", fontSize: "60px", position: "relative", top: 50 }}>
                        LEAVE FORM
                    </Typography>
                    <Typography variant="caption" align="center" style={{ fontSize: "20px", color: "#FDFDFD", position: "relative", top: 70 }}>
                        Please submit the times you need to take off work and the type of leave you are taking.
                    </Typography>
                    <Typography variant="caption" align="center" style={{ fontSize: "16px", color: "#FDFDFD", position: "relative", top: 70 }}>
                        <i>IMPORTANT NOTE: Approval will be notified via email.</i>
                    </Typography>
                    
                </div>
              
                <hr style={{position: "relative", top: 100, width: "35%", }}/>
     
                <div style={{ position: "relative", top: 150, left: "25%" }}>
                
                    <form autoComplete="off">
                        <TextField
                            disabled
                            style={{ borderBottom: '2px solid white', color: "white"
                        }}
                            id="name"
                            value="Name"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start" style={{ position: "relative", bottom: 13 }}>
                                        <Avatar alt="Display Picture" src={displayPicture} className={classes.avatar} />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </form>
                </div>
            </div>
        );
    }
}

Dashboard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Dashboard);
