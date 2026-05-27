export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  readTime: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "DHI vs FUE Saç Ekimi Farkları",
    excerpt: "Saç ekimi dünyasında en çok tercih edilen iki yöntem: DHI ve FUE. Hangisi sizin için daha uygun?",
    content: "Saç ekimi teknolojisindeki gelişmeler, dökülme sorunu yaşayanlara doğal ve kalıcı çözümler sunuyor. DHI (Direct Hair Implantation) ve FUE (Follicular Unit Extraction) en popüler iki yöntem.\n\nDHI tekniğinde, saç greftleri özel Choi implanter kalemleri kullanılarak doğrudan alın bölgesine ekilir. Bu yöntemin en büyük avantajı, greftlerin ekim öncesi uzun süre dışarıda bekletilmemesidir. Kanal açma ve ekim aynı anda yapılır, daha yoğun ekim imkanı sağlar.\n\nFUE tekniğinde ise, donör bölgeden tek tek greftler özel mikromotorlarla çıkarılır. Ardından alın bölgesinde kanallar açılır ve greftler bu kanallara yerleştirilir. Klasik ve kanıtlanmış yöntemdir.\n\nHer iki yöntemde de başarı oranı %95'in üzerindedir. Doğru yöntem, saç dökülme tipinize göre belirlenir.",
    image: "/assets/hasta-dhi.jpg",
    date: "2025-05-15",
    readTime: "8 dk",
    tags: ["Saç Ekimi", "DHI", "FUE"]
  },
  {
    id: "2",
    title: "Saç Ekimi Sonrası Bakım Rehberi",
    excerpt: "Saç ekimi operasyonu sadece başlangıç. Doğru bakım, başarılı sonuçların anahtarıdır.",
    content: "Saç ekimi operasyonu başarıyla tamamlandı. Tebrikler! İlk 12 ay, yeni saçlarınızın sağlıklı büyümesi için kritik öneme sahip.\n\nİlk hafta başınızı yüksek pozisyonda yatırın, doktorunuzun verdiği ilaçları düzenli kullanın ve ekilen bölgeye dokunmayın. 2-4. haftalarda şok dökülme normaldir ve geçicidir.\n\n3-6 ayda yeni saçlar çıkmaya başlar, 12. ayda nihai sonuçlar görülür. Düzenli PRP seansları, dengeli beslenme ve sağlıklı yaşam tarzı kalıcı sonuçlar için önemlidir.",
    image: "/assets/hasta-sapphire.jpg",
    date: "2025-05-10",
    readTime: "10 dk",
    tags: ["Bakım", "İyileşme"]
  },
  {
    id: "3",
    title: "PRP Tedavisi Nedir?",
    excerpt: "PRP, saç dökülmesini durdurmanın en etkili doğal yöntemlerinden biridir.",
    content: "PRP (Platelet Rich Plasma), kişinin kendi kanından elde edilen doğal bir tedavi yöntemidir. Büyüme faktörleri açısından zengin plazma, saç köklerini besleyerek dökülmeyi durdurur ve yeni saç oluşumunu destekler.\n\nUygulama; kan alma, santrifüj işlemi ve saçlı deriye enjeksiyon aşamalarından oluşur. Seans süresi 30-45 dakikadır. 3-6 ay içinde belirgin sonuçlar alınır.",
    image: "/assets/hasta-prp.jpg",
    date: "2025-05-05",
    readTime: "6 dk",
    tags: ["PRP", "Tedavi"]
  },
  {
    id: "4",
    title: "Sakal Ekimi Süreci",
    excerpt: "Seyrek veya dökülmüş sakallar artık sorun değil. Sakal ekimi ile doğal sonuçlar elde edebilirsiniz.",
    content: "Sakal, erkek estetiğinin önemli bir parçasıdır. Genetik, travma veya yanık gibi nedenlerle sakal bölgesinde seyrelme yaşayanlar için sakal ekimi kalıcı bir çözüm sunar.\n\nFUE veya DHI teknikleriyle, ense veya baş bölgesinden alınan greftlerin sakal, bıyık ve favori bölgelerine ekilmesi işlemidir. Operasyon 6-8 saat sürer. 12. ayda nihai sonuçlar görülür.",
    image: "/assets/hasta-sakal.jpg",
    date: "2025-04-28",
    readTime: "7 dk",
    tags: ["Sakal Ekimi", "Erkek"]
  },
  {
    id: "5",
    title: "Kadınlarda Saç Ekimi",
    excerpt: "Saç dökülmesi sadece erkeklerin sorunu değil. Kadınlarda saç ekimi özel teknikler gerektirir.",
    content: "Saç dökülmesi kadınlar için psikolojik olarak daha zorlayıcı olabilir. Modern saç ekimi teknikleriyle kadınlar da doğal ve kalıcı sonuçlar elde edebiliyor.\n\nKadınlarda dökülme genellikle difüz (tüm başın seyrelmesi) şeklindedir. DHI tekniği en uygun yöntemdir çünkü kısa saç traşı gerektirmez. 3-6 ayda ilk sonuçlar, 12. ayda nihai sonuçlar görülür.",
    image: "/assets/hasta-7.jpg",
    date: "2025-04-20",
    readTime: "8 dk",
    tags: ["Kadın", "Saç Ekimi"]
  },
  {
    id: "6",
    title: "Uzun Kaş Ekimi",
    excerpt: "Seyrek kaşlar için uzun kaş ekimi, doğal ve kalıcı sonuçlar sunar.",
    content: "Kaşlar, yüz ifadesinin en önemli parçalarından biridir. Seyrek, asimetrik veya travma nedeniyle bozulmuş kaşlar için uzun kaş ekimi mükemmel bir çözüm sunar.\n\nGeleneksel kaş ekiminden farklı olarak, daha uzun ve doğal görünümlü kaş telleri elde etmeyi amaçlar. Her tek tek kaş teline ayrı yön verilir. Operasyon 3-5 saat sürer. 12. ayda nihai sonuçlar görülür.",
    image: "/assets/hasta-longhair.jpg",
    date: "2025-04-15",
    readTime: "7 dk",
    tags: ["Kaş Ekimi", "Estetik"]
  }
];
