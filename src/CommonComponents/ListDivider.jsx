import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import FullScreenDialog from "./FulScreenDialog";
import { Typography } from "@material-ui/core";

function ListDividers(props) {
  const { classes } = props;
  return (
    <List>
      <ListItem button>
        <ListItemText>
          <Typography variant="title"> Adhar Card</Typography>
        </ListItemText>
        <FullScreenDialog />
      </ListItem>
      <Divider />
    </List>
  );
}

ListDividers.propTypes = {
  classes: PropTypes.object.isRequired
};

export default ListDividers;
