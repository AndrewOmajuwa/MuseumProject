//function to validate form 
function validatingAnswers(name, msg){
  if(!name || !msg){
    alert('Please insert a name and comment');
    return true
  }
  else if (msg.length > 280){
    alert('Comment too long, Max. 280 characters');
    return true 
  }
  else{
    return submitComment()}
}

// add event handler
function submitComment() {
    // gather data
    const inputField = document.getElementById('name')
    const name = inputField.value
    const textArea = document.getElementById('msg')
    const msg = textArea.value
    
    // create the elements 
    const comment = document.createElement('section')
    const h3 = document.createElement('h3')
    const p = document.createElement('p')
  
    // adjusting the elements 
    h3.innerHTML = `${name} said:`
    p.innerHTML = msg
    comment.classList.add('comment')
    comment.appendChild(h3)
    comment.appendChild(p)
  
    // displaying the elements
    const commentSection = document.getElementById('comments')
    commentSection.appendChild(comment)
  
    // reseting form values
    inputField.value = null
    textArea.value = null

//Checking user Answers
    if(validatingAnswers(name, msg)){
      return null
    }
  }
