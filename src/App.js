import { useEffect, useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { FaFacebook, FaYoutube, FaXTwitter } from "react-icons/fa";
import aboutImage from "./assets/about-image.jpg";
import missionImage from "./assets/mission-image.jpg";
import "./styles.css";

export default function CharityPage() {
  useEffect(() => {
    document.title = "Blessed";
  }, []);

  const [modalContent, setModalContent] = useState(null);

  const openModal = (content) => {
    setModalContent(content);
  };

  const closeModal = () => {
    setModalContent(null);
  };

  return (
    <div className="charity-container">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="container">
          <div className="nav-links">
              
              <Link to="about" smooth={true} duration={500} className="nav-link">Повод</Link>
              <Link to="mission" smooth={true} duration={500} className="nav-link">Призив</Link>
              <Link to="contact" smooth={true} duration={500} className="nav-link">Контакти</Link>
              <Link to="join" smooth={true} duration={500} className="nav-link">Включи се</Link>
          </div>
        </div>
      </nav>

      {/* Sections */}
      <section id="home" className="section home">
        <div className="content">
          <div className="text">
            <h2>Инициатива БлаженИ</h2>
            <p>„Заради братята и другарите си ще кажа сега: Мир да е в тебе!“ Псалм 122:8</p>
          </div>
        </div>
      </section>

      <section id="about" className="section about">
        <div className="content">
          <div className="text">
            <h2>ПОВОД</h2>
            <p>На 06.08.2024 на 73-тото си годишно събрание, проведено във Финландия...</p>
            <button className="read-more-btn" onClick={() => openModal(`На 06.08.2024 на 73-тото си годишно събрание, проведено във Финландия, 
                    международната федерация на медицинските студентски асоциации (IFMSA) гласува с
                    мнозинство изключването на Израел от редиците си като пълноправен член. По-скоро
                    повод от колкото причина за изключването са редица неизяснени обвинения срещу
                    израелските делегати /1/. IFMSA извърши това гласуване и изключване неправомерно, в
                    разрез със собствения си устав /2, 3/. Абревиатури - IFMSA (International Federation of medical student associations,
                    международна федерация на медицинските студентски асоциации), PMSA (Palestinian
                    Medical student's association, палестинска асоциация на медицинските студенти), АСМБ
                    (Асоциация на студентите-медици в България)
                    Това е кулминация на дискриминационните практики срещу Израел на тази организация.
                    IFMSA пренебрегва и до днес призивите за вземане на отношение по повод клането на
                    7-ми октомври 2023 край ивицата Газа /4, 5/. Палестинската делегация PMSA в свое
                    публично изявление оплакваха жертви на войната в Газа и същевременно оправдаваха
                    убиването на цивилни невъоръжени израилтяни и чужденци от Хамас /6/. Това отново не
                    бе повод на IFMSA да влезе в роля. Напротив тя игнорира и така подкрепи този
                    антисемитизъм на свои членове, и със закъснение изяви загриженост за нарастващата
                    хуманитарна криза в Газа /7/.
                    Делегацията на България (АСМБ), както и тези на поне 20 други страни, гласуваха против
                    изключването на Израел на тази среща, на 06.08. Уви, мнозинството взе противно
                    решение. Така Израел беше свален от позицията си на пълноправен член на IFMSA /8/.
                    Мнозинството от международни делегати отпразнува това изключване с антисемитски
                    възгласи по думи на очевидци. IFMSA отново не защити израелските делегати от тази
                    явна проява на омраза и дискриминация. Призивите от представители на международни и
                    израелски медицински организации и на бивши дългогодишни лидери на IFMSA за
                    внимателно преразглеждане на това решение, честен процес и диалог бяха
                    пренебрегнати от ръководството на IFMSA /9, 10, 11, 12/.
                    Докато на делегатите на всички останали държави, включително и на България, им бе
                    позволено да договорят обменните програми за медицинските си студенти, за
                    израелските студенти страни за обмен изведнъж вече нямаше. Израел беше отделен и
                    отхвърлен от поредната международна организация, която е готова да потъпче
                    собствените си принципи с висша цел отхвърлянето на Израел, дългогодишен партньор.
                    „Братя мои, това не трябва да бъде така!“ (Яков 3:10). Инициативата БлаженИ възникна
                    като отговор и съпротива на всеразпростиращия се антисемитизъм и безразличието към
                    него, нахлули вече и сред медицинските среди и погазващи основни принципи на
                    работната етика и култура.
                `)} >Read More</button>
          </div>
          <div className="image right-on-desktop">
            <img src={aboutImage} alt="About Us" className="responsive-image" />
          </div>
        </div>
      </section>

      <section id="mission" className="section mission">
        <div className="content">
          <div className="text">
            <h2>ПРИЗИВ</h2>
            <p>„Заради братята и другарите си ще кажа сега: Мир да е в тебе!“ (Псалм 122:8)...</p>
            <button className="read-more-btn" onClick={() => openModal(`„Заради братята и другарите си ще кажа сега: Мир да е в тебе!“ (Псалм 122:8)...
                    „БлаженИ“ цели да бъдем блажени, да бъде блажен Израел, чрез възобновяване
                    на академичния обмен на израелските медицински студенти с България и други
                    страни. “БлаженИ” е призив да се разграничим от антисемитизма, нахлул вече и в
                    медицинските среди на подрастващото поколение. „Блажен оня човек, който не ходи по съвета на нечестивите...“ (Псалм 1:1).
                    Омразата към евреите е отново на мода сред международното общество. Ясната
                    медицинска етика остава на заден план в международни медицински организации,
                    като IFMSA, за да бъде последвано течението на дискриминация срещу Израел.
                    Нека не следваме това течение. Нека си спомним примера на дедите ни през
                    последния епизод на всестранен унищожаващ антисемитизъм през Втората
                    Световна Война. Те се противопоставиха успешно на „мощните съюзници“ при
                    спасяването на българските евреи през Втората световна война. Нека следваме
                    техния морален компас. Усилията ни нека не се изчерпят с едно добро отворено
                    писмо, коментар или споделяне в социалните мрежи. Нека бъдем всеотдайни за
                    доброто дело, подобно на митрополит Кирил. Когато 1943 г. вагоните за
                    депортиране пристигат в Пловдив да откарат евреите, той е готов и на релсите да
                    легне, за да не тръгнат. Така той спасява не само евреите, а и България от
                    съучастие в злодеянието на “мощните съюзници”. Днес е наш ред да бъдем
                    приятел в нужда на Израел, да застанем на тези релси, да не допуснем
                    дискриминация, унижение или унищожение на наши приятели и колеги!
                    /Тук може да сложиш снимка на митрополит Кирил от Пловдив, или друг подходящ
                    символ за народната съпротива през Втората Световна Война/
                    - „Да не следваш множеството да вършиш зло.“ (Изход 23:2). Дискриминацията
                    на политическа основа, етнос, религия и т.н. е несъвместима с медицинската етика
                    и професионализъм. Мнозинството на IFMSA явно потъпка тази етика. България е
                    член на тази организация чрез АСМБ. Нека не бъдем завлечени с мнозинството и
                    да бъдем превърнати в инструменти за дискриминация и антисемитизъм. Ние няма
                    да участваме да вършим зло, дори да е “демократично гласувано”. Нека останем
                    верни на лекарското си призвание и опазим честта на професията и народа си; и
                    така завещаем добър пример на следващото поколение медици.
                    - „Не въздържай доброто от ония, на които се дължи, когато ти дава ръка да
                    им го направиш.“ (Притчи 3:27). Медицината в Израел е на много високо ниво в
                    сравнение с медицината в редица други страни. Наши колеги поддържат
                    академични контакти с Израел, които са от полза за България. Редица наши и
                    други чуждестранни пациенти са лекувани и се лекуват в тази страна, когато
                    ресурсите на родното здравеопазване са недостатъчни. Израел заема важна роля
                    в подобряването на медицината в световен мащаб. От нейното развитие се
                    ползваме всички ние. Затова нека допринесем за развитието и обучението и на
                    техните медицински студенти; да сторим това, което е в силата ни, да вървим
                    заедно напред към благополучие.

                    - „Ако някой знае да прави добро и не го прави, негов грях е.“ (Яков 4:17).
                    Инициативата “БлаженИ” не е „добра кауза“, а е необходима стъпка на
                    медицинското съсловие в защита на достойнството и принципите на професията и
                    на развитието на родното и световно здравеопазване чрез поддържане на
                    академичен обмен с Израел. Ако един лекар съзнателно пропусне или забави
                    жизненоважна интервенция за своя пациент, той не е само пропуснал да направи
                    „добро дело“, той е извършил злодеяние с тежки последствия за пострадалите от
                    тази небрежност. Нека извършим това дело, инициативата “БлаженИ”, днес.
                    Последиците от алтернативата, въвличане и разпространяване на антисемитизма,
                    не са добри за никого`)}>Read More</button>
          </div>
          <div className="image right-on-desktop">
            <img src={missionImage} alt="Mission" className="responsive-image" />
          </div>
        </div>
      </section>

      <section id="contact" className="section contact">
        <div className="social-icons-container">
        </div>
        <div className="social-icons">
          <a href="https://www.facebook.com/profile.php?id=61565783195337" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="https://www.youtube.com/@%D0%91%D0%BB%D0%B0%D0%B6%D0%B5%D0%BD%D0%98-%D1%838%D0%BA" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
          <a href="https://x.com/blazheni24" target="_blank" rel="noopener noreferrer">
    <i className="fa-brands fa-x-twitter"></i>
</a>
        </div>
      </section>
      <section id="join" className="section join">
        <ul>
            <li><a href="Отворено%20писмо.pdf" target="_blank">Официална реакция на институциите</a></li>
            <li><a href="#">Участвай в обмен за 2 седмици</a></li>
            <li><a href="#">Университет желаещ да приеме обменни студенти</a></li>
            <li><a href="#">Дари</a></li>
        </ul>
      </section>


      {/* Modal */}
      {modalContent && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-button" onClick={closeModal}>&times;</span>
            <p>{modalContent}</p>
          </div>
        </div>
      )}
    </div>
  );
}
