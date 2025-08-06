const questions = [
    {
        question: "Вкажіть Вашу стать:",
        options: [
            "Чоловік",
            "Жінка",
            "Інше",
        ],
        score: [50, 50, 50]
    },
    {
        question: "Вкажіть Ваш вік: ",
        options: [
            "До 18",
            "18-25",
            "26-40",
            "41-60",
            "60+"
        ],
        score: [50, 50, 50, 50, 50]
    },
    {
        question: "Оберіть Вашу країну громадянства:",
        options: [
            "Україна",
            "Польща",
            "США",
            "Білорусь",
            "росія",
            "Німеччина",
            "Словаччина",
            "Литва",
            "Латвія",
            "Грузія",
            "інше"
        ],
        score: [300, 100, 100, 50, -2500, 100, 100, 100, 100, 100, 100]
    },
    {
        question: "Чи підтримуєте Ви путіна?",
        options: [
            "Так",
            "Ні, пішов він нахєр"
        ],
        score: [0, 300]
    },
    {
        question: "Яким видом спорту Ви займаєтесь?",
        options: [
            "Силові тренування (фітнес, тренажери, кросфіт)",
            "Кардіо (біг, вело, плавання, ходьба)",
            "Єдиноборства/бойові мистецтва",
            "Танці/аеробіка/йога",
            "Командні види (футбол, баскетбол тощо)",
            "Комбіную",
            "Не займаюсь спортом"
        ],
        score: [100, 100, 150, 100, 150, 170, 0]
    },
    {
        question: "Чи поважаєте Ви пса Патрона?",
        options: [
            "Так",
            "Ні"
        ],
        score: [50, 0]
    },
    {
        question: "Який Ваш улюблений супергерой",
        options: [
            "Людина-Павук",
            "Бетмен",
            "Супермен",
            "Тор",
            "Халк",
            "Залізна людина",
            "Дедпул",
            "Хтось інший"
        ],
        score: [20, 20, 10, 10, 15, 10, 15, 10]
    },
    {
        question: "Ваш улюблений жанр фільмів?",
        options: [
            "Фантастика",
            "Драма",
            "Комедія",
            "Жахи",
            "Бойовики",
            "Документальні"
        ],
        score: [25, 20, 25, 20, 20, 15]
    },
    {
        question: "Який з цих напоїв Вам найбільше імпонує?",
        options: [
            "Біола",
            "Живчик",
            "Квас Тарас",
            "Холодний чай",
            "Львівське Різдвяне",
            "Сік Садочок"
        ],
        score: [70, 150, 70, 70, 90, 80]
    },
    {
        question: "Яку суперсилу Ви хотіли б мати?",
        options: [
            "Читати думки",
            "Літати",
            "Стати невидимкою",
            "Телепортація",
            "Контроль часу",
            "Зцілення"
        ],
        score: [15, 20, 20, 20, 15, 15]
    },
    {
        question: "Який хімічний елемент має символ H?",
        options: [
            "Гелій",
            "Гідроген",
            "Гафній"
        ],
        score: [0, 20, 0]
    },
    {
        question: "Яку музику Ви слухаєте найчастіше?",
        options: [
            "Поп",
            "Рок/метал",
            "Хіп-хоп/реп",
            "Електронна",
            "Класична",
            "Не слухаю музику",
            "Я меломан"
        ],
        score: [10, 10, 10, 10, 8, 5, 20]
    },
    {
        question: "Яку соцмережу Ви використовуєте найчастіше?",
        options: [
            "Instagram",
            "Facebook",
            "TikTok",
            "Telegram",
            "YouTube",
            "Twitter (X)",
            "Twitch",
            "Snapchat",
            "Threads",
            "Discord",
            "Viber",
            "WhatsApp",
            "Signal",
            "Не використовую"
        ],
        score: [4, 3, 5, 5, 5, 3, 5, 2, 3, 4, 3, 5, 5, 1]
    },
    {
        question: "Як Ви зазвичай приймаєте рішення?",
        options: [
            "Інтуїтивно",
            "Довго думаю",
            "Питаю поради",
            "Кидаю монетку"
        ],
        score: [10, 10, 10, 10]
    },
    {
        question: "Де Ви народились?",
        options: [
            "Місто",
            "Село",
            "СМТ",
            "Не скажу"
        ],
        score: [15, 15, 15, 15]
    },
    {
        question: "Продовжіть речення: (путін...)",
        options: [
            "...прєзідєнт міра",
            "...х*йло"
        ],
        score: [0, 200]
    },
    {
        question: "Молодець👍. Чим ви зазвичай займаєтесь на вихідних?",
        options: [
            "Дивлюсь серіали/TikTok/YouTube",
            "Я не маю вихідних",
            "Проводжу час з друзями",
            "Саморозвиваюсь",
            "Інше"
        ],
        score: [50, 50, 70, 70, 50]
    },
    {
        question: "Чи знаєте Ви, в якому році була укладена Люблінська унія?",
        id: "lublin_union_main_question",
        options: [
            "Так, знаю",
            "Ні, не знаю"
        ],
        score: [0, 0], // Ці бали не впливають на загальний результат тут
        nextQuestionTextLogic: {
            "Так, знаю": "Перевіримо, чи справді ти знаєш: Коли саме?",
            "Ні, не знаю": "Ну можливо інтуїція щось підкаже: Оберіть рік наосліп."
        },
        isBranchingQuestion: true // Новий прапор, щоб ідентифікувати це питання
    },
    {
        // Питання для гілки "Так" з Люблінською унією
        question: "Перевіримо, чи справді ти знаєш: Коли саме?",
        id: "lublin_union_check",
        options: [
            "1569", // Правильна відповідь
            "1648",
            "1410",
            "1709"
        ],
        score: [0, 0, 0, 0],
        isBranchQuestion: true // Новий прапор для гілкових питань
    },
    {
        // Питання для гілки "Ні" з Люблінською унією
        question: "Ну можливо інтуїція щось підкаже: Оберіть рік наосліп.",
        id: "lublin_union_intuition",
        options: [
            "1569", // Правильна відповідь
            "1648",
            "1410",
            "1709"
        ],
        score: [0, 0, 0, 0],
        isBranchQuestion: true // Новий прапор для гілкових питань
    },
    {
        question: "Опишіть своє життя назвою фільму:",
        options: [
            "На межі",
            "Їсти, молитися, кохати",
            "Життя прекрасне",
            "День бабака",
            "Один вдома",
            "Дуже страшне кіно",
            "Самотній рейнджер",
            "Вперед і вгору",
            "Маленька міс Щастячко"
        ],
        score: [50, 50, 50, 50, 50, 50, 50, 50, 50]
    },
    {
        question: "Має зуби, а не їсть.",
        options: [
            "Ніж",
            "Гребінець",
            "Фея",
            "Акула"
        ],
        score: [0, 20, 0, 0]
    },
    {
        question: "Які Ви за типом особистості?",
        options: [
            "Екстраверт",
            "Інтроверт",
            "Амбіверт"
        ],
        score: [10, 10, 10]
    },
    {
        question: "Якщо на телебаченні могла залишитись тільки одна передача — яку б Ви обрали?",
        options: [
            "Говорить Україна",
            "Кохана, ми вбиваємо дітей",
            "Стосується кожного",
            "Мастер Шеф",
            "Холостяк",
            "Я соромлюсь свого тіла",
            "Аферисти в сітях",
            "Детектор брехні",
            "Ревізор"
        ],
        score: [10, 10, 10, 10, 10, 10, 10, 10, 10]
    },
    {
        question: "Оберіть ТРИ речі, які Ви взяли б із собою на безлюдний острів:",
        type: "multi-select", 
        minSelections: 3, 
        maxSelections: 3, 
        options: [
            "Ніж або мультитул",
            "Запальничка або сірники",
            "Ліхтарик",
            "Аптечка",
            "Книга",
            "Сонцезахисний крем",
            "Теплий одяг або ковдра",
            "Мобільний телефон",
            "Намет",
            "Фляга з водою або фільтр для води",
            "Рибальське приладдя"
        ],
        score: [25, 20, 20, 25, 20, 10, 15, 10, 20, 25, 20]
    },
    {
        question: "Ким Ви мріяли стати у дитинстві?",
        options: [
            "Космонавт",
            "У сфері здоров'я (лікар, стоматолог, ветеринар)",
            "У сфері мистецтва (художник, музикант, актор)",
            "У сфері науки (вчений, інженер, дослідник)",
            "У сфері спорту (спортсмен, тренер)",
            "У сфері техніки (програміст, механік, конструктор)",
            "У службах безпеки та порятунку (поліцейський, пожежник, рятувальник)"
        ],
        score: [20, 20, 20, 20, 20, 20, 20]
    },
    {
        question: "Слава Україні!",
        options: [
            "Героям слава!"
        ],
        score: [100]
    },
    {
        question: "Слава нації!",
        options: [
            "Смерть ворогам!"
        ],
        score: [100]
    },
    {
        question: "Україна!",
        options: [
            "Понад усе!"
        ],
        score: [100]
    },
    {
        question: "З ким Вам легше знаходити спільну мову?",
        options: [
            "З дівчатами (жінками)",
            "З хлопцями (чоловіками)",
            "Легко з усіма"
        ],
        score: [20, 20, 30]
    },
    {
        question: "У <<Слові о полку Ігоревім>> ідеться про",
        options: [
            "Один із походів руських князів на половців",
            "Монгольську навалу на руські князівства",
            "Розгром Хозарського каганату"
        ],
        score: [20, 0, 0]
    },
    {
        question: "Де, на Вашу думку, проходять цікавіші вихідні: у селі чи в місті?",
        options: [
            "Село",
            "Місто"
        ],
        score: [30, 15]
    },
    {
        question: "Чи викликали Ви в дитинстві туалетного гномика чи щось подібне?",
        options: [
            "Так",
            "Ні"
        ],
        score: [20, 0]
    },
    {
        question: "Одна шаурма Вам, чи дві наступному?",
        options: [
            "Одна мені",
            "Дві наступному"
        ],
        score: [10, 10]
    },
    {
        question: "Яким телефоном Ви користуєтесь?",
        options: [
            "iOS (iPhone)",
            "Android",
            "Обома",
            "Не користуюсь"
        ],
        score: [20, 20, 20, 20]
    },
    {
        question: "Хто Ви за знаком зодіаку?",
        options: [
            "Овен",
            "Телець",
            "Близнюки",
            "Рак",
            "Лев",
            "Діва",
            "Терези",
            "Скорпіон",
            "Стрілець",
            "Козоріг",
            "Водолій",
            "Риби"
        ],
        score: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]
    },
    {
        question: "У якому українському магазині Ви найчастіше купуєте продукти або всяке різне?",
        options: [
            "АТБ",
            "Сільпо",
            "ЕКО маркет",
            "Сільський магазин",
            "Епіцентр",
            "Фора",
            "Мегамаркет",
            "Інше"
            
        ],
        score: [20, 20, 20, 20, 20, 20, 20, 20]
    },
    {
        question: "Прочитайте анекдот і оберіть правильне закінчення: — Лікарю, в мене страшно болить спина, коли я прокидаюся зранку.",
        options: [
            "- Спробуйте не прокидатись - біль пройде.😂👍",
            "- А ви впевнені, що це не чужа спина?😂👍",
            "- А ви прокидайтесь в обід.😂👍",
            "- Це нормально, просто не треба  спати на пральній машині.😂👍"
        ],
        score: [0, 0, 50, 0]
    },
    {
        question: "Відгадайте, яке число я загадав?",
        options: [
            "5",
            "12",
            "3",
            "7",
            "8"
        ],
        score: [0, 0, 0, 20, 0]
    },
    {
        question: "З чиєю творчістю із запропонованих українських виконавців ви знайомі?",
        type: "multi-select",
        minSelections: 1,
        maxSelections: 6, 
        options: [
            "Бумбокс",
            "Скрябін",
            "Дорофєєва",
            "Монатік",
            "Океан Ельзи",
            "Плач Єремії"
        ],
        score: [20, 20, 20, 20, 20, 20] 
    },
    {
        question: "Сюрпрайз🎁 Просто оберіть скільки додаткових балів хочете собі додати.",
        options: [
            "+100",
            "+200",
            "+300",
            "+50",
            "+25"
        ],
        score: [100, 200, 300, 50, 25]
    },
    {
        question: "Відгадайте фільм за емодзі : 🚀👨🏻‍🚀🌌",
        options: [
            "Гравітація",
            "Інтерстеллар",
            "Марсіянин",
            "Перший на місяці"
        ],
        score: [0, 20, 0, 0]
    },
    {
        question: "Що з цього є одиницею вимірювання потужності?",
        options: [
            "Люменах",
            "Ватах",
            "Ват-годинах",
            "Джоулях",
            "Ньютонах"
        ],
        score: [0, 30, 0, 0, 0]
    },
    {
        question: "На кого з Черепашок-ніндзя Ви найбільше схожі за характером?",
        options: [
            "Леонардо - відповідальний, лідер",
            "Рафаель - впертий і емоційний",
            "Донателло - розумний і технічний",
            "Мікеланджело - веселий і життєрадісний"
        ],
        score: [20, 20, 20, 20]
    },
    {
        question: "Потужність - це для Вас більше про...",
        options: [
            "Внутрішню силу і впевненість",
            "Енергію та активність",
            "Вплив на оточення",
            "Здатність досягати великих цілей",
            "Фізичну міць і витривалість",
            "Вміння контролювати себе та ситуацію",
            "Те, коли потужнічаєш"
        ],
        score: [20, 20, 20, 20, 20, 20, 50]
    },
    {
        question: "Який із наведених дорожніх знаків встановлює мінімальну швидкість 50 км/год?",
        options: [
            { text: "А", score: 0, imageSrc: "images/ris1.png" },
            { text: "Б", score: 100, imageSrc: "images/ris2.png" },
            { text: "В", score: 0, imageSrc: "images/ris3.png" },
        ],
    },
    {
        question: "Двигуни корабля розвивають потужність 2 МВт. Визначте швидкість руху корабля, якщо сила опору води дорівнює 200 кН.",
        options: [
            "5 м/с",
            "10 м/с",
            "7 м/с",
            "12 м/с"
        ],
        score: [0, 50, 0, 0]
    },
    {
        question: "Норм чи стрьом: ставити з коханою/коханим парні аватарки в соцмережах?",
        options: [
            "Норм",
            "Стрьом"
        ],
        score: [10, 10]
    },
    {
        question: "Оберіть три марки авто, які Вам найбільше подобаються:",
        type: "multi-select", 
        minSelections: 1, 
        maxSelections: 3, 
        options: [
            "BMW",
            "Mercedes",
            "Audi",
            "Ford",
            "Toyota",
            "Honda",
            "Volkswagen",
            "Nissan",
            "Hyundai",
            "Kia",
            "Mazda",
            "Subaru",
            "Jeep",
            "Land Rover",
            "Chevrolet",
            "Lexus",
            "Porsche",
            "Renault",
            "Suzuki",
            "Fiat",
            "Volvo",
            "Alfa Romeo",
            "Mitsubishi",
            "Daewoo Lanos",
            "Skoda",
            "інше"
        ],
        score: [15, 15, 20, 15, 20, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 20, 20, 10]
    },
    {
        question: "Яка Ваша робоча (більш фотогієнічна) сторона?",
        options: [
            "Права",
            "Ліва",
            "Я гарний(а) на 360° "
        ],
        score: [15, 15, 20]
    },
    {
        question: "Який час доби для Вас найпродуктивніший?",
        options: [
            "Ранок",
            "День",
            "Вечір",
            "Ніч"
        ],
        score: [20, 20, 20, 20]
    },
    {
        question: "Оратор на мітингу (9 букв, по вертикалі, 2-га буква <г>)",
        options: [
            "Ігдрасиль",
            "Агітатор",
            "Ігреневий",
            "Агрономія"
        ],
        score: [0, 10, 0, 0]
    },
    {
        question: "Хто тримає цей район?",
        options: [
            "Покемон",
            "Дракон",
            "Слон",
            "Дімон",
            "Баранчик Шон",
            "Пес Патрон",
            "Паралон"
        ],
        score: [0, 0, 0, 0, 0, 20, 0]
    },
    {
        question: "Чебурек чи сосиска в тісті?",
        options: [
            "Чебурек",
            "Сосиска в тісті"
        ],
        score: [30, 30]
    },
    {
        question: "Яким банком Ви користуєтесь найчастіше?",
        options: [
            "Монобанк",
            "Приват 24",
            "Абанк",
            "Ощадбанк",
            "Пумб",
            "Все в крипті"

        ],
        score: [55, 50, 40, 40, 40, 45]
    },
    {
        question: "Я не придумав сюди якогось питання, але змога заробити потужнобали є. Напишіть або подзвоніть близькій людині й скажіть: «Я тебе люблю». Це може бути мама, тато, бабуся, дідусь, Ваша половинка чи найкращий друг.  ",
        options: [
            "🫡Виконано",
            "Не виконано"
        ],
        score: [300, -100]
    },
    {
        question: "На скільки потужно Ви себе зараз почуваєте?",
        options: [
            "Максимально потужно",
            "Мінімально потужно",
            "Шото між"
        ],
        score: [100, 50, 75]
    },
    {
        question: "Який Ваш улюблений бренд одягу?",
        options: [
            { text: "", score: 0, imageSrc: "images/puma.png" },
            { text: "", score: 0, imageSrc: "images/nike.png" },
            { text: "", score: 100, imageSrc: "images/staff.png" },
            { text: "", score: 0, imageSrc: "images/adidas.png" },
            { text: "", score: 0, imageSrc: "images/zara.png" },
            { text: "", score: 0, imageSrc: "images/stone-island.png" },
        ],
    },
    {
        question: "Який з цих батончиків Вам більше до смаку?",
        options: [
            "KitKat",
            "Snickers",
            "Lion",
            "Bounty",
            "Twix",
            "Nuts",
            "Mars",
            "Picnic",
            "Milka Oreo",
            "Roshen"
        ],
        score: [10, 15, 20, 20, 35, 15, 15, 10, 20, 35]
    },
    {
        question: "Звідки Ви дізнались про Потужнометр?",
        options: [
            "Випадково знайшов(ла) в Google",
            "Із соціальних мереж",
            "Від друга/подруги",
            "Від блогера"
        ],
        score: [20, 20, 20, 20]
    },
    {
        question: "Наскільки чесно ви відповідали на всі попередні запитання?",
        options: [
            "Абсолютно чесно",
            "В більшості випадків чесно",
            "Іноді трохи прикрашав(ла) відповіді",
            "Не чесно"
        ],
        score: [50, 30, 15, -50]
    },
    {
        question: "Чи вважаєте Ви, що автор зробив дійсно корисний і цікавий сайт?",
        options: [
           "Так, сайт вийшов потужний",
           "Ні, повний відстій" 
        ],
        score: [200, -100]
    },
];

