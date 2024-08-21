import React, { useState } from 'react';
import '../styles/Left-sidebar.css';

import frame1 from '../images/Storke.svg';
import icon1 from '../images/1.svg';
import icon2 from '../images/2.svg';
import icon3 from '../images/3.svg'; 
import icon4 from '../images/4.svg'; 
import icon5 from '../images/5.svg';
import icon6 from '../images/6.svg'; 
import icon7 from '../images/7.svg';  
import icon8 from '../images/8.svg'; 
import icon9 from '../images/9.svg'; 
import icon10 from '../images/10.svg'; 
import icon11 from '../images/11.svg'; 
import icon12 from '../images/12.svg'; 
import icon13 from '../images/13.svg'; 
import icon14 from '../images/14.svg'; 
import icon15 from '../images/15.svg'; 
const categories = [
  { title: 'Ноутбуки та комп\'ютери', icon: icon1, links: [{ href: '/laptops', text: 'Ноутбуки' }, { href: '/computers', text: 'Комп\'ютери' }] },
  { title: 'Смартфони, ТВ', icon: icon2, links: [{ href: '/smartphones', text: 'Смартфони' }, { href: '/tv', text: 'Телевізори' }] },
  { title: 'Побутова техніка', icon: icon3, links: [{ href: '/home-appliances', text: 'Побутова техніка' }] },
  { title: 'Товари для дому', icon: icon4, links: [{ href: '/home-goods', text: 'Товар для дому' }] },
  { title: 'Автотовари', icon: icon5, links: [{ href: '/auto-goods', text: 'Автотовари' }] },
  { title: 'Сантехніка та ремонт', icon: icon6, links: [{ href: '/plumbing', text: 'Сантехніка' }, { href: '/repair', text: 'Ремонт' }] },
  { title: 'Дача, сад і город', icon: icon7, links: [{ href: '/garden', text: 'Дача' }, { href: '/garden', text: 'Сад' }] },
  { title: 'Спорт і захоплення', icon: icon8, links: [{ href: '/sports', text: 'Спорт' }, { href: '/hobbies', text: 'Захоплення' }] },
  { title: 'Одяг та взуття', icon: icon9,links: [{ href: '/clothes', text: 'Одяг' }, { href: '/shoes', text: 'Взуття' }] },
  { title: 'Краса та здоров\'я', icon: icon10, links: [{ href: '/beauty', text: 'Краса' }, { href: '/health', text: 'Здоров\'я' }] },
  { title: 'Дитячі товари', icon: icon11, links: [{ href: '/kids', text: 'Дитячі товари' }] },
  { title: 'Зоотовари', icon: icon12, links: [{ href: '/pets', text: 'Зоотовари' }] },
  { title: 'Офіс, школа, книги', icon: icon13, links: [{ href: '/office', text: 'Офіс' }, { href: '/school', text: 'Школа' }, { href: '/books', text: 'Книги' }] },
  { title: 'Напої та продукти', icon: icon14, links: [{ href: '/drinks', text: 'Напої' }, { href: '/food', text: 'Продукти' }] },
  { title: 'Побутова хімія', icon: icon15, links: [{ href: '/chemicals', text: 'Побутова хімія' }] }
];

function LeftSidebar() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="left-sidebar">
      <div className="header-category">
        <div className="category">Категорії</div>
      </div>
      <div className="categoryList">
        {categories.map((category, index) => (
          <div key={index} className='button_one'>
            <div
              className={`dropdown_button ${openIndex === index ? 'active' : ''}`}
              onClick={() => handleClick(index)}
            >
              <div className="dropdown_conteiner">
                <img src={category.icon} alt={`Icon for ${category.title}`} />
              </div>
              <span className="category-title">{category.title}</span>
              {openIndex === index && (
              <div className="dropdown-menu">
                {category.links.map((link, linkIndex) => (
                  <a href={link.href} key={linkIndex}>
                    {link.text}
                  </a>
                ))}
              </div>
            )}
              <div className="dropdown_conteiner">
                <img src={frame1} alt="Stroke" className={`arrow ${openIndex === index ? 'open' : ''}`} />
              </div>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
}

export default LeftSidebar;

