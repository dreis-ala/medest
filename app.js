const botoxSections = [
  {
    title: "İşlem Sonrası Mini Özet",
    defaultOpen: true,
    items: [
      "İlk gün işlem bölgesini elleme, ovalama, masaj yapma.",
      "Spor, sauna, hamam, sıcak duş ve alkol önerilmez.",
      "Hafif kızarıklık, küçük kabarıklık, morluk veya baş ağrısı olabilir.",
      "Botoks hemen etki etmez; etki genellikle birkaç gün içinde başlar.",
      "Tam sonuç için çoğunlukla 10-14 gün beklenir.",
      "Şüpheli durumda kliniğinle iletişime geç.",
    ],
  },
  {
    title: "Ne Zaman Acil Yardım Almalıyım?",
    defaultOpen: true,
    danger: true,
    intro: "Aşağıdaki durumlar nadirdir; ancak olursa acil tıbbi değerlendirme gerekir:",
    items: [
      "Nefes darlığı",
      "Yutma güçlüğü",
      "Konuşmada bozulma",
      "Çift görme veya belirgin görme bozukluğu",
      "Yüzde veya vücutta yaygın güçsüzlük",
      "Şiddetli alerjik reaksiyon bulguları",
      "Bayılma veya ciddi genel durum bozukluğu",
    ],
  },
  {
    title: "İlk 24 Saat Ne Yapmamalıyım?",
    items: [
      "İşlem bölgesine dokunma, ovalama, masaj yapma.",
      "İşlem bölgesine baskı uygulama.",
      "İlk birkaç saat yüzüstü yatma.",
      "Makyaj, krem veya serum sürme.",
      "Spor yapma.",
      "Alkol alma.",
      "Sauna, hamam ve sıcak duştan kaçın.",
      "Cilt bakımı, peeling, lazer veya masaj yaptırma.",
      "Kan sulandırıcı ilaç kullanıyorsan kendi kendine kesme veya başlama; doktoruna danış.",
    ],
  },
  {
    title: "İlk 24 Saat Ne Yapabilirim?",
    items: [
      "Günlük hafif aktivitelerine devam edebilirsin.",
      "Yüzünü nazikçe yıkayabilirsin.",
      "Hafif yürüyüş yapabilirsin.",
      "Bol su içebilirsin.",
      "Yatarken işlem bölgesine baskı yapmamaya dikkat edebilirsin.",
    ],
  },
  {
    title: "Normal Olanlar",
    items: [
      "Hafif kızarıklık olabilir.",
      "Küçük kabarıklık olabilir.",
      "Hafif morluk olabilir.",
      "Hafif baş ağrısı olabilir.",
      "İşlem bölgesinde hafif hassasiyet veya gerginlik hissi olabilir.",
      "Etki hemen başlamayabilir.",
      "İlk günlerde hafif asimetri hissedilebilir.",
    ],
  },
  {
    title: "Normal Olmayanlar",
    intro: "Aşağıdaki durumlar olursa kliniğinle iletişime geçmen uygun olur:",
    items: [
      "Ağrı, kızarıklık veya şişliğin giderek artması",
      "Morluk veya hassasiyetin beklenenden fazla olması",
      "İşlem bölgesinde belirgin enfeksiyon bulgusu gelişmesi",
      "Göz kapağında belirgin düşme olması",
      "Asimetrinin 10-14 gün sonrasında belirgin şekilde devam etmesi",
      "Beklenmeyen veya seni endişelendiren bir durum gelişmesi",
    ],
  },
  {
    title: "Ne Zaman Kliniği Aramalıyım?",
    items: [
      "Şikayetlerin beklenenden uzun sürerse.",
      "Ağrı, kızarıklık veya şişlik giderek artarsa.",
      "Göz kapağında belirgin düşme fark edersen.",
      "10-14 gün sonra belirgin asimetri devam ederse.",
      "Sonuç, kontrol veya rötuş hakkında emin değilsen.",
      "Kullanacağın ilaç, krem veya bakım ürünü konusunda kararsızsan.",
    ],
  },
  {
    title: "Etki / İyileşme Zaman Çizelgesi",
    timeline: [
      ["İlk saatler", "Hafif kızarıklık, küçük kabarıklık veya hassasiyet olabilir."],
      ["İlk 24 saat", "Bölgeyi ovalamamak, spor ve sıcak ortamlardan kaçınmak önemlidir."],
      ["3-5 gün", "Botoks etkisi genellikle fark edilmeye başlar."],
      ["10-14 gün", "Tam sonuç çoğunlukla bu dönemde değerlendirilir."],
      ["3-6 ay", "Botoksun etki süresi kişiden kişiye değişebilir."],
    ],
  },
  {
    title: "Sık Sorulan Sorular",
    faqs: [
      ["Botoks hemen etki eder mi?", "Hayır. Etki genellikle birkaç gün içinde başlar. Tam sonuç için 10-14 gün beklenir."],
      ["Botoks sonrası spor yapabilir miyim?", "İlk 24 saat ağır spor önerilmez."],
      ["Botoks sonrası makyaj yapabilir miyim?", "İlk saatlerde önerilmez. Makyaj yaparken bölgeyi ovalamamak gerekir."],
      ["Botoks sonrası yüzümü yıkayabilir miyim?", "Evet, nazikçe yıkayabilirsin. Sıcak su ve ovalamadan kaçın."],
      ["Botoks sonrası yatabilir miyim?", "İlk birkaç saat yüzüstü yatmamak daha uygundur. İşlem bölgesine baskı yapmamaya dikkat et."],
      ["Botoks sonrası baş ağrısı normal mi?", "Hafif baş ağrısı olabilir. Şiddetli veya giderek artan ağrıda kliniğini ara."],
      ["Botoks sonrası asimetri normal mi?", "İlk günlerde hafif asimetri hissedilebilir. Sonuç 10-14 gün içinde değerlendirilir."],
      ["Botoksun etkisi ne kadar sürer?", "Genellikle 3-6 ay arasında etki eder. Süre kişiden kişiye değişebilir."],
    ],
  },
  {
    title: "Genel Bilgilendirme Notu",
    note:
      "Bu sayfa genel bilgilendirme amacıyla hazırlanmıştır. Kişisel tıbbi durumun, kullanılan ürün, uygulama bölgesi ve hekiminin protokolü farklılık gösterebilir. Sana özel öneriler için işlemi yapan hekimin veya kliniğin talimatlarını esas al.",
  },
];

