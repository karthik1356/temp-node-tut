const path=require('path')
console.log(path.sep)
const filepath=path.join('/freefire','alok','skills.txt')
console.log(filepath)
const basename=path.basename(filepath);
console.log(basename)
const absolute=path.resolve(__dirname,'freefire','alok','skills.txt');
console.log(absolute)
// output
// \
// \freefire\alok\skills.txt
// skills