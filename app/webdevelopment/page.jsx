import SubHeader from "@/components/SubHeader";
import WebDevelopmentContent from "@/components/WebDevelopmentContent";
import React from "react";

const WebDevelopment = () => {
  return (
    <div>
      <SubHeader
        title="Web Development"
        bgImage="/Development-banner.webp"
        paragraph="Front end development with a true agile approach for API integration,
designing, building and implementing software application"
      />

      <WebDevelopmentContent />
    </div>
  );
};

export default WebDevelopment;
