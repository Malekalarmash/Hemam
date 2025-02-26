import React from 'react';

const Navbar = () => {
    const logo = {
        imageUrl: '../images/logo.svg',
    };
    return (
    <nav className="flex p-8 bg-transparent place-content-between w-full">   
        <div className='flex justify-end'>
            <img src={logo.imageUrl} alt="Hemam Logo" className="w-[66px] h-[50px]" />
         </div>  
        <ul className="flex space-x-6 rtl:space-x-reverse items-center">
            <li><a href="#home" className="text-right">الصفحة الرئيسية </a></li> 
            <li><a href="#opportunities" className="text-right">استكشف الفرص</a></li> 
            <li><a href="#organizations" className="text-right">المنظمات</a></li> 
            <li><a href="#portfolio" className="text-right">قصص نجاح</a></li>
            <li><a href="#contact" className="text-right">المتصدرين</a></li>
            <li className='mr-6'><a href="#blog" className="text-right ">تواصل معنا</a></li>
        </ul>
          <button className="signup-btn">تسجيل الدخول</button>           
    </nav>
        
    );
};
export default Navbar;