
let listV=document.querySelectorAll(".listVideo");
let delete1 = document.querySelectorAll(".delete1");
let worning = document.querySelector(".warning");
let nameOfGroup;
let removeBtn = document.querySelectorAll(".delete");
let addVideoButton = document.querySelectorAll(".addNewVideo");
let submitVideo = document.querySelectorAll(".submitVideo");

for(let i=0;i<listV.length;i++){
  listV[i].addEventListener("click", function () {
    document.querySelector(".mainVideo").src =
      listV[i].name;
  });
}

for (let i = 0; i < delete1.length; i++) {
  delete1[i].addEventListener("click", function () {
    delete1[i].parentNode.remove();
  });
}

for (var i = 0; i < removeBtn.length; i++) {
  removeBtn[i].addEventListener("click", removeField, false);
}
for (let i = 0; i < submitVideo.length; i++) {
  submitVideo[i].addEventListener("click", addVideoFcn, false);
}
function addField(){
    document.querySelector(".newGroup").style.display = "none";
    document.querySelector(".input").style.display="flex";
    worning.style.display = "none";
}

for (let i = 0; i < addVideoButton.length; i++) {
  addVideoButton[i].addEventListener("click", function () {
    addVideoButton[i].style.display = "none";
    addVideoButton[i].parentNode.children[2].style.display = "flex";
    addVideoButton[i].parentNode.children[2].children[5].style.display = "none";
    addVideoButton[i].parentNode.children[2].children[6].style.display = "none";
  });
}

document.querySelector(".submitGroup").addEventListener("click", function () {
    
    for(i=0;i<document.querySelectorAll(".janr").length;i++){
        if(document.querySelectorAll(".janr")[i].textContent
        ==document.querySelector(".nameGroup").value){
            worning.textContent = "You can't use name that you already used";
            worning.style.display="block";
            return;
        }   
    }
    if(document.querySelector(".nameGroup").value==""){
        
        worning.textContent="You can't submit empty field";
        worning.style.display = "block";
        return;
    }
    console.log(document.querySelector(".nameGroup").value);
    let field=document.querySelectorAll(".field")[0].cloneNode(true);

     field.children[0].setAttribute(
       "id",
       document.querySelector(".nameGroup").value.replace(/\s+/g, "") + "1"
     );

    document.querySelector(".fields").appendChild(field);
    field.children[0].textContent = document.querySelector(".nameGroup").value;
    document.querySelector(".input").style.display = "none";
    document.querySelector(".newGroup").style.display = "flex";
    
    let sectionBox = document.getElementById("Education").cloneNode(true);

    document.querySelector(".selections").appendChild(sectionBox);

    sectionBox.setAttribute("id",
      document.querySelector(".nameGroup").value.replace(/\s+/g, "")
    );
    let titleS = sectionBox.children[0].children[0];
    let addVideoButtonN = sectionBox.children[0].children[1];
    let submitVideoN = sectionBox.children[0].children[2].children[4];
    titleS.textContent=document.querySelector(".nameGroup").value;

    field.children[1].addEventListener("click", removeField, false);

    addVideoButtonN.addEventListener("click", function () {
    addVideoButtonN.style.display = "none";
    addVideoButtonN.parentNode.children[2].style.display = "flex";
    addVideoButtonN.parentNode.children[2].children[5].style.display ="none";
    addVideoButtonN.parentNode.children[2].children[6].style.display ="none";
      });
    
    submitVideoN.addEventListener("click", addVideoFcn, false);
    
    
});

function removeField(e) {

    document.querySelector(".confDelete").style.display = "block";
    var target = e.target;
    document.querySelector(".yes").addEventListener("click", function () {

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

function addVideoFcn(e) {

    var target=e.target;
    
    if (
      target.parentNode.children[1].value.includes(
        "https://www.youtube.com"
      ) === false
    ) {
        target.parentNode.children[5].style.display =
          "block";
        
        
        return;
    }
    if(target.parentNode.children[3].value==""){
        target.parentNode.children[6].style.display =
          "block";
        return;
    }

    target.parentNode.style.display = "none";
    target.parentNode.parentNode.children[1].style.display="block";

    let video=document.createElement("button");
    video.classList.add("listVideo");
    console.log(target);
    target.parentNode.parentNode.parentNode.children[1].appendChild(video);
    let name = document.createElement("div");
    let delete1 = document.querySelector(".delete1").cloneNode(true);
  
    video.appendChild(name);
    video.appendChild(delete1);
    name.style.background="black";
    name.textContent=target.parentNode.children[3].value;
    name.style.color="white";
    name.style.display="table";
    name.style.paddingTop = "20%";
    name.style.boxSizing="border-box";
    name.style.width="150px";
    name.style.height = "120px";
  
    name.style.inlineSize= "150px";
    name.style.overflowWrap= "break-word";
    name.style.wordBreak = "break-all";
    video.setAttribute(
     "name",target.parentNode.children[1].value
       .replace("watch?v=", "embed/")
       .replace("&", "?")
   );

    video.addEventListener("click", function () {
        document.querySelector(".mainVideo").src = video.getAttribute("name");
        console.log(video.getAttribute("name"));
    });
    delete1.addEventListener("click", function () {
        delete1.parentNode.remove();
      });
    
    
  }



