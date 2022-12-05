class ImageServices {
  getAllImages() {
    return fetch(
      "https://api.unsplash.com/photos?client_id=UU2ejVhdg9rHAUuOQSXqM3LM03Y-Ud9ab49Izi2fzbg"
    );
  }
  getImageById(id) {
    return fetch(
      `https://api.unsplash.com/photos/${id}?client_id=UU2ejVhdg9rHAUuOQSXqM3LM03Y-Ud9ab49Izi2fzbg`
    );
  }
}

function toLocation() {
  // console.log(e.target.name);
  // let imdId = e.target.value
  // services.getImageById(id).then(res=>res.json()).then(data=>displayImageById(data));
  location.href = "#top";
}



var closefullviewBtn = document.querySelector("#id_close_fullview_img_btn");
var openfullviewBtn = document.querySelector("#id_open_fullview_img_btn");
var loadMoreBtn = document.querySelector("#load_more_btn");

function collapse() {
  let collapseContainer = document.querySelector("#id_collapse_container");
  collapseContainer.classList.toggle("collapse-close");
}

function closeFullView() {
  let fullviewContainer = document.querySelector("#id_img_fullview_container");
  fullviewContainer.classList.remove("fullview-open");
}

// open the full view of image

function openFullView() {
  let fullviewContainer = document.querySelector("#id_img_fullview_container");
  fullviewContainer.classList.add("fullview-open");
}
var services = new ImageServices();
// load more pictures

function loadMore(){
    services
  .getAllImages()
  .then((res) => res.json())
  .then((data) => displayPins(data));
}




// display all posts

var displayContainer = document.querySelector("#id_display_container");


services
  .getAllImages()
  .then((res) => res.json())
  .then((data) => displayPins(data));
function displayPins(data) {
  data.forEach((img) => {
    const sizeArr = ["card-small", "card-medium", "card-large"];
    let randomSize = Math.floor(Math.random() * sizeArr.length);
    displayContainer.innerHTML += `
    <div class="card ${sizeArr[randomSize]}">
         <img src="${img.urls.raw}" alt=""  onclick="displayDetail(event)" name="${img.id}" >
          <div class="content">  
              <div class="top">
                  <p class="list-item">my saves</p>
                  <button class="btn ">save</button>
              </div>
              <div class="bottom">
                  <i class="fa-solid fa-arrow-up-from-bracket round-small"></i>
                  <i class="fa-solid fa-ellipsis padding round-small"></i>
              </div>
          </div>
    </div>
   `;
  });
}


// display post detail


var postdetailContainer = document.querySelector("#id_all_display_container");
function displayDetail(e) {
    let id = e.target.name;
    services
  .getImageById(id)
  .then((res) => res.json())
  .then((data) => displayImageById(data));

}

