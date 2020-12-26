import React, { useState, useEffect } from "react";
import { Modal, Button } from "antd";
import { StopOutlined } from "@ant-design/icons";

export default function AdblockDetect() {
  const [adblockDetected, setAdblock] = useState(false);
  const checkAdblock = async () => {
    try {
      const response = await checkAdBlocker();
      setAdblock(!!response);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    checkAdblock();
  }, []);

  if (adblockDetected) {
    return (
      <Modal
        title="Disable Ad blocker"
        visible={adblockDetected}
        footer={[<Button onClick={checkAdblock}>Refresh</Button>]}
      >
        <p>
          Please consider helping us financially to continue providing this
          software for free by disabling the adblock.
        </p>
        <span>
          <Button
            icon={<StopOutlined style={{ color: "red" }} />}
            type="text"
          />
          Disable the <b>adblock</b> and hit <b>refresh</b>
        </span>
      </Modal>
    );
  }
  return <p></p>;
}

// Determines if the user is likely using an ad block extension

async function checkAdBlocker() {
  let isBlocked;
  async function tryRequest() {
    try {
      return fetch(
        new Request(
          "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",
          {
            method: "HEAD",
            mode: "no-cors",
          }
        )
      )
        .then(function (response) {
          // Google Ads request succeeded, so likely no ad blocker
          isBlocked = false;
          return isBlocked;
        })
        .catch(function (e) {
          // Request failed, likely due to ad blocker
          isBlocked = true;
          return isBlocked;
        });
    } catch (error) {
      isBlocked = true;
      throw new Error("Blocked");
    }
  }

  return isBlocked !== undefined ? isBlocked : await tryRequest();
}
