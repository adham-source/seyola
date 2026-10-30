import { useEffect, useMemo, useState } from 'react';

const navLinks = [
  { href: '#home', label: 'الرئيسية' },
  { href: '#services', label: 'الخدمات' },
  { href: '#calculator', label: 'حاسبة العمولة' },
  { href: '#about', label: 'من نحن' },
  { href: '#reviews', label: 'آراء العملاء' },
  { href: '#contact', label: 'تواصل معنا' },
];

const socialLinks = [
  { href: 'https://facebook.com', label: 'فيسبوك', icon: 'fa-brands fa-facebook-f', color: 'facebook' },
  { href: 'https://instagram.com', label: 'إنستغرام', icon: 'fa-brands fa-instagram', color: 'instagram' },
  { href: 'https://wa.me/201041540100', label: 'واتساب', icon: 'fa-brands fa-whatsapp', color: 'whatsapp' },
  { href: 'tel:+201041540100', label: 'هاتف', icon: 'fa-solid fa-phone', color: 'phone' },
];

const serviceCards = [
  {
    icon: 'fa-solid fa-bolt',
    color: 'indigo',
    title: 'شواحن - سماعات - وصلات شحن',
    description: 'مبيعات فقط على شواحن أصلية، سماعات مريحة، ووصلات شحن عالية الجودة لتجربة استخدام موثوقة.',
    bullets: ['شحن سريع', 'سماعات ممتازة', 'وصلات متوافقة'],
    soon: false,
  },
  {
    icon: 'fa-solid fa-sim-card',
    color: 'green',
    title: 'باقات الهاتف والاتصالات',
    description: 'إعادة شحن، تحويل باقات، وتجديد اشتراكات الهاتف بطرق سهلة وتحديث فوري في أي وقت.',
    bullets: ['شحن فوري', 'اشتراكات موثوقة'],
    soon: false,
  },
  {
    icon: 'fa-solid fa-file-invoice-dollar',
    color: 'amber',
    title: 'دفع فواتير وشحن رصيد',
    description: 'دفع فواتير الإنترنت، الأرضي، والرصيد الفوري عبر خدمة موثوقة وسريعة ومباشرة.',
    bullets: ['سداد فوري', 'خدمة عملاء متوفرة'],
    soon: false,
  },
  {
    icon: 'fa-solid fa-wallet',
    color: 'purple',
    title: 'خدمات فوري المتاحة',
    description: 'خدمات فوري مثل التبرعات، المصروفات الدراسية، سداد الأقساط وتحديث المعاملات في دقائق.',
    bullets: ['إنجاز سريع', 'إيصالات رسمية'],
    soon: false,
  },
  {
    icon: 'fa-solid fa-screwdriver-wrench',
    color: 'cyan',
    title: 'صيانة الهواتف',
    description: 'قسم الصيانة قريبًا، سيتم توفير خدمات فحص وإصلاح الهاتف والحلول السريعة عند التفعيل.',
    bullets: ['قريبًا', 'غير متاح الآن'],
    soon: true,
  },
  {
    icon: 'fa-solid fa-mobile-screen-button',
    color: 'rose',
    title: 'بيع الهواتف',
    description: 'قسم بيع الهواتف سيكون متاحًا قريبًا، والآن نركز على المبيعات المخصصة للأكسسوارات والملحقات.',
    bullets: ['قريبًا', 'غير متاح الآن'],
    soon: true,
  },
];

const stats = [
  { value: '1500+', label: 'عميل راضٍ' },
  { value: '5+', label: 'سنوات خبرة' },
  { value: '24/7', label: 'خدمة يومية' },
  { value: '99%', label: 'رضا العملاء' },
];

const highlights = [
  'سعر واضح وشفاف',
  'خدمة سريعة وموثوقة',
  'معاملات آمنة',
  'تجربة مريحة للعملاء',
];

const aboutCards = [
  {
    icon: 'fa-solid fa-award',
    title: 'خدمة مميزة',
    text: 'نضع الجودة والسرعة في أولوياتنا لضمان تجربة مريحة لكل عميل.',
  },
  {
    icon: 'fa-solid fa-shield-heart',
    title: 'أمان وثقة',
    text: 'نحرص على الخصوصية والشفافية الكاملة في كل معاملة وطلب.',
  },
  {
    icon: 'fa-solid fa-headset',
    title: 'دعم مستمر',
    text: 'فريقنا موجود لمساعدتك في الشحن، الدفع، والاستفسارات على مدار اليوم.',
  },
];

