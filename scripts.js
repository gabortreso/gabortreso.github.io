
let imageOne = {
    photo: 'images/image1.jpg',
    title: 'ANUBIS',
    description: 'God of the Dead',
    };
    
/* Load single picture
$('#photo').attr('src', imageOne.photo);
$('#photo-title').text(imageOne.title);
$('#photo-description').text(imageOne.description);
*/

let imageTwo = {
    photo: './images/image2.jpg',
    title: 'DISCORDIA',
    description: 'Goddess of Strife',
    };

let imageThree = {
    photo: './images/image3.jpg',
    title: 'ZEUS',
    description: 'God of the Sky',
    };

let imageFour = {
    photo: './images/image4.jpg',
    title: 'HACHIMAN',
    description: 'Lord of the Eight Banners',
    };

let imageFive = {
    photo: './images/image5.jpg',
    title: 'KALI',
    description: 'Goddess of Destruction',
    };

let imageSix = {
    photo: './images/image6.jpg',
    title: 'KUKULKAN',
    description: 'Serpent of the Nine Winds',
    };

let imagesData = [imageOne, imageTwo, imageThree, imageFour, imageFive, imageSix]

let currentPhoto = 0;

$('#forward-button').click(() => {
    if(currentPhoto < 5) {
        currentPhoto++;
        loadPhoto(currentPhoto);}
    })

$('#back-button').click(() => {
    if (currentPhoto > 0) {
        currentPhoto--;
        loadPhoto(currentPhoto);}
    })

imagesData.forEach((item, index) => {
    $('#thumbnail-container').append(`<div class="thumbnail-frame">
                                        <img class="thumbnail" src="${item.photo}" width="80px" height="100px" imagesData-index="${index}">
                                        <div class="hidden-name">${item.title}</div>
                                    </div>`);
    $('.thumbnail').click((event) => {
        let indexClicked = $(event.target).attr('imagesData-index');
        let numberIndex = parseInt(indexClicked);
        $('#photo').attr('src', imagesData[numberIndex].photo);
        $('#photo-title').text(imagesData[numberIndex].title);
        $('#photo-description').text(imagesData[numberIndex].description);
        $('.thumbnail-frame').eq(numberIndex).css({"width":"100px", "height":"130px"});
        $('.thumbnail-frame').not(`:eq(${numberIndex})`).css({"width":"80px", "height":"100px"});
        $('.thumbnail').eq(numberIndex).css({"width":"100px", "height":"130px"});
        $('.thumbnail').not(`:eq(${numberIndex})`).css({"width":"80px", "height":"100px"}); 
        currentPhoto = numberIndex;
    });
  });

let loadPhoto = (photoNumber) => {
    $('#photo').attr('src', imagesData[photoNumber].photo);
    $('#photo-title').text(imagesData[photoNumber].title);
    $('#photo-description').text(imagesData[photoNumber].description);
    $('.thumbnail-frame').eq(photoNumber).css({"width":"100px", "height":"130px"});
    $('.thumbnail-frame').not(`:eq(${photoNumber})`).css({"width":"80px", "height":"100px"});
    $('.thumbnail').eq(photoNumber).css({"width":"100px", "height":"130px"});
    $('.thumbnail').not(`:eq(${photoNumber})`).css({"width":"80px", "height":"100px"});  
    }

loadPhoto(currentPhoto);
