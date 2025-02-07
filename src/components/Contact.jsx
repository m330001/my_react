import React from 'react'

const contactText=[
    {
        link:'https://duswlsdl789@naver.com',
        title:'duswlsdl789@naver.com',
    },
    {
        link:'https://m33001.dothome.co.kr',
        title:'m33001.dothome.co.kr',
    },


]

const Contact = () => {
    return (
        <section id='contact'>
            <div className="contact_inner">
                <h2 className='contact_title'></h2>
                <div className="contact_lines" arua-hidden='true'>
                    <span className='line'></span>
                    <span className='line'></span>
                    <span className='line'></span>
                    <span className='line'></span>
                    <span className='line'></span>
                    <span className='line'></span>
                    <span className='line'></span>
                </div>
                <div className="contact_text">
                    <div className="text">

                        {contactText.map((conteat,key)=>(
                            <div key={key}>
                                <a href={conteat.link} target='_blank' rel='noreferrer'>
                                    {conteat.title}
                                </a>
                                </div>
                        ))}
                    </div>
                </div>
                <div className="contact_lines bottom" arua-hidden='true'>
                    <span className='line'></span>
                    <span className='line'></span>
                    <span className='line'></span>
                    <span className='line'></span>
                    <span className='line'></span>
                    <span className='line'></span>
                    <span className='line'></span>
                </div>
            </div>
        </section>
    )
}

export default Contact