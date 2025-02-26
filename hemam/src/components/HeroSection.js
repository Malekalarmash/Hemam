import React from 'react';

const HeroSection = () => {
    const globe = {
        imageUrl: '../images/Globe.svg',
    };
    return (
        <div className="flex flex-col md:flex-row items-center p-10  gap-6">
            <div className="md:w-1/2 text-center md:text-right">
                <h1 className="text-4xl font-bold mb-4 rtl:space-x-reverse text-[#005364]">حيث يلتقي العطاء بالتغيير!</h1>
                <p className="text-lg mb-6 text-[#2C2C2C]">
                في قلب كل مجتمع، ينبض التغيير بفضل المتطوعين.
                كن شعلة الأمل وانضم إلى رحلة التطوع؛ فكل خطوة تُضيء الطريق نحو مستقبل أفضل.
                اجعل شغفك عطاءً يُغيّر مجتمعك، وتواصل لتُصنع الفارق في كل زاوية من حياتك.                
                </p>
                <button className="px-6 py-2 bg-[#005364] text-white rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
                اتحد معنا
                </button>
            </div>
            <div className="md:w-1/2 flex justify-end">
                <img src={globe.imageUrl} alt="Hero" className="" />
            </div>
        </div>
    );
};

export default HeroSection;