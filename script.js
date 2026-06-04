const days = [
  {
    day: 1, date: '1/28', title: '抵達＋中部沖繩', theme: '抵達後輕鬆啟動，先用海風、購物與美式街景進入度假模式。',
    color: 'blue',
    schedule: ['09:35–12:25 桃園機場 → 那霸機場', '14:30 OTS 租車取車，前往中部住宿', '16:00 MaxValu 超市補給', '17:00 民宿 Check-in', '18:00 美國村散步與晚餐', '20:30 返回民宿休息'],
    spots: ['Naha Airport', 'American Village', 'MaxValu Chatan']
  },
  {
    day: 2, date: '1/29', title: '北部麗海＋古宇利島', theme: '開往沖繩最漂亮的藍色海岸線，看鯨鯊、跨海大橋與島上小食。',
    color: 'teal',
    schedule: ['08:30 民宿出發', '09:50 起人氣二明治／許田休息站', '10:30 美麗海水族館', '15:00 古宇利島遊覽', '16:30 名護購物血拚', '18:30 A&W 漢堡晚餐', '20:30 返回民宿'],
    spots: ['Okinawa Churaumi Aquarium', 'Kouri Bridge', 'Kouri Island', 'A&W Nago']
  },
  {
    day: 3, date: '1/30', title: '國際通＋永旺來客夢', theme: '那霸市區吃喝採買，再到大型商場補足親子行程的舒適節奏。',
    color: 'green',
    schedule: ['09:00 民宿出發', '10:00 國際通散策', '12:00 一蘭拉麵午餐', '16:00 出發前往永旺來客夢', '傍晚：逛商場、觀看大魚缸', '晚餐：永旺美食街／餐廳'],
    spots: ['Kokusai Dori', 'Makishi Public Market', 'Don Quijote Kokusai Dori', 'AEON MALL Okinawa Rycom']
  },
  {
    day: 4, date: '1/31', title: '兒童王國＋PARCO CITY', theme: '把小孩放電、把大人放鬆：動物園、遊樂空間、海景購物一次完成。',
    color: 'orange',
    schedule: ['09:30 沖繩兒童王國', '動物園、奇蹟博物館、遊樂設施', '中午：兒童王國內輕食', '下午：PARCO CITY 購物廣場', '逛海景商場、血拚、晚餐'],
    spots: ['Okinawa Zoo & Museum', 'PARCO CITY Okinawa']
  },
  {
    day: 5, date: '2/1', title: '南部秘境＋頂級燒肉', theme: '白色海階、鐘乳石洞與南部文化體驗，晚上用燒肉收尾。',
    color: 'red',
    schedule: ['上午：瀨長島 Umikaji Terrace', '下午：玉泉洞／沖繩世界文化王國', '可順遊：港川外人住宅街', '傍晚：人魚麵包補給', '晚餐：頂級燒肉／和牛'],
    spots: ['Senagajima Umikaji Terrace', 'Okinawa World', 'Gangala Valley', 'Minatogawa Stateside Town']
  },
  {
    day: 6, date: '2/2', title: '波上祈福＋返台', theme: '最後一天到海邊神社祈福，帶著滿滿照片與回憶回家。',
    color: 'purple',
    schedule: ['09:00 退房出發', '10:00–11:00 波上宮參拜', '11:00 OTS 還車', '中午：那霸機場午餐與伴手禮', '13:35–14:20 沖繩飛回桃園'],
    spots: ['Naminoue Shrine', 'Naha Airport']
  }
];

