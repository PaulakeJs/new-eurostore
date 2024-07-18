import React from "react";
import HomeSidebar from "../Components/HomeSidebar";
import Ad from "../Components/Ad";

function Home() {
  return (
    <>
      <div className=" p-2 md:px-28 md:py-10 flex gap-3 items-center">
        <div className="hidden md:block">
          <HomeSidebar />
        </div>
        <Ad />
      </div>
    </>
  );
}

export default Home;
