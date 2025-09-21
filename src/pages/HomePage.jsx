import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../custom.css";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6 },
  }),
};

export default function HomePage() {
  const navigate = useNavigate();
  const [showBenefits, setShowBenefits] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,  // animation speed (ms)
      once: true,     // animate only once per element
      offset: 120,    // trigger point from top of viewport
      easing: "ease-in-out"
    });
  }, []);

  const domains = [
    { title: "Cognitive/Emotional Domain", info: "This domain focuses on the mental and psychological aspects of anxiety, particularly the nature of worrying." },
    { title: "Somatic Domain", info: "This domain covers the physical manifestations of anxiety, which often accompany the mental symptoms." },
    { title: "Fear and Apprehension", info: "This domain captures a future-oriented sense of dread and apprehension characteristic of generalized anxiety." }
  ];

  return (
    <div>
      {/* HERO */}
      <Container fluid className="py-5 d-flex justify-content-center" data-aos="fade-up">
        <div className="section-box text-center" style={{maxWidth: 1000}}>
          <h1>Welcome to the GAD-7 App: Your Partner in Anxiety Assessment</h1>
          <h4 className="mb-3">Helping You Understand and Manage Your Anxiety, One Step at a Time.</h4>
        </div>
      </Container>

      {/* ===== Info Section: PHQ-9 Intro + Scoring + History ===== */}
      <section className="container my-5">
        <div className="row g-4 align-items-stretch">
          {/* LEFT COLUMN: What is PHQ-9 + Scoring Threshold in one card */}
          <div className="col-lg-6">
            <div className="section-box h-100 d-flex flex-column">
              <h2 className="mb-3">What is GAD-7?</h2>
              <p className="lead">
                The Generalized Anxiety Disorder-7 (GAD-7) is a widely used, evidence-based screening tool designed to help assess the presence and severity of anxiety. It consists of 7 simple questions that reflect common symptoms of anxiety, such as nervousness, excessive worrying, trouble relaxing, restlessness, and irritability.              </p>
              <p className="lead">
                The GAD-7 can be self-administered or completed with the support of a healthcare professional. Because it is brief, reliable, and easy to score, it is frequently used in both clinical and community settings to support early detection, monitor changes over time, and guide treatment planning.              </p>
              <p className="lead">
               This app provides a quick and private way to complete the GAD-7 questionnaire. All assessments are self-contained—no login required and no personal data stored. At the end, you’ll receive an interpretation of your score to better understand your anxiety levels and overall mental well-being.              </p>

              <hr className="my-4"/>

              <h3 className="mb-3">Scoring Threshold</h3>
              <p className="lead">
                GAD-7 scores are calculated by adding the responses to all 7 questions. Each question is scored 0–3:
              </p>
              <ul className="small-muted">
                <li>Not at all = 0</li>
                <li>Several days = 1</li>
                <li>More than half the days = 2</li>
                <li>Nearly every day = 3</li>
              </ul>

              <p className="lead">Total Score (0–21) indicates anxiety severity:</p>

              <div className="table-responsive">
                <table className="score-table mx-auto mt-3 mb-0">
                  <thead>
                    <tr>
                      <th>Total Score</th>
                      <th>Anxiety Severity</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>0–4</td><td>Minimal Anxiety</td></tr>
                    <tr><td>5–9</td><td>Mild Anxiety</td></tr>
                    <tr><td>10–14</td><td>Moderate Anxiety</td></tr>
                    <tr><td>15–21</td><td>Severe Anxiety</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: History of PHQ-9 with Vertical Timeline */}
          <div className="col-lg-6">
            <div className="section-box h-100">
              <h2 className="mb-4 text-center">History of GAD-7</h2>
              <div className="roadmap-vertical">
                {[
                  {
                    year: "2006: Development and Initial Validation",
                    text: "The GAD-7 was created by researchers, including Robert L. Spitzer, Janet B. W. Williams, and Kurt Kroenke, who had previously developed the PHQ-9. They recognized a similar need for a brief, reliable, and easily administered tool to screen for Generalized Anxiety Disorder (GAD) in primary care settings.The GAD-7 was derived from an initial 13-item anxiety scale. Through a large-scale study involving nearly 3,000 primary care patients, the seven items with the strongest correlations to a GAD diagnosis were selected.The scale was formally introduced and its initial psychometric properties were validated in a 2006 article in the Archives of Internal Medicine. The study confirmed its high sensitivity and specificity for identifying GAD, and established cut-off points for measuring severity."
                  },
                  {
                    year: "2007–2009: Expanding Clinical Use",
                    text: "Research during this period expanded the GAD-7's proven utility beyond GAD. Studies confirmed its effectiveness as a screener for other common anxiety disorders, such as panic disorder, social anxiety disorder, and post-traumatic stress disorder. Its brevity and ease of use made it particularly appealing for busy primary care environments, leading to widespread adoption.In 2008, a study published in Medical Care validated the GAD-7 within a large general population sample in Germany. This was a significant milestone, confirming the scale's reliability and validity outside of clinical settings."
                  },
                  {
                    year: "2010s: Global Validation and Broader Adoption",
                    text: "The GAD-7 gained international recognition and was translated and culturally validated in many languages across numerous countries. This allowed for its use in diverse linguistic and cultural populations and facilitated cross-cultural mental health research.Recognizing the high comorbidity between anxiety and physical health conditions, the GAD-7 was increasingly used in patients with chronic illnesses like coronary heart disease and epilepsy to monitor and detect anxiety symptoms. "
                  },
                  {
                    year: "2020s: Digital Integration and Advanced Research",
                    text: "The GAD-7 has been widely integrated into modern digital health platforms, telemedicine services, and mobile apps. This enables remote self-assessment, ongoing symptom monitoring, and real-time tracking of treatment response, especially in the context of increased telehealth adoption.Researchers are now utilizing data from the GAD-7 in advanced analytical techniques, including machine learning and digital phenotyping. By correlating self-reported GAD-7 scores with passively collected data from smartphones, these methods allow for a deeper, more nuanced understanding of anxiety patterns and predictors."
                  }
                ].map((step, idx) => (
                  <div className="roadmap-item" key={idx} data-aos="fade-up" data-aos-delay={idx*100}>
                    <div className="roadmap-node"></div>
                    <div className="roadmap-content">
                      <h5>{step.year}</h5>
                      <p>{step.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DOMAINS */}
      <Container className="py-5" data-aos="fade-up">
        <h2 className="text-center mb-4">What Does GAD-7 Help Detect? Key Domains</h2>
        <Row className="g-4">
          {domains.map((d,i) => (
            <Col md={4} key={i} data-aos="fade-up" data-aos-delay={i*80}>
              <Card className="domain-card p-3">
                <Card.Body>
                  <Card.Title style={{color:"var(--lavender-500)"}}>{d.title}</Card.Title>
                  <Card.Text style={{color:"var(--muted)"}}>{d.info}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Key Features & Impact */}
      <Container className="py-5" data-aos="fade-up">
        <Row className="g-4">
          <Col md={6}>
            <div className="section-box h-100">
              <h2 className="text-center mb-4">Clinical Impact</h2>
              <h5>For Diagnosis and Screening</h5>
              <ul className="small-muted">
                <li>Similar to the PHQ-9 for depression, the GAD-7 is highly effective in busy primary care settings for identifying potential cases of GAD and other anxiety disorders. Its use helps capture cases that might otherwise be missed, prompting further diagnostic evaluation.</li>
                <li>The GAD-7 aligns with the DSM-IV and DSM-5 criteria for GAD, capturing the core symptoms of excessive worry, restlessness, irritability, and muscle tension. </li>
                <li>A score of 10 or greater is the established cutoff for identifying probable cases of GAD, and it also demonstrates reasonable accuracy for screening panic disorder, social anxiety disorder, and post-traumatic stress disorder.</li>
              </ul>

              <h5>For Severity Measurement & Monitoring</h5>
              <ul className="small-muted">
                <li>GAD-7 scores provide a quantitative measure of anxiety severity, with specific score ranges corresponding to minimal (0–4), mild (5–9), moderate (10–14), and severe (15–21) anxiety. This provides an objective metric for understanding a patient's condition.</li>
                <li>The GAD-7 is valuable for monitoring changes in a patient's anxiety symptoms over time. Repeated administration allows clinicians and patients to track progress, evaluate the effectiveness of interventions, and inform decisions about adjusting treatment plans.</li>
                <li>The severity score can guide treatment intensity and strategy. Higher scores may indicate the need for more intensive interventions, such as cognitive behavioral therapy (CBT), medication, or referral to a mental health specialist. </li>
              </ul>

              <h5>Cross-cultural adaptability</h5>
              <ul className="small-muted">
                <li>The GAD-7 has been translated and validated in numerous languages and cultural contexts. This confirms its reliability and allows for cross-cultural research on anxiety, contributing to a broader understanding of mental health worldwide. </li>
              </ul>
            </div>
          </Col>
      
          <Col md={6}>
            <div className="section-box h-100">
               <h2 className="text-center mb-4">Feasibility & Accessibility</h2>
              <ul className="small-muted">
                <li>The GAD-7 consists of only seven items and can be completed by a patient in a few minutes. Its scoring is straightforward, allowing for quick assessment of anxiety severity and easy integration into busy clinical workflows in primary care and other healthcare settings.</li>
                <li>The GAD-7 is in the public domain and available for free, making it highly accessible without cost barriers. It has been translated and validated in numerous languages, enabling its use across diverse cultural and linguistic groups and helping to address health disparities.</li>
                <li>The GAD-7 can be self-administered by patients on paper or electronically, or it can be completed through a verbal interview with a healthcare provider. This versatility allows for effective use in various formats, including telemedicine and mobile health applications.</li>
                
              </ul>

              <h2 className="text-center mb-4">Research Applications</h2>
              <ul className="small-muted">
                <li>As a widely used and well-validated tool, the GAD-7 provides standardized and quantifiable data on anxiety symptoms and severity. This data is essential for both clinical trials assessing treatment effectiveness and large-scale epidemiological studies monitoring mental health trends.</li>
                <li> Extensive research has confirmed the GAD-7's strong psychometric properties, including excellent internal consistency (often with a Cronbach's alpha above 0.8) and good test-retest reliability. This confirms its reliability for accurately measuring anxiety over time and across different patient populations.</li>
                <li>The GAD-7's validity has been confirmed in a wide range of populations, including adolescents, older adults, and individuals with co-occurring physical health conditions like coronary heart disease. This adaptability allows for targeted research in specific populations and clinical contexts.</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>

      {/* CTA */}
      <Container className="py-5" data-aos="zoom-in">
        <div className="section-box text-center">
          <h3 style={{color:"var(--lavender-500)"}}>Ready to Begin Your Assessment?</h3>
          <p className="small-muted">
            The assessment typically takes about 5-10 minutes (primary care version). Your responses remain private in this session.
          </p>
          <Button style={{ background: "var(--lavender-500)", border: "none" }} size="lg"
            onClick={() => navigate("/patient")}>Start Your Assessment</Button>
        </div>
      </Container>

      <footer style={{ background: "var(--lavender-300)", padding: 18, marginTop: 24, color: "#030303ff", textAlign: "center" }}>
        © {new Date().getFullYear()} GAD-7 — A validated tool for depression screening and monitoring.
      </footer>
    </div>
  );
}