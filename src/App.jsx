import { useEffect, useState } from "react";
import "./App.css";

/* =====================================================================
   RAINBOW KIDS - Kindergarten + Pre School + Daycare (Riyadh)
   Website concept
   ---------------------------------------------------------------------
   - Single-file React app. Only dependency: React.
   - English + Arabic (RTL) with a language switch in the header,
     because most Riyadh parents will expect Arabic.
   - REAL content used: name, address, phone, Google rating (5.0 / 10
     reviews), review topics, and three real parent reviews (with the
     owner's reply) from Google Maps.
   - SAMPLE CONTENT, confirm with the nursery before launch: the Arabic
     name, age groups, daily schedule, opening days and closing time,
     safety points, admission steps, gallery photos.
   - To use real photos: add a `src` to any item in TILES below.
   - To make the enquiry form work: send `form` to Formspree / EmailJS /
     your backend inside onSubmit (see Contact component).
   ===================================================================== */

const CONTACT = {
  phoneDisplay: "+966 55 435 9143",
  phoneTel: "+966554359143",
  whatsapp: "966554359143",
  // Plus code from the Google Maps listing: MP95+V7 Al Murabba, Riyadh
  mapEmbed: "https://www.google.com/maps?q=MP95%2BV7%20Al%20Murabba%2C%20Riyadh&output=embed",
  mapLink: "https://www.google.com/maps/search/?api=1&query=MP95%2BV7%20Al%20Murabba%2C%20Riyadh",
};

/* ---------- Content (English + Arabic) ---------- */

