$(function () {
	loadResearchRecordsTable()

	$('#rejectResearchForm').on('submit', function (e) {
		e.preventDefault() // prevent page refresh
		rejectResearchRecordAJAX($('#edit_research_id').val())
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

// Load  research datatables
loadResearchRecordsTable = () => {
	const dt = $('#research-pending-datatable')

	$.ajaxSetup({
		headers: AJAX_HEADERS,
	})

	if (dt.length) {
		dt.DataTable({
			dom:
				"<'row'<'col-xl-12 mb-2'B>>" +
				"<'row'<'col-sm-12 col-md-6'l><'col-sm-12 col-md-6'f>>" +
				"<'row'<'col-sm-12'tr>>" +
				"<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
			buttons: [
				{
					extend: 'print',
					text: '<i class="ri-printer-fill"></i> Print',
					exportOptions: {
						columns: [0, 1, 2, 3, 4],
					},
				},
			],
			bDestroy: true,
			ajax: {
				url: apiURL + 'researchcop/research-pending/',
				type: 'GET',
				ContentType: 'application/x-www-form-urlencoded',
			},
			columns: [
				// Title
				{
					data: null,
					class: 'text-center',
					render: (data) => {
						const rTitle = data.research_title
						return `${rTitle}`
					},
				},

				// Author name
				{
					data: null,
					class: 'text-center',
					render: (data) => {
						const rAuthor = data.research_author
						return `${rAuthor}`
					},
				},

				// Program
				{
					data: null,
					class: 'text-center',
					render: (data) => {
						const rProgram = data.research_program
						return `${rProgram}`
					},
				},

				// Type
				{
					data: null,
					class: 'text-center',
					render: (data) => {
						const rType = data.research_type
						return `${rType}`
					},
				},

                // Year Published
				{
					data: null,
					class: 'text-center',
					render: (data) => {
						const rYearPub = data.research_date_accomplished
						return `${rYearPub}`
					},
				},

				//Action
				{
					data: null,
					class: 'text-center',
					render: (data) => {
						return `
    <div class="dropdown d-inline-block">
    <button type="button" class="btn btn-info btn-icon waves-effect waves-light" onclick="viewResearchPending('${data.research_id}')" data-bs-toggle="modal" data-bs-target="#viewResearchPending"><i class="ri-eye-fill fs-5"></i></button>
	<button type="button" class="btn btn-success btn-icon waves-effect waves-light" onclick="approveResearchRecord('${data.research_id}')"><i class="ri-check-line"></i></button>
	<button type="button" class="btn btn-danger btn-icon waves-effect waves-light" onclick="rejectResearchRecord('${data.research_id}')" data-bs-toggle="modal" data-bs-target="#rejectResearchModal"><i class="ri-close-line"></i></button>
  </div>
    `
					},
				},

				// Research Document
				{
					data: null,
					class: 'text-center',
					render: (data) => {
						let ResearchDocu = data.research_pdf
						if (data.research_pdf == null) {
							ResearchDocu = `<span class="badge rounded-pill bg-danger">Not Available</span>`
						}
						else{
							ResearchDocu = `<button type="button" class="btn btn-success btn-label waves-effect waves-light" onclick="viewResearchDocument('${data.research_id}')" data-bs-toggle="modal" data-bs-target="#research_document_preview"><i class="ri-file-line label-icon align-middle fs-16 me-2"></i>View</button>`
						}

						return `
						<div class="dropdown d-inline-block">
						${ResearchDocu}
						</div>
						`
					},
				},

			
			],
			order: [[0, 'asc']],
		})
	}
}

// View Research Pending Modal
viewResearchPending = (research_id) => {
	$.ajax({
		type: 'GET',
		cache: false,
		url: apiURL + `researchcop/research-pending/${research_id}`,
		headers: AJAX_HEADERS,
		dataType: 'json',
		success: (result) => {
			const researchRecord = result.data

				$('#view_research_title').html(researchRecord.research_title)
				$('#view_research_co_author').html(researchRecord.research_co_author)
                $('#view_research_adviser').html(researchRecord.research_adviser)
				$('#view_research_status').html(researchRecord.research_status)
                $('#view_research_abstract').html(researchRecord.research_abstract)
		},
	})
}

// Get Admin
getAdmin = (user_id) => {
	$.ajax({
		url: apiURL + `researchcop/research-pending/info/${user_id}`,
        type: 'GET',
		headers: AJAX_HEADERS,
		success: (result) => {
            if (result) {
			const data = result.data
            
			$('#r_checked_by2').html(data.full_name)
			$('#r_checked_by').val(data.full_name)
            }
		},
	}).fail(() => console.error('There was an error in retrieving admin data'))
}

getResearchPending = (research_id) => {
	$.ajax({
		type: 'GET',
		cache: false,
		url: apiURL + `researchcop/research-pending/${research_id}`,
		headers: AJAX_HEADERS,
		dataType: 'json',
		success: (result) => {
			if (result) {
			const researchRecord = result.data
				$('#edit_research_id').val(researchRecord.research_id)
				$('#r_title2').html(researchRecord.research_title)
			}
		},
	}).fail(() => console.error('There was an error in retrieving research data'))
}

rejectResearchRecord = (research_id) => getResearchPending(research_id), getAdmin()

rejectResearchRecordAJAX = (research_id) => {
	// Reject Research
	if ($('#rejectResearchForm')[0].checkValidity()) {
		// no validation error
		const form = new FormData($('#rejectResearchForm')[0])

		data = {
			research_remarks: form.get('r_remarks'),
			research_checked_by: form.get('r_checked_by'),
		}

		$.ajax({
			url: apiURL + `researchcop/research-pending/rejectResearch/${research_id}`,
			type: 'DELETE',
			data: data,
			dataType: 'json',
			headers: AJAX_HEADERS,
			success: (result) => {
				if (result) {
					Toast.fire({
						icon: 'success',
						title: 'Reject Research Successfully!',
					}).then(function () {
						$('#rejectResearchModal').modal('hide')
						$('form#rejectResearchForm')[0].reset()

						// Reload My Submissions Datatable
						loadResearchRecordsTable()
					})
				}
			},
		}).fail(() => {
			Swal.fire({
				html: '<div class="mt-3"><lord-icon src="https://cdn.lordicon.com/tdrtiskw.json" trigger="loop" colors="primary:#f06548,secondary:#f7b84b" style="width:120px;height:120px"></lord-icon><div class="mt-4 pt-2 fs-15"><h4>Something went Wrong !</h4><p class="text-muted mx-4 mb-0">There was an error while rejecting a research. Please try again.</p></div></div>',
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

// Approve Research
approveResearchRecord = (research_id) => {

	var checkname =  $('#r_checked_by').val();

	data = {
		research_checked_by: checkname
	}
	
	$.ajaxSetup({
		headers: {
			Accept: 'application/json',
			Authorization: 'Bearer ' + TOKEN,
			ContentType: 'application/x-www-form-urlencoded',
		},
	})

	Swal.fire({
		html:
			'<div class="mt-3">' +
			'<lord-icon src="https://cdn.lordicon.com/tdrtiskw.json" trigger="loop" colors="primary:#f7b84b,secondary:#f06548" style="width:100px;height:100px"></lord-icon>' +
			'<div class="mt-4 pt-2 fs-15 mx-5">' +
			'<h4>Are you Sure ?</h4>' +
			'<p class="text-muted mx-4 mb-0">Do you want to approve this research ?</p>' +
			'</div>' +
			'</div>',
		showCancelButton: true,
		confirmButtonClass: 'btn btn-success w-xs me-2 mb-1',
		confirmButtonText: 'Approve',
		cancelButtonClass: 'btn btn-light w-xs mb-1',
		buttonsStyling: false,
		showCloseButton: true,
	}).then(function (result) {
		if (result.value) {
			$.ajax({
				url: apiURL + 'researchcop/research-pending/approveResearch/' + research_id,
				data: data,
				type: 'PUT',
				dataType: 'json',
				success: (result) => {
					if (result) {
						Toast.fire({
							icon: 'success',
							title: 'Approve Research Successfully!',
						}).then(function () {
							// Reload Research Records Datatable
							loadResearchRecordsTable()
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
						'<p class="text-muted mx-4 mb-0">There was an error while Approving Research. Please try again.</p>' +
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


viewResearchDocument = (research_id) => {
	$.ajax({
		url: apiURL + `researchcop/research-pending/${research_id}`,
		type: 'GET',
		headers: AJAX_HEADERS,
		success: (result) => {
			const data = result.data
			console.log(data)
			$('#hid_research_id').val(data.research_id)
			$('#hid_research_title').html(data.research_title)
			$('#document_preview').attr('src', data.research_pdf)
		},
	})
}