const reviews = [
  {
    name: 'أحمد محمد',
    city: 'مدينة منفلوط',
    text: 'خدمة ممتازة وسريعة جدًا، والدعم متعاون. أنصح بالتعامل مع محل سيولة.',
    initials: 'أ.م',
    color: 'indigo',
  },
  {
    name: 'سامية علي',
    city: 'البداري / أسيوط',
    text: 'أحببت السرعة في خدمة الدفع والتجديد، والموظفين محترفين ومرحبين.',
    initials: 'س.ع',
    color: 'emerald',
  },
  {
    name: 'كريمة محمود',
    city: 'مدينة أسيوط / منفلوط',
    text: 'خدمة فوري ودفع الفواتير هناك سريعة جداً ومفيش أي زحمة أو انتظار.',
    initials: 'ك.م',
    color: 'purple',
  },
];

const openingHours = [
  'الإثنين - الخميس: 9:00 صباحاً - 11:00 مساءً',
  'السبت - الأحد: 9:00 صباحاً - 11:00 مساءً',
  'الجمعة: مغلق',
];

const serviceRateMap = {
  instapay: 0.0025,
  wallet: 0.005,
  fawry: 0.004,
  cash: 0.01,
};

const currency = new Intl.NumberFormat('ar-EG', {
  maximumFractionDigits: 1,
  minimumFractionDigits: 0,
});

