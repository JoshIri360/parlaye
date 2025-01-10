"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consentGiven = localStorage.getItem("cookieConsent");
    if (consentGiven === null) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowBanner(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookieConsent", "rejected");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#111111] p-4 shadow-lg">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-white">
          We use cookies to enhance your browsing experience and analyze our
          traffic. By clicking "Accept", you consent to our use of cookies.
        </p>
        <div className="flex gap-4">
          <Button
            variant="outline"
            onClick={handleReject}
            className="border-[#19E094] text-[#19E094] hover:bg-[#19E094] hover:text-black"
          >
            Reject
          </Button>
          <Button
            onClick={handleAccept}
            className="bg-[#19E094] text-black hover:bg-[#15B477]"
          >
            Accept
          </Button>
        </div>
      </div>
    </div>
  );
}
