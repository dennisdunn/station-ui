import React from 'react';
import { Card, CardContent, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: { maxWidth: "40ch" }
}));

export const AudioControl = ({ source }) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent>
                <audio src={source} controls />
            </CardContent>
        </Card>);
}
