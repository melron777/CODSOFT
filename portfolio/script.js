const menu = document.querySelector("#menu")
const nav = document.querySelector(".links")

menu.onclick = () => {
    menu.classlist.toggle('bx-x');
    nav.classlist.toggle('active');
    
}

function downloadResume() {
    const link = document.createElement('a');
    link.href = 'Hancy-resume.pdf';
    link.download = 'Hancy-melron-resume.pdf';
    link.click();
}
