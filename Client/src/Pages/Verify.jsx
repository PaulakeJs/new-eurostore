import React, { useEffect } from "react";
import { SendSms } from "../Apis/userapi";

function Verify() {
  useEffect(() => {
    // Show the modal when the component mounts
    document.getElementById("my_modal_5").showModal();
    const getData = async () => {
      const response = await SendSms();
      if (response.success) {
        console.log("sent");
      }
    };
    getData();
  }, []);

  const send = async () => {
    const response = await SendSms();
    if (response.success) {
      console.log("sent");
      alert("New Otp Sent")
    }
  };

  return (
    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle ">
      <div className="modal-box bg-white">
        <h3 className="font-bold text-lg">Account Not Verified</h3>
        <p className="py-4">
          An Otp Has Been Sent To Your Registered Phone Number
        </p>
        <div className="flex items-center gap-3">
          <input
            type="text"
            placeholder="Type here"
            className="xc input input-bordered input-primary w-full max-w-xs bg-white"
          />
          <button className="btn btn-active btn-primary">Verify</button>
        </div>
        <p className="mt-3 text-md text-primary cursor-pointer" onClick={send}>
          Resend OTP
        </p>

        <div className="modal-action"></div>
      </div>
    </dialog>
  );
}

export default Verify;
