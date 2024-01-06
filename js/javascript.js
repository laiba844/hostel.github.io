window.onload = function() {
    const stars = document.querySelectorAll('.rating-stars');

    stars.forEach(star => {
      star.addEventListener('click', function() {
        const value = parseInt(this.dataset.value);
        setRating(value);
      });
    });

    function setRating(value) {
      stars.forEach(star => {
        const starValue = parseInt(star.dataset.value);
        if (starValue <= value) {
          star.innerHTML = '&#9733;'; // Filled star
        } else {
          star.innerHTML = '&#9734;'; // Empty star
        }
      });
    }
  };

  let a= document.querySelector("#para")
  let b= document.querySelector("#hide")
  b.style.display="none"
  a.addEventListener("click" , function run(){
  
      if(b.style.display != "block")
      {
          b.style.display= "block";
      }
      else
      {
          b.style.display= "none";
         
      }
  })

  let c= document.querySelector("#para1")
  let d= document.querySelector("#hide1")
  d.style.display="none"
  c.addEventListener("click" , function run(){
  
      if(d.style.display != "block")
      {
          d.style.display= "block";
      }
      else
      {
          d.style.display= "none";
         
      }
  })

  let e= document.querySelector("#para2")
  let f= document.querySelector("#hide2")
  f.style.display="none"
  e.addEventListener("click" , function run(){
  
      if(f.style.display != "block")
      {
          f.style.display= "block";
      }
      else
      {
          f.style.display= "none";
         
      }
  })