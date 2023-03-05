import eyeIcon from '../../assets/Eye.svg';
import logoIcon from '../../assets/PAY2ME.svg';
import arrowLeftIcon from '../../assets/arrow-left.svg';
import arrowRightIcon from '../../assets/arrow-right.svg';
import elipse from '../../assets/ellipse.svg';
import svg from '../../assets/img.png';
import rusflagIcon from '../../assets/rusflag.svg';
import supportIcon from '../../assets/support.svg';

import './screen2.scss';

interface IScreen2Props {}

const Screen2: React.FunctionComponent<IScreen2Props> = props => {
  return (
    <div className="screen2">
      <div className="left-side-block">
        <header>
          <nav className="back-page">
            <img className="back-page__img" src={arrowLeftIcon} alt="стрелка влево" />
            <div className="back-page__text">Назад</div>
          </nav>
        </header>
        <main>
          <form className="form">
            <img src={logoIcon} alt="здесь изображено лого" className="form__logo" />
            <h1 className="form__title">Здравствуйте, Вадим!</h1>
            <p className="form__subtitle">Введите пароль для номера +7 (988) ****-**-45.</p>

            <label className="form__inpContainer">
              <input
                name="password"
                className="form__inpContainer__input"
                type="text"
                placeholder="Введите пароль"
              />
              <img
                className="form__inpContainer__showPassword"
                src={eyeIcon}
                alt="иконка скрытия пароля"
              />

              <button className="form__inpContainer__btn">
                <p className="inputContainer__btn__text">Далее</p>
                <img src={arrowRightIcon} alt="стрелка вправо" />
              </button>
            </label>

            <div className="form__registration">
              <p className="form__registration__quest">Это не мой номер.</p>
              <p className="form__registration__link">Сменить пользователя</p>
            </div>

            <div className="form__entry">
              <p className="form__entry__quest">Возникли проблемы со входом?</p>
              <p className="form__entry__quest_small">Проблемы со входом?</p>
              <p className="form__entry__link">Восстановить доступ</p>
            </div>
          </form>

          <div className="support">
            <p className="support__text">Нужна помощь?</p>
            <img className="support__ellipse" src={elipse} alt="" />
            <img className="support__img" src={supportIcon} alt="изображен чат поддержки" />
          </div>
        </main>

        <footer>
          <section>
            <div className="footer__company">© PAY2ME 2023</div>
            <div className="footer__rights">
              <p className="footer__rights_large">ООО «Куарми» ИНН 7743364603</p>
              <p className="footer__rights_small">ООО «Куарми» ИНН 7743364603</p>
              <p className="footer__rights_large">
                Юридический адрес 125445, Г. Москва, Ул. Беломорская, Д. 11, К. 1/290
              </p>
              <p className="footer__rights_small">Юридический адрес 125445, Г. Москва </p>
              <p className="footer__rights_small">Ул. Беломорская, Д. 11, К. 1/290</p>
            </div>

            <div className="footer__politicLang">
              <div className="footer__politicLang__politicWrapper">
                <p className="footer__politicLang__politic">Политика конфиденциальности</p>
                <p className="footer__politicLang__politic">Пользовательское соглашение</p>
              </div>

              <div className="footer__politicLang__langContainer">
                <img
                  className="langContainer__img"
                  src={rusflagIcon}
                  alt="изображение российского флага"
                />
                <p className="langContainer__text">Ru</p>
              </div>
            </div>
          </section>
        </footer>
      </div>
      <div className="right-side-block">
        <img src={svg} alt="здесь изображен функционал платформы" />
      </div>
    </div>
  );
};

export default Screen2;
