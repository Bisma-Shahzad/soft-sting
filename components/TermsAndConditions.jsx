import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const TermsAndConditions = () => {
  return (
    <div>
      <div className="bg-[#242b33] pt-36 pb-36 flex flex-col items-center">
        <h1 className="text-white text-5xl font-bold">Terms and Condition</h1>
        <div className="flex mt-5">
          <Link href="/">
            <h1 className="text-[#555555] hover:underline hover:text-white">
              HOME
            </h1>
          </Link>
          <ChevronRight />
          <h1 className="text-white">TERMS AND CONDITIONS</h1>
        </div>
      </div>

      <div className="pt-20 w-[70%] mx-auto pb-10">
        <p className="text-[#616161] text-[20px]">
          This terms and condition outlines the user policy of Soft Stings, its
          services and liabilities involving the use of our services and
          products. By registering for any of our services, you agree that you
          have read and accepted all the terms and conditions outlined in this
          document.
        </p>
        <h1 className="text-[#616161] text-[22px] mt-4">COVERAGE & SCOPE</h1>
        <p className="text-[#616161] text-[20px] mt-1">
          This Terms of Use covers the treatment of use of services and products
          Soft Stings and/or a website owned and operated by Soft Stings.This
          document is not applicable to companies that Soft Stings has no
          ownership of or does not control, or of persons that are not under the
          employment and management of Soft Stings, including any third-party
          service and/or product providers bound by contract and any third-party
          websites to which Soft Stings’ website links
        </p>
        <h1 className="text-[#616161] text-[22px] mt-4">FILING A COMPLAINT</h1>
        <p className="text-[#616161] text-[20px] mt-1">
          In case of filing a complaint, Soft Stings will try and come to a
          mutually acceptable solution if a user is unsatisfied with any of our
          services. Revocation occurs when things don’t work out. If You think
          about filing a claim, please write to us before launching a
          request.You should only file complaints if we are unable to affect a
          mutually satisfactory solution.
        </p>
        <h1 className="text-[#616161] text-[22px] mt-4">ELIGIBILITY FOR REFUND</h1>
        <p className="text-[#616161] text-[20px] mt-1">
          We handle every project in a professional manner to ensure that the
          client is delivered what was mentioned as per the terms and conditions
          of the proposal. However, if the client has gone through the dispute
          resolution process, refund claims will be considered as per the
          following schedule which clearly lists the services and our Terms of
          Use related to each service.
        </p>

        <h1 className="text-[#616161] text-[22px] mt-4">APPLICATION PROGRAMMING</h1>
        <p className="text-[#616161] text-[20px] mt-1">
          We will offer a full refund if, for some reason, the project has not
          been initiated. An agreement is drafted for every application
          programming project. In case no agreement has been devised and/or
          there is no mention of a Terms of Use, we will apply the following
          delivery policy:
        </p>
        <p className="text-[#616161] text-[20px] mt-1">
          Soft Stings will issue a partial refund upon the discretion of the
          service provider if the project does not get finalized as mentioned in
          the delivery policy and contract. The proportion of the project
          completed will be calculated by Soft Stings and the proportion that is
          not complete will be treated as per the pre-defined scope of the
          project.
        </p>
        <h1 className="text-[#616161] text-[22px] mt-4">DEDICATED HIRING</h1>
        <p className="text-[#616161] text-[20px] mt-1">
          We offers a full refund if there is a delay in starting the project by
          either the programmer / designer / content writer / SEO expert (or any
          other resource / staff). We will offer a proportionate refund if the
          client cancels the project at any point in time. We offer no refund
          for days worked. If the client is not satisfied with the work at any
          point in time, they must immediately notify our Project Manager and
          ask for discounts for any work not carried out. We will not accept any
          such negotiation at a later date.
        </p>
        <h1 className="text-[#616161] text-[22px] mt-4">APPLICABILITY OF THE DELIVERY POLICY</h1>
        <p className="text-[#616161] text-[20px] mt-1">
          Timely payments: A project is not considered to be void if the agreed
          upon / listed payments are not clear. Timely communication from the
          client: Soft Stings is not bound by the Terms of Use. The client must
          provide timely information for successful completion of the project.
          We will not accept any responsibility for the delay or failure of
          completing the project arising out of miscommunication or lack of
          communication in a timely manner. Completeness of information provided
          by the client: Soft Stings is not obligated to respect its delivery
          and/or refund commitments if the client fails to provide complete
          information/scope of the project to Soft Stings at initializing stage
          of the project. We will only compensate for the delay of delivery,
          unless there is a special agreement signed with a penalty clause for
          delay in delivery.
        </p>

        <h1 className="text-[#616161] text-[22px] mt-4">LIMITATION OF LIABILITY</h1>
        <p className="text-[#616161] text-[20px] mt-1">
          Soft Stings liability is limited in as much to the value of the
          portion of the project (as per Soft Stings’ proposal) which may be
          incomplete at any given point of time. Soft Stings will not be held
          responsible for losses arising out of the services delivered / not
          delivered or the delay in the same. Soft Stings is only liable to
          refund if the client cancels the project, and as such, the
          cancellation has been communicated to Soft Stings in writing.
        </p>
        <h1 className="text-[#616161] text-[22px] mt-4">PROCESSING OF REFUNDS</h1>
        <p className="text-[#616161] text-[20px] mt-1">
          Soft Stings will process the refunds and mail the same within 5
          business days of the cancellation date. The same method of payment
          will be required as the original. (refund by check or refund to credit
          card). For further information on any query in regard to the stated
          terms and conditions, or would like to gather any type of information
          please feel free to contact us at
        </p>
        <p className="text-[#ff4a17] text-[20px] mt-1">info@softstings.com</p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
