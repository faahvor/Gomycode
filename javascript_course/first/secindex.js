const ull = document.querySelector('.people');
let people = ['fav', 'ayo','tio'];
let html = '';

people.forEach(person=>{
    html += `<li class="text-red-500">${person}</li>`
})
console.log(html);
ull.innerHTML = html;


let user = {
    name:'fav',
    blogs:[
        {title: 'why Mac and cheese', likes:30}, 
        {title:'10 things to do', likes:20}
    ],
    logBlogs:function(){
        console.log("the user has written the following blogs");
        this.blogs.forEach(blog =>{
            console.log(blog.title,blog.likes);
        })
    }
}
user.logBlogs();
// const logPeople = (person, index) =>{
//     console.log(`${index} - hello ${person}`);
// }
// people.forEach(logPeople)