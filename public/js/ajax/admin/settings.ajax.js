$(function () {
	editProfile()

	$('#profileSettingsForm').on('submit', function (e) {
		e.preventDefault() // prevent page refresh
		// pass data to API for updating of admin's info
		editProfileAJAX()
	})

	$('#changePasswordForm').on('submit', function (e) {
		e.preventDefault() // prevent page refresh
		validatePassword()
		changePasswordAJAX()
	})
})

const Toast = Swal.mixin({
	toast: true,
	position: 'top-end',
	showConfirmButton: false,
	timer: 2000,
	timerProgressBar: true,
	didOpen: (toast) => {
		toast.addEventListener('mouseenter', Swal.stopTimer)
		toast.addEventListener('mouseleave', Swal.resumeTimer)
	},
})

// Edit Admin Details
editProfile = () => {
	$.ajax({
		url: apiURL + `super_admin/info`,
		type: 'GET',
		headers: AJAX_HEADERS,
		success: (result) => {
			if (result) {
				// Get data from result
				const data = result.data
				// $('#edit_image').val(data.image)

				$('#first_name').val(data.first_name)
				$('#middle_name').val(data.middle_name)
				$('#last_name').val(data.last_name)
				$('#extension_name').val(data.extension_name)
				const birth_date = data.birth_date
				let birthDateFormatted = `${moment(birth_date).format('LL')}`
				$('#birth_date').val(birthDateFormatted)
				$('#gender').val(data.gender)
				$('#contact_number').val(data.contact_number)
				$('#house_street').val(data.house_street)
				$('#barangay').val(data.barangay)
				$('#municipality').val(data.municipality)
				$('#province').val(data.province)
				$('#region').val(data.region)
			}
		},
	}).fail(() => console.error('There was an error in retrieving admin data'))
}

// Edit Admin AJAX
editProfileAJAX = () => {
	// Get data from form
	if ($('#profileSettingsForm')[0].checkValidity()) {
		// no validation error
		const form = new FormData($('#profileSettingsForm')[0])

		data = {
			image: null,
			first_name: form.get('first_name'),
			middle_name: form.get('middle_name'),
			last_name: form.get('last_name'),
			extension_name: form.get('extension_name'),
			contact_number: form.get('contact_number'),
			birth_date: form.get('birth_date'),
			gender: form.get('gender'),
			house_street: form.get('house_street'),
			barangay: form.get('barangay'),
			municipality: form.get('municipality'),
			province: form.get('province'),
			region: form.get('region'),
		}

		$.ajax({
			url: apiURL + `super_admin/info`,
			type: 'PUT',
			data: data,
			dataType: 'json',
			headers: AJAX_HEADERS,
			success: (result) => {
				if (result) {
					Toast.fire({
						icon: 'success',
						title: 'Update Profile Successfully!',
					}).then(function () {
						loadProfile()
					})
				}
			},
		}).fail(() => {
			Swal.fire({
				html: '<div class="mt-3"><lord-icon src="https://cdn.lordicon.com/tdrtiskw.json" trigger="loop" colors="primary:#f06548,secondary:#f7b84b" style="width:120px;height:120px"></lord-icon><div class="mt-4 pt-2 fs-15"><h4>Something went Wrong !</h4><p class="text-muted mx-4 mb-0">There was an error while updating your details. Please try again.</p></div></div>',
				showCancelButton: !0,
				showConfirmButton: !1,
				cancelButtonClass: 'btn btn-danger w-xs mb-1',
				cancelButtonText: 'Dismiss',
				buttonsStyling: !1,
				showCloseButton: !0,
			})
		})
	}
}

// Change Password AJAX
changePasswordAJAX = () => {
	if (!$('#changePasswordForm')[0].checkValidity()) return false

	const form = new FormData($('#changePasswordForm')[0])

	let data = {
		current_password: form.get('current_password'),
		new_password: form.get('new_password'),
	}

	$.ajax({
		url: apiURL + `super_admin/info/change_password`,
		type: 'PUT',
		data: data,
		dataType: 'json',
		headers: AJAX_HEADERS,
		success: (result) => {
			console.log(result)
			if (result) {
				Toast.fire({
					icon: 'success',
					title: 'Change Password Successfully!',
				}).then(function () {
					localStorage.clear()
					window.location.href = baseURL
				})
			}
		},
	}).fail(() => {
		let password = document.getElementById('old-password-input')
		password.setCustomValidity('Incorrect Password')
	})
}
