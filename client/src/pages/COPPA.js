import React from "react";
import "../App.css";
import "../assets/css/material-kit.min.css";
import NavBar from "../components/NavBar";

const Landing = () => {
  return (
    <>
      <NavBar />
      <div className="landing-page sidebar-collapse">
        <div className="page-header header-filter" data-parallax="true">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h1 className="title">JBot</h1>
                <h3 className="subtitle ml-5">
                  <em>A monitored educational gaming experience</em>
                </h3>
                <br />
              </div>
            </div>
          </div>
        </div>
        <div className="main main-raised">
          <div className="container">
            <div className="section text-center">
              <div className="row">
                <div className="col-md-8 ml-auto mr-auto">
                  <h2 className="title">Privacy Policy</h2>
                  <h5 className="description">
                    <p className="pull-left"></p>
                    <ul className="pull-left">
                      <h3>
                        Your privacy is important to J-BOT so we’ve developed a
                        Privacy Policy that covers how we collect, use,
                        disclose, transfer, and store your personal information.
                      </h3>

                      <h3>
                        Collection and Use of Personal Information: You may be
                        asked to provide your personal information anytime you
                        are in contact with J-BOT or a J-BOT affiliated company.
                        J-BOT and its affiliates may share this personal
                        information with each other and use it consistent with
                        this Privacy Policy. They may also combine it with other
                        information to provide and improve our products,
                        services, content, and advertising. You are not required
                        to provide the personal information that we have
                        requested, but, if you chose not to do so, in many cases
                        we will not be able to provide you with our products or
                        services or respond to any queries you may have.
                      </h3>

                      <h3>What personal information we collect:</h3>
                      <ul>
                        <li>
                          When you create an J-Bot ID, we may collect a variety
                          of information, including your name, email address and
                          profile information.
                        </li>
                        <li>
                          In certain jurisdictions, we may ask for a government
                          issued ID in limited circumstances.
                        </li>
                      </ul>

                      <h3>How we use your personal information:</h3>
                      <ul>
                        <li>
                          The personal information we collect allows us to keep
                          you posted on J-BOT’s latest announcements, software
                          updates, and upcoming events.
                        </li>
                        <li>
                          We also use personal information to help us create,
                          develop, operate, deliver, and improve our products
                          and services.
                        </li>
                        <li>
                          We may use your personal information, including date
                          of birth, to verify identity, assist with
                          identification of users, and to determine appropriate
                          services.
                        </li>
                        <li>
                          From time to time, we may use your personal
                          information to send important notices, such as
                          communications about purchases and changes to our
                          terms, conditions, and policies. Because this
                          information is important to your interaction with
                          Apple, you may not opt out of receiving these
                          communications.
                        </li>
                        <li>
                          We may also use personal information for internal
                          purposes such as auditing, data analysis, and research
                          to improve J-BOT’s products, services, and customer
                          communications.
                        </li>
                      </ul>

                      <h3>Children & Education:</h3>
                      <ul>
                        <li>
                          We understand the importance of taking extra
                          precautions to protect the privacy and safety of
                          children using J-BOT products and services. Children
                          under the age of 13, or equivalent minimum age in the
                          relevant jurisdiction, are not permitted to create
                          their own J-BOT IDs, unless their parent provided
                          verifiable consent or as part of the child account
                          creation process in Family Sharing or they have
                          obtained a Managed J-BOT ID account (where available)
                          through their school.
                        </li>
                        <li>
                          For example, a parent must review the J-BOT ID and
                          Family Sharing Disclosure and agree to the Consent to
                          J-BOT’s Collection, Use and Disclosure of Your Child’s
                          Information; and the Terms and Conditions, before they
                          can begin the J-BOT ID account creation process for
                          their child. In addition, schools that participate in
                          J-BOT Manager and have reviewed and consented to the
                          Managed J-BOT IDs for Students Disclosure may create
                          Managed J-BOT IDs for students.
                        </li>
                        <li>
                          If we learn that we have collected the personal
                          information of a child under 13, or equivalent minimum
                          age depending on jurisdiction, outside the above
                          circumstances we will take steps to delete the
                          information as soon as possible. If at any time a
                          parent needs to access, correct, or delete data
                          associated with their Family Sharing account or
                          child’s J-BOT ID, they may contact us through one of
                          the options provided.
                        </li>
                      </ul>
                    </ul>
                  </h5>
                </div>
              </div>
              <div className="features">
                <div className="row">
                  {/* <div className="col-md-4"> */}
                  {/* Centered this feature until we add additional features */}
                  <div className="col">
                    <div className="info">
                      <div className="icon icon-success">
                        <i className="material-icons">verified_user</i>
                      </div>
                      <h4 className="info-title">Verified Users</h4>
                      <p></p>
                    </div>
                  </div>
                  {/* TODO: Update the features section!!! */}
                  {/* <div className="col-md-4">
                  <div className="info">
                    <div className="icon icon-info">
                      <i className="material-icons">chat</i>
                    </div>
                    <h4 className="info-title">Free Chat</h4>
                    <p>
                      Divide details about your product or agency work into
                      parts. Write a few lines about each one. A paragraph
                      describing a feature will be enough.
                    </p>
                  </div>
                </div> */}
                  {/* <div className="col-md-4">
                  <div className="info">
                    <div className="icon icon-danger">
                      <i className="material-icons">fingerprint</i>
                    </div>
                    <h4 className="info-title">Fingerprint</h4>
                    <p>
                      Divide details about your product or agency work into
                      parts. Write a few lines about each one. A paragraph
                      describing a feature will be enough.
                    </p>
                  </div>
                </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
