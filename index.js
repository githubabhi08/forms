const Nname=document.getElementById("name")
const gapN=document.getElementById("gapnn")

const Asubmit=document.getElementById("submitt")

const Eemail=document.getElementById("email")
const gapE=document.getElementById("gapee")

const Ppassword=document.getElementById("password")
const gapP=document.getElementById("gappp")

const Aaddress=document.getElementById("address")
const gapA=document.getElementById("gapaa")

const Nnumber=document.getElementById("number")
const gapNO=document.getElementById("gapnoo")

const Ggender=document.getElementById("gender")
const gapG=document.getElementById("gapgg")

const Ooccupation=document.getElementById("occupation")
const gapOC=document.getElementById("gapoo")


function Nchotu(){
    const cho=Nname.value;
    if(cho.length==0){
        gapN.innerHTML=`<i class="fa-solid fa-circle-exclamation"></i>`
        gapN.style.color="yellow"
        Asubmit.disabled=true;
        return false;
    }
     if(!cho.match(/^[A-Za-z]+\s{1}[A-Za-z]+$/)){
        gapN.innerHTML=`<i class="fa-solid fa-circle-xmark"></i>`
        gapN.style.color="red"
        Asubmit.disabled=true;
        return false;
    }
    else{
        gapN.innerHTML=`<i class="fa-solid fa-check"></i>`
        Asubmit.disabled=false;
        gapN.style.color="#00ff00"
        return true;
    }
}

Nname.addEventListener("keyup",Nchotu)
Nname.addEventListener("blur",Nchotu)

/* Email valid */

function vikash(){
    const vik=Eemail.value;
    if(vik.length==0){
        gapE.innerHTML=`<i class="fa-solid fa-circle-exclamation"></i>`
        gapE.style.color="yellow"
        Asubmit.disabled=true;
        return false;
    }
     if(!vik.match(/^[A-Za-z0-9]+[@][A-Za-z]+[\.][a-z]{3}$/)){
        gapE.innerHTML=`<i class="fa-solid fa-circle-xmark"></i>`
        Asubmit.disabled=true;
        gapE.style.color="red"
        return false;
    }
    else{
        gapE.innerHTML=`<i class="fa-solid fa-check"></i>`
        Asubmit.disabled=false;
        gapE.style.color="#00ff00"
        return true;
    }
}

Eemail.addEventListener("keyup",vikash)
Eemail.addEventListener("blur",vikash)
/* password valid */

function vishal(){
    const vis=Ppassword.value;
    if(vis.length==0){
        gapP.innerHTML=`<i class="fa-solid fa-circle-exclamation"></i>`
        gapP.style.color="yellow"
        Asubmit.disabled=true;
        return false;
    }
     if(!vis.match(/^[A-Za-z0-9]+[@]?[0-9]+$/)){
        gapP.innerHTML=`<i class="fa-solid fa-circle-xmark"></i>`
        Asubmit.disabled=true;
        gapP.style.color="red"
        return false;
    }
    else{
        gapP.innerHTML=`<i class="fa-solid fa-check"></i>`
        Asubmit.disabled=false;
        gapP.style.color="#00ff00"
        return true;
    }
}

Ppassword.addEventListener("keyup",vishal)
Ppassword.addEventListener("blur",vishal)
/* address */
function vicky(){
    const vic=Aaddress.value;
    if(vic.length==0){
        gapA.innerHTML=`<i class="fa-solid fa-circle-exclamation"></i>`
        gapA.style.color="Yellow"
        Asubmit.disabled=true;
        return false;
    }
     if(!vic.match(/^[A-Za-z]*[\s]*[A-Za-z]*[\,]*[\s]*[A-Za-z]*[\,]*[\s]*[A-Za-z]*[\s]*[A-Za-z]*$/)){
        gapA.innerHTML=`<i class="fa-solid fa-circle-xmark"></i>`
        gapA.style.color="red"
        Asubmit.disabled=true;
        return false;
    }
    else{
        gapA.innerHTML=`<i class="fa-solid fa-check"></i>`
        Asubmit.disabled=false;
        gapA.style.color="#00ff00"
        return true;
    }
}

Aaddress.addEventListener("keyup",vicky)
Aaddress.addEventListener("blur",vicky)
/* number valid */

function khushi(){
    const khus=Nnumber.value;
    if(khus.length==0){
        gapNO.innerHTML=`<i class="fa-solid fa-circle-exclamation"></i>`
        Asubmit.disabled=true;
        gapNO.style.color="yellow"
        return false;
    }
     if(!khus.match(/^[8,9][0-9]{9}$/)){
        gapNO.innerHTML=`<i class="fa-solid fa-circle-xmark"></i>`
        Asubmit.disabled=true;
        gapNO.style.color="red"
        return false;
    }
    else{
        gapNO.innerHTML=`<i class="fa-solid fa-check"></i>`
        Asubmit.disabled=false;
        gapNO.style.color="#00ff00"
        return true;
    }
}

Nnumber.addEventListener("keyup",khushi)
Nnumber.addEventListener("blur",khushi)
/* occupation */

function abhi(){
    const love=Ooccupation.value;
    if(love.length==0){
        gapOC.innerHTML=`<i class="fa-solid fa-circle-exclamation"></i>`
        gapOC.style.color="yellow"
        Asubmit.disabled=true;
        return false;
    }
     if(!love.match(/^[A-Za-z]*[\s][A-Za-z]*$/)){
        gapOC.innerHTML=`<i class="fa-solid fa-circle-xmark"></i>`
        gapOC.style.color="red"
        Asubmit.disabled=true;
        return false;
    }
    else{
        gapOC.innerHTML=`<i class="fa-solid fa-check"></i>`
        Asubmit.disabled=false;
        gapOC.style.color="#00ff00"
        return true;
    }
}

Ooccupation.addEventListener("keyup",abhi)
Ooccupation.addEventListener("blur",abhi)