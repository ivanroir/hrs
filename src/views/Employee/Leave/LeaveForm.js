import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Avatar from '@material-ui/core/Avatar';
import displayPicture from "../../../assets/img/avatar.svg";
import Event from '@material-ui/icons/Event';
import BusinessCenter from '@material-ui/icons/BusinessCenter';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import './style.css';

const theme = createMuiTheme({
    palette: {
        secondary: {
            light: '#FDFDFD',
            main: '#FDFDFD',
            dark: '#FDFDFD',
            contrastText: '#fff',
        },
    },

});


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
        overflow: "auto",

    },

    textField: {

        position: "relative",
        top: "150px",
        left: "25%",

    },
    imgProp: {
        width: "40px",
        height: "40px",
        color: "white",
    },
    border: {
        position: "relative",
        top: "150px",
        left: "23.5%",
        borderRadius: "10px",
        width: "50%",
        height: "250px",
        border: "2px solid white",
        padding: "25px",
        margin: "25px",
    },


});

class Dashboard extends Component {

    state = {
        vacation: true,
        emergency: true,
        maternity: true,
        bereavement: true,
        sick: true,
        unpaid: true,
        paternity: true,
        other: true,
    }

    handleChange = name => event => {
        this.setState({ [name]: event.target.checked });
    };

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.content} >
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

                <hr style={{ position: "relative", top: 100, width: "35%", }} />

                <div className={classes.textField}>
                    <TextField
                        disabled
                        style={{ borderBottom: '2px solid white', color: "white", width: "50%" }}
                        id="name"
                        value="Name"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start" style={{ position: "relative", bottom: 13 }}>
                                    <Avatar alt="Display Picture" src={displayPicture} className={classes.imgProp} />
                                </InputAdornment>
                            ),
                        }}
                    />
                </div>
                <div className={classes.textField} style={{ top: "175px" }}>
                    <TextField
                        disabled
                        style={{ borderBottom: '2px solid white', color: "white", width: "50%" }}
                        id="name"
                        value="Position"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start" style={{ position: "relative", bottom: 13 }}>
                                    <BusinessCenter className={classes.imgProp} />
                                </InputAdornment>
                            ),
                        }}
                    />
                </div>
                <div className={classes.textField} style={{ top: "205px" }}>
                    <TextField
                        disabled
                        style={{ borderBottom: '2px solid white', color: "white", width: "50%" }}
                        id="name"
                        value="Schedule"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start" style={{ position: "relative", bottom: 13 }}>
                                    <Event className={classes.imgProp} />
                                </InputAdornment>
                            ),
                        }}
                    />
                </div>

                <div className={classes.border} style={{ top: "235px" }}>
                    <TextField
                        classes={{
                            label: classes.checked,
                        }}
                        id="date"
                        type="date"
                        style={{ borderBottom: '2px solid white', color: "white", width: "100%", }}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <Typography variant="body1" style={{ marginTop: "10px", fontWeight: "500", color: "#FDFDFD" }}>
                        TYPE OF LEAVE
                    </Typography>
                    <Grid container spacing={8}>
                        <Grid item xs={3}>
                            <MuiThemeProvider theme={theme}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            name="vacation"
                                            checked={this.state.vacation}
                                            onChange={this.handleChange("vacation")}
                                            value="vacation"
                                        />
                                    }
                                    label="Vacation Leave"
                                />
                            </MuiThemeProvider>
                        </Grid>
                        <Grid item xs={3}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        name="emergency"
                                        checked={this.state.emergency}
                                        onChange={this.handleChange("emergency")}
                                        value="emergency"
                                    />
                                }

                                label="Emergency Leave"
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        name="maternity"
                                        checked={this.state.maternity}
                                        onChange={this.handleChange("maternity")}
                                        value="maternity"
                                    />
                                }

                                label="Maternity Leave"
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        name="bereavement"
                                        checked={this.state.bereavement}
                                        onChange={this.handleChange("bereavement")}
                                        value="bereavement"
                                    />
                                }

                                label="Bereavement Leave"
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        name="sick"
                                        checked={this.state.sick}
                                        onChange={this.handleChange("sick")}
                                        value="sick"
                                    />
                                }

                                label="Sick Leave"
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        name="unpaid"
                                        checked={this.state.unpaid}
                                        onChange={this.handleChange("unpaid")}
                                        value="unpaid"
                                    />
                                }

                                label="Unpaid Leave"
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        name="paternity"
                                        checked={this.state.paternity}
                                        onChange={this.handleChange("paternity")}
                                        value="paternity"
                                    />
                                }

                                label="Paternity Leave"
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        name=" other"
                                        checked={this.state.other}
                                        onChange={this.handleChange("other")}
                                        value="other"
                                    />
                                }

                                label="Other"
                            />
                        </Grid>
                    </Grid>
                </div>
            </div>
        );
    }
}

Dashboard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Dashboard);
