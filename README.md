# Medest Hasta Bilgilendirme

Estetik kliniğine gelen hastaların QR kod ile ulaşabileceği mobil uyumlu hasta bilgilendirme sitesi.

## İlk sürüm kapsamı

- Ana sayfa
- İşlem listesi
- Botoks, dolgu, lazer epilasyon ve kimyasal peeling sonrası öneriler
- Sık sorulan sorular
- KVKK ve genel bilgilendirme sınırı
- WhatsApp/telefon ile iletisim
- PWA manifest ve temel offline destek

## QR linkleri

Canlı domain bağlandıktan sonra aşağıdaki linkler QR kodlara yerleştirilebilir:

- `https://medesti.netlify.app/#botoks`
- `https://medesti.netlify.app/#dolgu`
- `https://medesti.netlify.app/#lazer-epilasyon`
- `https://medesti.netlify.app/#kimyasal-peeling`

QR kod dosyaları `qr-codes` klasöründedir. Baskı için SVG dosyaları, hızlı paylaşım için PNG dosyaları kullanılabilir.

## Klinik bilgilerini güncelleme

`index.html` içindeki telefon ve WhatsApp linklerini kliniğin gerçek numarası ile değiştirin.

## Netlify

Bu proje statik olarak çalışır. Netlify'da build komutu gerekmez; yayın klasörü proje kök dizinidir.