const spots = [
  { day: 1, name: '那霸機場', en: 'Naha Airport', query: 'Naha Airport Okinawa', img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Naha%20Airport%20Domestic%20Terminal%20Building.jpg?width=1200', mood: '抵達、租車、伴手禮', food: ['Naha Airport Restaurant', 'A&W Naha Airport', 'Pork Tamago Onigiri Naha Airport'] },
  { day: 1, name: '美國村', en: 'American Village', query: 'American Village Chatan Okinawa', img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Mihama%20American%20Village%20in%20Chatan%20Okinawa%20Japan.jpg?width=1200', mood: '摩天輪、海景、夜景、親子散步', food: ['Gurume Conveyor Belt Sushi Ichiba Mihama', 'Kinpaginpa Okinawa', "Kona's Coffee Okinawa Mihama"] },
  { day: 1, name: 'MaxValu 北谷', en: 'MaxValu Chatan', query: 'MaxValu Chatan Okinawa', img: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&w=1200&q=80', mood: '民宿補給、早餐、飲料零食', food: ['MaxValu Chatan', 'San-A Hamby Town', 'Aeon Chatan'] },
  { day: 2, name: '沖繩美麗海水族館', en: 'Churaumi Aquarium', query: 'Okinawa Churaumi Aquarium', img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Okinawa%20Churaumi%20Aquarium.jpg?width=1200', mood: '鯨鯊、親子、雨天備案', food: ['Inoh Restaurant Churaumi Aquarium', 'Cafe Ocean Blue Churaumi Aquarium', 'Kaihomaru Motobu Okinawa'] },
  { day: 2, name: '古宇利大橋', en: 'Kouri Bridge', query: 'Kouri Bridge Okinawa', img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Kouri%20Bridge%20Okinawa.jpg?width=1200', mood: '自駕海景、拍照、藍色大橋', food: ['Kouri Shrimp', 'Cafe Fukurubi Kouri Island', 'Restaurant L LOTA Kouri Island'] },
  { day: 2, name: '古宇利島', en: 'Kouri Island', query: 'Kouri Island Okinawa', img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Kouri%20Island%20from%20Kouri%20Bridge.jpg?width=1200', mood: '海景、蝦飯、島嶼散步', food: ['Kouri Shrimp', 'Beach House YOSHIKA', 'Shirasa Shokudo Kouri Island'] },
  { day: 2, name: 'A&W 名護店', en: 'A&W Nago', query: 'A&W Nago Okinawa', img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1200&q=80', mood: '美式漢堡、親子晚餐', food: ['A&W Nago', 'Captain Kangaroo Hamburger Nago', 'Yakiniku Nago Okinawa'] },
  { day: 3, name: '國際通', en: 'Kokusai Dori', query: 'Kokusai Dori Naha Okinawa', img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Kokusai%20Street%20Naha.jpg?width=1200', mood: '購物、伴手禮、街拍', food: ['Ichiran Naha Kokusai Dori', 'Pork Tamago Onigiri Makishi Market', 'Blue Seal Kokusai Street'] },
  { day: 3, name: '第一牧志公設市場', en: 'Makishi Public Market', query: 'Makishi Public Market Naha Okinawa', img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Makishi%20Public%20Market%20Naha%20Okinawa.jpg?width=1200', mood: '海鮮、在地食材、二樓代客料理', food: ['Pork Tamago Onigiri Makishi Market', 'Makishi Public Market restaurants', 'Taste of Okinawa Naha'] },
  { day: 3, name: '唐吉訶德 國際通店', en: 'Don Quijote', query: 'Don Quijote Kokusai Dori Naha', img: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=1200&q=80', mood: '藥妝、零食、伴手禮', food: ['Ichiran Naha Kokusai Dori', 'Jef Sunrise Naha', 'Yunangi Okinawa'] },
  { day: 3, name: 'AEON MALL 沖繩來客夢', en: 'AEON Rycom', query: 'AEON MALL Okinawa Rycom', img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Aeon%20Mall%20Okinawa%20Rycom.jpg?width=1200', mood: '大型商場、水族箱、美食街', food: ['AEON MALL Okinawa Rycom food court', 'Yappari Steak Aeon Rycom', 'Rycom Aquarium Cafe Okinawa'] },
  { day: 4, name: '沖繩兒童王國', en: 'Okinawa Zoo & Museum', query: 'Okinawa Zoo & Museum Okinawa', img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Okinawa%20Zoo%20and%20Museum.jpg?width=1200', mood: '動物園、親子、放電', food: ['Okinawa Zoo restaurants', 'Koza Okinawa restaurants', 'Taco Rice Cafe Kijimuna Okinawa City'] },
  { day: 4, name: 'PARCO CITY', en: 'San-A PARCO CITY', query: 'San-A PARCO CITY Okinawa', img: 'https://commons.wikimedia.org/wiki/Special:FilePath/San-A%20Urasoe%20West%20Coast%20PARCO%20CITY.jpg?width=1200', mood: '海景購物、晚餐、伴手禮', food: ['PARCO CITY Okinawa restaurants', 'A&W PARCO CITY Okinawa', 'Yappari Steak PARCO CITY'] },
  { day: 5, name: '瀨長島 Umikaji Terrace', en: 'Umikaji Terrace', query: 'Senagajima Umikaji Terrace Okinawa', img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Senagajima%20Umikaji%20Terrace.jpg?width=1200', mood: '白色階梯、海景、夕陽', food: ['Posillipo Cucina Meridionale Okinawa', 'Kijimuna Senagajima Umikaji Terrace', 'Happy Waffle Senagajima'] },
  { day: 5, name: '沖繩世界・玉泉洞', en: 'Okinawa World', query: 'Okinawa World Gyokusendo Okinawa', img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Gyokusendo%20Cave%20Okinawa.jpg?width=1200', mood: '鐘乳石洞、文化體驗、雨天備案', food: ['Okinawa World restaurants', 'Oshiro Tempura Shop Okinawa', 'Cafe Curcuma Okinawa'] },
  { day: 5, name: 'Gangala Valley', en: 'Gangala Valley', query: 'Gangala Valley Okinawa', img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Valley%20of%20Gangala%20Okinawa.jpg?width=1200', mood: '森林、洞穴咖啡、秘境感', food: ['Cave Cafe Gangala Okinawa', 'Okinawa World restaurant', 'Cafe Yabusachi Okinawa'] },
  { day: 5, name: '港川外人住宅街', en: 'Minatogawa Stateside Town', query: 'Minatogawa Stateside Town Okinawa', img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Minatogawa%20Stateside%20Town%20Okinawa.jpg?width=1200', mood: '小店、甜點、街拍', food: ['ippe coppe Minatogawa', 'oHacorte Minatogawa', 'Matsudaira Japanese Soba Minatogawa'] },
  { day: 6, name: '波上宮', en: 'Naminoue Shrine', query: 'Naminoue Shrine Okinawa', img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Naminoue%20Shrine%20Okinawa.jpg?width=1200', mood: '海邊神社、祈福、最後散步', food: ['Jack’s Steak House Naha', 'Pork Tamago Onigiri Naha Airport', 'Naha Airport restaurants'] }
];

const routeLegs = [
  ['那霸機場', 'OTS Rent a Car Naha Airport', 'driving', '租車接駁／取車'],
  ['OTS Rent a Car Naha Airport', 'American Village Chatan Okinawa', 'driving', '約 40 分鐘，自駕進入中部沖繩'],
  ['American Village Chatan Okinawa', 'MaxValu Chatan Okinawa', 'driving', '超市補給'],
  ['American Village Chatan Okinawa', 'Okinawa Churaumi Aquarium', 'driving', 'Day 2 北上主線'],
  ['Okinawa Churaumi Aquarium', 'Kouri Bridge Okinawa', 'driving', '水族館後前往古宇利島'],
  ['Kouri Island Okinawa', 'A&W Nago Okinawa', 'driving', '北部晚餐'],
  ['American Village Chatan Okinawa', 'Kokusai Dori Naha Okinawa', 'driving', 'Day 3 前往那霸市區'],
  ['Kokusai Dori Naha Okinawa', 'AEON MALL Okinawa Rycom', 'driving', '國際通後往大型商場'],
  ['American Village Chatan Okinawa', 'Okinawa Zoo & Museum Okinawa', 'driving', 'Day 4 兒童王國'],
  ['Okinawa Zoo & Museum Okinawa', 'San-A PARCO CITY Okinawa', 'driving', '下午購物與晚餐'],
  ['American Village Chatan Okinawa', 'Senagajima Umikaji Terrace Okinawa', 'driving', 'Day 5 南部海景咖啡'],
  ['Senagajima Umikaji Terrace Okinawa', 'Okinawa World Gyokusendo Okinawa', 'driving', '南部文化與鐘乳石洞'],
  ['Okinawa World Gyokusendo Okinawa', 'Minatogawa Stateside Town Okinawa', 'driving', '回程可順遊港川'],
  ['American Village Chatan Okinawa', 'Naminoue Shrine Okinawa', 'driving', 'Day 6 返程前祈福'],
  ['Naminoue Shrine Okinawa', 'Naha Airport Okinawa', 'driving', '還車與返台']
];

const mapUrl = q => `https://www.google.com/maps?q=${encodeURIComponent(q)}&output=embed`;
const placeUrl = q => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;
const dirUrl = (a, b, mode='driving') => `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(a)}&destination=${encodeURIComponent(b)}&travelmode=${mode}`;

function renderRouteRibbon(){
  const route = ['那霸機場','美國村','美麗海','古宇利島','國際通','兒童王國','Umikaji','波上宮'];
  document.querySelector('#route-ribbon').innerHTML = route.map((r,i)=>`<span>${r}</span>${i<route.length-1?'<b>→</b>':''}`).join('');
}

function renderDays(){
  const el = document.querySelector('#day-list');
  el.innerHTML = days.map(d => `
    <article class="day-card reveal ${d.color}">
      <div class="day-badge"><small>第</small>${d.day}<small>天</small><strong>${d.date}</strong></div>
      <div class="day-content">
        <h3>${d.title}</h3>
        <p>${d.theme}</p>
        <ul>${d.schedule.map(s=>`<li>${s}</li>`).join('')}</ul>
      </div>
      <div class="day-spots">
        ${d.spots.map(s=>`<a href="${placeUrl(s)}" target="_blank" rel="noreferrer">${s}</a>`).join('')}
      </div>
    </article>
  `).join('');
}

function renderSpotFilters(){
  const el = document.querySelector('#spot-filters');
  el.innerHTML = `<button class="active" data-filter="all">全部</button>` + days.map(d => `<button data-filter="${d.day}">Day ${d.day}</button>`).join('');
  el.addEventListener('click', e=>{
    if(!e.target.matches('button')) return;
    document.querySelectorAll('#spot-filters button').forEach(b=>b.classList.remove('active'));
    e.target.classList.add('active');
    renderSpots(e.target.dataset.filter);
  });
}

function renderSpots(filter='all'){
  const el = document.querySelector('#spot-grid');
  const list = filter === 'all' ? spots : spots.filter(s => String(s.day) === String(filter));
  el.innerHTML = list.map(s => `
    <article class="spot-card reveal" data-day="${s.day}">
      <div class="spot-image-wrap">
        <img src="${s.img}" alt="${s.name}" loading="lazy" onerror="this.closest('.spot-image-wrap').classList.add('fallback'); this.remove();" />
        <span>Day ${s.day}</span>
      </div>
      <div class="spot-body">
        <h3>${s.name}</h3>
        <p class="en">${s.en}</p>
        <p>${s.mood}</p>
        <div class="spot-actions">
          <a class="mini-btn" href="${placeUrl(s.query)}" target="_blank" rel="noreferrer">開啟 Google Map</a>
          <a class="mini-btn light" href="${dirUrl('My Location', s.query)}" target="_blank" rel="noreferrer">從目前位置導航</a>
        </div>
      </div>
      <iframe title="${s.name} Google Map" loading="lazy" src="${mapUrl(s.query)}"></iframe>
    </article>
  `).join('');
  observeReveal();
}

function renderRoutes(){
  const el = document.querySelector('#route-board');
  el.innerHTML = routeLegs.map(([a,b,mode,note], idx)=>`
    <article class="route-leg reveal">
      <div class="leg-num">${String(idx+1).padStart(2,'0')}</div>
      <div>
        <h3>${a} <span>→</span> ${b}</h3>
        <p>${note}</p>
        <div class="mode-row">
          <a href="${dirUrl(a,b,'driving')}" target="_blank" rel="noreferrer">🚗 開車導航</a>
          <a href="${dirUrl(a,b,'walking')}" target="_blank" rel="noreferrer">🚶 步行</a>
          <a href="${dirUrl(a,b,'transit')}" target="_blank" rel="noreferrer">🚌 大眾交通</a>
        </div>
      </div>
    </article>
  `).join('');
}

function renderRestaurants(){
  const selected = spots.flatMap(s => s.food.slice(0,3).map((f,i)=>({name:f, spot:s.name, query:f, day:s.day, index:i}))).slice(0,42);
  const el = document.querySelector('#restaurant-grid');
  el.innerHTML = selected.map(r=>`
    <article class="food-card reveal">
      <div class="food-top"><span>Day ${r.day}</span><strong>${r.spot} 附近</strong></div>
      <h3>${r.name}</h3>
      <p>${foodCopy(r.name)}</p>
      <div class="spot-actions">
        <a class="mini-btn" target="_blank" rel="noreferrer" href="${placeUrl(r.query)}">查看餐廳</a>
        <a class="mini-btn light" target="_blank" rel="noreferrer" href="${dirUrl(r.spot + ' Okinawa', r.query)}">從景點導航</a>
      </div>
    </article>
  `).join('');
}

function foodCopy(name){
  const n = name.toLowerCase();
  if(n.includes('shrimp')) return '古宇利島人氣蒜香蝦飯，適合當作海景午餐或拍照打卡。';
  if(n.includes('a&w')) return '沖繩經典美式速食，親子友善、停車方便、節奏快。';
  if(n.includes('ichiran')) return '市區採買途中快速吃拉麵，適合排入國際通動線。';
  if(n.includes('posillipo')) return '瀨長島海景義式餐廳，適合想坐下來看海與夕陽。';
  if(n.includes('cafe')) return '咖啡甜點或輕食選項，適合中途休息與補充體力。';
  if(n.includes('steak')) return '沖繩常見牛排選項，適合旅程尾聲吃飽一點。';
  if(n.includes('market')) return '市場型餐飲，適合體驗在地食材與熱鬧氛圍。';
  return '依照景點附近動線安排，可點擊開啟 Google Map 查看營業狀態與評價。';
}

function observeReveal(){
  const io = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{ if(entry.isIntersecting) entry.target.classList.add('show'); });
  }, {threshold:.12});
  document.querySelectorAll('.reveal:not(.show)').forEach(el=>io.observe(el));
}

function cursorGlow(){
  const glow = document.querySelector('.cursor-glow');
  window.addEventListener('pointermove', e=>{
    glow.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  });
}

renderRouteRibbon();
renderDays();
renderSpotFilters();
renderSpots();
renderRoutes();
renderRestaurants();
observeReveal();
cursorGlow();