const COPY = {
  en: {
    langButton: "العربية",
    langLabel: "Switch to Arabic",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    navLabel: "Main navigation",
    skip: "Skip to content",
    brand: "Rainbow Kids",
    brandInitial: "R",
    brandSub: "Kindergarten, Pre School and Daycare",
    enquire: "Enquire now",
    nav: { home: "Home", about: "About", programs: "Programs", gallery: "Gallery", admissions: "Admissions", contact: "Contact" },
    hero: {
      tag: "Kindergarten + Pre School + Daycare",
      titleLead: "Every little child is a ",
      titleHi: "rainbow",
      titleEnd: " waiting to shine",
      text: "Rainbow Kids is a warm, loving place in Al Murabba, Riyadh, where toddlers and young children learn gently, build confidence and feel at home with teachers who truly care.",
      primary: "Enquire now",
      secondary: "Book a visit",
      open: "Opens at 8:00 am",
      rating: "5.0 on Google",
      ratingSub: "10 happy parent reviews",
      stageLabel: "A rainbow arching over two clouds",
    },
    trust: [
      { icon: "heart", title: "A loving environment", text: "Children feel safe, welcome and cared for from the very first day." },
      { icon: "smile", title: "Gentle, patient teachers", text: "Parents describe our teachers as gentle, talented and always supportive." },
      { icon: "book", title: "Learning without pressure", text: "Children learn well at their own pace and never feel pushed." },
      { icon: "sparkle", title: "Confidence that grows", text: "Parents see better vocabulary, manners and confidence within months." },
    ],
    about: {
      title: "A first school that feels like a hug",
      text1:
        "The early years shape how a child feels about learning for life. At Rainbow Kids, every day is planned so children feel safe first, then free to explore, ask, play and make friends.",
      text2:
        "We keep our groups small and our routines calm, and we keep parents close, sharing what your child did and learned so home and school grow together.",
      safetyTitle: "Safety and care you can count on",
      safety: [
        "Supervised drop-off and pick-up every day",
        "Classrooms cleaned and sanitised daily",
        "Child-safe furniture, floors and play equipment",
        "Health and emergency details recorded for every child",
        "Regular updates for parents",
      ],
      areasTitle: "What children learn",
      areas: [
        { icon: "sun", title: "Play and movement", text: "Indoor and outdoor play builds balance, coordination and confidence." },
        { icon: "book", title: "Language and stories", text: "Songs, stories and conversation grow vocabulary and good manners." },
        { icon: "compass", title: "Discovery", text: "Simple science, sensory play and nature activities feed curiosity." },
        { icon: "pencil", title: "Creativity", text: "Painting, crafts and role play give every child a way to express themselves." },
      ],
    },
    programs: {
      title: "Three programs, one caring home",
      text: "Choose a program to see what the days look like.",
      tabsLabel: "Programs",
      focusTitle: "Focus areas",
      groups: [
        {
          name: "Daycare",
          age: "Toddlers, 1 to 3 years",
          text: "Gentle routines, cuddles and sensory play help our youngest children settle in and feel secure while parents are at work.",
          focus: ["Comfort and routine", "Sensory play", "First words and songs"],
        },
        {
          name: "Pre School",
          age: "3 to 4 years",
          text: "Circle time, pretend play and hands-on projects build language, independence and friendships.",
          focus: ["Language and manners", "Pre-writing skills", "Making friends"],
        },
        {
          name: "Kindergarten",
          age: "4 to 6 years",
          text: "Letters, numbers and teamwork prepare children, step by step, for a confident start in primary school.",
          focus: ["Letters and numbers", "Listening and focus", "Teamwork"],
        },
      ],
      dayTitle: "A day at Rainbow Kids",
      dayNote: "Sample schedule. Final times are confirmed at enrolment.",
      day: [
        { time: "8:00 am", label: "Welcome and free play" },
        { time: "9:00 am", label: "Breakfast and hand washing" },
        { time: "10:00 am", label: "Circle time and learning" },
        { time: "11:30 am", label: "Outdoor play" },
        { time: "12:30 pm", label: "Lunch and rest" },
        { time: "2:00 pm", label: "Art, crafts and pick-up" },
      ],
    },
    gallery: {
      title: "Life at Rainbow Kids",
      text: "A look at our classrooms and play areas.",
      filtersLabel: "Filter photos",
      filters: { all: "All", rooms: "Classrooms", outdoor: "Play areas", activities: "Activities" },
      tiles: ["Bright classroom", "Story corner", "Toddler room", "Play area", "Climbing and slides", "Art time", "Puzzle time", "Snack table"],
    },
    reviews: {
      title: "What parents say",
      text: "Real words from parents on Google Maps.",
      ratingLabel: "5.0 out of 5",
      count: "10 reviews",
      tagsTitle: "What parents mention most",
      tags: [
        { label: "Loving environment", count: 2 },
        { label: "Teachers", count: 2 },
        { label: "Toddlers", count: 2 },
        { label: "Academy for toddlers", count: 2 },
      ],
      source: "Google review",
      when: "6 months ago",
      reply: "Reply from Rainbow Kids",
      link: "Read all reviews on Google",
    },
    admissions: {
      title: "Joining Rainbow Kids",
      text: "Three simple steps from first hello to first day.",
      steps: [
        { title: "Send an enquiry", text: "Fill in the short form or message us on WhatsApp." },
        { title: "Visit the school", text: "Meet the teachers, see the classrooms and ask anything." },
        { title: "Welcome your child", text: "We guide you through registration, and your child settles in gently." },
      ],
    },
    contact: {
      title: "Visit us or send an enquiry",
      addressLabel: "Address",
      address: "Al Murabba, Riyadh 12626, Saudi Arabia",
      hoursLabel: "Opening hours",
      hours: "Sunday to Thursday, from 8:00 am",
      phoneLabel: "Phone",
      call: "Call now",
      whatsapp: "WhatsApp",
      directions: "Get directions",
      mapTitle: "Map showing Rainbow Kids in Al Murabba, Riyadh",
      form: {
        title: "Enquiry form",
        name: "Parent's name",
        phone: "Phone or WhatsApp",
        age: "Child's age",
        visit: "Preferred visit day",
        message: "Anything you'd like to ask?",
        submit: "Send enquiry",
        errName: "Please enter your name.",
        errPhone: "Please enter a valid phone number.",
        ages: ["1 to 2 years", "2 to 3 years", "3 to 4 years", "4 to 6 years"],
        days: ["Any day", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
        thanks: (n) => `Thank you, ${n}`,
        thanksText: "We've received your enquiry and will reply as soon as we can.",
        waSend: "Send these details on WhatsApp",
        again: "Send another enquiry",
        waTemplate: (n, a, d, m) => `Hello Rainbow Kids, I'm ${n}. My child is ${a}. Preferred visit: ${d}.${m ? " " + m : ""}`,
      },
    },
    footer: { rights: "© 2026 Rainbow Kids. All rights reserved." },
    bar: { call: "Call", whatsapp: "WhatsApp", enquire: "Enquire" },
  },

  ar: {
    langButton: "English",
    langLabel: "التبديل إلى الإنجليزية",
    menuOpen: "فتح القائمة",
    menuClose: "إغلاق القائمة",
    navLabel: "التنقل الرئيسي",
    skip: "انتقل إلى المحتوى",
    brand: "رينبو كيدز",
    brandInitial: "ر",
    brandSub: "روضة وتمهيدي ودار حضانة",
    enquire: "استفسر الآن",
    nav: { home: "الرئيسية", about: "من نحن", programs: "البرامج", gallery: "المعرض", admissions: "التسجيل", contact: "تواصل معنا" },
    hero: {
      tag: "روضة + تمهيدي + دار حضانة",
      titleLead: "كل طفل صغير هو ",
      titleHi: "قوس قزح",
      titleEnd: " ينتظر أن يتألق",
      text: "رينبو كيدز مكان دافئ ومحب في حي المربع بالرياض، يتعلم فيه الصغار برفق، ويكتسبون الثقة، ويشعرون بالأمان مع معلمات يهتممن بهم حقًا.",
      primary: "استفسر الآن",
      secondary: "احجز زيارة",
      open: "تفتح الساعة 8:00 صباحًا",
      rating: "5.0 على جوجل",
      ratingSub: "10 تقييمات سعيدة من أولياء الأمور",
      stageLabel: "قوس قزح فوق سحابتين",
    },
    trust: [
      { icon: "heart", title: "بيئة محبة", text: "يشعر الأطفال بالأمان والترحيب والرعاية منذ يومهم الأول." },
      { icon: "smile", title: "معلمات لطيفات وصبورات", text: "يصف أولياء الأمور معلماتنا بأنهن لطيفات وموهوبات وداعمات دائمًا." },
      { icon: "book", title: "تعلّم بلا ضغط", text: "يتعلم الأطفال بإيقاعهم الخاص دون أن يشعروا بأي ضغط." },
      { icon: "sparkle", title: "ثقة تكبر", text: "يلاحظ الأهل تحسنًا في المفردات والسلوك والثقة خلال أشهر قليلة." },
    ],
    about: {
      title: "مدرسة أولى بدفء حضن",
      text1:
        "السنوات الأولى تصنع علاقة الطفل بالتعلم مدى الحياة. في رينبو كيدز نخطط كل يوم ليشعر الأطفال بالأمان أولًا، ثم ينطلقوا في الاستكشاف والسؤال واللعب وتكوين الصداقات.",
      text2:
        "نحافظ على مجموعات صغيرة وروتين هادئ، ونبقى قريبين من الأهل، ونُطلعهم على ما فعله طفلهم وتعلّمه ليكبر البيت والمدرسة معًا.",
      safetyTitle: "أمان ورعاية تطمئن إليهما",
      safety: [
        "إشراف على التسليم والاستلام كل يوم",
        "غرف تُنظَّف وتُعقَّم يوميًا",
        "أثاث وأرضيات ومعدات لعب مناسبة للأطفال",
        "تسجيل المعلومات الصحية وجهات الطوارئ لكل طفل",
        "تحديثات منتظمة لأولياء الأمور",
      ],
      areasTitle: "ماذا يتعلم الأطفال",
      areas: [
        { icon: "sun", title: "اللعب والحركة", text: "اللعب داخل الصف وخارجه ينمّي التوازن والتناسق والثقة بالنفس." },
        { icon: "book", title: "اللغة والقصص", text: "الأناشيد والقصص والحوار تنمّي المفردات والسلوك الحسن." },
        { icon: "compass", title: "الاكتشاف", text: "تجارب علمية بسيطة ولعب حسي وأنشطة من الطبيعة تغذّي الفضول." },
        { icon: "pencil", title: "الإبداع", text: "الرسم والأشغال اليدوية والتمثيل تمنح كل طفل وسيلة للتعبير عن نفسه." },
      ],
    },
    programs: {
      title: "ثلاثة برامج في بيت واحد دافئ",
      text: "اختر البرنامج لترى كيف تبدو الأيام.",
      tabsLabel: "البرامج",
      focusTitle: "محاور التركيز",
      groups: [
        {
          name: "دار الحضانة",
          age: "الصغار، من سنة إلى 3 سنوات",
          text: "روتين لطيف وأحضان ولعب حسي تساعد أصغر أطفالنا على الاستقرار والشعور بالأمان أثناء عمل الأهل.",
          focus: ["الراحة والروتين", "اللعب الحسي", "الكلمات والأناشيد الأولى"],
        },
        {
          name: "التمهيدي",
          age: "من 3 إلى 4 سنوات",
          text: "حلقات الحوار واللعب التمثيلي والمشاريع العملية تبني اللغة والاستقلالية والصداقات.",
          focus: ["اللغة والسلوك الحسن", "مهارات ما قبل الكتابة", "تكوين الصداقات"],
        },
        {
          name: "الروضة",
          age: "من 4 إلى 6 سنوات",
          text: "الحروف والأرقام والعمل الجماعي تُعِدّ الأطفال خطوة بخطوة لبداية واثقة في المرحلة الابتدائية.",
          focus: ["الحروف والأرقام", "الإصغاء والتركيز", "العمل الجماعي"],
        },
      ],
      dayTitle: "يوم في رينبو كيدز",
      dayNote: "جدول تجريبي. تُؤكَّد المواعيد النهائية عند التسجيل.",
      day: [
        { time: "8:00 ص", label: "الاستقبال واللعب الحر" },
        { time: "9:00 ص", label: "الإفطار وغسل اليدين" },
        { time: "10:00 ص", label: "حلقة الحوار والتعلم" },
        { time: "11:30 ص", label: "اللعب في الخارج" },
        { time: "12:30 م", label: "الغداء والراحة" },
        { time: "2:00 م", label: "الفنون والأشغال اليدوية والانصراف" },
      ],
    },
    gallery: {
      title: "الحياة في رينبو كيدز",
      text: "لمحة عن صفوفنا وأماكن اللعب.",
      filtersLabel: "تصفية الصور",
      filters: { all: "الكل", rooms: "الصفوف", outdoor: "أماكن اللعب", activities: "الأنشطة" },
      tiles: ["صف مشرق", "ركن القصص", "غرفة الصغار", "منطقة اللعب", "الزحاليق والتسلق", "وقت الفن", "وقت الألغاز", "طاولة الوجبات"],
    },
    reviews: {
      title: "ماذا يقول أولياء الأمور",
      text: "كلمات حقيقية من أولياء الأمور على خرائط جوجل، بلغتها الأصلية.",
      ratingLabel: "5.0 من 5",
      count: "10 تقييمات",
      tagsTitle: "أكثر ما يذكره أولياء الأمور",
      tags: [
        { label: "بيئة محبة", count: 2 },
        { label: "المعلمات", count: 2 },
        { label: "الصغار", count: 2 },
        { label: "أكاديمية للصغار", count: 2 },
      ],
      source: "تقييم على جوجل",
      when: "قبل 6 أشهر",
      reply: "رد من رينبو كيدز",
      link: "اقرأ جميع التقييمات على جوجل",
    },
    admissions: {
      title: "الانضمام إلى رينبو كيدز",
      text: "ثلاث خطوات بسيطة من أول تواصل إلى أول يوم.",
      steps: [
        { title: "أرسل استفسارك", text: "املأ النموذج القصير أو راسلنا على واتساب." },
        { title: "زُر المدرسة", text: "تعرّف على المعلمات وشاهد الصفوف واسأل عن أي شيء." },
        { title: "رحّب بطفلك", text: "نرافقك في التسجيل، ويتأقلم طفلك بهدوء وتدرّج." },
      ],
    },
    contact: {
      title: "زرنا أو أرسل استفسارك",
      addressLabel: "العنوان",
      address: "المربع، الرياض 12626، المملكة العربية السعودية",
      hoursLabel: "ساعات العمل",
      hours: "من الأحد إلى الخميس، ابتداءً من 8:00 صباحًا",
      phoneLabel: "الهاتف",
      call: "اتصل الآن",
      whatsapp: "واتساب",
      directions: "الاتجاهات",
      mapTitle: "خريطة تعرض موقع رينبو كيدز في حي المربع بالرياض",
      form: {
        title: "نموذج الاستفسار",
        name: "اسم ولي الأمر",
        phone: "رقم الهاتف أو واتساب",
        age: "عمر الطفل",
        visit: "يوم الزيارة المفضل",
        message: "هل لديك سؤال؟",
        submit: "إرسال الاستفسار",
        errName: "الرجاء إدخال اسمك.",
        errPhone: "الرجاء إدخال رقم هاتف صحيح.",
        ages: ["من سنة إلى سنتين", "من سنتين إلى 3 سنوات", "من 3 إلى 4 سنوات", "من 4 إلى 6 سنوات"],
        days: ["أي يوم", "الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس"],
        thanks: (n) => `شكرًا ${n}`,
        thanksText: "استلمنا استفسارك وسنرد عليك في أقرب وقت.",
        waSend: "أرسل هذه التفاصيل عبر واتساب",
        again: "إرسال استفسار آخر",
        waTemplate: (n, a, d, m) => `مرحبًا رينبو كيدز، أنا ${n}. عمر طفلي ${a}. يوم الزيارة المفضل: ${d}.${m ? " " + m : ""}`,
      },
    },
    footer: { rights: "© 2026 رينبو كيدز. جميع الحقوق محفوظة." },
    bar: { call: "اتصال", whatsapp: "واتساب", enquire: "استفسار" },
  },
};

/* ---------- Static data ---------- */

// Real parent reviews from Google Maps, kept in their original language.
// Confirm the nursery is happy to feature them.
const REVIEWS = [
  {
    name: "Faiz Sindgi",
    initial: "F",
    tone: "red",
    text: "We enrolled our son last year and the change in his confidence has been amazing. The teachers are so gentle and patient. He learns well and he never feels pressured. His vocabulary and manners improved within just a few months.",
  },
  {
    name: "Syed Maha",
    initial: "S",
    tone: "blue",
    text: "The best kindergarten for the parents who wants the best basic studies for their toddlers and kids with extremely talented teacher who knows how to handle the kids in an exceptional way 😄",
  },
  {
    name: "Pooja Jain",
    initial: "P",
    tone: "green",
    text: "Vey nice school for little kids my son missed too much this school teacher also very good they all time coperate thank you hajera teacher",
    reply: "Thank you for the wonderful feedback! We're glad your son felt supported here. We will certainly pass your thanks along to Ms. Hajera.",
  },
];

// Gallery: order matches COPY.*.gallery.tiles. Add `src: "/photos/xyz.jpg"`
// to replace the artwork with a real photo.
const TILES = [
  { cat: "rooms", variant: "sky", size: "wide", src: "" },
  { cat: "rooms", variant: "sun", size: "", src: "" },
  { cat: "rooms", variant: "mint", size: "tall", src: "" },
  { cat: "outdoor", variant: "pink", size: "", src: "" },
  { cat: "outdoor", variant: "lilac", size: "wide", src: "" },
  { cat: "activities", variant: "sun", size: "", src: "" },
  { cat: "activities", variant: "sky", size: "tall", src: "" },
  { cat: "activities", variant: "mint", size: "", src: "" },
];

// Rainbow order, outer arc to inner arc
const RAINBOW = ["#FF8B8B", "#FFB37A", "#FFD66B", "#85D9A8", "#7CC1F4", "#A99BF5"];
const PROGRAM_COLORS = ["#FFC9C9", "#FFE08A", "#BDEBD0"];

/* ---------- Icons (inline SVG, no dependency) ---------- */

const ICONS = {
  star: <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />,
  smile: (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <path d="M9 9h.01M15 9h.01" />
    </>
  ),
  heart: <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />,
  sparkle: (
    <>
      <path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3z" />
      <path d="M19 15v4M17 17h4" />
    </>
  ),
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </>
  ),
  book: (
    <>
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </>
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="10" />
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
    </>
  ),
  pencil: (
    <>
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </>
  ),
  phone: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />,
  pin: (
    <>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </>
  ),
  menu: <path d="M3 6h18M3 12h18M3 18h18" />,
  close: <path d="M18 6L6 18M6 6l12 12" />,
  check: <path d="M20 6L9 17l-5-5" />,
  whatsapp: (
    <>
      <path d="M3 21l1.65-4.9A9 9 0 1 1 8 19.35L3 21z" />
      <path d="M9 9.5c.3 2.2 2.3 4.2 4.5 4.5l1.2-1.3-1.7-1-.9.7a3.5 3.5 0 0 1-1.6-1.6l.7-.9-1-1.7L9 9.5z" />
    </>
  ),
  send: (
    <>
      <path d="M22 2L11 13" />
      <path d="M22 2l-7 20-4-9-9-4 20-7z" />
    </>
  ),
};