const lipFillerSections = [
  {
    title: "İşlem Sonrası Mini Özet",
    defaultOpen: true,
    items: [
      "İlk gün dudağı sıkma, bastırma, ovalama veya masaj yapma.",
      "Spor, sauna, hamam, sıcak duş ve alkol önerilmez.",
      "Hafif şişlik, morluk, hassasiyet ve asimetri hissi olabilir.",
      "İlk birkaç gün dudaklar olduğundan daha büyük görünebilir.",
      "Nihai görünüm çoğunlukla ödem azaldıktan sonra değerlendirilir.",
      "Şiddetli ağrı, renk değişikliği veya dolaşım bozukluğu şüphesinde vakit kaybetmeden kliniğinle iletişime geç.",
    ],
  },
  {
    title: "Ne Zaman Acil Yardım Almalıyım?",
    defaultOpen: true,
    danger: true,
    intro: "Aşağıdaki durumlar nadirdir; ancak olursa acil tıbbi değerlendirme gerekir:",
    items: [
      "Dudakta veya çevresinde ani beyazlama, morarma veya koyu renk değişikliği",
      "Şiddetli ve giderek artan ağrı",
      "Dudakta soğukluk, uyuşukluk veya dolaşım bozukluğu hissi",
      "Dudak çevresinde kabarcık, yara veya ciltte bozulma gelişmesi",
      "Ani görme bozukluğu veya görme kaybı",
      "Şiddetli baş ağrısı, baş dönmesi veya genel durum bozukluğu",
      "Nefes darlığı",
      "Dudak, dil, boğaz veya yüzde yaygın şişlik",
      "Şiddetli alerjik reaksiyon bulguları",
    ],
  },
  {
    title: "İlk 24 Saat Ne Yapmamalıyım?",
    items: [
      "Dudağı sıkma, bastırma, ovalama veya masaj yapma.",
      "Dudaklara baskı uygulama.",
      "İlk gün ruj, dudak kalemi veya yoğun bakım ürünü sürme.",
      "Sıcak içecekleri ve çok sıcak yiyecekleri dikkatli tüket.",
      "Alkol alma.",
      "Sigara ve nargileden mümkünse kaçın.",
      "Spor yapma.",
      "Sauna, hamam ve sıcak duştan kaçın.",
      "Cilt bakımı, peeling, lazer veya yüz masajı yaptırma.",
      "Diş tedavisi veya ağız içi işlem planlıyorsan kliniğine danış.",
      "Kan sulandırıcı ilaç kullanıyorsan kendi kendine kesme veya başlama; doktoruna danış.",
    ],
  },
  {
    title: "İlk 24 Saat Ne Yapabilirim?",
    items: [
      "Günlük hafif aktivitelerine devam edebilirsin.",
      "Bol su içebilirsin.",
      "Dudağı zorlamadan konuşabilir ve yemek yiyebilirsin.",
      "Yumuşak, ılık yiyecekler tercih edebilirsin.",
      "Yüzünü nazikçe yıkayabilirsin.",
      "Gerekirse kliniğinin önerdiği şekilde kısa süreli soğuk uygulama yapabilirsin.",
      "Uyurken dudak bölgesine baskı yapmamaya dikkat edebilirsin.",
    ],
  },
  {
    title: "Normal Olanlar",
    items: [
      "Hafif veya orta düzeyde şişlik olabilir.",
      "Küçük morluklar görülebilir.",
      "Hassasiyet, gerginlik veya dolgunluk hissi olabilir.",
      "İlk günlerde dudaklar beklenenden büyük görünebilir.",
      "İlk günlerde hafif asimetri hissedilebilir.",
      "Küçük sertlik veya düzensizlik hissi olabilir.",
      "Ödem azaldıkça görünüm daha doğal hale gelebilir.",
    ],
  },
  {
    title: "Normal Olmayanlar",
    intro: "Aşağıdaki durumlar olursa kliniğinle iletişime geçmen uygun olur:",
    items: [
      "Ağrının giderek artması",
      "Şişliğin tek taraflı ve belirgin şekilde artması",
      "Dudakta beyazlama, morarma veya koyu renk değişikliği",
      "Dudakta soğukluk, uyuşukluk veya dolaşım bozukluğu hissi",
      "Dudak çevresinde yara, kabarcık veya ciltte bozulma gelişmesi",
      "Kızarıklık, ısı artışı veya akıntı olması",
      "Ateş veya enfeksiyon bulgusu gelişmesi",
      "Asimetrinin ödem azaldıktan sonra belirgin şekilde devam etmesi",
      "Beklenmeyen veya seni endişelendiren bir durum gelişmesi",
    ],
  },
  {
    title: "Ne Zaman Kliniği Aramalıyım?",
    items: [
      "Ağrı, şişlik veya morluk beklenenden fazla olursa.",
      "Dudakta belirgin renk değişikliği fark edersen.",
      "Şişlik günler içinde azalmayıp artarsa.",
      "Dudakta sertlik, düzensizlik veya topaklanma hissi devam ederse.",
      "Uçuk benzeri kabarcıklar gelişirse.",
      "Sonuç, kontrol veya rötuş hakkında emin değilsen.",
      "Kullanacağın ilaç, krem veya bakım ürünü konusunda kararsızsan.",
    ],
  },
  {
    title: "Etki / İyileşme Zaman Çizelgesi",
    timeline: [
      ["İlk saatler", "Şişlik, kızarıklık, hassasiyet ve dolgunluk hissi olabilir."],
      ["İlk 24 saat", "Şişlik belirgin olabilir. Dudağı sıkmamak ve baskıdan kaçınmak önemlidir."],
      ["2-3 gün", "Şişlik ve hassasiyet genellikle azalmaya başlar."],
      ["1 hafta", "Dudak görünümü daha doğal hale gelir."],
      ["2 hafta", "Nihai görünüm çoğunlukla bu dönemde değerlendirilir."],
      ["6-12 ay", "Dolgunun kalıcılığı kişiden kişiye ve kullanılan ürüne göre değişebilir."],
    ],
  },
  {
    title: "Sık Sorulan Sorular",
    faqs: [
      ["Dudak dolgusu sonrası şişlik normal mi?", "Evet. İlk günlerde şişlik sık görülür. Genellikle birkaç gün içinde azalır."],
      ["Dudak dolgusu sonrası morluk olur mu?", "Evet. Küçük morluklar olabilir. Genellikle kısa sürede geriler."],
      ["Dudak dolgusu sonrası yemek yiyebilir miyim?", "Evet. İlk gün çok sıcak, sert veya dudağı zorlayacak yiyeceklerden kaçınmak daha uygundur."],
      ["Dudak dolgusu sonrası ruj sürebilir miyim?", "İlk 24 saat ruj veya yoğun dudak ürünü kullanmamak daha uygundur."],
      ["Dudak dolgusu sonrası spor yapabilir miyim?", "İlk 24 saat ağır spor önerilmez."],
      ["Dudak dolgusu sonrası öpüşebilir miyim?", "İlk 24 saat dudaklara baskı ve travmadan kaçınmak daha uygundur."],
      ["Dudak dolgusu sonrası asimetri normal mi?", "İlk günlerde ödem nedeniyle hafif asimetri olabilir. Sonuç genellikle 1-2 hafta içinde daha doğru değerlendirilir."],
      ["Dudak dolgusu ne kadar sürer?", "Genellikle 6-12 ay arasında kalıcılık beklenir. Süre kullanılan ürüne, metabolizmaya ve kişisel özelliklere göre değişebilir."],
    ],
  },
  {
    title: "Genel Bilgilendirme Notu",
    note:
      "Bu sayfa genel bilgilendirme amacıyla hazırlanmıştır. Kişisel tıbbi durumun, kullanılan ürün, uygulama bölgesi ve hekiminin protokolü farklılık gösterebilir. Sana özel öneriler için işlemi yapan hekimin veya kliniğin talimatlarını esas al.",
  },
];

