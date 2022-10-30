
function showLoader(){
    const loaderdiv = document.createElement("div")
    loaderdiv.classList.add("loader")
    loaderdiv.innerHTML =`
    <div class="vh-100 d-flex justify-content-center align-items-center fixed-top">
    <div class="spinner-grow text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>
    </div>
    `
    document.body.append(loaderdiv)
};

function removeLoader() {
    document.querySelector(".loader").remove()
}

function showprogress(){
    const progress = document.createElement("div");
    progress.classList.add("progress");
    progress.innerHTML = `
        <div class="progress">
        <div class="progress-bar" role="progressbar" aria-label="Example with label" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
        </div>`
        document.body.append(progress)
};

function removeProgress() {
    document.querySelector(".progress").remove()
}