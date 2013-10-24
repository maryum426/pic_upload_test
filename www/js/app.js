
document.addEventListener("deviceready", init, false);

function init() {
   
    var parseAPPID = "x";
    var parseJSID = "x";
    
    //Initialize Parse
    Parse.initialize(parseAPPID,parseJSID);
        
    $("#takePicBtn").on("click", function(e) {
        e.preventDefault();
        console.log('test');
        navigator.camera.getPicture(gotPic, failHandler, {quality:50, destinationType:navigator.camera.DestinationType.DATA_URL, sourceType:navigator.camera.PictureSourceType.PHOTOLIBRARY});
        
       
    });
    
    function gotPic(data) {
        console.log('got here');
        var parseFile = new Parse.File("mypic.jpg", {base64:data});
            parseFile.save().then(function() {
                navigator.notification.alert("Got it!", null);
                console.log("Ok");
                console.log(arguments.toString());
            }, function(error) {
                console.log("Error");
                console.log(error);
            });
        
    }
    
    function failHandler(e) {
        alert("ErrorFromC");
        alert(e);
        console.log(e.toString());
    }
};