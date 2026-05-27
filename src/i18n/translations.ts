export type Language = "tr" | "en" | "de" | "ru" | "ar" | "fr";

export const translations = {
  tr: {
    nav: { home: "ANASAYFA", services: "HİZMETLERİMİZ", faq: "SIKÇA SORULANLAR", contact: "İLETİŞİM", book: "Randevu Al" },
    hero: {
      label: "ANKARA'NIN PREMIUM SAÇ EKİM MERKEZİ",
      title1: "Doğal Sonuçlar.\nPremium ",
      title2: "Deneyim.",
      desc: "Lüks gösteriş değildir. Mükemmel yerleştirilmiş bir grefttir, doğal bir saç çizgisidir ve bunu takip eden özgüvendir.",
      cta1: "WhatsApp Analiz",
      cta2: "Nasıl İşliyor?",
      scroll: "KAYDIRIN",
      stat1: "98.6%",
      statLabel: "Başarı Oranı"
    },
    services: {
      label: "HİZMETLERİMİZ",
      title: "Uzmanlarımızın Sunduğu Hizmetler",
      details: "DETAYLI BİLGİ",
      items: [
        { num: "01", title: "DHI Saç Ekimi", desc: "Choi Pen teknolojisiyle kanal açmadan, doğrudan deri altına greft yerleştirme. En sık ve en doğal görünümü sunan premium teknik.", features: ["Kanal açılmadan doğrudan ekim", "Daha sık greft yerleşimi", "Çok daha doğal saç çizgisi", "Hızlı iyileşme süreci"] },
        { num: "02", title: "FUE Saç Ekimi", desc: "Mikro motor ve safir bıçak teknolojisiyle tek tek foliküler ünite çıkarma. İz kalmadan, minimum ağrıyla maximum sonuç.", features: ["Safir bıçak ile mikro kesiler", "Sırt ve ense bölgesinden alım", "Hemen hemen izsiz iyileşme", "Büyük greft kapasitesi"] },
        { num: "03", title: "PRP Tedavisi", desc: "Kendi kanınızdan elde edilen büyüme faktörleriyle saç köklerinizi besleyin. Ekime hazırlık ve sonrası bakım için ideal destek.", features: ["Kendi kanınızdan elde edilir", "Saç köklerini güçlendirir", "Dökülme hızını yavaşlatır", "Ekim sonrası iyileşmeyi hızlandırır"] },
        { num: "04", title: "Sakal Ekimi", desc: "Yüz hatlarınızı belirginleştiren, doğal büyüme yönünde planlanan kalıcı sakal çözümü. Seyrek veya hiç çıkmayan bölgelere özel.", features: ["Yüz hatlarına özel tasarım", "Doğal sakal yönünde yerleştirme", "Kalıcı ve bakım gerektirmez", "Bıyık, favori ve ense dahil"] },
        { num: "05", title: "Mikro Kaş Ekimi", desc: "Tek tek kök greftleriyle yüz simetrisine uygun, doğal ve kalıcı kaş tasarımı. Kıl yönü ve açısı sanatsal hassasiyetle planlanır.", features: ["Yüz simetrisine özel tasarım", "Kıl yönüne uygun yerleştirme", "Seyrek veya dökülmüş kaşlara çözüm", "Ömür boyu kalıcı sonuç"] },
        { num: "06", title: "Long Hair Kaş Ekimi", desc: "Kesmeden uzun saç kökleriyle yapılan özel teknik. Ekim sonrası anında uzun ve görünür kaşlara kavuşun, sonuç beklemeyin.", features: ["Kesmeden uzun saçlarla ekim", "Anında görünür uzun kaşlar", "Normal hayata hemen dönüş", "Mikro Kaş'tan daha yoğun kaplama"] },
        { num: "07", title: "Saç Mezoterapisi", desc: "Vitamin, mineral ve amino asit karışımlarının saçlı deriye enjekte edilmesiyle kökleri besleyen, dökülmeyi durduran yenileyici tedavi.", features: ["Saç köklerine doğrudan besin desteği", "Dökülme karşıtı etkili formül", "Saç kalitesini ve parlaklığını artırır", "Ağrısız, konforlu uygulama"] },
        { num: "08", title: "Saç Exozom Tedavisi", desc: "Kök hücreden elde edilen exozomlarla saç foliküllerini uyaran, hücresel düzeyde yenileme sağlayan ileri teknoloji saç tedavisi.", features: ["Hücresel düzeyde yenileme", "Saç foliküllerini uyarıcı etki", "PRP'nin güçlendirilmiş versiyonu", "Dökülme önleyici ve kalınlaştırıcı"] }
      ]
    },
    why: {
      label: "NEDEN SER HAİR",
      title: "15 Yıllık Tecrübeyle\nGüvenilir Sonuçlar",
      desc: "SerHair olarak her hasta bireysel yaklaşımla değerlendirilir. En son teknoloji cihazlar, steril ortam ve uzman hekim kadromuzla sizlere en iyi hizmeti sunuyoruz.",
      stats: { years: "Yıllık Deneyim", patients: "Mutlu Hasta", grafts: "Ekilmiş Greft" },
      cta: "Hakkımızda"
    },
    process: {
      label: "SAÇ EKİM SÜRECİ",
      title: "Adım Adım Saç Ekimi",
      steps: [
        { num: "01", title: "Online Konsultasyon", desc: "Uzman ekibimize fotoğraflarınızı gönderin, ilk değerlendirmeyi alın." },
        { num: "02", title: "Detaylı Analiz", desc: "Saç dönüş alanı, greft ihtiyacı ve planlama yapılır." },
        { num: "03", title: "Operasyon Günü", desc: "Steril ortamda, lokal anestezi ile konforlu bir işlem." },
        { num: "04", title: "Takip ve Sonuç", desc: "6-12 ayda tam sonuç. Düzenli kontroller ve destek." }
      ]
    },
    gallery: { label: "SONUÇLAR", title: "Gerçek Hasta\nSonuçlarımız", before: "ÖNCE", after: "SONRA", cta: "Tüm Sonuçları Gör" },
    testimonials: {
      label: "YORUMLAR", title: "Mutlu Hastalarımızın\nDeneyimleri",
      items: [
        { quote: "Yaklaşık iki senedir düşündüğüm saç ekim işlemini yaptığım araştırmalar sonucunda Rıdvan Bozkurt hocam ve ekibinde karar kıldım. İyi ki de bu ekibe güvenerek yola çıkmışım. Operasyon çok başarılı geçti, ne ağrı ne de acı hissettim.", name: "Kerem Y.", op: "FUE Saç Ekimi" },
        { quote: "Rıdvan Bey ve ekibine çok teşekkür ederim. Ekim öncesi, ekim günü ve sonrası ilgi alaka hiç eksik olmadı. 18 ay geçmesine rağmen hâlen ilgililer. Gönül rahatlığıyla tercih edebilirsiniz.", name: "Ömer E.", op: "DHI Saç Ekimi" },
        { quote: "Doktorların bilgi ve deneyimi, hastayla ilgilenmeleri gerçekten çok iyi. Herkese tavsiye edebileceğim tek adres. %100 başarılı operasyon.", name: "Ahmet F. Y.", op: "DHI Saç Ekimi" }
      ]
    },
    faq: {
      label: "SIKÇA SORULANLAR", title: "Merak Ettikleriniz",
      items: [
        { q: "Saç ekimi ağrılı mı?", a: "Lokal anestezi altında yapıldığı için işlem sırasında herhangi bir ağrı hissetmezsiniz. İşlem sonrası hafif bir hassasiyet olabilir." },
        { q: "İyileşme süresi ne kadardır?", a: "İlk 3 gün hafif şişmeler olabilir. 10-14 gün içinde kabuklar düşer. 6-12 ayda tam sonuç görülür." },
        { q: "Saç ekimi kalıcı mı?", a: "Evet, ekilen greftler dönüş alanından alındığı için genetik olarak dökülmeye dirençlidir ve ömür boyu kalıcıdır." },
        { q: "Saç ekimi fiyatları ne kadar?", a: "Fiyatlar greft sayısına ve kullanılan tekniğe göre değişir. Ücretsiz konsültasyon ile size özel fiyat alabilirsiniz." },
        { q: "Operasyon sonrası nelere dikkat etmeliyim?", a: "İlk 3 gün yastık kullanmaktan kaçının, spor yapmayın, saç diplerine dokunmayın. Detaylı bakım rehberi verilmektedir." }
      ]
    },
    contact: {
      label: "İLETİŞİM",
      title: "Ücretsiz\nKonsültasyon Alın",
      desc: "Uzman ekibimizden 24 saat içerisinde değerlendirme alın. Size özel çözüm ve fiyat teklifi için formu doldurun.",
      phone: "+90 (542) 118 06 78",
      address: "Mutlukent, Çankaya/Ankara",
      email: "serhair1@gmail.com",
      form: { name: "Ad Soyad", phone: "Telefon", email: "E-posta", message: "Mesajınız", submit: "GÖNDER", sending: "GÖNDERİLİYOR...", success: "Teşekkürler!", successMsg: "Mesajınız serhair1@gmail.com adresine iletildi. En kısa sürede size dönüş yapacağız.", error: "Hata Oluştu", errorMsg: "Lütfen tekrar deneyin veya telefon ile ulaşın.", retry: "TEKRAR DENE" }
    },
    footer: {
      desc: "Ankara'nın premium saç ekim merkezi. 15 yıllık tecrübe, doğal sonuçlar.",
      quickLinks: "HIZLI LİNKLER", links: ["Anasayfa", "Hizmetlerimiz", "Hakkımızda", "Sıkça Sorulanlar", "İletişim"],
      services: "HİZMETLER", allServices: ["DHI Saç Ekimi", "FUE Saç Ekimi", "PRP Tedavisi", "Sakal Ekimi", "Mikro Kaş Ekimi", "Long Hair Kaş Ekimi", "Saç Mezoterapisi", "Saç Exozom"],
      contact: "İLETİŞİM", fullAddress: "Mutlukent, Angora Blv. No: 25, 06800 Çankaya/Ankara",
      copyright: "2025 SerHair. Tüm hakları saklıdır."
    },
    govTrust: {
      title: "Sağlık Bakanlığı Onaylı",
      desc: "Tüm işlemlerimiz; Sağlık Bakanlığı ruhsatlı tıp merkezlerimizde, steril koşullarda, sağlık alanında uzman profesyoneller tarafından gerçekleştirilir."
    },
    cookie: {
      text: "Sitemizi kullanarak çerez politikamızı kabul etmiş olursunuz. Daha fazla bilgi için",
      policyLink: "Çerez Politikası",
      kvkkLink: "KVKK Aydınlatma Metni",
      accept: "Kabul Et"
    },
    social: { follow: "Bizi sosyal medyada takip edin" },
    blog: { title: "Saç Sağlığı ve Estetik Rehberi", readMore: "Devamını Oku", back: "Geri Dön", readTime: "okuma süresi", contactText: "Daha fazla bilgi almak veya ücretsiz konsültasyon randevusu almak için" },
    preloader: { loading: "YÜKLENİYOR" },
    lang: { select: "Dil Seçin", tr: "Türkçe", en: "English", de: "Deutsch", ru: "Русский", ar: "العربية", fr: "Français" },
    dir: "ltr"
  },
  en: {
    nav: { home: "HOME", services: "SERVICES", faq: "FAQ", contact: "CONTACT", book: "Book Now" },
    hero: {
      label: "ANKARA'S PREMIUM HAIR TRANSPLANT CENTER",
      title1: "Natural Results.\nPremium ",
      title2: "Experience.",
      desc: "Luxury is not about showing off. It's about perfectly placed grafts, a natural hairline, and the confidence that follows.",
      cta1: "WhatsApp Analysis",
      cta2: "How It Works?",
      scroll: "SCROLL",
      stat1: "98.6%",
      statLabel: "Success Rate"
    },
    services: {
      label: "OUR SERVICES",
      title: "Services Provided by Our Experts",
      details: "MORE DETAILS",
      items: [
        { num: "01", title: "DHI Hair Transplant", desc: "Direct graft placement under the skin without opening channels using Choi Pen technology. The premium technique for the densest and most natural look.", features: ["Direct implant without channel opening", "Denser graft placement", "Much more natural hairline", "Fast recovery process"] },
        { num: "02", title: "FUE Hair Transplant", desc: "Individual follicular unit extraction with micro motor and sapphire blade technology. Scar-free, minimum pain, maximum results.", features: ["Micro incisions with sapphire blade", "Harvesting from back and nape", "Virtually scarless healing", "Large graft capacity"] },
        { num: "03", title: "PRP Treatment", desc: "Nourish your hair roots with growth factors from your own blood. Ideal support for pre-transplant preparation and post-transplant care.", features: ["Derived from your own blood", "Strengthens hair roots", "Slows down hair loss", "Accelerates post-transplant healing"] },
        { num: "04", title: "Beard Transplant", desc: "Permanent beard solution planned in the natural growth direction to define your facial contours. Special for sparse or non-growing areas.", features: ["Design customized to facial contours", "Placement in natural beard direction", "Permanent and maintenance-free", "Mustache, sideburns and nape included"] },
        { num: "05", title: "Micro Eyebrow Transplant", desc: "Natural and permanent eyebrow design in harmony with facial symmetry, using individual root grafts. Hair direction and angle planned with artistic precision.", features: ["Design customized to facial symmetry", "Placement matching hair direction", "Solution for sparse or lost eyebrows", "Lifetime permanent result"] },
        { num: "06", title: "Long Hair Eyebrow Transplant", desc: "Special technique performed with unshaved long hair roots. Get long and visible eyebrows immediately after transplant, no waiting for results.", features: ["Implantation with unshaved long hair", "Immediately visible long eyebrows", "Return to normal life right away", "Denser coverage than Micro Eyebrow"] },
        { num: "07", title: "Hair Mesotherapy", desc: "Revitalizing treatment that nourishes roots by injecting vitamin, mineral and amino acid mixtures into the scalp, stopping hair loss.", features: ["Direct nutritional support to hair roots", "Effective anti-hair loss formula", "Improves hair quality and shine", "Painless, comfortable application"] },
        { num: "08", title: "Hair Exosome Treatment", desc: "Advanced technology hair treatment that stimulates hair follicles with exosomes derived from stem cells, providing cellular level renewal.", features: ["Cellular level renewal", "Hair follicle stimulating effect", "Enhanced version of PRP", "Anti-hair loss and thickening"] }
      ]
    },
    why: {
      label: "WHY SER HAIR",
      title: "Reliable Results\nWith 15 Years of Experience",
      desc: "At SerHair, every patient is evaluated with an individual approach. We offer you the best service with the latest technology devices, sterile environment and expert physician staff.",
      stats: { years: "Years Experience", patients: "Happy Patients", grafts: "Grafts Implanted" },
      cta: "About Us"
    },
    process: {
      label: "HAIR TRANSPLANT PROCESS",
      title: "Hair Transplant Step by Step",
      steps: [
        { num: "01", title: "Online Consultation", desc: "Send your photos to our expert team and get your first evaluation." },
        { num: "02", title: "Detailed Analysis", desc: "Hair loss area, graft requirement and planning are performed." },
        { num: "03", title: "Surgery Day", desc: "A comfortable procedure in a sterile environment with local anesthesia." },
        { num: "04", title: "Follow-up & Results", desc: "Full results in 6-12 months. Regular check-ups and support." }
      ]
    },
    gallery: { label: "RESULTS", title: "Real Patient\nResults", before: "BEFORE", after: "AFTER", cta: "View All Results" },
    testimonials: {
      label: "TESTIMONIALS", title: "Experiences of\nOur Happy Patients",
      items: [
        { quote: "After researching for about two years, I decided on Dr. Rıdvan Bozkurt and his team. I'm so glad I trusted them. The operation was very successful, I felt no pain whatsoever.", name: "Kerem Y.", op: "FUE Hair Transplant" },
        { quote: "Thank you very much to Mr. Rıdvan and his team. The attention before, during and after the transplant was never lacking. Even after 18 months, they still care. You can choose with peace of mind.", name: "Ömer E.", op: "DHI Hair Transplant" },
        { quote: "The doctors' knowledge and experience, and their attention to patients is really excellent. The only address I can recommend to everyone. 100% successful operation.", name: "Ahmet F. Y.", op: "DHI Hair Transplant" }
      ]
    },
    faq: {
      label: "FAQ", title: "What You Wonder",
      items: [
        { q: "Is hair transplant painful?", a: "Since it is performed under local anesthesia, you will not feel any pain during the procedure. There may be slight sensitivity after the procedure." },
        { q: "How long is the recovery period?", a: "There may be mild swelling for the first 3 days. Scabs fall off within 10-14 days. Full results are seen in 6-12 months." },
        { q: "Is hair transplant permanent?", a: "Yes, since the implanted grafts are taken from the donor area, they are genetically resistant to shedding and permanent for life." },
        { q: "How much does hair transplant cost?", a: "Prices vary depending on the number of grafts and the technique used. Get your personalized price with a free consultation." },
        { q: "What should I pay attention to after surgery?", a: "Avoid using pillows for the first 3 days, do not exercise, do not touch the hair roots. A detailed care guide is provided." }
      ]
    },
    contact: {
      label: "CONTACT",
      title: "Get a Free\nConsultation",
      desc: "Get an evaluation from our expert team within 24 hours. Fill out the form for a customized solution and price offer.",
      phone: "+90 (542) 118 06 78",
      address: "Mutlukent, Çankaya/Ankara",
      email: "serhair1@gmail.com",
      form: { name: "Full Name", phone: "Phone", email: "Email", message: "Your Message", submit: "SEND", sending: "SENDING...", success: "Thank You!", successMsg: "Your message has been sent to serhair1@gmail.com. We will get back to you as soon as possible.", error: "An Error Occurred", errorMsg: "Please try again or contact us by phone.", retry: "TRY AGAIN" }
    },
    footer: {
      desc: "Ankara's premium hair transplant center. 15 years of experience, natural results.",
      quickLinks: "QUICK LINKS", links: ["Home", "Services", "About Us", "FAQ", "Contact"],
      services: "SERVICES", allServices: ["DHI Hair Transplant", "FUE Hair Transplant", "PRP Treatment", "Beard Transplant", "Micro Eyebrow Transplant", "Long Hair Eyebrow", "Hair Mesotherapy", "Hair Exosome"],
      contact: "CONTACT", fullAddress: "Mutlukent, Angora Blvd. No: 25, 06800 Çankaya/Ankara",
      copyright: "2025 SerHair. All rights reserved."
    },
    govTrust: {
      title: "Ministry of Health Approved",
      desc: "All our procedures are carried out in Ministry of Health licensed medical centers, in sterile conditions, by expert professionals in the healthcare field."
    },
    cookie: {
      text: "By using our site, you accept our cookie policy. For more information",
      policyLink: "Cookie Policy",
      kvkkLink: "Privacy Policy",
      accept: "Accept"
    },
    social: { follow: "Follow us on social media" },
    blog: { title: "Hair Health & Aesthetic Guide", readMore: "Read More", back: "Go Back", readTime: "read", contactText: "For more information or to schedule a free consultation" },
    preloader: { loading: "LOADING" },
    lang: { select: "Select Language", tr: "Türkçe", en: "English", de: "Deutsch", ru: "Русский", ar: "العربية", fr: "Français" },
    dir: "ltr"
  },
  de: {
    nav: { home: "STARTSEITE", services: "DIENSTLEISTUNGEN", faq: "FAQ", contact: "KONTAKT", book: "Termin Buchen" },
    hero: {
      label: "ANKARAS PREMIUM HAARTRANSPLANTATIONSZENTRUM",
      title1: "Natürliche Ergebnisse.\nPremium ",
      title2: "Erfahrung.",
      desc: "Luxus ist nicht Show. Es ist ein perfekt platzierter Graft, eine natürliche Haarlinie und das Selbstvertrauen, das folgt.",
      cta1: "WhatsApp Analyse",
      cta2: "Wie Funktioniert Es?",
      scroll: "SCROLLEN",
      stat1: "98,6%",
      statLabel: "Erfolgsquote"
    },
    services: {
      label: "UNSERE DIENSTLEISTUNGEN",
      title: "Von Unseren Experten Angebotene Leistungen",
      details: "MEHR DETAILS",
      items: [
        { num: "01", title: "DHI Haartransplantation", desc: "Direkte Platzierung von Transplantaten unter die Haut ohne Kanalöffnung mit Choi Pen Technologie. Die Premium-Technik für das dichteste und natürlichste Aussehen.", features: ["Direktes Implantat ohne Kanalöffnung", "Dichtere Transplantatplatzierung", "Viel natürlichere Haarlinie", "Schneller Heilungsprozess"] },
        { num: "02", title: "FUE Haartransplantation", desc: "Individuelle follikuläre Einheitextraktion mit Mikromotor und Saphirklinge. Narbenfrei, minimale Schmerzen, maximale Ergebnisse.", features: ["Mikroinschnitte mit Saphirklinge", "Entnahme vom Hinterkopf", "Nahezu narbenfreie Heilung", "Große Transplantatkapazität"] },
        { num: "03", title: "PRP Behandlung", desc: "Nähren Sie Ihre Haarwurzeln mit Wachstumsfaktoren aus Ihrem eigenen Blut. Ideale Unterstützung für Vorbereitung und Nachsorge.", features: ["Aus Ihrem eigenen Blut gewonnen", "Stärkt Haarwurzeln", "Verlangsamt Haarausfall", "Beschleunigt Heilung"] },
        { num: "04", title: "Barttransplantation", desc: "Permanente Bartlösung geplant in natürlicher Wuchsrichtung. Für spärliche oder nicht wachsende Bereiche.", features: ["Design nach Gesichtskontur", "Platzierung in natürlicher Richtung", "Permanent und wartungsfrei", "Schnurrbart, Koteletten"] },
        { num: "05", title: "Mikro-Augenbrauentransplantation", desc: "Natürliches und permanentes Augenbrauendesign mit Einzelhaarwurzeln für Gesichtssymmetrie.", features: ["An Gesichtssymmetrie angepasst", "Haarrichtungsgerecht", "Lösung für spärliche Brauen", "Lebenslang permanent"] },
        { num: "06", title: "Long Hair Augenbrauen", desc: "Spezialtechnik mit langen Haaren. Sofort sichtbare lange Augenbrauen nach Transplantation.", features: ["Mit langen Haaren", "Sofort sichtbare Brauen", "Sofortiger Alltag", "Dichtere Abdeckung"] },
        { num: "07", title: "Haarmesotherapie", desc: "Revitalisierende Behandlung mit Vitamin-, Mineral- und Aminosäuremischungen zur Haarwurzelnährung.", features: ["Direkte Nährstoffzufuhr", "Anti-Haarausfall-Formel", "Verbessert Haarqualität", "Schmerzlose Anwendung"] },
        { num: "08", title: "Haar-Exosomen Therapie", desc: "Fortschrittliche Technologie-Behandlung mit Stammzell-Exosomen für zelluläre Erneuerung.", features: ["Zelluläre Erneuerung", "Follikelstimulierung", "Verbesserte PRP-Version", "Anti-Haarausfall"] }
      ]
    },
    why: {
      label: "WARUM SER HAIR",
      title: "Verlässliche Ergebnisse\nMit 15 Jahren Erfahrung",
      desc: "Bei SerHair wird jeder Patient individuell behandelt. Wir bieten Ihnen den besten Service mit modernster Technologie.",
      stats: { years: "Jahre Erfahrung", patients: "Zufriedene Patienten", grafts: "Implantierte Grafts" },
      cta: "Über Uns"
    },
    process: {
      label: "HAARTRANSPLANTATION PROZESS",
      title: "Haartransplantation Schritt Für Schritt",
      steps: [
        { num: "01", title: "Online Beratung", desc: "Senden Sie Ihre Fotos an unser Expertenteam und erhalten Sie Ihre erste Bewertung." },
        { num: "02", title: "Detaillierte Analyse", desc: "Haarausfallbereich, Graft-Bedarf und Planung werden durchgeführt." },
        { num: "03", title: "Operationstag", desc: "Ein komfortabler Eingriff in steriler Umgebung mit Lokalanästhesie." },
        { num: "04", title: "Nachsorge & Ergebnisse", desc: "Volle Ergebnisse in 6-12 Monaten. Regelmäßige Kontrollen und Unterstützung." }
      ]
    },
    gallery: { label: "ERGEBNISSE", title: "Echte Patienten\nErgebnisse", before: "VORHER", after: "NACHHER", cta: "Alle Ergebnisse" },
    testimonials: {
      label: "BEWERTUNGEN", title: "Erfahrungen Unserer\nZufriedenen Patienten",
      items: [
        { quote: "Nach etwa zwei Jahren Recherche entschied ich mich für Dr. Rıdvan Bozkurt und sein Team. Ich bin so froh, dass ich ihnen vertraut habe. Die Operation war sehr erfolgreich, ich habe keine Schmerzen gespürt.", name: "Kerem Y.", op: "FUE Haartransplantation" },
        { quote: "Vielen Dank an Herrn Rıdvan und sein Team. Die Aufmerksamkeit vor, während und nach der Transplantation war stets vorhanden. Auch nach 18 Monaten kümmern sie sich noch. Sie können mit ruhigem Gewissen wählen.", name: "Ömer E.", op: "DHI Haartransplantation" },
        { quote: "Das Wissen und die Erfahrung der Ärzte sowie ihre Aufmerksamkeit für die Patienten sind wirklich hervorragend. Die einzige Adresse, die ich jedem empfehlen kann. 100% erfolgreiche Operation.", name: "Ahmet F. Y.", op: "DHI Haartransplantation" }
      ]
    },
    faq: {
      label: "FAQ", title: "Was Sie Wissen Wollen",
      items: [
        { q: "Ist Haartransplantation schmerzhaft?", a: "Da sie unter Lokalanästhesie durchgeführt wird, spüren Sie während des Eingriffs keine Schmerzen. Nach dem Eingriff kann eine leichte Empfindlichkeit auftreten." },
        { q: "Wie lang ist die Erholungszeit?", a: "In den ersten 3 Tagen können leichte Schwellungen auftreten. Krusten fallen innerhalb von 10-14 Tagen ab. Volle Ergebnisse sind in 6-12 Monaten sichtbar." },
        { q: "Ist Haartransplantation dauerhaft?", a: "Ja, da die implantierten Grafts aus dem Spenderbereich stammen, sind sie genetisch resistent gegen Haarausfall und lebenslang dauerhaft." },
        { q: "Was kostet Haartransplantation?", a: "Die Preise variieren je nach Anzahl der Grafts und der verwendeten Technik. Erhalten Sie Ihren persönlichen Preis bei einer kostenlosen Beratung." },
        { q: "Worauf sollte ich nach der OP achten?", a: "Vermeiden Sie 3 Tage lang Kissen, sportliche Aktivitäten und berühren Sie die Haarwurzeln nicht. Eine detaillierte Pflegeanleitung wird bereitgestellt." }
      ]
    },
    contact: {
      label: "KONTAKT",
      title: "Holen Sie Sich Eine\nKostenlose Beratung",
      desc: "Erhalten Sie innerhalb von 24 Stunden eine Bewertung von unserem Expertenteam. Füllen Sie das Formular für ein maßgeschneidertes Angebot aus.",
      phone: "+90 (542) 118 06 78",
      address: "Mutlukent, Çankaya/Ankara",
      email: "serhair1@gmail.com",
      form: { name: "Vollständiger Name", phone: "Telefon", email: "E-Mail", message: "Ihre Nachricht", submit: "SENDEN", sending: "WIRD GESENDET...", success: "Vielen Dank!", successMsg: "Ihre Nachricht wurde an serhair1@gmail.com gesendet. Wir werden uns so schnell wie möglich bei Ihnen melden.", error: "Ein Fehler Ist Aufgetreten", errorMsg: "Bitte versuchen Sie es erneut oder kontaktieren Sie uns telefonisch.", retry: "ERNEUT VERSUCHEN" }
    },
    footer: {
      desc: "Ankaras Premium Haartransplantationszentrum. 15 Jahre Erfahrung, natürliche Ergebnisse.",
      quickLinks: "SCHNELLLINKS", links: ["Startseite", "Leistungen", "Über Uns", "FAQ", "Kontakt"],
      services: "DIENSTLEISTUNGEN", allServices: ["DHI Haartransplantation", "FUE Haartransplantation", "PRP Behandlung", "Barttransplantation", "Mikro-Augenbrauen", "Long Hair Augenbrauen", "Haarmesotherapie", "Haar-Exosomen"],
      contact: "KONTAKT", fullAddress: "Mutlukent, Angora Blvd. Nr. 25, 06800 Çankaya/Ankara",
      copyright: "2025 SerHair. Alle Rechte vorbehalten."
    },
    govTrust: {
      title: "Vom Gesundheitsministerium Zugelassen",
      desc: "Alle unsere Verfahren werden in vom Gesundheitsministerium lizenzierten medizinischen Zentren, unter sterilen Bedingungen, von Gesundheitsexperten durchgeführt."
    },
    cookie: {
      text: "Durch die Nutzung unserer Website akzeptieren Sie unsere Cookie-Richtlinie. Für mehr Informationen",
      policyLink: "Cookie-Richtlinie",
      kvkkLink: "Datenschutzerklärung",
      accept: "Akzeptieren"
    },
    social: { follow: "Folgen Sie uns in den sozialen Medien" },
    blog: { title: "Haargesundheit & Ästhetik Guide", readMore: "Mehr Lesen", back: "Zurück", readTime: "Lesezeit", contactText: "Für weitere Informationen oder eine kostenlose Beratung" },
    preloader: { loading: "LADEN" },
    lang: { select: "Sprache Wählen", tr: "Türkçe", en: "English", de: "Deutsch", ru: "Русский", ar: "العربية", fr: "Français" },
    dir: "ltr"
  },
  ru: {
    nav: { home: "ГЛАВНАЯ", services: "УСЛУГИ", faq: "ВОПРОСЫ", contact: "КОНТАКТ", book: "Записаться" },
    hero: {
      label: "ПРЕМИУМ ЦЕНТР ТРАНСПЛАНТАЦИИ ВОЛОС АНКАРЫ",
      title1: "Естественные Результаты.\nПремиум ",
      title2: "Опыт.",
      desc: "Роскошь — это не показуха. Это идеально размещенный графт, естественная линия роста волос и уверенность, которая следует за ней.",
      cta1: "WhatsApp Анализ",
      cta2: "Как Это Работает?",
      scroll: "ПРОКРУТИТЬ",
      stat1: "98,6%",
      statLabel: "Показатель Успеха"
    },
    services: {
      label: "НАШИ УСЛУГИ",
      title: "Услуги Предоставляемые Нашими Экспертами",
      details: "ПОДРОБНЕЕ",
      items: [
        { num: "01", title: "DHI Трансплантация Волос", desc: "Прямое размещение графтов под кожу без открытия каналов с помощью технологии Choi Pen. Премиум-техника для самого плотного и естественного вида.", features: ["Прямое вживление", "Более плотное размещение", "Более естественная линия роста", "Быстрый процесс восстановления"] },
        { num: "02", title: "FUE Трансплантация Волос", desc: "Индивидуальное извлечение фолликулярных единиц микромотором и сапфировым лезвием. Без рубцов, минимум боли.", features: ["Микро-разрезы сапфиром", "Забор с затылка", "Практически бесшрамое заживление", "Большая емкость графтов"] },
        { num: "03", title: "PRP Терапия", desc: "Питайте корни волос факторами роста из собственной крови. Идеальная поддержка до и после трансплантации.", features: ["Из собственной крови", "Укрепляет корни", "Замедляет выпадение", "Ускоряет заживление"] },
        { num: "04", title: "Трансплантация Бороды", desc: "Постоянное решение для бороды в направлении естественного роста. Для редких участков.", features: ["Дизайн по контурам лица", "В направлении роста", "Постоянно и без ухода", "Усы, бакенбарды"] },
        { num: "05", title: "Микро Трансплантация Бровей", desc: "Естественный и постоянный дизайн бровей для симметрии лица с отдельными корневыми графтами.", features: ["По симметрии лица", "По направлению роста", "Решение для редких бровей", "Пожизненно постоянный"] },
        { num: "06", title: "Long Hair Брови", desc: "Специальная техника с длинными волосами без бритья. Сразу видимые длинные брови после трансплантации.", features: ["С длинными волосами", "Сразу видимые брови", "Мгновенный возврат к жизни", "Более плотное покрытие"] },
        { num: "07", title: "Мезотерапия Волос", desc: "Омолаживающее лечение инъекциями витаминов, минералов и аминокислот для питания корней волос.", features: ["Прямое питание корней", "Анти-выпадение", "Улучшает качество волос", "Безболезненно"] },
        { num: "08", title: "Экзосомная Терапия", desc: "Передовое лечение с экзосомами стволовых клеток для обновления на клеточном уровне.", features: ["Клеточное обновление", "Стимуляция фолликулов", "Усиленная PRP", "Против выпадения"] }
      ]
    },
    why: {
      label: "ПОЧЕМУ SER HAIR",
      title: "Надежные Результаты\nС 15-летним Опытом",
      desc: "В SerHair каждый пациент оценивается индивидуально. Мы предлагаем лучший сервис с новейшими технологиями.",
      stats: { years: "Лет Опыта", patients: "Довольных Пациентов", grafts: "Имплантированных Графтов" },
      cta: "О Нас"
    },
    process: {
      label: "ПРОЦЕСС ТРАНСПЛАНТАЦИИ",
      title: "Трансплантация Волос Шаг За Шагом",
      steps: [
        { num: "01", title: "Онлайн Консультация", desc: "Отправьте свои фотографии нашей команде экспертов и получите первую оценку." },
        { num: "02", title: "Детальный Анализ", desc: "Выполняется планирование области выпадения, потребности в графтах." },
        { num: "03", title: "День Операции", desc: "Комфортная процедура в стерильной среде под местной анестезией." },
        { num: "04", title: "Наблюдение и Результаты", desc: "Полные результаты через 6-12 месяцев. Регулярные проверки и поддержка." }
      ]
    },
    gallery: { label: "РЕЗУЛЬТАТЫ", title: "Реальные Результаты\nПациентов", before: "ДО", after: "ПОСЛЕ", cta: "Все Результаты" },
    testimonials: {
      label: "ОТЗЫВЫ", title: "Истории Наших\nДовольных Пациентов",
      items: [
        { quote: "После двух лет исследований я решился на доктора Рыдвана Бозкурта и его команду. Я так рад, что доверился им. Операция прошла очень успешно, я не почувствовал никакой боли.", name: "Керем Y.", op: "FUE Трансплантация" },
        { quote: "Большое спасибо господину Рыдвану и его команде. Внимание до, во время и после трансплантации никогда не ослабевало. Даже через 18 месяцев они всё ещё заботятся. Вы можете выбрать со спокойной душой.", name: "Омер E.", op: "DHI Трансплантация" },
        { quote: "Знания и опыт врачей, а также их внимание к пациентам действительно великолепны. Единственный адрес, который я могу рекомендовать всем. 100% успешная операция.", name: "Ахмет F. Y.", op: "DHI Трансплантация" }
      ]
    },
    faq: {
      label: "ВОПРОСЫ", title: "Что Вас Интересует",
      items: [
        { q: "Болезненна ли трансплантация волос?", a: "Поскольку процедура выполняется под местной анестезией, вы не почувствуете боли во время операции. После процедуры возможна легкая чувствительность." },
        { q: "Каков период восстановления?", a: "В первые 3 дня возможны небольшие отеки. Корочки отпадают в течение 10-14 дней. Полные результаты видны через 6-12 месяцев." },
        { q: "Постоянна ли трансплантация волос?", a: "Да, поскольку имплантированные графты взяты из донорской зоны, они генетически устойчивы к выпадению и постоянны на всю жизнь." },
        { q: "Сколько стоит трансплантация волос?", a: "Цены варьируются в зависимости от количества графтов и используемой техники. Получите индивидуальную цену на бесплатной консультации." },
        { q: "На что следует обращать внимание после операции?", a: "Первые 3 дня избегайте подушек, не занимайтесь спортом, не трогайте корни волос. Предоставляется подробное руководство по уходу." }
      ]
    },
    contact: {
      label: "КОНТАКТ",
      title: "Получите Бесплатную\nКонсультацию",
      desc: "Получите оценку от нашей команды экспертов в течение 24 часов. Заполните форму для индивидуального решения и предложения цены.",
      phone: "+90 (542) 118 06 78",
      address: "Мутлукент, Чанкая/Анкара",
      email: "serhair1@gmail.com",
      form: { name: "ФИО", phone: "Телефон", email: "Email", message: "Ваше Сообщение", submit: "ОТПРАВИТЬ", sending: "ОТПРАВКА...", success: "Спасибо!", successMsg: "Ваше сообщение отправлено на serhair1@gmail.com. Мы свяжемся с вами как можно скорее.", error: "Произошла Ошибка", errorMsg: "Пожалуйста, попробуйте снова или свяжитесь с нами по телефону.", retry: "ПОВТОРИТЬ" }
    },
    footer: {
      desc: "Премиальный центр трансплантации волос Анкары. 15 лет опыта, естественные результаты.",
      quickLinks: "БЫСТРЫЕ ССЫЛКИ", links: ["Главная", "Услуги", "О Нас", "Вопросы", "Контакт"],
      services: "УСЛУГИ", allServices: ["DHI Трансплантация", "FUE Трансплантация", "PRP Терапия", "Трансплантация Бороды", "Микро Брови", "Long Hair Брови", "Мезотерапия", "Экзосомная Терапия"],
      contact: "КОНТАКТ", fullAddress: "Мутлукент, бул. Ангора, 25, 06800 Чанкая/Анкара",
      copyright: "2025 SerHair. Все права защищены."
    },
    govTrust: {
      title: "Одобрено Министерством Здравоохранения",
      desc: "Все наши процедуры проводятся в медицинских центрах, лицензированных Министерством здравоохранения, в стерильных условиях, экспертами в области здравоохранения."
    },
    cookie: {
      text: "Используя наш сайт, вы принимаете нашу политику использования файлов cookie. Для получения дополнительной информации",
      policyLink: "Политика Cookie",
      kvkkLink: "Политика Конфиденциальности",
      accept: "Принять"
    },
    social: { follow: "Следите за нами в социальных сетях" },
    blog: { title: "Руководство по Здоровью Волос", readMore: "Читать Далее", back: "Назад", readTime: "время чтения", contactText: "Для получения дополнительной информации или бесплатной консультации" },
    preloader: { loading: "ЗАГРУЗКА" },
    lang: { select: "Выбрать Язык", tr: "Türkçe", en: "English", de: "Deutsch", ru: "Русский", ar: "العربية", fr: "Français" },
    dir: "ltr"
  },
  ar: {
    nav: { home: "الرئيسية", services: "الخدمات", faq: "الأسئلة", contact: "اتصل بنا", book: "احجز موعد" },
    hero: {
      label: "مركز زراعة الشعر الممتاز في أنقرة",
      title1: "نتائج طبيعية.\nتجربة ",
      title2: "ممتازة.",
      desc: "الفخامة ليست للتباهي. إنها زرعة موضوعة بشكل مثالي، وخط شعر طبيعي، والثقة التي تليها.",
      cta1: "تحليل واتساب",
      cta2: "كيف يعمل؟",
      scroll: "مرر لأسفل",
      stat1: "98.6%",
      statLabel: "معدل النجاح"
    },
    services: {
      label: "خدماتنا",
      title: "الخدمات المقدمة من خبرائنا",
      details: "المزيد من التفاصيل",
      items: [
        { num: "01", title: "زراعة الشعر DHI", desc: "زرع مباشر تحت الجلد بدون فتح قنوات بتقنية تشوي بين. تقنية ممتازة لأكثر مظهر كثيف وطبيعي.", features: ["زرع مباشر بدون فتح قنوات", "توزيع أكثر كثافة", "خط شعر أكثر طبيعية", "عملية شفاء سريعة"] },
        { num: "02", title: "زراعة الشعر FUE", desc: "استخراج وحدة بصيلية فردية بمحرك دقيق وشفرة ياقوت. بدون ندبات، أقل ألم، أقصى نتائج.", features: ["شقوق دقيقة بالياقوت", "الأخذ من مؤخرة الرأس", "شفاء شبه خالٍ من الندبات", "سعة grafts كبيرة"] },
        { num: "03", title: "علاج PRP", desc: "غذي جذور شعرك بعوامل النمو من دمك الخاص. دعم مثالي للتحضير والعناية بعد الزراعة.", features: ["مشتق من دمك الخاص", "يقوي جذور الشعر", "يبطئ تساقط الشعر", "يسرع الشفاء بعد الزراعة"] },
        { num: "04", title: "زراعة اللحية", desc: "حل دائم للحية مخطط في اتجاه النمو الطبيعي. خاص للمناطق النادرة أو غير النامية.", features: ["تصميم حسب ملامح الوجه", "وضع في اتجاه اللحية الطبيعي", "دائم وبدون صيانة", "شوارب، burns والرقبة"] },
        { num: "05", title: "زراعة الحاجب المايكرو", desc: "تصميم حاجب طبيعي ودائم متناسق مع تناسق الوجه باستخدام بصيلات فردية.", features: ["تصميم حسب تناسق الوجه", "وضع يتناسب مع اتجاه الشعر", "حل للحواجب النادرة", "نتيجة دائمة مدى الحياة"] },
        { num: "06", title: "زراعة الحاجب بالشعر الطويل", desc: "تقنية خاصة بشعر طويل بدون حلاقة. حواجب طويلة ومرئية فوراً بعد الزراعة.", features: ["بشعر طويل بدون حلاقة", "حواجب طويلة فورية", "العودة للحياة العادية فوراً", "تغطية أكثر كثافة"] },
        { num: "07", title: "ميزوثيرابي الشعر", desc: "علاج مجدد بحقن مزيج من الفيتامينات والمعادن والأحماض الأمينية لتغذية جذور الشعر.", features: ["تغذية مباشرة لجذور الشعر", "تركيبة فعالة ضد التساقط", "يحسن جودة الشعر ولمعانه", "تطبيق مريح بدون ألم"] },
        { num: "08", title: "علاج إكسوسوم الشعر", desc: "علاج بتقنية متقدمة بإكسوسومات الخلايا الجذعية للتجديد على المستوى الخلوي.", features: ["تجديد خلوي", "تحفيز البصيلات", "نسخة معززة من PRP", "مضاد للتساقط وكثاف"] }
      ]
    },
    why: {
      label: "لماذا سير هير",
      title: "نتائج موثوقة\nمع 15 سنة خبرة",
      desc: "في سير هير، يتم تقييم كل مريض بشكل فردي. نقدم لك أفضل خدمة بأحدث التقنيات والبيئة المعقمة.",
      stats: { years: "سنوات الخبرة", patients: "مرضى سعداء", grafts: " grafts مزروعة" },
      cta: "من نحن"
    },
    process: {
      label: "عملية زراعة الشعر",
      title: "زراعة الشعر خطوة بخطوة",
      steps: [
        { num: "01", title: "استشارة أونلاين", desc: "أرسل صورك لفريق الخبراء واحصل على التقييم الأولي." },
        { num: "02", title: "تحليل مفصل", desc: "يتم التخطيط لمنطقة التساقط وعدد grafts المطلوب." },
        { num: "03", title: "يوم العملية", desc: "إجراء مريح في بيئة معقمة تحت التخدير الموضعي." },
        { num: "04", title: "المتابعة والنتائج", desc: "نتائج كاملة خلال 6-12 شهر. فحوصات منتظمة ودعم." }
      ]
    },
    gallery: { label: "النتائج", title: "نتائج مرضى\nحقيقية", before: "قبل", after: "بعد", cta: "جميع النتائج" },
    testimonials: {
      label: "آراء", title: "تجارب مرضانا\nالسعداء",
      items: [
        { quote: "بعد حوالي عامين من البحث، قررت الثقة بالدكتور رضوان بوزكورت وفريقه. أنا سعيد جداً لأنني وثقت بهم. كانت العملية ناجحة جداً، لم أشعر بأي ألم.", name: "كيريم Y.", op: "زراعة الشعر FUE" },
        { quote: "شكراً جزيلاً للسيد رضوان وفريقه. الاهتمام قبل وأثناء وبعد الزراعة لم ينقص أبداً. حتى بعد 18 شهراً، ما زالوا يهتمون. يمكنك الاختيار براحة بال.", name: "أومر E.", op: "زراعة الشعر DHI" },
        { quote: "معرفة الأطباء وخبرتهم واهتمامهم بالمرضى ممتازة حقاً. العنوان الوحيد الذي يمكنني أن أوصي به للجميع. عملية ناجحة 100%.", name: "أحمد F. Y.", op: "زراعة الشعر DHI" }
      ]
    },
    faq: {
      label: "الأسئلة الشائعة", title: "ما تريد معرفته",
      items: [
        { q: "هل زراعة الشعر مؤلمة؟", a: "بما أنها تُجرى تحت التخدير الموضعي، لن تشعر بأي ألم أثناء الإجراء. قد تكون هناك حساسية خفيفة بعد العملية." },
        { q: "ما هي مدة الشفاء؟", a: "قد تكون هناك تورمات خفيفة في أول 3 أيام. تسقط القشور خلال 10-14 يوم. النتائج الكاملة تظهر خلال 6-12 شهر." },
        { q: "هل زراعة الشعر دائمة؟", a: "نعم، بما أن grafts المزروعة مأخوذة من منطقة التبرع، فهي مقاومة وراثياً للتساقط ودائمة مدى الحياة." },
        { q: "كم تكلفة زراعة الشعر؟", a: "تختلف الأسعار حسب عدد grafts والتقنية المستخدمة. احصل على سعرك المخصص مع استشارة مجانية." },
        { q: "ماذا يجب أن أنتبه بعد العملية؟", a: "تجنب استخدام الوسائد لأول 3 أيام، لا تمارس الرياضة، لا تلمس جذور الشعر. يُقدم دليل عناية مفصل." }
      ]
    },
    contact: {
      label: "اتصل بنا",
      title: "احصل على استشارة\nمجانية",
      desc: "احصل على تقييم من فريق الخبراء خلال 24 ساعة. املأ النموذج للحصول على حل مخصص وعرض سعر.",
      phone: "+90 (542) 118 06 78",
      address: "موتلوكينت، جاناكيا/أنقرة",
      email: "serhair1@gmail.com",
      form: { name: "الاسم الكامل", phone: "الهاتف", email: "البريد الإلكتروني", message: "رسالتك", submit: "إرسال", sending: "جاري الإرسال...", success: "شكراً لك!", successMsg: "تم إرسال رسالتك إلى serhair1@gmail.com. سنعود إليك في أقرب وقت.", error: "حدث خطأ", errorMsg: "يرجى المحاولة مرة أخرى أو الاتصال بنا بالهاتف.", retry: "أعد المحاولة" }
    },
    footer: {
      desc: "مركز زراعة الشعر الممتاز في أنقرة. 15 سنة خبرة، نتائج طبيعية.",
      quickLinks: "روابط سريعة", links: ["الرئيسية", "الخدمات", "من نحن", "الأسئلة", "اتصل بنا"],
      services: "خدماتنا", allServices: ["زراعة DHI", "زراعة FUE", "علاج PRP", "زراعة اللحية", "زراعة الحاجب المايكرو", "زراعة الحاجب الطويل", "ميزوثيرابي", "علاج الإكسوسوم"],
      contact: "اتصل بنا", fullAddress: "موتلوكينت، شارع أنغورا 25، 06800 جاناكيا/أنقرة",
      copyright: "2025 SerHair. جميع الحقوق محفوظة."
    },
    govTrust: {
      title: "معتمد من وزارة الصحة",
      desc: "جميع إجراءاتنا تُجرى في مراكز طبية مرخصة من وزارة الصحة، في ظروف معقمة، من قبل متخصصين في مجال الرعاية الصحية."
    },
    cookie: {
      text: "باستخدام موقعنا، فإنك تقبل سياسة ملفات تعريف الارتباط. لمزيد من المعلومات",
      policyLink: "سياسة ملفات تعريف الارتباط",
      kvkkLink: "سياسة الخصوصية",
      accept: "قبول"
    },
    social: { follow: "تابعنا على وسائل التواصل الاجتماعي" },
    blog: { title: "دليل صحة الشعر والجمال", readMore: "اقرأ أكثر", back: "العودة", readTime: "وقت القراءة", contactText: "لمزيد من المعلومات أو لتحديد موعد استشارة مجانية" },
    preloader: { loading: "جاري التحميل" },
    lang: { select: "اختر اللغة", tr: "Türkçe", en: "English", de: "Deutsch", ru: "Русский", ar: "العربية", fr: "Français" },
    dir: "rtl"
  },
  fr: {
    nav: { home: "ACCUEIL", services: "SERVICES", faq: "FAQ", contact: "CONTACT", book: "Prendre RDV" },
    hero: {
      label: "CENTRE DE GREFFE PREMIUM D'ANKARA",
      title1: "Résultats Naturels.\nExpérience ",
      title2: "Premium.",
      desc: "Le luxe n'est pas de la vaine gloire. C'est un greffon parfaitement placé, une ligne de cheveux naturelle et la confiance qui s'ensuit.",
      cta1: "Analyse WhatsApp",
      cta2: "Comment Ça Marche?",
      scroll: "DÉFILER",
      stat1: "98,6%",
      statLabel: "Taux de Réussite"
    },
    services: {
      label: "NOS SERVICES",
      title: "Services Fournis par Nos Experts",
      details: "PLUS DE DÉTAILS",
      items: [
        { num: "01", title: "Greffe DHI", desc: "Placement direct de greffons sous la peau sans ouverture de canaux avec la technologie Choi Pen. Technique premium pour le look le plus dense et naturel.", features: ["Implant direct sans canal", "Placement plus dense", "Ligne de cheveux plus naturelle", "Processus de récupération rapide"] },
        { num: "02", title: "Greffe FUE", desc: "Extraction d'unités folliculaires individuelles avec micromoteur et lame saphir. Sans cicatrices, minimum de douleur.", features: ["Micro-incisions au saphir", "Prélèvement arrière", "Guérison quasi sans cicatrice", "Grande capacité de greffons"] },
        { num: "03", title: "Traitement PRP", desc: "Nourrissez vos racines capillaires avec des facteurs de croissance de votre propre sang. Support idéal avant et après la greffe.", features: ["Issu de votre propre sang", "Renforce les racines", "Ralentit la chute", "Accélère la guérison"] },
        { num: "04", title: "Greffe de Barbe", desc: "Solution permanente pour barbe planifiée dans le sens naturel de croissance. Pour les zones clairsemées.", features: ["Design selon contours du visage", "Placement dans le sens naturel", "Permanent sans entretien", "Moustaches, pattes"] },
        { num: "05", title: "Greffe Sourcils Micro", desc: "Design de sourcils naturel et permanent avec des greffons individuels pour la symétrie faciale.", features: ["Selon symétrie du visage", "Selon direction du poil", "Solution pour sourcils clairsemés", "Résultat permanent à vie"] },
        { num: "06", title: "Long Hair Sourcils", desc: "Technique spéciale avec cheveux longs sans rasage. Sourcils longs et visibles immédiatement après la greffe.", features: ["Avec cheveux longs", "Sourcils longs immédiats", "Retour à la normale immédiat", "Couverture plus dense"] },
        { num: "07", title: "Mésothérapie Capillaire", desc: "Traitement revitalisant par injections de vitamines, minéraux et acides aminés pour nourrir les racines.", features: ["Nutrition directe des racines", "Formule anti-chute efficace", "Améliore qualité des cheveux", "Application indolore"] },
        { num: "08", title: "Thérapie Exosomes", desc: "Traitement technologique avancé avec exosomes de cellules souches pour renouvellement cellulaire.", features: ["Renouvellement cellulaire", "Stimulation folliculaire", "Version améliorée PRP", "Anti-chute et épaississant"] }
      ]
    },
    why: {
      label: "POURQUOI SER HAIR",
      title: "Résultats Fiables\nAvec 15 Ans d'Expérience",
      desc: "Chez SerHair, chaque patient est évalué individuellement. Nous offrons le meilleur service avec les dernières technologies.",
      stats: { years: "Années d'Expérience", patients: "Patients Satisfaits", grafts: "Greffons Implantés" },
      cta: "À Propos"
    },
    process: {
      label: "PROCESSUS DE GREFFE",
      title: "Greffe de Cheveux Pas à Pas",
      steps: [
        { num: "01", title: "Consultation en Ligne", desc: "Envoyez vos photos à notre équipe d'experts et obtenez votre première évaluation." },
        { num: "02", title: "Analyse Détaillée", desc: "Planification de la zone de chute, besoins en greffons." },
        { num: "03", title: "Jour de l'Opération", desc: "Procédure confortable en environnement stérile sous anesthésie locale." },
        { num: "04", title: "Suivi et Résultats", desc: "Résultats complets en 6-12 mois. Contrôles réguliers et soutien." }
      ]
    },
    gallery: { label: "RÉSULTATS", title: "Résultats Réels\nde Patients", before: "AVANT", after: "APRÈS", cta: "Tous les Résultats" },
    testimonials: {
      label: "TÉMOIGNAGES", title: "Expériences de Nos\nPatients Satisfaits",
      items: [
        { quote: "Après environ deux ans de recherche, j'ai décidé de faire confiance au Dr Rıdvan Bozkurt et à son équipe. Je suis si heureux d'avoir eu confiance en eux. L'opération a été très réussie, je n'ai ressenti aucune douleur.", name: "Kerem Y.", op: "Greffe FUE" },
        { quote: "Merci beaucoup à M. Rıdvan et son équipe. L'attention avant, pendant et après la greffe n'a jamais fait défaut. Même après 18 mois, ils sont toujours attentifs. Vous pouvez choisir en toute tranquillité.", name: "Ömer E.", op: "Greffe DHI" },
        { quote: "Les connaissances et l'expérience des médecins, ainsi que leur attention aux patients sont vraiment excellentes. La seule adresse que je peux recommander à tout le monde. Opération 100% réussie.", name: "Ahmet F. Y.", op: "Greffe DHI" }
      ]
    },
    faq: {
      label: "FAQ", title: "Ce Que Vous Voulez Savoir",
      items: [
        { q: "La greffe de cheveux est-elle douloureuse?", a: "Étant réalisée sous anesthésie locale, vous ne ressentirez aucune douleur pendant l'intervention. Une légère sensibilité peut survenir après." },
        { q: "Quelle est la durée de récupération?", a: "De légers gonflements peuvent apparaître les 3 premiers jours. Les croûtes tombent en 10-14 jours. Résultats complets en 6-12 mois." },
        { q: "La greffe de cheveux est-elle permanente?", a: "Oui, les greffons implantés étant prélevés de la zone donneuse, ils sont génétiquement résistants à la chute et permanents à vie." },
        { q: "Combien coûte la greffe de cheveux?", a: "Les prix varient selon le nombre de greffons et la technique utilisée. Obtenez votre prix personnalisé avec une consultation gratuite." },
        { q: "À quoi dois-je faire attention après l'opération?", a: "Évitez les oreillers pendant 3 jours, ne faites pas de sport, ne touchez pas les racines. Un guide de soins détaillé est fourni." }
      ]
    },
    contact: {
      label: "CONTACT",
      title: "Obtenez Une\nConsultation Gratuite",
      desc: "Obtenez une évaluation de notre équipe d'experts sous 24 heures. Remplissez le formulaire pour une solution personnalisée.",
      phone: "+90 (542) 118 06 78",
      address: "Mutlukent, Çankaya/Ankara",
      email: "serhair1@gmail.com",
      form: { name: "Nom Complet", phone: "Téléphone", email: "Email", message: "Votre Message", submit: "ENVOYER", sending: "ENVOI...", success: "Merci!", successMsg: "Votre message a été envoyé à serhair1@gmail.com. Nous vous recontacterons dès que possible.", error: "Une Erreur S'est Produite", errorMsg: "Veuillez réessayer ou nous contacter par téléphone.", retry: "RÉESSAYER" }
    },
    footer: {
      desc: "Centre de greffe de cheveux premium d'Ankara. 15 ans d'expérience, résultats naturels.",
      quickLinks: "LIENS RAPIDES", links: ["Accueil", "Services", "À Propos", "FAQ", "Contact"],
      services: "SERVICES", allServices: ["Greffe DHI", "Greffe FUE", "Traitement PRP", "Greffe Barbe", "Micro Sourcils", "Long Hair Sourcils", "Mésothérapie", "Thérapie Exosomes"],
      contact: "CONTACT", fullAddress: "Mutlukent, Blvd. Angora, 25, 06800 Çankaya/Ankara",
      copyright: "2025 SerHair. Tous droits réservés."
    },
    govTrust: {
      title: "Approuvé par le Ministère de la Santé",
      desc: "Toutes nos procédures sont réalisées dans des centres médicaux agréés par le Ministère de la Santé, en conditions stériles, par des professionnels de santé experts."
    },
    cookie: {
      text: "En utilisant notre site, vous acceptez notre politique de cookies. Pour plus d'informations",
      policyLink: "Politique de Cookies",
      kvkkLink: "Politique de Confidentialité",
      accept: "Accepter"
    },
    social: { follow: "Suivez-nous sur les réseaux sociaux" },
    blog: { title: "Guide Santé Capillaire & Esthétique", readMore: "Lire la Suite", back: "Retour", readTime: "temps de lecture", contactText: "Pour plus d'informations ou pour prendre rendez-vous pour une consultation gratuite" },
    preloader: { loading: "CHARGEMENT" },
    lang: { select: "Choisir la Langue", tr: "Türkçe", en: "English", de: "Deutsch", ru: "Русский", ar: "العربية", fr: "Français" },
    dir: "ltr"
  }
};

export type Translations = (typeof translations)["tr"];
