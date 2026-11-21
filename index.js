let postTitle = '';
const titleInputNode = document.querySelector('.js__title__input');
const btnNode = document.querySelector('.js__btn');
btnNode.addEventListener('click',function() {
  postTitle = titleInputNode.value;
  console.log(postTitle);
})