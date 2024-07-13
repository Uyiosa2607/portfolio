"use client";

export default function Form() {
  return (
    <form className="text-[18px]">
      <div className="w-full">
        <label className="font-semibold" htmlFor="name">
          Name
        </label>
        <input
          className="w-full mt-[10px] rounded-sm p-[11px] font-semibold bg-[#f0f0f0] mb-[1.7rem]"
          id="name"
          type="text"
          placeholder="Enter Your Name"
        />
      </div>
      <div>
        <label className="mb-[20px]  font-semibold" htmlFor="email">
          Email
        </label>
        <input
          className="w-full mt-[10px] rounded-sm p-[11px] font-semibold bg-[#f0f0f0] mb-[1.7rem]"
          type="email"
          placeholder="Enter Your Email"
          id="email"
        />
      </div>
      <div>
        <label className="mb-[20px]  font-semibold" htmlFor="message">
          Message
        </label>
        <textarea
          className="w-full mt-[10px] mb-[2rem] rounded-sm font-semibold p-[10px] text-[#fafafa] bg-[#f0f0f0] h-[200px]"
          name="message"
          id="message"
          placeholder="Enter Your Message"
        ></textarea>
      </div>
      <div className="flex justify-end">
        <button className="uppercase w-fit text-[15px] right-0 py-[15px] font-semibold rounded-md px-[80px] bg-green-600 text-white">
          submit
        </button>
      </div>
    </form>
  );
}
