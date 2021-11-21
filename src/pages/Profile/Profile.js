// Packages
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

// Context
import { useAppContext } from '../../context/app-context';

// Components
import MyProfileSettings from '../../components/MyProfileSettings/MyProfileSettings';
import MyProfileInfo from '../../components/MyProfileInfo/MyProfileInfo';

// Styles
import { PageContainer, Aside, Main } from '../StyledPages/StyledPages';

function Profile() {
  const history = useHistory();
  const { setUserData } = useAppContext();

  useEffect(() => {
    async function load() {
      const token = localStorage.getItem('token');
      try {
        const {
          data: { data },
        } = await axios({
          method: 'GET',
          baseURL: process.env.REACT_APP_SERVER_URL,
          url: '/users/profile',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUserData(data);
      } catch (error) {
        localStorage.removeItem('token');
        history.push('/');
      }
    }
    load();
  }, [history]);

  return (
    <div className="profile">
      <PageContainer>
        <Aside>
          <MyProfileSettings />
        </Aside>
        <Main>
          <MyProfileInfo />
        </Main>
      </PageContainer>
    </div>
  );
}

export default Profile;
