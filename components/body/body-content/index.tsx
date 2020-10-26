import React from 'react'
import { Container, Row, Col, Nav, NavItem, NavLink, Navbar, Card, Accordion, Button, Carousel } from 'react-bootstrap'
// import "./body"
import style from './body-content.module.scss'
import Slider from 'react-slick'

interface IProps {

}

interface IState {
    data: any;
    contactData: any;
    residentialarea: any;
    data2: any;
    activeId: any;

}
export default class BodyCenter extends React.Component<IProps, IState> {
    state: IState = {
        data: [],
        contactData: {},
        residentialarea: {},
        data2: [],
        activeId: ""
    }
    constructor(props: IProps) {
        super(props)

    }

    componentDidMount() {
        fetch('https://alphaland.com.vn/api/v1/common/nha/can-ho-vista-verde')
            .then((result) => {
                result.json().then((res) => {


                    this.setState({ data: res })
                    this.setState({ contactData: res.contact })
                    this.setState({ residentialarea: res.residentialarea })
                })
            })
            .catch(error => console.log('loi: ', error)
            )
        fetch('https://alphaland.com.vn//api/v1/nearby/properties%20?lat=10.776869&lon=106.7567264&radius=15km')
            .then((result) => {
                result.json().then((res) => {
                    this.setState({ data2: res })
                })
            })
            .catch(error => console.log('loi: ', error))
    }


