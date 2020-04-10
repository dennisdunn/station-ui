import { Button, Icon, makeStyles, Typography } from "@material-ui/core";
import React, { useEffect, useRef, useState } from "react";

const useStyles = makeStyles((theme) => ({
  content: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    margin: theme.spacing(1),
  },
}));

export const StreamPlayer = ({ url, ...rest }) => {
  const classes = useStyles();
  const [isPlaying, setIsPlaying] = useState(false);
  const [name, setName] = useState("");

  const player = useRef();

  const play = () => {
    player.current.play();
    setIsPlaying(true);
  };

  const pause = () => {
    player.current.pause();
    setIsPlaying(false);
  };

  useEffect(() => {
    const parts = url.split("/");
    setName(parts[parts.length - 1].replace(".ogg", "").toUpperCase());
  }, [url]);

  return (
    <div className={classes.content}>
      <audio ref={player} src={url} volume={1} />
      {isPlaying ? (
        <Button onClick={pause} size="small" {...rest}>
          <Icon>pause</Icon>
        </Button>
      ) : (
        <Button onClick={play} size="small" {...rest}>
          <Icon>play_arrow</Icon>
        </Button>
      )}
      <Typography className={classes.text}>{name}</Typography>
    </div>
  );
};
