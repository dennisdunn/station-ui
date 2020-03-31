import { Card, CardContent, FormControl, FormControlLabel, makeStyles, MenuItem, Select } from '@material-ui/core';
import React, { useState } from 'react';

const useStyles = makeStyles(theme => ({
    root: { maxWidth: "40ch" },
    cardControls: { display: 'flex', justifyItems: 'end' },
    select: {
        margin: theme.spacing(1),
        minWidth: 120,}
}));

const getMenuItems = streams => {
    return streams.map((x,i) => <MenuItem key={i} value={x.value}>{x.key}</MenuItem>)
}

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
                                {getMenuItems(streams)}
                            </Select>}
                    />
                </FormControl>
            </CardContent>
        </Card >);
}
