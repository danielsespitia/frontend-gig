import styled from 'styled-components';
import './App.css';
import MyProfileSettings from './components/MyProfileSettings/MyProfileSettings';
import MyProfileInfo from './components/MyProfileInfo/MyProfileInfo';

const PageContainer = styled.div `
  display: flex;
  justify-content: space-evenly;
`;

function App() {
  return (
    <div className="App">
      <h1>Home</h1>
      <PageContainer>
        <MyProfileSettings/>
        <MyProfileInfo/>
      </PageContainer>
    </div>
  );
}

export default App;
