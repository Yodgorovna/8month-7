import React from "react";

export const Footer = () => {
  return (
    <div className="pb-[20px]">
      <div>
        <div className="pt-[30px] pb-[60px] pl-[70px] pr-[250px] bg-blue-50">
          <ul className="container flex   justify-between">
            <li>
              <h1 className="mb-[14px]  text-[20px]">Платформа хақида</h1>
              <p className="mb-[18px]">Liber ўзи нима?</p>
              <p className="mb-[18px]">Фойдаланиш шартлари</p>
              <p>Ёрдам</p>
            </li>
            <li>
              <h1 className="mb-[14px] text-[20px]">Обуна хақида</h1>
              <p className="mb-[18px]">Обуна бўлиш</p>
              <p className="mb-[18px]">Қандай тўлаш</p>
            </li>
            <li>
              <h1 className="mb-[14px] text-[20px]">Китоблар</h1>
              <p className="mb-[18px]">Аудио китоблар</p>
              <p className="mb-[18px]">Электрон китоблар</p>
              <p>Китоблар</p>
            </li>
            <li>
              <h1 className="mb-[14px] text-[20px]">Мобил илова</h1>
              <img className="mb-[16px]" src="/home-icon6.svg" alt="icon" />
              <img src="/home-icon7.svg" alt="icon" />
            </li>
          </ul>
        </div>
        <div className="pt-[12px] pb-[34px] pl-[75px] pr-[400px] bg-[#10182C]">
          <ul className="container flex justify-between">
            <li>
              <h1 className="mb-[12px] text-[20px] text-white">
                Ижтимоий тармоқлар
              </h1>
              <a href="#">
                <img src="/home-icon8.svg" alt="icon" />
              </a>
            </li>
            <li>
              <h1 className="mb-[12px] text-[20px] text-white">Боғланиш</h1>
              <div className="flex gap-5">
                <p className="text-white">+998 90 253 77 53</p>
                <p className="text-white">support@liber.uz</p>
              </div>
            </li>
            <li>
              <h1 className="mb-[12px] text-[20px] text-white">
                Биз қабул қиламиз
              </h1>
              <div className="flex gap-3">
                <img src="/home-icon9.svg" alt="icon" />
                <img src="/home-icon10.svg" alt="icon" />
                <img src="/home-icon11.svg" alt="icon" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
