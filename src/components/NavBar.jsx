import React from "react";
import { Link, Router } from "react-router-dom";

const NavBar = () => {
  return (

    <div className="flex justify-between sticky top-0 left-0 z-30 py-6 bg-slate-500 px-40 mx-auto">
      <Link to="/" className="text-3xl font-bold text-cyan-400">
        E-Arena
      </Link>
      <ul className="flex justify-between items-center text-white">
        <li className="mx-3 text-lg">
          <Link to="/">E-Arena+</Link>
        </li>
        <li className="mx-3 text-lg">
          <Link to="/scheduler">Lịch thi đấu</Link>
        </li>
        <li className="mx-3 text-lg">
          <Link to="/">Khóa học</Link>
        </li>
        <li className="mx-3 text-lg">
          <Link to="/ranking">Xếp hạng</Link>
        </li>
        <li className="mx-3 text-lg">
          <Link to="/">Hỗ trợ</Link>
        </li>
        <li className="mx-3 text-lg">
          <Link to="/">Đăng nhập</Link>
        </li>
      </ul>
    </div>

  );
};

export default NavBar;
