let wholeLogoDiv = document.querySelectorAll('.whole_logo');

window.addEventListener('DOMContentLoaded', ()=>{

  setTimeout(()=>{
    wholeLogoDiv.forEach((div, idx)=>{
      setTimeout(()=>{
        div.classList.add('active');
      }, (idx + 1) * 400)
    })
  })
})