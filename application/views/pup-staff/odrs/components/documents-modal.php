<!-- ADD DOCUMENT MODAL -->
<div id="addDocumentModal" class="modal fade" tabindex="-1" aria-hidden="true" style="display: none">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content px-4 border-0 overflow-hidden">
      <div class="modal-header">
        <h5 class="modal-title">
          <i class="ri-file-list-3-fill me-1"></i>
          Add Document
        </h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body py-4">
        <form id="addDocumentForm" class="needs-validation" novalidate>
          <div class="mb-3">
            <label for="adocument_name" class="form-label">Document Name <span class="text-danger">*</span></label>
            <input type="text" id="document_name" name="document_name" class="form-control" placeholder="Enter the name of the Document" required>
            <div class="invalid-feedback">
              Please enter the Document's Name.
            </div>
          </div>
          <div class="mb-3">
            <label for="document_type" class="form-label">Document Type <span class="text-danger">*</span></label>
            <select id="document_type" name="document_type" class="form-control" required>
              <option value="" selected disabled>Select the Type of the Document</option>
              <option value="Transcript of Records">Transcript of Records</option>
              <option value="Certifications">Certifications</option>
              <option value="Unclaimed">Unclaimed</option>
              <option value="CAV">CAV (CHED/DFA/WES/CES)</option>
            </select>
            <div class="invalid-feedback">
              Please select the Document's Type.
            </div>
          </div>
          <div class="mb-3">
            <label for="document_details" class="form-label">Document Details <span class="text-danger">*</span></label>
            <textarea id="document_details" name="document_details" class="form-control" rows="3" placeholder="Enter additional details about the Document" required></textarea>
            <div class="invalid-feedback">
              Please enter the Document's Details.
            </div>
          </div>
          <div class="mb-3">
            <div class="d-flex justify-content-between align-items-center mb-3">
              <label class="form-label mb-0">Document Requirements</label>
              <a href="javascript:new_link('add')" class="btn btn-success py-1 rounded-pill">Add New</a>
            </div>
            <div id="add_document_requirements_list">
            </div>
            <div id="add_newForm" style="display: none;">
            </div>
          </div>
          <button type="submit" class="btn btn-primary w-100 mt-3 bg-gradient">Submit</button>
        </form>
      </div>
    </div>
    <!-- /.modal-content -->
  </div>
  <!-- /.modal-dialog -->
</div>
<!-- /.modal -->

<!-- VIEW DOCUMENT MODAL -->
<div id="viewDocumentModal" class="modal fade" tabindex="-1" aria-hidden="true" style="display: none">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content border-0 overflow-hidden" style="background: url('<?= base_url() ?>public/images/chat-bg-pattern.png') rgb(255, 255, 255);">
      <div class="modal-body login-modal p-5">
        <h5 class="text-white text-center fs-20" id="view_document_name">
        </h5>
      </div>
      <div class="modal-body px-5 pt-5">
        <span class="badge badge-soft-dark fs-15 mb-3"> <i class="ri-folder-4-line me-2"></i> Type</span>
        <p class="mb-4" id="view_document_type"></p>
        <span class="badge badge-soft-dark fs-15 mb-3"> <i class="ri-file-list-3-line me-2"></i> Details</span>
        <p class="mb-4" id="view_document_details"></p>
        <span class="badge badge-soft-dark fs-15 mb-3"> <i class="ri-suitcase-line me-2"></i> Requirements</span>
        <p id="view_document_requirements" class="mx-3"></p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger btn-animation waves-effect waves-light fs-13" data-text="Close" data-bs-dismiss="modal"><span>Close</span></button>
      </div>
    </div>
    <!-- /.modal-content -->
  </div>
  <!-- /.modal-dialog -->
</div>
<!-- /.modal -->

<!-- UPDATE DOCUMENT MODAL -->
<div id="updateDocumentModal" class="modal fade" tabindex="-1" aria-hidden="true" style="display: none">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content px-4 border-0 overflow-hidden">
      <div class="modal-header">
        <h5 class="modal-title">
          <i class="ri-file-edit-fill me-1"></i>
          Update Document
        </h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body py-4">
        <form id="editDocumentForm" class="needs-validation" novalidate>
          <div class="mb-3">
            <label for="document_name" class="form-label">Document Name <span class="text-danger">*</span></label>
            <input type="text" id="document_name" name="document_name" class="form-control" placeholder="Enter the name of the Document" value="Informative Copy of Grades / Certified Copy of Grades" required>
            <div class="invalid-feedback">
              Please enter the Document's Name.
            </div>
          </div>
          <div class="mb-3">
            <label for="document_type" class="form-label">Document Type <span class="text-danger">*</span></label>
            <select id="document_type" name="document_type" class="form-control" required>
              <option value="" selected disabled>Select the Type of the Document</option>
              <option value="Transcript of Records">Transcript of Records</option>
              <option value="Certifications" selected>Certifications</option>
              <option value="Unclaimed">Unclaimed</option>
              <option value="CAV">CAV (CHED/DFA/WES/CES)</option>
            </select>
            <div class="invalid-feedback">
              Please select the Document's Type.
            </div>
          </div>
          <div class="mb-3">
            <label for="document_details" class="form-label">Document Details <span class="text-danger">*</span></label>
            <textarea id="document_details" name="document_details" class="form-control" rows="3" placeholder="Enter additional details about the Document" required>For transfer to other school or scholarship</textarea>
            <div class="invalid-feedback">
              Please enter the Document's Details.
            </div>
          </div>
          <div class="mb-3">
            <div class="d-flex justify-content-between align-items-center mb-3">
              <label class="form-label mb-0">Document Requirements</label>
              <a href="javascript:new_link('edit')" class="btn btn-success py-1 rounded-pill">Add New</a>
            </div>
            <div id="edit_document_requirements_list">
            </div>
            <div id="edit_newForm" style="display: none;">
            </div>
          </div>
          <button type="submit" class="btn btn-primary w-100 mt-3 bg-gradient">Submit</button>
        </form>
      </div>
    </div>
    <!-- /.modal-content -->
  </div>
  <!-- /.modal-dialog -->
</div>