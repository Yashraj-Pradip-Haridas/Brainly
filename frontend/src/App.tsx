import "./App.css";
import { Button } from "./components/Buttons";

const PlusIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 4.5v15m7.5-7.5h-15"
      />
    </svg>
  );
};

function App() {
  const handleValue = () => {};
  return (
    <>
      <Button
        variant="primary"
        size="lg"
        text="Submit"
        onClick={handleValue}
        startIcon={<PlusIcon />}
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
