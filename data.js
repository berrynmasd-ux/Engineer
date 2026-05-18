// data.js
const nceesWeights = {
    "Mathematics": 0.08,
    "Statics": 0.08,
    "Dynamics": 0.05,
    "Mechanics of Materials": 0.07,
    "Structural Engineering": 0.10,
    "Geotechnical Engineering": 0.10,
    // Add remaining NCEES subjects and their decimal weights
};

const flashcards = [
    // Extracted from Review2.pdf
    { id: 1, subject: "Statics", term: "Centroid", definition: "The geometric center of an area." },
    { id: 2, subject: "Geotechnical", term: "Void Ratio (e)", definition: "Volume of voids divided by volume of solids." }
];

const questionBank = [
    // Extracted from Practice.pdf
    {
        id: 101,
        subject: "Structural Engineering",
        question: "Calculate the maximum bending moment of a simply supported beam with a point load P at the center.",
        options: ["PL/2", "PL/4", "PL/8", "wL^2/8"],
        answer: "PL/4",
        explanation: "For a simply supported beam with a central point load, M_max = PL/4 at the midspan."
    }
];
