import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { AppBar, Divider, CssBaseline, Drawer, Hidden, IconButton, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography,withStyles     }from '@material-ui/core';

import InboxIcon from '@material-ui/icons/MoveToInbox';

import MenuIcon from '@material-ui/icons/Menu';
import PersonIcon from '@material-ui/icons/Person';
import HomeIcon from '@material-ui/icons/Home';
import SignOutIcon from '@material-ui/icons/PowerSettingsNew';

const drawerWidth = 240;

const styles = theme => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        marginLeft: drawerWidth,
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
        },
    },
    menuButton: {
        marginRight: 20,
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
    },
});

class AdminDashboard extends Component {
    state = {
        mobileOpen: false,
    };

    handleDrawerToggle = () => {
        this.setState(state => ({ mobileOpen: !state.mobileOpen }));
    };

    render() {
        const { classes, theme } = this.props;

        const drawer = (
            <div>
                <div className={classes.toolbar} >
                    <h4><span className="fa fa-home fa-lg m-3"> Real Estate</span></h4>
                </div>
                <Divider />
                <List>

                        <ListItem button>
                            <ListItemIcon><PersonIcon /></ListItemIcon>
                            <ListItemText primary={"All Users"} />
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon><HomeIcon /></ListItemIcon>
                            <ListItemText primary={"All Properties"} />
                        </ListItem>

                </List>
                <Divider />
                <List>

                        <ListItem button>
                            <ListItemIcon><SignOutIcon /> </ListItemIcon>
                            <ListItemText primary={"Sign Out"} />
                        </ListItem>
                </List>
            </div>
        );

        return (
            <div className={classes.root}>
                <CssBaseline />
                <AppBar position="fixed" className={classes.appBar} color={"default"}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="Open drawer"
                            onClick={this.handleDrawerToggle}
                            className={classes.menuButton}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" color="inherit" noWrap>
                            Dashboard
                        </Typography>
                    </Toolbar>
                </AppBar>
                <nav className={classes.drawer}>
                    {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                    <Hidden smUp implementation="css">
                        <Drawer
                            container={this.props.container}
                            variant="temporary"
                            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                            open={this.state.mobileOpen}
                            onClose={this.handleDrawerToggle}
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                        >
                            {drawer}
                        </Drawer>
                    </Hidden>
                    <Hidden xsDown implementation="css">
                        <Drawer
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                            variant="permanent"
                            open
                        >
                            {drawer}
                        </Drawer>
                    </Hidden>
                </nav>
                <main className="text-white">
                </main>
            </div>
        );
    }
}

AdminDashboard.propTypes = {
    classes: PropTypes.object.isRequired,
    // Injected by the documentation to work in an iframe.
    // You won't need it on your project.
    container: PropTypes.object,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(AdminDashboard);