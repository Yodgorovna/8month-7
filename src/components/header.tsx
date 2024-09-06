"use client"; // Next.js uchun kerak

import React from "react";
import { FaSearch, FaChevronDown, FaUser } from "react-icons/fa";
import { MdLanguage } from "react-icons/md";

export const Header = () => {
  return (
    <div className=" py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img
            src="/header-logo.svg"
            alt="Liber Logo"
            className="h-10 cursor-pointer"
          />
        </div>
        <div className="flex items-center space-x-4">
          <div>
            <button className="flex py-2 px-10 border border-gray-300  items-center space-x-1 text-sm text-gray-800 font-medium hover:text-blue-600 ">
              <span>Рукнлар</span>
              <FaChevronDown className="w-4 h-4" />
            </button>
          </div>
          <div className="relative">
            <FaSearch className="absolute top-2.5 left-3 text-gray-400" />
            <input
              placeholder="Қидириш"
              type="text"
              className="w-[600px] pl-10 pr-4 py-2 border border-gray-300  text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button className="flex items-center px-4 py-2 text-sm text-blue-800 bg-blue-50 rounded-full focus:outline-none hover:bg-blue-800 hover:text-white">
            <MdLanguage className="mr-2" />
            Ўз
          </button>
          <button className="flex items-center px-4 py-2 text-sm text-blue-800 bg-blue-50 rounded-full focus:outline-none hover:bg-blue-800 hover:text-white">
            <FaUser className="mr-2" />
            Кириш
          </button>
        </div>
      </div>
      <div className="container mx-auto mt-4">
        <ul className="flex items-center gap-6 text-[#3F51B5] font-medium">
          <li className="hover:text-blue-600 cursor-pointer">Аудиокитоб</li>
          <li className="hover:text-blue-600 cursor-pointer">
            Электрон китоблар
          </li>
          <li className="hover:text-blue-600 cursor-pointer">Босма китоблар</li>
          <li className="hover:text-blue-600 cursor-pointer">Контакт</li>
          <li className="hover:text-blue-600 cursor-pointer">Биз хақимизда</li>
        </ul>
      </div>
    </div>
  );
};
