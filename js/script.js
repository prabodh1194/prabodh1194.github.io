$(document).ready(function() {
    var history = new Josh.History({ key: 'josh.folio'});
    var shell = Josh.Shell({history: history});
    var promptCounter = 0;
    shell.onNewPrompt(function(callback) {
        promptCounter++;
        callback("$");
    });

    shell.setCommandHandler("about", {
        exec: function(cmd, args, callback) {
            var arg = args[0] || "sir";
            var dob='19940811';
            var year=Number(dob.substr(0,4));
            var month=Number(dob.substr(4,2))-1;
            var day=Number(dob.substr(6,2));
            var today=new Date();
            var age=today.getFullYear()-year;
            if(today.getMonth()<month || (today.getMonth()==month && today.getDate()<day))
        age--;
    var response = "I am Prabodh Agarwal. A "+age+" year old male from India.<br> I am an undergraduate student at Birla Institute of Technology and Science, Pilani (BITS Pilani) pursuing a dual degree in Master of Sciences (Hons) Biological Science and Bachelor of Engineering (Hons) Computer Science. BITS Pilani is a premiere Indian engineering institue.";
    callback(response);
        }
    });
    shell.setCommandHandler("hello", {
        exec: function(cmd, args, callback) {
            var arg = args[0] || "sir";
            var response = "Hello, " + arg + ". I am Prabodh Agarwal.";
            callback(response);
        },
        completion: function(cmd, arg, line, callback) {
            callback(shell.bestMatch(arg, ['pbd', 'Prabodh']))
        }
    });
    shell.setCommandHandler("resume", {
        exec: function(cmd, args, callback) {
            var steps = "<ul><li>about</li><li>education</li><li>experience</li><li>projects</li></ul>";
            var resume = "<a href='http://s.bl-1.com/h/3s1F3Nk?url=https://drive.google.com/open?id=0B5J8YxsAWh9QNGYzdDJDMmlQazA' target=_blank>Click here for resume</a> or simply follow a sequence of steps"+steps;
            callback(resume);
        }
    });
    shell.activate();
});
