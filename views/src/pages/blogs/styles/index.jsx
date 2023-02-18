import styled from "styled-components";

export const Container = styled.div`
  padding: 0 8%;
  letter-spacing: 1px;
  padding-top: 15vh;
`;

export const Title = styled.div`
  color: ${(p) => p.theme.text};
  overflow: hidden;
`;
export const BlogList = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: 20px;
  padding-top: 5vh;
`;
