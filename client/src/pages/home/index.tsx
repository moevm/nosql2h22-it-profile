import HomePageHeader from "./components/Header";
import HomePageContent from "./components/Main";
import { useCheckServer } from "./hooks/useCheckServer";
import './styles/index.scss'

export default function HomePage() {
  const { serverIsConnected } = useCheckServer();

  return (
    <>
      <HomePageHeader />
      <HomePageContent>
        <h1>{serverIsConnected ? "Сервер подключен" : "Нет соединения"}</h1>
      </HomePageContent>
      <footer></footer>
    </>
  );
}