let currentQuestionIndex = 0;
let totalScore = 0;
let displayQuestionCounter = 1;

// Розрахунок максимального можливого балу
function calculateMaxPossibleScore(questionsArray) {
    let maxScore = 0;
    questionsArray.forEach(q => {
        if (q.type === "multi-select") {
            // ЗМІНЕНО: Логіка для multi-select, яка враховує нову структуру options
            if (q.options.length > 0 && typeof q.options[0] === 'object' && q.options[0].score !== undefined) {
                const optionScores = q.options.map(opt => opt.score);
                const sortedScores = [...optionScores].sort((a, b) => b - a);
                for (let i = 0; i < q.maxSelections; i++) {
                    if (sortedScores[i] !== undefined) {
                        maxScore += sortedScores[i];
                    }
                }
            } else {
                // Старий формат: бали в окремому масиві q.score
                const sortedScores = [...q.score].sort((a, b) => b - a);
                for (let i = 0; i < q.maxSelections; i++) {
                    if (sortedScores[i] !== undefined) {
                        maxScore += sortedScores[i];
                    }
                }
            }
        } else if (!q.isBranchingQuestion && q.id !== "lublin_union_intuition") {
            // ЗМІНЕНО: Логіка для звичайних питань, враховує нову структуру options
            if (q.options.length > 0 && typeof q.options[0] === 'object' && q.options[0].score !== undefined) {
                maxScore += Math.max(...q.options.map(opt => opt.score));
            } else if (q.score && q.score.length > 0) {
                maxScore += Math.max(...q.score);
            }
        }
    });
    // Логіка для Lublin Union залишається, але також перевіряє нову структуру
    const lublinCheckQuestion = questionsArray.find(q => q.id === "lublin_union_check");
    if (lublinCheckQuestion) {
        if (lublinCheckQuestion.options.length > 0 && typeof lublinCheckQuestion.options[0] === 'object' && lublinCheckQuestion.options[0].score !== undefined) {
             maxScore += Math.max(...lublinCheckQuestion.options.map(opt => opt.score));
        } else if (lublinCheckQuestion.score && lublinCheckQuestion.score.length > 0) {
            maxScore += Math.max(...lublinCheckQuestion.score);
        }
    }
    return maxScore;
}

