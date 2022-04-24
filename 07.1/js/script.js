$(function (){

    $("form").submit(function(event){
        var name = $("#name").val()
        var password = $("#password").val();
        var textarea = $("#textarea").val();
        var check = $("#check").is(":checked");

        validateNameField(name,event)
        ValidatePassword(password,event);
        ValidTextarea(textarea,event);
        validCheck(check,event);
    })

    function isValid(name){
        return name.trim().length >=2;
    }

    function isPassword(password){
        return password.length >=6 && /.*[0-9].*/.test(password);
    }

    function isTextarea(textarea){
        return textarea.trim() !== "";
    }



    function validateNameField(name,event){
        if(!isValid(name)){
            $("#name-feedback").text("Please enter at least two character");
            event.preventDefault();
        }else{
            $("#name-feedback").text("");
        }
    }

    function ValidatePassword(password,event){
        if(!isPassword(password)){
            $("#passwod-feedback").text("Greater Shoud be 6 character");
            event.preventDefault();
        }else{
            $("#password-feedback").text("");
        }
    }

    function ValidTextarea(textarea,event){
        if(!isTextarea(textarea)){
            $("#text-feedback").text("Not Be Blank");
            event.preventDefault();
        }
        else{
            $("#text-feedback").text("");
        }
    }

   function validCheck(ischeck,event){
       if(!ischeck){
           $("#check-feedback").text("Please Agree to this");
           event.preventDefault();
       }else{
           $("#check-feedback").text("");
       }
   }

})