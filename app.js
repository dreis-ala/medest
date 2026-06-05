const procedures = [
  {
    slug: "botoks",
    title: "Botoks sonrası öneriler",
    summary: "İlk saatler, ilk gün ve dikkat edilmesi gereken bulgular.",
    intro:
      "Botoks sonrası amaç, uygulanan bölgenin gereksiz baskı ve ısı maruziyetinden korunmasıdır.",
    sections: [
      {
        title: "İlk 4 saat",
        items: [
          "Uygulama bölgesine masaj yapmayın ve ovmayın.",
          "Mümkünse dik pozisyonda kalın; hemen uzanmayın.",
          "Ağır egzersiz, sauna ve çok sıcak duşlardan kaçının.",
        ],
      },
      {
        title: "İlk 24 saat",
        items: [
          "Alkol tüketimini ve yoğun sporu erteleyin.",
          "Cilt bakımı, peeling ve lazer gibi işlemleri hekiminizin belirttiği süreye kadar yaptırmayın.",
          "Hafif kızarıklık veya minik morluklar genellikle kısa sürede azalabilir.",
        ],
      },
      {
        title: "Hekime başvurun",
        danger: true,
        items: [
          "Yaygın alerjik reaksiyon, nefes darlığı veya hızla artan şişlik olursa acil destek alın.",
          "Görme bozukluğu, şiddetli baş ağrısı veya beklenmeyen kas güçsüzlüğü olursa kliniği arayın.",
        ],
      },
    ],
  },
  {
    slug: "dolgu",
    title: "Dolgu sonrası öneriler",
    summary: "Şişme, morluk ve acil uyarılar için kısa rehber.",
    intro:
      "Dolgu sonrası ilk dönemde hafif şişlik, hassasiyet ve morluk görülebilir; takip önemlidir.",
    sections: [
      {
        title: "İlk 24 saat",
        items: [
          "Uygulama bölgesine baskı yapmayın ve masaj uygulamayın.",
          "Makyaj, havuz, sauna ve yoğun egzersizi erteleyin.",
          "Hekiminiz önermediyse bölgeye dışarıdan ürün sürmeyin.",
        ],
      },
      {
        title: "İlk 3 gün",
        items: [
          "Şişme ve morluk kademeli azalabilir.",
          "Dudak dolgusu sonrası aşırı sıcak içeceklerden ve dudakları zorlayacak hareketlerden kaçının.",
          "Kontrol randevunuz varsa belirtilen tarihte gelin.",
        ],
      },
      {
        title: "Acil uyarılar",
        danger: true,
        items: [
          "Bölgede şiddetli ve artan ağrı, beyazlama, morarma veya soğukluk olursa hemen kliniği arayın.",
          "Görme kaybı, ani görme bozukluğu veya şiddetli baş ağrısı acil değerlendirme gerektirir.",
        ],
      },
    ],
  },
  {
    slug: "lazer-epilasyon",
    title: "Lazer epilasyon sonrası öneriler",
    summary: "Güneş korunması, cilt bakımı ve normal bulgular.",
    intro:
      "Lazer epilasyon sonrası cildin ısı ve güneş maruziyetinden korunması iyileşme konforunu artırır.",
    sections: [
      {
        title: "İlk 24-48 saat",
        items: [
          "Sıcak duş, sauna, hamam ve yoğun egzersizden kaçının.",
          "Uygulama bölgesini kaşımayın ve kese/peeling yapmayın.",
          "Hafif kızarıklık ve yanma hissi kısa süreli olabilir.",
        ],
      },
      {
        title: "Güneş korunması",
        items: [
          "Uygulama bölgesi güneşe açık kalacaksa yüksek koruma kullanın.",
          "Bronzlaşma ve solaryumdan kaçınmak lekelenme riskini azaltır.",
          "Seans aralarında kılı kökünden alan ağda veya cımbız kullanmayın.",
        ],
      },
      {
        title: "Hekime başvurun",
        danger: true,
        items: [
          "Su toplama, yaygın kabuklanma, şiddetli yanma veya enfeksiyon bulguları olursa kliniği arayın.",
          "Lekelenme veya beklenmeyen cilt reaksiyonu fark ederseniz kontrol isteyin.",
        ],
      },
    ],
  },
  {
    slug: "kimyasal-peeling",
    title: "Kimyasal peeling sonrası öneriler",
    summary: "Soyulma dönemi, nemlendirme ve güneş koruması.",
    intro:
      "Kimyasal peeling sonrası cilt bariyeri hassaslaşabilir; nazik bakım ve güneş koruması temel önemdedir.",
    sections: [
      {
        title: "İlk günler",
        items: [
          "Cildi ovalamayın; soyulan deriyi koparmayın.",
          "Hekiminizin önerdiği nemlendirici ve temizleyici dışında aktif ürün kullanmayın.",
          "Retinol, asitli ürünler ve peeling etkili bakımları erteleyin.",
        ],
      },
      {
        title: "Güneş ve makyaj",
        items: [
          "Güneş koruyucuyu düzenli yenileyin.",
          "Cilt yatışmadan yoğun makyaj yapmamaya çalışın.",
          "Kızarıklık ve hafif soyulma beklenen süreçte görülebilir.",
        ],
      },
      {
        title: "Hekime başvurun",
        danger: true,
        items: [
          "Şiddetli yanma, akıntı, yaygın kabuklanma veya enfeksiyon bulguları olursa kliniği arayın.",
          "Koyu lekelenme veya beklenenden uzun süren hassasiyet için kontrol alın.",
        ],
      },
    ],
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
      "Her işlem için ayrı link oluşturulabilir. Örneğin /#botoks veya /#dolgu linkleri ilgili rehberi açar.",
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
const quickLinks = document.querySelector("#quick-links");
const faqList = document.querySelector("#faq-list");

function renderProcedureCards() {
  procedureList.innerHTML = procedures
    .map(
      (procedure) => `
        <article class="procedure-card">
          <h3>${procedure.title}</h3>
          <p>${procedure.summary}</p>
          <a href="#${procedure.slug}" data-slug="${procedure.slug}">Rehberi aç</a>
        </article>
      `,
    )
    .join("");
}

function renderQuickLinks() {
  quickLinks.innerHTML = procedures
    .map((procedure) => `<a href="#${procedure.slug}">${procedure.title.replace(" sonrası öneriler", "")}</a>`)
    .join("");
}

function renderDetail(slug) {
  const procedure = procedures.find((item) => item.slug === slug);
  if (!procedure) return;

  detailSection.hidden = false;
  procedureDetail.innerHTML = `
    <div class="detail-header">
      <p class="eyebrow">Genel bilgilendirme</p>
      <h2>${procedure.title}</h2>
      <p>${procedure.intro}</p>
    </div>
    ${procedure.sections
      .map(
        (section) => `
          <section class="detail-block ${section.danger ? "danger-block" : ""}">
            <h3>${section.title}</h3>
            <ul>
              ${section.items.map((item) => `<li>${item}</li>`).join("")}
            </ul>
          </section>
        `,
      )
      .join("")}
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
  if (procedures.some((procedure) => procedure.slug === slug)) {
    renderDetail(slug);
  }
}

renderProcedureCards();
renderQuickLinks();
renderFaqs();
handleHash();

window.addEventListener("hashchange", handleHash);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js").catch(() => {});
  });
}