const maxPossibleScore = calculateMaxPossibleScore(questions);


// Отримуємо посилання на елементи HTML
const questionNumberElement = document.querySelector('.question-number');
const questionTextElement = document.querySelector('.question-text');
const optionsContainer = document.querySelector('.options');
const nextButton = document.querySelector('.next-button');

// Функція для відображення поточного питання
function displayQuestion() {
    optionsContainer.innerHTML = ''; // Очищаємо попередні варіанти відповідей

    const currentQuestion = questions[currentQuestionIndex];

    questionNumberElement.textContent = `Питання ${displayQuestionCounter}/${getTotalVisibleQuestions()}`;

    // Додаємо картинку до питання, якщо вона є
    let questionHtml = currentQuestion.question;
    if (currentQuestion.imageSrc) {
        questionHtml += `<br><img src="${currentQuestion.imageSrc}" alt="Зображення до питання" style="max-width:100%; height:auto; display:block; margin: 15px auto;">`;
    }
    questionTextElement.innerHTML = questionHtml; // Використовуємо innerHTML для відображення як тексту, так і картинки

    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.classList.add('option-button');

        let optionText = "";
        let optionScore = 0;
        let optionImageSrc = "";

        // ЗМІНЕНО: Перевіряємо, чи є варіант об'єктом, чи просто рядком
        if (typeof option === 'object' && option !== null && option.text !== undefined) {
            // Новий формат: option - це об'єкт
            optionText = option.text;
            optionScore = option.score !== undefined ? option.score : 0;
            optionImageSrc = option.imageSrc || "";
            button.dataset.score = optionScore; // Встановлюємо score з об'єкта варіанту
        } else {
            // Старий формат: option - це рядок, score береться з окремого масиву q.score
            optionText = option;
            optionScore = currentQuestion.score[index] !== undefined ? currentQuestion.score[index] : 0;
            button.dataset.score = optionScore; // Встановлюємо score з масиву q.score
        }

        // Формуємо вміст кнопки: картинка (якщо є) + текст
        let buttonContent = `<span>${optionText}</span>`;
        if (optionImageSrc) {
            buttonContent = `<img src="${optionImageSrc}" alt="${optionText}" style="max-width:60px; height:auto; display:block; margin: 5px auto;">` + buttonContent;
        }
        button.innerHTML = buttonContent; // Використовуємо innerHTML для відображення і картинки, і тексту

        button.dataset.questionIndex = currentQuestionIndex;
        button.dataset.optionIndex = index;
        optionsContainer.appendChild(button);

        if (currentQuestion.type === "multi-select") {
            button.classList.add('multi-select-option');
        }

        button.addEventListener('click', selectAnswer);
    });

    // Одразу перевіряємо, чи має бути активна кнопка "Наступне" для multi-select
    if (currentQuestion.type === "multi-select") {
        const currentlySelected = optionsContainer.querySelectorAll('.option-button.selected').length;
        if (currentlySelected >= currentQuestion.minSelections && currentlySelected <= currentQuestion.maxSelections) {
            nextButton.style.display = 'block';
        } else {
            nextButton.style.display = 'none';
        }
    } else {
        nextButton.style.display = 'none'; // За замовчуванням приховуємо для одиночного вибору
    }
}

