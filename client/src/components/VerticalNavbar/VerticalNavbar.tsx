import { SetStateAction, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, UserDropdown } from '..';
import arrowDown from '/svgs/arrowDown.svg';
import arrowUp from '/svgs/arrowUp.svg';

import camping from '/svgs/camping.svg';
import domo from '/svgs/domo.svg';
import fire from '/svgs/fire.svg';
import island from '/svgs/island.svg';
import mansion from '/svgs/mansion.svg';
import mountains from '/svgs/mountains.svg';
import t from '/svgs/t.svg';
import winter from '/svgs/winter.svg';
import Filters from './components/Filters';

const items = [
  {
    img: mansion,
    title: 'Mansion'
  },
  {
    img: mountains,
    title: 'Mountains'
  },
  {
    img: island,
    title: 'Island'
  },
  {
    img: domo,
    title: 'Domo'
  },
  {
    img: fire,
    title: 'Popular'
  },
  {
    img: winter,
    title: 'Winter'
  },
  {
    img: camping,
    title: 'Camping'
  }
];

const itemsPerPage = 7;

function VerticalNavbar() {
  const [activeItem, setActiveItem] = useState(0);
  const [open, setOpen] = useState(false)

  const handleItemClick = (index: SetStateAction<number>) => {
    setActiveItem(index);
  };

  const scrollUp = () => {
    setActiveItem((prevActiveItem) => (prevActiveItem > 0 ? prevActiveItem - 1 : prevActiveItem));
  };

  const scrollDown = () => {
    setActiveItem(prevActiveItem => {
      if (prevActiveItem < items.length - 1) {
        return prevActiveItem + 1;
      } else {
        return prevActiveItem;
      }
    });
  };

  const visibleItemsStartIndex = activeItem > items.length - itemsPerPage ? items.length - itemsPerPage : activeItem;
  const visibleItems = items.slice(visibleItemsStartIndex, visibleItemsStartIndex + itemsPerPage);

  return (
    <header className='sticky top-0 flex flex-col items-center pt-[40px]'>
      <Link to='/'>
        <img src={t} alt='' className='w-[40px]' />
      </Link>

      <nav className="h-full bg-white w-24 flex flex-col items-center gap-4 ml-4 mr-4 relative top-[15px] pt-5">
        <button onClick={scrollUp} className="cursor-pointer">
          <img src={arrowUp} alt="" className="w-[20px]" />
        </button>
        {visibleItems.map((item, index) => (
          <div
            className={`flex flex-col items-center gap-1 cursor-pointer ${
              visibleItemsStartIndex + index === activeItem ? 'text-[#FF385C]' : 'text-[#626262]'
            }`}
            key={index}
            onClick={() => handleItemClick(visibleItemsStartIndex + index)}
          >
            <img src={item.img} alt="" className='w-[40px]' />
            <span>{item.title}</span>
          </div>
        ))}
        <button onClick={scrollDown} className="cursor-pointer">
          <img src={arrowDown} alt="" className="w-[20px]" />
        </button>
        <Button
          className='flex flex-col items-center text-[#FF385C] border border-[#FF385C] p-2 w-[80px] rounded-3xl'
          onClick={() => setOpen(!open)}
        >
          Filtros
        </Button>
        {open && <Filters setOpen={setOpen} open={open} />}
        <UserDropdown className="cursor-pointer flex items-center border-2 hover:shadow-lg rounded-full px-3 py-1 gap-2" />
      </nav>
    </header>
  );
}


export default VerticalNavbar;
