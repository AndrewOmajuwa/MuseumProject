//event handler
function submitComment () {
    //gathering the Elements
    const inputField = document.getElementById("name");
    const name = inputField.value;
    const textArea = document.getElementById('msg');
    const msg = textArea.value;
    //creating elements we need
    const comment = document.createElement('section')
    const h3 = document.createElement('h3')
    const p = document.createElement('p')
    //adjusting elements created accordingly
    h3.innerHTML = `${name} said:`;
    p.innerHTML = msg;
    comment.classList.add('comment');
    comment.appendChild(h3);
    comment.appendChild(p);
    //diplaying the comments
    const commentSection = document.getElementById('comments')
    commentSection.appendChild(comment)
    //Reassigning input and textArea values
    inputField.value = null
    textArea.value = null
} 

