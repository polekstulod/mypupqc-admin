// * prod = production, dev = development
const webEnv = 'dev'
const apiEnv = 'prod'

const baseURL = webEnv === 'prod' ? 'https://www.mypupqc.live/' : 'http://localhost/mypupqc-admin/'
const apiURL =
	apiEnv === 'prod'
		? 'https://mypupqc-api.azurewebsites.net/mypupqc/v1/'
		: 'http://localhost:3600/mypupqc/v1/'
// Token
const TOKEN = localStorage.getItem('TOKEN')

// AJAX Headers
const AJAX_HEADERS = {
	Accept: 'application/json',
	Authorization: `Bearer ${TOKEN}`,
	ContentType: 'application/x-www-form-urlencoded',
}

const refreshPage = () => {
	return setTimeout(() => {
		location.reload()
	}, 1000)
}

function logout(page) {
	let msg = ''

	switch (page) {
		case 'logout':
			msg = 'You will be redirected to Home page.'
			break
		default:
			return false
	}

	Swal.fire({
		html: `
		<div class="mt-3">
			<lord-icon
				src="https://cdn.lordicon.com/moscwhoj.json"
				trigger="loop"
				colors="primary:#f7b84b,secondary:#f06548"
				style="width:100px;height:100px"
			></lord-icon>
			<h4>Are you sure you want to logout?</h4>
			<p class="mx-4 mb-0">${msg}</p>
		</div>
		`,
		showCancelButton: true,
		confirmButtonText: 'Yes!',
		cancelButtonText: 'No, cancel!',
		confirmButtonClass: 'btn btn-primary w-xs me-2 mt-2',
		cancelButtonClass: 'btn btn-ghost-dark waves-effect waves-light mt-2',
		buttonsStyling: false,
		showCloseButton: true,
	}).then(function (result) {
		if (!result.value) return false

		localStorage.clear()
		if (page === 'logout') window.location.href = baseURL
	})
}

function adjustTime(date) {
	// Tanginang time time to, eto reference: https://stackoverflow.com/questions/7556591/is-the-javascript-date-object-always-one-day-off
	date = new Date(date)
	const year = date.getFullYear()
	const month = date.getMonth() + 1
	const day = date.getDate()
	var newDate = new Date(`${year}/${month}/${day} PST`) // PST is the timezone of the server
	return new Date(newDate.getTime() + Math.abs(newDate.getTimezoneOffset() * 60000))
}
