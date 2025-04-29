function DNAtoRNA(dna) {
  return dna
    .split("")
    .map((char) => (char === "T" ? "U" : char))
    .join("");
}

let dna = "GCAT";

console.log(DNAtoRNA(dna));
