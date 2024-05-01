/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronouns = ["the", "our"];
  let adjs = ["great", "big"];
  let nouns = ["jogger", "racoon"];
  let exts = [".com", ".net", ".es", ".org", ".us", ".io"];

  for (let pronoun of pronouns) {
    for (let adj of adjs) {
      for (let noun of nouns) {
        for (let ext of exts) {
          let domains = `${pronoun}${adj}${noun}${ext}`;
          console.log(domains);
        }
      }
    }
  }
};
