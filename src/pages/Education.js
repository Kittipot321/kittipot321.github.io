import React from 'react'
import {Data} from '../data/resume';
import Footer from '../components/Footer';
const Education = () => {
    document.title = "Kittipot | Education"
    return(
        <>
        <div className="container">
            {
                Data.map((data,index)=>{
                    return(
                        <div>
                            <h2 key={index}>{data.headings.education}</h2>
                            <hr/>
                            {
                                data.education.map((edu,index)=>{
                                    return(
                                        <ul>
                                            <li>{edu.institution}</li>
                                            <li>Degree : {edu.studyType}</li>
                                            <li>GPA : {edu.gpa}</li>
                                            <li>{edu.startDate} - {edu.endDate}</li>
                                        </ul>
                                    )
                                })
                            }
                        </div>
                    )
                })
            }
        </div>
        <Footer/>
        </>
    )
}
export default Education;