
let listV=document.querySelectorAll(".listVideo");
for(let i=0;i<listV.length;i++){
  listV[i].addEventListener("click", function () {
    document.querySelector(".mainVideo").src =
      listV[i].name;
  });
}




let worning = document.createElement("p");
document.querySelector(".input").appendChild(worning);
worning.textContent = "You can't use name that you already used";
worning.style.position = "absolute";
worning.style.fontSize = "10px";
worning.style.color = "red";
worning.style.bottom = "-6px";
worning.style.left = "0px";
worning.style.display = "none";
let nameOfGroup;

function addField(){
    document.querySelector(".newGroup").style.display = "none";
    document.querySelector(".input").style.display="flex";
    worning.style.display = "none";

}
let removeBtn = document.querySelectorAll(".delete");
document.querySelector(".submitGroup").addEventListener("click", function () {
    
    for(i=0;i<document.querySelectorAll(".janr").length;i++){
        if(document.querySelectorAll(".janr")[i].textContent
        ==document.querySelector(".nameGroup").value){
            worning.style.display="block";
            return;
        }
        
    }
    
    field = document.createElement("li");
    link = document.createElement("a");
    deleteB=document.createElement("a");
    field.appendChild(link);
    field.appendChild(deleteB);
    link.classList.add("janr");
    link.setAttribute(
      "id",
      document.querySelector(".nameGroup").value.replace(/\s+/g, "")+"1"
    );
    deleteB.classList.add("delete");
    document.querySelector(".fields").appendChild(field);
    link.textContent = document.querySelector(".nameGroup").value;
    deleteB.textContent = "Delete";

    document.querySelector(".input").style.display = "none";
    document.querySelector(".newGroup").style.display = "flex";
    
    let sectionBox = document.createElement("section");
    let secHead = document.createElement("div");
    let titleS = document.createElement("h2");
    let conS = document.createElement("div");
    secHead.appendChild(titleS);
    secHead.appendChild(document.querySelector(".addNewVideo"));
    secHead.appendChild(document.querySelector(".submitVideoLabel"));
    sectionBox.appendChild(secHead);
    sectionBox.appendChild(conS);
    conS.classList.add(".list");
    secHead.classList.add("secHead");
    document.querySelector("body").appendChild(sectionBox);
    sectionBox.setAttribute("id",
      document.querySelector(".nameGroup").value.replace(/\s+/g, "")
    );
    titleS.textContent=document.querySelector(".nameGroup").value;

    removeBtn = document.querySelectorAll(".delete");
    for (var i = 0; i < removeBtn.length; i++) {
      removeBtn[i].addEventListener("click", registerClickHandler, false);
    }
});

function registerClickHandler(e) {

    document.querySelector(".confDelete").style.display = "block";
    var target = e.target;
    document.querySelector(".yes").addEventListener("click", function () {
        console.log(target.parentNode.children[0].id);
        console.log(target.parentNode.children[0].id.slice(0, -1));
        if (
          document.getElementById(
            target.parentNode.children[0].id.slice(0, -1)
          ) !== null
        ) {
          document
            .getElementById(target.parentNode.children[0].id.slice(0, -1))
            .remove();
          target.parentNode.parentNode.removeChild(target.parentNode);
          document.querySelector(".confDelete").style.display = "none";
        }

  });
    document.querySelector(".no").addEventListener("click", function () {
    document.querySelector(".confDelete").style.display = "none";
  });
}

for (var i = 0 ; i < removeBtn.length; i++) {
    removeBtn[i].addEventListener("click", registerClickHandler,false);
}





let addVideoButton = document.querySelectorAll(".addNewVideo");

for(let i=0;i<addVideoButton.length;i++){
    addVideoButton[i].addEventListener("click", function(){
    
        addVideoButton[i].style.display="none";
        addVideoButton[i].parentNode.children[2].style.display="flex";
    })
}

let submitVideo = document.querySelectorAll(".submitVideo");

for (let i = 0; i < submitVideo.length; i++) {
  submitVideo[i].addEventListener("click", function () {
    if (
      submitVideo[i].parentNode.children[1].value.includes(
        "https://www.youtube.com"
      ) === false
    ) {
      let worning1 = worning;
     
      worning1.style.display = "block";
      worning1.style.bottom = "-10px";
      worning1.style.left = "260px";
      worning1.textContent = "You have to add youtube link";
      submitVideo[i].parentNode.appendChild(worning1);

      return;
    }
    else if(submitVideo[i].parentNode.children[3].value==""){
       let worning1 = worning; 
        worning1.style.display = "block";
        worning1.style.bottom = "-10px";
        worning1.style.left = "800px";
        worning1.textContent = "Name can't be empty";
        submitVideo[i].parentNode.appendChild(worning1);

        return;
    }




      submitVideo[i].parentNode.style.display = "none";
    submitVideo[i].parentNode.parentNode.children[1].style.display="block";
    let video=document.createElement("button");
    video.classList.add("listVideo");
    submitVideo[i].parentNode.parentNode.parentNode.children[1].appendChild(video);
    let name = document.createElement("div");
    let delete1 = document.querySelector(".delete1");
    name.classList.add("imageVideo");
    video.appendChild(name);
    video.appendChild(delete1);
    name.style.background="black";
    console.log(submitVideo[i].parentNode.children[3]);
    name.textContent=submitVideo[i].parentNode.children[3].value;
    name.style.color="white";
    name.style.display="flex";
    name.style.alignItems = "center";
    name.style.justifyContent = "center";

   video.setAttribute(
     "name",
     submitVideo[i].parentNode.children[1].value
       .replace("watch?v=", "embed/")
       .replace("&", "?")
   );

    
      video.addEventListener("click", function () {
        document.querySelector(".mainVideo").src = video.getAttribute("name");
        console.log(video.getAttribute("name"));
      
      });
    
  });
}


let delete1= document.querySelectorAll(".delete1");
for(let i=0;i<delete1.length;i++){
    delete1[i].addEventListener("click", function(){
        delete1[i].parentNode.remove();
    })
}