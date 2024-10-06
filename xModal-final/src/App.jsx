import { useState } from "react";
import XModal from "./Components/XModal";

function App() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [openModalBackground, setOpenModalBackground] = useState(false);

  const modalBackground = {
    height: "100vh",
    backdropFilter: openModalBackground ? "blur(1px)" : "none",
    transition: "backdrop-filter 0.3s ease",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  return (
    <div>
      <h1 style={modalBackground}>User Details Model</h1>
      <button
        className="modalTrigger"
        onClick={() => {
          setIsOpenModal(true);
          openModalBackground(true);
        }}
      >
        Open Form
      </button>
      {isOpenModal && (
        <XModal
          setIsOpenModal={setIsOpenModal}
          setOpenModalBackground={setOpenModalBackground}
        />
      )}
    </div>
  );
}

export default App;
