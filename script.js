var dis=0;

function showhide() {
    if(dis==1){
        document.getElementById("nav-icon").style.display="block";
        document.getElementById("body-header").style.margin="-10px 0px 0px 0px";
      
        dis=0;
    }
    else{
        document.getElementById("nav-icon").style.display="none";
        dis=1;

    }
}

