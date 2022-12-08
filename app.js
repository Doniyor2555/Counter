let count = 0;

const value = document.querySelector("#value"),
      btns = document.querySelectorAll(".btn");

btns.forEach((item) => {
  item.addEventListener("click", (e) => {
    const target = e.currentTarget.classList;
    if(target.contains("decrease")){
      count--;
    }else if(target.contains("increase")){
      count++;
    } else{
      count = 0;
    }
    if(count > 0){
      value.style.color = 'green';
    } else if(count < 0){
      value.style.color = 'red';
    } else{
      value.style.color = '';
    }
    value.textContent = count;
  });
});