import styled from "styled-components";

export const Container = styled.div`
  padding: 0 8%;
  padding-top: 15vh;
  letter-spacing: 1px;
`;

export const Title = styled.div`
  color: ${(p) => p.theme.text};
  margin-bottom: 3vh;
`;

export const BlogList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;
  justify-content: baseline;
  padding-top: 5vh;
`;
