import {Container, Row, Col} from "react-bootstrap"
import {semuaKelas} from "../data/index"
import { useNavigate, useParams } from 'react-router-dom'


import FaqComponent from "../components/FaqComponent"

const NewsPage = () => {
  let navigate = useNavigate();

  return (
    <div className="news-page">
      <div className="news min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className="fw-bold text-center animate__animated animate__backInUp animate__delay-1s">Semua Berita</h1>
              <p className="text-center animate__animated animate__backInUp animate__delay-1s">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </Col>
          </Row>
          <Row>
            {semuaKelas.map((news) => {
              return (
                <Col key={news.id} className="shadow rounded" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={news.delay}>
                  <img src={news.image} alt="Lol" className="rounded-top" />
                    <div className="star mb-3 px-3">
                    </div>
                        <h5 className="mb-5 px-3">{news.title} <br />{news.date}.</h5>
                        <div className="ket d-flex justify-content-between align-items-center px-3 pb-3">
                            <p className="m-0 text-primary fw-bold">{news.Category}</p>
                          <button className="btn btn-info rounded-1" onClick={() => navigate(`/detail/${news.id}`)}>{news.buy}</button>
                        </div>
                  </Col>
                  )
              })}
          </Row>
        </Container>
      </div>
              
        <FaqComponent />
    </div>
  )
}

export default NewsPage