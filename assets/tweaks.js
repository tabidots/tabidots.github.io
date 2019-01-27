// Recognize @ as an operator in Python blocks
// And also don't mark ± as an erorr in timeit blocks

const notErrors = ["@", "±", "µ"]

document.querySelectorAll(".highlight .err").forEach(function(span){
  if (notErrors.indexOf(span.innerHTML) > -1) {
    span.classList.remove("err");
    span.classList.add("o");
  }
});

// restore borders to HTML tables

document.querySelectorAll("table").forEach(function(table){
  table.classList = "table table-condensed table-bordered";
});

// make all HTML videos autoplay and loop (without editing the Liquid Video plugin)

document.querySelectorAll('video').forEach(function(video){
  video.setAttribute("autoplay","autoplay");
  video.setAttribute("loop","loop");
  video.setAttribute("playsinline","playsinline");
});
