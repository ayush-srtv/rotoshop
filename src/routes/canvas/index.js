import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Editor from "../../components/canvas-editor/";
import { ImageContext } from "../../utils/context/image.context";
import { getFileFromEvent, saveImage } from "../../utils/file";

const useStyles = makeStyles(theme => ({
  container: {
    height: "calc(100% - 112px)",
    width: "100%"
  }
}));

function Canvas(props, context) {
  const classes = useStyles();
  const { setImage } = useContext(ImageContext);
  const canvasProps = {
    canvas: {
      onDrop: event => {
        // Prevent default behavior (Prevent file from being opened)
        event.preventDefault();
        async function _processFile() {
          const file = await getFileFromEvent(event);
          setImage(file);
          await saveImage(file);
        }

        _processFile();
      },
      onDragOver: ev => ev.preventDefault()
    }
  };
  return (
    <div className={classes.container}>
      <ImageContext.Consumer>
        {({ image }) => <Editor image={image} {...canvasProps} />}
      </ImageContext.Consumer>
    </div>
  );
}

export default Canvas;