const placeholderSections = [
  {
    title: "İçerik hazırlanıyor",
    defaultOpen: true,
    note:
      "Bu rehberin ayrıntılı işlem sonrası bilgilendirme metni hazırlanıyor. İçerik tamamlandığında mini özet, acil uyarılar, ilk 24 saat önerileri, normal bulgular ve sık sorulan sorular bu alana eklenecek.",
  },
];

const guides = [
  {
    slug: "yuz-botoksu",
    aliases: ["botoks"],
    title: "Yüz Botoksu sonrası öneriler",
    shortTitle: "Yüz Botoksu",
    summary: "İlk 24 saat, normal bulgular, acil uyarılar ve sık sorulan sorular.",
    intro:
      "Yüz botoksu sonrası süreçte amaç, uygulama bölgesini gereksiz baskı, ısı, yoğun aktivite ve ovalamadan korumaktır.",
    sections: botoxSections,
  },
  {
    slug: "masseter-botoksu",
    title: "Masseter Botoksu sonrası öneriler",
    shortTitle: "Masseter Botoksu",
    summary: "İçerik hazırlanıyor.",
    intro: "Masseter botoksu sonrası öneriler yakında bu rehbere eklenecek.",
    sections: placeholderSections,
  },
  {
    slug: "terleme-botoksu",
    title: "Terleme Botoksu sonrası öneriler",
    shortTitle: "Terleme Botoksu",
    summary: "İçerik hazırlanıyor.",
    intro: "Terleme botoksu sonrası öneriler yakında bu rehbere eklenecek.",
    sections: placeholderSections,
  },
  {
    slug: "dudak-dolgusu",
    aliases: ["dolgu"],
    title: "Dudak Dolgusu sonrası öneriler",
    shortTitle: "Dudak Dolgusu",
    summary: "Şişlik, morluk, acil uyarılar ve iyileşme süreci.",
    intro:
      "Dudak dolgusu sonrası ilk dönemde hafif veya orta düzeyde şişlik, morluk, hassasiyet ve geçici asimetri hissi görülebilir.",
    sections: lipFillerSections,
  },
  {
    slug: "jawline-dolgusu",
    title: "Jawline Dolgusu sonrası öneriler",
    shortTitle: "Jawline Dolgusu",
    summary: "İçerik hazırlanıyor.",
    intro: "Jawline dolgusu sonrası öneriler yakında bu rehbere eklenecek.",
    sections: placeholderSections,
  },
  {
    slug: "nazolabial-dolgu",
    title: "Nazolabial Dolgu sonrası öneriler",
    shortTitle: "Nazolabial Dolgu",
    summary: "İçerik hazırlanıyor.",
    intro: "Nazolabial dolgu sonrası öneriler yakında bu rehbere eklenecek.",
    sections: placeholderSections,
  },
  {
    slug: "goz-alti-isik-dolgusu",
    title: "Göz Altı Işık Dolgusu sonrası öneriler",
    shortTitle: "Göz Altı Işık Dolgusu",
    summary: "İçerik hazırlanıyor.",
    intro: "Göz altı ışık dolgusu sonrası öneriler yakında bu rehbere eklenecek.",
    sections: placeholderSections,
  },
  {
    slug: "genclik-asisi",
    title: "Gençlik Aşısı sonrası öneriler",
    shortTitle: "Gençlik Aşısı",
    summary: "İçerik hazırlanıyor.",
    intro: "Gençlik aşısı sonrası öneriler yakında bu rehbere eklenecek.",
    sections: placeholderSections,
  },
  {
    slug: "mezoterapi",
    title: "Mezoterapi sonrası öneriler",
    shortTitle: "Mezoterapi",
    summary: "İçerik hazırlanıyor.",
    intro: "Mezoterapi sonrası öneriler yakında bu rehbere eklenecek.",
    sections: placeholderSections,
  },
  {
    slug: "prp",
    title: "PRP sonrası öneriler",
    shortTitle: "PRP",
    summary: "İçerik hazırlanıyor.",
    intro: "PRP sonrası öneriler yakında bu rehbere eklenecek.",
    sections: placeholderSections,
  },
  {
    slug: "sac-prp",
    title: "Saç PRP sonrası öneriler",
    shortTitle: "Saç PRP",
    summary: "İçerik hazırlanıyor.",
    intro: "Saç PRP sonrası öneriler yakında bu rehbere eklenecek.",
    sections: placeholderSections,
  },
  {
    slug: "dermapen",
    title: "Dermapen sonrası öneriler",
    shortTitle: "Dermapen",
    summary: "İçerik hazırlanıyor.",
    intro: "Dermapen sonrası öneriler yakında bu rehbere eklenecek.",
    sections: placeholderSections,
  },
  {
    slug: "altin-igne",
    title: "Altın İğne sonrası öneriler",
    shortTitle: "Altın İğne",
    summary: "İçerik hazırlanıyor.",
    intro: "Altın iğne sonrası öneriler yakında bu rehbere eklenecek.",
    sections: placeholderSections,
  },
  {
    slug: "fraksiyonel-lazer",
    title: "Fraksiyonel Lazer sonrası öneriler",
    shortTitle: "Fraksiyonel Lazer",
    summary: "İçerik hazırlanıyor.",
    intro: "Fraksiyonel lazer sonrası öneriler yakında bu rehbere eklenecek.",
    sections: placeholderSections,
  },
  {
    slug: "kimyasal-peeling",
    title: "Kimyasal Peeling sonrası öneriler",
    shortTitle: "Kimyasal Peeling",
    summary: "İçerik hazırlanıyor.",
    intro: "Kimyasal peeling sonrası öneriler yakında bu rehbere eklenecek.",
    sections: placeholderSections,
  },
  {
    slug: "karbon-peeling",
    title: "Karbon Peeling sonrası öneriler",
    shortTitle: "Karbon Peeling",
    summary: "İçerik hazırlanıyor.",
    intro: "Karbon peeling sonrası öneriler yakında bu rehbere eklenecek.",
    sections: placeholderSections,
  },
  {
    slug: "hydrafacial",
    title: "Hydrafacial sonrası öneriler",
    shortTitle: "Hydrafacial",
    summary: "İçerik hazırlanıyor.",
    intro: "Hydrafacial sonrası öneriler yakında bu rehbere eklenecek.",
    sections: placeholderSections,
  },
  {
    slug: "lazer-epilasyon",
    title: "Lazer Epilasyon sonrası öneriler",
    shortTitle: "Lazer Epilasyon",
    summary: "İçerik hazırlanıyor.",
    intro: "Lazer epilasyon sonrası öneriler yakında bu rehbere eklenecek.",
    sections: placeholderSections,
  },
  {
    slug: "soguk-lipoliz",
    title: "Soğuk Lipoliz sonrası öneriler",
    shortTitle: "Soğuk Lipoliz",
    summary: "İçerik hazırlanıyor.",
    intro: "Soğuk lipoliz sonrası öneriler yakında bu rehbere eklenecek.",
    sections: placeholderSections,
  },
  {
    slug: "g5-masaji",
    title: "G5 Masajı sonrası öneriler",
    shortTitle: "G5 Masajı",
    summary: "İçerik hazırlanıyor.",
    intro: "G5 masajı sonrası öneriler yakında bu rehbere eklenecek.",
    sections: placeholderSections,
  },
];

