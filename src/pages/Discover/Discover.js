// Packages
import { useState, useEffect } from 'react';
import axios from 'axios';

// Components
import MessageList from '../../components/MessageList/MessageList';
import ProfileList from '../../components/ProfileList/ProfileList';
import { PageContainer, Aside, Main } from '../StyledPages/StyledPages';

function Discover() {
  const [dataArray, setDataArray] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    async function load() {
      try {
        const {
          data: { data },
        } = await axios({
          method: 'GET',
          baseURL: process.env.REACT_APP_SERVER_URL,
          url: '/users',
          headers: {},
        });
        setDataArray(data);
      } catch (error) {
        localStorage.removeItem('token');
      }
    }
    load();
  }, []);

  const randomizer = () => {
    const totalProfiles = dataArray.length - 1;
    return Math.floor(Math.random() * Math.floor(totalProfiles));
  };

  const handleNext = () => {
    const newIndex = randomizer();

    if (index < dataArray.length - 1 && index !== newIndex) {
      return setIndex(newIndex);
    }
    if (index === newIndex && index < dataArray.length - 1) {
      return setIndex(index + 1);
    }
    if (index >= dataArray.length - 1) {
      return setIndex(index - 1);
    }
  };

  return (
    <div className="discover">
      <PageContainer>
        <Aside>
          <MessageList />
        </Aside>
        <Main>
          {!!dataArray.length > 0 && (
            <ProfileList
              dataArray={dataArray}
              handleNext={handleNext}
              index={index}
            />
          )}
        </Main>
      </PageContainer>
    </div>
  );
}

export default Discover;
