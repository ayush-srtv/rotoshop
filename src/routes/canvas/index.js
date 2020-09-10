import React, { useContext, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Editor from "../../components/canvas-editor/";
import { ImageContext } from "../../utils/context/image.context";
import { getFileFromEvent, saveImage } from "../../utils/file";
import storage from "../../utils/storage";
import { SETTINGS } from "../../config/constants";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "calc(100% - 112px)",
    width: "100%"
  }
}));

function Canvas(props, context) {
  const classes = useStyles();
  const [brightness, setBrightness] = useState(100);
  const { setImage } = useContext(ImageContext);
  useEffect(() => {
    async function _getBrightness() {
      setBrightness((await storage.get(SETTINGS.BRIGHTNESS)) || 100);
    }
    _getBrightness();
    return () => {};
  }, []);
  const canvasProps = {
    canvas: {
      onDrop: (event) => {
        // Prevent default behavior (Prevent file from being opened)
        event.preventDefault();
        async function _processFile() {
          const file = await getFileFromEvent(event);
          setImage(file);
          await saveImage(file);
        }

        _processFile();
      },
      onDragOver: (ev) => ev.preventDefault()
    },
    brightness
  };
  return (
    <div className={classes.container}>
      <ImageContext.Consumer>
        {({ image }) => <Editor {...{ ...canvasProps, image }} />}
      </ImageContext.Consumer>
    </div>
  );
}

export default Canvas;
