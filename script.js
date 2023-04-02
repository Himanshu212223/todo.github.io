

function theme(){
    let stickyTheme = localStorage.getItem("stickyTheme") ;
    let Note = document.getElementById("Note") ;
    let NoteBook = document.getElementById("NoteBook") ;
    let todo = document.getElementById("todo") ;
    let NoteHead = document.getElementById("NoteHead") ;
    let themeBtn = document.getElementById("themeBtn") ;
    let remove = document.getElementById("remove") ;
    let addNotes = document.getElementById("addNotes") ;
    let add = document.getElementById("add") ;
    // console.log(stickyTheme) ;
    if(stickyTheme === null || stickyTheme == "Light"){
        base.classList.replace("bg-white", "bg-slate-900");
        base.classList.replace("text-gray", "text-gray-400");
        localStorage.setItem("stickyTheme","Dark") ;
        if(Note != null) {Note.classList.replace("bg-slate-50", "bg-gray-900"); }
        if(NoteBook!=null) {NoteBook.classList.replace("bg-slate-50", "bg-gray-900");}
        if(todo!=null ) {todo.classList.replace("text-sky-700", "text-rose-700"); }
        if(NoteHead!=null ) {NoteHead.classList.replace("text-sky-700", "text-rose-700"); }
        if(themeBtn!=null ) {themeBtn.classList.replace("bg-sky-700", "bg-rose-700"); }
        if(remove!=null ) {remove.classList.replace("bg-sky-700", "bg-rose-700"); }
        if(addNotes!=null ) {addNotes.classList.replace("text-sky-700", "text-rose-700"); }
        if(add!=null ) {add.classList.replace("bg-sky-700", "bg-rose-700"); }
        document.getElementById("themeBtn").innerText = "Light" ;
    }
    else{
        base.classList.replace("bg-slate-900", "bg-white");
        base.classList.replace("text-gray-400", "text-gray");
        localStorage.setItem("stickyTheme","Light") ;
        if(Note != null) {Note.classList.replace("bg-gray-900", "bg-slate-50"); }
        if(NoteBook != null) {NoteBook.classList.replace("bg-gray-900", "bg-slate-50"); }
        if(todo != null) {todo.classList.replace("text-rose-700", "text-sky-700"); }
        if(NoteHead != null) {NoteHead.classList.replace("text-rose-700", "text-sky-700"); }
        if(addNotes != null) {addNotes.classList.replace("text-rose-700", "text-sky-700"); }
        if(themeBtn!= null) {themeBtn.classList.replace("bg-rose-700", "bg-sky-700"); }
        if(remove != null) {remove.classList.replace("bg-rose-700", "bg-sky-700"); }
        if(add != null) {add.classList.replace("bg-rose-700", "bg-sky-700"); }
        document.getElementById("themeBtn").innerText = "Dark" ;
    }
}
let preLoad = ()=>{
    let stickyTheme = localStorage.getItem("stickyTheme") ;
    let Note = document.getElementById("Note") ;
    let NoteBook = document.getElementById("NoteBook") ;
    let todo = document.getElementById("todo") ;
    let NoteHead = document.getElementById("NoteHead") ;
    let themeBtn = document.getElementById("themeBtn") ;
    let remove = document.getElementById("remove") ;
    let addNotes = document.getElementById("addNotes") ;
    let add = document.getElementById("add") ;
    // console.log(stickyTheme) ;
    if(stickyTheme === null || stickyTheme == "Dark"){
        base.classList.replace("bg-white", "bg-slate-900");
        base.classList.replace("text-gray", "text-gray-400");
        document.getElementById("themeBtn").value = "Light" ;
        if(Note != null ) { Note.classList.replace("bg-slate-50", "bg-gray-900"); }
        if(NoteBook != null ) { NoteBook.classList.replace("bg-slate-50", "bg-gray-900"); }
        if(todo != null ) { todo.classList.replace("text-sky-700", "text-rose-700"); }
        if(NoteHead != null ) { NoteHead.classList.replace("text-sky-700", "text-rose-700"); }
        if(addNotes != null ) { addNotes.classList.replace("text-sky-700", "text-rose-700"); }
        if(themeBtn != null ) { themeBtn.classList.replace("bg-sky-700", "bg-rose-700"); }
        if(remove != null ) { remove.classList.replace("bg-sky-700", "bg-rose-700"); }
        if(add != null ) { add.classList.replace("bg-sky-700", "bg-rose-700"); }
        document.getElementById("themeBtn").innerText = "Light" ;
    }
    else{
        base.classList.replace("bg-slate-900", "bg-white");
        base.classList.replace("text-gray-400", "text-gray");
        document.getElementById("themeBtn").value = "Dark" ;
        if(Note != null) { Note.classList.replace("bg-gray-900", "bg-slate-50"); }
        if(NoteBook != null) { NoteBook.classList.replace("bg-gray-900", "bg-slate-50"); }
        if(todo != null) { todo.classList.replace("text-rose-700", "text-sky-700"); }
        if(NoteHead != null) { NoteHead.classList.replace("text-rose-700", "text-sky-700"); }
        if(addNotes != null) { addNotes.classList.replace("text-rose-700", "text-sky-700"); }
        if(themeBtn != null) { themeBtn.classList.replace("bg-rose-700", "bg-sky-700"); }
        if(remove != null) { remove.classList.replace("bg-rose-700", "bg-sky-700"); }
        if(add != null) { add.classList.replace("bg-rose-700", "bg-sky-700"); }
        document.getElementById("themeBtn").innerText = "Dark" ;
    }
    showContent();
};



