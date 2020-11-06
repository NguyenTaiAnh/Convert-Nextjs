import { useEffect, useState } from 'react'
import { Container, Row, Col, Collapse } from 'react-bootstrap'
import style from './footer.module.scss'

export default function Footer() {

    const [common, setCommon] = useState({
        phone1: "",
        phone2: "",
        address: "",
        emailTitle1: "",
        email1: "",
        emailTitle2: "",
        email2: "",
        emailTitle3: "",
        email3: "",
        phoneTitle1: "",
        phoneTitle2: "",
        title21: "",
        link21: "",
        title22: "",
        link22: "",
        title23: "",
        link23: "",
        menuGroup1: "",
        menuGroup2: "",
        menuGroup3: "",
        copyright: "",
        title1: "",
        link1: "",
        title2: "",
        link2: "",
        title3: "",
        link3: "",
        title4: "",
        link4: "",
        title5: "",
        link5: "",
        title6: "",
        link6: "",
        title7: "",
        link7: "",
        title8: "",
        link8: "",
        title9: "",
        link9: "",
        title10: "",
        link10: "",
        title11: "",
        link11: "",
        title12: "",
        link12: "",
        title13: "",
        link13: "",
        title14: "",
        link14: "",
        title15: "",
        link15: "",

    })
    const [open, setOpen] = useState<boolean>(true)
    const [open1, setOpen1] = useState<boolean>(true)
    const [open2, setOpen2] = useState<boolean>(true)

    useEffect(() => {
        fetch("https://alphaland.com.vn/api/v1/common/companies?cacheBuster=1603444559723")
            .then(res => res.json())
            .then(data => {
                const dataCommon: any = data[0]
                setCommon(dataCommon)
            })
            .catch(err => console.log("loi: ", err)
            )

    }, [])

    function showClick() {
        console.log("test");

    }



    // console.log("data", common.phone1||'');
    // console.log("data", common.phone1);

    return (

        <>
            <div className={style['bgr-footer']}>
                <Container>
                    <Row>
                        <Col md="12">
                            <div id={style.menu}>
                                <ul>
                                    <li>
                                        {common.phoneTitle1}
                                        <a href="#">{common.phone1}</a></li>
                                    <li>{common.phoneTitle2}
                                        <a href="#">{common.phone2}</a>
                                    </li>
                                    <li>{common.emailTitle1}
                                        <a href="mailto:info@alphaland.com.vn" >{common.email1}</a>
                                    </li>
                                    <li>{common.emailTitle2}
                                        <a href="mailto:sales@alphaland.com.vn">{common.email2}</a>
                                    </li>
                                    <li>{common.emailTitle3}
                                        <a href="mailto:support@alphaland.com.vn">{common.email3}</a>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col md="12">
                            <hr style={{ border: "1px solid #29a1d4" }} />
                        </Col>

                    </Row>
                    <Row style={{ fontSize: "14px" }}>
                        <Col xs="12" md="5">
                            <img src="" alt="logo" />
                            <p>{common.address}</p>
                        </Col>

                        {/* =====================================CONG TY=================================== */}
                        {/* <Col xs="12" md="2" className={`${style['d-block']} ${style['d-md-none']}`} >
                            <p className={ `${style.name_title} ${style.hide_click} ${open ? `${style.active}` :""} `} onClick={() => setOpen(!open)}
                                aria-expanded={open}
                                aria-controls="click"
                            >{common.menuGroup1}</p>
                            <Collapse in={open}>
                                <div id={style.click} className={style.info_cty} >
                                    <ul>
                                        <li><a href={common.link1}>{common.title1}</a></li>
                                        <li><a href={common.link2}>{common.title2}</a></li>
                                        <li><a href={common.link3}>{common.title3}</a></li>
                                        <li><a href={common.link4}>{common.title4}</a></li>
                                        <li><a href={common.link5}>{common.title5}</a></li>

                                    </ul>
                                </div>
                            </Collapse>
                        </Col>
                        <Col xs="12" md="2" className={`${style['d-none']} ${style['d-md-block']}`} >
                            <p className={`${style.name_title} ${style.hide_click}`} onClick={() => setOpen(!open)}
                                aria-expanded={open}
                                aria-controls="click"
                            >{common.menuGroup1}</p>
                            <Collapse in={open}>
                                <div id={style.click} className={style.info_cty} >
                                    <ul>
                                        <li><a href={common.link1}>{common.title1}</a></li>
                                        <li><a href={common.link2}>{common.title2}</a></li>
                                        <li><a href={common.link3}>{common.title3}</a></li>
                                        <li><a href={common.link4}>{common.title4}</a></li>
                                        <li><a href={common.link5}>{common.title5}</a></li>

                                    </ul>
                                </div>
                            </Collapse>
                        </Col> */}
                        <Col xs="12" md="2" className={`${style['d-block']} ${style['d-md-none']}`}>
                            <p className={ `${style.name_title} ${style.hide_click} ${open ? `${style.active}` :""} `} onClick={() => setOpen(!open)}
                                aria-expanded={open}
                                aria-controls="click">{common.menuGroup1}</p>
                            <Collapse in={open}>

                                <div id={style.click} className={style.info_cty}>
                                    <ul>
                                    <li><a href={common.link1}>{common.title1}</a></li>
                                        <li><a href={common.link2}>{common.title2}</a></li>
                                        <li><a href={common.link3}>{common.title3}</a></li>
                                        <li><a href={common.link4}>{common.title4}</a></li>
                                        <li><a href={common.link5}>{common.title5}</a></li>


                                    </ul>
                                </div>
                            </Collapse>
                        </Col>
                        {/* -------hide----- */}
                        <Col xs="12" md="2" className={`${style['d-none']} ${style['d-md-block']}`}>
                            <p className={ style.name_title}>
                                {common.menuGroup1}
                            </p>

                                <div className={style.info_cty}>
                                    <ul>
                                    <li><a href={common.link1}>{common.title1}</a></li>
                                        <li><a href={common.link2}>{common.title2}</a></li>
                                        <li><a href={common.link3}>{common.title3}</a></li>
                                        <li><a href={common.link4}>{common.title4}</a></li>
                                        <li><a href={common.link5}>{common.title5}</a></li>


                                    </ul>
                                </div>
                        </Col>
                        {/* ======================================Dich vu============================== */}
                        <Col xs="12" md="2" className={`${style['d-block']} ${style['d-md-none']}`}>
                            <p className={ `${style.name_title} ${style.hide_click} ${open1 ? `${style.active}` :""} `} onClick={() => setOpen1(!open1)}
                                aria-expanded={open1}
                                aria-controls="click1">{common.menuGroup2}</p>
                            <Collapse in={open1}>

                                <div id={style.click1} className={style.info_cty}>
                                    <ul>
                                        <li><a href={common.link6}>{common.title6}</a></li>
                                        <li><a href={common.link7}>{common.title7}</a></li>
                                        <li><a href={common.link8}>{common.title8}</a></li>
                                        <li><a href={common.link9}>{common.title9}</a></li>
                                        <li><a href={common.link10}>{common.title10}</a></li>


                                    </ul>
                                </div>
                            </Collapse>
                        </Col>
                        {/* -------hide----- */}
                        <Col xs="12" md="2" className={`${style['d-none']} ${style['d-md-block']}`}>
                            <p className={ style.name_title}>
                                {common.menuGroup2}
                            </p>

                                <div className={style.info_cty}>
                                    <ul>
                                        <li><a href={common.link6}>{common.title6} </a></li>
                                        <li><a href={common.link7}>{common.title7}</a></li>
                                        <li><a href={common.link8}>{common.title8} </a></li>
                                        <li><a href={common.link9}>{common.title9} </a></li>
                                        <li><a href={common.link10}>{common.title10}</a></li>


                                    </ul>
                                </div>
                        </Col>
                        {/* ==========================================THONG TIN=========================== */}
                        {/* <Col xs="12" md="2" >
                            <p className={`${style.name_title} ${style.hide_click}`} onClick={() => setOpen2(!open2)}
                                aria-expanded={open2}
                                aria-controls="click2">{common.menuGroup3}</p>
                            <Collapse in={open2}>

                                <div id={style.click2} className={style.info_cty}>
                                    <ul>
                                        <li><a href={common.link11}>{common.title11}</a></li>
                                        <li><a href={common.link12}>{common.title12}</a></li>
                                        <li><a href={common.link13}>{common.title13}</a></li>
                                        <li><a href={common.link14}>{common.title14}</a></li>
                                        <li><a href={common.link15}>{common.title15}</a></li>


                                    </ul>
                                </div>
                            </Collapse>
                        </Col> */}
                        <Col xs="12" md="2" className={`${style['d-block']} ${style['d-md-none']}`}>
                            <p className={ `${style.name_title} ${style.hide_click} ${open2 ? `${style.active}` :""} `} onClick={() => setOpen2(!open2)}
                                aria-expanded={open2}
                                aria-controls="click2">{common.menuGroup3}</p>
                            <Collapse in={open2}>

                                <div id={style.click2} className={style.info_cty}>
                                    <ul>
                                    <li><a href={common.link11}>{common.title11}</a></li>
                                        <li><a href={common.link12}>{common.title12}</a></li>
                                        <li><a href={common.link13}>{common.title13}</a></li>
                                        <li><a href={common.link14}>{common.title14}</a></li>
                                        <li><a href={common.link15}>{common.title15}</a></li>


                                    </ul>
                                </div>
                            </Collapse>
                        </Col>
                        {/* -------hide----- */}
                        <Col xs="12" md="2" className={`${style['d-none']} ${style['d-md-block']}`}>
                            <p className={ style.name_title}>
                                {common.menuGroup3}
                            </p>

                                <div className={style.info_cty}>
                                    <ul>
                                    <li><a href={common.link11}>{common.title11}</a></li>
                                        <li><a href={common.link12}>{common.title12}</a></li>
                                        <li><a href={common.link13}>{common.title13}</a></li>
                                        <li><a href={common.link14}>{common.title14}</a></li>
                                        <li><a href={common.link15}>{common.title15}</a></li>


                                    </ul>
                                </div>
                        </Col>
                        {/* ================================================================================ */}
                        <Col md="12">
                            <hr style={{ border: "1px solid #29a1d4" }} />
                        </Col>
                    </Row>
                    <Row style={{ fontSize: "14px", paddingBottom: "20px" }}>
                        <Col md="7">
                            <div className={style['footer']} contentEditable='false' dangerouslySetInnerHTML={{ __html: common.copyright }}></div>

                            {/* <a href="#" className={style['footer-end']}>Nhóm phát triển alphaland</a> */}
                        </Col>
                        <Col md="2">
                            <a href={common.link21} className={style['footer-end']}>{common.title21}</a>
                        </Col>
                        <Col md="2">
                            <a href={common.link22} className={style['footer-end']}>{common.title22}</a>
                        </Col>
                        <Col md="1">
                            <a href={common.link23} className={style['footer-end']}>{common.title23}</a>
                        </Col>
                    </Row>
                </Container>

            </div>
            <style jsx>
                {`
                        p {
                        padding: 0;
                        margin: 0 !important;
                        }
                    `}
            </style>
        </>
    )
}