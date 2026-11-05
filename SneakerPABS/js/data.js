export const CATEGORIES = Object.freeze([{
  id: 'all',
  name: 'Semua sneakers'
}, {
  id: 'classic',
  name: 'Classic'
}, {
  id: 'running',
  name: 'Running'
}, {
  id: 'basketball',
  name: 'Basketball'
}, {
  id: 'skate',
  name: 'Skate'
}, {
  id: 'limited',
  name: 'Limited'
}, {
  id: 'badminton',
  name: 'Badminton'
}, {
  id: 'casual',
  name: 'Casual'
}, {
  id: 'hiking',
  name: 'Hiking'
}, {
  id: 'football',
  name: 'Sepak bola'
}, {
  id: 'futsal',
  name: 'Futsal'
}, {
  id: 'volleyball',
  name: 'Voli'
}, {
  id: 'formal',
  name: 'Loafers'
}, {
  id: 'school',
  name: 'Sekolah'
}, {
  id: 'work',
  name: 'Kerja'
}, {
  id: 'safety',
  name: 'Safety'
}, {
  id: 'gym',
  name: 'Gym'
}, ]);

// Katalog dan harga contoh; sesuaikan dengan stok toko sebelum peluncuran.
export const PRODUCTS = Object.freeze([{
  id: 'court-low',
  name: 'Court Low Leather',
  category: 'classic',
  description: 'Siluet bersih yang gampang masuk ke rotasi harian.',
  specification: 'Leather upper · low top · unisex',
  price: 799000,
  sizes: [39, 40, 41, 42, 43, 44],
  image: 'assets/images/sneaker-court.jpg',
  imageAlt: 'Sneakers kulit putih dengan siluet court klasik',
  tag: 'Everyday staple'
}, {
  id: 'dr-martens',
  name: 'Dr. Martens',
  category: 'classic',
  description: 'Boot kulit hitam dengan sol khas untuk tampilan sehari-hari.',
  specification: 'Leather upper · lace-up boots',
  price: 949000,
  sizes: [39, 40, 41, 42, 43, 44],
  image: 'assets/images/docmart-product-2.jpg',
  imageAlt: 'Sepatu boots kulit hitam Dr. Martens',
  tag: 'Boots'
}, {
  id: 'canvas-high',
  name: 'Canvas High Top',
  category: 'classic',
  description: 'Kanvas tangguh dan bentuk tinggi yang tak lekang waktu.',
  specification: 'Canvas upper · high top',
  price: 629000,
  sizes: [38, 39, 40, 41, 42, 43],
  image: 'assets/images/sneaker-canvas.jpg',
  imageAlt: 'Sneakers kanvas high top berwarna netral',
  tag: 'Iconic shape'
}, {
  id: 'court-green',
  name: 'Court 72 Green',
  category: 'skate',
  description: 'Sol datar dan warna berani untuk langkah yang beda.',
  specification: 'Suede upper · vulcanized sole',
  price: 879000,
  sizes: [39, 40, 41, 42, 43, 44],
  image: 'assets/images/sneaker-green.jpg',
  imageAlt: 'Sneakers suede hijau dengan sol karet',
  tag: 'Fresh colorway'
}, {
  id: 'street-basket',
  name: 'Street Basket Mid',
  category: 'basketball',
  description: 'Mid-top dengan detail basket klasik untuk dipakai di luar lapangan.',
  specification: 'Synthetic leather · mid top',
  price: 1099000,
  sizes: [40, 41, 42, 43, 44, 45],
  image: 'assets/images/sneaker-basket.jpg',
  imageAlt: 'Sneakers mid-top bergaya basket',
  tag: 'Court to street'
}, {
  id: 'mono-run',
  name: 'Mono Run 02',
  category: 'running',
  description: 'Warna monokrom dan konstruksi ringan untuk gerak seharian.',
  specification: 'Engineered mesh · lightweight',
  price: 729000,
  sizes: [39, 40, 41, 42, 43, 44],
  image: 'assets/images/sneaker-mono.jpg',
  imageAlt: 'Sneakers lari ringan berwarna monokrom',
  tag: 'Light on feet'
}, {
  id: 'archive-01',
  name: 'Archive 01',
  category: 'limited',
  description: 'Colorway pilihan dalam jumlah terbatas, detailnya dibuat menonjol.',
  specification: 'Premium suede · limited colorway',
  price: 1299000,
  sizes: [39, 40, 41, 42, 43],
  image: 'assets/images/sneaker-archive.jpg',
  imageAlt: 'Sneakers edisi terbatas dengan panel suede',
  tag: 'Limited drop'
}, {
  id: 'skate-pro',
  name: 'Basket Pro Mid',
  category: 'basketball',
  description: 'Sepatu basket mid-top dengan bantalan untuk gerak di lapangan.',
  specification: 'Padded collar · court outsole',
  price: 899000,
  sizes: [39, 40, 41, 42, 43, 44],
  image: 'assets/images/basketball-shoes.jpg',
  imageAlt: 'Sepatu basket mid-top',
  tag: 'Basket'
}, {
  id: 'runner-mesh-02',
  name: 'Badminton Court 02',
  category: 'badminton',
  description: 'Sepatu court ringan untuk gerak cepat dan perubahan arah.',
  specification: 'Court sole · lightweight upper',
  price: 849000,
  sizes: [39, 40, 41, 42, 43, 44],
  image: 'assets/images/badminton-shoes.jpg',
  imageAlt: 'Sepatu badminton putih dengan raket',
  tag: 'Badminton'
}, {
  id: 'canvas-low-76',
  name: 'Running Pace 10',
  category: 'running',
  description: 'Sepatu running ringan dengan bantalan untuk latihan harian.',
  specification: 'Breathable upper · cushioned sole',
  price: 579000,
  sizes: [38, 39, 40, 41, 42, 43],
  image: 'assets/images/gym-shoes.jpg',
  imageAlt: 'Sepatu running abu-abu yang dipakai di luar ruang',
  tag: 'Running'
}, {
  id: 'court-white-02',
  name: 'Casual Everyday',
  category: 'casual',
  description: 'Sepatu casual simpel yang mudah dipadukan untuk aktivitas harian.',
  specification: 'Low top · everyday rubber sole',
  price: 749000,
  sizes: [39, 40, 41, 42, 43, 44],
  image: 'assets/images/casual-shoes.jpg',
  imageAlt: 'Sepatu casual low-top warna terang',
  tag: 'Casual'
}, {
  id: 'street-high-02',
  name: 'Trail Hiking Mid',
  category: 'hiking',
  description: 'Boot hiking dengan sol kokoh untuk jalur berbatu dan perjalanan luar ruang.',
  specification: 'Ankle support · rugged outsole',
  price: 1199000,
  sizes: [40, 41, 42, 43, 44, 45],
  image: 'assets/images/hiking-shoes.jpg',
  imageAlt: 'Sepatu hiking abu-abu dengan sol tebal',
  tag: 'Hiking'
}, {
  id: 'daily-knit-03',
  name: 'Football Stud 03',
  category: 'football',
  description: 'Sepatu bola dengan stud untuk membantu pijakan di lapangan.',
  specification: 'Stud outsole · football fit',
  price: 679000,
  sizes: [39, 40, 41, 42, 43, 44],
  image: 'assets/images/football-boots.jpg',
  imageAlt: 'Sepatu bola hitam merah dengan stud',
  tag: 'Sepak bola'
}, {
  id: 'skate-suede-02',
  name: 'Futsal Indoor Grip',
  category: 'futsal',
  description: 'Sepatu indoor berprofil rendah untuk gerak cepat di lapangan futsal.',
  specification: 'Low profile · grippy court sole',
  price: 849000,
  sizes: [39, 40, 41, 42, 43, 44],
  image: 'assets/images/futsal-shoes.jpg',
  imageAlt: 'Sepatu high-top sebagai foto contoh produk futsal',
  tag: 'Futsal'
}, {
  id: 'archive-suede-02',
  name: 'Volleyball Court 55',
  category: 'volleyball',
  description: 'Sepatu court ringan untuk latihan dan permainan bola voli.',
  specification: 'Lightweight upper · court sole',
  price: 1399000,
  sizes: [39, 40, 41, 42, 43],
  image: 'assets/images/volleyball-trainers.jpg',
  imageAlt: 'Sepatu trainer bergaya voli warna putih',
  tag: 'Voli'
}, {
  id: 'street-court-03',
  name: 'Loafer Classic',
  category: 'formal',
  description: 'Sepatu loafers kulit bergaya formal untuk acara dan kegiatan sehari-hari.',
  specification: 'Slip-on · leather upper',
  price: 999000,
  sizes: [40, 41, 42, 43, 44, 45],
  image: 'assets/images/loafers.jpg',
  imageAlt: 'Sepasang loafers kulit cokelat',
  tag: 'Loafers'
}, {
  id: 'retro-runner-03',
  name: 'School Daily',
  category: 'school',
  description: 'Sepatu low-top sederhana untuk dipakai ke sekolah.',
  specification: 'Low top · durable everyday sole',
  price: 999000,
  sizes: [39, 40, 41, 42, 43, 44],
  image: 'assets/images/school-shoes.jpg',
  imageAlt: 'Sepatu low-top putih sebagai contoh model sekolah',
  tag: 'Sekolah'
}, {
  id: 'canvas-season-02',
  name: 'Work Boot Classic',
  category: 'work',
  description: 'Boot kulit berpotongan tinggi untuk gaya kerja kasual.',
  specification: 'Lace-up boot · sturdy sole',
  price: 699000,
  sizes: [38, 39, 40, 41, 42, 43],
  image: 'assets/images/work-boots.jpg',
  imageAlt: 'Sepasang boot kulit cokelat',
  tag: 'Kerja'
}, {
  id: 'skate-cup-02',
  name: 'Safety Boot Guard',
  category: 'safety',
  description: 'Boot bergaya safety sebagai contoh katalog; pastikan sertifikasi dan fitur pelindung sesuai kebutuhan.',
  specification: 'High-cut boot · rugged sole',
  price: 929000,
  sizes: [39, 40, 41, 42, 43, 44],
  image: 'assets/images/safety-boots-example.jpg',
  imageAlt: 'Boot kokoh sebagai ilustrasi sepatu safety; sertifikasi tidak diverifikasi',
  tag: 'Safety'
}, {
  id: 'limited-court-02',
  name: 'Gym Trainer Flex',
  category: 'gym',
  description: 'Trainer ringan untuk latihan gym dan aktivitas olahraga dalam ruang.',
  specification: 'Lightweight upper · flexible sole',
  price: 1499000,
  sizes: [39, 40, 41, 42, 43],
  image: 'assets/images/gym-shoes-alt.jpg',
  imageAlt: 'Sepatu gym warna merah muda dan abu-abu',
  tag: 'Gym'
}, ]);

export const findProduct = (id) => PRODUCTS.find((product) => product.id === id);
export function findProductVariant(key) {
  if (typeof key !== 'string') return undefined;
  const separator = key.lastIndexOf('::');
  if (separator < 0) return undefined;
  const product = findProduct(key.slice(0, separator));
  const size = Number(key.slice(separator + 2));
  return product?.sizes.includes(size) ? {
    ...product,
    size,
    key
  } : undefined;
}
export const productKey = (id, size) => `${id}::${size}`;
export const filterProducts = (query, category) => {
  const keyword = query.trim().toLocaleLowerCase('id-ID');
  return PRODUCTS.filter((product) =>
    (category === 'all' || product.category === category) &&
    product.name.toLocaleLowerCase('id-ID').includes(keyword));
};