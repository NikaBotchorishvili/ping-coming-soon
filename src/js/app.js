const emailInput = document.querySelector("input[name=email]");
const button = document.querySelector(".button");
const responseMessage = document.querySelector(".response-message");
const emailRegExpr =
	/([-!#-'*+/-9=?A-Z^-~]+(\.[-!#-'*+/-9=?A-Z^-~]+)*|"([]!#-[^-~ \t]|(\\[\t -~]))+")@[0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?(\.[0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?)+/;
button.addEventListener("click", () => {
	if (emailInput.value.trim().length === 0) {
		responseMessage.innerText = "Empty field";
		responseMessage.classList.add("text-lightRed");
	} else if (!emailRegExpr.test(emailInput.value)) {
		responseMessage.innerText = "Please provide a valid email address";
		responseMessage.classList.add("text-lightRed");
	} else {
		responseMessage.innerText = "Success, We'll notify you soon!";
		responseMessage.classList.add("text-green");
	}
});
