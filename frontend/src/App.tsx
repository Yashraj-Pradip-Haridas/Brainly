import "./App.css";
import { Button } from "./components/Buttons";

function App() {
  const handleValue = () => {};
  return (
    <>
      <Button
        variant="primary"
        size="lg"
        text="Submit"
        onClick={handleValue}
      />
      <Button
        variant="secondary"
        size="lg"
        text="Submit"
        onClick={handleValue}
      />
    </>
  );
}

export default App;
