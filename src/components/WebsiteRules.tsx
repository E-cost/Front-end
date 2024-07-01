import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import styles from './styles/WebsitePolicy/WebsiteRules.module.scss'



export default function WebsiteRules() {
    const navigate = useNavigate();
    const {t} = useTranslation("global")
    
    return (
        <div className={styles.main}>
            <h1>{t("pages.website_policy_page.header")}</h1>
            <p>
                <br/><strong>1. Общие положения</strong>
                    <br/>1.1. Настоящие правила пользования сайтом (далее - Правила) разработаны Администрацией Сайта, являются соглашением между Администрацией Сайта и Пользователем, определяют условия использования сайта, а также права и обязанности Пользователей и Администрации Сайта.
                    <br/>1.2. Вся информация, представленная на сайте https://e-coast.ru, носит информационный характер и не является публичной офертой, определяемой положениями Ст. 437 ГК РФ. Информация о технических характеристиках товаров, указанная на сайте, может быть изменена производителем в одностороннем порядке. Изображения товаров, представленных на сайте, могут отличаться от оригиналов. Информация о цене, наличии и сроках поставки товара, указанная на сайте, может отличаться от фактической к моменту оформления заказа на товар.
                    <br/>1.3.Настоящие Правила могут быть изменены Администрацией Сайта в одностороннем порядке без уведомления Пользователей и вступают в силу с момента их опубликования. В таком случае внесенные изменения считаются принятыми Пользователем при первом после внесения таких изменений использовании сайта.
                        Актуальная версия всегда расположена на данной странице.
                        Для избежания споров, по поводу их изменения, Администратор Сайта рекомендует периодически ознакамливаться с содержимым Правил, расположенных на данной странице.
                        В случае несогласия Пользователя с настоящими Правилами или их обновлениями, Пользователь обязан отказаться от использования сайта, проинформировав об этом его Администрацию в установленном порядке.
                    <br/>1.4. Действующая редакция настоящих Правил размещена на сайте: https://e-coast.ru/
                <br/><strong>2. Термины и определения</strong>
                    В настоящих Правилах используются следующие понятия:
                    Администрация Сайта - уполномоченные сотрудники на управление Сайтом, действующие от имени ООО «Восточный берег» .
                    Пользователь - физическое лицо, обладающее надлежащей дееспособностью в соответствии с действующим законодательством Российской Федерации для совершения конклюдентных действий, и использующее сайт.
                    Персональные данные Пользователя — любая информация, относящаяся к прямо или косвенно определенному или определяемому физическому лицу (субъекту персональных данных), которым является Пользователь.
                    Сайт — сайт организации ООО «Восточный берег» , расположенный на доменном имени https://e-coast.ru/
                <br/><strong>3. Использование сайта</strong>
                    <br/>3.1. Использование сайта является добровольным и бесплатным. С момента начала использования сайта Пользователь и Администрация Сайта приобретают взаимные права и обязанности, связанные с использованием и функционированием сайта. Используя сайт, Пользователь соглашается проявлять уважение к Администрации Сайта и ко всем иным Пользователям сайта.
                    <br/>3.2. На различных страницах сайта Пользователь может вносить данные, установленные предложенными формами обратной связи. Указанные действия он осуществляет добровольно и в своих интересах. Внесением данных на сайте Пользователь выражает согласие с положениями настоящих Правил в соответствии со ст. 438 Гражданского кодекса Российской Федерации.
                    <br/>3.3. Администрация Сайта не проверяет достоверность указанной субъектом информации, а также его дееспособность, исходя из нормы законодательства о том, что добросовестность участников гражданских правоотношений и разумность их действий предполагаются.
                    <br/>3.4. Администратор Сайта вправе в одностороннем порядке ограничивать доступ Пользователя на Сайт, если будет обоснованно считать, что Пользователь ведет неправомерную деятельность.
                <br/><strong>4. Обработка персональных данных Пользователя</strong>
                    <br/>4.1. Обработка персональных данных Пользователей осуществляется в соответствии с законодательством Российской Федерации.
                    <br/>4.2. Пользователь дает свое согласие Администрации Сайта на:
                    использование файлов cookie, согласно Политике использования файлов cookie, размещенной по адресу: https://e-coast.ru/cookie
                    обработку своих персональных данных, указанных на Сайте согласно Политике обработки персональных данных, размещенной по адресу: : https://e-coast.ru/politika-pd/
                    <br/>4.3. Персональные данные Пользователей, которые они вносят на сайте, обрабатываются в целях:
                        <br/>— оказания услуг, оговоренных на сайте;
                        <br/>— функционирования различных сервисов сайта;
                        <br/>— приема и хранения обращений и сообщений от Пользователей;
                        <br/>— информирования Пользователей о деятельности Администрации Сайта;
                        <br/>— формирования базы данных о Пользователях сайта;
                        <br/>— оказания иных услуг в рамках деятельности Администрации Сайта;
                        <br/>— выполнения Администрацией Сайта функций и обязанностей, установленных законодательством.
                    <br/>4.4. Оставаясь полностью ответственной за действия третьих лиц, Администрация Сайта вправе привлекать их к исполнению своих обязательств в рамках деятельности и оказания услуг, указанных на сайте, в том числе, если это потребуется и только в рамках настоящих Правил, осуществлять им передачу персональных данных Пользователей в объеме, необходимом для исполнения договора.
                    <br/>4.5. Администрация Сайта имеет право направлять Пользователю информацию о деятельности сайта, в том числе рекламного характера при наличии согласия Пользователя. Пользователь вправе в любое время отказаться от такой рассылки путем направления письменного заявления по адресу Администрации Сайта, указанному в разделе Контакты.
                    <br/>4.6. С целью обеспечения безопасности и конфиденциальности персональных данных Администрация Сайта принимает необходимые и достаточные правовые, организационные и технические меры в соответствии с законодательством.
                    <br/>4.7. Срок обработки персональных данных ограничивается достижением конкретной цели. В частности, Администрация Сайта хранит и использует персональные данные Пользователей в течение неопределенного срока в целях формирования истории взаимоотношений с Пользователем и базы данных о Пользователях, а также для контроля за функционированием сайта. Срок обработки персональных данных может быть уменьшен по желанию Пользователя, который может направить Администрации Сайта заявление о прекращении обработки его персональных данных. Подобное заявление должно быть направлено Администрации Сайта в форме обратной связи в разделе Контакты — https://e-coast.ru/contacts
                <br/><strong>5. Права и обязанности Пользователя</strong>
                    <br/>5.1. Пользование сайтом осуществляется в соответствии с настоящими Правилами. Пользователь несет ответственность за любую информацию, размещенную им на сайте.
                    <br/>5.2. При использовании сайта Пользователь обязан:
                        <br/>— соблюдать положения действующего законодательства Российской Федерации, настоящих Правил и иных специальных документов Администрации Сайта;
                        <br/>— предоставлять достоверные, полные и актуальные данные, следить за их актуализацией;
                        <br/>— не размещать на сайте информацию и объекты (включая ссылки на них), которые могут нарушать права и интересы других лиц;
                        <br/>— перед размещением информации и объектов (включая, но не ограничиваясь, изображениями других лиц, чужими текстами различного содержания) предварительно оценивать законность их размещения.
                    <br/>5.3. В случае наличия сомнений в отношении законности осуществления тех или иных действий, в том числе, по размещению информации или предоставлению доступа, Администрация Сайта рекомендует воздержаться от осуществления последних.
                    <br/>5.4. Пользователю при использовании сайта запрещается:
                        <br/>5.4.1. Размещать информацию, которая:
                            <br/>— является незаконной, вредоносной, вульгарной или непристойной, клеветнической, содержит нецензурную лексику, нарушает права интеллектуальной собственности;
                            <br/>— пропагандирует фашизм, идеологию расового превосходства, ненависть и/или дискриминацию людей по расовому, этническому, религиозному, социальному, половому признакам, содержит элементы порнографии, детской эротики, или пропагандирует их, рекламирует интимные услуги, разъясняет порядок изготовления и использования наркотических, взрывчатых веществ или оружия;
                            <br/>— содержит угрозы, дискредитирует, оскорбляет, порочит честь, достоинство, деловую репутацию или нарушает неприкосновенность частной жизни других Пользователей или третьих лиц;
                            <br/>— нарушает права несовершеннолетних лиц;
                            <br/>— содержит сцены насилия, либо бесчеловечного обращения с животными;
                            <br/>— содержит описание средств и способов суицида, любое подстрекательство к его совершению;
                            <br/>— содержит экстремистские материалы;
                            <br/>— пропагандирует преступную деятельность или содержит советы, инструкции или руководство по совершению преступных действий, содержит информацию ограниченного доступа, включая, но не ограничиваясь, государственной и коммерческой тайной, информацией о частной жизни третьих лиц;
                            <br/>— содержит рекламу или описывает привлекательность употребления наркотических веществ, в том числе «цифровых наркотиков» (звуковых файлов, оказывающих воздействие на мозг человека за счет бинауральных ритмов), информацию о распространении наркотиков, рецепты их изготовления и советы по употреблению;
                            <br/>— носит мошеннический характер;
                            <br/>— а также нарушает иные права и интересы граждан и юридических лиц или требования законодательства Российской Федерации.
                    <br/>5.4.3. Незаконно загружать, хранить, публиковать, распространять и предоставлять доступ или иным образом использовать интеллектуальную собственность Пользователей и третьих лиц;
                    <br/>5.4.4. Использовать программное обеспечение и осуществлять действия, направленные на нарушение нормального функционирования сайта и его сервисов или персональных страниц Пользователей;
                    <br/>5.4.5. Загружать, хранить, публиковать, распространять и предоставлять доступ или иным образом использовать вирусы и другие вредоносные программы;
                    <br/>5.4.6. Воспроизводить, дублировать, копировать, продавать, осуществлять торговые операции и перепродавать услуги для каких-либо целей, за исключением случаев, когда такие действия были прямо разрешены Пользователю в соответствии с условиями отдельного соглашения с Администрацией Сайта;
                    <br/>5.4.7. Размещать любую другую информацию, которая, по мнению Администрации Сайта, является нежелательной, не соответствует целям создания сайта, ущемляет интересы Пользователей или по другим причинам является нежелательной для размещения на сайте.
                    <br/>5.5. Пользователь несет ответственность за любую информацию, которую размещает на сайте, сообщает другим Пользователям, а также за любые взаимодействия с другими Пользователями, осуществляемые на свой риск.
                    <br/>5.6. Пользователь несет ответственность за достоверность, актуальность, полноту, соответствие внесенных данных законодательству Российской Федерации, а также за нарушение прав третьих лиц.
                <br/><strong>6. Исключительные права на Электронный контент, размещенный на Сайте.</strong>
                    <br/>6.1. Все объекты (Электронный контент), размещенные на сайте, в том числе элементы дизайна, текст, графические изображения, иллюстрации, видео, скрипты, программы, музыка, звуки и другие объекты и их подборки (далее — Контент), являются объектами исключительных прав Администрации Сайта, и других правообладателей, все права на эти объекты защищены.
                    <br/>6.2. Кроме случаев, установленных настоящими Правилами, а также законодательством Российской Федерации, никакой Контент не может быть скопирован (воспроизведен), переработан, распространен, отображен во фрейме, опубликован, скачан, передан, продан или иным способом использован целиком или по частям без предварительного разрешения правообладателя, кроме случаев, когда правообладатель явным образом выразил свое согласие на свободное использование Контента любым лицом.
                    <br/>6.3. Администрация Сайта, размещая на сайте принадлежащий ей на законных основаниях Контент, предоставляет Пользователям неисключительное право на его использование путем просмотра, воспроизведения (в том числе копирования), переработку (в том числе на распечатку копий) и иные права исключительно с целью личного некоммерческого использования, кроме случаев, когда такое использование причиняет или может причинить вред охраняемым законом интересам правообладателя.
                    <br/>6.4. Использование Пользователем Контента, доступ к которому получен исключительно для личного некоммерческого использования, допускается при условии сохранения всех знаков авторства (копирайтов) или других уведомлений об авторстве, сохранения имени автора в неизменном виде, сохранении произведения в неизменном виде.
                    <br/>6.5. Любое использование сайта или Контента, кроме разрешенного в настоящих Правилах или в случае явно выраженного согласия правообладателя на такое использование, без предварительного письменного разрешения правообладателя, категорически запрещено.
                    <br/>6.6. Если иное явным образом не установлено в настоящих Правилах, ничто в настоящих Правилах не может быть рассмотрено как передача исключительных прав на Контент.
                    <br/>6.7. Пользователь несет личную ответственность за любой Контент или иную информацию, которые он загружает или иным образом доводит до всеобщего сведения (публикует) на сайте или с его помощью. Пользователь не имеет права загружать, передавать или публиковать Контент на сайте, если он не обладает соответствующими правами на совершение таких действий, приобретенными или переданными ему в соответствии с законодательством Российской Федерации.
                    <br/>6.8. Администрация Сайта может, но не обязана, просматривать сайт на наличие запрещенного Контента и может удалять или перемещать (без предупреждения) любой Контент или Пользователей по своему усмотрению, по любой причине или без причины, включая без всяких ограничений перемещение или удаление Контента, который, по мнению Администрации Сайта, нарушает настоящие Правила, законодательство Российской Федерации и/или может нарушать права, причинить вред или угрожать безопасности других Пользователей или третьих лиц.
                    <br/>6.9. Размещая свой Контент на cайте, Пользователь передает Администрации Сайта право делать копии своего Контента с целью упорядочения и облегчения публикации и хранения пользовательского Контента на сайте.
                    <br/>6.10. Размещая свой Контент в любой части cайта, Пользователь автоматически безвозмездно предоставляет Администрации Сайта неисключительное право на его использование путем копирования, публичного исполнения, воспроизведения, переработки, перевода и распространения для целей сайта или в связи с ними, в том числе для его популяризации. Для указанных целей Администрация Сайта может изготавливать производные произведения или вставлять Контент Пользователя в качестве составных частей в соответствующие сборники, совершать иные действия, служащие достижению указанных целей.
                    <br/>6.11. Если Пользователь удаляет свой Контент с сайта, права, упомянутые в п. 6.9, 6.10 Правил, будут автоматически отозваны, однако Администрация Сайта вправе сохранять архивные копии пользовательского Контента в течение неопределенного срока.
                <br/><strong>7. Сайты и Контент третьих лиц</strong>
                    <br/>7.1. Сайт содержит (или может содержать) ссылки на другие сайты в сети Интернет (сайты третьих лиц) так же, как и статьи, фотографии, иллюстрации, графические изображения, музыку, звуки, видео, информацию, приложения, программы и другой Контент, принадлежащий или исходящий от третьих лиц (Контент третьих лиц), являющийся результатом интеллектуальной деятельности и охраняемый в соответствии с законодательством Российской Федерации.
                    <br/>7.2. Указанные третьи лица и их Контент не проверяются Администрацией Сайта на соответствие каким-либо требованиям (достоверности, полноты, добросовестности и т.п.). Администрация Сайта не несет ответственность за любую информацию, размещенную на сайтах третьих лиц, к которым Пользователь получает доступ через сайт или через Контент третьих лиц.
                    <br/>7.3. Размещенные на сайте ссылки или руководства по скачиванию файлов и(или) установке программ третьих лиц не означают поддержки или одобрения этих действий со стороны Администрации Сайта.
                    <br/>7.4. Ссылка на любой сайт, продукт, услугу, любую информацию коммерческого или некоммерческого характера, размещенная на сайте, не является одобрением или рекомендацией данных продуктов (услуг) Администрацией Сайта.
                    <br/>7.5. Если Пользователь решил покинуть сайт и перейти к сайтам третьих лиц или использовать либо установить программы третьих лиц, он делает это на свой риск и с этого момента настоящие Правила более не распространяются на Пользователя. При дальнейших действиях Пользователю стоит руководствоваться применимыми нормами и политикой, в том числе деловыми обычаями тех лиц, чей Контент он собирается использовать.
                <br/><strong>8. Заключительные положения</strong>
                    <br/>8.1. Настоящие Правила являются соглашением между Пользователем и Администрацией Сайта относительно порядка использования сайта и его сервисов и заменяют собой все предыдущие соглашения между Пользователем и Администрацией Сайта;
                    <br/>8.2. Настоящие Правила регулируются и толкуются в соответствии с законодательством Российской Федерации. Вопросы, не урегулированные Правилами, подлежат разрешению в соответствии с законодательством Российской Федерации.
                    <br/>8.3. В случае возникновения любых споров или разногласий, связанных с исполнением настоящих Правил, Пользователь и Администрация Сайта приложат все усилия для их разрешения путем проведения переговоров между ними. В случае, если споры не будут разрешены путем переговоров, подлежит соблюдению претензионный порядок. Срок ответа на претензию - 10 календарных дней. Претензия должна быть направлена в письменной форме в адрес Администрации Сайта. В случае недостижения согласия споры подлежат разрешению в судебном порядке, установленном законодательством Российской Федерации.
                <br/><strong>9. Сведения об ООО «Восточный берег»</strong>
                <br/>Юридический адрес: 688713 Камчатский край, Карагинский р-н, с. Ивашка, ул. Береговая, 2
                <br/>ИНН 8203002223
                <br/>ОГРН 1024101419253
            </p>
            <button className={`btn btn-primary btn_inside ${styles.btn_width}`} type="button" onClick={() => navigate(-1)}>
                
                {t("buttons.back")}
            </button>
        </div>
    )
}