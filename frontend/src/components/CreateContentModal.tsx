// Controlled component

import { useRef, useState } from "react";
import CrossIcon from "../icons/CrossIcon";
import { Button } from "./Buttons";
import axios from "axios";
import { BACKEND_URL } from "../config";

enum contentType {
  Youtube = "youtube",
  Twitter = "twitter"
}
export function CreateContentModal({
  open,
  onclose
}: {
  open: boolean;
  onclose: () => void;
}) {
  const titleRef = useRef<HTMLInputElement>(null);
  const linkRef = useRef<HTMLInputElement>(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [type, setType] = useState(contentType.Youtube);
  const addContent = async () => {
    const title = titleRef.current?.value;
    const link = linkRef.current?.value;
    try {
      await axios.post(`${BACKEND_URL}/api/v1/content`, {
        title,
        link
      });
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        console.error("Signin error:", error.response?.data || error.message);
        setErrorMessage(error.response?.data?.message || "Signin failed.");
      } else {
        console.error("Unexpected error:", error);
        setErrorMessage("An unknown error occurred.");
      }
    }
  };
  return (
    <div>
      {open && (
        <div>
          <div className="w-screen h-screen bg-black fixed top-0 left-0 opacity-80 flex justify-center items-center "></div>
          <div className="w-screen h-screen fixed top-0 left-0 opacity-100 flex justify-center items-center ">
            <div className="bg-white opacity-100 rounded-md text-center p-3">
              <div className="justify-items-end  m-2">
                <div
                  onClick={onclose}
                  className="cursor-pointer"
                >
                  <CrossIcon size="lg" />
                </div>
              </div>
              <div>
                <Input
                  placeholder={"Title"}
                  ref={titleRef}
                />
                <Input
                  ref={linkRef}
                  placeholder={"Link"}
                />
              </div>
              <div className="text-left">
                <h1>Type :</h1>
                <div className="flex">
                  <Button
                    text="Youtube"
                    variant={
                      type === contentType.Youtube ? "primary" : "secondary"
                    }
                    size="md"
                    onClick={() => setType(contentType.Youtube)}
                  ></Button>
                  <Button
                    text="Twitter"
                    variant={
                      type === contentType.Twitter ? "primary" : "secondary"
                    }
                    size="md"
                    onClick={() => setType(contentType.Twitter)}
                  ></Button>
                </div>
              </div>

              <div className="flex justify-center ">
                <Button
                  variant="primary"
                  size="lg"
                  text="submit"
                  onClick={addContent}
                />
              </div>
              {errorMessage && <p className="text-red-500">{errorMessage}</p>}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

interface formInput {
  placeholder: string;
  onChange?: () => void;
  ref?: React.Ref<HTMLInputElement>;
  obfuscate?: boolean;
}
export function Input({ ref, placeholder, obfuscate }: formInput) {
  return (
    <input
      type={obfuscate ? "password" : "text"}
      className="p-2 border rounded m-2 block"
      placeholder={placeholder}
      ref={ref}
    />
  );
}
