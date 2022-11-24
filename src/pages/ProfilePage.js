import { useNavigate, useParams } from "react-router-dom";
import {goToHomePage} from "../router/coordinator"

function ProfilePage() {

  const navigate = useNavigate()
  const pathParam = useParams()

  return (
    <section>
      <button onClick={() => goToHomePage(navigate)} >Ir para página inicial</button>
      <h1>Página de perfil {pathParam.id}</h1>
    </section>
  );
}

export default ProfilePage;