function Icon({ name, size = 22, className = "" }) {
  return (
    <svg className={`icon ${className}`} viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {ICONS[name]}
    </svg>
  );
}

/* Each star is its own box: a pale star behind, a colored star on top
   clipped to the fraction that should be filled. Clean at any rating. */
function Stars({ value = 5, label }) {
  return (
    <span className="stars" role="img" aria-label={label}>
      {[0, 1, 2, 3, 4].map((i) => {
        const frac = Math.max(0, Math.min(1, value - i)) * 100;
        return (
          <span className="star" key={i} style={{ "--fill": `${frac}%` }}>
            <Icon name="star" size={18} className="star__base icon--fill" />
            <Icon name="star" size={18} className="star__fill icon--fill" />
          </span>
        );
      })}
    </span>
  );
}

/* A soft cloud, drawn from circles */
function Cloud({ className = "" }) {
  return (
    <svg className={`cloud ${className}`} viewBox="0 0 120 60" aria-hidden="true">
      <g fill="#fff">
        <circle cx="30" cy="38" r="20" />
        <circle cx="56" cy="26" r="24" />
        <circle cx="86" cy="36" r="20" />
        <rect x="22" y="38" width="76" height="20" rx="10" />
      </g>
    </svg>
  );
}

/* The signature moment: six arcs draw themselves across the sky */
function RainbowArt() {
  const cx = 200;
  const base = 232;
  const radii = [168, 146, 124, 102, 80, 58];
  return (
    <svg className="rainbow" viewBox="0 0 400 250" aria-hidden="true">
      {radii.map((r, i) => (
        <path
          key={r}
          className="arc"
          style={{ "--i": i }}
          d={`M ${cx - r} ${base} A ${r} ${r} 0 0 1 ${cx + r} ${base}`}
          pathLength="1"
          fill="none"
          stroke={RAINBOW[i]}
          strokeWidth="20"
          strokeLinecap="round"
        />
      ))}
    </svg>
  );
}

