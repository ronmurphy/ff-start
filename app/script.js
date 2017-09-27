$(document).ready(function () {
  var TitleLinks = "";
  var Part1 = "";
  var Part2 = "";
  var Part3 = "";
  var Part4 = "";
  var Part5 = "";
  var Part6 = "";
  $(".img-1").css("background-image", "url('" + data.IMGPart1 + "')");
  $(".img-2").css("background-image", "url('" + data.IMGPart2 + "')");
  $(".img-3").css("background-image", "url('" + data.IMGPart3 + "')");
  $(".img-4").css("background-image", "url('" + data.IMGPart4 + "')");
  $(".img-5").css("background-image", "url('" + data.IMGPart5 + "')");
  $(".img-6").css("background-image", "url('" + data.IMGPart6 + "')");
  if (data.ShowTitle == true) {
    for (i = 0; i < data.TitleLinks.length; i++) {
      TitleLinks += "<a href='http://" + data.TitleLinks[i].site + "'><img src='http://www.google.com/s2/favicons?domain=" + data.TitleLinks[i].site + "'/></a>";
      $(".title").html(TitleLinks);
    }
  }

  if (data.ShowPart1 == true) {
    for (i = 0; i < data.part1.length; i++){
      Part1 += "<a href='http://" + data.part1[i].site +  "'><img src='http://www.google.com/s2/favicons?domain=" + data.part1[i].site + "'/> "+ data.part1[i].name + "</a>";
      $(".links-all-1").html(Part1);
    }
  } else {

  }
  if (data.ShowPart2 == true) {
    for (i = 0; i < data.part2.length; i++){
      Part2 += "<a href='http://" + data.part2[i].site +  "'><img src='http://www.google.com/s2/favicons?domain=" + data.part2[i].site + "'/> "+ data.part2[i].name + "</a>";
      $(".links-all-2").html(Part2);
    }
  } else {

  }
  if (data.ShowPart3 == true) {
    for (i = 0; i < data.part3.length; i++){
       Part3 += "<a href='http://" + data.part3[i].site +  "'><img src='http://www.google.com/s2/favicons?domain=" + data.part3[i].site + "'/> "+ data.part3[i].name + "</a>";
      $(".links-all-3").html(Part3);
    }
  } else {

  }
  if (data.ShowPart4 == true) {
    for (i = 0; i < data.part4.length; i++){
       Part4 += "<a href='http://" + data.part4[i].site +  "'><img src='http://www.google.com/s2/favicons?domain=" + data.part4[i].site + "'/> "+ data.part4[i].name + "</a>";
      $(".links-all-4").html(Part4);
    }
  } else {

  }
  if (data.ShowPart5 == true) {
    for (i = 0; i < data.part5.length; i++){
      Part5 += "<a href='http://" + data.part5[i].site +  "'><img src='http://www.google.com/s2/favicons?domain=" + data.part5[i].site + "'/> "+ data.part5[i].name + "</a>";
      $(".links-all-5").html(Part5);
    }
  } else {

  }
  if (data.ShowPart6 == true) {
    for (i = 0; i < data.part6.length; i++){
       Part6 += "<a href='http://" + data.part6[i].site +  "'><img src='http://www.google.com/s2/favicons?domain=" + data.part6[i].site + "'/> "+ data.part6[i].name + "</a>";
      $(".links-all-6").html(Part6);
    }
  } else {
    
  }

});
