import { Login } from "./views/Login";
import "./i18n/config";
import backgroundTile from "./assets/backgroundTile.png";

function App() {
  return (
    <div
      className="h-dvh w-full flex justify-center items-center"
      style={{ backgroundImage: `url(${backgroundTile})` }}
    >
      <Login />
    </div>
  );
}

export default App;
