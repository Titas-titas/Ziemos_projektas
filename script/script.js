const sending = document.querySelector('#sending');

const name_ = document.querySelector('#name');
const email = document.querySelector('#email');
const companyName = document.querySelector('#companyName');
const title = document.querySelector('#title');
const message = document.querySelector('#message');
const announcements = document.querySelector('#announcements');
const inputInvalid = document.querySelector('#invalid');

sending.addEventListener("click", (e) => {
    e.preventDefault();
    const inputs = [
        {input:name_, errorText: document.querySelector('#invalid-name')}, 
        {input:companyName, errorText: document.querySelector('#invalid-company')}, 
        {input:title, errorText: document.querySelector('#invalid-title') } , 
        {input:message, errorText: document.querySelector('#invalid-message') 

        }];
    let countIsEmpty = 0;
    
    // žiuri ar email nera tuščia ir taip pat ar tinkamas
    const invalidEmail = document.querySelector('#invalid-email');
    const emailError = document.querySelector('#email-error');
    if(email.value === ""){
        email.style.borderBottom = "1px solid red";
        email.style.color = "red";
        invalidEmail.classList.remove("hidden");
        emailError.classList.add("hidden");
        countIsEmpty++;
    }
    else if (!checkTheEmail(email.value)) {
        email.style.borderBottom = "1px solid red";
        email.style.color = "red";
        emailError.classList.remove("hidden");
        invalidEmail.classList.add("hidden");
        countIsEmpty++;
    } else {
        email.style.borderBottom = "";
        email.style.color = "";
        invalidEmail.classList.add("hidden");
        emailError.classList.add("hidden");
    }

    // čia žiuri ar netuščia
    inputs.forEach(({input, errorText}) => {
        if (input.value == "") {
            input.style.borderBottom = "1px solid red";
            input.style.color = "red";
            errorText.classList.remove("hidden");
            countIsEmpty++;
        }
        else {
            input.style.borderBottom = "";
            input.style.color = "";
            errorText.classList.add("hidden");
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

