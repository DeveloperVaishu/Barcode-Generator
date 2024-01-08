let  qrImage=document.getElementById("qrImage");
let imgBox=document.getElementById("imgBox");
let link=document.getElementById("input");


function barcode(){
    
            if(link.value.length>0)
            {
                qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + link.value;
                 imgBox.classList.add("show-img")
            }
            else
            {
                link.classList.add("error")
                setTimeout(()=>{
                    link.classList.remove("error")
                },1000);
            }

            

}