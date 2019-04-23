function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget(){
    return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list');

  for(let i = 0, l = rankedLists.length; i < l; i++) {
  let children = rankedLists[i].children;

  for(let j = 0, k = children.length; j < k; j++) {
    children[j].innerHTML = parseInt(children[j].innerHTML)+ n;
  }
}
}

function deepestChild(){
let node = document.getElementById('grand-node').children[0]

let nextNode = node.children[0]

while(nextNode){
node = nextNode
nextNode = nextNode.children[0]
console.log(node.innerHTML)
}

return node
}

deepestChild()
