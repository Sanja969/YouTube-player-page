
    // document.querySelector(".mainVideo").src =
    //   document.querySelector(".imageVideo").name;    

for(let i=0;i<20;i++){
  document.querySelector(".listVideo"+i).addEventListener("click", function () {
    document.querySelector(".mainVideo").src =
      document.querySelector(".imageVideo"+i).name;
  });
}

