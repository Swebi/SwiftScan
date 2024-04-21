import React, { useState, useEffect } from "react";
import DemoPage from "./components/table/page";
import srmLogo from "./assets/srmlogo.svg";
import { Calendar } from "@/components/ui/calendar";
import { Textarea } from "@/components/ui/textarea";

const App = () => {
  const [currentDate, setCurrentDate] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const currentDateObj = new Date();
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const formattedDate = currentDateObj.toLocaleDateString(undefined, options);
    setCurrentDate(formattedDate);
  }, []);

  return (
    <div className="bg-gray-100 flex flex-col gap-16 pb-20 ">
      <div className="flex w-full justify-between bg-[#ffffff] rounded-b-[70px] border shadow-lg">
        <div className="">
          <svg
            width="300"
            height="200"
            viewBox="0 0 300 300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <image href={srmLogo} width="300" height="300" />
          </svg>
        </div>

        <div className="flex flex-col  text-right">
          <h1 className="text-5xl font-medium mt-16 mr-6 text-[#024DA1]">
            SwiftScan
          </h1>
          <h1 className="text-xl font-light  mr-6 ">
            Seamless Attendance Tracking
          </h1>
        </div>
      </div>
      <div className="flex flex-col gap-16 justify-between items-center w-full h-full px-10 bg-gray-100">
        <div className="flex w-[1042px] h-[355px]  justify-between">
          <div className="flex flex-col gap-4">
            <h1 className="text-5xl font-semibold ">Welcome Back! </h1>
            <h1 className="text-2xl font-normal">Today is {currentDate}</h1>
            <Textarea
              placeholder="Write Your Notes Here"
              className="resize-none mt-6	w-[500px] h-full"
            />
          </div>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border bg-white"
          />
        </div>
        <div className="max-w-[1042px]">
          <DemoPage />
        </div>
      </div>
    </div>
  );
};

export default App;