const guideCategories = [
  {
    slug: "botoks-sonrasi",
    title: "Botoks Sonrası",
    guideSlugs: ["yuz-botoksu", "masseter-botoksu", "terleme-botoksu"],
  },
  {
    slug: "dolgu-sonrasi",
    title: "Dolgu Sonrası",
    guideSlugs: ["dudak-dolgusu", "jawline-dolgusu", "nazolabial-dolgu", "goz-alti-isik-dolgusu"],
  },
  {
    slug: "cilt-enjeksiyonlari-sonrasi",
    title: "Cilt Enjeksiyonları Sonrası",
    guideSlugs: ["genclik-asisi", "mezoterapi", "prp", "sac-prp"],
  },
  {
    slug: "cilt-yenileme-sonrasi",
    title: "Cilt Yenileme Sonrası",
    guideSlugs: ["dermapen", "altin-igne", "fraksiyonel-lazer"],
  },
  {
    slug: "peeling-cilt-bakimi-sonrasi",
    title: "Peeling ve Cilt Bakımı Sonrası",
    guideSlugs: ["kimyasal-peeling", "karbon-peeling", "hydrafacial"],
  },
  {
    slug: "lazer-islemi-sonrasi",
    title: "Lazer İşlemi Sonrası",
    guideSlugs: ["lazer-epilasyon"],
  },
  {
    slug: "vucut-sekillendirme-sonrasi",
    title: "Vücut Şekillendirme İşlemi Sonrası",
    guideSlugs: ["soguk-lipoliz", "g5-masaji"],
  },
];

