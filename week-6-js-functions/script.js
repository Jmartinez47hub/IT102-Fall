//Creates the function score.
function assignedScore(score) {
    // Check if the score is outside the valid 0-100 range first.
    if (score < 0 || score > 100) {
        return "Please enter a score between 0 and 100.";
    } 
    // Check if you score falls into a A+ grade range 95 or higher)
    else if (score >= 95){
        return "You scored " + score + ". You earned an A+ "
    }
    // Check if the score falls into the A grade range (90 or higher)
    else if (score >= 90) {
        return "You scored " + score + ". You earned an A!";
    } 
    //Checks if score falls into a B+ grade range (85 or higher)
    else if (score >=85){
        return "You scored " + ". You earned a B+ "
    }
    // Check if the score falls into the B grade range (80 or higher)
    else if (score >= 80) {
        return "You scored " + score + ". You earned a B!";
    } 
    // Check if the score falls into the C grade range (70 or higher)
    else if (score >= 70) {
        return "You scored " + score + ". You earned a C!";
    } 
    // Check if the score falls into the D grade range (60 or higher)
    else if (score >= 60) {
        return "You scored " + score + ". You earned a D!";
    } 
    // If none of the above conditions are met, the score is between 0 and 59 (F grade)
    else {
        return "You scored " + score + ". You earned an F.";
    }
}

// Call the function with a valid test score (swap with 105 or -5 to test validation)
alert(assignedScore(92));