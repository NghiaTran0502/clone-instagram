import React from 'react';
import { useSelector } from 'react-redux';
import PhotoCart from '../components/photoCard/PhotoCart';
import { Col, Row } from 'reactstrap';
import './Style.scss'

const ExploresMain = props => {

   const explore = useSelector(state => state.explore);

   const handelClick = (id) => {
      console.log("Clicked!!" + id);
   }

   return (
      <Row className="explore">
         {explore.map((ex) => (
            <Col lg="4" md="4" sm="4" xs="4" key={ex.id} className="explore__item">
               <PhotoCart
                  key={ex.id}
                  photos={ex}
                  onClick={() => handelClick(ex.id)} />
            </Col>
         ))}
      </Row>
   )
}

ExploresMain.propTypes = {

}

export default ExploresMain
