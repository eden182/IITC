import React, { forwardRef, useImperativeHandle } from "react";
import html2canvas from "html2canvas";

interface ScreenshotCaptureProps {
  onSave?: (imageData: string) => void; // Optional callback to save the image string
}

const ScreenshotCapture = forwardRef((props: ScreenshotCaptureProps, ref) => {
  const { onSave } = props;

  // Function to capture the screenshot
  const captureScreenshot = () => {
    const elementToCapture = document.body; // Capture the entire page (you can adjust this).

    // Wait for all images to load
    const images = Array.from(document.images);
    const promises = images.map(
      (img) =>
        new Promise<void>((resolve) => {
          if (img.complete) {
            resolve();
          } else {
            img.onload = () => resolve();
            img.onerror = () => resolve();
          }
        })
    );

    Promise.all(promises).then(() => {
      html2canvas(elementToCapture, {
        useCORS: true, // Handles cross-origin images
        scale: 2, // Increases screenshot resolution
      }).then((canvas) => {
        const imageData = canvas.toDataURL("image/png"); // Convert to Base64

        // Open screenshot in a new window
        const newWindow = window.open();
        if (newWindow) {
          newWindow.document.write(
            `<img src="${imageData}" alt="Screenshot" style="width:100%; height:auto;" />`
          );
          newWindow.document.title = "Screenshot Preview";
        }

        // Optionally call onSave callback
        if (onSave) {
          onSave(imageData);
        }
      });
    });
  };

  // Expose captureScreenshot to parent components
  useImperativeHandle(ref, () => ({
    captureScreenshot,
  }));

  return null; // No visible UI, it’s used programmatically
});

export default ScreenshotCapture;
