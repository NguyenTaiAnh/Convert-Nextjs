import { Container, Row, Col } from 'react-bootstrap'
export default function Footer() {
    return (
        <>
            <div className="bgr-footer">
                <Container>
                    <Row>
                        <Col md="12">
                            <div id="menu">
                                <ul>
                                    <li>
                                        Hotline(24/7)
                                    <a href="#">091 9751079</a></li>
                                    <li>Khiếu nại, phản hồi
                                <a href="#">091 9751079</a>
                                    </li>
                                    <li>Hợp tác với Alphaland
                                <a href="mailto:info@alphaland.com.vn" >info@alphaland.com.vn</a>
                                    </li>
                                    <li>Bộ phận kinh doanh
                                <a href="mailto:sales@alphaland.com.vn">sales@alphaland.com.vn</a>
                                    </li>
                                    <li>Chăm sóc khách hàng
                                <a href="mailto:support@alphaland.com.vn">support@alphaland.com.vn</a>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col md="12">
                            <hr style={{ border: "1px solid blue" }} />
                        </Col>

                    </Row>
                    <Row style={{ fontSize: "14px" }}>
                        <Col xs="12" md="5">
                            <img src="" alt="logo" />
                            <p>111 Trương Văn Bang P. Thạnh Mỹ Lợi, Quận 2, Tp Hồ Chí Minh</p>
                        </Col>
                        <Col xs="12" md="2">
                            <p>CÔNG TY</p>
                            <div id="info_cty">
                                <ul>
                                    <li><a href="#">Blog Alphaland</a></li>
                                    <li><a href="#">Tuyển dụng</a></li>
                                    <li><a href="#">Đội ngũ</a></li>
                                    <li><a href="#">Sàn giao dịch</a></li>
                                    <li><a href="#">Liên hệ</a></li>
                                </ul>
                            </div>
                        </Col>
                        <Col xs="12" md="2">
                            <p>DỊCH VỤ</p>
                            <div id="info_cty">
                                <ul>
                                    <li><a href="#">Vì sao chọn Alphaland</a></li>
                                    <li><a href="#">Bán và cho thuê</a></li>
                                    <li><a href="#">Mua với Alphaland</a></li>
                                    <li><a href="#">Thuê với Alphaland</a></li>
                                    <li><a href="#">Chuyên viên Alphaland</a></li>
                                </ul>
                            </div>
                        </Col>
                        <Col xs="12" md="2">
                            <p>THÔNG TIN</p>
                            <div id="info_cty">
                                <ul>
                                    <li><a href="#">Tin tức thị trường</a></li>
                                    <li><a href="#">Báo cáo và phân tích</a></li>
                                    <li><a href="#">Cẩm nang nhà đất</a></li>
                                    <li><a href="#">Trung tâm đào tạo</a></li>
                                    <li><a href="#">Hướng dẫn sử dụng</a></li>
                                </ul>
                            </div>
                        </Col>
                        <Col md="12">
                            <hr style={{ border: "1px solid blue" }} />
                        </Col>
                    </Row>
                    <Row style={{ fontSize: "14px", paddingBottom:"20px" }}>
                        <Col md="7">
                            <a href="#" className="footer-end">Nhóm phát triển alphaland</a>
                        </Col>
                        <Col md="2">
                            <a href="#" className="footer-end">Chính sách bảo mật</a>
                        </Col>
                        <Col md="2">
                            <a href="#" className="footer-end">Điều khoản sử dụng</a>
                        </Col>
                        <Col md="1">
                            <a href="#" className="footer-end">Phản hồi </a>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}