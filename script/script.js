const sending = document.querySelector('#sending');

const name_ = document.querySelector('#name');
const email = document.querySelector('#email');
const companyName = document.querySelector('#companyName');
const title = document.querySelector('#title');
const message = document.querySelector('#message');
const announcements = document.querySelector('#announcements');

sending.addEventListener("click", (e) => {
    e.preventDefault();
    const inputs = [name_, companyName, title, message];
    let countIsEmpty = 0;
  

    if (!checkTheEmail(email.value)) {
        email.style.borderBottom = "1px solid red";
        email.style.color = "red";
        countIsEmpty++;
    } else {
        email.style.borderBottom = "";
        email.style.color = "";
    }

    inputs.forEach(input => {
        if (input.value == "") {
            input.style.borderBottom = "1px solid red";
            input.style.color = "red";
            countIsEmpty++;
        }
        else {
            input.style.borderBottom = "";
            input.style.color = "";
        }
    });

    if(countIsEmpty == 0){
        console.log(
            `name: ${name_.value},\n email: ${email.value},\n companyName: ${companyName.value},\n title:${title.value},\n message:${message.value},\n announcements:${announcements.value}`
        );
    }
});


const checkTheEmail = (email) => {
    const usersEmail = email.trim();
    const parts = usersEmail.split("@");

    if (parts.length !== 2) return false;

    const local = parts[0];
    const domain = parts[1];

    if (local.length === 0) return false;

    const domainParts = domain.split(".");
    if (domainParts.length < 2) return false;

    for (let i = 0; i < domainParts.length; i++) {
        if (domainParts[i].length === 0) return false;
    } 

    return true;
}