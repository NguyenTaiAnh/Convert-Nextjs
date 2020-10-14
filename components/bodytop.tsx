import { Container, Row, Col } from 'react-bootstrap'
import React, { useState,useEffect } from 'react'
interface IProps{
    detail:any,
}
interface IState{

}

export default function BodyTop (props:IProps){
    const [detail, setDatail] = useState({})

    useEffect(() => {
        console.log('Component DId mount')
        fetch('https://alphaland.com.vn/api/v1/common/nha/can-ho-vista-verde')
        .then(res => res.json())
        .then(data => {
          setDatail(data)
        })
        .catch(err => console.log('Loi roif: ', err))
        
      }, [])
    //   console.log(detail);
      
    return(
        <Container style={{ marginTop: "30px" }}>
                <Row>
                    <Col lg="6">

                        <p style={{marginBottom:"8px"}}>{detail.propertyCode} • {detail.propertyRoad}, {detail.propertyDistrict}, {detail.propertyProvince}</p>
    <h2 style={{margin:"14.4px 0"}}>{detail.propertyName}</h2>
                    </Col>

                </Row>
                <ul className="list">
                    <li style={{marginRight:"20px"}}><i className="fas fa-bed"></i> {detail.propertyBedRooms}</li>
                    <li style={{marginRight:"20px"}}><i className="fas fa-bath"></i>  {detail.propertyBathRooms}</li>
                    <li style={{marginRight:"20px"}}><i className="far fa-compass"></i>  Đông</li>
                    <li style={{marginRight:"20px"}}><i className="fas fa-vector-square"></i>  {detail.propertySquare} m²</li>
                    <li><i className="fas fa-dollar-sign"></i>  {detail.propertySellPrice}</li>
                </ul>
                <div style={{margin:"16px 0"}}>
                <span> <i className="fas fa-tags"></i> (Chưa có)</span>
                </div>
                <style jsx>
                    {`
                        .list{
                            padding:0;
                            list-style-type:none;
                            display:flex;
                        }
                    `}
                </style>
            </Container>
    )
}