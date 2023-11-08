
const emiter = require('./eventEmit');

function getSeconds() {
  return Math.random() * (2 - 0.1) + 0.1;
}

function userLoggedIn(userId) {
  setTimeout(() => {
    const TIMESTAMP = new Date().toISOString();
    console.log(`${TIMESTAMP}: USER_${userId} logged in`);
    emiter.emit('userLoggedIn', userId);
  }, getSeconds() * 1000);
}

function userLoggedOut(userId) {
  setTimeout(() => {
    const TIMESTAMP = new Date().toISOString();
    console.log(`${TIMESTAMP}: USER_${userId} logged out`);
    emiter.emit('userLoggedOut', userId);
  }, getSeconds() * 1000);
}



for (let i = 1; i < 10; i++) {
  userLoggedIn(i);
  userLoggedOut(i);
}

