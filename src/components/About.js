import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const About = () => {
  return (
    <section id="about" className="py-5 bg-light">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <Image src="https://media.discordapp.net/attachments/1224341771652436084/1224353954993803284/OIG1.v_ins.jpg?ex=662fa47a&is=661d2f7a&hm=f60f0f3da2a2dcfe56bd19fdd3289f6f8d56270d2a03c6a19e37a5cd641ef35c&=&format=webp&width=502&height=502" fluid roundedCircle />
          </Col>
          <Col md={6}>
            <h2 className="mb-4">About Me</h2>
            <p className="lead">Welcome to my portfolio! I am a passionate developer with a love for creating beautiful and functional websites from scratch.</p>
            <p>My expertise extends beyond just front-end development; I am also proficient in full-stack development. This means I'm not only focused on crafting stunning user interfaces but also ensuring seamless functionality and performance on the server side.

              In addition to my mastery of React.js, HTML5, CSS3, and JavaScript for front-end development, I have a strong command of back-end technologies such as Node.js, Express.js, and databases like MongoDB or SQL. This allows me to build robust, end-to-end solutions that meet the diverse needs of modern web applications.

              I am dedicated to delivering high-quality results and exceeding client expectations, whether it's creating an engaging user experience or optimizing the performance and scalability of a web application. With a keen eye for design and a thorough understanding of both front-end and back-end technologies, I am committed to bringing your vision to life while ensuring your project's success at every stage of development..</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
