// Controlled component

import CrossIcon from "../icons/CrossIcon";
import { Button } from "./Buttons";

export function CreateContentModal({
  open,
  onclose
}: {
  open: boolean;
  onclose: () => void;
}) {
  return (
    <div>
      {open && (
        <div className="w-screen h-screen bg-black fixed top-0 left-0 opacity-80 flex justify-center items-center ">
          <div className="bg-white opacity-100 rounded-md ">
            <div className="justify-items-end  m-2">
              <div
                onClick={onclose}
                className="cursor-pointer"
              >
                <CrossIcon size="lg" />
              </div>
            </div>
            <div>
              <Input placeholder={"Title"} />
              <Input
                placeholder={"Link"}
                onChange={() => {}}
              />
            </div>
            <div className="flex justify-center ">
              <Button
                variant="primary"
                size="lg"
                text="submit"
                onClick={() => {}}
              />
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