// Функція для розрахунку загальної кількості "видимих" питань
function getTotalVisibleQuestions() {
    let count = 0;
    questions.forEach(q => {
        if (!q.isBranchQuestion) {
            count++;
        }
    });
    const branchQuestionsInArray = questions.filter(q => q.isBranchQuestion).length;
    const branchingMainQuestions = questions.filter(q => q.isBranchingQuestion).length;

    if (branchingMainQuestions > 0 && branchQuestionsInArray > 0) {
        return questions.length - (branchQuestionsInArray - branchingMainQuestions);
    }
    return questions.length;
}


// Функція, яка викликається при виборі відповіді
function selectAnswer(event) {
    // ЗМІНЕНО: Використовуємо event.currentTarget, щоб завжди посилатися на саму кнопку
    const selectedButton = event.currentTarget;
    const currentQuestion = questions[currentQuestionIndex];

    if (currentQuestion.type === "multi-select") {
        const currentlySelected = optionsContainer.querySelectorAll('.option-button.selected').length;

        if (selectedButton.classList.contains('selected')) {
            selectedButton.classList.remove('selected');
        } else {
            if (currentlySelected < currentQuestion.maxSelections) {
                selectedButton.classList.add('selected');
            } else {
                alert(`Ви можете обрати максимум ${currentQuestion.maxSelections} варіантів.`);
                return;
            }
        }

        const updatedSelectedCount = optionsContainer.querySelectorAll('.option-button.selected').length;
        if (updatedSelectedCount >= currentQuestion.minSelections && updatedSelectedCount <= currentQuestion.maxSelections) {
            nextButton.style.display = 'block';
        } else {
            nextButton.style.display = 'none';
        }
    } else {
        // Логіка для одиночного вибору
        document.querySelectorAll('.option-button').forEach(btn => {
            btn.classList.remove('selected');
        });
        selectedButton.classList.add('selected'); // Застосовуємо клас до коректної кнопки
        nextButton.style.display = 'block';
    }

    // Логіка для критичних питань (путін)
    const selectedScore = parseInt(selectedButton.dataset.score);
    const isCriticalPutinQuestion =
        currentQuestion.question === "Чи підтримуєте Ви путіна?" ||
        currentQuestion.question.includes("Продовжіть речення: (путін...)");

    if (isCriticalPutinQuestion && currentQuestion.type !== "multi-select" && selectedScore <= 0) {
        totalScore += selectedScore;
        endTestEarly(0);
        return;
    }
}

