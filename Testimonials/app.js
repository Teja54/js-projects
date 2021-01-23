var reviews = [
    {
        id: 1,
        name: 'Ramya',
        job: 'graphic designer',
        img: 'https://res.cloudinary.com/teja54/image/upload/v1611395090/person-2_np9x5l_jlysy9.jpg',
        text: "I highly recommend working with Teja for all of your graphic design needs. He is professional, timely and meticulous in his work and makes every effort to make sure that his client is happy. I would absolutely consider hiring him again in the future.",
      },
      {
        id: 2,
        name: 'Teja',
        job: 'web developer',
        img: 'https://res.cloudinary.com/teja54/image/upload/v1611395200/person-3_ipa0mj_cao3s8.jpg',
        text: 'Another journey chamber way yet females man. Way extensive and dejection get delivered deficient sincerity gentleman age. Too end instrument possession contrasted motionless. Calling offence six joy feeling. Coming merits and was talent enough far.',
      },
      {
        id: 3,
        name: 'Pallavi',
        job: 'Content creator',
        img: "https://res.cloudinary.com/teja54/image/upload/v1611395058/person-1_rfzshl_gbbsly.jpg",
        text: 'In it except to so temper mutual tastes mother. Interested cultivated its continuing now yet are. Out interested acceptance our partiality affronting unpleasant why add. Esteem garden men yet shy course. Consulted up my tolerably sometimes perpetual oh.',
      },
      {
        id: 4,
        name: 'Venkat',
        job: 'Inten at Google',
        img: 'https://res.cloudinary.com/teja54/image/upload/v1611395227/person-4_t9nxjt_dfb2pl.jpg',
        text: 'Effect if in up no depend seemed. Ecstatic elegance gay but disposed. We me rent been part what. An concluded sportsman offending so provision mr education. Bed uncommonly his discovered for estimating far. Equally he minutes my hastily.',
      },
];

// select items 

const img = document.getElementById('person-img');
const name = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

// select btns

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector('.random-btn');

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener('DOMContentLoaded', () => {
  showReview();
});

function showReview() {
  const item = reviews[currentItem];
  img.src = item.img;
  name.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

nextBtn.addEventListener("click", ()=> {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showReview(currentItem);
});


prevBtn.addEventListener('click', () => {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showReview(currentItem);
});


randomBtn.addEventListener('click', () => {
  alert('Hi');
  currentItem = Math.floor(Math.random() * reviews.length);
  showReview(currentItem);
});
