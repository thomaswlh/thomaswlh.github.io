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
            {skill.link ? (
              <a href={skill.link} target="_blank" rel="noopener noreferrer" className="skills__link-wrapper">
                {skill.name}
              </a>
            ) : (
              <>{skill.name}</>
            )}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Skills