// Функція для переходу до наступного питання або завершення тесту
function goToNextQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    let selectedOptions = optionsContainer.querySelectorAll('.option-button.selected');

    if (currentQuestion.type === "multi-select") {
        if (selectedOptions.length < currentQuestion.minSelections || selectedOptions.length > currentQuestion.maxSelections) {
            let alertMessage = `Будь ласка, оберіть від ${currentQuestion.minSelections}`;
            if (currentQuestion.minSelections !== currentQuestion.maxSelections) {
                alertMessage += ` до ${currentQuestion.maxSelections}`;
            }
            alertMessage += ` варіант(-ів)!`;
            alert(alertMessage);
            return;
        }
        selectedOptions.forEach(option => {
            totalScore += parseInt(option.dataset.score);
        });
    } else {
        if (selectedOptions.length === 0) {
            alert('Будь ласка, оберіть відповідь!');
            return;
        }
        totalScore += parseInt(selectedOptions[0].dataset.score);
    }

    // Логіка розгалуження для Люблінської унії та перестрибування
    if (currentQuestion.id === "lublin_union_main_question") {
        const selectedOptionText = selectedOptions[0].textContent; // Тут поки беремо текст, для розгалуження він не змінився
        const nextQuestionText = currentQuestion.nextQuestionTextLogic[selectedOptionText];

        const nextQuestionObj = questions.find(q => q.question === nextQuestionText);
        if (nextQuestionObj) {
            currentQuestionIndex = questions.indexOf(nextQuestionObj);
        } else {
            console.warn(`Наступне питання для "${nextQuestionText}" не знайдено. Перехід до наступного за порядком.`);
            currentQuestionIndex++;
        }
        displayQuestionCounter++;
    } else if (currentQuestion.id === "lublin_union_check" || currentQuestion.id === "lublin_union_intuition") {
        const indexOfIntuitionQuestion = questions.findIndex(q => q.id === "lublin_union_intuition");
        if (indexOfIntuitionQuestion !== -1) {
            currentQuestionIndex = indexOfIntuitionQuestion + 1;
        } else {
            currentQuestionIndex++;
        }
        displayQuestionCounter++;
    } else {
        currentQuestionIndex++;
        displayQuestionCounter++;
    }

    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        endTestEarly(totalScore);
    }
}

function endTestEarly(finalResult) {
    localStorage.setItem('finalScore', finalResult);
    localStorage.setItem('maxPossibleScore', maxPossibleScore);
    window.location.href = 'result.html';
}

if (nextButton) {
    nextButton.addEventListener('click', goToNextQuestion);
}

if (window.location.pathname.includes('quiz.html')) {
    document.addEventListener('DOMContentLoaded', displayQuestion);
}