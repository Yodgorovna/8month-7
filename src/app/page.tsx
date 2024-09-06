import React from "react";
import { FaHeart } from "react-icons/fa";
import ProductList from "./Product/page";

export default function Home() {
  return (
    <div>
      <section className="pb-[50px]">
        <div className="container mx-auto mt-10">
          <div className="flex gap-10 items-center">
            <div>
              <ul className="flex bg-[url('/home-img.svg')] bg-cover bg-center pt-[33px] pb-[20px] pl-[20px] pr-[20px]">
                <li>
                  <p>Кўп ўқилаётганлар</p>
                  <img src="/home-img2.svg" alt="img" />
                </li>
                <li>
                  <img src="/home-img3.svg" alt="img" />
                  <p className="text-center">1984</p>
                </li>
                <li>
                  <img src="/home-img4.svg" alt="img" />
                  <p className="text-center">Code 8</p>
                </li>
                <li>
                  <img src="/home-img5.svg" alt="img" />
                  <p className="text-center">Rich dad poor dad</p>
                </li>
              </ul>
            </div>
            <div className="p-8 bg-[#3838cb] w-[270px] rounded-2xl">
              <h1 className="text-center text-white font-bold mb-[20px]">
                Китоб ўқишни ёқтирасизми?
              </h1>
              <p className="text-center text-white mb-[70px]">
                Унда пулингизни тежаш учун ўзингиз йоқтирган рукнга обуна бўлинг
              </p>
              <button className="flex items-center justify-center gap-2 w-full bg-white text-[#2f88db] p-4 rounded-2xl text-center hover:bg-gray-200">
                <FaHeart className="text-red-500" />
                Обуна бўлиш
              </button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <ProductList />
      </section>
    </div>
  );
}
