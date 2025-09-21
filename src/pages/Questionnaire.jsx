// src/pages/GAD7Questionnaire.jsx
import React, { useState } from "react";
import { Container, Card, Form, Button, ProgressBar } from "react-bootstrap";
import { gad7Questions, gad7RatingOptions } from "../data/questions";  // ✅ adjust path
import { useNavigate, useLocation } from "react-router-dom";

export default function GAD7Questionnaire() {
  const [answers, setAnswers] = useState({});
  const [page, setPage] = useState(0);
  const navigate = useNavigate();
  const { state } = useLocation();
  const patient = state?.patient;

  const questionsPerPage = 3; // GAD-7 is short, you can show 3 per page
  const totalPages = Math.ceil(gad7Questions.length / questionsPerPage);

  const startIndex = page * questionsPerPage;
  const pageQuestions = gad7Questions.slice(startIndex, startIndex + questionsPerPage);

  const handleAnswer = (id, value) => {
    setAnswers(prev => ({ ...prev, [id]: value }));
  };

  const handleNext = () => {
    if (page < totalPages - 1) {
      setPage(page + 1);
    } else {
      // ✅ Save GAD-7 answers separately
      sessionStorage.setItem("gad7Report", JSON.stringify({ answers, patient }));
      navigate("/report", { state: { answers, patient } });
    }
  };

  const progress = (Object.keys(answers).length / gad7Questions.length) * 100;

  return (
    <Container className="py-4">
      <h2 className="mb-3">GAD-7 Anxiety Questionnaire</h2>
      <ProgressBar now={progress} label={`${Math.round(progress)}%`} className="mb-4" />

      {pageQuestions.map(q => (
        <Card key={q.id} className="mb-3 question-card">
          <Card.Body>
            <Card.Title className="mb-3">{q.text}</Card.Title>
            <Form>
              {gad7RatingOptions.map(opt => (
                <div key={opt.value} className="rating-pill form-check form-check-inline">
                  <Form.Check
                    type="radio"
                    id={`q-${q.id}-${opt.value}`}
                    name={`q-${q.id}`}
                    label={opt.label}
                    value={opt.value}
                    checked={answers[q.id] === opt.value}
                    onChange={() => handleAnswer(q.id, opt.value)}
                  />
                </div>
              ))}
            </Form>
          </Card.Body>
        </Card>
      ))}

      <div className="d-flex justify-content-end">
        <Button onClick={handleNext} variant="primary">
          {page === totalPages - 1 ? "Finish" : "Next"}
        </Button>
      </div>
    </Container>
  );
}
