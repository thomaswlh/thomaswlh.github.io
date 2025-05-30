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
    "I'm a passionate Computer Science student 👨‍💻 with a keen interest in Cyber Security 🔒 and AI 🤖. I love contributing to open source 🌐 and building meaningful projects that leverage new technologies to help society . When I'm not coding, I enjoy reading 📚, learning about Korean culture 🇰🇷 , and various types of sports . Feel free to connect 🤝 or check out my projects!",
  resume: '',
  social: {
    linkedin: 'https://www.linkedin.com/in/thomaswu06/',
    github: 'https://github.com/thomaswlh',
  },
}


const projects = [
  {
    name: 'Personal Portfolio',
    description: 'A clean and modern portfolio website built with React',
    stack: ['React', 'Material UI', 'CSS'],
    sourceCode: 'https://github.com/thomaswlh/cleanfolio-personal-website',
    livePreview: 'https://thomaswlh.github.io/',
  },
  {
    name: 'um-bus-mcp',
    description: 'A mcp server for accessing the UM campus loop bus schedule & info',
    stack: ['Python', 'MCP'],
    sourceCode: 'https://github.com/thomaswlh/um-bus-mcp',
  }
]


const skills = [
  { name: 'Python', percentage: 75, link: 'https://www.python.org/' },
  { name: 'MCP', percentage: 70, link: 'https://modelcontextprotocol.io/introduction' },
  { name: 'n8n', percentage: 60, link: 'https://n8n.io/' },
  { name: 'Prompt Engineering', percentage: 80, link: 'https://www.promptingguide.ai/' },
  { name: 'Git', percentage: 70, link: 'https://git-scm.com/' },
  { name: 'SPSS', percentage: 60, link: 'https://www.ibm.com/spss'}
]

// Sort skills in descending order by percentage
skills.sort((a, b) => b.percentage - a.percentage)

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'thomaswu.wlh@gmail.com',
}

export { header, about, projects, skills, contact }
