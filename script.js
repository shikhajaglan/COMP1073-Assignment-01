// Arrays for word options
const subjects = ["Alice", "The cat", "A dragon", "My best friend", "A wizard"];
const actions = ["jumps", "runs", "flies", "dances", "sings"];
const places = ["in the park", "on the moon", "under the sea", "at the castle", "in the forest"];
const times = ["at night", "in the morning", "during the day", "at sunrise", "under the stars"];
const adjectives = ["happily", "gracefully", "angrily", "excitedly", "quietly"];

// State to store user selections
let selectedSubject = "";
let selectedAction = "";
let selectedPlace = "";
let selectedTime = "";
let selectedAdjective = "";

// Utility function to cycle through an array
function cycleChoice(array, current) {
    const index = array.indexOf(current);
    return array[(index + 1) % array.length];
}

// Event listeners for buttons
document.getElementById("subject-btn").addEventListener("click", () => {
    selectedSubject = cycleChoice(subjects, selectedSubject || subjects[0]);
    document.getElementById("subject-display").textContent = selectedSubject;
});

document.getElementById("action-btn").addEventListener("click", () => {
    selectedAction = cycleChoice(actions, selectedAction || actions[0]);
    document.getElementById("action-display").textContent = selectedAction;
});

document.getElementById("place-btn").addEventListener("click", () => {
    selectedPlace = cycleChoice(places, selectedPlace || places[0]);
    document.getElementById("place-display").textContent = selectedPlace;
});

document.getElementById("time-btn").addEventListener("click", () => {
    selectedTime = cycleChoice(times, selectedTime || times[0]);
    document.getElementById("time-display").textContent = selectedTime;
});

document.getElementById("adjective-btn").addEventListener("click", () => {
    selectedAdjective = cycleChoice(adjectives, selectedAdjective || adjectives[0]);
    document.getElementById("adjective-display").textContent = selectedAdjective;
});

// Generate story
document.getElementById("generate-story-btn").addEventListener("click", () => {
    if (selectedSubject && selectedAction && selectedPlace && selectedTime && selectedAdjective) {
        const story = `${selectedSubject} ${selectedAction} ${selectedPlace} ${selectedTime} ${selectedAdjective}.`;
        document.getElementById("story-output").textContent = story;
    } else {
        alert("Please make a selection for all parts of the story!");
    }
});

// Generate random story
document.getElementById("random-story-btn").addEventListener("click", () => {
    const randomStory = `${subjects[Math.floor(Math.random() * subjects.length)]} ${
        actions[Math.floor(Math.random() * actions.length)]
    } ${places[Math.floor(Math.random() * places.length)]} ${
        times[Math.floor(Math.random() * times.length)]
    } ${adjectives[Math.floor(Math.random() * adjectives.length)]}.`;
    document.getElementById("story-output").textContent = randomStory;
});

// Reset selections
document.getElementById("reset-btn").addEventListener("click", () => {
    selectedSubject = selectedAction = selectedPlace = selectedTime = selectedAdjective = "";
    document.getElementById("subject-display").textContent = "[Subject]";
    document.getElementById("action-display").textContent = "[Action]";
    document.getElementById("place-display").textContent = "[Place]";
    document.getElementById("time-display").textContent = "[Time]";
    document.getElementById("adjective-display").textContent = "[Adjective]";
    document.getElementById("story-output").textContent = "Your story will appear here...";
});
