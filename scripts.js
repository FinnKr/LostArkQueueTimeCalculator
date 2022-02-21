let start_input = document.getElementById("start");
let end_input = document.getElementById("end");
let eta_output = document.getElementById("eta");
let eta = 0;

let start_time = new Date();

function displayEta() {
    let minutes = Math.floor(eta/60);
    let seconds = eta
    if (minutes > 0) {
        eta_output.innerText = minutes + " minutes & " + seconds + " seconds";
    } else {
        eta_output.innerText = seconds + " seconds";
    }
}

start_input.addEventListener("keydown", () => {
    start_time = new Date();
});

end_input.addEventListener("keyup", () => {
    start = parseInt(start_input.value);
    end = parseInt(end_input.value);

    if (start && end && start > 0 && end > 0 && end < start) {
        let count_diff = start - end;
        let time_diff = (new Date() - start_time);
        let time_per_step = time_diff/count_diff;
        eta = Math.floor((time_per_step * end)/1000);

        displayEta();
    }    
});

window.setInterval(() => {
    if (eta > 0) {
        eta -= 1;
        displayEta();
    }
}, 1000);

