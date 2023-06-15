import Motion from './components/Motion';
import { styled } from 'styled-components';
import Variants from './components/Variants';

const Container = styled.div`
  color: black;
  background: linear-gradient(135deg, #e09, #d0e);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <Container>
      {/* <Motion /> */}
      <Variants />
    </Container>
  );
}

export default App;
