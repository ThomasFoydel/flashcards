const testCardData = [
  {
    subjectName: 'react',
    cards: [
      {
        question: 'Why can’t browsers read JSX?',
        answer:
          'Browsers can only read JavaScript. JSX is not a regular JavaScript, and must be translated into JavaScript with tools like babel.',
        subject: 'react'
      },
      {
        question: 'Why is React so great?',
        answer:
          'It is declarative and easy to use, virtual DOM makes it fast, has wonderful dev tools, and is SEO friendly.',
        subject: 'react'
      },

      {
        question: `Explain the purpose of render() in React`,
        answer:
          'Each React component must have a render(). It returns a single React element which is the representation of the native DOM component. If more than one HTML element needs to be rendered, then they must be grouped together inside one enclosing tag (such as <div>) This function must be kept pure i.e., it must return the same result each time it is invoked.',
        subject: 'react'
      }
    ]
  },
  {
    subjectName: 'biology',
    cards: [
      {
        question: `What is 'white coat hypertension' ?`,
        answer:
          'Sometimes a consistently high blood pressure is recorded in the doctor’s office (>140/90) whereas normal values are recorded at home (<130/80). This situation, which is known as ¨white coat hypertension¨ or more correctly ¨isolated office hypertension¨ is not as dangerous as true hypertension.',
        subject: 'biology'
      },
      {
        question: `When the osmotic pressure of the blood is elevated above normal, water would shift from the _____ into the ______`,
        answer: 'interstitial compartment, blood ',
        subject: 'biology'
      },
      {
        question: `What would a deficit of plasma proteins likely cause?`,
        answer: 'Decreased osmotic pressure',
        subject: 'biology'
      }
    ]
  },
  {
    subjectName: 'math',
    cards: [
      { question: '|- 2 x + 2| - 3 = -3', answer: 'x = 1', subject: 'math' },
      {
        question: '-5 | -x + 2 | + 8 = -12',
        answer: '-2 , 6',
        subject: 'math'
      },
      {
        question: '3 | -9 x - 7 | - 2 = 13',
        answer: '-4/3 , -2/9',
        subject: 'math'
      }
    ]
  }
];

export default testCardData;
