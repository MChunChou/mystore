import React, { useState, useEffect, useMemo, useCallback } from "react";

interface VideoProps {
  control?: boolean;
  autoPlay?: boolean;
  source: string;
}

const Video = (props: VideoProps) => {
  return (
    <div className="my-player">
      <video>
        <source src="" />
      </video>
    </div>
  );
};
export default Video;
