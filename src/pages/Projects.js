import React,{useState,useEffect} from 'react'
import { Container,Card, CardTitle, CardText, Row, Col } from 'reactstrap';
import Footer from '../components/Footer';
import './Project.css';
const Projects = () => {
    document.title = "Kittipot | Projects"
    const [info,setInfo] = useState([])
    const [isLoading,setisLoading] = useState(true)
    useEffect(()=>{
        const fetchGithub = async () => {
            const response = await fetch('https://api.github.com/users/Kittipot321/repos')
            const data = await response.json()
            setInfo(data)
            setisLoading(false)
        }
        fetchGithub();
    },[])
    return(
        !isLoading?
        <Container>
            <h2>Projects</h2>
            <hr/>
            <Row>
            {info.map((da,index)=>{
                return(
                        <Col key={index} sm="6" style={{marginBottom:"10px"}}>
                            <Card body className="h-100">
                            <CardTitle tag="h5">{da.name}</CardTitle>
                            <CardText>{da.description?da.description:"N/A"}</CardText>
                            <CardText>Language : {da.language?da.language:"N/A"}</CardText>
                            <a href={da.html_url} className="btn btn-primary">
                                Go to Repo
                            </a>
                            </Card>
                        </Col>
                )
            })}:
            </Row>
            <Footer/>
        </Container>:
        <>
            <div className="loading-screen"/>
        </>
    )
}
export default Projects;