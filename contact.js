$(document).ready(function(){
  var validate=$("#submit-form").validate({
    rules:{
      fname:{
        required:true,
        minlength:4
      },
      emailid:{
        required:true,
        email:true
      },
      subject:{
        required:true
      },
      mssg:{
        required:true
      },
      submit:{
        required:true,
        
      },

    },
      submitHandler:function(form){
        $.ajax({
          url:"https://script.google.com/macros/s/AKfycbzhm69NLG7beHbtVCZyxzBlSY0wBXN3xzG0R-zOtNTHKnIhbNo8C48vOjO4W54rvn28/exec",
          data:$("#submit-form").serialize(),
          method:"post",
          success:function (response){
              alert("Form submitted successfully")
              window.location.reload()
              //window.location.href="https://google.com"
          },
          error:function (err){
              alert("Something Error")

          }
      })
      

    }
  })

    
})
