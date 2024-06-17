const carousel = document.querySelector("#carousel")
const slides = document.querySelectorAll(".slide")
const btn = document.querySelector("#btn1")
const carsole = document.querySelector(".carsole")

  var counter = 1;

     


  
  slides.forEach((slide , index) => {
     slide.style.left = `${index *100}%`

  
  });

const  goPrivious = () =>{
    if(counter <= 0) return;
    counter--
    imageSlide()
   
    
  }
  const  goNext = () =>{
    if(counter >= slides.length -1)return;
    counter++;
    imageSlide()
  }

 const imageSlide = () => {
    slides.forEach((slide) => {
      slide.style.transform = `translateX(-${counter*100}%)`
    })
 }
 
 const excitingProduct = document.querySelector(".exciting-product")
 const  excitingItem = document.querySelectorAll(".excitingitem")
 const btnPriviousItem = document.querySelector("#item-privious")
 const btmNextItem = document.querySelector(".exciting-next")

 

 