const faqs = [
  {
    question: "Bu sayfadaki bilgiler bana özel tedavi önerisi midir?",
    answer:
      "Hayır. Bu sayfa genel bilgilendirme amaçlıdır. Size özel durumlar için hekiminizin verdiği talimatlar esastır.",
  },
  {
    question: "QR kod beni doğrudan hangi sayfaya götürebilir?",
    answer:
      "Her işlem için ayrı link oluşturulabilir. Örneğin /#yuz-botoksu veya /#dudak-dolgusu linkleri ilgili rehberi açar.",
  },
  {
    question: "Acil bir şikayetim olursa ne yapmalıyım?",
    answer:
      "Nefes darlığı, görme problemi, şiddetli ve artan ağrı gibi durumlarda kliniğinizle hemen iletişime geçin veya en yakın sağlık kuruluşuna başvurun.",
  },
];

const procedureList = document.querySelector("#procedure-list");
const detailSection = document.querySelector("#detay");
const procedureDetail = document.querySelector("#procedure-detail");
const faqList = document.querySelector("#faq-list");
const qrList = document.querySelector("#qr-list");

function findGuide(slug) {
  return guides.find((guide) => guide.slug === slug || guide.aliases?.includes(slug));
}

function getGuide(slug) {
  return guides.find((guide) => guide.slug === slug);
}