const formatMoney = (value) => `${currency.format(value)} ج.م`;

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) return savedTheme;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const [amount, setAmount] = useState(5000);
  const [service, setService] = useState('instapay');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const calculation = useMemo(() => {
    const parsedAmount = Number(amount) || 0;
    const rate = serviceRateMap[service] ?? 0.005;
    const commission = parsedAmount === 0 ? 0 : Math.max(parsedAmount * rate, 3);
    const total = parsedAmount + commission;

    return { parsedAmount, commission, total };
  }, [amount, service]);

  const themeButtonLabel = theme === 'dark' ? 'تبديل إلى الوضع الفاتح' : 'تبديل إلى الوضع الداكن';

  return (
    <div className="page-shell">
      <header className="topbar">
        <div className={`nav-shell ${menuOpen ? 'nav-shell--open' : ''}`}>
          <a href="#home" className="brand" aria-label="سيولة الرئيسية">
            <div className="brand-mark">
              <i className="fa-solid fa-bolt" />
            </div>
            <div className="brand-copy">
              <span className="brand-name">سيولة</span>
              <span className="brand-tag">خدمات الموبايل والمدفوعات - منفلوط</span>
            </div>
          </a>

          <nav className="desktop-nav" aria-label="التنقل الرئيسي">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="nav-actions">
            <button
              type="button"
              className="theme-toggle"
              onClick={() => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))}
              aria-label={themeButtonLabel}
              title={themeButtonLabel}
            >
              <i className={`fa-solid ${theme === 'dark' ? 'fa-moon' : 'fa-sun'}`} />
            </button>

            <div className="social-mini-links hidden-mobile" aria-label="وسائل التواصل الاجتماعي">
              {socialLinks.map((social) => (
                <a key={social.label} href={social.href} target={social.href.startsWith('http') ? '_blank' : undefined} rel={social.href.startsWith('http') ? 'noreferrer' : undefined} className={`social-mini-link social-mini-link--${social.color}`} aria-label={social.label} title={social.label}>
                  <i className={social.icon} />
                </a>
              ))}
            </div>

            <a href="https://wa.me/201041540100?text=مرحباً، أريد الاستفسار عن خدمات سيولة بمنفلوط" target="_blank" rel="noreferrer" className="cta-button cta-button--whatsapp hidden-mobile">
              <i className="fa-brands fa-whatsapp" />
              <span>تواصل مباشر</span>
            </a>

            <button type="button" className="menu-button" onClick={() => setMenuOpen((open) => !open)} aria-label="فتح القائمة">
              <i className="fa-solid fa-bars" />
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="mobile-menu" aria-label="القائمة الجانبية">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
                {link.label}
              </a>
            ))}
            <div className="mobile-social-links">
              {socialLinks.map((social) => (
                <a key={social.label} href={social.href} target={social.href.startsWith('http') ? '_blank' : undefined} rel={social.href.startsWith('http') ? 'noreferrer' : undefined} className={`social-mini-link social-mini-link--${social.color}`} aria-label={social.label} title={social.label} onClick={() => setMenuOpen(false)}>
                  <i className={social.icon} />
                </a>
              ))}
            </div>
            <a href="https://wa.me/201041540100?text=مرحباً، أريد الاستفسار عن خدمات سيولة بمنفلوط" target="_blank" rel="noreferrer" className="cta-button cta-button--whatsapp mobile-cta" onClick={() => setMenuOpen(false)}>
              <i className="fa-brands fa-whatsapp" />
              <span>راسلنا واتساب</span>
            </a>
          </div>
        )}
      </header>

      <main>
        <section id="home" className="hero-section">
          <div className="orb orb--purple" />
          <div className="orb orb--green" />

          <div className="container hero-grid">
            <div className="hero-copy">
              <span className="eyebrow">
                <i className="fa-solid fa-location-dot" />
                الوجهة الأولى في منفلوط - أسيوط
              </span>

              <h1>
                خدمات <span>الموبايل</span> والمدفوعات<br />
                في قلب منفلوط
              </h1>

              <p>
                متجر سيولة لخدمات الموبايل والمدفوعات يقدم لك كل ما تحتاجه من شحن، دفع فواتير، تحويلات، باقات،
                وأكسسوارات موبايل بسرعة واحترافية مع أسعار مناسبة في كل لحظة.
              </p>

              <div className="hero-actions">
                <a href="#services" className="cta-button cta-button--primary">استكشف الخدمات</a>
                <a href="#contact" className="cta-button cta-button--secondary">تواصل معنا</a>
              </div>

              <div className="quick-badges">
                {highlights.map((item) => (
                  <span key={item} className="badge-item">
                    <i className="fa-solid fa-check" /> {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="hero-panel">
              <div className="panel-card">
                <div className="panel-card__header">
                  <div className="mini-logo">
                    <i className="fa-solid fa-bolt" />
                  </div>
                  <div>
                    <strong>سيولة</strong>
                    <span>خدمات رقمية موثوقة</span>
                  </div>
                </div>

                <div className="panel-metrics">
                  {stats.map((stat) => (
                    <div key={stat.label} className="metric-item">
                      <strong>{stat.value}</strong>
                      <span>{stat.label}</span>
                    </div>
                  ))}
                </div>

                <div className="mini-cta">
                  <div>
                    <span>متوفر اليوم</span>
                    <strong>خدمة فورية وبدون تأخير</strong>
                  </div>
                  <i className="fa-solid fa-arrow-left" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="section-block">
          <div className="container">
            <div className="section-heading">
              <span className="section-tag">خدماتنا</span>
              <h2>كل ما تحتاجه في مكان واحد</h2>
              <p>نقدم حلولاً متكاملة تغطي احتياجاتك في الهاتف، الدفع، والتواصل اليومي.</p>
            </div>

            <div className="services-grid">
              {serviceCards.map((serviceItem) => (
                <article
                  key={serviceItem.title}
                  className={`service-card service-card--${serviceItem.color} ${serviceItem.soon ? 'service-card--disabled' : ''}`}
                  aria-disabled={serviceItem.soon}
                >
                  <div className="service-head">
                    <div className="icon-box">
                      <i className={serviceItem.icon} />
                    </div>
                    {serviceItem.soon && <span className="service-badge">قريبًا</span>}
                  </div>
                  <h3>{serviceItem.title}</h3>
                  <p>{serviceItem.description}</p>
                  <ul>
                    {serviceItem.bullets.map((bullet) => (
                      <li key={bullet}><i className="fa-solid fa-check" /> {bullet}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="calculator" className="section-block section-block--accent">
          <div className="container calculator-wrap">
            <div className="calculator-card">
              <div className="section-heading section-heading--center">
                <span className="section-tag section-tag--success">حاسبة فورية</span>
                <h2>احسب عمولة التحويل والخدمات بدقة</h2>
                <p>أدخل المبلغ المحدد لمعرفة تفاصيل العمولة وفق الخدمة المستخدمة.</p>
              </div>

              <div className="calculator-grid">
                <div className="calculator-form">
                  <label>
                    نوع الخدمة / طريقة التحويل
                    <select value={service} onChange={(event) => setService(event.target.value)}>
                      <option value="instapay">إنستاباي (InstaPay) - الحد الأدنى</option>
                      <option value="wallet">تحويل محافظ إلكترونية</option>
                      <option value="fawry">خدمات فوري / سداد فواتير</option>
                      <option value="cash">سحب نقدي من المحفظة / ATM</option>
                    </select>
                  </label>

                  <label>
                    المبلغ المراد تحويله أو دفعه (جنيه مصري)
                    <input
                      type="number"
                      min="0"
                      value={amount}
                      onChange={(event) => setAmount(event.target.value)}
                      placeholder="أدخل المبلغ"
                    />
                  </label>
                </div>

                <div className="results-box" aria-live="polite">
                  <div className="result-row">
                    <span>المبلغ</span>
                    <strong>{formatMoney(calculation.parsedAmount)}</strong>
                  </div>
                  <div className="result-row result-row--muted">
                    <span>العمولة</span>
                    <strong>{formatMoney(calculation.commission)}</strong>
                  </div>
                  <div className="result-row result-row--total">
                    <span>الإجمالي</span>
                    <strong>{formatMoney(calculation.total)}</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section-block">
          <div className="container">
            <div className="section-heading section-heading--center">
              <span className="section-tag">من نحن</span>
              <h2>سيولة اشحن واسحب بكل سهولة</h2>
            </div>

            <div className="about-grid">
              {aboutCards.map((card) => (
                <div key={card.title} className="about-card">
                  <div className="about-icon">
                    <i className={card.icon} />
                  </div>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="reviews" className="section-block">
          <div className="container">
            <div className="section-heading section-heading--center">
              <span className="section-tag">آراء العملاء</span>
              <h2>تجارب حقيقية من زوارنا</h2>
            </div>

            <div className="reviews-grid">
              {reviews.map((review) => (
                <article key={review.name} className="review-card">
                  <div className="stars" aria-label="تقييم 5 نجوم">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <i key={index} className="fa-solid fa-star" />
                    ))}
                  </div>
                  <p className="review-text">"{review.text}"</p>
                  <div className="review-author">
                    <div className={`review-avatar review-avatar--${review.color}`}>{review.initials}</div>
                    <div>
                      <h4>{review.name}</h4>
                      <span>{review.city}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section-block section-block--footer">
          <div className="container">
            <div className="section-heading section-heading--center">
              <span className="section-tag">تواصل معنا</span>
              <h2>يسعدنا زيارتكم وتواصلكم معنا دائماً</h2>
              <p>زوروا مقرنا في منفلوط أو راسلونا عبر وسائل الاتصال المتاحة.</p>
            </div>

            <div className="contact-grid">
              <div className="contact-cards">
                <div className="contact-card">
                  <div className="contact-icon contact-icon--indigo"><i className="fa-solid fa-location-dot" /></div>
                  <div>
                    <h4>العنوان بالتحديد</h4>
                    <p>أسيوط - منفلوط - شارع المجلس القديم - أمام مكتب التموين - بالقرب من فرع البنك الأهلي</p>
                  </div>
                </div>

                <div className="contact-card">
                  <div className="contact-icon contact-icon--green"><i className="fa-brands fa-whatsapp" /></div>
                  <div>
                    <h4>رقم واتساب / الاتصال</h4>
                    <p dir="ltr">01041540100</p>
                  </div>
                </div>

                <div className="contact-card">
                  <div className="contact-icon contact-icon--purple"><i className="fa-solid fa-clock" /></div>
                  <div>
                    <h4>مواعيد العمل</h4>
                    <div className="hours-list">
                      {openingHours.map((hour) => (
                        <p key={hour}>{hour}</p>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="contact-actions">
                  <a href="https://wa.me/201041540100?text=مرحباً، أريد الاستفسار عن خدمات سيولة بمنفلوط" target="_blank" rel="noreferrer" className="cta-button cta-button--whatsapp">
                    <i className="fa-brands fa-whatsapp" />
                    <span>محادثة واتساب 01041540100</span>
                  </a>
                  <a href="tel:+201041540100" className="cta-button cta-button--primary">
                    <i className="fa-solid fa-phone" />
                    <span>اتصال هاتفي</span>
                  </a>
                </div>
              </div>

              <div className="map-card">
                <div className="map-panel">
                  <div className="map-pin">
                    <i className="fa-solid fa-store" />
                  </div>
                  <h3>محل سيولة لخدمات الموبايل والمدفوعات</h3>
                  <p>أسيوط - منفلوط - شارع المجلس القديم - أمام مكتب التموين</p>
                  <a href="https://maps.app.goo.gl/CLs6uwix822YZvox8" target="_blank" rel="noreferrer" className="cta-button cta-button--primary map-button">
                    فتح في خرائط جوجل <i className="fa-solid fa-arrow-up-right-from-square" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-content">
          <div>
            <strong>سيولة</strong>
          <span>خدمات الموبايل والمدفوعات</span>
          </div>
          <div className="footer-meta">
            <span>جاهزون لخدمتكم طوال أيام الأسبوع</span>
            <span className="status-live"><i className="fa-solid fa-circle" /> مفتوح الآن</span>
          </div>
        <div className="footer-socials" aria-label="روابط التواصل الاجتماعي">
          {socialLinks.map((social) => (
            <a key={social.label} href={social.href} target={social.href.startsWith('http') ? '_blank' : undefined} rel={social.href.startsWith('http') ? 'noreferrer' : undefined} className={`social-mini-link social-mini-link--${social.color}`} aria-label={social.label} title={social.label}>
              <i className={social.icon} />
            </a>
          ))}
        </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
