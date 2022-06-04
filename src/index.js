import "./styles/main.scss";

const input = d3.select("input");
const preview = d3.select(".preview");

d3.select("#new-note").on("submit", function () {
  d3.event.preventDefault(); // stops default form behaviour page reload

  d3.select("#notes")
    .append("p")
    .classed("note", true)
    .text(input.property("value"));
  input.property("value", "");
  showHide("");
});

d3.select("#removeNotes").on("click", () => {
  d3.selectAll(".note").remove();
});

d3.select("#lucky").on("click", () => {
  d3.selectAll(".note").style("font-size", () => {
    return Math.random() * 50 + "px";
  });
});

input.on("input", () => {
  let note = d3.event.target.value;
  showHide(note);
});

function showHide(val) {
  preview.text(val).classed("hide", val === "");
}
