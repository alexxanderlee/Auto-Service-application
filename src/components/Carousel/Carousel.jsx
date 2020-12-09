import { useEffect } from "react";
import { Link } from 'react-router-dom';

import './Carousel.sass';

import { tirePng, diskPng, accessoriesPng, oilPng, cosmeticsPng, toolsPng } from '../../assets/images';

const items = [
    {
        id: 1,
        img: tirePng,
        alt: '',
        title: 'Шины',
        text: 'Ключевой элемент, гарантирующий безопасность и комфорт езды.'
    },
    {
        id: 2,
        img: diskPng,
        alt: '',
        title: 'Диски',
        text: 'Литые и  кованные диски, а также штамповки.'
    },
    {
        id: 3,
        img: oilPng,
        alt: '',
        title: 'Масла',
        text: 'Моторное и трансмиссное масла, а также технические жидкости.'
    },
    {
        id: 4,
        img: cosmeticsPng,
        alt: '',
        title: 'Автохимия и косметика',
        text: 'Для ремонта, для салона, для кузова и стекол.'
    },
    {
        id: 5,
        img: accessoriesPng,
        alt: '',
        title: 'Принадлежности для автомобиля',
        text: 'Автолампы, подшипники, ремни и многое другое.'
    },
    {
        id: 6,
        img: toolsPng,
        alt: '',
        title: 'Инструменты',
        text: 'Оборудование для автосервиса и гаража.'
    }
];


function Carousel() {
    useEffect(() => {
        const track = document.querySelector('.carousel_track');
        const item = document.querySelector('.carousel_item');
        const btnPrev = document.querySelector('.arrow_prev');
        const btnNext = document.querySelector('.arrow_next');

        const itemMarginLeft = parseInt(getComputedStyle(item).marginLeft);
        const itemMarginRight = parseInt(getComputedStyle(item).marginRight);
        const itemFullWidth = item.offsetWidth + itemMarginLeft + itemMarginRight;

        const itemsCount = document.querySelectorAll('.carousel_item').length;
        const itemsToShow = 2;
        const itemsToScroll = 2;

        const diffPosition = itemFullWidth * itemsToScroll;
        let position = 0;


        const setPosition = (position) => {
            track.style.transform = `translateX(${position}px)`;
        };

        const checkBtns = () => {
            btnPrev.disabled = position >= 0;
            btnNext.disabled = position <= -(itemFullWidth * (itemsCount - itemsToShow));
        };

        const handleBtnNextClick = () => {
            const itemsLeft = itemsCount - (Math.abs(position) + itemsToShow * itemFullWidth) / itemFullWidth;

            position -= itemsLeft >= itemsToScroll ? diffPosition : itemsLeft * itemFullWidth;
            setPosition(position);
            checkBtns();
        };

        const handleBtnPrevClick = () => {
            const itemsLeft = Math.abs(position) / itemFullWidth;

            position += itemsLeft >= itemsToScroll ? diffPosition : itemsLeft * itemFullWidth;
            setPosition(position);
            checkBtns();
        };

        btnPrev.addEventListener('click', handleBtnPrevClick);

        btnNext.addEventListener('click', handleBtnNextClick);

        checkBtns();

        return () => {
            btnPrev.removeEventListener('click', handleBtnPrevClick);
            btnNext.removeEventListener('click', handleBtnNextClick);
        };
    }, []);

    return (
        <div className="carousel">
            <button className="arrow_prev"></button>
            <div className="carousel_wrapper">
                <div className="carousel_track">
                    {items.map(({ id, img, alt, title, text}) => 
                        <Link key={id} className="carousel_item" to={'/shop/categories/' + id}>
                            <img src={img} alt={alt} className="carousel_item-img" />
                            <div className="carousel_item-title">{title}</div>
                            <div className="carousel_item-text">{text}</div>
                        </Link>
                    )}
                </div>
            </div>
            <button className="arrow_next"></button>
        </div>
    );
}

export default Carousel;