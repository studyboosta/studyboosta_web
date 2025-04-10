// components/ClientPopupWrapper.jsx
"use client";
import React, { useEffect, useState } from "react";
import Popup from "./Popup";

const ClientPopupWrapper = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem("hasSeenPopup");

    if (!hasSeenPopup) {
      setShowPopup(true);
      localStorage.setItem("hasSeenPopup", "true");
    }
  }, []);

  return showPopup ? <Popup setShowPopup={setShowPopup} /> : null;
};

export default ClientPopupWrapper;