/* ---------- Header ---------- */

function Header({ c, lang, setLang, active, menuOpen, setMenuOpen, scrolled }) {
  const items = ["home", "about", "programs", "gallery", "admissions", "contact"];
  return (
    <header className={`header ${scrolled ? "header--scrolled" : ""}`}>
      <div className="wrap header__bar">
        <a className="logo" href="#home" onClick={() => setMenuOpen(false)}>
          <span className="logo__mark" aria-hidden="true">
            <span className="logo__arc logo__arc--1" />
            <span className="logo__arc logo__arc--2" />
            <span className="logo__arc logo__arc--3" />
          </span>
          <span className="logo__text">
            <strong>{c.brand}</strong>
            <small>{c.brandSub}</small>
          </span>
        </a>

        <nav id="main-nav" className={`nav ${menuOpen ? "nav--open" : ""}`} aria-label={c.navLabel}>
          {items.map((id) => (
            <a key={id} href={`#${id}`} aria-current={active === id ? "true" : undefined} onClick={() => setMenuOpen(false)}>
              {c.nav[id]}
            </a>
          ))}
        </nav>

        <div className="header__actions">
          <button type="button" className="lang" onClick={() => setLang(lang === "en" ? "ar" : "en")} aria-label={c.langLabel} lang={lang === "en" ? "ar" : "en"}>
            {c.langButton}
          </button>
          <a className="btn btn--sun btn--sm header__cta" href="#contact">
            {c.enquire}
          </a>
          <button type="button" className="burger" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="main-nav" aria-label={menuOpen ? c.menuClose : c.menuOpen}>
            <Icon name={menuOpen ? "close" : "menu"} />
          </button>
        </div>
      </div>
    </header>
  );
}

