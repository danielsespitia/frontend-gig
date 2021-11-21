// Packages
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

// Context
import { useAppContext } from '../../context/app-context';

// Components
import MyProfileSettings from '../../components/MyProfileSettings/MyProfileSettings';
import MyProfileEdit from '../../components/MyProfileEdit/MyProfileEdit';

// Styles
import { PageContainer, Aside, Main } from '../StyledPages/StyledPages';

function ProfileEdit() {
  const history = useHistory();
  const [disabled, setDisabled] = useState(true);
  const {
    state: { userData },
    setUserData,
  } = useAppContext();
  const { profilePicture } = userData;

  const [file, setFile] = useState(null);

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDisabled(false);
    setUserData({ ...userData, [name]: value });
  };

  const onSubmit = async (data) => {
    try {
      const token = localStorage.getItem('token');
      await axios({
        method: 'PUT',
        baseURL: process.env.REACT_APP_SERVER_URL,
        url: `/users`,
        data: data,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      alert('Perfil actualizado correctamente!');
      history.push('/app/profile');
    } catch (err) {}
  };

  const readFile = (file) => {
    const reader = new FileReader();

    reader.onload = (e) =>
      setUserData({ ...userData, profilePicture: e.target.result });
    reader.readAsDataURL(file);
  };

  const handleChangeProfilePicture = async (e) => {
    const targetFile = e.target.files[0];
    e.preventDefault();
    setDisabled(false);

    readFile(targetFile);
    setFile(targetFile);
  };

  const handleSubmitProfilePicture = async (e) => {
    e.preventDefault();
    const data = new FormData();

    data.append('profilePicture', profilePicture);
    data.append('file', file);

    try {
      const token = localStorage.getItem('token');
      await axios({
        method: 'PUT',
        baseURL: process.env.REACT_APP_SERVER_URL,
        url: `/users/update-pp`,
        data,
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Imagen actualizada correctamente');
    } catch (error) {
      alert('La imagen no pudo ser cargada', error);
    }
  };

  return (
    <div className="profile-edit">
      <PageContainer>
        <Aside>
          <MyProfileSettings {...userData} />
        </Aside>
        <Main>
          <MyProfileEdit
            handleChange={handleChange}
            onSubmit={onSubmit}
            disabled={disabled}
            handleSubmitProfilePicture={handleSubmitProfilePicture}
            handleChangeProfilePicture={handleChangeProfilePicture}
          />
        </Main>
      </PageContainer>
    </div>
  );
}

export default ProfileEdit;
