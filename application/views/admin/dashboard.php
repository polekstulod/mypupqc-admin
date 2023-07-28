<div class="row">
    <div class="col-xs-12 col-xxl-6">
        <div class="card card-animate">
            <div class="card-body p-0">
                <div class="alert alert-primary border-0 rounded-top rounded-0 m-0 d-flex align-items-center" role="alert">
                    <i class="mdi mdi-clock-time-four-outline text-primary me-2 fs-20"></i>
                    <span class="fw-medium">Digital Clock</span>
                </div>
                <div class="row py-3 clock">
                    <div class="col-xs-12 col-sm-6 analog-clock">
                        <div class="circle">
                            <div class="face">
                                <div id="hour" class="hour"></div>
                                <div id="minute" class="minute"></div>
                                <div id="second" class="second"></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6 digital-clock">
                        <div class="d-flex align-items-center  flex-wrap">
                            <h1 id="clockTime" class="display-6 fw-medium"></h1>
                            <span id="clockSession" class="ms-2 fs-3"></span>
                        </div>
                        <p id="clockDate" class="fs-4"></p>
                        <span class="badge bg-primary fs-13">PHILIPPINE STANDARD TIME</span>
                    </div>
                    <div class="col-lg-3 align-self-end illustration">
                        <div class="pe-3">
                            <img src="<?= base_url() ?>public/images/user-illustarator-2.png" class="img-fluid" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <!-- end card-body-->
        </div>
    </div>
    <div class="col-xs-12 col-xxl-6">
        <blockquote class="blockquote custom-blockquote blockquote-outline blockquote-primary rounded py-3">
            <div class="row g-0">
                <div class="col-lg-4 quote-image">
                    <img id="background" class="rounded-start img-fluid h-100 object-cover" src="https://theysaidso.com/img/qod/qod-inspire.jpg" alt="QoD Image" />
                </div>
                <div class="col-xs-12 col-lg-8 qotd">
                    <div class="card-header">
                        <h3 class="fw-medium text-primary"> <i class="mdi mdi-clover text-primary me-2"></i> Quote of the Day!</h3>
                    </div>
                    <div class="card-body">
                        <p class="card-text">
                            <i class="bx bxs-quote-alt-left text-primary align-middle me-1"></i>
                            <span id="quote">The human mind and body are truly extraordinary. They are the quintessence of excellence in motion. We talk, touch, see, hear, taste, smell, and feel. We dream, aspire, and become. All that we are is mind and body and spirit-that is our universe. </span>
                            <i class="bx bxs-quote-alt-right text-primary align-middle ms-1"></i>
                        </p>
                        <footer id="author" class="text-end blockquote-footer mt-4 mb-0">Lorii Myers</footer>
                    </div>
                </div>
            </div>
        </blockquote>
    </div>
</div>

