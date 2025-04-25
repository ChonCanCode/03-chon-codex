function areYouPlayingBanjo(name) {
  return (
    name +
    (name[0].toLowerCase() === "r" ? " plays" : " does not play") +
    " banjo"
  );
}

let name = "rain";

console.log(areYouPlayingBanjo(name));
