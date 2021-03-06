import React, { useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";

const themeLogger = (namespace, fn, log = true) => (...args) => {
  if (log) console.log(namespace, ...args);
  return fn(...args);
};

const useStyles = makeStyles(
  themeLogger(
    "canvas-editor",
    (theme) => ({
      canvas: {
        height: "calc(100% - 60px)",
        width: "calc(100% - 60px)",
        margin: "30px 0",
        background: "#fafafa",
        boxShadow:
          "0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)"
      }
    }),
    false
  )
);

function loadImage(url) {
  return new Promise((r) => {
    let i = new Image();
    i.onload = () => r(i);
    i.src = url;
  });
}
/**
 * @todo following
 *
 * 1. add file upload
 * 2. add controls for filters(brightness, blur... etc)
 * 3. add error handling for file upload
 * 4. use filter props from filter tab
 *
 */
function Editor({ canvas = {}, image, brightness = 100 }) {
  const classes = useStyles();
  const ref = useRef(null);

  /**
   * @type react-hook
   * @description test hook to load a test image and apply a simple filter to test it functionality.
   */
  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");
    loadImage(image).then((img) => {
      ctx.filter = `sepia(.15) contrast(1.25) brightness(${brightness}%) hue-rotate(5deg)`;
      ctx.drawImage(
        img,
        0,
        0,
        img.width,
        img.height,
        0,
        0,
        canvas.width,
        canvas.height
      );
    });
  }, [image, ref, brightness]);

  const canvasProps = Object.assign(
    {},
    {
      id: "editor",
      // height: "200px",
      // width: "200px",
      className: classes.canvas,
      ref
    },
    canvas
  );

  return <canvas {...canvasProps} />;
}

export default Editor;
