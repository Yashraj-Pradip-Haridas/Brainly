// Controlled component

import CrossIcon from "../icons/CrossIcon";
import { Button } from "./Buttons";

export function CreateContentModal({ open, onclose }) {
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
              <Input placeholder={"Link"} />
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

function Input({ onChange, placeholder }: { onChange: () => void }) {
  return (
    <input
      type="text"
      className="p-2 border rounded m-2 block"
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}
