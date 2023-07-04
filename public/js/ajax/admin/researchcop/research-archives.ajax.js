$(function () {
	loadResearchArchivesTable()

})

// Load  research datatables
loadResearchArchivesTable = () => {
	const dt = $('#research-archives-datatable')

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
						columns: [0],
					},
				},
			],
			bDestroy: true,
			ajax: {
				url: apiURL + 'researchcop/research-archives/',
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

				// Information
				{
					data: null,
					class: 'text-center',
					render: (data) => {
						return `
    <div class="dropdown d-inline-block">
    <button type="button" class="btn btn-info btn-icon waves-effect waves-light" onclick="viewResearchRecord('${data.research_id}')" data-bs-toggle="modal" data-bs-target="#viewResearchRecord"><i class="ri-eye-fill fs-5"></i></button>
	</div>
    `
					},
				},

				// Remarks
				{
					data: null,
					class: 'text-center',
					render: (data) => {
						return `
						<div class="dropdown d-inline-block">
						<button type="button" class="btn btn-success btn-icon waves-effect waves-light" onclick="viewResearchRemarks('${data.research_id}')" data-bs-toggle="modal" data-bs-target="#viewResearchRemarks"><i class="ri-question-fill fs-5"></i></button>
						</div>
						`
					},
				},

			],
			order: [[0, 'asc']],
		})
	}
}

// View Research Info
viewResearchRecord = (research_id) => {
	$.ajax({
		type: 'GET',
		cache: false,
		url: apiURL + `researchcop/research-archives/${research_id}`,
		headers: AJAX_HEADERS,
		dataType: 'json',
		success: (result) => {
			const researchRecord = result.data
				$('#view_research_title').html(researchRecord.research_title)
				$('#view_research_author').html(researchRecord.research_author)
				$('#view_research_date_accomplished').html(researchRecord.research_date_accomplished)
                $('#view_research_adviser').html(researchRecord.research_adviser)
				$('#view_research_program').html(researchRecord.research_program)
				$('#view_research_type').html(researchRecord.research_type)
				$('#view_research_abstract').html(researchRecord.research_abstract)
				$('#view_research_status').html(researchRecord.research_status)
		},
	})
}

// View Research Info
viewResearchRemarks = (research_id) => {
	$.ajax({
		type: 'GET',
		cache: false,
		url: apiURL + `researchcop/research-archives/remarks/${research_id}`,
		headers: AJAX_HEADERS,
		dataType: 'json',
		success: (result) => {
			const researchRecord = result.data
			$('#view2_research_title').html(researchRecord.research_title)
			$('#view_research_checked_by').html(researchRecord.research_checked_by)
			$('#view_research_remarks').html(researchRecord.research_remarks)
		},
	})
}