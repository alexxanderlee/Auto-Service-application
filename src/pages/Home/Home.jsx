import { Link } from 'react-router-dom';

import './Home.sass';

import { Button, Carousel } from '../../components';
import { servicesPic1, servicesPic2, servicesPic3 } from '../../assets/images';
import { qualitySvg, safetySvg, moneySvg } from '../../assets/icons';


function Home() {
    return (
        <div className="content">
            <div className="promo">
                <div className="container">
                    <div className="promo_wrapper">
                        <h1 className="promo_title">За рулем с удовольствием</h1>
                        <div className="promo_text">Заказ услуг автосервиса и запчастей для ваших автомобилей в один клик!</div>
                        <Button onClickAction={() => alert('Клац!')}>Попробовать</Button>
                    </div>
                </div>
            </div>

            <section className="advantages">
                <div className="container">
                    <h2 className="title advantages_title">Почему выбирают наш автосервис?</h2>
                    <div className="advantages_wrapper">
                        <div className="advantages_item">
                            <div className="item_icon">
                                <img src={qualitySvg} alt="quality icon" />
                            </div>
                            <div className="item_descr">
                                <div className="item_title">Качество</div>
                                <div className="item_text">Специалисты высокого уровня и современное оборудование</div>
                            </div>
                        </div>
                        <div className="advantages_item">
                            <div className="item_icon">
                                <img src={safetySvg} alt="safety icon" />
                            </div>
                            <div className="item_descr">
                                <div className="item_title">Надежность</div>
                                <div className="item_text">Мы не боимся давать гарантию на свою работу</div>
                            </div>
                        </div>
                        <div className="advantages_item">
                            <div className="item_icon">
                                <img src={moneySvg} alt="money icon" />
                            </div>
                            <div className="item_descr">
                                <div className="item_title">Цены</div>
                                <div className="item_text">Честные цены, специальные предложения, акции и скидки</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="catalog">
                <div className="container">
                    <h2 className="title">Каталог автозапчастей</h2>
                    <Carousel/>
                </div>
            </section>

            <section className="services" id="services">
                <div className="container">
                    <h2 className="title">Услуги</h2>
                </div>
                <div className="services_item">
                    <div className="container">
                        <div className="services_item-wrapper">
                            <div className="services_item-title">Диагностика</div>
                            <div className="services_item-text">Мы осуществляем различные виды диагностики для ваших автомобилей.</div>
                        </div>
                    </div>
                    <img src={servicesPic1} alt="" className="services_item-img" />
                </div>
                <div className="services_item">
                    <div className="container">
                        <div className="services_item-wrapper second_wrapper">
                            <div className="services_item-title">Ремонт</div>
                            <div className="services_item-text">В нашем автосервисе вы можете также получить различные услуги по ремонту комплектующих: стартера и генератора, тормозной системы, рулевой рейки, ТНВД и форсунок, глушителей и ЭБУ.</div>
                        </div>
                    </div>
                    <img src={servicesPic2} alt="" className="services_item-img second_img" />
                </div>
                <div className="services_item">
                    <div className="container">
                        <div className="services_item-wrapper">
                            <div className="services_item-title">Прочие услуги</div>
                            <div className="services_item-text">В нашей автомастерской вы также можете заказать услуги по замене масла и заправку автокондиционера. Кроме того, с недавнего времени мы осуществляем выездной шиномонтаж!</div>
                        </div>
                    </div>
                    <img src={servicesPic3} alt="" className="services_item-img" />
                </div>
            </section>

            <section className="order">
                <h2 className="order_title">Заказать диагностику</h2>
                <div className="order_text">Выберите удобное вам время и зарезервируйте место в нашем автосервисе</div>
                <Link to="/services"><Button>Заказать</Button></Link>
            </section>

            <section className="contacts">
                <div className="container">
                    <div className="contacts_wrapper">
                        <div className="contacts_info">
                            <h2 className="title">Ждём вас</h2>
                            <div className="contacts_text">ул. Арбат, 1а, Москва<br />119019, Россия<br />info@mysite.ru<br />Телефон: +7 (495) 000-00-00</div>
                            <div className="contacts_text">ЧАСЫ РАБОТЫ:<br />ПН–ПТ: 7:00–22:00<br />СБ: 8:00–22:00<br />ВС: 8:00–23:00</div>
                        </div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.384801810973!2d37.5970479158284!3d55.75181738055314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a4d078690df%3A0x776cfe0f7ad0a8af!2z0YPQuy4g0JDRgNCx0LDRgiwgMdCwLCDQnNC-0YHQutCy0LAsIDExOTAxOQ!5e0!3m2!1sru!2sru!4v1604500228076!5m2!1sru!2sru" width="725" height="615" frameBorder="0" style={{border:0}} allowFullScreen="" aria-hidden="false" tabIndex="0" title="map" className="contacts_map"></iframe>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;