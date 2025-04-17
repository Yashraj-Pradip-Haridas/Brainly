// Controlled component

export function CreateContentModal({ open: boolean, onclose }) {
  return (
    <div>
      {open && (
        <div className="w-screen h-screen bg-black fixed top-0 left-0 opacity-80"></div>
      )}
    </div>
  );
}
