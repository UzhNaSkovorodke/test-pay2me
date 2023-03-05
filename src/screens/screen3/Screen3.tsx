import {useState} from 'react';

import eyeIcon from '../../assets/Eye.svg';
import logoIcon from '../../assets/PAY2ME.svg';
import arrowLeftIcon from '../../assets/arrow-left.svg';
import arrowRightIcon from '../../assets/arrow-right.svg';
import checkIcon from '../../assets/check.svg';
import elipse from '../../assets/ellipse.svg';
import eyeclosedIcon from '../../assets/eyeClosed.svg';
import svg from '../../assets/img.png';
import rusflagIcon from '../../assets/rusflag.svg';
import supportIcon from '../../assets/support.svg';

import './screen3.scss';

interface IScreen3Props {}

const Screen3: React.FunctionComponent<IScreen3Props> = props => {
  const [email, setEmail] = useState<string>('');
  const [isEmailFall, setIsEmailFall] = useState<boolean>(false);

  const [password, setPassword] = useState<string>('');
  const [isPasswordFall, setIsPasswordFall] = useState<boolean>(false);

  const [isPasswordHide, setIsPasswordHide] = useState<boolean>(true);

  const re = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;

  function checkHandler(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    if (email.match(re)) {
      setIsEmailFall(false);
    } else {
      setIsEmailFall(true);
    }

    if (password === '123') {
      setIsPasswordFall(false);
    } else {
      setIsPasswordFall(true);
    }
  }

  return (
    <div className="screen3">
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
            <h1 className="form__title">Что-то пошло не так</h1>
            <p className="form__subtitle">Вы ввели неверный логин или пароль.</p>

            <label>
              <div className="form__inpContainer">
                <input
                  className={`form__inpContainer__input input__email ${
                    isEmailFall && 'input__fall'
                  }`}
                  type="text"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="vadim111@mail.ru"
                />
                <img
                  src={checkIcon}
                  className="form__inpContainer__delete "
                  alt="сбросить почту"
                  onClick={() => setEmail('')}
                />
              </div>
              {isEmailFall && (
                <p className="form__alert alert_mail">
                  Возможно, электронная почта введена некорректно. Попробуйте ещё раз.
                </p>
              )}
            </label>

            <label>
              <div className="form__inpContainer input__password">
                <input
                  className={`form__inpContainer__input ${isPasswordFall && 'input__fall'}`}
                  type={isPasswordHide ? 'password' : 'text'}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="mynewpassword123"
                />
                <img
                  className="form__inpContainer__delete"
                  src={checkIcon}
                  alt="сбросить пароль"
                  onClick={() => setPassword('')}
                />
                <img
                  className="form__inpContainer__showPassword"
                  src={isPasswordHide ? eyeclosedIcon : eyeIcon}
                  alt="иконка скрытия пароля"
                  onClick={() => setIsPasswordHide(isPasswordHide ? false : true)}
                />
              </div>

              {isPasswordFall && (
                <p className="form__alert alert_password">
                  Возможно, пароль введён некорректно. Попробуйте ещё раз.
                </p>
              )}
            </label>

            <div>
              <button
                className={`form__inpContainer__btn ${
                  isEmailFall !== true && isPasswordFall !== true ? 'btn_active' : 'btn_disable'
                }`}
                onClick={e => checkHandler(e)}
              >
                <p className="inputContainer__btn__text">Далее</p>
                <img src={arrowRightIcon} alt="стрелка вправо" />
              </button>
            </div>

            <div className="form__entry">
              <p className="form__entry__quest">Возникли проблемы со входом?</p>
              <p className="form__entry__quest_small">Проблемы со входом?</p>
              <p className="form__entry__link">Восстановить доступ</p>
            </div>
            <div className="form__registration">
              <p className="form__registration__quest">У вас ещё нет аккаунта?</p>
              <p className="form__registration__link">Зарегистрироваться</p>
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

export default Screen3;
