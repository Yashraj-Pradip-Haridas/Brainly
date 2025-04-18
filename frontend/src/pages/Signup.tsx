import { useRef, useState } from "react";
import { Button } from "../components/Buttons";
import { Input } from "../components/CreateContentModal";
import BrainIcon from "../icons/BrainIcon";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export function Signup() {
  const [errorMessage, setErrorMessage] = useState("");
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const signup = async () => {
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;
    try {
      await axios.post(`${BACKEND_URL}/api/v1/user/signup`, {
        username: username,
        password: password
      });
      alert("You are signed Up");
      navigate("/dashboard");
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

  return (
    <div className="h-screen w-screen bg-gray-200  justify-items-center content-center">
      <div className="bg-white rounded-md border-purple-600 min-w-48 p-5 px-8">
        <h1 className="text-center py-3 pb-4 font-bold text-purple-600 text-3xl flex justify-center">
          {" "}
          Brainly <BrainIcon size="lg" />
        </h1>
        <Input
          ref={usernameRef}
          placeholder="Username"
        />
        <Input
          placeholder="Password"
          ref={passwordRef}
          obfuscate={true}
        />
        <div className="justify-items-center p-2">
          <Button
            variant="primary"
            size="lg"
            onClick={signup}
            text="Signup"
            fullWidth={true}
            loading={false}
          ></Button>
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        </div>
      </div>
    </div>
  );
}
