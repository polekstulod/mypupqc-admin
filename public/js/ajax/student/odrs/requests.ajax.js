$(function () {
	loadRequestsTable()
})

// Load Requests Table
loadRequestsTable = () => {
	const dt = $('#requests-datatable')

	if (dt.length) {
		dt.DataTable({
			bDestroy: true,
			scrollX: true,
			ajax: {
				url: `${apiURL}odrs/student/view_requests`,
				type: 'GET',
				headers: AJAX_HEADERS,
			},
			columns: [
				// Control Number
				{
					data: null,
					render: (data) => {
						return `<span class="text-primary fw-medium">${data.control_no}</span>`
					},
				},

				// Date Filed
				{
					data: null,
					render: (data) => {
						const date = moment(data.pending_for_clearance).format('DD, MMM. YYYY')
						const time = moment(data.pending_for_clearance).format('hh:mm A')

						return `
							<div class="d-flex align-items-center">
								<i class="ri-calendar-todo-fill text-primary"></i>
								<span class="ms-2">${date}<small class="text-muted ms-1">${time}</small></span>
							</div>
						`
					},
				},

				// Payment Status
				{
					data: null,
					render: (data) => {
						if (data.payment_status === 'Pending') {
							return `
								<div class="d-block badge badge-soft-warning align-items-center">
									<i class="me-2 mdi mdi-cash-fast fs-13"></i>
									<span class="text-uppercase fw-bold">${data.payment_status}</span>
								</div>
							`
						} else if (data.payment_status === 'Paid') {
							return `
								<div class="d-block badge badge-soft-success align-items-center">
									<i class="me-2 mdi mdi-cash-check fs-13"></i>
									<span class="text-uppercase fw-bold">${data.payment_status}</span>
								</div>
								<span class="mt-1 d-block badge badge-soft-dark badge-border">OR No. ${data.or_no} </span>
							`
						}
					},
				},

				// Details
				{
					data: null,
					width: '30%',
					render: (data) => {
						const course = data.user_assigned_to_request.education_profile.course_when_admitted
						const purpose = data.purpose_of_request
						return `
							<table>
								<tbody>
									<tr>
										<td>
											<span class="fw-medium badge bg-primary">Course: </span>
										</td>
										<td><span class="text-uppercase">${course}</span></td>
									</tr>
									<tr>
										<td>
											<span class="fw-medium badge bg-primary me-3">Purpose: </span>
										</td>
										<td>${purpose}</td>
									</tr>
								</tbody>
							</table>
						`
					},
				},

				// Request Status
				{
					data: null,
					render: (data) => {
						const requestStatus = data.status_of_request

						if (requestStatus === 'Pending for Clearance') {
							return `
								<div class="mt-2 d-grid fw-bolder badge badge-soft-warning position-relative">
									<i class="m-2 mdi mdi-clock fs-13"></i>
									<span class="pb-2 text-uppercase">${requestStatus}</span>
									<button type="button" class="btn btn-sm btn-secondary bg-gradient waves-effect waves-light rounded-circle position-absolute top-0 start-100 translate-middle" data-bs-toggle="modal" data-bs-target="#viewProcessStatusFlow">?</button>
								</div>
							`
						} else if (requestStatus === 'For Clearance') {
							return `
								<div class="mt-2 d-grid badge badge-soft-danger position-relative">
									<i class="m-2  mdi mdi-nfc-search-variant fs-13"></i>
									<span class="pb-2 text-uppercase">${requestStatus}</span>
									<button type="button" class="btn btn-sm btn-secondary bg-gradient waves-effect waves-light rounded-circle position-absolute top-0 start-100 translate-middle" data-bs-toggle="modal" data-bs-target="#viewProcessStatusFlow">?</button>
								</div>
							`
						} else if (requestStatus === 'For Evaluation/Processing') {
							return `
								<div class="mt-2 d-grid badge badge-soft-info position-relative">
									<i class="m-2 mdi mdi-file-sign fs-13"></i>
									<span class="pb-2 text-uppercase">${requestStatus}</span>
									<button type="button" class="btn btn-sm btn-secondary bg-gradient waves-effect waves-light rounded-circle position-absolute top-0 start-100 translate-middle" data-bs-toggle="modal" data-bs-target="#viewProcessStatusFlow">?</button>
								</div>
							`
						} else if (requestStatus === 'Ready for Pickup') {
							return `
								<div class="mt-2 d-grid badge badge-soft-dark position-relative">
									<i class="m-2 ri-user-received-2-line fs-13"></i>
									<span class="pb-2 text-uppercase">${requestStatus}</span>
									<button type="button" class="btn btn-sm btn-secondary bg-gradient waves-effect waves-light rounded-circle position-absolute top-0 start-100 translate-middle" data-bs-toggle="modal" data-bs-target="#viewProcessStatusFlow">?</button>
								</div>
							`
						}
					},
				},

				// Action
				{
					data: null,
					render: (data) => {
						const requestStatus = data.status_of_request

						if (requestStatus === 'Pending for Clearance') {
							return `
							<div class="vstack gap-2">
								<button type="button" class="btn btn-sm btn-info text-center waves-effect waves-light" data-bs-toggle="modal" data-bs-target="#viewRequestDetails" onclick = "viewRequestDetails('${data.request_id}')"><i class="mdi mdi-eye label-icon align-middle me-2"></i> View Details</button>
								<button type="button" class="btn btn-sm btn-danger waves-effect waves-light" onclick="cancelRequest('${data.request_id}')"><i class="ri-close-fill label-icon align-middle me-2"></i> Cancel</button>
							</div>
							`
						} else if (requestStatus === 'For Clearance') {
							return `
								<div class="vstack gap-2">
									<button type="button" class="btn btn-sm btn-info text-center waves-effect waves-light" data-bs-toggle="modal" data-bs-target="#viewRequestDetails" onclick="viewRequestDetails('${data.request_id}')"><i class="mdi mdi-eye label-icon align-middle me-2"></i> View Details</button>
									<button type="button" class="btn btn-sm btn-success text-center waves-effect waves-light" data-bs-toggle="modal" data-bs-target="#viewRequestRequirements" onclick="viewRequestRequirements('${data.request_id}')"><i class="mdi mdi-file-document-multiple label-icon align-middle me-2"></i> Requirements</button>
								</div>
								<div class="mt-4 d-grid">
									<button type="button" class="btn btn-sm btn-danger waves-effect waves-light" onclick="cancelRequest('${data.request_id}')"><i class="ri-close-fill label-icon align-middle me-2"></i> Cancel</button>
								</div>
							`
						} else {
							return `
							<div class="vstack">
								<button type="button" class="btn btn-sm btn-info text-center waves-effect waves-light" data-bs-toggle="modal" data-bs-target="#viewRequestDetails"  onclick="viewRequestDetails('${data.request_id}')"><i class="mdi mdi-eye label-icon align-middle me-2"></i> View Details</button>
							</div>
							`
						}
					},
				},
			],
			order: [[0, 'desc']],
		})
	}
}

