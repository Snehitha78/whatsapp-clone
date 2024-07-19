let menuBar;
let fixedMenu;
let statusBar;
let chartBar;
let active;
let callBar;
let chatCallStatus;

window.onload = function(){

     setTimeout(() => {
       document.querySelector('body').style.opacity = '100';
     }, 500);
    
     menuBar = document.querySelector('.menu-bar');
     fixedMenu = menuBar.offsetTop;
     statusBar = document.querySelector('.status-container');
     chartBar = document.querySelector('.chat-container');
     active = document.getElementsByClassName('menu-bar__list-item');
     callBar = document.querySelector('.call-container');
     chatCallStatus = document.querySelector('.chat-status-call');
     statusBar.remove();
     callBar.remove();
     changeTab(1);
    
    
window.onscroll = function(){
  
    if (window.pageXOffset >= fixedMenu) {
        menuBar.classList.add("fixed-menu")
      } else {
        menuBar.classList.remove("fixed-menu");
      }
}
}

function changeTab(index){

    for(var i=0; i < 3 ; i++)
      active[i].classList.remove('active-select-menu');  
      active[index-1].classList.add('active-select-menu');
     if(index == 1){
        statusBar.remove();
        callBar.remove()
        $(chatCallStatus).append(chartBar);
      
     }
    else if(index == 2 ){
      chartBar.remove();
      callBar.remove();
      $(chatCallStatus).append(statusBar);
    
    }

    else if(index == 3 ){
      chartBar.remove();
      statusBar.remove();
      $(chatCallStatus).append(callBar);
    }

}
function searchContacts() {
  var input, filter, chatList, personNames, name, i, txtValue;
  input = document.getElementById("searchInput");
  filter = input.value.toUpperCase();
  chatList = document.getElementsByClassName("chat-list");

  for (i = 0; i < chatList.length; i++) {
      personNames = chatList[i].getElementsByClassName("persion-name-heading")[0];
      txtValue = personNames.textContent || personNames.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
          chatList[i].style.display = "";
      } else {
          chatList[i].style.display = "none";
      }
  }
}
document.getElementById("menuIcon").addEventListener("click", function() {
  var dropdownMenu = document.getElementById("menuDropdown");
  if (dropdownMenu.style.display === "block") {
    dropdownMenu.style.display = "none";
  } else {
    dropdownMenu.style.display = "block";
  }
});


window.onclick = function(event) {
  if (!event.target.matches('#menuIcon')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.style.display === "block") {
        openDropdown.style.display = "none";
      }
    }
  }
}

const chat=[
  {
    Name: 'Me',
    img: 'anime.jpg',
    Msg: 'How to make Whatsapp Clone',
    Time: '12:00 pm'
  },
  {
    Name: 'Tarun',
    img: 'sarayuu.jpg',
    Msg: 'Answer my phone!',
    Time: '11:30 am'
  },
  {
    Name: 'Kusumaaa',
    img: 'anime.jpg',
    Msg: 'Have you finished doing web ppt',
    Time: '11:00 am'
  },
  {
    Name: 'Dimple',
    img: 'girl.jpg',
    Msg: 'Assignment done?',
    Time: '11:01 am'
  },
  {
    Name: 'Section-P',
    img: 'srmap.jpg',
    Msg: 'santhosh: No web class today',
    Time: '9:00 am'
  },
  {
    Name: 'Chaitanyaa',
    img: 'prabhas.jpg',
    Msg: 'Wt are you doing?',
    Time: 'yesterday'
  },
  {
    Name: 'Sarayuu',
    img: 'sarayuu.jpg',
    Msg: 'Have you finished doing web work?',
    Time: 'yesterday'
  },
  {
    Name: 'Sujitha',
    img: 'cat.jpg',
    Msg: 'Is cls there?',
    Time: 'Friday'
  },
  {
    Name: 'Srm(2024-2026)',
    img: 'srmap.jpg',
    Msg: 'All are requested to join this grp immediately',
    Time: 'Friday'
  },
]
const categories = [...new Set(chat.map((item)=> {return item}))]
document.getElementById('searchInput').addEventListener('keyup', (e)=>{
  const searchData = e.target.value.toLowerCase();
  const filterData = categories.filter((item)=>{
    return(
      item.title.toLocateLowerCase().includes(searchData)
    )
  })
  displayItem(filterData)
});
const displayItem = (items)=> {
  document.getElementById('root').innerHTML=items.map((item)=>{
    var {Name, img, Msg, Time} = item;
    return(
      `<div class="chat-list">
      <div class="person-profile">
        <img src="${img}" class="profile-img"/>
        <div class="person-name">
          <h1 class="persion-name-heading">${Name}</h1>
          <p class="person-chat">${Msg}</p>
        </div>
      </div>
      <p class="last-chat-time">${Time}</p>
    </div>`
    )
  }).join('')
};
displayItem(categories);