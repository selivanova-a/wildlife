const slidesContainer = document.querySelector('.slider__slides');
const buttonLeft = document.querySelector('.slider__button_left');
const buttonRight = document.querySelector('.slider__button_right');

let slideOne = document.querySelector('.slider__item_1');
let slideTwo = document.querySelector('.slider__item_2');


let slides = [slideOne, slideTwo];
let currentPosition = 0;


function setPosition (position) {
	if (position > 0) {
		return false;
	}
	if (position < -(slides.length - 1) * 100) {
		return false;
	}
	currentPosition = position;
	slides.forEach(slide => slide.style.transform = `translateX( ${position}%)`);
	return currentPosition;
}

buttonRight.onclick = () => {
	setPosition(currentPosition - 100);
};

buttonLeft.onclick = () => {
	setPosition(currentPosition + 100);
};


