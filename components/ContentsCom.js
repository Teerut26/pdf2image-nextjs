import React from "react";

export default function ContentsCom() {
  return (
    <div className="w-full flex flex-wrap gap-3 justify-center ">
      <div className="w-96 h-96 bg-green-100 rounded-lg shadow p-3 flex flex-col gap-3">
        <div className="text-lg text-gray-600">
          เลือกไฟล์
        </div>
        <div>
          <input type="file" className="" />
        </div>
      </div>
      <div className="w-96 h-96 bg-green-100 rounded-lg shadow p-3 flex flex-col gap-3">
        <div className="text-lg text-gray-600">
          Result
        </div>
        <div>
          <input type="file" className="" />
        </div>
      </div>
    </div>
  );
}
