import React from 'react';

const Navbar = () => {
    const logo = {
        imageUrl: '../images/logo.svg',
    };
    return (
    <nav className="flex p-4 bg-transparent place-content-between w-full padding:8px">   
            <button className="signup-btn">تسجيل الدخول</button>    
        <ul className="flex space-x-6 rtl:space-x-reverse item-center">
            <li><a href="#contact" className="text-right">تواصل معنا</a></li>
            <li><a href="#contact" className="text-right">المتصدرين</a></li>
            <li><a href="#portfolio" className="text-right">قصص نجاح</a></li>
            <li><a href="#organizations" className="text-right">المنظمات</a></li>
            <li><a href="#opportunities" className="text-right">استكشف الفرص</a></li>
            <li><a href="#home" className="text-right">الصفحة الرئيسية </a></li>       
          </ul>
            <div className='flex justify-right'>
                <img src={logo.imageUrl} alt="Hemam Logo" className="w-66px h-50px" />
            </div>  
    </nav>
        
    );
};
export default Navbar;