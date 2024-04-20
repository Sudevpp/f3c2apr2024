function startSportsDay() {
    console.log("Let the games begin!");

    let score = { red: 0, blue: 0, green: 0, yellow: 0 };

    OpeningCeremony(score, Race100M);
}

function OpeningCeremony(score, callback) {
    setTimeout(() => {
        console.log("Score at the beginning:", score);
        callback(score, LongJump);
    }, 1000);
}

function Race100M(score, callback) {
    setTimeout(() => {
        let colors = ["red", "blue", "green", "yellow"];
        let times = {};
        for (let color of colors) {
            times[color] = Math.floor(Math.random() * 6 + 10); // Random time between 10 to 15 seconds
        }
        console.log("Race 100M times:", times);
        let sortedColors = Object.keys(times).sort((a, b) => times[a] - times[b]);
        score[sortedColors[0]] += 50;
        score[sortedColors[1]] += 25;
        console.log("Updated score after Race 100M:", score);
        callback(score, HighJump);
    }, 3000);
}

function LongJump(score, callback) {
    setTimeout(() => {
        let color = ["red", "blue", "green", "yellow"][Math.floor(Math.random() * 4)];
        score[color] += 150;
        console.log(`Long Jump: ${color} won and gained 150 points`);
        console.log("Updated score after Long Jump:", score);
        callback(score);
    }, 2000);
}

function HighJump(score) {
    let userInput = prompt("What color secured the highest jump?");
    if (userInput) {
        let color = userInput.toLowerCase();
        if (color in score) {
            score[color] += 100;
            console.log(`High Jump: ${color} won and gained 100 points`);
            console.log("Updated score after High Jump:", score);
        } else {
            console.log("Event was cancelled");
        }
    } else {
        console.log("Event was cancelled");
    }
    AwardCeremony(score);
}

function AwardCeremony(score) {
    console.log(`Award Ceremony: ${JSON.stringify(score)}`);
    let sortedScores = Object.entries(score).sort((a, b) => b[1] - a[1]);
    console.log(`${sortedScores[0][0]} came first with ${sortedScores[0][1]} points.`);
    console.log(`${sortedScores[1][0]} came second with ${sortedScores[1][1]} points.`);
    console.log(`${sortedScores[2][0]} came third with ${sortedScores[2][1]} points.`);
}
