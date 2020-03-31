import { Card, CardContent, FormControl, FormControlLabel, makeStyles, Switch } from '@material-ui/core';
import React, { useState } from 'react';

const useStyles = makeStyles(theme => ({
    root: { maxWidth: "40ch" },
    switch: { display: 'flex', justifyItems: 'end' }
}));

export const AudioControl = ({ source }) => {
    const [url, setUrl] = useState(source);
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent>
                <audio className={classes.audio} src={url} controls />
                <FormControl className={classes.switch}>
                    <FormControlLabel
                        label="440Hz"
                        labelPlacement="start"
                        control={<Switch onChange={(e, v) => setUrl(v ? "http://localhost:8000/tone" : source)} />}
                    />
                </FormControl>
            </CardContent>
        </Card>);
}
