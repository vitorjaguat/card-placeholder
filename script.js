const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profile_img = document.getElementById('profile_img');
const name = document.getElementById('name');
const date = document.getElementById('date');

const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bgs_texts = document.querySelectorAll('.animated-bg-text');

setTimeout(getData, 2500);

function getData() {
    header.innerHTML = '<img src="https://images.unsplash.com/photo-1542997830-49fc838e4c61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="Cute deer">';
    title.innerHTML = 'Lorem ipsum dolor sit garet.';
    excerpt.innerHTML = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, sint.';
    profile_img.innerHTML = '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="">';
    name.innerHTML = 'John Doe';
    date.innerHTML = 'Sep 21, 2022';

    animated_bgs.forEach(bg => bg.classList.remove('animated-bg'));
    animated_bgs_texts.forEach(bg => bg.classList.remove('animated-bg-text'));
}

// getData()