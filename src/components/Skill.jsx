import React from 'react'
import {skillText} from "../contants";


const Skill = () => {
    return (
        <section id='skill'>
            <div className="skill_inner">
                <h2 className='skill_title'>
                    Challenge <em>나의 도전</em>
                </h2>
                <div className="skill_desc">
                    {skillText.map((skill,key)=>(
                        <div key={key}>
                            <span>{key+1}.</span>
                            <h3>{skill.title}</h3>
                            <p>
                                {skill.desc}<br/><br/>
                                {skill.desc2}
                            </p>
                        </div>   
                    ))}
                                     
                </div>
            </div>
        </section>
    )
}

export default Skill