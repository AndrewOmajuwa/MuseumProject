//Check whether input fields contain valid data
failedValidation = (name, msg) => {
  if (!name && !msg) {
    alert("Please insert a Name and a Comment");
    return true;
  }
  if (!name) {
    alert("Please insert a Name");
    return true;
  }
  if (!msg) {
    alert("Please insert a Comment");
    return true;
  }
  if (msg.length > 200) {
    alert("You have reached the maximum amount of Characters for a comment");
    return true;
  } else {
    return false;
  }
};

//Set up Event handler submit comment to handle submit onclick
submitComment = () => {
  const inputField = document.getElementById("name");
  const name =
    inputField.value.charAt(0).toUpperCase() + inputField.value.slice(1);
  console.log(name);
  const textArea = document.getElementById("msg");
  const msg = textArea.value;
  console.log(msg);
  const validation = failedValidation(name, msg);
  if (validation) {
    return null;
  } else {
    const comment = document.createElement("section");
    const h3 = document.createElement("h3");
    const p = document.createElement("p");
    console.log(comment, h3, p);

    h3.innerHTML = `${name} said`;
    p.innerHTML = msg;
    comment.classList.add("comment");
    comment.appendChild(h3);
    comment.appendChild(p);
    console.log(comment);

    commentSection = document.getElementById("comments");
    console.log(commentSection);
    commentSection.appendChild(comment);

    inputField.value = null;
    textArea.value = null;

    console.log("Name and Comment ", name, msg);
  }
};
