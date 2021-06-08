import React from 'react';
import { Jumbotron,Row,Col} from 'reactstrap';
import './Banner.css';
const Banner = (props) => {
  return (
    <div>
      <Jumbotron>
        <Row>
          <Col>
            <img className="picture" src="https://scontent.fbkk2-6.fna.fbcdn.net/v/t1.6435-9/65394344_2138393142950133_322161605632589824_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeE5Cq-i9t9Jj4K8ujlLol_qVA9-2XKpp9NUD37Zcqmn01Bfs-SjmlAV9HujtNv2VFcPCnZZpBhR6mG3t3nNCGhQ&_nc_ohc=vgwdF4SjHSEAX-opQaF&_nc_ht=scontent.fbkk2-6.fna&oh=971ddb96b167985b24cf4cf2474b05d2&oe=60DA2C8D" alt="pic" />
            <h1 className="display-3">Kittipot Laorngsri</h1>
            <p className="lead text-center">King Mongkut's Institute of Technology Ladkrabang, Information Technology, Software Engineering, IT16</p>
          </Col>
        </Row>
        
        
      </Jumbotron>
    </div>
  );
};
export default Banner;