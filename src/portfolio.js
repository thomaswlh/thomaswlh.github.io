const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://thomaswlh.github.io/',
  title: 'TW.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Thomas Wu',
  role: 'passionate computer science student',
  description:
    'A computer science student with a passion for software development and problem-solving. Always eager to learn new technologies and contribute to innovative projects.',
  resume: '',
  social: {
    linkedin: 'https://www.linkedin.com/in/thomaswu06/',
    github: 'https://github.com/thomaswlh',
  },
}

// const projects = [
//   // projects can be added an removed
//   // if there are no projects, Projects section won't show up
//   {
//     name: 'Project 1',
//     description:
//       'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
//     stack: ['SASS', 'TypeScript', 'React'],
//     sourceCode: 'https://github.com',
//     livePreview: 'https://github.com',
//   },
//   {
//     name: 'Project 2',
//     description:
//       'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
//     stack: ['SASS', 'TypeScript', 'React'],
//     sourceCode: 'https://github.com',
//     livePreview: 'https://github.com',
//   },
//   {
//     name: 'Project 3',
//     description:
//       'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
//     stack: ['SASS', 'TypeScript', 'React'],
//     sourceCode: 'https://github.com',
//     livePreview: 'https://github.com',
//   },
// ]

const projects = [
  {
    name: 'Personal Portfolio',
    description: 'A clean and modern portfolio website built with React',
    stack: ['React', 'Material UI', 'CSS'],
    sourceCode: 'https://github.com/thomaswlh/cleanfolio-personal-website',
    livePreview: 'https://thomaswlh.github.io/',
  }
]

// const skills = [
//   // skills can be added or removed
//   // if there are no skills, Skills section won't show up
//   'HTML',
//   'CSS',
//   'JavaScript',
//   'TypeScript',
//   'React',
//   'Redux',
//   'SASS',
//   'Material UI',
//   'Git',
//   'CI/CD',
//   'Jest',
//   'Enzyme',
// ]

const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Git',
  'Material UI'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'thomaswu.wlh@gmail.com',
}

export { header, about, projects, skills, contact }
