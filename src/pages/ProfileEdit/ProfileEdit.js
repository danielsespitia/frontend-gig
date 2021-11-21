import { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import { AuthContext } from '../../store/AuthContext';
import { useAppContext } from '../../context/app-context';

import MyProfileSettings from '../../components/MyProfileSettings/MyProfileSettings';
import MyProfileEdit from '../../components/MyProfileEdit/MyProfileEdit';

import { PageContainer, Aside, Main } from '../StyledPages/StyledPages';

function ProfileEdit() {
  const { logout } = useContext(AuthContext);
  const history = useHistory();
  const [disabled, setDisabled] = useState(true);
  const {
    state: { userData },
    setUserData,
  } = useAppContext();
  const { profilePicture, video, videoStartMin, videoStartSec } = userData;

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

  const handleDelete = async (e) => {
    try {
      const token = localStorage.getItem('token');
      axios({
        method: 'DELETE',
        baseURL: process.env.REACT_APP_SERVER_URL,
        url: `/users`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      localStorage.removeItem('token');
      logout();

      alert('Tu cuenta fue eliminada');
      history.push('/');
    } catch (err) {
      alert('Tu cuenta no pudo ser eliminada', err);
    }
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

  // TODO: Move to utils folder with export statement
  const youtubeParser = (url) => {
    if (url) {
      const regExp =
        /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
      let match = url.match(regExp);

      return match && match[7].length === 11 ? match[7] : false;
    }
    return;
  };

  const youtubeId = youtubeParser(video);

  const startTime = videoStartMin * 60 + videoStartSec;
  const endTime = startTime + 15;

  return (
    <div className="profile-edit">
      <PageContainer>
        <Aside>
          <MyProfileSettings {...userData} handleDelete={handleDelete} />
        </Aside>
        <Main>
          <MyProfileEdit
            {...userData}
            youtubeId={youtubeId}
            startTime={startTime}
            endTime={endTime}
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
