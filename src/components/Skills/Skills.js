import { CircularProgressbar } from 'react-circular-progressbar';
// import 'react-circular-progressbar/dist/styles.css';
import uniqid from 'uniqid'
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/theme'
import { skills } from '../../portfolio'
import './Skills.css'


const Skills = () => {
  const [{ themeName }] = useContext(ThemeContext)
  
  if (!skills.length) return null

  return (
    <section className='section skills' id='skills'>
      <h2 className='section__title'>Skills</h2>
      <ul className='skills__list'>
        {skills.map((skill) => (
          <li key={uniqid()} className='skills__list-item btn btn--plain'>
            {skill.name}
            <CircularProgressbar
              value={skill.percentage}
              text={`${skill.percentage}%`}
              strokeWidth="15"
              styles={{
                path: {
                  stroke: themeName === 'dark' ? '#90a0d9' : '#2978b5'
                },
                trail: {
                  stroke: themeName === 'dark' ? '#2a2f4c' : '#d6d6d6'
                },
                text: {
                  fill: themeName === 'dark' ? '#90a0d9' : '#2978b5',
                  fontSize: '30px',
                  transform: 'translateY(3px)'
                }
              }}
            />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Skills
