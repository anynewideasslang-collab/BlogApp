
let inputTitleNode = document.querySelector('.js__title');
let inputTextNode = document.querySelector('.js__text');
let btnNode = document.querySelector('.js__btn');
let postsNode = document.querySelector('.js__posts');

let posts = [];

btnNode.addEventListener('click',function() {
    getPost();
    savePosts();
    renderPosts();
});

function getPost(   ) {
    let title = inputTitleNode.value;
    let text = inputTextNode.value;
    let post = {
        title: title,
        text: text,
    };
    return post
}
function savePosts(){
    posts.push(getPost()); 
}
function renderPosts() {
    let postsHTML = '';
    posts.forEach(fuckingPost=>{
        postsHTML+= `
        <div class='pushingHTML'>
            <div class='unit'>
                <span class='fuckingTitle'>${fuckingPost.title}</span>
                <div class='fuckingText'>${fuckingPost.text}</div> 
            </div>
        </div>`
    });
    postsNode.innerHTML = postsHTML;
}