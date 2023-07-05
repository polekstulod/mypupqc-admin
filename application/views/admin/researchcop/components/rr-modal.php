<!--View Research Record Modal-->
<div class="modal fade" id="viewResearchRecord" tabindex="-1" role="dialog" aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-scrollable">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalScrollableTitle">
                    Research Information
                </h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div data-simplebar class="mx-n3">
                    <ul class="list list-group list-group-flush mb-0">

                        <!-- end list item -->
                        <li class="list-group-item">
                            <div class="d-flex align-items-center">
                                <div class="col-4">
                                    <h5 class="fs-13 mb-1 fw-medium">Title</h5>
                                </div>
                                <div class="col-8">
                                    <div class="d-flex fs-13 fw-medium">
                                        <div class="d-flex fs-13 fw-medium" id="view_research_title"></div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <!-- end list item -->
                        <li class="list-group-item">
                            <div class="d-flex align-items-center">
                                <div class="col-4">
                                    <h5 class="fs-13 mb-1">Adviser</h5>
                                </div>
                                <div class="d-flex fs-13 fw-medium">
                                    <div class="d-flex fs-13 fw-medium" id="view_research_adviser"></div>
                                </div>
                            </div>
                        </li>
                        <!-- end list item -->
                        <li class="list-group-item">
                            <div class="d-flex align-items-center">
                                <div class="col-4">
                                    <h5 class="fs-13 mb-1">Status</h5>
                                </div>
                                <div class="d-flex fs-13 fw-medium">
                                <div class="d-flex fs-13 fw-medium"><span class="badge rounded-pill bg-success">Approved</span></div>
                                </div>
                            </div>
                        </li>
                        <!-- end list item -->
                        <li class="list-group-item">
                            <div class="d-flex align-items-center">
                                <div class="col-4">
                                    <h5 class="fs-13 mb-1">Abstract</h5>
                                </div>
                                <div class="d-flex fs-13 fw-medium">
                                <div class="d-flex fs-13 fw-medium" id="view_research_abstract"></div>
                                </div>
                            </div>
                        </li>
                        <!-- end list item -->
                    </ul>
                    <!-- end ul list -->
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-light" data-bs-dismiss="modal">
                    Close
                </button>
            </div>
        </div>
        <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog -->
</div>

<div class="modal fade" id="deleteResearchRecord" tabindex="-1" role="dialog" aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-scrollable">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalScrollableTitle">
                    Confirm Delete
                </h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div data-simplebar class="mx-n3">
                    <ul class="list list-group list-group-flush mb-0">
                        <li class="list-group-item">
                            <div class="d-flex align-items-center">
                                <h5 class="fs-13 mb-1 fw-medium">Do you want to delete this record? This cannot be undone.</h5>
                            </div>
                        </li>
                    </ul>
                    <!-- end ul list -->
                </div>
            </div>
            <div class="modal-footer">
            <div class="swal2-actions" style="display: flex, align-items: center;"><div class="swal2-loader"></div>
            <button type="button" class="swal2-confirm btn btn-primary w-xs me-2 mb-1" aria-label="" style="display: inline-block;">Delete</button>
            <button type="button" class="swal2-cancel btn btn-light w-xs mb-1" data-bs-dismiss="modal" aria-label=""style="display: inline-block;">Cancel</button></div>
            </div>
        </div>
        <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog -->
</div>

<!-- Delete Research modal -->
<div id="deleteResearchModal" class="modal fade" tabindex="-1" aria-hidden="true" style="display: none">
    <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content border-0 overflow-hidden">
            <div class="modal-header p-3">
                <h4 class="card-title mb-0">Archive Research</h4>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <div class="modal-body">
                <form id="deleteResearchForm" class="needs-validation" novalidate>
                    <div class="mb-3">
                        <input type="hidden" id="edit_research_id" name="edit_research_id">
                        <input type="hidden" id="r_checked_by" name="r_checked_by">
                        <h4 class="fs-15">Research Title:</h4>
                        <div class="text-muted" id="r_title2" name="r_title2"></div>
                    </div>
                    <div class="mb-3">
                        <h4 class="fs-15">Checked by:</h4>
                        <div class="text-muted" id="r_checked_by2" name="r_checked_by2"></div>
                    </div>
                    <div class="mb-3">
                        <label for="r_remarks" class="form-label">Remarks<span class="text-danger">*</span></label>
                        <input type="text" class="form-control" id="r_remarks" name="r_remarks" placeholder="State the Remarks." required />
                    </div>
                    <div class="text-end">
                        <button type="submit" class="btn btn-primary">Move to Archives</button>
                    </div>
                </form>
            </div>
        </div>
        <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog -->
</div>