// View Request Details
viewRequestDetails = (request_id) => {
	$.ajax({
		type: 'GET',
		url: `${apiURL}odrs/student/view_request/${request_id}`,
		dataType: 'json',
		headers: AJAX_HEADERS,
		success: (result) => {
			const data = result.data

			$('#control_no').html(data.control_no)

			let documentsList = ''
			data.documents_assigned_to_request.forEach((document) => {
				documentsList += `
					<tr>
						<td>
							<span>${document.document_information[0].document_name}</span>
						</td>
						<td class="text-center">${document.quantity}</td>
				`
				if (data.payment_status === 'Pending') {
					documentsList += `
						<td class="text-center">
							<span class="badge bg-warning text-dark">${data.payment_status}</span>
						</td>
					</tr>
					`
				} else if (data.payment_status === 'Paid') {
					documentsList += `
							<td class="text-center">
								<span class="badge bg-success">${data.payment_status}</span> <span class="badge badge-outline-dark">OR No. ${data.or_no} </span>
							</td>
					</tr>
					`
				}
			})
			$('#documents').html(documentsList)

			$('#purpose_of_request').html(data.purpose_of_request)

			pendingforClearanceDate = `
				${moment(data.pending_for_clearance).format('ddd')},
				${moment(data.pending_for_clearance).format('DD, MMM. YYYY')}
			`
			$('#pending_date').html(pendingforClearanceDate)

			pendingforClearanceDateTime = `
				${moment(data.pending_for_clearance).format('ddd')},
				${moment(data.pending_for_clearance).format('DD, MMM. YYYY')} -
				${moment(data.pending_for_clearance).format('hh:mm A')}
			`

			$('#pending_datetime').html(pendingforClearanceDateTime)

			let forClearance = ''
			if (data.for_clearance !== null) {
				forClearance += `
					<div class="accordion-header" id="headingTwo">
						<a class="accordion-button p-2 shadow-none" data-bs-toggle="collapse" href="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
							<div class="d-flex align-items-center">
								<div class="flex-shrink-0 avatar-xs">
									<div class="avatar-title bg-danger rounded-circle">
										<i class="mdi mdi-nfc-search-variant"></i>
									</div>
								</div>
								<div class="flex-grow-1 ms-3">
									<h6 class="fs-15 mb-0 fw-semibold">
										For Clearance -
										<span class="fw-normal">
											${moment(data.for_clearance).format('ddd')},
											${moment(data.for_clearance).format('DD, MMM. YYYY')}
										</span>
									</h6>
								</div>
							</div>
						</a>
					</div>
					<div id="collapseTwo" class="accordion-collapse collapse show" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
						<div class="accordion-body ms-2 ps-5 pt-0">
							<h6 class="mb-1">The Document Request is now Approved. The student must go to PUP QC to submit the requirements and pay the processing fees.</h6>
							<p class="text-muted mb-0">
								${moment(data.for_clearance).format('ddd')},
								${moment(data.for_clearance).format('DD, MMM. YYYY')} -
								${moment(data.for_clearance).format('hh:mm A')}
							</p>
						</div>
					</div>
				`
			} else if (data.for_clearance === null) {
				forClearance += `
					<div class="accordion-header" id="headingTwo">
						<a class="accordion-button p-2 shadow-none" data-bs-toggle="collapse" href="#collapseTwo" aria-expanded="false">
							<div class="d-flex align-items-center">
								<div class="flex-shrink-0 avatar-xs">
									<div class="avatar-title bg-light text-danger rounded-circle">
										<i class="mdi mdi-nfc-search-variant"></i>
									</div>
								</div>
								<div class="flex-grow-1 ms-3">
									<h6 class="fs-15 mb-0 fw-semibold">
										For Clearance
									</h6>
								</div>
							</div>
						</a>
					</div>
				`
			}
			$('#for_clearance').html(forClearance)

			let forEvaluation = ''
			if (data.for_evaluation !== null) {
				forEvaluation += `
					<div class="accordion-header" id="headingThree">
						<a class="accordion-button p-2 shadow-none" data-bs-toggle="collapse" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
							<div class="d-flex align-items-center">
								<div class="flex-shrink-0 avatar-xs">
									<div class="avatar-title bg-info rounded-circle">
										<i class="mdi mdi-file-sign"></i>
									</div>
								</div>
								<div class="flex-grow-1 ms-3">
									<h6 class="fs-15 mb-1 fw-semibold">
										For Evaluation / Processing -
										<span class="fw-normal">
											${moment(data.for_evaluation).format('ddd')},
											${moment(data.for_evaluation).format('DD, MMM. YYYY')}
										</span>
									</h6>
								</div>
							</div>
						</a>
					</div>
					<div id="collapseThree" class="accordion-collapse collapse show" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
						<div class="accordion-body ms-2 ps-5 pt-0">
							<h6 class="mb-1">The Document/s are Paid and the Request is now being Processed for signature, documentary stamp and school dry seal.</h6>
							<p class="text-muted mb-0">
								${moment(data.for_evaluation).format('ddd')},
								${moment(data.for_evaluation).format('DD, MMM. YYYY')} -
								${moment(data.for_evaluation).format('hh:mm A')}
							</p>
						</div>
					</div>
				`
			} else if (data.for_evaluation === null) {
				forEvaluation += `
					<div class="accordion-header" id="headingThree">
						<a class="accordion-button p-2 shadow-none" data-bs-toggle="collapse" href="#collapseThree" aria-expanded="false">
							<div class="d-flex align-items-center">
								<div class="flex-shrink-0 avatar-xs">
									<div class="avatar-title bg-light text-info rounded-circle">
										<i class="mdi mdi-file-sign"></i>
									</div>
								</div>
								<div class="flex-grow-1 ms-3">
									<h6 class="fs-15 mb-1 fw-semibold">For Evaluation / Processing</h6>
								</div>
							</div>
						</a>
					</div>
				`
			}
			$('#for_evaluation').html(forEvaluation)

			let readyforPickup = ''
			if (data.ready_for_pickup !== null) {
				readyforPickup += `
					<div class="accordion-header" id="headingFour">
						<a class="accordion-button p-2 shadow-none" data-bs-toggle="collapse" href="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
							<div class="d-flex align-items-center">
								<div class="flex-shrink-0 avatar-xs">
									<div class="avatar-title bg-dark rounded-circle">
										<i class="ri-user-received-2-line"></i>
									</div>
								</div>
								<div class="flex-grow-1 ms-3">
									<h6 class="fs-15 mb-1 fw-semibold">
										Ready for Pickup -
										<span class="fw-normal">
											${moment(data.ready_for_pickup).format('ddd')},
											${moment(data.ready_for_pickup).format('DD, MMM. YYYY')}
										</span>
									</h6>
								</div>
							</div>
						</a>
					</div>
					<div id="collapseFour" class="accordion-collapse collapse show" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
						<div class="accordion-body ms-2 ps-5 pt-0">
							<h6 class="mb-1">The Requested Document/s can now be claimed at PUP QC. The student must bring the claim stub and other requirements, if necessary.</h6>
							<p class="text-muted mb-0">
								${moment(data.ready_for_pickup).format('ddd')},
								${moment(data.ready_for_pickup).format('DD, MMM. YYYY')} -
								${moment(data.ready_for_pickup).format('hh:mm A')}
							</p>
						</div>
					</div>
				`
			} else if (data.ready_for_pickup === null) {
				readyforPickup += `
					<div class="accordion-header" id="headingFour">
						<a class="accordion-button p-2 shadow-none" data-bs-toggle="collapse" href="#collapseFour" aria-expanded="false">
							<div class="d-flex align-items-center">
								<div class="flex-shrink-0 avatar-xs">
									<div class="avatar-title bg-light text-dark rounded-circle">
										<i class="ri-user-received-2-line"></i>
									</div>
								</div>
								<div class="flex-grow-1 ms-3">
									<h6 class="fs-15 mb-1 fw-semibold">Ready for Pickup</h6>
								</div>
							</div>
						</a>
					</div>
				`
			}
			$('#ready_for_pickup').html(readyforPickup)

			if (data.status_of_request === 'For Clearance') {
				remarks = `
					<div class="h6 fs-15 text-primary">Remarks</div>
					<div class="list-group">
						<div class="list-group-item list-group-item-action">
							<div class="d-flex mb-2 align-items-center">
								<div class="flex-shrink-0">
									<img src="${baseURL}public/images/officials/img-25.png" class="avatar-sm rounded-circle" />
								</div>
								<div class="flex-grow-1 ms-3">
									<h5 class="list-title fs-15 mb-1">Hernando Liberato</h5>
									<p class="list-text mb-0 fs-12">Officer-in-Charge, Student Records</p>
								</div>
							</div>
							<p>
								The Document Request is now approved. You must view the requirements needed for each of the document/s requested and download the attachments by clicking the
									<button type="button" class="btn btn-sm btn-success text-center waves-effect waves-light"><i class="mdi mdi-file-document-multiple label-icon align-middle me-2"></i> Requirements</button>
								button. You must go to PUP QC and bring the downloaded attachments and requirements as listed below. 
							</p>
							<ul class="list-unstyled ms-3 mb-0">
				`

				getRequirements(data).forEach((requirement) => {
					remarks += `
								<li class="mb-2">
									<i class="mdi mdi-check-decagram text-info me-1"></i>
									${requirement}
								</li>
							`
				})

				remarks += `
								<li class="mb-2">
									<i class="mdi mdi-check-decagram text-info me-1"></i>
									Request Form
								</li>
							</ul>
							<p class="fw-medium">${data.remarks}</p>
							<p class="d-flex fw-medium align-items-center">
								<i class="ri-error-warning-fill me-2 fs-4 text-warning"></i>
								<span class="text-danger">Reminder: If the requirements for this request are not submitted at PUP QC after 90 days, the request will be automatically cancelled.</span>
							</p>
						</div>
					</div>
				`
				$('#remarks').html(remarks)
			} else if (data.status_of_request === 'Ready for Pickup') {
				remarks = `
					<div class="h6 fs-15 text-primary">Remarks</div>
					<div class="list-group">
						<div class="list-group-item list-group-item-action">
							<div class="d-flex mb-2 align-items-center">
								<div class="flex-shrink-0">
									<img src="${baseURL}public/images/officials/img-25.png" alt="" class="avatar-sm rounded-circle" />
								</div>
								<div class="flex-grow-1 ms-3">
									<h5 class="list-title fs-15 mb-1">Hernando Liberato</h5>
									<p class="list-text mb-0 fs-12">Officer-in-Charge, Student Records</p>
								</div>
							</div>
							<p>Good Day! Please be informed that your requested credential/s is/are scheduled for pick-up and can now be claimed at the Records Section, Rothlener Building in PUP Quezon City.</p>
							<p class="fw-medium">${data.remarks}</p>
							<p class="d-flex fw-medium align-items-center">
								<i class="ri-error-warning-fill me-2 fs-4 text-warning"></i>
								<span class="text-danger">Reminder: If the requested documents are not claimed at PUP QC after 90 days, the request will be automatically cancelled.</span>
							</p>
						</div>
					</div>
				`
				$('#remarks').html(remarks)
			} else {
				remarks = ''
				$('#remarks').html(remarks)
			}
		},
	})
}