function getCategory(slug) {
  return guideCategories.find((category) => category.slug === slug);
}

function renderProcedureCards() {
  procedureList.innerHTML = guideCategories
    .map(
      (category, index) => `
        <details id="${category.slug}" class="category-card" data-category-slug="${category.slug}">
          <summary>
            <span class="card-number">${String(index + 1).padStart(2, "0")}</span>
            <h3>${category.title}</h3>
            <span class="category-toggle-icon" aria-hidden="true"></span>
          </summary>
          <div class="guide-chip-list">
            ${category.guideSlugs
              .map((slug) => {
                const guide = getGuide(slug);
                return `<a class="guide-chip" href="#${guide.slug}">${guide.shortTitle}</a>`;
              })
              .join("")}
          </div>
        </details>
      `,
    )
    .join("");
}

function renderQrCards() {
  qrList.innerHTML = guideCategories
    .map(
      (category, index) => `
        <details class="category-card qr-card">
          <summary>
            <span class="card-number">${String(index + 1).padStart(2, "0")}</span>
            <h3>${category.title}</h3>
            <span class="category-toggle-icon" aria-hidden="true"></span>
          </summary>
          <div class="qr-image-panel">
            <img src="/qr-codes/${category.slug}.png" alt="${category.title} QR kodu" loading="lazy" />
            <a class="guide-chip" href="#${category.slug}">${category.title}</a>
          </div>
        </details>
      `,
    )
    .join("");
}

