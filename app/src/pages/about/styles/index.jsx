import styled from 'styled-components'

export const Container = styled.div`
  padding: 15vh 8% 10vh;
  letter-spacing: 1px;
  /* padding: 15vh ; */
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
export const Experiences = styled.div`

  .title {
    font-size: 20px;
    font-weight: 300;
    margin-bottom: 20px;
    color: ${(p) => p.theme.text};
  }
`;
export const ExperienceList = styled.div`
display: flex;
gap: 20px;
flex-wrap: wrap;
`;
