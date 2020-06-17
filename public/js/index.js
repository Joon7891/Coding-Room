window.onload = function(){
    sessionStorage['id'] = '';
    sessionStorage['name'] = '';
}

function join_meeting(){
    let name = $('#name').val();
    let id = $('#id').val();
    let password = $('#password').val();

    if (validate(id, password)){
        sessionStorage['id'] = id;
        sessionStorage['name'] = name;
        window.location.replace("room.html");
    }
    else {
        
    }
}

/*
    Need to add server authontization stuff.
*/
function validate(id, password){
    return true;
}