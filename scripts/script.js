var app = function(){
  console.log("javascript loaded");
  var data = {
    "idea":[
      {
        "text": "This is idea1",
        "status": "playing"
      },
      {
        "text": "This is idea2",
        "status": "not-playing"
      }
    ],
    "progress":[
      {
        "text": "This is progress1",
        "status": "playing"
      },
      {
        "text": "This is progress2",
        "status": "not-playing"
      }
    ],
    "review":[
      {
        "text": "This is review1",
        "status": "playing"
      },
      {
        "text": "This is review",
        "status": "not-playing"
      }
    ],
    "approved":[
      {
        "text": "This is appreoved1",
        "status": "playing"
      },
      {
        "text": "This is appreoved2",
        "status": "not-playing"
      }
    ]
  }

  for(let i= 0;i<data.idea.length;i++){
    var myvar = '<li class='+data.idea[i].status+'>'+
    '              <div class="">'+
    '                <img src="./images/smile.png" alt="">'+
    '              </div>'+
    '              <div class="text">'+
                    data.idea[i].text+
    '              </div>'+
    '              <div class="">'+
    '                <a href="#">'+
    '                  <i class="fa fa-play" aria-hidden="true"></i>'+
    '                </a>'+
    '              </div>'+
    '            </li>';
    $("#idea").append(myvar);
  }



  for(let i= 0;i<data.progress.length;i++){
    var myvar = '<li class='+data.progress[i].status+'>'+
    '              <div class="">'+
    '                <img src="./images/smile.png" alt="">'+
    '              </div>'+
    '              <div class="text">'+
                    data.progress[i].text+
    '              </div>'+
    '              <div class="">'+
    '                <a href="#">'+
    '                  <i class="fa fa-play" aria-hidden="true"></i>'+
    '                </a>'+
    '              </div>'+
    '            </li>';
    $("#progress").append(myvar);
  }

  for(let i= 0;i<data.review.length;i++){
    var myvar = '<li class='+data.review[i].status+'>'+
    '              <div class="">'+
    '                <img src="./images/smile.png" alt="">'+
    '              </div>'+
    '              <div class="text">'+
                    data.review[i].text+
    '              </div>'+
    '              <div class="">'+
    '                <a href="#">'+
    '                  <i class="fa fa-play" aria-hidden="true"></i>'+
    '                </a>'+
    '              </div>'+
    '            </li>';
    $("#review").append(myvar);
  }

  for(let i= 0;i<data.approved.length;i++){
    var myvar = '<li class='+data.approved[i].status+'>'+
    '              <div class="">'+
    '                <img src="./images/smile.png" alt="">'+
    '              </div>'+
    '              <div class="text">'+
                    data.approved[i].text+
    '              </div>'+
    '              <div class="">'+
    '                <a href="#">'+
    '                  <i class="fa fa-play" aria-hidden="true"></i>'+
    '                </a>'+
    '              </div>'+
    '            </li>';
    $("#approved").append(myvar);
  }

}

$(document).ready(app)
