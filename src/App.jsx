import "./App.css";

export default function App() {
  return (
    <div className="container">
      <div className="top-bar">
        <div className="top-bar-inner">
          <div className="weather-currency">
            <span className="weather">☀ 29°C Toshkent</span>
            <span className="currency">USD : 12,179.85</span>
            <span className="currency">EUR : 14,053.38</span>
            <span className="currency">RUB : 166.54</span>
          </div>
          <div className="top-actions">
            <span>O'zbekcha</span>
          </div>
        </div>
      </div>

      <div className="header">
        <div className="header-inner">
          <div className="logo">
            <span className="logo-text">Daryo</span>
          </div>
          <div className="nav">
            <ul>
              <li className="active">O'zbekiston</li>
              <li>Markaziy Osiyo</li>
              <li>Dunyo</li>
              <li>Pul</li>
              <li>Madaniyat</li>
              <li>Sport</li>
              <li>Layfstayl</li>
            </ul>
          </div>
          <div className="header-right">
            <span className="search-icon">🔍</span>
            <button className="btn-cabinet">Kabinet</button>
          </div>
        </div>
      </div>

      <div className="main-content">
        <div className="left-side">
          <div className="main-news">
            <div className="main-news-img">
              <img
                src="https://picsum.photos/600/350?random=11"
                alt="Feature"
              />
            </div>
            <div className="main-news-info">
              <h2>
                AQSH Eron bilan muzokaralarda bir haftalik tanaffus e'lon qildi
              </h2>
              <p>
                AQSH prezidenti Donald Tramp Eron oliy rahnamosi Ali Xomaneyning
                dafn marosimi munosabati bilan Vashington Tehron bilan olib
                borilayotgan muzokaralarda bir haftalik tanaffus e'lon qilganini
                ma'lum qildi...
              </p>
              <span className="date">📅 Bugun, 10:52</span>
            </div>
          </div>

          <div className="sub-news-list">
            <div className="sub-card">
              <img src="https://picsum.photos/150/100?random=1" alt="Sub" />
              <h4>
                "KAFOLAT sug'urta kompaniyasi" AJ – Xalqaro ishonchning yuqori
                darajasi
              </h4>
              <span className="tag-ad">Reklama</span>
            </div>
            <div className="sub-card">
              <img src="https://picsum.photos/150/100?random=2" alt="Sub" />
              <h4>Qashqadaryoda yuk mashinasi 9 ta avtomobilni urib ketdi</h4>
              <span className="tag-date">Bugun, 09:59</span>
            </div>
            <div className="sub-card">
              <img src="https://picsum.photos/150/100?random=3" alt="Sub" />
              <h4>
                Toshkentda IIB xodimi va kursant cho'kayotgan yigitni qutqarib
                qoldi
              </h4>
              <span className="tag-date">Kecha, 21:52</span>
            </div>
            <div className="sub-card">
              <img src="https://picsum.photos/150/100?random=4" alt="Sub" />
              <h4>Xalq banking xalqaro reytinglari ko'tarildi</h4>
              <span className="tag-ad">Reklama</span>
            </div>
          </div>

          <div className="block-category">
            <h3 className="title-block">O'zbekiston</h3>
            <div className="category-content">
              <div className="big-item">
                <img
                  src="https://picsum.photos/300/180?random=12"
                  alt="Uzbekistan News"
                />
                <h4>
                  Toshkentda itlarni tayoq bilan urib o'ldirgan veterinar 7
                  sutka qamaldi
                </h4>
                <p>
                  Fuqaroga jonivorlarga nisbatan zo'ravonlik qilishda yordam
                  bergan ikki shaxs esa bazaviy hisoblash miqdorining 10
                  baravari miqdorida jarimaga tortilgan...
                </p>
              </div>
              <div className="small-list">
                <div className="small-item">
                  <img
                    src="https://picsum.photos/100/70?random=5"
                    alt="thumb"
                  />
                  <div>
                    <h5>Toshkentdagi "O'rikzor" bozorida yong'in chiqdi</h5>
                    <span className="tag-date">Bugun, 08:47</span>
                  </div>
                </div>
                <div className="small-item">
                  <img
                    src="https://picsum.photos/100/70?random=6"
                    alt="thumb"
                  />
                  <div>
                    <h5>
                      Qurilish sohasidagi normativ hujjatlarni ishlab chiqish
                      tartibi belgilandi
                    </h5>
                    <span className="tag-date">Bugun, 07:50</span>
                  </div>
                </div>
                <div className="small-item">
                  <img
                    src="https://picsum.photos/100/70?random=7"
                    alt="thumb"
                  />
                  <div>
                    <h5>
                      Navoiyda uch kishining o'limiga sabab bo'lgan avtobus
                      haydovchisiga hukm o'qildi
                    </h5>
                    <span className="tag-date">Kecha, 23:33</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="video-box">
            <div className="video-content">
              <span className="play-icon">▶</span>
              <h4>"Hantavirusga qarshi vaksina yo'q" — Nurmat Otabekov</h4>
            </div>
          </div>
        </div>

        <div className="right-side">
          <div className="widget">
            <h3 className="widget-title">So'nggi yangiliklar</h3>
            <ul className="side-list">
              <li>
                <p>
                  Qorinni yo'qotadi, metabolizmni tezlashtiradi: ortiqcha
                  yog'larni eritish xususiyatiga ega bo'lgan ko'katlar
                </p>
                <span>Bugun, 11:30</span>
              </li>
              <li>
                <p>
                  Toshkentda itlarni tayoq bilan urib o'ldirgan veterinar 7
                  sutka qamaldi
                </p>
                <span>Bugun, 11:15</span>
              </li>
              <li>
                <p>
                  Misrlik himoyachi g'aroyib natija evaziga Jahon chempionatlari
                  tarixiga kirdi
                </p>
                <span>Bugun, 11:05</span>
              </li>
              <li>
                <p>
                  AQSH Eron bilan muzokaralarda bir haftalik tanaffus e'lon
                  qildi
                </p>
                <span>Bugun, 10:52</span>
              </li>
              <li>
                <p>
                  Eron AQSH va Isroil zarbalari oqibatida zarar ko'rgan YUNESKO
                  merosi obyektlarini namoyish etdi (foto)
                </p>
                <span>Bugun, 10:31</span>
              </li>
              <li>
                <p>
                  Turkiyaning ajoyib manzaralarida suratga olingan mashhur
                  seriallar (foto)
                </p>
                <span>Bugun, 10:23</span>
              </li>
            </ul>
          </div>

          <div className="widget">
            <h3 className="widget-title">Mashhur teglar</h3>
            <div className="tag-cloud">
              <span>Dunyo</span>
              <span>O'zbekiston</span>
              <span>Iqtisodiyot</span>
              <span>Sport</span>
              <span>Pul</span>
              <span>Texnologiya</span>
              <span>Futbol</span>
              <span>Kino</span>
            </div>
          </div>
        </div>
      </div>

      <div className="footer">
        <p>© «Simple Networking Solutions» MCHJ, 2013-2026</p>
        <p>
          "Daryo" internet-nashrining O'zbekiston matbuot va axborot agentligi
          tomonidan ro'yxatga olinganligi to'g'risidagi guvohnoma.
        </p>
      </div>
    </div>
  );
}
