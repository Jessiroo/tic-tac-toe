import MainPage from "./pages/MainPage";
import GameStateProvider from "./context/GameStateProvider";

function App() {
  return (
    <GameStateProvider>
      <MainPage />
    </GameStateProvider>
  );
}

export default App;