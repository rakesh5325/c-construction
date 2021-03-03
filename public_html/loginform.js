function submituserdoc() {
    
    var  username = $('#username').val();
    
    var  userpassword = $('#userpassword').val();
    
    console.log(username,userpassword);
    
    //   return;
    
    if (username.toUpperCase()=="USER6" && userpassword.toUpperCase()=="USER6"){ 
         console.log('text');
            
            window.location.href="homePage.html";
            
        }else
        {console.log('---------->>>',username,'--------->>>',userpassword)
        
       console.log('username& password incorrect')};
   
}





