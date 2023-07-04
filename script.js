
function openres() {
  window.open('Priyangshu_Sarkar.pdf');
}


function redirectToGitHub() {
  // Specify the URL you want to redirect to
  var url = 'https://github.com/PriyangshuSarkar';
  // Redirect the user to the specified URL
  window.open(url, '_blank');
}

function redirectToLinkedIn() {
  // Specify the URL you want to redirect to
  var url = 'https://www.linkedin.com/in/priyangshu-sarkar-aa4595215/';
  // Redirect the user to the specified URL
  window.open(url, '_blank');
}

function redirectToInsta() {
  // Specify the URL you want to redirect to
  var url = 'https://www.instagram.com/priyangshusarkar09/';
  // Redirect the user to the specified URL
  window.open(url, '_blank');
}

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", ()=>{
  if(window.pageOffset > 100){
    toTop.classList.add('active');
  }
  else{
    toTop.classList.remove('active');
  }
})