    //custon accodion
    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 2
        };
        const { data2, data, contactData, residentialarea } = this.state

        // console.log('data', data2);
        const arrLocation7 = data2.filter(item => item.id === 7)
        const arrLocation5 = data2.filter(item => item.id === 5)
        // console.log('contactData',contactData.contactName);
        return (

            <>

                <Container fluid className={style['sticky-menu']}>
                    <div className={style.container_navbar}>
                    <Row >
                        <Col sm="12" lg="12" md="12" style={{ padding: "0", }} >
                            <Nav className="ml-auto navbar-light bg-light" id="myHeader" >
                                <Nav.Link style={{ color: "black", fontWeight: "bold" }} href="#tongquan">TỔNG QUAN</Nav.Link>
                                <Nav.Link style={{ color: "black", fontWeight: "bold" }} href="#tienich">TIỆN ÍCH</Nav.Link>
                                <Nav.Link style={{ color: "black", fontWeight: "bold" }} href="#vitri">VỊ TRÍ</Nav.Link>
                                <Nav.Link style={{ color: "black", fontWeight: "bold" }} href="#nhadat">NHÀ ĐẤT LÂN CẬN</Nav.Link>
                            </Nav>
                        </Col>

                    </Row>
                    </div>
                </Container>
                <hr style={{ marginTop: "0" }} />

                <Container>
                    <Row>
                        <Col xs="12" md="8">
                            {/* =======================Giới thiệu============================== */}

                            <div id="tongquan">
                                <p className={style.title}>Giới thiệu <span className={style.text}>{data.propertyName}</span></p>
                                {/* -------------------------------------------------------------------------------------- */}
                                <div className="gioi-thieu">
                                    {/* =========================================================== */}
                                    <div className="collaspe-show" contentEditable='false' dangerouslySetInnerHTML={{ __html: data.propertyDescription }}></div>
                                    {/* =========================================================== */}

                                    <a href="#show" className="hide" id="hide">Thu gọn</a>
                                    <a href="#hide" className="show" id="show">Xem thêm</a>

                                </div>
                                {/* ----------------------------Thong tin co ban--------------------------------------------- */}

                                <hr />
                                <Accordion defaultActiveKey="0" >

                                    <Row>
                                        <Col lg="10" sm="10">
                                            <p className={style.title}>Thông tin cơ bản <span className={style.text}>{data.propertyName}</span></p>

                                        </Col>
                                        <Col lg="2" sm="2" className={style['icon-click']}>
                                            <Accordion.Toggle className={style['btn-css']} as={Button} variant="link" eventKey="0">
                                                {this.state.activeId !== null
                                                    ? <i className="fas fa-angle-up" id="selector"></i>
                                                    : <i className="fas fa-angle-down" id="selector"></i>
                                                }

                                            </Accordion.Toggle>
                                        </Col>
                                    </Row>
                                    <Accordion.Collapse eventKey="0">

                                        <Row style={{ fontSize: "14px" }}>
                                            <Col lg="6" >
                                                <div>
                                                    <p className={style.nameInfo}>P/ngủ <span className={style.info}>{data.propertyBedRooms}</span></p>
                                                    <p className={style.nameInfo}>D/tích <span className={style.info}>{data.propertySquare}</span></p>
                                                    <p className={style.nameInfo}>Loại chủ quyền <span className={style.info}>{data.propertyOwnerType}</span></p>
                                                    <p className={style.nameInfo}>Ngày bắt đầu <span className={style.info}>{data.propertySellStartedDate}</span></p>

                                                </div>
                                            </Col>
                                            <Col lg="6">
                                                <p className={style.nameInfo}>P/tắm <span className={style.info}>{data.propertyBathRooms}</span></p>
                                                <p className={style.nameInfo}>Tình hình nội thất <span className={style.info}>{data.propertyFurnitureOverview}</span></p>
                                                <p className={style.nameInfo}>Giá <span className={style.info}>{data.propertySellPrice}</span></p>
                                                <p className={style.nameInfo}>Khu dân cư <span className={style.info}>{data.propertyDistrict}</span></p>

                                            </Col>
                                        </Row>
                                    </Accordion.Collapse>

                                </Accordion>

                                <hr />
                                {/* --------------------------Loại hình-------------------- */}
                                <Accordion defaultActiveKey="0">

                                    <Row>
                                        <Col lg="10" sm="10">
                                            <p className={style.title}>Loại hình <span className={style.text}>{data.propertyName}</span></p>

                                        </Col>
                                        <Col lg="2" sm="2" className={style['icon-click']}>
                                            <Accordion.Toggle className={style['btn-css']} as={Button} variant="link" eventKey="0">
                                                {this.state.activeId !== null
                                                    ? <i className="fas fa-angle-up" id="selector"></i>
                                                    : <i className="fas fa-angle-down" id="selector"></i>
                                                }
                                            </Accordion.Toggle>
                                        </Col>
                                    </Row>
                                    <Accordion.Collapse eventKey="0">

                                        <Row style={{ fontSize: "14px" }}>

                                            <Col xs="6" md="4">
                                                <p>Căn hộ</p>
                                            </Col>
                                            <Col xs="6" md="4">
                                                <p>Văn phòng</p>
                                            </Col>
                                            <Col xs="6" md="4">
                                                <p>Đất nền</p>
                                            </Col>
                                            <Col xs="6" md="4">
                                                <p>Khác</p>
                                            </Col>
                                            <Col xs="6" md="4">
                                                <p>Officetel</p>
                                            </Col>
                                            <Col xs="6" md="4">
                                                <p>Mặt bằng</p>
                                            </Col>
                                            <Col xs="6" md="4">
                                                <p>Biệt thự</p>
                                            </Col>
                                            <Col xs="6" md="4">
                                                <p>Nhà phố</p>
                                            </Col>
                                            <Col xs="6" md="4">
                                                <p>ShopHouse</p>
                                            </Col>
                                            <Col xs="6" md="4">
                                                <p>Mặt bằng</p>
                                            </Col>
                                        </Row>
                                    </Accordion.Collapse>
                                </Accordion>

                                <hr />

                            </div>

                            {/* =======================Tiện ích============================== */}
                            <div id="tienich" >
                                <Accordion defaultActiveKey="0">

                                    <Row>
                                        <Col lg="10" sm="10">
                                            <p className={style.title}>Tiện ích <span className={style.text}>{data.propertyName}</span></p>

                                        </Col>
                                        <Col lg="2" sm="2" className={style['icon-click']}>
                                            <Accordion.Toggle className={style['btn-css']} as={Button} variant="link" eventKey="0">
                                                {this.state.activeId !== null
                                                    ? <i className="fas fa-angle-up" id="selector"></i>
                                                    : <i className="fas fa-angle-down" id="selector"></i>
                                                }
                                            </Accordion.Toggle>
                                        </Col>
                                    </Row>
                                    <Accordion.Collapse eventKey="0">
                                        <Row style={{ fontSize: "14px" }}>
                                            <Col xs="6" md="4">
                                                <p>Internet</p></Col>
                                            <Col xs="6" md="4">
                                                <p>Thang máy</p></Col>
                                            <Col xs="6" md="4">
                                                <p>Phòng làm việc</p></Col>
                                            <Col xs="6" md="4">
                                                <p>Ban công</p></Col>
                                            <Col xs="6" md="4">
                                                <p>Khu vui chơi</p></Col>
                                            <Col xs="6" md="4">
                                                <p>Khu vui chơi</p></Col>
                                            <Col xs="6" md="4">
                                                <p>Khu vui chơi</p></Col>
                                            <Col xs="6" md="4">
                                                <p>Khu vui chơi</p></Col>
                                            <Col xs="6" md="4">
                                                <p>Khu vui chơi</p></Col>
                                            <Col xs="6" md="4">
                                                <p>Khu vui chơi</p></Col>
                                            <Col xs="6" md="4">
                                                <p>Khu vui chơi</p></Col>
                                            <Col xs="6" md="4">
                                                <p>Khu vui chơi</p></Col>
                                            <Col xs="6" md="4">
                                                <p>Khu vui chơi</p></Col>
                                        </Row>
                                    </Accordion.Collapse>
                                </Accordion>
                                <hr />
                                {/* -------------------------Noi that ------------- */}
                                <Accordion defaultActiveKey="0">
                                    <Row>
                                        <Col lg="10" sm="10">
                                            <p className={style.title}>Nội thất <span className={style.text}>{data.propertyName}</span></p>

                                        </Col>
                                        <Col lg="2" sm="2" className={style['icon-click']}>
                                            <Accordion.Toggle className={style['btn-css']} as={Button} variant="link" eventKey="0">
                                                {this.state.activeId !== null
                                                    ? <i className="fas fa-angle-up" id="selector"></i>
                                                    : <i className="fas fa-angle-down" id="selector"></i>
                                                }
                                            </Accordion.Toggle>
                                        </Col>
                                    </Row>
                                    <Accordion.Collapse eventKey="0">
                                        <Row style={{ fontSize: "14px" }}>
                                            <Col xs="6" md="4">
                                                <p>Ghế sô pha</p></Col>
                                            <Col xs="6" md="4">
                                                <p>Tủ bếp</p></Col>
                                            <Col xs="6" md="4">
                                                <p>Bàn trang điểm</p></Col>
                                            <Col xs="6" md="4">
                                                <p>Máy giặt</p></Col>
                                            <Col xs="6" md="4">
                                                <p>Lò vi sóng</p></Col>
                                            <Col xs="6" md="4">
                                                <p>Lò sưởi</p>
                                            </Col>
                                            <Col xs="6" md="4">
                                                <p>Ghế sô pha</p></Col>
                                            <Col xs="6" md="4">
                                                <p>Tủ bếp</p></Col>
                                            <Col xs="6" md="4">
                                                <p>Bàn trang điểm</p></Col>
                                            <Col xs="6" md="4">
                                                <p>Máy giặt</p></Col>
                                            <Col xs="6" md="4">
                                                <p>Lò vi sóng</p></Col>
                                            <Col xs="6" md="4">
                                                <p>Lò sưởi</p>
                                            </Col>
                                            <Col xs="6" md="4">
                                                <p>Ghế sô pha</p></Col>
                                            <Col xs="6" md="4">
                                                <p>Tủ bếp</p></Col>
                                            <Col xs="6" md="4">
                                                <p>Bàn trang điểm</p></Col>
                                            <Col xs="6" md="4">
                                                <p>Máy giặt</p></Col>
                                            <Col xs="6" md="4">
                                                <p>Lò vi sóng</p></Col>
                                            <Col xs="6" md="4">
                                                <p>Lò sưởi</p>
                                            </Col>

                                        </Row>
                                    </Accordion.Collapse>
                                </Accordion>
                                <hr />
                                {/* ----------------------Thong tin dang chu y------------- */}
                                <Accordion defaultActiveKey="0">
                                    <Row>
                                        <Col lg="10" sm="10">
                                            <p className={style.title}>Thông tin đáng chú ý <span className={style.text}>{data.propertyName}</span></p>
                                        </Col>
                                        <Col lg="2" sm="2" className={style['icon-click']}>
                                            <Accordion.Toggle className={style['btn-css']} as={Button} variant="link" eventKey="0">
                                                {this.state.activeId !== null
                                                    ? <i className="fas fa-angle-up" id="selector"></i>
                                                    : <i className="fas fa-angle-down" id="selector"></i>
                                                }
                                            </Accordion.Toggle>
                                        </Col>
                                    </Row>
                                    <Accordion.Collapse eventKey="0">
                                        <Row>
                                            <Col lg="4" className={style['note-info']} >
                                                <p>ĐẶC ĐIỂM NỔI BẬT </p>
                                            </Col>
                                            <Col lg="8" style={{ fontSize: "14px" }}>
                                                <p >{data.propertySpecialFeature}</p>
                                            </Col>
                                            {/* --------------------------------- */}
                                            <Col lg="4" className={style['note-info']} >
                                                <p>TÌNH HÌNH NỘI THẤT </p>
                                            </Col>
                                            <Col lg="8" style={{ fontSize: "14px" }}>
                                                <p >{data.propertyFurnitureOverview}</p>
                                            </Col>
                                            {/* --------------------------------- */}
                                            <Col lg="4" className={style['note-info']} >
                                                <p>TỔNG QUAN VỊ TRÍ </p>
                                            </Col>
                                            <Col lg="8" style={{ fontSize: "14px" }}>
                                                <p >{data.propertyLocationOverview}</p>
                                            </Col>
                                            {/* --------------------------------- */}

                                            <Col lg="4" className={style['note-info']} >
                                                <p>CỘNG ĐỒNG DÂN CƯ </p>
                                            </Col>
                                            <Col lg="8" style={{ fontSize: "14px" }}>
                                                <p >{data.propertyResidentialCommunity}</p>
                                            </Col>
                                            {/* --------------------------------- */}

                                        </Row>
                                    </Accordion.Collapse>
                                </Accordion>
                                <hr />
                                <Accordion defaultActiveKey="0">
                                    <Row>
                                        <Col lg="10" sm="10">
                                            <p className={style.title}>Hình ảnh <span className={style.text}>{data.propertyName}</span></p>
                                        </Col>
                                        <Col lg="2" sm="2" className={style['icon-click']}>
                                            <Accordion.Toggle className={style['btn-css']} as={Button} variant="link" eventKey="0">
                                                {this.state.activeId !== null
                                                    ? <i className="fas fa-angle-up" id="selector"></i>
                                                    : <i className="fas fa-angle-down" id="selector"></i>
                                                }
                                            </Accordion.Toggle>
                                        </Col>
                                    </Row>
                                    <Accordion.Collapse eventKey="0">
                                        <img src={data.propertyDraftUrl} style={{ width: "100%" }} alt="" />
                                    </Accordion.Collapse>
                                </Accordion>
                            </div>

                        </Col>
                        {/* -----------------------Item Right------------------------ */}
                        <Col xs="12" md="4">
                            {/* use 2 in 1 */}
                            <div className={`${style["item-right"]} ${style.stickyy}`}>
                                <Card>
                                    <div >
                                        <Row className={style['top-item']}>
                                            <Col xs="2" lg="2" style={{ padding: "0" }} >
                                                <img src="/img/meo.jpg" alt="img" className={style['change-img']} />
                                            </Col>
                                            <Col xs="10" lg="10">
                                                <p className={style['name-item']}>{contactData.contactName}</p>
                                                <p>{contactData.jobTitle}</p>
                                            </Col>
                                        </Row>

                                    </div>
                                    <div style={{ textAlign: "center" }}>
                                        <button className={style.btn_tuvan}>Liên hệ tư vấn</button>
                                    </div>
                                    <div>
                                        <p style={{ textAlign: "center" }} className={style.divider}><span>hoặc</span> </p>
                                    </div>
                                    <div style={{ textAlign: "center" }}>
                                        <button className={style.btn_hover}>Đăng ký xem nhà</button>
                                    </div>
                                    <div style={{ textAlign: "center" }}>
                                        <button className={style.btn_hover}>Thương lượng giá</button>
                                    </div>
                                    <div style={{ textAlign: "center" }}>
                                        <button className={style.btn_hover}>Hỏi thêm thông tin</button>
                                    </div>
                                </Card>
                            </div>

                        </Col>
                    </Row>
                    {/* ------------------------------------Vi tri---------------------------------- */}
                    <Row>
                        <Col lg="12">
                            <hr />
                            <div id="vitri">
                                <p className={style.title}>Vị trí <span className={style.text}>{data.propertyName}</span></p>

                            </div>

                        </Col>

                    </Row>
                </Container>
                <Container fluid style={{ padding: "0", marginBottom: "10px" }}>
                    <img src="/img/ggmap.jpg" alt="hình ảnh" style={{ width: "100%", height: "600px" }} />
                </Container>


                {/* ==========================================Nha Dat Lan Can===================================== */}
                <Container>
                    <Row>
                        <Col lg="12">
                            <div id="nhadat">
                                <p className={style.title} style={{ textAlign: "center" }}>Nhà đất lân cận</p>
                            </div>
                        </Col>
                    </Row>
                    {/* ======================================================================================== */}
                    <Slider {...settings}>
                        
                        <div className={style.edit_card}>
                        {arrLocation7.map((item, index) => (
                            <Card key={index} >
                                <Card.Img variant="top" src="/img/img1.jpg" />
                                <Card.Body>
                                    <Card.Text>
                                        <p className={style.hide_paragraph}>
                                            {item.propertyCode} • <a>{item.propertyName}</a> • <a>{item.propertyDistrict}</a> • <a>{item.propertyRoad}</a>
                                        </p></Card.Text>
                                    <Card.Title style={{fontSize:"15px",fontWeight:"bold",height:"10vh"}}>{item.propertyName} </Card.Title>
                                    <hr/>
                                    <ul className={style.list}>
                                        <li style={{ marginRight: "20px" }}><i className="fas fa-bed"></i> {item.propertyBedRooms}</li>
                                        <li style={{ marginRight: "20px" }}><i className="fas fa-bath"></i>  {item.propertyBathRooms}</li>
                                        <li style={{ marginRight: "20px" }}><i className="fas fa-vector-square"></i>  {item.propertySquare} m²</li>

                                    </ul>
                                </Card.Body>
                            </Card>
                        ))}
                        </div>
                        <div className={style.edit_card}>
                        {arrLocation5.map((item, index) => (
                            <Card key={index}>
                                <Card.Img variant="top" src="/img/img1.jpg" />
                                <Card.Body>
                                    <Card.Text>
                                        <p className={style.hide_paragraph}>
                                            {item.propertyCode} • <a>{item.placeName}</a> • <a>{item.propertyDistrict}</a>
                                        </p></Card.Text>
                                    <Card.Title style={{fontSize:"15px",fontWeight:"bold",height:"10vh"}}>{item.propertyName} </Card.Title>
                                    <hr/>
                                    <ul className={style.list}>
                                        <li style={{ marginRight: "20px" }}><i className="fas fa-bed"></i> {item.propertyBedRooms}</li>
                                        <li style={{ marginRight: "20px" }}><i className="fas fa-bath"></i>  {item.propertyBathRooms}</li>
                                        <li style={{ marginRight: "20px" }}><i className="fas fa-vector-square"></i>  {item.propertySquare} m²</li>

                                    </ul>
                                </Card.Body>
                            </Card>
                        ))}
                        </div>
                    </Slider>





                    {/* ======================================================================================== */}

                    {/* <Row style={{ textAlign: "center" }}>
                        <Col lg="6" md="6">
                            {arrLocation7.map((item, index) => (
                                <Card key={index} style={{ width: '50%', height: "100%" }}>
                                    <Card.Img variant="top" src="/img/img1.jpg" />
                                    <Card.Body>
                                        <Card.Text>
                                            <p>
                                                {item.propertyCode} • <a>{item.propertyName}</a> • <a>{item.propertyDistrict}</a> • <a>{item.propertyRoad}</a>
                                            </p></Card.Text>
                                        <Card.Title>{item.propertyName} </Card.Title>
                                        <ul className={style.list}>
                                            <li style={{ marginRight: "20px" }}><i className="fas fa-bed"></i> {item.propertyBedRooms}</li>
                                            <li style={{ marginRight: "20px" }}><i className="fas fa-bath"></i>  {item.propertyBathRooms}</li>
                                            <li style={{ marginRight: "20px" }}><i className="fas fa-vector-square"></i>  {item.propertySquare} m²</li>

                                        </ul>
                                    </Card.Body>
                                </Card>
                            ))}
                        </Col>
                        <Col lg="6" md="6">
                            {arrLocation5.map((item, index) => (
                                <Card key={index} style={{ width: '50%', height: "100%" }}>
                                    <Card.Img variant="top" src="/img/img1.jpg" />
                                    <Card.Body>
                                        <Card.Text>
                                            <p>
                                                {item.propertyCode} • <a>{item.placeName}</a> • <a>{item.propertyDistrict}</a>
                                            </p></Card.Text>
                                        <Card.Title>{item.propertyName} </Card.Title>
                                        <ul className={style.list}>
                                            <li style={{ marginRight: "20px" }}><i className="fas fa-bed"></i> {item.propertyBedRooms}</li>
                                            <li style={{ marginRight: "20px" }}><i className="fas fa-bath"></i>  {item.propertyBathRooms}</li>
                                            <li style={{ marginRight: "20px" }}><i className="fas fa-vector-square"></i>  {item.propertySquare} m²</li>

                                        </ul>
                                    </Card.Body>
                                </Card>
                            ))}

                        </Col>
                    </Row> */}
                </Container>
                <Container fluid>
                    <hr />
                    {/* ==========================================Khu dan cu======================================= */}
                    <p className={style.title} style={{ textAlign: "center" }}>Khu dân cư</p>
                    <Container>
                        <Row>
                            <Col lg="6" md="6">
                                <img src={residentialarea.avatarUrl} alt="" style={{ width: "100%" }} />
                            </Col>
                            <Col lg="6" md="6">
                                <a href="" className={style.title_dancu}>{residentialarea.residentialName}</a>
                                <p style={{fontSize:"13px",fontWeight:"bold"}}>{residentialarea.residentialName}</p>
                                <div contentEditable='false' dangerouslySetInnerHTML={{ __html: residentialarea.residentialDescription }}></div>

                            </Col>
                        </Row>
                    </Container>
                    <hr />
                    <p className={style.title} style={{ textAlign: "center" }}>Nhà đất tương tự</p>
                    <div className={style.empty}>
                        <p className={style['empty-data']}>Không có dữ liệu（ミ￣ー￣ミ）</p>
                    </div>
                </Container>
                <style jsx>{
                    `
                    a{
                        text-decoration: none !important;
                    }
                    p{
                        padding: 0;
                        margin: 0 !important;
                      }
                    `
                }

                </style>
            </>
        )
    }
}