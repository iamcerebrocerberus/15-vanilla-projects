const personImage = document.querySelector('.js-image');
const personName = document.querySelector('.js-abt-name');
const personJob = document.querySelector('.js-abt-job');
const personTxt = document.querySelector('.js-stat-txt');
const prevBtn = document.querySelector('.js-chev-left');
const nextBtn = document.querySelector('.js-chev-right');
const randomize = document.querySelector('.js-random');

const reviews = [
    {
        id: 0,
        name: 'Rose Adams',
        job: 'app developer',
        img: 'images/default-photo.jpg',
        txt: 'Maecenas a molestie nunc, sit amet porta urna. Morbi vehicula posuere. Pellentesque sagittis volutpat eros porta tortor non, dapibus nulla. Aenean efficitur nulla augue'
    },
    {
        id: 1,
        name: 'Veronica Fish',
        job: 'ux designer',
        img: 'images/photo1.jpg',
        txt: 'Quisque iaculis, ante id ornare porttitor, ipsum erat pellentesque sapien, a sagittis nibh lectus et sem. Maecenas a molestie nunc, sit amet porta urna. Morbi sed eros lacus. Cras'
    },
    {
        id: 2,
        name: 'John Doe',
        job: 'game developer',
        img: 'images/photo2.jpg',
        txt: 'Integer venenatis, sem in dapibus efficitur, arcu neque suscipit velit, ut imperdiet nisl magna a nibh. Quisque sit amet diam ut eros vehicula posuere. Pellentesque sagittis volutpat eros vitae dignissim. Donec blandit maximus tortor. '
    },
    {
        id: 3,
        name: 'Stephenie Ross',
        job: 'system analyst',
        img: 'images/photo3.jpg',
        txt: 'Praesent et turpis id turpis sodales tristique quis non ante. Nam quis risus aliquam, porta tortor non, dapibus nulla. Aenean efficitur nulla augue, Suspendisse sed dui in enim porttitor'
    },
    {
        id: 4,
        name: 'Seth Gibsons',
        job: 'project manager',
        img: 'images/photo4.jpg',
        txt: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse a ante magna. Ut et mi at velit iaculis aliquet.'
    },
    {
        id: 5,
        name: 'Collins Rockson',
        job: 'java developer',
        img: 'images/photo5.jpg',
        txt: 'Integer arcu nisl, auctor dignissim vulputate eget, scelerisque at nulla. Suspendisse sit amet risus ut velit lamen si tes tot la pot in fem Suspendisse sed dui in enim porttitor'
    },
    {
        id: 6,
        name: 'Stella Banner',
        job: 'system engineer',
        img: 'images/photo6.jpg',
        txt: 'Fusce et aliquet turpis. Sed eleifend, purus ac ornare ullamcorper, diam neque elementum lectus, tristique facilisis lorem nunc cursus dolor. In efficitur eleifend nisl at commodo. Vestibulum rhoncus justo ligula, gravida commodo ligula feugiat non. Cras vitae risus magna. '
    },
    {
        id: 7,
        name: 'Kelvin Runner',
        job: 'database manager',
        img: 'images/photo7.jpg',
        txt: ' Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse sed dui in enim porttitor porttitor at ut felis Suspendisse sed dui in enim porttitor'
    }
];

let currentProfile = 0;

window.onload = function() {
    showPerson();
}

function showPerson() {
    const profile = reviews[currentProfile];
    personImage.src = profile.img;
    personName.textContent = profile.name;
    personJob.textContent = profile.job;
    personTxt.textContent = profile.txt;
}

nextBtn.addEventListener('click', function() {
    (currentProfile > reviews.length - 1) ? currentProfile = 0 : currentProfile++;
    showPerson();
});

prevBtn.addEventListener('click', function() {
    (currentProfile < 0) ? currentProfile = reviews.length - 1 : currentProfile--;
    showPerson();
});


randomize.addEventListener('click', function() {
    randomProfile();
    showPerson();
});

function randomProfile() {
    currentProfile = Math.floor(Math.random() * reviews.length);
}
