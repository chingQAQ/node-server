
const middle = exports = module.exports = {};

const greeting = (req, res, next) => {
  const entry = req.url;

  console.log('Welcome!' + ' your entrance is ' + entry);
  req.greeting = 'Welcome!' + ' your entrance is ' + entry;
  next();
};

const basicallyQuestion = (req, res, next) => {
  const user = {};
  console.log('What is your name?');

  if (req.greeting) {
    user.greeting = req.greeting;
  }

  user.answer = 'Aion';
  req.user = user;
  next();
};

middle.greeting = greeting;
middle.basicallyQuestion = basicallyQuestion;

