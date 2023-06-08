import Alert from "./components/Modal/Alert";
import Modal from "./components/Modal/Modal";
import ProfileInformation from "./components/Profile/ProfileInformation";
import RecommendList from "./components/Profile/RecommendList";
import { GlobalStyle } from "./components/styles/Globalstyle";

function App() {
  return (
    <div>
      <GlobalStyle />
      <ProfileInformation />
      <RecommendList />
      <Modal type="setting" />
      <Alert type="logout" />
    </div>
  );
}
export default App;
