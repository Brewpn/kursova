import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = theme => ({
    progress: {
        margin: theme.spacing.unit * 2,
    },
});

const style = {
    top      : '50%',
    textAlign: 'center'
};

function CircularIndeterminate(props) {
    const { classes } = props;
    return (
        <div style={style}>
            <CircularProgress className={classes.progress} size={100} />
        </div>
    );
}

CircularIndeterminate.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CircularIndeterminate);