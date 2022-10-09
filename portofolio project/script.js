const firebaseConfig = {
  apiKey: 'AIzaSyC_iByLoKrhwE3kAUcRXQl-IjxWkjh6hps',
  authDomain: 'portofolio-project-2e8c8.firebaseapp.com',
  databaseURL: 'https://portofolio-project-2e8c8-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'portofolio-project-2e8c8',
  storageBucket: 'portofolio-project-2e8c8.appspot.com',
  messagingSenderId: '910788921250',
  appId: '1:910788921250:web:660be73ec8d3843f96d4fb',
  measurementId: 'G-N6KBVS0779',
};

firebase.initializeApp(firebaseConfig);

var commentForm = firebase.database().ref('comment');

// form
const contactForm = document.getElementById('contact-form');
const success = document.getElementById('success');
console.log(contactForm);

contactForm.addEventListener('submit', submitForm);

function submitForm(e) {
  e.preventDefault();

  // submit

  var name = getVal('name');
  var email = getVal('email');
  var phone = getVal('phone');
  var comment = getVal('comment');
  var error = [];

  if (!phone.startsWith('08') || phone.length > 14) {
    error.push('the phone number must start from 08 and cannot be more than 14 digits');
  }

  if (comment.length < 5 || comment.length > 100) {
    error.push('Minimum comment length is 5 words and maximum is 100 words');
  }

  if (error.length === 0) {
    saveComment(name, email, phone, comment);

    success.classList.remove('success-none');

    setTimeout(() => {
      success.classList.add('success-none');
    }, 2500);
  } else {
    alert(error.join('\n'));
  }
}

function getVal(id) {
  return document.getElementById(id).value;
}

function saveComment(name, email, phone, comment) {
  var newComment = commentForm.push();

  newComment.set({
    name: name,
    email: email,
    phone: phone,
    comment: comment,
  });
}

// port details

const portContent = document.querySelector('.port-content');
const detailOne = document.querySelector('.detail-one');
const detailTwo = document.querySelector('.detail-two');
const detailThree = document.querySelector('.detail-three');

portContent.addEventListener('click', (e) => {
  if (e.target.classList.contains('view-one')) {
    detailOne.classList.remove('none');
  } else if (e.target.classList.contains('view-two')) {
    detailTwo.classList.remove('none');
  } else if (e.target.classList.contains('view-three')) {
    detailThree.classList.remove('none');
  }
});

const portDetail = document.querySelectorAll('.port-detail');

portDetail.forEach((port) => {
  port.addEventListener('click', (e) => {
    if (e.target.classList.contains('close-one')) {
      detailOne.classList.add('none');
    } else if (e.target.classList.contains('close-two')) {
      detailTwo.classList.add('none');
    } else if (e.target.classList.contains('close-three')) {
      detailThree.classList.add('none');
    }
  });
});

// Aos
AOS.init();
