var gameObject = {
    wins: 0,
    losses: 0,
    target: 0,
    score: 0,
    blueValue: 0,
    redValue: 0,
    whiteValue: 0,
    orangeValue: 0,
    initialize: function () {
        this.randomizeValues();
        this.score = 0;
        $("#score").text(this.score);
        $("#target").text(this.target);
    },
    randomizeValues: function () {
        this.target = this.randomNum(30, 100);
        this.blueValue = this.randomNum(1, 11);
        this.redValue = this.randomNum(1, 11);
        this.whiteValue = this.randomNum(1, 11);
        this.orangeValue = this.randomNum(1, 11);
    },
    randomNum: function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    },
    checkScore: function() {
        if (gameObject.score === gameObject.target) {
            this.wins++;
            $("#wins").text(this.wins);
            $("#won").text("You Win!");
            $(".wins-losses").css("background-color", "green");
            this.initialize();
        } else if (gameObject.score > gameObject.target) {
            this.losses++;
            $("#losses").text(this.losses);
            $("#won").text("You Lose!");
            $(".wins-losses").css("background-color", "red");
            this.initialize();
        }
    }
}

window.onload = function () {

    gameObject.initialize();

    $("#blue-crystal").click(function () {
        gameObject.score += gameObject.blueValue;
        $("#score").text(gameObject.score);
        gameObject.checkScore();
    });
    $("#red-crystal").click(function () {
        gameObject.score += gameObject.redValue;
        $("#score").text(gameObject.score);
        gameObject.checkScore();
    });
    $("#white-crystal").click(function () {
        gameObject.score += gameObject.whiteValue;
        $("#score").text(gameObject.score);
        gameObject.checkScore();
    });
    $("#orange-crystal").click(function () {
        gameObject.score += gameObject.orangeValue;
        $("#score").text(gameObject.score);
        gameObject.checkScore();
    });

    
}