// View Request Requirements
viewRequestRequirements = (request_id) => {
	$.ajax({
		type: 'GET',
		url: `${apiURL}odrs/student/document_requirements/${request_id}`,
		dataType: 'json',
		headers: AJAX_HEADERS,
		success: function (result) {
			const data = result.data
			let requirements = ''
			data.forEach((document) => {
				if (document.document_requirements) {
					document.document_requirements.forEach((requirement) => {
						requirements += `
							<tr>
								<td>${document.document_name}</td>
								<td>${requirement.doc_req_name}</td>
							</tr>
						`
						if (requirement.doc_req_name === 'Letter format for CHED') {
							$('#ched-letter').removeClass('d-none')
						}
					})
				}
			})
			requirements += `
				<tr>
					<td>For Overall Request</td>
					<td>Request Form</td>
				</tr>
			`
			console.log(requirements)
			$('#requirements').html(requirements)
		},
	})
}

// Cancel Request
cancelRequest = (request_id) => {
	Swal.fire({
		html:
			'<div class="mt-3">' +
			'<lord-icon src="https://cdn.lordicon.com/nduddlov.json" trigger="loop" colors="outline:#f06548,primary:#ffffff,secondary:#f06548" style="width:100px;height:100px"></lord-icon>' +
			'<div class="mt-4 pt-2 fs-15 mx-5">' +
			'<h4 class="mb-3 fw-semibold">Cancel this Request?</h4>' +
			'<p class="text-muted mx-4 mb-0">Are you sure you want to cancel this request?</p>' +
			'</div>' +
			'</div>',
		showCancelButton: true,
		confirmButtonClass: 'btn btn-danger w-xs me-2 mb-1',
		confirmButtonText: 'Yes, Cancel It!',
		cancelButtonClass: 'btn btn-ghost-danger w-xs mb-1',
		cancelButtonText: 'Dismiss',
		buttonsStyling: false,
		showCloseButton: true,
	}).then(function (result) {
		if (result.value) {
			$.ajax({
				type: 'PUT',
				url: `${apiURL}odrs/student/update_request_status/Cancelled by Student/${request_id}`,
				dataType: 'json',
				headers: AJAX_HEADERS,
				success: (result) => {
					if (result) {
						Swal.fire({
							html:
								'<div class="mt-3">' +
								'<lord-icon src="https://cdn.lordicon.com/lupuorrc.json" trigger="loop" colors="primary:#0ab39c,secondary:#405189" style="width:120px;height:120px"></lord-icon>' +
								'<div class="mt-4 pt-2 fs-15">' +
								'<h4>Well done !</h4>' +
								'<p class="text-muted mx-4 mb-0">You have successfully cancelled a request!</p>' +
								'</div>' +
								'</div>',
							showCancelButton: !0,
							showConfirmButton: !1,
							cancelButtonClass: 'btn btn-success w-xs mb-1',
							cancelButtonText: 'Ok',
							buttonsStyling: !1,
							showCloseButton: !0,
						}).then(function () {
							// Reload Requests Datatable
							// Cancelled Requests will go to History Page
							window.location.href = `${baseURL}student/history`
						})
					}
				},
			}).fail(() => {
				Swal.fire({
					html:
						'<div class="mt-3">' +
						'<lord-icon src="https://cdn.lordicon.com/tdrtiskw.json" trigger="loop" colors="primary:#f06548,secondary:#f7b84b" style="width:120px;height:120px"></lord-icon>' +
						'<div class="mt-4 pt-2 fs-15">' +
						'<h4>Something went Wrong !</h4>' +
						'<p class="text-muted mx-4 mb-0">There was an error while cancelling a request. Please try again.</p>' +
						'</div>' +
						'</div>',
					showCancelButton: !0,
					showConfirmButton: !1,
					cancelButtonClass: 'btn btn-danger w-xs mb-1',
					cancelButtonText: 'Dismiss',
					buttonsStyling: !1,
					showCloseButton: !0,
				})
			})
		}
	})
}

function getRequirements(data) {
	const requirements = []

	data.documents_assigned_to_request.forEach((document) => {
		document.document_information[0].document_requirements.forEach((requirement) => {
			requirements.push(requirement.doc_req_name)
		})
	})

	const uniqueReqs = new Set(requirements)
	uniqueReqsArray = [...uniqueReqs]

	return uniqueReqsArray
}