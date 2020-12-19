import './Services.sass';

import { Button } from '../../components';

function Services() {
    return (
        <div className="content">
            <div className="header_bg"></div>
            <div className="bg">
                <div className="container">
                    <div className="wrapper">
                        <h2 className="subtitle">Заказать услугу</h2>
                        <form id="services_form" action="">
                            <div className="field_wrapper">
                                <div className="services_form_label">Шаг 1</div>
                                <div className="services_form_text">Выберите тип услуги автосервиса из выпадающего списка.</div>
                                <select name="services" className="services_form_field">
                                    <option disabled defaultValue>Тип услуги</option>
                                    <option value="">Диагностика</option>
                                    <option value="">Ремонт</option>
                                    <option value="">Прочее</option>
                                </select>
                            </div>
                            <div className="field_wrapper">
                                <div className="services_form_label">Шаг 2</div>
                                <div className="services_form_text">Выберите удобную вам дату из календаря.</div>
                                <input type="date" name="date" className="services_form_field" />
                                </div>
                            <div className="field_wrapper">
                                <div className="services_form_label">Шаг 3</div>
                                <div className="services_form_text">Выберите удобное для вас время из выпадающего списка.</div>
                                <input type="time" name="time" className="services_form_field" />
                            </div>
                        </form>
                        <Button>Отправить</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;