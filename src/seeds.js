const feathers = require('feathers/client');
const rest = require('feathers-rest/client');
const superagent = require('superagent');
const hooks = require('feathers-hooks');
const auth = require('feathers-authentication-client');

const user = {
  name: 'Mike the Misteryman',
  email: 'mike@mistery.dev',
  password: 'abcd1234'
};

const riddles = [
  {
    question: "Some try to hide, some try to cheat, but time will show, we always will meet, try as you might, to guess my name, I promise you'll know, when you I do claim.",
    answer: "death"
  },
  {
    question: "Can you find the last number in the number sequence given below? 10 : 10 : 20 : 45 : 110 : 300 : ?",
    answer: "930"
  },
  {
    question: "Mary’s mother had four children; April, May, and June were the first three. What’s the name of the 4th child?",
    answer: "mary"
  },
  {
    question: "A Japanese ship was en route in the open sea. The Japanese captain went for a shower removing his diamond ring and Rolex watch on the table. When he returned, his valuables were missing. The captain immediately called the five suspected crew members and asked each one where and what he was doing for the last 15 minutes.

The Filipino cook in a heavy overcoat said, 'I was in fridge room getting meat for cooking.'

The Indian Engineer with a torch in hand said, 'I was working on generator engine.'

The Sri Lankan seaman said, 'I was on the mast (top of the ship) correcting the flag which was upside down by mistake.'

The British radio officer said, 'I was messaging to company that we are reaching the next port in 72 hours. From now that is Wednesday morning at 10 AM.'

The British navigation officer said, 'I am on night watch, so sleeping in my cabin.'

The captain caught the liar. So who is the thief?",
    answer: "sri lankan seaman"
  },
  {
    question: "A detective who was mere days from cracking an international smuggling ring has suddenly gone missing. While inspecting his last-known location, you find a note: 710 57735 34 5508 51 7718

Currently there are 3 suspects: Bill, John, and Todd. Can you break the detective’s code and find the criminal’s name?",
    answer: "bill"
  },
  {
    question: "It was the first day of school when a young girl was found dead in the classroom. Police had identified four suspects.

The Dean claimed that he was in his office the whole day. The Maths teacher claimed that she was giving the midterm exam results to her students. The clerk claimed that he was bringing the mails. The janitor claimed that he was cleaning the toilet on the first floor.",
    answer: "the maths teacher"
  },
  {
    question: "Five children were playing kickball. One of the five broke a window. When questioned about the incident, each child made three statements of which two were true and one was false. The statements are given below.

Joe:
1. I didn’t do it.
2. Sally will tell who did it.
3. One of us is in big trouble.

Matt:
1. Joyce did it.
2. I didn’t do it.
3. I don’t even like to play kickball.

Vince:
1. I didn’t do it.
2. Joyce and I are good friends.
3. Sally doesn’t know who did it.

Joyce:
1. Matt lied when he said I broke the window.
2. I never saw Vince before today.
3. I never broke a window in my life.

Sally:
1. I saw Joyce break it.
2. I didn’t break the window.
3. I want to go home.

Who broke the window?",
    answer: "vince"
  },
  {
    question: "With the numbers 123456789, make them add up to 100. They must stay in the same order. You can use addition, subtraction, multiplication, and division. Remember, they have to stay in the same order.",
    answer: "1+2+3+4+5+6+7+8x9=100"
  },
  {
    question: "What are the next two letters in the series? D E J A F E M A A P M A J U J U _ _",
    answer: "au"
  },
  {
    question:"Three spies, suspected as double agents, speak as follows when questioned:

Albert: 'Bertie is a mole.'
Bertie: 'Cedric is a mole.'
Cedric: 'Bertie is lying.'

Assuming that moles lie, other agents tell the truth, and there is just one mole among the three, who is the mole?",
    answer: "bertie"
  },
  {
    question:"A man got killed in his office. The suspects are Edison, Maxis, Jason, Janna, Sofia, Patrick. A calendar near the man has blood, written 6, 4, 9, 10, 11. Who is the killer?",
    answer: "jason"
  },
  {
    question:"There are 2 ducks in front of 2 other ducks. There are 2 ducks behind 2 other ducks. There are 2 ducks beside 2 other ducks. How many ducks are there?
",
    answer: "4"
  },
  {
    question: "Using only addition, how can you add eight 8's to get the number 1,000?",
    answer: "888+88+8+8+8=1000"
  },
  {
    question: "A large number of people went to an party and they decided to make some fun at the bar.
The first person asks the barman for half a pint of beer.
The second person asks for a quarter pint of beer
The third person asks for one-eighth of beer and so on ...

How many pints of beer will the barman need to fulfill the people need of beer ?",
    answer: "1"

  },


]
