$(() => {
	const togglePassword = document.querySelector('#toggle-password')
	const password = document.querySelector('#password')

	togglePassword.addEventListener('click', function () {
		// toggle the type attribute
		const type = password.getAttribute('type') === 'password' ? 'text' : 'password'
		password.setAttribute('type', type)
		// toggle the icon
		$(this).addClass('ri-eye-fill').removeClass('ri-eye-off-fill')
	})

	$('#signin_form').on('submit', (e) => {
		e.preventDefault()

		if ($('#signin_form')[0].checkValidity()) {
			// No Validation Error

			login()
		}
	})
})

var login = () => {
	// Login AJAX Request
	$.ajax({
		url: apiURL + 'login',
		type: 'POST',
		data: {
			user_no: $('#user_no').val(),
			password: $('#password').val(),
		},
		dataType: 'json',
		success: (response) => {
			// Get result data
			const data = response.data
			console.log(data)

			// Store token on local storage
			localStorage.setItem('TOKEN', data.token)

			// Set the session data
			let session_data = ''

			session_data += 'token=' + data.token
			session_data += '&user_id=' + data.user_id
			session_data += '&user_type=' + data.user_type

			Swal.fire({
				html: '<div class="mt-3"><lord-icon src="https://cdn.lordicon.com/lupuorrc.json" trigger="loop" colors="primary:#0ab39c,secondary:#405189" style="width:120px;height:120px"></lord-icon><div class="mt-4 pt-2 fs-15"><h4>Well done !</h4><p class="text-muted mx-4 mb-0">You have successfully logged in!</p></div></div>',
				showCancelButton: !0,
				showConfirmButton: !1,
				cancelButtonClass: 'btn btn-success w-xs mb-1',
				cancelButtonText: 'Ok',
				buttonsStyling: !1,
				showCloseButton: !0,
			}).then(function () {
				// Redirect to oAuth
				window.location.replace(baseURL + 'Auth/oAuth?' + session_data)
			})
		},
		error: function (xhr) {
			Swal.fire({
				html: `<div class="mt-3"><lord-icon src="https://cdn.lordicon.com/tdrtiskw.json" trigger="loop" colors="primary:#f06548,secondary:#f7b84b" style="width:120px;height:120px"></lord-icon><div class="mt-4 pt-2 fs-15"><h4>Oops! Something went Wrong!</h4><p class="text-muted mx-4 mb-0">${
					JSON.parse(xhr.responseText).message
				}</p></div></div>`,
				showCancelButton: !0,
				showConfirmButton: !1,
				cancelButtonClass: 'btn btn-danger w-xs mb-1',
				cancelButtonText: 'Dismiss',
				buttonsStyling: !1,
				showCloseButton: !0,
			})
		},
	})
}