colors = ["#7396D1", "#D3D4D7", "#505F99", "#FFBD25", "#7396D1", "#C33949"];
roles = [dictionary.my_name, dictionary.a_developer, dictionary.a_software_engineer, dictionary.my_name];

function runTypedAnimation(obj) {
    if(obj.isRunning === undefined || obj.isRunning === false){
        obj.isRunning = true;

        if($("#role").length) {
            $("#role").typed({
                strings: roles,
                typeSpeed: 50,
                callback: () => obj.isRunning = false
            });
        }
    }
    
}
