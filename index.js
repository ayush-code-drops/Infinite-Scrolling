let cont = document.getElementById('container');
let nums = 25
var i = 1;
function loadStudents() {
    console.log('calling load');
    while (i <= nums) {
        
        let h3 = document.createElement('h3')
        h3.innerText = `Masai Student ${i}`
    cont.appendChild(h3)
    i++
    }
}

loadStudents()

window.addEventListener('scroll', () => {
    console.log(window.innerHeight,window.scrollY,document.documentElement.scrollHeight)
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight-1) {
        
        nums += 25
    
        loadStudents()
    }
})