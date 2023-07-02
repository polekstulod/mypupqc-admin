<body>
    <div class="auth-page-wrapper pt-5">
        <!-- auth page bg -->
        <div class="auth-one-bg-position  auth-one-bg">
            <div class="bg-overlay"></div>
        </div>

        <!-- auth page content -->
        <div class="auth-page-content">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="text-center mt-sm-4 text-white-50">
                            <div>
                                <a href="<?= base_url() ?>" class="d-inline-block auth-logo">
                                    <img src="<?= base_url() ?>public/images/PUPLogo (1).webp" height="100    ">
                                    <br>
                                    <img src="<?= base_url() ?>public/images/logo-light.png" alt="" height="60">
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- end row -->

                <div class="row justify-content-center">
                    <div class="col-md-8 col-lg-6 col-xl-5">
                            <div class="text-white card-body p-4">
                                <div class="text-center p-2">
                                    <p class="">Sign in to continue to myPUPQC's Admin Portal</p>
                                </div>
                                <div class="p-2">
                                    <form id="signin_form" class="needs-validation" novalidate action="<?= base_url() ?>student/dashboard">

                                        <div class="mb-3">
                                            <label for="user_no" class="form-label">Admin Account <span class="text-danger">*</span></label>
                                            <input type="text" class="form-control" id="user_no" name="user_no" placeholder="Enter Admin Account" required>
                                            <div class="invalid-feedback">
                                                Please enter Admin Account
                                            </div>
                                        </div>
                                        <div class="mb-3">
                                            <label class="form-label" for="password">Password <span class="text-danger">*</span></label>
                                            <div class="position-relative auth-pass-inputgroup">
                                                <input type="password" class="form-control pe-5 password-input" onpaste="return false" placeholder="Enter Password" id="password" name="password" required>
                                                <button class="btn btn-link position-absolute end-0 top-0 text-decoration-none  password-addon" type="button" id="password-addon"><i class="ri-eye-off-fill align-middle" id="toggle-password"></i></button>
                                                <div class="invalid-feedback">
                                                    Please enter Password
                                                </div>
                                            </div>
                                        </div>

                                        <div class="mb-4">
                                            <div class="row">

                                                <div class="col-12 text-end">
                                                    <a href="<?= base_url() ?>forgot-password" class="fw-semibold text-info">Forgot password?</a>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="mt-4">
                                            <button id="signin" class="btn btn-primary w-100" type="submit">Sign In</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <!-- end card body -->
                        
                        <!-- end card -->
                    </div>
                </div>
                <!-- end row -->
            </div>
            <!-- end container -->
        </div>
        <!-- end auth page content -->

        <!-- footer -->
        <footer class="footer">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="text-white text-center">
                            <p class="mb-0">&copy; <span id="year"></span> POLYTECHNIC UNIVERSITY OF THE PHILIPPINES - QUEZON CITY BRANCH</p>
                            <script>
                                document.getElementById("year").innerHTML = new Date().getFullYear();
                            </script>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <!-- end Footer -->
    </div>
    <!-- end auth-page-wrapper -->