function addNote(){
    let subject = document.getElementById("subject").value ;
    let content = document.getElementById("content").value ;
    if(subject === "" || content === ""){
        alert("Please Fill the Fields first.");
    }
    else{
        let myNotes = localStorage.getItem("myNotes") ;
        // console.log(myNotes) ;
        if(myNotes == null){
            let obj = {} ;
            obj[subject] = content ;
            let stringValue = JSON.stringify(obj) ;
            localStorage.setItem("myNotes", stringValue) ;
        }
        else{
            let obj = myNotes ;
            obj = JSON.parse(obj);
            obj[subject] = content ;
            let stringValue = JSON.stringify(obj) ;
            localStorage.setItem("myNotes", stringValue) ;
        }
    }
    document.getElementById("subject").value = "" ;
    document.getElementById("content").value = "" ;
    showContent() ;
}


function showContent(){
    let myNotes = localStorage.getItem("myNotes") ;
    let arr = JSON.parse(myNotes) ;
    if(arr != null){
        let target = document.getElementById("NoteBook") ;
        target.innerHTML = "" ;
        for(i in arr){
            // console.log(i) ;
            // console.log(arr[i]) ;
            let div = document.createElement("div");
            div.setAttribute("class", "flex flex-col justify-center item-center mx-8 my-4 py-4 shadow-lg shadow-gray-500/40 bg-transparent border border-gray-400")
            let string = `
            <h1 class="text-center text-xl text-sky-700">${i}</h1>
            <h1 class="text-center">${arr[i]}</h1>
            <Button class="cursor-pointer px-8 py-2 mt-2 mx-auto text-sm bg-sky-700 text-white w-4/5"
            type="button"">Remove</Button>
            ` ;
            div.innerHTML = string ;
            target.appendChild(div);
            eventProviding();
        }
    }
}

function eventProviding(){
    const buttons = document.getElementById("NoteBook").getElementsByTagName("button");
    for (let button of buttons) {
        button.addEventListener("click", removeNoteNumber);
      }
}

let removeNoteNumber = e =>{
    let elementToRemove = e.target.parentElement.firstElementChild.innerText ;
    let json = localStorage.getItem("myNotes") ;
    let obj = JSON.parse(json);
    console.log(obj[elementToRemove]) ;
    delete obj[elementToRemove] ;
    json = JSON.stringify(obj) ;
    localStorage.setItem("myNotes", json) ;
    showContent() ;
}



preLoad();