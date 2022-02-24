// window load system
window.onload = () => {
  loadCommentByApi(4);
};
const commentConainers = document.getElementById("comment");
const error = document.getElementById("error");
const loadCommentByApi = (id) => {
  if (id <= 0) {
    error.innerText = "please input any amount";
  } else {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((res) => res.json())
      .then((data) => loadComments(data.slice(0, id)));
  }
};
const loadCommentsData = async () => {
  commentConainers.innerHTML = "";
  error.innerText = "";
  const inputComment = document.getElementById("comment-input");
  const inputAmount = inputComment.value;
  loadCommentByApi(inputAmount);
  inputComment.value = "";
};
const loadComments = (comments) => {
  comments.forEach((comment) => {
    const div = document.createElement("div");
    div.classList.add("post");
    div.classList.add("col-6");
    const title = comment.name;
    const fLater = title.slice(0, 1).toUpperCase();
    const lLater = title.slice(1, title.length);
    div.innerHTML = `
              <h4>${fLater}${lLater}</h4>
              <h6>${comment.email.toLowerCase()}</h6>
              <p>${comment.body}</p>
              `;
    commentConainers.appendChild(div);
  });
};
