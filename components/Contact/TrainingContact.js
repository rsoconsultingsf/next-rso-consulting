import React from "react";

import Card from "../UI/Cards/Card";
import SectionLabel from "../UI/Labels/SectionLabel";
import TrainingContactForm from "../Forms/TrainingContactForm";

const TrainingContactSection = (props) => {
  return (
    <section id="contact">
      <div className="container center">
        {!props.noLabel && (
          <SectionLabel orange>{props.title || "Get In Touch"}</SectionLabel>
        )}
        {props.contactHeader ? props.contactHeader : <p></p>}
      </div>
      <div className="container">
        <div className="desktop">
          <Card>
            <TrainingContactForm />
          </Card>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <div style={{ width: "100%" }}>
            <div
              className="mobile"
              style={{ paddingBottom: "30px" }}
            >
              <Card>
                <TrainingContactForm />
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingContactSection;
