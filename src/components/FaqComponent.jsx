import { Container, Row, Col, Accordion } from "react-bootstrap"
import { Faq } from "../data/index"


const HeaderComponent = () => {
  return (
    <div className="Faq">
      <Container>
        <Row>
          <Col>
          <h2 className="text-center fw-bold animate__animated animate__backInRight animate__delay-2s">Pertanyaan Tentang Web</h2>
          </Col>
        </Row>
        <Row className="row-cols-lg-2 row-cols-1 g-4 pt-4 ">
          {Faq.map((data) => {
            return (
              <Col key={data.id}>
          <Accordion className="shadow-sm">
      <Accordion.Item eventKey={data.eventKey}>
        <Accordion.Header>{data.title}</Accordion.Header>
        <Accordion.Body>{data.desc}</Accordion.Body>
      </Accordion.Item>
    </Accordion>
          </Col>
            )
          })}
        </Row>
      </Container>
    </div>
  )
}

export default HeaderComponent