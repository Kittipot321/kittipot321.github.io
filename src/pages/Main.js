import React from 'react'
import {Container,Row,Col} from 'reactstrap';
import Banner from '../components/Banner'; 
import Footer from '../components/Footer';
import {Data} from '../data/resume';
import "./Main.css"
const Main = () => {
    document.title = "Kittipot"
    return(
        <>
        <Container>
            <Banner/>
            <br/>
            <h3>About Me!</h3>
            <hr/>
            {Data.map((data,index)=>{
                const email = "mailto:"+data.basics.email
                return(
                    <div className="text-center">
                        <p>Name : {data.basics.name}</p>
                        <p>Email : <a href={email}>{data.basics.email}</a></p>
                    </div>
                )
            })}
            {
                Data.map((data,index)=>{
                    return(
                        <div key={index}>
                            <h3>{data.headings.skills} ({data.skills[0].name})</h3>
                            <hr/>
                            <Row className="skill-font">
                                {data.skills[0].keywords.map((e,index)=>{
                                    return(
                                        <Col key={index}>
                                            <div className="font-awesome"><i className={e.pic}/></div>
                                            <div><p>{e.name}</p></div>
                                        </Col>
                                    )
                                })}
                            </Row>
                        </div>
                    )
                })
            }
        </Container>
        <Footer/>
        </>
    )
}
export default Main;