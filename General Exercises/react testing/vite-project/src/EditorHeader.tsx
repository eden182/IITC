import React from "react";

interface EditorHeaderProps {
  toggleSidebarLayout: () => void;
  setMobileView: (view: "mobile" | "full") => void;
  onSaveScreenshot: () => void; // New prop for saving the screenshot
}

const EditorHeader: React.FC<EditorHeaderProps> = ({
  toggleSidebarLayout,
  setMobileView,
  onSaveScreenshot,
}) => {
  return (
    <div className="w-[99%] h-16 border-b shadow-md flex justify-between items-center p-5 mt-2">
      {/* Sidebar toggle */}
      <div className="flex flex-row-reverse">
        <button
          onClick={toggleSidebarLayout}
          className="hover:bg-slate-50 p-3 cursor-pointer"
        >
          Edit
        </button>
        <button
          onClick={onSaveScreenshot}
          className="bg-black text-white p-3 cursor-pointer"
        >
          Save
        </button>
      </div>
      {/* Buttons for switching views */}
      <div className="flex gap-4">
        <button
          onClick={() => setMobileView("mobile")}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 flex items-center gap-2"
          aria-label="Switch to Mobile View"
        >
          {/* SVG */}
        </button>
        <button
          onClick={() => setMobileView("full")}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 flex items-center gap-2"
          aria-label="Switch to Full View"
        >
          {/* SVG */}
        </button>
      </div>
    </div>
  );
};

export default EditorHeader;
