import React, { useRef, useState } from "react";
import EditorHeader from "./EditorHeader";
import EditorSideBar from "./EditorSidebar";
import EditorPage from "./EditorPage";
import ScreenshotCapture from "./ScreenShot";

function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobileView, setIsMobileView] = useState(false);

  // Reference to the ScreenshotCapture component
  const screenshotRef = useRef<{ captureScreenshot: () => void }>(null);

  const toggleSidebarLayout = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const setMobileView = (view: "mobile" | "full") => {
    setIsMobileView(view === "mobile");
  };

  const handleSaveScreenshot = () => {
    // Call captureScreenshot from ScreenshotCapture
    screenshotRef.current?.captureScreenshot();
  };

  return (
    <div className="flex min-h-screen overflow-hidden relative">
      {/* Sidebar */}
      <div
        className={`flex-shrink-0 ${
          isSidebarOpen ? "w-72" : "hidden"
        } transition-all duration-300`}
        style={{ height: "100vh" }}
      >
        <EditorSideBar />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col relative">
        {/* ScreenshotCapture Component */}
        <ScreenshotCapture ref={screenshotRef} />

        {/* Header */}
        <EditorHeader
          toggleSidebarLayout={toggleSidebarLayout}
          setMobileView={setMobileView}
          onSaveScreenshot={handleSaveScreenshot} // Pass the screenshot handler
        />

        {/* EditorPage */}
        <div
          className={`absolute top-24 bottom-0 ${
            isMobileView
              ? "w-[375px] mx-auto left-0 right-0"
              : "w-full left-0 right-0"
          } ${
            isSidebarOpen ? "overflow-x-scroll" : "overflow-auto"
          } bg-gray-100 shadow transition-all duration-300`}
        >
          <EditorPage isMobileView={isMobileView} />
        </div>
      </div>
    </div>
  );
}

export default Layout;
