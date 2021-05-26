function opened(params,e) {
    var tab=document.getElementsByClassName('tab')
    for (let index = 0; index < tab.length; index++) {
       tab[index].style.display='none'
        
    }
    var box=document.getElementsByClassName('box')
    for (let index = 0; index < tab.length; index++) {
        box[index].style.backgroundColor='rgb(240,240,240)'
         
     }
   document.getElementById(params).style.display='flex'
    e.style.backgroundColor='rgb(250,250,250)'
    
}

document.getElementById('default').click()
function checkbuttondisabled(e){

    var file=document.querySelector('#file')
    var filelength=file?.files.length
    if(filelength==1){
        document.querySelector("#speechContainer > form > div > .upload").disabled=false
    }
    else{
        
        document.querySelector("#speechContainer > form > div > .upload").disabled=true
    }
    
}
checkbuttondisabled(null)
document.getElementById("loading").style.display="none"
function startloading() {
    document.querySelector("#speechContainer > form > div > .upload").disabled=true
   if( document.querySelector("#speechTranscribeContainer") !=null){
    document.querySelector("#speechTranscribeContainer").style.display="none"
   }
   
    document.getElementById("loading").style.display="block" 
}

function download(filename) {
    var text=document.querySelector("#data").innerText
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
  }