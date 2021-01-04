/*
When DOM has been safety loaded, navbar is created.
*/


$(document).ready(function(){
    // Add classes to parent nav element.
    $("#dynamicNav").addClass("navbar navbar-expand-lg navbar-expand-md");

     // CREATE & APPEND BRAND TO LEFT SIDE OF NAVBAR
    let brandLeft = document.createElement("a");
    $(brandLeft).addClass("navbar-brand mr-auto");
    let subjectName = document.createElement("h1");
    $(subjectName).html("Bruce Farmer");
    $(brandLeft).append(subjectName);
    $("#dynamicNav").append(brandLeft);
    


     // CREATE COLLAPSE BUTTON
     let parentButton = document.createElement("button");
     $(parentButton).addClass("navbar-toggler navbar-dark");
     $(parentButton).attr({
                          "type":"button",
                          "data-toggle":"collapse",
                          "data-target":"#buttonEnabledNav",
                          "aria-controls":"buttonEnabledNav",
                          "aria-expanded":"false",
                          "aria-label":"Toggle navigation",
                         });
       // -- icon for button
    let buttonIcon = document.createElement("span");
    $(buttonIcon).addClass("navbar-toggler-icon");

    $(parentButton).append(buttonIcon);

    //Attach collapse button to nav element
    $("#dynamicNav").append(parentButton);

    // ACTUAL NAVBAR GENERATED HERE

    var parentNav = document.createElement("div");
    $(parentNav).addClass("collapse navbar-collapse");
    $(parentNav).attr("id", "buttonEnabledNav");

        // unordered list with menu items.
    const menuList = document.createElement("ul");
    $(menuList).addClass("navbar-nav ml-auto");
    
    for(var i = 0; i < 3; i++){
      let current_li = document.createElement("li");
      $(current_li).addClass("nav-item");
      let current_link = document.createElement("a");
      $(current_link).addClass("nav-link");

      switch(i){
          case 0:
              $(current_link).attr("href", "contact.html");
              $(current_link).html("Contact");
              $(current_li).append(current_link);
              $(menuList).append(current_li);
          break;

          case 1:
            $(current_link).attr("href", "portfolio.html");
            $(current_link).html("Portfolio");
            $(current_li).append(current_link);
              $(menuList).append(current_li);
          break;

          case 2:
            $(current_link).attr("href", "index.html");
            $(current_link).html("About");
            $(current_li).append(current_link);
              $(menuList).append(current_li);
          break;

      }
}
// End menu-item loop

$(parentNav).append(menuList);
$("#dynamicNav").append(parentNav);

    

if( $("section").attr("id") === "contactPage" ){
  $("a").css("color", "black");
  $("#dynamicNav").css("border-bottom", "0.25px solid black" );
}

  
    

    




})


