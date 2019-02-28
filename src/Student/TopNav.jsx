import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { fade } from "@material-ui/core/styles/colorManipulator";
import { withStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import { Grid, Avatar } from "@material-ui/core";
import logo from "../logo/logo.jpeg";

const styles = theme => ({
  root: {
    width: "100%"
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing.unit * 3,
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit",
    width: "100%"
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200
    }
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  }
});

class TopNav extends React.Component {
  state = {
    anchorEl: null,
    mobileMoreAnchorEl: null
  };

  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
    this.handleMobileMenuClose();
  };

  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };

  render() {
    const { anchorEl, mobileMoreAnchorEl } = this.state;
    const { classes } = this.props;
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleMenuClose}>
          {" "}
          <a href="/my">Profile</a>
        </MenuItem>
        <MenuItem onClick={this.handleMenuClose}>Logout</MenuItem>
      </Menu>
    );

    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMobileMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleMobileMenuClose}>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <MailIcon />
            </Badge>
          </IconButton>
          <p>Messages</p>
        </MenuItem>
        <MenuItem onClick={this.handleMobileMenuClose}>
          <IconButton color="inherit">
            <Badge badgeContent={11} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <p>Notifications</p>
        </MenuItem>
        <MenuItem onClick={this.handleProfileMenuOpen}>
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>

          <p>Profile</p>
        </MenuItem>
      </Menu>
    );

    return (
      <div
        style={{ zIndex: "30", position: "absolute" }}
        class="shadow"
        className={classes.root}
      >
        <Grid container>
          <Grid item md={12}>
            <AppBar position="static">
              <Toolbar>
                <Avatar src={logo} />

                <Typography
                  variant="h6"
                  color="inherit"
                  style={{ marginLeft: "15px" }}
                  noWrap
                >
                  e-Certify
                </Typography>
                <div className={classes.search}>
                  <div className={classes.searchIcon}>
                    <SearchIcon />
                  </div>
                  <InputBase
                    placeholder="Search…"
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput
                    }}
                  />
                </div>
                <div />
                <div className={classes.grow} />
                <div className={classes.sectionDesktop}>
                  {/* <IconButton color="inherit">
                    <Badge badgeContent={4} color="secondary">
                      <MailIcon />
                    </Badge>
                  </IconButton>
                  <IconButton color="inherit">
                    <Badge badgeContent={17} color="secondary">
                      <NotificationsIcon />
                    </Badge>
                  </IconButton> */}
                  <IconButton
                    aria-owns={isMenuOpen ? "material-appbar" : undefined}
                    aria-haspopup="true"
                    onClick={this.handleProfileMenuOpen}
                    color="inherit"
                  >
                    <Avatar src="data:image/jpeg;base64,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" />
                  </IconButton>
                </div>
                <div className={classes.sectionMobile}>
                  <IconButton
                    aria-haspopup="true"
                    onClick={this.handleMobileMenuOpen}
                    color="inherit"
                  >
                    <MoreIcon />
                  </IconButton>
                </div>
              </Toolbar>
            </AppBar>
            {renderMenu}
            {renderMobileMenu}
          </Grid>
        </Grid>
      </div>
    );
  }
}

TopNav.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TopNav);
