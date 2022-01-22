// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

let img = document.querySelector("#person-img");
let author = document.querySelector("#author");
let job = document.querySelector("#job");
let info = document.querySelector("#info");

const prevbtn =  document.querySelector(".prev-btn");
const nextbtn =  document.querySelector(".next-btn");
const surprise = document.querySelector(".random-btn");


let currentItem = 0;

window.addEventListener('DOMContentLoaded',function(){
  showPerson(currentItem)
})


surprise.addEventListener('click',function(){

  currentItem = Math.floor(Math.random()* reviews.length);
  showPerson(currentItem)
})


//show next person

nextbtn.addEventListener('click',function(){

  currentItem++;
  if(currentItem > reviews.length -1){
    currentItem = 0//set to first item
  }
  showPerson(currentItem);
})

//show prev person
prevbtn.addEventListener('click',function(){

  currentItem--;
  if(currentItem < 0){
    currentItem = reviews.length - 1;//set to last item
  }
  showPerson(currentItem);
})

//show person based on item

function showPerson(person){
  const item = reviews[person];
  author.textContent = item.name;
  job.textContent = item.job
  info.textContent = item.text;
  img.src = item.img

}
