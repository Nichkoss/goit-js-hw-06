const form = document.querySelector('.login-form')

const input_email = form[0]
const input_pass=form[1]

form.addEventListener("submit", onSend)

function onSend(e) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const eventEl = e.currentTarget.elements;
       if (eventEl.email.value === ""|| eventEl.password.value === "") {
        return alert('Заповни всі поля, менторе!');
    };
    const log_form = {}
    formData.forEach((value, names) => {
      log_form.email = eventEl.email.value;
      log_form.password = eventEl.password.value;
    });
    console.log(log_form)



//////second version without elements
    
    // if (input_email.value === "" | input_pass.value === "") {
    //     alert("Заповни всі поля, менторе!")
    // }
    // const Data = {}
    // Data.email = input_email.value,
    // Data.password= input_pass.value

    // console.log(Data);

    form.reset()
    
}


