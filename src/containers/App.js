
import styled from 'styled-components'
import Cards from '../components/CardsGet';
import Header from '../components/Header';

const StyledContainer = styled.div`
height: 100vh;
background-color: #f0fafb;
`


function App() {
  return (
    <StyledContainer>
      <Header />
      <Cards />
    </StyledContainer>
  );
}

export default App;
