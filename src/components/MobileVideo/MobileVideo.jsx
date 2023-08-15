"use client";

import SignUpForm from "components/SignUpForm/SignUpForm";
import styles from "./styles.module.scss";

import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const MobileVideo = () => {
  // state
  const [render, setRender] = useState("video");

  // router
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.has("sign-up")) {
      setRender("form");
    } else {
      setRender("video");
    }
  }, [searchParams]);

  return (
    <div className={styles["main"]}>
      <div className={styles["image-container"]}>
        <Image
          src="/images/mobile.png"
          alt="logo"
          fill
          priority
          objectFit="fill"
          className="image"
        />

        {render === "video" && (
          <video className={styles["video"]} autoPlay loop muted>
            <source src="/videos/mobile.mp4" type="video/mp4" />
          </video>
        )}

        {render === "form" && (
          <div className={styles["video"]}>
            <SignUpForm />
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileVideo;
