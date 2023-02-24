import styled from 'styled-components'

export const Container = styled.div`
  padding: 0 8%;
  letter-spacing: 1px;
  padding-top: 15vh;
`;

export const Title = styled.div`
  color: ${(p) => p.theme.text};
`;
export const Content = styled.div`
padding-top: 3vh;
display: grid;
grid-gap: 30px;
`;
export const Text = styled.div`
  color: ${(p) => p.theme.content};
  overflow: hidden;
  margin-bottom: 20px;
  font-size: 20px;

  p {
    line-height: 150%;
  }
`;
export const Skills = styled.div`

  .title {
    font-size: 20px;
    font-weight: 300;
    margin-bottom: 20px;
    color: ${(p) => p.theme.text};
  }
`;
export const SkillList = styled.div`
display: flex;
gap: 20px;
flex-wrap: wrap;
`;
