import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { kelasTerbaru, dataSwiper } from "../data/index"
import { useState } from "react";

import { semuaKelas } from "../data/index"

import FaqComponent from "../components/FaqComponent"
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

const HomePage = () => {
  const [search, setSearch] = useState("")
  const handleChange = (e) => {
    setSearch(e.target.value)
    console.log("data search", search)
  }
  const filteredPosts = semuaKelas.filter((post) => {
    return post.title.toLowerCase().includes(search.toLowerCase())
  })

  let navigate = useNavigate();


  return (
    <div className="homepage">
      <header className="w-100 min-vh-100 d-flex align-items-center overflow-hidden">
        <Container>
          <Row className="header-box d-flex align-items-center pt-lg-5">
            <Col lg="6">
              <h1 className="mb-4 animate__animated animate__fadeInLeft animate__delay-1s">Ground <br /> <span>Zero</span> <br />News</h1>
              <p className="mb-4 animate__animated animate__fadeInLeft animate__delay-1s">Best Place to see News About Fighting and Self Defence.<br />Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <button className="btn btn-info btn-lg rounded-1 me-2 mb-xs-0 mb-2 animate__animated animate__fadeInLeft animate__delay-1s" onClick={() => navigate("/news")}>Lihat Berita</button>
              <button className="btn btn-outline-info btn-lg rounded-1 mb-xs0 mb-2 animate__animated animate__fadeInLeft animate__delay-1s" onClick={() => navigate("/faq")}>Lihat FAQ</button>
            </Col>
            <Col lg="6" className="pt-lg-0 pt-5">
              <img src="./karate_stand.png" alt="karate-img" className="animate__animated animate__fadeInLeft animate__delay-2s" />
            </Col>
          </Row>
        </Container>
      </header>
      <div className="news w-100 min-vh-100">
        <Container>
          <Row>
            <Col>
              <div>
                <div>
                  <h1 className="text-center fw-bold">Berita Terbaru</h1>
                  <p className="text-center">Lorem ipsum dolor sit amet consectetur.</p>
                  <input
                    type="text"
                    placeholder="Search by Title"
                    value={search}
                    onChange={handleChange}
                    className="w-full max-w-md px-4 py-2 border border-gray-500" />
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            {filteredPosts.map((news) => {
              return (
                <Col key={news.id} className="shadow rounded" data-aos="zoom-in-up" data-aos-duration="860"
                  data-aos-delay={news.delay}>
                  <img src={news.image} alt="Lol" className="rounded-top" />
                  <div className="star mb-3 px-3">
                    <h6 className="jenis text-center fw-bold ">olahraga kelas dunia</h6>
                  </div>
                  <h5 className="mb-5 px-3">{news.title} <br />Lorem ipsum dolor sit amet.</h5>
                  <div className="ket d-flex justify-content-between align-items-center px-3 pb-3">
                    <p className="m-0 text-primary fw-bold">{news.Category}</p>
                    <button className="btn btn-info rounded-1" onClick={() => navigate("/news")}>{news.buy}</button>
                  </div>
                </Col>
              )
            })}
          </Row>
          <Row>
            <Col className="text-center">
              <button className="btn btn-warning rounded-5 btn-lg shadow" data-aos="fade-up" data-aos-duration="1000" onClick={() => navigate("/news")}>
                Lihat Semua Berita <i className="fa-solid fa-chevron-right ms-2"></i></button>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="detail py-5">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center fw-bold my-2">Ulasan Web</h1>
              <p className="text-center">Lorem ipsum dolor sit amet.</p>
            </Col>
          </Row>
          <Row>
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                992: {
                  slidesPerView: 2,
                  spaceBetween: 50,
                },
                1200: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {dataSwiper.map((data) => {
                return (
                  <SwiperSlide key={data.id} className="shadow">
                    <p className="desc">{data.desc}</p>
                    <div className="people">
                      <img src={data.image} alt="" />
                      <div>
                        <h5 className="mb-1">{data.name}</h5>
                        <p className="m-0 fw-bold ">{data.skill}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })}
            </Swiper>
          </Row>
        </Container>
      </div>
      {/* Section Faq */}
      <FaqComponent className="" />
      {/* Section Faq */}
    </div>
  )
}

export default HomePage