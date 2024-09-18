const endDate = "13 August 2024 10:30 AM"


document.getElementById("end-date").innerText = endDate;
const input = document.querySelectorAll("input")

function clock(){
    const end = new Date(endDate);
    const now = new Date();
    const diff = (end - now) / 1000;
    console.log(diff)

    if (diff < 0) return;


    //contert into days
    input[0].value = Math.floor(diff / 3600 / 24);
    input[1].value = Math.floor(diff / 3600) % 24;
    input[2].value = Math.floor(diff / 60 ) % 60;
    input[3].value = Math.floor(diff) % 60 ;
    




    // console.log(end)
    // console.log(now)
}

clock()

setInterval(
    () => {
        clock()
    },
    1000
)

