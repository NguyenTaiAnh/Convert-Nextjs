import React from 'react'
import { Container, Row, Col, Nav, NavItem, NavLink, Navbar, Card } from 'react-bootstrap'

interface IProps {

}

interface IState {
    data: any;
    contactData: any;
    residentialarea: any;
}
export default class BodyCenter extends React.Component<IProps, IState> {
    state: IState = {
        data: [],
        contactData: {},
        residentialarea: {},
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

    }
    render() {

        const { data, contactData, residentialarea } = this.state

        console.log('data', data);
        // console.log('contactData',contactData.contactName);
        return (
            <>
                <Container fluid className="sticky-menu">
                    <Row >
                        <Col sm="12" lg="12" md="12" style={{ padding: "0", }} >
                            <Nav className="ml-auto navbar-light bg-light" id="myHeader" >
                                <Nav.Link style={{ color: "black", fontWeight: "bold",marginLeft:"100px" }} href="#tongquan">TỔNG QUAN</Nav.Link>
                                <Nav.Link style={{ color: "black", fontWeight: "bold" }} href="#tienich">TIỆN ÍCH</Nav.Link>
                                <Nav.Link style={{ color: "black", fontWeight: "bold" }} href="#vitri">VỊ TRÍ</Nav.Link>
                                <Nav.Link style={{ color: "black", fontWeight: "bold" }} href="#nhadat">NHÀ ĐẤT LÂN CẬN</Nav.Link>
                            </Nav>
                        </Col>

                    </Row>
                </Container>
                <hr style={{marginTop:"0"}}/>

                <Container>
                    <Row>
                        <Col xs="12" md="8">
                            {/* =======================Giới thiệu============================== */}

                            <div id="tongquan">
                                <p className="titlee">Giới thiệu <span className="textt">{data.propertyName}</span></p>

                                <div contentEditable='false' dangerouslySetInnerHTML={{ __html: data.propertyDescription }}></div>

                                <hr />
                                <p className="titlee">Thông tin cơ bản <span className="textt">{data.propertyName}</span></p>
                                <Row style={{ fontSize: "14px" }}>
                                    <Col lg="6" >
                                        <div>
                                            <p className="nameInfo">P/ngủ <span className="info">{data.propertyBedRooms}</span></p>
                                            <p className="nameInfo">D/tích <span className="info">{data.propertySquare}</span></p>
                                            <p className="nameInfo">Loại chủ quyền <span className="info">{data.propertyOwnerType}</span></p>
                                            <p className="nameInfo">Ngày bắt đầu <span className="info">{data.propertySellStartedDate}</span></p>

                                        </div>
                                    </Col>
                                    <Col lg="6">
                                        <p className="nameInfo">P/tắm <span className="info">{data.propertyBathRooms}</span></p>
                                        <p className="nameInfo">Tình hình nội thất <span className="info">{data.propertyFurnitureOverview}</span></p>
                                        <p className="nameInfo">Giá <span className="info">{data.propertySellPrice}</span></p>
                                        <p className="nameInfo">Khu dân cư <span className="info">{data.propertyDistrict}</span></p>

                                    </Col>
                                </Row>
                                <hr />
                                <p className="titlee">Loại hình <span className="textt">{data.propertyName}</span></p>

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
                                <hr />
                            </div>
                            {/* =======================Tiện ích============================== */}
                            <div id="tienich" >

                                <p className="titlee">Tiện ích <span className="textt">{data.propertyName}</span></p>

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
                                <hr />
                                <p className="titlee">Nội thất <span className="textt">{data.propertyName}</span></p>

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
                                <hr />
                                <p className="titlee">Thông tin đáng chú ý <span className="textt">{data.propertyName}</span></p>

                                <Row>
                                    <Col lg="4" style={{ fontSize: "14px", fontWeight: "bold" }} >
                                        <p>ĐẶC ĐIỂM NỔI BẬT </p>
                                        <p>TÌNH HÌNH NỘI THẤT </p>
                                        <p>TỔNG QUAN VỊ TRÍ </p>
                                        <p>CỘNG ĐỒNG DÂN CƯ</p>
                                    </Col>
                                    <Col lg="8" style={{ fontSize: "14px" }}>
                                        <p >{data.propertySpecialFeature}</p>
                                        <p >{data.propertyFurnitureOverview}</p>
                                        <p >{data.propertyLocationOverview}</p>
                                        <p >{data.propertyResidentialCommunity}</p>
                                    </Col>

                                </Row>
                                <hr />
                                <p className="titlee">Hình ảnh <span className="textt">{data.propertyName}</span></p>
                                <img src={data.propertyDraftUrl} style={{width:"100%"}} alt="" />


                            </div>

                        </Col>
                        {/* -----------------------Item Right------------------------ */}
                        <Col xs="12" md="4">
                            <div className="item-right stickyy">
                                <Card>
                                <div >
                                    <Row className="top-Item">
                                        <Col xs="2" lg="2" style={{padding:"0"}} >
                                            <img src="/img/meo.jpg" alt="img" className="change-Img" />
                                        </Col>
                                        <Col xs="10" lg="10">
                                            <p className="name-Item">{contactData.contactName}</p>
                                            <p>{contactData.jobTitle}</p>
                                        </Col>
                                    </Row>
                                    
                                </div>
                                <div style={{ textAlign: "center" }}>
                                    <button className="btn_tuvan">Liên hệ tư vấn</button>
                                </div>
                                <div>
                                    <p style={{ textAlign: "center" }}>hoặc</p>
                                </div>
                                <div style={{ textAlign: "center" }}>
                                    <button className="btn_hover">Đăng ký xem nhà</button>
                                </div>
                                <div style={{ textAlign: "center" }}>
                                    <button className="btn_hover">Thương lượng giá</button>
                                </div>
                                <div style={{ textAlign: "center" }}>
                                    <button className="btn_hover">Hỏi thêm thông tin</button>
                                </div>
                                </Card>
                            </div>

                        </Col>
                    </Row>

                    <Row>
                        <Col lg="12">
                            <hr />
                            <div id="vitri">
                                <p className="titlee">Vị trí <span className="textt">{data.propertyName}</span></p>

                            </div>

                        </Col>

                    </Row>
                </Container>
                <Container fluid style={{ padding: "0", marginBottom: "10px" }}>
                    <img src="/img/ggmap.jpg" alt="hình ảnh" style={{ width: "100%", height: "600px" }} />
                </Container>
                <Container>
                    <Row>
                        <Col lg="12">
                            <div id="nhadat">
                                <p className="titlee" style={{ textAlign: "center" }}>Nhà đất lân cận</p>
                            </div>
                        </Col>
                    </Row>
                    <Row style={{ textAlign: "center" }}>
                        <Col xs="12" md="6" lg="6" style={{}}>
                            <Card style={{ width: '50%'}}>
                                <Card.Img variant="top" src="/img/img1.jpg" />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs="12" md="6" lg="6">
                            <Card style={{ width: '50%' }}>
                                <Card.Img variant="top" src="/img/img1.jpg" />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                <Container fluid>
                    <hr />
                    <p className="titlee" style={{ textAlign: "center" }}>Khu dân cư</p>
                    <Container>
                        <Row>
                            <Col lg="6" md="6">
                                <img src={residentialarea.avatarUrl} alt="" style={{ width: "100%" }} />
                            </Col>
                            <Col lg="6" md="6">
                                <a href="" className="">{residentialarea.residentialName}</a>
                                <p>{residentialarea.residentialName}</p>
                                <div contentEditable='false' dangerouslySetInnerHTML={{ __html: residentialarea.residentialDescription }}></div>

                            </Col>
                        </Row>
                    </Container>
                    <hr />
                    <p className="titlee" style={{ textAlign: "center" }}>Nhà đất tương tự</p>
                    <div className="empty">
                        <p className="empty-data">Không có dữ liệu（ミ￣ー￣ミ）</p>
                    </div>
                </Container>
            </>
        )
    }
}