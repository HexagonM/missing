
function main() {
        var date0 = new Date("Tue Mar 12 2024 14:15:00 GMT+0800");
        var imgDays = [];
        for(var i = 0; i < 5; i++){
                imgDays.push(document.getElementById("imgDays" + i));
        }
        var imgHours = [];
        for(var i = 0; i < 2; i++){
                imgHours.push(document.getElementById("imgHours" + i));
        }
        var imgMinutes = [];
        for(var i = 0; i < 2; i++){
                imgMinutes.push(document.getElementById("imgMinutes" + i));
        }
        var imgSeconds = [];
        for(var i = 0; i < 2; i++){
                imgSeconds.push(document.getElementById("imgSeconds" + i));
        }
        var intervalId = setInterval(function() {
                var dateNow = new Date();
                var timeDiff = dateNow.getTime() - date0.getTime();

                var milliseconds = timeDiff % 1000;
                var secondsCount = Math.floor(timeDiff / 1000);
                var seconds = secondsCount % 60;
                var minutesCount = Math.floor(secondsCount / 60);
                var minutes = minutesCount % 60;
                var hoursCount = Math.floor(minutesCount / 60);
                var hours = hoursCount % 24;
                var days = Math.floor(hoursCount / 24);

                var daysStr = days.toString();
                for(var i = 0; i < 5; i++){
                        if(i >= daysStr.length){
                                imgDays[i].style.display = 'none';
                        }else{
                                imgDays[i].src = "./word_" + daysStr.charAt(i) + ".png";
                                imgDays[i].style.display = 'inline';
                        }
                }

                var hoursStr = hours.toString();
                for(var i = 0; i < 2; i++){
                        if(i >= hoursStr.length){
                                imgHours[i].style.display = 'none';
                        }else{
                                imgHours[i].src = "./word_" + hoursStr.charAt(i) + ".png";
                                imgHours[i].style.display = 'inline';
                        }
                }
                var minutesStr = minutes.toString();
                for(var i = 0; i < 2; i++){
                        if(i >= minutesStr.length){
                                imgMinutes[i].style.display = 'none';
                        }else{
                                imgMinutes[i].src = "./word_" + minutesStr.charAt(i) + ".png";
                                imgMinutes[i].style.display = 'inline';
                        }
                }
                var secondsStr = seconds.toString();
                for(var i = 0; i < 2; i++){
                        if(i >= secondsStr.length){
                                imgSeconds[i].style.display = 'none';
                        }else{
                                imgSeconds[i].src = "./word_" + secondsStr.charAt(i) + ".png";
                                imgSeconds[i].style.display = 'inline';
                        }
                }
        }, 100);
}

main();
