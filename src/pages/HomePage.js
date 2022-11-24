import { useNavigate } from "react-router-dom";
import {goToProfilePage} from "../router/coordinator"

function HomePage() {
  const navigate = useNavigate()

  return (
    <section>
      <button onClick={() => goToProfilePage(navigate, 100)} > Ir para página de perfil</button>
      <h1>Página inicial</h1>
    </section>
  );
}

export default HomePage;