function renderSectionContent(section) {
  const intro = section.intro ? `<p class="section-intro">${section.intro}</p>` : "";
  const items = section.items
    ? `<ul>${section.items.map((item) => `<li>${item}</li>`).join("")}</ul>`
    : "";
  const timeline = section.timeline
    ? `<div class="timeline-list">${section.timeline
        .map(([label, text]) => `<p><strong>${label}:</strong> ${text}</p>`)
        .join("")}</div>`
    : "";
  const faqItems = section.faqs
    ? `<div class="nested-faq-list">${section.faqs
        .map(([question, answer]) => `<div><strong>${question}</strong><p>${answer}</p></div>`)
        .join("")}</div>`
    : "";
  const note = section.note ? `<p class="detail-note">${section.note}</p>` : "";

  return `${intro}${items}${timeline}${faqItems}${note}`;
}

function renderDetail(slug) {
  const guide = findGuide(slug);
  if (!guide) return;

  detailSection.hidden = false;
  procedureDetail.innerHTML = `
    <div class="detail-header">
      <p class="eyebrow">Genel bilgilendirme</p>
      <h2>${guide.title}</h2>
      <p>${guide.intro}</p>
    </div>
    <div class="accordion-list">
      ${guide.sections
        .map(
          (section, index) => `
            <details class="detail-block ${section.danger ? "danger-block" : ""}" ${section.defaultOpen ? "open" : ""}>
              <summary>
                <span class="accordion-index">${String(index + 1).padStart(2, "0")}</span>
                <h3>${section.title}</h3>
                <span class="accordion-icon" aria-hidden="true"></span>
              </summary>
              <div class="accordion-content">
                ${renderSectionContent(section)}
              </div>
            </details>
          `,
        )
        .join("")}
    </div>
  `;
  detailSection.scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderFaqs() {
  faqList.innerHTML = faqs
    .map(
      (faq) => `
        <article class="faq-item">
          <h3>${faq.question}</h3>
          <p>${faq.answer}</p>
        </article>
      `,
    )
    .join("");
}

function handleHash() {
  const slug = window.location.hash.replace("#", "");
  if (findGuide(slug)) {
    renderDetail(slug);
    return;
  }

  const category = getCategory(slug);
  if (category) {
    const card = document.querySelector(`[data-category-slug="${category.slug}"]`);
    if (card) {
      card.open = true;
      card.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }
}

renderProcedureCards();
renderQrCards();
renderFaqs();
handleHash();

window.addEventListener("hashchange", handleHash);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js").catch(() => {});
  });
}
