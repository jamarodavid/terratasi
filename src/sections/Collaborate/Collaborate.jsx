import React from "react";
import { sixNine } from "../../assets";

const Collaborate = () => {
  return (
    <>
      <div className="font-poppins flex">
        <form action="">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text text-color-1">Name</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text text-color-1">Email</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
        </form>
        <img src={sixNine} alt="logo 6ix9ine" />
      </div>
    </>
  );
};

export default Collaborate;
