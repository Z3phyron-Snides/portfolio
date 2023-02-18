import styled from "styled-components";

const Container = styled.div`
  padding: 10% 5% 0;
  max-width: 800px;
  margin: 0 auto;

  @media (max-width: 600px) {
    padding: 15% 5% 0;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;

  @media (max-width: 600px) {
    font-size: 2rem;
  }
`;

const Image = styled.img`
  width: 100%;
  max-height: 300px;
  object-fit: cover;
  margin-bottom: 2rem;
`;

const Details = styled.div`
  font-size: 1.2rem;
  line-height: 1.5;
  margin-bottom: 2rem;

  img {
    width: 100%;
    /* object-fit: cover; */
  }

  @media (max-width: 600px) {
    font-size: 1rem;
    line-height: 1.3;
  }
`;

const Date = styled.p`
  font-size: 1.2rem;
  color: grey;
  margin-bottom: 2rem;

  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;

export { Container, Title, Image, Details, Date };
