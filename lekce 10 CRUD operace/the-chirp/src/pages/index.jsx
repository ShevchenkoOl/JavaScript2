import { render } from '@czechitas/render';
import { Post } from '../components/Post';
import '../global.css';
import './index.css';
import { fetchPosts, fetchUsers } from '../functions/fc';


const idUser = 4
const loggedUser = await fetchUsers(idUser)

//console.log(loggedUser)

const posts = await fetchPosts();

document.querySelector('#root').innerHTML = render(
  <div className="container">
    <h1>The Chirp</h1>
    <form className="post-form">
      <p>Co máte na srdci?</p>
      <textarea placeholder="Napište něco..." className="post-input"></textarea>
      <button type="submit">Publikovat</button>
    </form>
    
    <div>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  </div>
);

document.querySelector(".post-form").addEventListener("submit", async (e) => {
  e.preventDefault()

  const text = document.querySelector(".post-input").value
  const post = {
    userName: loggedUser.name,
    userId: loggedUser.id,
    userHandle: loggedUser.handle,
    userAvatar: loggedUser.avatar,
    text,
    likes: 0
  }

  await fetch("http://localhost:4000/api/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(post)
  })

  window.location.reload()
})

const deleteBtns = document.querySelectorAll(".delete-btn");
// console.log(deleteBtns);

deleteBtns.forEach(btn => {
  btn.addEventListener("click", async (e) => {
    const postId = e.target.dataset.id; //Získáme id konkrétního tlačítka, které stiskneme
    //console.log(postId);

    await fetch(`http://localhost:4000/api/posts/${postId}`, {
      method: "DELETE"
    });
    window.location.reload(); // refreshuje stránku, aby se nové příspěvky uvidí
  });
});


// import { render } from '@czechitas/render';
// import { Post } from '../components/Post';
// import { fetchUser, fetchPosts } from '../functions/fc';
// import '../global.css';
// import './index.css';

// const idUser = 4
// const loggedUser = await fetchUser(idUser)
// let editPost = null

// const posts = await fetchPosts();

// document.querySelector('#root').innerHTML = render(
//   <div className="container">
//     <h1>The Chirp</h1>
//     <form className="post-form">
//       <p>Co máte na srdci?</p>
//       <textarea placeholder="Napište něco..." className="post-input"></textarea>
//       <button type="submit">Publikovat</button>
//     </form>
    
//     <div>
//       {posts.map((post) => (
//         <Post key={post.id} post={post} />
//       ))}
//     </div>
//   </div>
// );

// document.querySelector(".post-form").addEventListener("submit", async (e) => {
//   e.preventDefault()

//   const text = document.querySelector(".post-input").value

//   if(editPost !== null) {
//     await fetch(`http://localhost:4000/api/posts/${editPost.id}`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(
//         {
//           userName: editPost.userName,
//           userId: editPost.id,
//           userHandle: editPost.userHandle,
//           userAvatar: editPost.userAvatar,
//           text,
//           likes: editPost.likes
//         }
//       )
//     })
//   } else {
//     const post = {
//       userName: loggedUser.name,
//       userId: loggedUser.id,
//       userHandle: loggedUser.handle,
//       userAvatar: loggedUser.avatar,
//       text,
//       likes: 0
//     }
  
//     await fetch("http://localhost:4000/api/posts", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(post)
//     })
//   }
  

//   window.location.reload()
// })

// const deleteBtns = document.querySelectorAll(".delete-btn")
// deleteBtns.forEach((btn) => {
//   btn.addEventListener("click", async (e) => {
//     const postId = e.target.dataset.id

//     await fetch(`http://localhost:4000/api/posts/${postId}`, {
//       method: "DELETE"
//     })

//     window.location.reload()
//   })
// })

// const editBtns = document.querySelectorAll(".edit-btn")
// editBtns.forEach((btn) => {
//   btn.addEventListener("click", async (e) => {
//     const postId = Number(e.target.dataset.id)

//     editPost = posts.find((p) => p.id === postId)
//     document.querySelector(".post-input").value = editPost.text
//     document.querySelector(".post-form button").textContent = "Upravit"
//   })
// })