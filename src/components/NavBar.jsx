import React from "react";

const NavBar = () => {
  return (
    <div className="flex justify-between sticky top-0 left-0 z-30 py-6 bg-slate-500 px-40 mx-auto">
      <a href="/" className="text-3xl font-bold text-cyan-400">
        E-Arena
      </a>
      <ul className="flex justify-between items-center text-white">
        <li className="mx-3 text-lg"><a href="/">E-Arena+</a></li>
        <li className="mx-3 text-lg"><a href="/scheduler">Lịch thi đấu</a></li>
        <li className="mx-3 text-lg"><a href="/">Khóa học</a></li>
        <li className="mx-3 text-lg"><a href="/">Thư viện</a></li>
        <li className="mx-3 text-lg"><a href="/">Hỗ trợ</a></li>
        <li className="mx-3 text-lg"><a href="/">Đăng nhập</a></li>
      </ul>
    </div>
  );
};

export default NavBar;
