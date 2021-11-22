// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";


console.log(galleryItems);
const galleryContainer = document.querySelector('.gallery');

galleryContainer.insertAdjacentHTML('beforeend', createGalleryItems(galleryItems));


function createGalleryItems(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => 
    `<a class="gallery__item" href="${original}">
        <img class="gallery__image"
        src="${preview}"
        alt="${description}"/>
    </a>`
    ).join('');
}


const lightbox = new SimpleLightbox('.gallery a',
    {
        captionsData: 'alt',
        captionDelay: 250,
    });