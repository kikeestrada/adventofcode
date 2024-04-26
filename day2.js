// Function to process the input and split it into games and their respective details
function parseInput(input) {
    const games = input.split('\n').map(line => {
        const [idPart, data] = line.split(': ');
        const id = parseInt(idPart.split(' ')[1], 10);
        const extracts = data.split('; ').map(extract => {
            const counts = { red: 0, green: 0, blue: 0 };
            extract.split(', ').forEach(item => {
                const [count, color] = item.split(' ');
                counts[color] += parseInt(count, 10);
            });
            return counts;
        });
        return { id, extracts };
    });
    return games;
}

// Function to determine if a game is possible with the given cube limits
function isGamePossible(extracts, maxRed, maxGreen, maxBlue) {
    return extracts.every(extract => {
        return extract.red <= maxRed && extract.green <= maxGreen && extract.blue <= maxBlue;
    });
}

// Main function to determine which games are possible and calculate the sum of their IDs
function determinePossibleGames(input) {
    const games = parseInput(input);
    const maxRed = 12, maxGreen = 13, maxBlue = 14;
    let sumOfIds = 0;

    games.forEach(game => {
        if (isGamePossible(game.extracts, maxRed, maxGreen, maxBlue)) {
            sumOfIds += game.id;
        }
    });

    return sumOfIds;
}

// Example input
const input = `Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green`;

console.log(determinePossibleGames(input));  // Expected output: 8
