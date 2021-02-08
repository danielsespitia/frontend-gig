import HeaderRight from "../Headers/HeaderRight";
import styled from "styled-components";

import {
  ActionButtonContainer,
  ActionButton,
} from "../../pages/StyledPages/StyledPages";

function MyProfileInfo() {
  return (
    <div>
      <HeaderRight />
      <div>
        <a href="/app/profile/edit">
          <ActionButtonContainer>
            <ActionButton>Editar Perfil</ActionButton>
          </ActionButtonContainer>
        </a>
      </div>
    </div>
  );
}

export default MyProfileInfo;
