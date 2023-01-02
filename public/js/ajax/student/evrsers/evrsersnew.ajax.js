$(function() {
    loadFullName()

    loadFacilities()

    $('#addNewReservation').on('submit', function(e) {
        e.preventDefault() // prevent page refresh
        addNewReservation()
    })
})

loadFullName = () => {
    $.ajax({
        type: 'GET',
        url: apiURL + `student/info`,
        headers: AJAX_HEADERS,
        success: (result) => {
            const data = result.data
            const full_name = data.full_name
            console.log(full_name)
            $('input[name="full_name"]').val(full_name)
        },
        error: function() {},
    })
}

loadFacilities = () => {
    // ajax generate facility in wizard using /student/view_all_facilities route
    //
    $.ajaxSetup({
        headers: {
            Accept: 'application/json',
            Authorization: 'Bearer ' + TOKEN,
            ContentType: 'application/x-www-form-urlencoded',
        },
    })

    $.ajax({
        type: 'GET',
        cache: false,
        url: apiURL + `evrsers/student/view_all_facilities/`,
        dataType: 'json',
        success: (result) => {
            const facilities = result.data
            console.log(facilities)
            let facilitiesHTML = ''
            facilities.forEach((facility) => {
                facilitiesHTML += `
                <div class="col-4">
                    <div class="form-check card-radio">
                        <input id="${facility.facility_id}" name="facility" type="radio" value="${facility.facility_name}" class="form-check-input"/>
                            <label class="form-check-label p-0 avatar-md w-100 h-50" for="${facility.facility_id}">
                                <img src="${facility.facility_picture}" class="card-img-top" alt="${facility.facility_name}">
                            </label>
                    </div>
                    <h5 class="fs-13 text-center mt-2">${facility.facility_name}</h5>
                </div>
                `
            })
            $('#facilities').html(facilitiesHTML)

            // enable next button upon selecting a facility
            $('input[name="facility"]').on('change', function() {
                $('#nextBtn').prop('disabled', false)
            })
        },
    })
}

addNewReservation = () => {
    if ($('#addNewReservation')[0].checkValidity()) {
        // no validation error
        const form = new FormData($('#addNewReservation')[0])
            // with the id's: orgfloatingInput, eventTitlefloatingInput, eventDetailsfloatingInput,
            // reserveDatefloatingInput, timeFromfloatingInput, timeTofloatingInput
            // inputGroupFile01, inputGroupFile02, inputGroupFile03
        const organization_name = form.get('orgfloatingInput')
        const event_title = form.get('eventTitlefloatingInput')
        const event_details = form.get('eventDetailsfloatingInput')
        const reserve_date = form.get('reserveDatefloatingInput')
        const time_from = form.get('timeFromfloatingInput')
        const time_to = form.get('timeTofloatingInput')
        const file1 = form.get('inputGroupFile01')
        const file2 = form.get('inputGroupFile02')
        const file3 = form.get('inputGroupFile03')

        // convert file1, file2, file3 to blob
        const file1Blob = new Blob([file1], { type: file1.type })
        const file2Blob = new Blob([file2], { type: file2.type })
        const file3Blob = new Blob([file3], { type: file3.type })

        const facility_id = $('input[name="facility"]:checked').attr('id')

        const formData = new FormData()
        formData.append('organization_name', organization_name)
        formData.append('event_title', event_title)
        formData.append('event_details', event_details)
        formData.append('reserve_date', reserve_date)
        formData.append('time_from', time_from)
        formData.append('time_to', time_to)

        // append the blob to formData
        formData.append('reserve_attachments_1', file1Blob)
        formData.append('reserve_attachments_2', file2Blob)
        formData.append('reserve_attachments_3', file3Blob)

        formData.append('facility_id', facility_id)
        formData.append('reserve_status', 'Pending')
        formData.append('remarks', 'Please wait for admin approval.')

        // all values are not empty, proceed to ajax call
        $.ajaxSetup({
            headers: {
                Accept: 'application/json',
                Authorization: 'Bearer ' + TOKEN,
            },
        })

        $.ajax({
            type: 'POST',
            url: apiURL + `evrsers/student/add_reservation/`,
            data: formData,
            success: (result) => {
                const data = result.data
                console.log(data)

                //  display success message using sweetalert2
                if (result) {
                    Swal.fire({
                        html: '<div class="mt-3"><lord-icon src="https://cdn.lordicon.com/lupuorrc.json" trigger="loop" colors="primary:#0ab39c,secondary:#405189" style="width:120px;height:120px"></lord-icon><div class="mt-4 pt-2 fs-15"><h4>Well done !</h4><p class="text-muted mx-4 mb-0">You have successfully created a request!</p></div></div>',
                        showCancelButton: !0,
                        showConfirmButton: !1,
                        cancelButtonClass: 'btn btn-success w-xs mb-1',
                        cancelButtonText: 'Ok',
                        buttonsStyling: !1,
                        showCloseButton: !0,
                    }).then(function() {
                        window.location.href = `${baseURL}student/evrsers/view-reservation`
                    })
                }
            },
        }).fail((xhr) => {
            Swal.fire({
                html: `<div class="mt-3"><lord-icon src="https://cdn.lordicon.com/tdrtiskw.json" trigger="loop" colors="primary:#f06548,secondary:#f7b84b" style="width:120px;height:120px"></lord-icon><div class="mt-4 pt-2 fs-15"><h4>Something went Wrong !</h4><p class="text-muted mx-4 mb-0">${
					JSON.parse(xhr.responseText).message
				}</p></div></div>`,
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