import React from "react";
import Editor from "../../components/canvas-editor/";
import { toBase64 } from "../../utils/file";
import storage from "../../utils/storage";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  container: {
    height: "calc(100% - 112px)",
    width: "100%"
  }
}));

function Canvas(props) {
  const classes = useStyles();
  console.log("img", props);
  const canvasProps = {
    image: props.image,
    canvas: {
      onDrop: ev => {
        console.log("File(s) dropped");

        // Prevent default behavior (Prevent file from being opened)
        ev.preventDefault();

        if (ev.dataTransfer.items) {
          // Use DataTransferItemList interface to access the file(s)
          for (let i = 0; i < ev.dataTransfer.items.length; i++) {
            // If dropped items aren't files, reject them
            if (ev.dataTransfer.items[i].kind === "file") {
              let file = ev.dataTransfer.items[i].getAsFile();
              async function convertToBase64(f) {
                const image = await toBase64(f);
                if (await storage.set("image", image)) {
                  console.log("File saved");
                }
              }
              convertToBase64(file);

              console.log("... file[" + i + "].name = " + file.name);
            }
          }
        } else {
          // Use DataTransfer interface to access the file(s)
          for (let i = 0; i < ev.dataTransfer.files.length; i++) {
            console.log(
              "... file[" + i + "].name = " + ev.dataTransfer.files[i].name
            );
          }
        }
      },
      onDragOver: ev => {
        console.log("File(s) in drop zone");

        // Prevent default behavior (Prevent file from being opened)
        ev.preventDefault();
      }
    }
  };
  return (
    <div className={classes.container}>
      <Editor {...canvasProps} />
    </div>
  );
}

export default Canvas;
