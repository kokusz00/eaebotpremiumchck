async function checkPremium() {
  const username = document.getElementById('usernameInput').value;
  const responseBox = document.getElementById('result');

  const response = await fetch('users.json');
  const users = await response.json();

  if (users[username]) {
    responseBox.innerText = `You have Premium! ${users[username]}`;
  } else {
    responseBox.innerText = 'You do not have Premium access to the EAE Bot.';
  }
}