<div class="row">
    <div class="col-xl-12">
        <div class="card">
            <div class="card-header alert alert-primary border-0 rounded-top rounded-0 d-flex align-items-center" role="alert">
                <i class="ri-line-chart-line text-primary me-2 fs-20"></i>
                <span class="fw-bold fs-20 m-1">MANAGEMENT ANALYTICS IN myPUPQC</span>
            </div>
            <div class="card-body">
                <!-- Analytics for Users -->
                <div class="row">
                    <div class="col-xl-4">
                        <div class="card card-animate">
                            <div class="card-header alert alert-info border-0 rounded-top rounded-0 d-flex align-items-center" role="alert">
                                <i class="ri-line-chart-line text-info me-2 fs-20 fw-bold"></i>
                                <span class="fw-bold fs-15">Total Number of Users</span>
                            </div>
                            <div class="card-body">
                                <div id="chartNumberOne" class="d-flex align-items-center justify-content-center flex-column m-3 p-3"></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4">
                        <div class="card card-animate">
                            <div class="card-header alert alert-info border-0 rounded-top rounded-0 d-flex align-items-center" role="alert">
                                <i class="ri-line-chart-line text-info me-2 fs-20 fw-bold"></i>
                                <span class="fw-bold fs-15">Total Number of Students</span>
                            </div>
                            <div class="card-body">
                                <div id="chartNumberTwo" class="d-flex align-items-center justify-content-center flex-column m-3 p-3"></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4">
                        <div class="card card-animate">
                            <div class="card-header alert alert-info border-0 rounded-top rounded-0 d-flex align-items-center" role="alert">
                                <i class="ri-line-chart-line text-info me-2 fs-20 fw-bold"></i>
                                <span class="fw-bold fs-15">Total Number of PUP Staff</span>
                            </div>
                            <div class="card-body">
                                <div id="chartNumberThree" class="d-flex align-items-center justify-content-center flex-column m-3 p-3"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Analytics for Region and Blacklist -->
                <div class="row">
                    <div class="col-xl-6">
                        <div class="card card-animate">
                            <div class="card-header alert alert-info border-0 rounded-top rounded-0 d-flex align-items-center" role="alert">
                                <i class="ri-line-chart-line text-info me-2 fs-20 fw-bold"></i>
                                <span class="fw-bold fs-15">Donut Chart for Region</span>
                            </div>
                            <div class="card-body d-flex align-items-center justify-content-center">
                                <div id="chartNumberFour" style="width: 500px; height: 500px;"></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-6">
                        <div class="card card-animate">
                            <div class="card-header alert alert-info border-0 rounded-top rounded-0 d-flex align-items-center" role="alert">
                                <i class="ri-line-chart-line text-info me-2 fs-20 fw-bold"></i>
                                <span class="fw-bold fs-15">Donut Chart for Blacklist</span>
                            </div>
                            <div class="card-body d-flex align-items-center justify-content-center">
                                <div id="chartNumberFive" style="width: 500px; height: 500px;"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Analytics for UserRoles and Announcements -->
                <div class="row">
                    <div class="col-xl-6">
                        <div class="card card-animate">
                            <div class="card-header alert alert-info border-0 rounded-top rounded-0 d-flex align-items-center" role="alert">
                                <i class="ri-line-chart-line text-info me-2 fs-20 fw-bold"></i>
                                <span class="fw-bold fs-15">Donut Chart for User Roles</span>
                            </div>
                            <div class="card-body d-flex align-items-center justify-content-center">
                                <div id="chartNumberSix" style="width: 500px; height: 500px;"></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-6">
                        <div class="card card-animate">
                            <div class="card-header alert alert-info border-0 rounded-top rounded-0 d-flex align-items-center" role="alert">
                                <i class="ri-line-chart-line text-info me-2 fs-20 fw-bold"></i>
                                <span class="fw-bold fs-15">Donut Chart for Announcements</span>
                            </div>
                            <div class="card-body d-flex align-items-center justify-content-center">
                                <div id="chartNumberSeven" style="width: 500px; height: 500px;"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Analytics for Appointments/Requests/Reservations -->
                <div class="row">
                    <div class="col-xl-4">
                        <div class="card card-animate">
                            <div class="card-header alert alert-info border-0 rounded-top rounded-0 d-flex align-items-center" role="alert">
                                <i class="ri-line-chart-line text-info me-2 fs-20 fw-bold"></i>
                                <span class="fw-bold fs-15">Total Number of Appointments</span>
                            </div>
                            <div class="card-body">
                                <div id="chartNumberEight" class="d-flex align-items-center justify-content-center flex-column m-3 p-3"></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4">
                        <div class="card card-animate">
                            <div class="card-header alert alert-info border-0 rounded-top rounded-0 d-flex align-items-center" role="alert">
                                <i class="ri-line-chart-line text-info me-2 fs-20 fw-bold"></i>
                                <span class="fw-bold fs-15">Total Number of Requests</span>
                            </div>
                            <div class="card-body">
                                <div id="chartNumberNine" class="d-flex align-items-center justify-content-center flex-column m-3 p-3"></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4">
                        <div class="card card-animate">
                            <div class="card-header alert alert-info border-0 rounded-top rounded-0 d-flex align-items-center" role="alert">
                                <i class="ri-line-chart-line text-info me-2 fs-20 fw-bold"></i>
                                <span class="fw-bold fs-15">Total Number of Reservations</span>
                            </div>
                            <div class="card-body">
                                <div id="chartNumberTen" class="d-flex align-items-center justify-content-center flex-column m-3 p-3"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Analytics for 3 Years: Appointment (OMSSS)/Request (ODRTS)/Reservation (EVRSERS) -->
                <div class="row">
                    <div class="col-xl-4">
                        <div class="card card-animate">
                            <div class="card-header alert alert-info border-0 rounded-top rounded-0 d-flex align-items-center" role="alert">
                                <i class="ri-line-chart-line text-info me-2 fs-20 fw-bold"></i>
                                <span class="fw-bold fs-15">Appointment (OMSSS): 3 Years Data</span>
                            </div>
                            <div class="card-body d-flex align-items-center justify-content-center">
                                <div id="chartAppointment" style="width: 500px; height: 500px;"></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4">
                        <div class="card card-animate">
                            <div class="card-header alert alert-info border-0 rounded-top rounded-0 d-flex align-items-center" role="alert">
                                <i class="ri-line-chart-line text-info me-2 fs-20 fw-bold"></i>
                                <span class="fw-bold fs-15">Request (ODRTS): 3 Years Data</span>
                            </div>
                            <div class="card-body d-flex align-items-center justify-content-center">
                                <div id="chartRequest" style="width: 500px; height: 500px;"></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4">
                        <div class="card card-animate">
                            <div class="card-header alert alert-info border-0 rounded-top rounded-0 d-flex align-items-center" role="alert">
                                <i class="ri-line-chart-line text-info me-2 fs-20 fw-bold"></i>
                                <span class="fw-bold fs-15">Reservation (EVRSERS): 3 Years Data</span>
                            </div>
                            <div class="card-body d-flex align-items-center justify-content-center">
                                <div id="chartReservation" style="width: 500px; height: 500px;"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Analytics Comparion: All Systtms -->
                <div class="row">
                    <div class="col-xl-12">
                        <div class="card card-animate">
                            <div class="card-header alert alert-info border-0 rounded-top rounded-0 d-flex align-items-center" role="alert">
                                <i class="ri-line-chart-line text-info me-2 fs-20 fw-bold"></i>
                                <span class="fw-bold fs-15">Comparison of All Systems</span>
                            </div>
                            <div class="card-body d-flex align-items-center justify-content-center">
                                <div id="finalChart" style="width: 1500px; height: 500px;"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Analytics from ResearchCop-->
                <div class="card-header alert alert-primary border-0 rounded-top rounded-0 d-flex align-items-center" role="alert">
                    <i class="ri-line-chart-line text-primary me-2 fs-20"></i>
                    <span class="fw-bold fs-15 m-1">ResearchCop Dashboard Analytics</span>
                </div>

                <div class="row">

                <div class="col-xxl-3 col-sm-6">
                    <div class="card card-animate">
                        <div class="card-body">
                            <div class="d-flex justify-content-between">
                                <div>
                                    <p class="fw-medium text-muted mb-0">Submitted Researhes</p>
                                    <div id="ResearchchartOne">
                                    </div>
                                </div>
                                <div>
                                    <div class="avatar-sm flex-shrink-0">
                                        <span class="avatar-title bg-primary text-info rounded-circle fs-4">
                                            <i class="ri-upload-2-line text-light"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div><!-- end card body -->
                    </div> <!-- end card-->
                </div>

                <div class="col-xxl-3 col-sm-6">
                    <div class="card card-animate">
                        <div class="card-body">
                            <div class="d-flex justify-content-between">
                                <div>
                                    <p class="fw-medium text-muted mb-0">Approved Researches</p>
                                    <div id="ResearchchartTwo">
                                    </div>
                                </div>
                                <div>
                                    <div class="avatar-sm flex-shrink-0">
                                        <span class="avatar-title bg-primary text-info rounded-circle fs-4">
                                            <i class="ri-check-line text-light"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div><!-- end card body -->
                    </div> <!-- end card-->
                </div>

                <div class="col-xxl-3 col-sm-6">
                    <div class="card card-animate">
                        <div class="card-body">
                            <div class="d-flex justify-content-between">
                                <div>
                                    <p class="fw-medium text-muted mb-0">Rejected Researches</p>
                                    <div id="ResearchchartThree">
                                    </div>
                                </div>
                                <div>
                                    <div class="avatar-sm flex-shrink-0">
                                        <span class="avatar-title bg-primary text-info rounded-circle fs-4">
                                            <i class="ri-close-fill text-light"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div><!-- end card body -->
                    </div> <!-- end card-->
                </div>

                <div class="col-xxl-3 col-sm-6">
                    <div class="card card-animate">
                        <div class="card-body">
                            <div class="d-flex justify-content-between">
                                <div>
                                    <p class="fw-medium text-muted mb-0">Pending Researhes</p>
                                    <div id="ResearchchartFour">
                                    </div>
                                </div>
                                <div>
                                    <div class="avatar-sm flex-shrink-0">
                                        <span class="avatar-title bg-primary text-info rounded-circle fs-4">
                                            <i class="ri-time-line text-light"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div><!-- end card body -->
                    </div> <!-- end card-->
                </div>

                <div class="col-xxl-3 col-sm-6">
                    <div class="card card-animate">
                        <div class="card-body">
                            <div class="d-flex justify-content-between">
                                <div>
                                    <p class="fw-medium text-muted mb-0">Copyright Document for Review</p>
                                    <div id="ResearchchartFive">
                                    </div>
                                </div>
                                <div>
                                    <div class="avatar-sm flex-shrink-0">
                                        <span class="avatar-title bg-primary text-info rounded-circle fs-4">
                                            <i class="ri-copyright-line text-light"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div><!-- end card body -->
                    </div> <!-- end card-->
                </div>

                <div class="col-xxl-3 col-sm-6">
                    <div class="card card-animate">
                        <div class="card-body">
                            <div class="d-flex justify-content-between">
                                <div>
                                    <p class="fw-medium text-muted mb-0">Copyright Document Approved</p>
                                    <div id="ResearchchartSix">
                                    </div>
                                </div>
                                <div>
                                    <div class="avatar-sm flex-shrink-0">
                                        <span class="avatar-title bg-primary text-info rounded-circle fs-4">
                                            <i class="ri-check-line text-light"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div><!-- end card body -->
                    </div> <!-- end card-->
                </div>

            </div>
            <!-- Donut Chart for ResearchCop -->
                <div class="row">
                    <div class="col-xl-6">
                        <div class="card card-animate">
                            <div class="card-header alert alert-info border-0 rounded-top rounded-0 d-flex align-items-center" role="alert">
                                <i class="ri-line-chart-line text-info me-2 fs-20 fw-bold"></i>
                                <span class="fw-bold fs-15">Research Programs</span>
                            </div>
                            <div class="card-body d-flex align-items-center justify-content-center">
                                <div id="ResearchdonutChartOne" style="width: 500px; height: 500px;"></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-6">
                        <div class="card card-animate">
                            <div class="card-header alert alert-info border-0 rounded-top rounded-0 d-flex align-items-center" role="alert">
                                <i class="ri-line-chart-line text-info me-2 fs-20 fw-bold"></i>
                                <span class="fw-bold fs-15">Research V.S Capstone</span>
                            </div>
                            <div class="card-body d-flex align-items-center justify-content-center">
                                <div id="ResearchdonutChartTwo" style="width: 500px; height: 500px;"></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-6">
                        <div class="card card-animate">
                            <div class="card-header alert alert-info border-0 rounded-top rounded-0 d-flex align-items-center" role="alert">
                                <i class="ri-line-chart-line text-info me-2 fs-20 fw-bold"></i>
                                <span class="fw-bold fs-15">Research Statuses</span>
                            </div>
                            <div class="card-body d-flex align-items-center justify-content-center">
                                <div id="ResearchdonutChartThree" style="width: 500px; height: 500px;"></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-6">
                        <div class="card card-animate">
                            <div class="card-header alert alert-info border-0 rounded-top rounded-0 d-flex align-items-center" role="alert">
                                <i class="ri-line-chart-line text-info me-2 fs-20 fw-bold"></i>
                                <span class="fw-bold fs-15">Copyright Statuses</span>
                            </div>
                            <div class="card-body d-flex align-items-center justify-content-center">
                                <div id="ResearchdonutChartFour" style="width: 500px; height: 500px;"></div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    </div>
</div>
