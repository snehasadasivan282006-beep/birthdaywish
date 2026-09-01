/* =========================================
   GET ELEMENTS
========================================= */

const goButton =
    document.getElementById("goButton");

const welcomeScreen =
    document.getElementById("welcomeScreen");

const videoScreen =
    document.getElementById("videoScreen");

const birthdayVideo =
    document.getElementById("birthdayVideo");


/* =========================================
   GO BUTTON
========================================= */

goButton.addEventListener("click", function () {

    /*
       The user's tap counts as interaction,
       so the browser is more likely to allow
       the video to start.
    */

    birthdayVideo.currentTime = 0;

    const playPromise =
        birthdayVideo.play();


    if (playPromise !== undefined) {

        playPromise.catch(() => {

            /*
               Some mobile browsers may still
               require the user to press Play.
            */

            console.log(
                "Video playback requires manual play."
            );

        });

    }


    /*
       Start Screen 1 exit animation
    */

    welcomeScreen.classList.add("hide");


    /*
       Slight delay makes the transition
       feel cinematic.
    */

    setTimeout(function () {

        videoScreen.classList.add("show");

    }, 350);

});


/* =========================================
   VIDEO ENDED
========================================= */

birthdayVideo.addEventListener(
    "ended",
    function () {

        /*
           Keep the final frame visible.
           Nothing happens automatically,
           so the birthday message remains.
        */

        birthdayVideo.pause();

    }
);


/* =========================================
   PREVENT DOUBLE TAP ZOOM
========================================= */

let lastTouchEnd = 0;

document.addEventListener(
    "touchend",
    function (event) {

        const now =
            new Date().getTime();

        if (now - lastTouchEnd <= 300) {

            event.preventDefault();

        }

        lastTouchEnd = now;

    },
    false
);