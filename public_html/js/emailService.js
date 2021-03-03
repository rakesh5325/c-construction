function submitCustomerInfo(form){
    var fullName=$('#fullName').val();
    
   var mobileNumber=$('#mobileNumber').val();
   
   var emailaddress=$('#emailaddress').val();
   
   var message=$('#message').val();
   
   if (fullName&&mobileNumber&&emailaddress&&message){
       
       let notifier= new AWN();
       
       Email.send({
           
           Host: "smtp.gmail.com",
           
           Username: "nklrakesh268@gmail.com",
           
           password: "********",
           
           To: "rakeshshiva2002@gmail.com",
           
           from: "nklrakesh268@gmail.com",
           
           subject: "Customer Request",
           
           Body:'<html><h2>Customer Details</h2><br>\n\
           
            <div> Name:'+fullname+'</div><br>\n\
            
            <div> Mobile Number:'+mobileNumber+'</div><br>\n\
            
            <div>Customer Mail Id:'+emailAddress+'</div><br>\n\
            
            <div> Message:'+message+'</div></html>'
            
        }).then(function (message){console.log('------->>>',message);
            
            if(message=='OK'){
                
                notifier.success('Successfully submitted');
                
                console.log('---------->>>',message);
                
                form.reset();
            }else{
                
                notifier.alert('service Error');
                
        }
    })
    
    }
    
    }
            
       
   
   
   



