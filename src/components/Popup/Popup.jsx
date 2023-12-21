"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const Popup = () => {
    const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowBanner(true);
    }, 10000);
  }, []);
  return (
<>
<div className={showBanner ? "popupModal show" : "popupModal"}>
          <i class="bx bx-x poppubbox" onClick={() => setShowBanner(false)}></i>
          <Link href={"/apply-online"}>
            <div
              className={showBanner ? "popUpBanner show" : "popUpBanner"}
              onClick={() => setShowBanner(false)}
            >
              {/* <img src={image} alt="" /> */}
            </div>
          </Link>
        </div>

</>
  )
}

export default Popup