/* ---------- Hero ---------- */

function Hero({ c }) {
  return (
    <section id="home" className="band band--sky hero">
      <div className="wrap hero__grid">
        <div className="hero__copy">
          <p className="hero__tag">
            <Icon name="sparkle" size={16} />
            {c.hero.tag}
          </p>
          <h1>
            {c.hero.titleLead}
            <span className="hl">{c.hero.titleHi}</span>
            {c.hero.titleEnd}
          </h1>
          <p className="lead">{c.hero.text}</p>
          <div className="hero__actions">
            <a className="btn btn--primary" href="#contact">{c.hero.primary}</a>
            <a className="btn btn--ghost" href="#contact">{c.hero.secondary}</a>
          </div>
          <p className="hero__open">
            <Icon name="clock" size={18} />
            {c.hero.open}
          </p>
        </div>

        <div className="stage-wrap">
          <div className="stage" role="img" aria-label={c.hero.stageLabel}>
            <span className="sunblob" aria-hidden="true" />
            <RainbowArt />
            <Cloud className="cloud--l" />
            <Cloud className="cloud--r" />
            <span className="dot dot--1" aria-hidden="true" />
            <span className="dot dot--2" aria-hidden="true" />
            <span className="dot dot--3" aria-hidden="true" />
          </div>
          <div className="sticker">
            <Stars value={5} label={c.hero.rating} />
            <div>
              <strong>{c.hero.rating}</strong>
              <span>{c.hero.ratingSub}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Trust strip ---------- */

function Trust({ c }) {
  return (
    <section className="trust" aria-label={c.brand}>
      <ul className="wrap trust__list">
        {c.trust.map((t, i) => (
          <li key={t.title} className={`trust__item trust__item--${i}`}>
            <span className="trust__icon"><Icon name={t.icon} size={24} /></span>
            <div>
              <h3>{t.title}</h3>
              <p>{t.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

/* ---------- About & Curriculum ---------- */

function About({ c }) {
  const a = c.about;
  return (
    <section id="about" className="section">
      <div className="wrap about__grid">
        <div className="about__copy">
          <h2>{a.title}</h2>
          <p className="lead">{a.text1}</p>
          <p>{a.text2}</p>
        </div>
        <aside className="safety">
          <h3>{a.safetyTitle}</h3>
          <ul>
            {a.safety.map((s) => (
              <li key={s}>
                <span className="safety__tick"><Icon name="check" size={16} /></span>
                {s}
              </li>
            ))}
          </ul>
        </aside>
      </div>

      <div className="wrap">
        <h3 className="subhead">{a.areasTitle}</h3>
        <ul className="areas">
          {a.areas.map((x, i) => (
            <li key={x.title} className={`area area--${i}`}>
              <Icon name={x.icon} size={26} />
              <h4>{x.title}</h4>
              <p>{x.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------- Programs ---------- */

function Programs({ c, lang }) {
  const p = c.programs;
  const [tab, setTab] = useState(0);
  const g = p.groups[tab];
  const n = p.groups.length;

  function onKeyDown(e) {
    const rtl = lang === "ar";
    let d = 0;
    if (e.key === "ArrowRight") d = rtl ? -1 : 1;
    if (e.key === "ArrowLeft") d = rtl ? 1 : -1;
    if (!d) return;
    e.preventDefault();
    const next = (tab + d + n) % n;
    setTab(next);
    const el = document.getElementById(`tab-${next}`);
    if (el) el.focus();
  }

  return (
    <section id="programs" className="band band--sun section">
      <div className="wrap">
        <header className="section__head">
          <h2>{p.title}</h2>
          <p>{p.text}</p>
        </header>

        <div className="tabs" role="tablist" aria-label={p.tabsLabel} onKeyDown={onKeyDown}>
          {p.groups.map((x, i) => (
            <button key={x.name} id={`tab-${i}`} type="button" role="tab" className="tab" aria-selected={tab === i} aria-controls="program-panel" tabIndex={tab === i ? 0 : -1} style={{ "--tab": PROGRAM_COLORS[i] }} onClick={() => setTab(i)}>
              <strong>{x.name}</strong>
              <span>{x.age}</span>
            </button>
          ))}
        </div>

        <div id="program-panel" role="tabpanel" aria-labelledby={`tab-${tab}`} className="program" style={{ "--tab": PROGRAM_COLORS[tab] }}>
          <div>
            <p className="program__age">{g.age}</p>
            <h3>{g.name}</h3>
            <p>{g.text}</p>
          </div>
          <div>
            <h4>{p.focusTitle}</h4>
            <ul className="focus">
              {g.focus.map((f) => (
                <li key={f}>
                  <Icon name="check" size={16} />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="dayblock">
          <h3>{p.dayTitle}</h3>
          <ol className="day">
            {p.day.map((d, i) => (
              <li key={d.time} style={{ "--dot": RAINBOW[i] }}>
                <time>{d.time}</time>
                <span>{d.label}</span>
              </li>
            ))}
          </ol>
          <p className="note">{p.dayNote}</p>
        </div>
      </div>
    </section>
  );
}

/* ---------- Gallery ---------- */

function Gallery({ c }) {
  const g = c.gallery;
  const [filter, setFilter] = useState("all");
  const visible = TILES.map((t, i) => ({ ...t, label: g.tiles[i] })).filter((t) => filter === "all" || t.cat === filter);

  return (
    <section id="gallery" className="section">
      <div className="wrap">
        <header className="section__head section__head--row">
          <div>
            <h2>{g.title}</h2>
            <p>{g.text}</p>
          </div>
          <div className="chips" role="group" aria-label={g.filtersLabel}>
            {Object.keys(g.filters).map((k) => (
              <button key={k} type="button" className="chip" aria-pressed={filter === k} onClick={() => setFilter(k)}>
                {g.filters[k]}
              </button>
            ))}
          </div>
        </header>

        <div className="mosaic">
          {visible.map((t) => (
            <figure key={t.label} className={`tile tile--${t.variant} ${t.size ? `tile--${t.size}` : ""} ${t.src ? "tile--photo" : ""}`}>
              {t.src && <img src={t.src} alt={t.label} loading="lazy" />}
              <figcaption>{t.label}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Reviews ---------- */

function Reviews({ c }) {
  const r = c.reviews;
  return (
    <section id="reviews" className="band band--indigo section">
      <div className="wrap reviews__grid">
        <div className="reviews__intro">
          <h2>{r.title}</h2>
          <p>{r.text}</p>

          <div className="score">
            <span className="score__num">5.0</span>
            <div>
              <Stars value={5} label={r.ratingLabel} />
              <span className="score__count">{r.count}</span>
            </div>
          </div>

          <h3 className="tags__title">{r.tagsTitle}</h3>
          <ul className="tags">
            {r.tags.map((t) => (
              <li key={t.label}>
                {t.label}
                <b>{t.count}</b>
              </li>
            ))}
          </ul>

          <a className="textlink" href={CONTACT.mapLink} target="_blank" rel="noreferrer">
            {r.link}
          </a>
        </div>

        <div className="bubbles">
          {REVIEWS.map((x, i) => (
            <figure className={`bubble bubble--${i}`} key={x.name}>
              <blockquote lang="en" dir="ltr">{x.text}</blockquote>
              {x.reply && (
                <div className="bubble__reply">
                  <span>{r.reply}</span>
                  <p lang="en" dir="ltr">{x.reply}</p>
                </div>
              )}
              <figcaption>
                <span className={`avatar avatar--${x.tone}`} aria-hidden="true">{x.initial}</span>
                <span>
                  <strong>{x.name}</strong>
                  <small>{r.source} · {r.when}</small>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Admissions ---------- */

function Admissions({ c }) {
  const a = c.admissions;
  return (
    <section id="admissions" className="band band--mint section">
      <div className="wrap">
        <header className="section__head">
          <h2>{a.title}</h2>
          <p>{a.text}</p>
        </header>

        <ol className="steps">
          {a.steps.map((s, i) => (
            <li key={s.title} style={{ "--step": RAINBOW[[0, 2, 4][i]] }}>
              <span className="steps__num">{i + 1}</span>
              <div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------- Contact ---------- */

function Contact({ c }) {
  const k = c.contact;
  const f = k.form;
  const [form, setForm] = useState({ name: "", phone: "", age: 0, visit: 0, message: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const set = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  function onSubmit(e) {
    e.preventDefault();
    const next = {};
    if (!form.name.trim()) next.name = true;
    if (!/^[+\d][\d\s-]{6,}$/.test(form.phone.trim())) next.phone = true;
    setErrors(next);
    if (Object.keys(next).length === 0) {
      // TODO: send `form` to your backend / Formspree / EmailJS here.
      setSent(true);
    }
  }

  const waHref = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(f.waTemplate(form.name, f.ages[form.age], f.days[form.visit], form.message.trim()))}`;

  return (
    <section id="contact" className="band band--pink section">
      <div className="wrap">
        <header className="section__head">
          <h2>{k.title}</h2>
        </header>

        <div className="contact__grid">
          <div className="contact__info">
            <ul className="facts">
              <li>
                <span className="facts__icon"><Icon name="pin" size={22} /></span>
                <div>
                  <h3>{k.addressLabel}</h3>
                  <p>{k.address}</p>
                  <p className="pluscode" dir="ltr">MP95+V7 Al Murabba, Riyadh</p>
                </div>
              </li>
              <li>
                <span className="facts__icon"><Icon name="clock" size={22} /></span>
                <div>
                  <h3>{k.hoursLabel}</h3>
                  <p>{k.hours}</p>
                </div>
              </li>
              <li>
                <span className="facts__icon"><Icon name="phone" size={22} /></span>
                <div>
                  <h3>{k.phoneLabel}</h3>
                  <p dir="ltr" className="phone">{CONTACT.phoneDisplay}</p>
                </div>
              </li>
            </ul>

            <div className="contact__actions">
              <a className="btn btn--primary" href={`tel:${CONTACT.phoneTel}`}>
                <Icon name="phone" size={18} />
                {k.call}
              </a>
              <a className="btn btn--wa" href={`https://wa.me/${CONTACT.whatsapp}`} target="_blank" rel="noreferrer">
                <Icon name="whatsapp" size={18} />
                {k.whatsapp}
              </a>
              <a className="btn btn--ghost" href={CONTACT.mapLink} target="_blank" rel="noreferrer">
                <Icon name="pin" size={18} />
                {k.directions}
              </a>
            </div>
          </div>

          <div className="formcard">
            {sent ? (
              <div className="sent" role="status">
                <span className="sent__icon"><Icon name="check" size={30} /></span>
                <h3>{f.thanks(form.name.trim())}</h3>
                <p>{f.thanksText}</p>
                <a className="btn btn--wa" href={waHref} target="_blank" rel="noreferrer">
                  <Icon name="whatsapp" size={18} />
                  {f.waSend}
                </a>
                <button type="button" className="textlink textlink--dark" onClick={() => setSent(false)}>
                  {f.again}
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate>
                <h3>{f.title}</h3>

                <div className="field">
                  <label htmlFor="f-name">{f.name}</label>
                  <input id="f-name" type="text" autoComplete="name" value={form.name} onChange={set("name")} aria-invalid={errors.name ? "true" : undefined} aria-describedby={errors.name ? "f-name-err" : undefined} />
                  {errors.name && <p className="err" id="f-name-err">{f.errName}</p>}
                </div>

                <div className="field">
                  <label htmlFor="f-phone">{f.phone}</label>
                  <input id="f-phone" type="tel" inputMode="tel" autoComplete="tel" dir="ltr" value={form.phone} onChange={set("phone")} placeholder="+966" aria-invalid={errors.phone ? "true" : undefined} aria-describedby={errors.phone ? "f-phone-err" : undefined} />
                  {errors.phone && <p className="err" id="f-phone-err">{f.errPhone}</p>}
                </div>

                <div className="field-row">
                  <div className="field">
                    <label htmlFor="f-age">{f.age}</label>
                    <select id="f-age" value={form.age} onChange={(e) => setForm({ ...form, age: Number(e.target.value) })}>
                      {f.ages.map((a, i) => (
                        <option key={a} value={i}>{a}</option>
                      ))}
                    </select>
                  </div>
                  <div className="field">
                    <label htmlFor="f-visit">{f.visit}</label>
                    <select id="f-visit" value={form.visit} onChange={(e) => setForm({ ...form, visit: Number(e.target.value) })}>
                      {f.days.map((d, i) => (
                        <option key={d} value={i}>{d}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="field">
                  <label htmlFor="f-msg">{f.message}</label>
                  <textarea id="f-msg" rows="3" value={form.message} onChange={set("message")} />
                </div>

                <button type="submit" className="btn btn--primary btn--block">
                  <Icon name="send" size={18} />
                  {f.submit}
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="map">
          <iframe title={k.mapTitle} src={CONTACT.mapEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
        </div>
      </div>
    </section>
  );
}

/* ---------- Footer, mobile bar ---------- */

function Footer({ c }) {
  const items = ["home", "about", "programs", "gallery", "admissions", "contact"];
  return (
    <footer className="footer">
      <div className="wrap footer__grid">
        <div>
          <p className="footer__brand">{c.brand}</p>
          <p className="footer__sub">{c.contact.address}</p>
        </div>
        <nav aria-label={c.navLabel} className="footer__nav">
          {items.map((id) => (
            <a key={id} href={`#${id}`}>{c.nav[id]}</a>
          ))}
        </nav>
        <a className="footer__phone" href={`tel:${CONTACT.phoneTel}`} dir="ltr">{CONTACT.phoneDisplay}</a>
      </div>
      <p className="wrap footer__rights">{c.footer.rights}</p>
    </footer>
  );
}

function MobileBar({ c }) {
  return (
    <div className="mbar">
      <a href={`tel:${CONTACT.phoneTel}`}>
        <Icon name="phone" size={20} />
        {c.bar.call}
      </a>
      <a href={`https://wa.me/${CONTACT.whatsapp}`} target="_blank" rel="noreferrer">
        <Icon name="whatsapp" size={20} />
        {c.bar.whatsapp}
      </a>
      <a className="mbar__main" href="#contact">
        <Icon name="send" size={20} />
        {c.bar.enquire}
      </a>
    </div>
  );
}

/* ---------- App ---------- */

export default function App() {
  const [lang, setLang] = useState(() => {
    try {
      return localStorage.getItem("rk-lang") === "ar" ? "ar" : "en";
    } catch {
      return "en";
    }
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const c = COPY[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.title = lang === "ar" ? "رينبو كيدز | الرياض" : "Rainbow Kids | Al Murabba, Riyadh";
    try {
      localStorage.setItem("rk-lang", lang);
    } catch {
      /* storage unavailable, ignore */
    }
  }, [lang]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = ["home", "about", "programs", "gallery", "reviews", "admissions", "contact"];
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean);
    const io = new IntersectionObserver((entries) => entries.forEach((en) => en.isIntersecting && setActive(en.target.id)), { rootMargin: "-40% 0px -55% 0px" });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <a className="skip" href="#content">{c.skip}</a>
      <Header c={c} lang={lang} setLang={setLang} active={active} menuOpen={menuOpen} setMenuOpen={setMenuOpen} scrolled={scrolled} />
      <main id="content">
        <Hero c={c} />
        <Trust c={c} />
        <About c={c} />
        <Programs c={c} lang={lang} />
        <Gallery c={c} />
        <Reviews c={c} />
        <Admissions c={c} />
        <Contact c={c} />
      </main>
      <Footer c={c} />
      <MobileBar c={c} />
    </>
  );
}