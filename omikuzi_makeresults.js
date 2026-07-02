function makeresults(r) {
    var ind = 4;
    var randNum = Math.floor(r * ind);

    var picturelists = [
        "omikuzi_daikichi.jpg",
        "omikuzi_chukichi.jpg",
        "omikuzi_kyo.jpg",
        "omikuzi_daikyo.jpg"
    ];

    var commentlists = [
        "大吉！おめでとう！",
        "中吉！いいことあるかも？",
        "凶...明日はいい日になるよ！",
        "大凶...ミクへの愛、足りて無くない？"
    ];

    var picture = document.createElement("img");
    picture.src = picturelists[randNum];
    picture.alt = commentlists[randNum];

    var pictureArea = document.getElementById("Picture");
    pictureArea.textContent = "";
    pictureArea.appendChild(picture);

    document.getElementById("Comment").textContent = commentlists[randNum];

    var params = new URLSearchParams(window.location.search);
    var myName = params.get("name") || "あなた";
    var shareUrl = new URL("index.html", window.location.href).href;

    document.getElementById("TweetButton").setAttribute(
        "data-text",
        "今日の" + myName + "さんの運勢は...\n" + commentlists[randNum] + "\n明日もよろしくね♪\n"
    );
    document.getElementById("TweetButton").setAttribute("data-url", shareUrl);
}
