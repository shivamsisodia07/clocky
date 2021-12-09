
        const secondHand = document.querySelector(".second-hand");
        const minuteHand = document.querySelector(".min-hand");
        const hourHand = document.querySelector(".hour-hand");
        function setDate() {
            const now = new Date();
            const seconds = now.getSeconds();
            const secondsDeg = (seconds / 60) * 360 + 90;
            secondHand.style.transform = `rotate(${secondsDeg}deg`;


            const minute = now.getMinutes();
            const minuteDeg = (minute / 60) * 360 + 90;
            minuteHand.style.transform = `rotate(${minuteDeg}deg`;

            const hour = now.getHours();
            const HourDeg = (hour / 12) * 360 + 90;
            hourHand.style.transform = `rotate(${HourDeg}deg`;
            document.querySelector(".digi_clock").innerHTML = "<h1>" + hour + ":" + minute + ":" + seconds + "</h1>";
            // console.log(seconds, minute, hour);


        }
        setInterval(setDate, 1000);
        var n = document.querySelectorAll(".content").length;
        for (var i = 0; i < n; i++) {
            document.querySelectorAll(".content")[i].addEventListener("click", function () {
                var imgname = this.innerText;
                console.log(imgname);
                document.documentElement.style.background = '#018DED url(images/' + imgname + '.jpg)';

            });
        }

   