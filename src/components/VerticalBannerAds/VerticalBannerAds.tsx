import React, { useEffect } from "react";

declare global {
  interface Window {
    adsbygoogle: any;
  }
}

export default function Ads() {
  useEffect(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  return (
    <div className="ads">
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-2722285596392235"
        data-ad-slot="7149145943"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
}
