import React, { useState } from "react";

function PlayBtn({ children, onPlay, onPause }) {
  const [playing, setplaying] = useState(false);
  function handleClick(e) {
    e.stopPropagation();

    if (playing) onPause();
    else onPlay();

    setplaying(!playing);
  }
  return (
    <>
      <button
        onClick={handleClick}
        className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        {children} : {playing ? "⏸️" : "⏯️"}
      </button>
    </>
  );
}

export default PlayBtn;
