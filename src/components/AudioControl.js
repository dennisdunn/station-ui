import { Card, CardContent, FormControl, FormControlLabel, makeStyles, Select } from '@material-ui/core';
import React, { useState } from 'react';
import { mkMenuItems } from './services';

const useStyles = makeStyles(theme => ({
    root: { maxWidth: "40ch" },
    cardControls: { display: 'flex', justifyItems: 'end' },
    select: {
        margin: theme.spacing(1),
        minWidth: 120,
    }
}));

export const AudioControl = ({ baseUrl, streams }) => {
    const [stream, setStream] = useState(streams[0].value);
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent>
                <audio className={classes.audio} src={`${baseUrl}/${stream}`} controls />
                <FormControl className={classes.cardControls}>
                    <FormControlLabel
                        label="Audio sources"
                        labelPlacement="start"
                        control={
                            <Select
                                className={classes.select}
                                value={stream}
                                onChange={e => setStream(e.target.value)}
                            >
                                {mkMenuItems(streams)}
                            </Select>}
                    />
                </FormControl>
            </CardContent>
        </Card >);
}
