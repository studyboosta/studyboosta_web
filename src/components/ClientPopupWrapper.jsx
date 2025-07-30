// components/ClientPopupWrapper.jsx
"use client";
import React, { useEffect, useState } from "react";
import Popup from "./Popup";

const ClientPopupWrapper = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem("hasSeenPopup");

    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setShowPopup(true);
        sessionStorage.setItem("hasSeenPopup", "true");
      }, 60000);

      return () => clearTimeout(timer);
    }
  }, []);

  return showPopup ? <Popup setShowPopup={setShowPopup} /> : null;
};

export default ClientPopupWrapper;
