class BlogPost {
    date;
    content;

    constructor(date, content) {
        this.date = date;
        this.content = content;
    }
}

testBlog = []

function printAllFromLocalStorage() {
    let arr = JSON.parse(localStorage.getItem('test_blog'));
    if (arr === null) {
        return;
    }
    if (arr.length === 0) {
        return;
    }
    for (let i = 0; i < arr.length; i++) {
        testBlog.push(arr[i]);
        printBlogPost(arr[i]);
    }
}


function saveInLocalStorage() {
    localStorage.setItem("test_blog", JSON.stringify(testBlog))
}

function formHandler(form) {
    let text = document.getElementById('form_text').value;
    if (text === "") {
        return;
    }

    let blogPost = new BlogPost(new Date(), text);
    testBlog.push(blogPost);
    printBlogPost(blogPost);
    saveInLocalStorage();
}

function printBlogPost(blogPost) {
    let div = document.createElement("div");
    div.setAttribute('class', 'blog_post')
    let time = document.createElement('datetime');
    blogPost.date = new Date(blogPost.date)
    let timeString = blogPost.date.getFullYear() + '-' + blogPost.date.getMonth() + '-' + blogPost.date.getDate() + ' ' + blogPost.date.getHours() + ':' + blogPost.date.getMinutes();
    time.datetime = timeString;
    time.innerText = timeString;
    let content = document.createElement("div");

    content.setAttribute('class', 'blog_content');

    content.innerHTML = blogPost.content;
    div.appendChild(time);
    div.appendChild(content);
    document.getElementById('my_blog_section').insertBefore(div, document.getElementById('my_blog_section').children[1]);
}