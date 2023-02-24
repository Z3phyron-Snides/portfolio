import styled from "styled-components";

export const Container = styled.div`
  padding: 0 8%;
  padding-top: 15vh;
  letter-spacing: 1px;
`;

export const Title = styled.div`
  margin-bottom: 40px;
  color: ${(p) => p.theme.text};
`;
export const Fields = styled.div`
  display: grid;
  grid-template-columns: auto 40%;
  grid-gap: 20px;
  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr;
    align-items: center;

    justify-content: center;
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 40px;
  color: ${(p) => p.theme.text};

  button {
    background: ${(p) => p.theme.green};
  }
`;
export const FormCtrl = styled.div`
  input,
  textarea {
    &::placeholder {
      color: ${(p) => p.theme.text};
    }
    color: ${(p) => p.theme.text};

    
  }

  textarea {
    min-height: 15vh;
  }
`;
export const Socials = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  grid-gap: 30px;
  width: 80%;
  margin: auto;
  padding: 5%;
  /* margin: 0 auto; */

  .social {
    width: 50px;
    height: 50px;
    border-radius: 50px;
    background: ${(p) => p.theme.green};
    display: flex;
    color: ${(p) => p.theme.text};
    justify-content: center;
    align-items: center;
    font-size: 30px;
  }
`;
