import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const About = () => {
  return (
    <section id="about" className="py-5 bg-light">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <Image src="./dipak.jpg" fluid roundedCircle />
          </Col>
          <Col md={6}>
            <h2 className="mb-4">About Me</h2>
            <p className="lead">Welcome to my portfolio! I am a passionate developer with a love for creating beautiful and functional websites from scratch.</p>
            <p>I am a versatile full-stack developer with a passion for creating seamless, end-to-end web applications that deliver exceptional user experiences and robust functionality. With a strong foundation in both front-end and back-end development, I am adept at building dynamic, scalable, and high-performing solutions that meet the diverse needs of modern businesses.

              My expertise in front-end technologies such as React.js, HTML5, CSS3, and JavaScript allows me to craft stunning, responsive user interfaces that captivate and engage users. On the back-end, my proficiency with Node.js, Express.js, and databases like MongoDB and SQL enables me to design and implement efficient server-side architectures that ensure seamless performance and scalability.

              With over four years of experience, I excel at bridging the gap between design and functionality. Whether it's enhancing user experience, optimizing application performance, or solving complex technical challenges, I am dedicated to exceeding expectations and delivering high-quality results.

              Driven by innovation and attention to detail, I am committed to transforming ideas into impactful web applications that not only meet but surpass project goals.</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
