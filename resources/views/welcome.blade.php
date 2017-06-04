<!DOCTYPE html>
<html lang="{{ config('app.locale') }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravel</title>

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">

    <!-- Styles -->
    <style>

        body {
            margin: 0;
            padding: 0;
            height: 100%;
            background-color: #d8eeed;

        }

        #con {
            min-height: 100%;
            position: relative;
        }

        #content {
            height: 1000px; /* Changed this height */
            padding-bottom: 60px;
        }

        #footer {
            position: absolute;
            bottom: 0;
            width: 100%;
            height: 250px;
        }

        #bubbles1, #bubbles2, #fish, #fish2 {
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            position: fixed;
            z-index: -1;

        }

        #flor {
            height: 100%;
            bottom: 0;
        }

        #ground, #ground2 {
            position: absolute;
            width: 100%;
            height: 100%;
            bottom: 0;
            left: 0;
            z-index: -1;
        }

        #ground {
            background: url('ground.png') repeat-x;
            background-position: left bottom;
        }

        #ground2 {
            background: url('ground2.png') repeat-x;
            background-position: left bottom 45px;
            z-index: -25;
            opacity: 0.5;
        }

        #bubbles1 {
            background: url('bubbles-2x.png');
            background-position: 0 0;
        }

        #bubbles2 {
            background: url('bubbles-2x.png');
            background-position: 80px 157px;
        }

        #fish {
            background: url('fish.png');
            background-position: 0 0;
        }

        #fish2 {
            background: url('fish2.png');
            background-position: 0 0;

        }

        #sprite1 {
            position: absolute;
            bottom: 65px;
            left: 45px;
            z-index: -1;
            background: url('sprite.png') no-repeat -95px -16px;
            width: 94px;
            height: 89px;
        }

        #sprite2 {
            position: absolute;
            bottom: 55px;
            left: 75%;
            z-index: -1;
            background: url('sprite.png') no-repeat -384px -232px;
            width: 99px;
            height: 120px;
        }

        #sprite3 {
            position: absolute;
            bottom: 15px;
            left: 35%;
            z-index: -1;
            background: url('sprite.png') no-repeat -256px -2px;
            width: 240px;
            height: 125px
        }

        #sprite4 {
            position: absolute;
            bottom: 37px;
            left: 65%;
            z-index: -1;
            background: url('sprite.png') no-repeat -528px -295px;
            width: 84px;
            height: 79px;
        }

        #sprite5 {
            position: absolute;
            bottom: 47px;
            left: 27%;
            z-index: -1;
            background: url('sprite.png') no-repeat -490px -421px;
            width: 44px;
            height: 38px;
        }

        #sprite6 {
            position: absolute;
            bottom: 15px;
            left: 15%;
            z-index: -1;
            background: url('sprite.png') no-repeat -413px -401px;
            width: 54px;
            height: 40px;
        }

        #sprite8 {
            position: absolute;
            bottom: 10px;
            left: 18%;
            z-index: -2;
            background: url('reeds.png') no-repeat -122px 0;
            width: 44px;
            height: 384px;
        }

        #sprite7 {
            position: absolute;
            bottom: 10px;
            left: 19%;
            z-index: -2;
            background: url('reeds.png') no-repeat -332px -15px;
            width: 47px;
            height: 292px;
        }

        #sprite9 {
            position: absolute;
            bottom: 35px;
            left: 87%;
            z-index: -2;
            background: url('reeds.png') no-repeat -239px 0;
            width: 47px;
            height: 339px;
        }

        #sprite10 {
            position: absolute;
            bottom: 0px;
            left: 40%;
            z-index: -2;
            background: url('reeds.png') no-repeat -122px 0;
            width: 44px;
            height: 200px;
        }
    </style>
</head>
<body>
<div id="con">
    <div id="content">
        <div id="bubbles1"></div>
        <div id="bubbles2"></div>
        <div id="fish"></div>
        <div id="fish2"></div>

    </div>
    <div id="footer">
        <div id="ground"></div>
        <div id="ground2"></div>
        <div id="sprite1"></div>
        <div id="sprite2"></div>
        <div id="sprite3"></div>
        <div id="sprite4"></div>
        <div id="sprite5"></div>
        <div id="sprite6"></div>
        <div id="sprite7"></div>
        <div id="sprite8"></div>
        <div id="sprite9"></div>
        <div id="sprite10"></div>
    </div>
</div>


<script
        src="https://code.jquery.com/jquery-3.2.1.min.js"
        integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
        crossorigin="anonymous"></script>

<script>

    // Create cross browser requestAnimationFrame method:
    window.requestAnimationFrame = window.requestAnimationFrame
            || window.mozRequestAnimationFrame
            || window.webkitRequestAnimationFrame
            || window.msRequestAnimationFrame
            || function (f) {
                setTimeout(f, 1000 / 60)
            }

    var bubble1 = document.getElementById('bubbles1')
    var bubble2 = document.getElementById('bubbles2')

    function parallaxbubbles() {
        var scrolltop = window.pageYOffset // get number of pixels document has scrolled vertically
        bubble1.style.top = -scrolltop * .2 + 'px' // move bubble1 at 20% of scroll rate
        bubble2.style.top = -scrolltop * .5 + 'px' // move bubble2 at 50% of scroll rate
        bgscroll();
    }

    window.addEventListener('scroll', function () { // on page scroll
        requestAnimationFrame(parallaxbubbles) // call parallaxbubbles() on next available screen paint
    }, false)


    var scrollSpeed = 70;

    // set the default position
    var current = 0;
    var current2 = 0;
    // set the direction
    var direction = 'h';

    function bgscroll() {

        current -= 3;
        current2 += 1;

        console.log(current2);
        // 1 pixel row at a time
//        current -= 1;

        // move the background with backgrond-position css properties
        $('#fish').css("backgroundPosition", (direction == 'h') ? current + "px 0" : "0 " + current + "px");
        $('#fish2').css("backgroundPosition", (direction == 'h') ? current2 + "px 0" : "0 " + current2 + "px");
    }
</script>
</body>
</html>
