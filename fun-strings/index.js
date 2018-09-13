string="All the things are difficult before they are easy";

const wordCount = (text) => {
  let words = text.split(' ');
  const counters = {};
  
  words.map((item) => {
    let key = item.toLowerCase();
    key in counters ? counters[key]++ : counters[key] = 1;
  });
 
  return Object.keys(counters).reduce((a,b) => counters[a] > counters[b] ? a : b);
}

document.getElementById('string-hook-one').insertAdjacentHTML('beforeend', 'String: ' + string + '<br> Most used word: ' + wordCount(string));
