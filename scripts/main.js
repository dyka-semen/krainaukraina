var spanKarp = document.querySelector('#karp');
var spanPodil = document.querySelector('#podil');
var spanPolis = document.querySelector('#polis');
var spanPetr = document.querySelector('#petr');
var spanSlob = document.querySelector('#slob');
var img = document.querySelector('.img');
var buttons = document.querySelector('#buttons');

var gallery;
var imageCounts = {
  karp: 9,
  podil: 9,
  petr: 14,
  polis: 15,
  slob: 11
};

var imgNum;

spanKarp.addEventListener('click', onSpanClick);
spanPodil.addEventListener('click', onSpanClick);
spanPolis.addEventListener('click', onSpanClick);
spanPetr.addEventListener('click', onSpanClick);
spanSlob.addEventListener('click', onSpanClick);


function changeImage() {
  img.setAttribute('src', 'images/' + gallery + '/img' + imgNum + '.jpg');
}

function prev() {
  if (imgNum === 1) {
    imgNum = imageCounts[gallery];
  } else {
    imgNum = imgNum - 1;
  }
  changeImage();
}

function  next(){
  if (imgNum === imageCounts[gallery]) {
    imgNum = 1;
  } else {
    imgNum = imgNum + 1;
  }

  changeImage();
}

function onSpanClick(e) {
  gallery = e.target.id;
  spanKarp.classList.remove('selected');
  spanPodil.classList.remove('selected');
  spanPolis.classList.remove('selected');
  spanPetr.classList.remove('selected');
  spanSlob.classList.remove('selected');
  e.target.classList.add('selected');
  buttons.classList.remove('hidden');
  imgNum = 1;
  changeImage();
}