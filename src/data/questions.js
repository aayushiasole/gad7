// ----------------- GAD-7 Questions -----------------
export const gad7Questions = [
  { id: 1, text: "Feeling nervous, anxious, or on edge", category: "GAD7" },
  { id: 2, text: "Not being able to stop or control worrying", category: "GAD7" },
  { id: 3, text: "Worrying too much about different things", category: "GAD7" },
  { id: 4, text: "Trouble relaxing", category: "GAD7" },
  { id: 5, text: "Being so restless that it is hard to sit still", category: "GAD7" },
  { id: 6, text: "Becoming easily annoyed or irritable", category: "GAD7" },
  { id: 7, text: "Feeling afraid, as if something awful might happen", category: "GAD7" },
];

// ----------------- GAD-7 Rating Options -----------------
export const gad7RatingOptions = [
  { label: "Not at all", value: 0 },
  { label: "Several days", value: 1 },
  { label: "More than half the days", value: 2 },
  { label: "Nearly every day", value: 3 },
];

// ----------------- GAD-7 Scoring Rules -----------------
export const gad7ScoringRules = {
  severity: [
    { range: [0, 4], label: "Minimal anxiety" },
    { range: [5, 9], label: "Mild anxiety" },
    { range: [10, 14], label: "Moderate anxiety" },
    { range: [15, 21], label: "Severe anxiety" },
  ],
};
