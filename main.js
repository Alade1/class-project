const isResponsive = true;
const mediaSmall = 600;
const libraries =["boxicons", "SCSS", "Googlefonts"];
const learnt = "I learnt how to use SASS and embed my JS in my Sass project";

console.log(isResponsive);
console.log(mediaSmall);
console.log(libraries[0]);
console.log(learnt);




function alertUser(event){
    event.preventDefault();
  
    Swal.fire({
        title: 'Custom width, padding, color, background.',
        width: 600,
        padding: '3em',
        color: '#716add',
        background: '#fff url(/images/trees.png)',
        backdrop: `
          rgba(0,0,123,0.4)
          url("/images/nyan-cat.gif")
          left top
          no-repeat
        `
      })
      console.log("Js first");
}