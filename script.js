const romanticTexts = [
    "Sayang, makasih yah untuk setahun ini.",
    "Adith bersyukur banget bisa punya sayang di hidup Adith.",
    "Setiap hari sama sayang tuh bikin hidup Adith lebih berwarna.",
    "Sayang tuh segalanya buat Adith, serius deh!",
    "Nggak kebayang kalau nggak ada sayang di hidup Adith.",
    "Adith janji bakal selalu sayang sama sayang, selamanya!",
    "Cinta Adith ke sayang tuh kayak WiFi, selalu nyambung!",
    "Makasih udah selalu ada buat Adith, sayang terbaik!",
    "Pokoknya, Adith tuh cinta banget sama sayang!",
    "Lovvv yuuu more than anything, sayang!"
];

function checkPassword() {
    const password = document.getElementById("password").value;
    if (password === "1") {
        document.getElementById("login-container").style.display = "none";
        document.getElementById("content").classList.remove("hidden");
        startRomanticTexts();
        document.getElementById("bg-music").play();
    } else {
        alert("Password salah! Coba lagi.");
    }
}

function startRomanticTexts() {
    let index = 0;
    const textBox = document.getElementById("text-box");

    function showText() {
        if (index < romanticTexts.length) {
            textBox.innerText = romanticTexts[index];
            textBox.style.opacity = "1";
            setTimeout(() => {
                textBox.style.opacity = "0";
                index++;
                setTimeout(showText, 500);
            }, 3000);
        } else {
            textBox.style.display = "none";
            showPhotos();
        }
    }
    
    showText();
}

function showPhotos() {
    const photoContainer = document.getElementById("photo-container");
    const photos = document.querySelectorAll(".photos img");
    
    photoContainer.style.opacity = "1";
    photos.forEach((img, index) => {
        setTimeout(() => {
            img.classList.add("show");
        }, index * 200);
    });
}