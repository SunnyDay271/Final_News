
import {Container, Row, Col} from "react-bootstrap"
import { Link } from "react-router-dom"

const FooterComponent = () => {
  return (
    <div className="footer py-5">
      <Container>
        <Row className="d-flex justify-content-between">
          <Col lg="5">
          <h3 className="fw-bold">Ground Zero News</h3>
          <p className="desc">Tempat Baca Berita Olahraga Bidang Bela Diri Yang Terpercaya.<br />Walau Isinya Lorem Ipsum dolor sit amet</p>
          <div className="no mb-1 mt-4">
            <Link className="text-decoration-none">
            <i className="fa-brands fa-whatsapp"></i>
            <p className="m-0">+62 123.4567.8912</p>
            </Link>
          </div>
          <div className="mail">
            <Link className="text-decoration-none">
            <i className="fa-regular fa-envelope"></i>
            <p className="m-0">person-email@gmail.com</p>
            </Link>
          </div>
          </Col>
          <Col className="d-flex flex-column col-lg-2 col mt-lg-0 mt-5">
            <h5 className="fw-bold">Menu</h5>
            <Link to="">Home</Link>
            <Link to="news">News</Link>
            <Link to="detail">Detail</Link>
            <Link to="faq">FAQ</Link>
          </Col>
          <Col lg="4" className="mt-lg-0 mt-5">
          <h5 className="fw-bold mb-3">Subscribe Kalo Mau</h5>
          <div className="Subscribes">
            <input type="text" placeholder="Subscribe..." />
            <button className="btn btn-outline-danger rounded-end rounded-0">Subscribe</button>
          </div>
          <div className="Social mt-3">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-youtube"></i>
            <i className="fa-brands fa-instagram"></i>
          </div>
          </Col>
        </Row>
        <Row>
          <Col>
          <p className="fw-bold text-center">Proses Pengerjaan <span /> Purwa 60% <span/> Nazriel 36% <span /> Radith 4%</p>
          <p className="text-center px-md-0 px-3">&copy; Copyright {new Date().getFullYear()} by <span className="fw-bold">NPR</span>, All Right Reserved</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default FooterComponent
