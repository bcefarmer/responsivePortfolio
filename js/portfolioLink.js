$(".worksItem").click(e => {
  let workItem =  $(e.target).closest("li");
  let workLink = $(workItem).attr("data-link");
  console.log(workLink);
  window.open(`${workLink}`, "_blank");
})