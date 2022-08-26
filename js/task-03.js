const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


// const createGalleryItem = ({ url, alt }) =>
//   `<li><img src="${url}" alt="${alt}" width = 200 height = 150></li>`;
// // const galleryMarkup = images.reduce(
//   (acc, item) => acc + createGalleryItem(item),
//   ""
// );
// const galleryList = document.querySelector("#gallery");
// galleryList.insertAdjacentHTML("afterbegin", galleryMarkup);
// galleryList.setAttribute("style", "list-style-type:none; display: flex;");


// const galleryEl = document.querySelector('.gallery');
// const makeGallery = images.map(image)



// const list = ingredients.reduce((str, item) => str + `<li>${item}</li>`, '');

// // 

// const imagesContainerEl = document.querySelector('.gallery');

// const elements = images.map(image => {

//   const imageEl = document.createElement('image')
//   imageEl.type = "image";
//   imageEl.classList.add('image');

//   imageEl.setAttribute("alt", image.alt);
//   imageEl.setAttribute('src', image.url);

//   return imageEl;

  
  

// })

// console.log(elements)
// imagesContainerEl.append(...elements);

const ulEl = document.querySelector('.gallery');

const list = images.forEach(el => {
  ulEl.insertAdjacentHTML(
    'afterbegin',
    `<li><img src = "${el.url}" alt = "${el.alt}"  width = "150" height = "100" /></li>`,
  );

});

list.setAttribute("style", "list-style-type:none; display: flex;");


