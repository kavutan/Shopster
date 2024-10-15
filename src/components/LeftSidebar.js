import React, { useState, useEffect, useRef } from 'react';
import '../styles/Left-sidebar.css';
import { PERENTCATEGORYCATEGORY, CATEGORY } from '../Constants/url.js';

// Імпорти іконок
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

const icons = [
  icon1,
  icon2,
  icon3,
  icon4,
  icon5,
  icon6,
  icon7,
  icon8,
  icon9,
  icon10,
  icon11,
  icon12,
  icon13,
  icon14,
  icon15,
];

function LeftSidebar() {
  const [categories, setCategories] = useState([]); // Батьківські категорії
  const [subCategories, setSubCategories] = useState([]); // Підкатегорії
  const [error, setError] = useState(null);
  const [openIndex, setOpenIndex] = useState(null);
  const sidebarRef = useRef(null);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setOpenIndex(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Функція для отримання батьківських категорій
  const fetchCategories = async () => {
    try {
      const response = await fetch(PERENTCATEGORYCATEGORY, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        setError('Помилка в отриманні даних з сервера');
        setCategories([]);
        return;
      }

      const data = await response.json();

      if (data && data.$values) {
        const parentCategories = data.$values.map(item => ({
          id: item.id,
          parentCategoryName: item.parentCategoryName,
          subCategories: [] // Ініціалізуємо порожній масив підкатегорій
        }));

        setCategories(parentCategories);
      } else {
        setCategories([]);
      }
    } catch (error) {
      setCategories([]);
      setError('Помилка запиту: ' + error.message);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  // Функція для отримання підкатегорій і прив'язки до батьківських категорій
  useEffect(() => {
    const fetchSubCategories = async () => {
      try {
        const response = await fetch(CATEGORY, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Помилка в отриманні даних категорій');
        }

        const data = await response.json();
        const dataString = JSON.stringify(data);

        const regex = /"id":(\d+),"categoryName":"(.*?)","parentCategoryId":(\d+)/g;
        let match;
        const extractedSubCategories = [];

        while ((match = regex.exec(dataString)) !== null) {
          const id = parseInt(match[1], 10);
          const categoryName = match[2];
          const parentCategoryId = parseInt(match[3], 10);

          extractedSubCategories.push({ id, categoryName, parentCategoryId });
        }

        // Додаємо підкатегорії до відповідних батьківських категорій
        setCategories(prevCategories => prevCategories.map(category => ({
          ...category,
          subCategories: extractedSubCategories.filter(subCategory => subCategory.parentCategoryId === category.id),
        })));
      } catch (error) {
        console.error('Помилка запиту підкатегорій:', error);
        setError('Помилка запиту підкатегорій: ' + error.message);
      }
    };

    fetchSubCategories();
  }, []);

  return (
    <div className="left-sidebar" ref={sidebarRef}>
      <div className="header-category">
        <div className="category">Категорії</div>
      </div>
      <div className="categoryList">
        {categories.map((category, index) => (
          <div key={index} className='button_one'>
            <button
              className={`dropdown_button ${openIndex === index ? 'active' : ''}`}
              onClick={() => handleClick(index)}>

              <div className="dropdown_conteiner">
                <img src={icons[index]} alt={`Icon for ${category.parentCategoryName}`} />
              </div>
              <span className="category-title">{category.parentCategoryName}</span>


              {openIndex === index && category.subCategories && category.subCategories.length > 0 && (
                 <div className="dropdown-menu">
                 {category.subCategories.map((subCategory) => (
                   <a 
                     href={`/category/${subCategory.id}`} // Змінити на потрібну URL структуру
                     key={subCategory.id}>
                     {subCategory.categoryName} {/* Текст лінка */}
                   </a>
                 ))}
               </div>
              )}

              <div className="dropdown_conteiner">
                <img src={frame1} alt="Stroke" className={`arrow ${openIndex === index ? 'open' : ''}`} />
              </div>
            </button>
          </div>
        ))}
      </div>

    </div>
  );
}

export default LeftSidebar;
