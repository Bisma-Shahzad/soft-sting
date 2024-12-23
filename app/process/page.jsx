import ProcessWorkflowInfo from "@/components/ProcessWorkflowInfo";
import ProcessWorkFlows from "@/components/ProcessWorkFlows";
import SubHeader from "@/components/SubHeader";
import React from "react";

const OurProcess = () => {
  return (
    <div>
      {/* <OurProcessSubHeader /> */}
      <SubHeader
        title="Our Process"
        bgImage="/our-process-banner.webp"
        paragraph="The evaluation phase, app launch, A/B testing and delivery of the app
          that is market-friendly"
      />
      <ProcessWorkFlows />
      <ProcessWorkflowInfo />
    </div>
  );
};

export default OurProcess;
