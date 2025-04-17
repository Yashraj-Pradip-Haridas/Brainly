import "./App.css";
import { Button } from "./components/Buttons";
import PlusIcon from "./icons/PlusIcon";

function App() {
  const handleValue = () => {};
  return (
    <>
      <Button
        variant="primary"
        size="lg"
        text="Submit"
        onClick={handleValue}
        startIcon={<PlusIcon size="lg" />}
      />
      <Button
        variant="secondary"
        size="lg"
        text="Submit"
        onClick={handleValue}
      />
      <Button
        variant="secondary"
        size="sm"
        text="Submit"
        onClick={handleValue}
      />
    </>
  );
}

export default App;
