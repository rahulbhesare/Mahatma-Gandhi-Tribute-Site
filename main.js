
<script>
//Boolean variables to check menu on/off.
var isMenuOn = false;
var isAboutOn = false;
var isMailOn = false;
var isRefOn = false;
//function to handle click events...
function clicked(num){
switch (num){
case 1:if(isMenuOn){
    //Close the Menu
    document.getElementById("menu").style.display="none";
    document.getElementById("menubtn").innerText="= ";
    isMenuOn = false;
    } else {
    //Show menu
    closeAll();
    document.getElementById("menu").style.display="inline";
    document.getElementById("menubtn").innerText="X ";
    isMenuOn = true;
    }
    break;
case 2:if(isAboutOn){
    //Hide About Data
    document.getElementById("devs").style.display="none";
    isAboutOn = false;
    } else {
    //Show About Data
    closeAll();
    document.getElementById("devs").style.display="inline";
    window.scrollBy(0,100);
    isAboutOn = true;
    }
    break;
case 3:if(isMailOn){
    //Hide E-mail
    document.getElementById("mail").style.display="none";
    isMailOn = false;
    } else {
    //Show E-mail
    closeAll();
    document.getElementById("mail").style.display="inline";
    window.scrollBy(0,100);
    isMailOn = true;
    }
    break;
case 4:if(isRefOn){
    //Hide References
    document.getElementById("ref").style.display="none";
    isRefOn = false;
    } else {
    //Show References
    closeAll();
    document.getElementById("ref").style.display="inline";
    window.scrollBy(0,100);
    isRefOn = true;
    }
    break;
default:console.log("Something went wrong");   
break;
}
}
//Function to Close all menu when tap on main content
function closeAll(){
document.getElementById("menu").style.display="none";
document.getElementById("menubtn").innerText="= ";
isMenuOn = false;
document.getElementById("devs").style.display="none";
isAboutOn = false;
document.getElementById("mail").style.display="none";
isMailOn = false;
document.getElementById("ref").style.display="none";
isRefOn = false;
}
</script>
