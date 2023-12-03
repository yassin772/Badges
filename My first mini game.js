<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Guess the Number</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
      margin-top: 50px;
    }
  </style>
</head>
<body>

  <h1>Guess the Number Game</h1>
  <p>Try to guess the number between 1 and 10.</p>
  <input type="number" id="userGuess" placeholder="Enter your guess">
  <button onclick="checkGuess()">Submit Guess</button>
  <p id="message"></p>

  <script>
    // Generate a random number between 1 and 10
    const secretNumber = Math.floor(Math.random() * 10) + 1;

    function checkGuess() {
      // Get the user's guess from the input field
      const userGuess = document.getElementById("userGuess").value;

      // Check if the guess is correct
      if (userGuess == secretNumber) {
        document.getElementById("message").innerHTML = "Congratulations! You guessed the correct number!";
      } else {
        document.getElementById("message").innerHTML = "Sorry, that's not the correct number. Try again!";
      }
    }
  </script>

</body>
</html>
