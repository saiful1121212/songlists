//Object constructor
function Songs(firstName,lastName,musicTitle,publishedYear){
  this.firstName = firstName;
  this.lastName = lastName;
  this.musicTitle = musicTitle;
  this.publishedYear = publishedYear;
  this.fullName = function(){
    return `${this.firstName} ${this.lastName}`
  }
}

//UI constructors
function UI(){}

//Fileds clear after submission form
UI.prototype.clearfields = function(){
  document.getElementById("first_name").value = "";
  document.getElementById("Last_Name").value = "";
  document.getElementById("musc_title").value = "";
  document.getElementById("year_publsihed").value = ""
}


UI.prototype.addSongLists = function(songs){
const bodyArea = document.getElementById('body_area');
let tr = document.createElement("tr");
tr.className = "bg-white border-b border-gray-200 text-sm";
tr.innerHTML = `   
<td class="px-2 py-1.5">${songs.musicTitle}</td>
<td class="px-2 py-1.5">${songs.firstName} ${songs.lastName}</td>
<td class="px-2 py-1.5">${songs.publishedYear}</td>`
bodyArea.appendChild(tr);
console.log(tr);

}

//Add Event listner
document.getElementById('input-fields').addEventListener("submit", function(e){
 //Get from value
  const firstName = document.getElementById("first_name").value,
        lastName = document.getElementById("Last_Name").value,
        musicTitle = document.getElementById("musc_title").value,
        publishedYear = document.getElementById("year_publsihed").value;

  const songs = new Songs(firstName,lastName,musicTitle,publishedYear);
  const ui = new UI();
  ui.addSongLists(songs);
  ui.clearfields();
  e.preventDefault();
});