function displayImageById(data) {
  postdetailContainer.innerHTML = `
  <div class="container box-shadow padding-for-container fullview-img-container fullview-close" id="id_img_fullview_container">
  <a href="//" class="link ms-auto" id="id_close_fullview_img_btn" onclick="closeFullView()"><i class="fa-solid fa-xmark"></i></a>
  <div class="img-container">
      <img class='img' src="${data.urls.raw}" alt="">

  </div>
</div>
<div class="container container-for-post-detail box-shadow" >
<div>
<div class="img-container">
    <p class="link explore-btn-for-img mx-0" id="id_open_fullview_img_btn" onclick="openFullView()">
        <i class="fa-solid fa-expand"></i>
    </p>
    <img class="img" src="${data.urls.raw}" alt="">
</div>
</div>
<div class="content-section">
<div class="d-flex justify-space-between">
    <ul class="list p-0">
        <li class="list-item">
            <a href="" class="link">
                <i class="fa-solid fa-ellipsis"></i>
            </a>
        </li>
        <li class="list-item">
            <a href="" class="link">
                <i class="fa-solid fa-arrow-up-from-bracket"></i>
            </a>
        </li>
        <li class="list-item">
            <a href="" class="link">
                <i class="fa-solid fa-link"></i>
            </a>
        </li>
    </ul>
    <div class="d-flex">
        <p class="list-item">my saves</p>
        <button class="btn btn-red">save</button>
    </div>
</div> 
<p class="text  mx-0">uploaded by ${data.user.username}</p>
<small class="date small-text">${data.created_at}</small>
<div class="d-flex mt-2 justify-space-between">
    <div class="d-flex">
        <div class="img-container-for-profile round border">
            <img src="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" class="img">
        </div>
        <div class="ms-1">
            <p class="username mx-0 small-text text">
            ${data.user.username}
            </p>
            <small class="mx-0 small-text">658 followers</small>
        </div>
    </div>
    <button class="btn btn-gray">follow</button>
</div>
<div class="comment-container mt-3">
    <a href="//" id="collapseBtn" class="link" onclick="collapse()"><span>5</span> comments<i class="fa-solid fa-caret-down"></i></a>
    <div class="container  padding-for-container mt-2" id="id_collapse_container">
        <div>
            <div class="comment-item d-flex mt-1">
                <div class="d-flex">
                    <div class="img-container-for-profile-in-comment-item round border">
                        <img src="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" class="img">
                    </div>
                    <div class="ms-1">
                        <p class="username mx-0 fs-for-names-in-comments">
                        username
                        </p>
                        <div class="d-flex">
                            <p class="date p-0 mx-0 small-text-for-links-in-comment">6mon</p>
                            <a href="" class="small-text-for-links-in-comment">replay</a>
                            <a href="" class="small-text-for-links-in-comment"><i class="fa-solid fa-heart"></i> 5</a>
                        </div>
                    </div>
                </div>
            </div>
            <div id="id_replay_container">
                <div class="d-flex comment-item mt-1 ms-3">
                    <div class="img-container-for-profile-in-comment-item round border">
                        <img src="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" class="img">
                    </div>
                <div class="ms-1">
                    <p class="username mx-0 fs-for-names-in-comments">
                    username
                    </p>
                    <div class="d-flex">
                        <p class="date p-0 mx-0 small-text-for-links-in-comment">6mon</p>
                        <a href="" class="small-text-for-links-in-comment">replay</a>
                        <a href="" class="small-text-for-links-in-comment"><i class="fa-solid fa-heart"></i> 5</a>
                    </div>
                </div>
            </div>
            </div>

        </div>
        <div class="comment-item d-flex mt-1">
            <div class="d-flex">
                <div class="img-container-for-profile-in-comment-item round border">
                    <img src="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" class="img">
                </div>
                <div class="ms-1">
                    <p class="username mx-0 fs-for-names-in-comments">
                    username
                    </p>
                    <div class="d-flex">
                        <p class="date p-0 mx-0 small-text-for-links-in-comment">6mon</p>
                        <a href="" class="small-text-for-links-in-comment">replay</a>
                        <a href="" class="small-text-for-links-in-comment"><i class="fa-solid fa-heart"></i> 5</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="comment-item d-flex mt-1">
            <div class="d-flex">
                <div class="img-container-for-profile-in-comment-item round border">
                    <img src="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" class="img">
                </div>
                <div class="ms-1">
                    <p class="username mx-0 fs-for-names-in-comments">
                    username
                    </p>
                    <div class="d-flex">
                        <p class="date p-0 mx-0 small-text-for-links-in-comment">6mon</p>
                        <a href="" class="small-text-for-links-in-comment">replay</a>
                        <a href="" class="small-text-for-links-in-comment"><i class="fa-solid fa-heart"></i> 5</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="comment-item d-flex mt-1">
            <div class="d-flex">
                <div class="img-container-for-profile-in-comment-item round border">
                    <img src="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" class="img">
                </div>
                <div class="ms-1">
                    <p class="username mx-0 fs-for-names-in-comments">
                    username
                    </p>
                    <div class="d-flex">
                        <p class="date p-0 mx-0 small-text-for-links-in-comment">6mon</p>
                        <a href="" class="small-text-for-links-in-comment">replay</a>
                        <a href="" class="small-text-for-links-in-comment"><i class="fa-solid fa-heart"></i> 5</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="comment-item d-flex mt-1">
            <div class="d-flex">
                <div class="img-container-for-profile-in-comment-item round border">
                    <img src="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" class="img">
                </div>
                <div class="ms-1">
                    <p class="username mx-0 fs-for-names-in-comments">
                    username
                    </p>
                    <div class="d-flex">
                        <p class="date p-0 mx-0 small-text-for-links-in-comment">6mon</p>
                        <a href="" class="small-text-for-links-in-comment">replay</a>
                        <a href="" class="small-text-for-links-in-comment"><i class="fa-solid fa-heart"></i> 5</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <button class="btn-gray">see more</button>
</div>
<div class="d-flex mt-3 gap-10">
    <div class="img-container-for-profile-small round">
        <img class="img" src="https://images.pexels.com/photos/13790634/pexels-photo-13790634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="">
    </div>
    <div class="comment-box">
        <input class="input" type="text" placeholder="add a comment">
        
        <p class="link-gray mx-0">
            <a class="link" href=""><i class="fa-solid fa-arrow-right"></i></a>
        </p>
    </div>
    
</div>
</div>
</div>
<div class="container mt-2">
  <p class="text t-center mx-0">more like this</p>
  <div class="container padding-for-container grid" id="id_display_similar_img_container">
     
  </div>
</div>
`;

services.getAllImages().then(res=>res.json()).then(data=>displaySimilarPins(data))
}



function displaySimilarPins(data) {
    let moreImgsContainer = document.querySelector('#id_display_similar_img_container');
    data.forEach((img) => {
      const sizeArr = ["card-small", "card-medium", "card-large"];
      let randomSize = Math.floor(Math.random() * sizeArr.length);
      moreImgsContainer.innerHTML += `
      <div class="card ${sizeArr[randomSize]}">
           <img src="${img.urls.raw}" alt=""  onclick="displayDetail(event)" name="${img.id}" >
            <div class="content">  
                <div class="top">
                    <p class="list-item">my saves</p>
                    <button class="btn">save</button>
                </div>
                <div class="bottom">
                    <i class="fa-solid fa-arrow-up-from-bracket round-small"></i>
                    <i class="fa-solid fa-ellipsis padding round-small"></i>
                </div>
            </div>
      </div>
     `;
    });
  }