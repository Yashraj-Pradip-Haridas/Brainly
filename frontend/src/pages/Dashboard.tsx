import { useEffect, useState } from "react";
import "../App.css";
import { Button } from "../components/Buttons";
import Card from "../components/Card";
import { CreateContentModal } from "../components/CreateContentModal";
import PlusIcon from "../icons/PlusIcon";
import ShareIcon from "../icons/ShareIcon";
import Sidebar from "../components/Sidebar";
import axios from "axios";
import { BACKEND_URL } from "../config";

interface content {
  title: string;
  type: "twitter" | "youtube";
  link: string;
}
export default function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [data, setData] = useState<content[]>([]);
  const [shareLink, setShareLink] = useState(false);
  const handleClick = () => {
    setModalOpen(true);
  };
  const share = async () => {
    setShareLink(!shareLink);
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/brain/share`,
        {
          share: shareLink
        },
        {
          headers: {
            Authorization: localStorage.getItem("Token")
          }
        }
      );
      console.log(response.data);
      const shareUrl = `http://localhost:5173${response.data.message}`;
      alert(shareUrl);
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        console.error("Signup error:", error.response?.data || error.message);
        setErrorMessage(error.response?.data?.message || "Signup failed.");
      } else {
        console.error("Unexpected error:", error);
        setErrorMessage("An unknown error occurred.");
      }
    }
  };
  async function getData() {
    const response = await axios.get(`${BACKEND_URL}/api/v1/content`, {
      headers: {
        Authorization: localStorage.getItem("Token")
      }
    });

    const data = response.data.data;
    setData(data);
    console.log(data);
    // console.log(data[0].link);
  }

  useEffect(() => {
    getData();
    const interval = setInterval(() => getData(), 1000 * 10);
    return () => {
      clearInterval(interval);
    };
  }, [modalOpen]);

  return (
    <>
      <CreateContentModal
        open={modalOpen}
        onclose={() => {
          setModalOpen(false);
        }}
      />

      <div className="flex">
        {!modalOpen && <Sidebar />}
        <div className="flex-1 sm:ml-64 p-4 w-full min-h-screen bg-gray-200">
          <div className="flex flex-col sm:flex-row sm:justify-end gap-2 mb-4">
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
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
              onClick={share}
              startIcon={<ShareIcon size="md" />}
            />
          </div>

          <div className="flex gap-4 flex-wrap">
            {data &&
              data.map((item, index) => {
                return (
                  <Card
                    key={index}
                    title={item.title}
                    type={item.type}
                    link={item.link}
                  ></Card>
                );
              })}

            {/* <Card
              title="Bleach:Thousand years of Blood War"
              type="twitter"
              link="https://x.com/Tech_Baddo/status/1912438509496840243"
            />
            <Card
              title="Bleach:Thousand years of Blood War"
              type="youtube"
              link="https://www.youtube.com/watch?v=3RNZGbqDFyU&ab_channel=LostSenpai"
              content="Lecture for the bleach fans. This is the fight between Aizen and Ichigo"
            /> */}
          </div>
        </div>
      </div>
    </>
  );
}
