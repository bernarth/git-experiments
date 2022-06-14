// sort string by alphabetical order
const sortString = (str) => {
  return str.split('').sort().join('');
}

// trim string
const trimString = (str) => {
  return str.trim();
}

// remove duplicate string
const removeDuplicateString = (str) => {
  return str.split('').filter((item, index) => {
    return str.indexOf(item) === index;
  }).join('');
}

// find vowel in string
const findVowel = (str) => {
  return str.split('').filter((item) => {
    return item.match(/[aeiou]/i);
  }).join('');
}

// delete numbers from string
const deleteNumbers = (str) => {
    return str.split('').filter((item) => {
        return !item.match(/[0-9]/);
    }).join('');
}