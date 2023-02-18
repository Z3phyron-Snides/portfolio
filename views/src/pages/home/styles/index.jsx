import styled from "styled-components";

export const Container = styled.div`
  padding: 0 8%;
  padding-top: 20vh;
  letter-spacing: 1px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 100%;
  justify-content: center;
  @media screen and (max-width: 900px) {
    padding: 0 5%;
    padding-top: 15vh;
    height: 70vh;
    display: flex;
    flex-direction: column;
    gap: 30px;
    text-align: center;
    align-items: center;
    justify-content: center;
  }
  color: ${(p) => p.theme.text};
`;
export const Intro = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-bottom: 30px;

  .text {
    font-size: 30px;
    overflow: hidden;

    @media screen and (max-width: 900px) {
      font-size: 13px;
    }
  }

  @media screen and (max-width: 900px) {
    align-items: center;
    justify-content: center;
  }
`;
export const Description = styled.div`
  width: 70%;
  font-size: 20px;
  line-height: 150%;
  overflow: hidden;

  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;
