function getFormvalue() {
    //Write your code here
	let first = document.querySelector('[name="fname"]').value.trim()
	let last = document.querySelector('[name="lname"]').value.trim()
	alert(`${first} ${last}`)
}
