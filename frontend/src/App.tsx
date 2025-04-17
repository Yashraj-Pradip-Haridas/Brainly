import { useState } from "react";
import "./App.css";
import { Button } from "./components/Buttons";
import Card from "./components/Card";
import { CreateContentModal } from "./components/CreateContentModal";
// import Card from "./components/Card";
import PlusIcon from "./icons/PlusIcon";
import ShareIcon from "./icons/ShareIcon";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const handleClick = () => {
    setModalOpen(true);
  };
  return (
    <>
      <CreateContentModal
        open={modalOpen}
        onclose={() => {
          setModalOpen(false);
        }}
      />
      <div className="flex  justify-end">
        <Button
          variant="primary"
          size="lg"
          text="Add content"
          onClick={handleClick}
          startIcon={<PlusIcon size="md" />}
        />
        <Button
          variant="secondary"
          size="lg"
          text="Share brain"
          onClick={() => {}}
          startIcon={<ShareIcon size="md" />}
        />
      </div>
      <div className="flex gap-4 p-2 flex-wrap">
        <Card
          title="Bleach:Thousand years of Blood War"
          type="twitter"
          link="https://x.com/Tech_Baddo/status/1912438509496840243"
        />
        <Card
          title="Bleach:Thousand years of Blood War"
          type="youtube"
          link="https://www.youtube.com/watch?v=3RNZGbqDFyU&ab_channel=LostSenpai"
          content="Lecture for the bleach fans. This is the fight between Aizen and Ichigo"
        />
      </div>
    </>
  );
}

export default App;
