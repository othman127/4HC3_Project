moreSettingsBtn = document.getElementById("moreSettingsBtn");
moreSettingsContent = document.getElementById("moreSettingsContent");
moreSettingsOpen = false;
moreSettingsHTML = `<div class="row">
							<div class="col-md-4">
							    <label class="moreSettingsLabel" for="schoolTb">School</label>
								</br>
							    <input type="text" class="form-control" placeholder="Enter school">
							</div>
						</div>
						<div class="row">
							<div class="col-md-4">
							    <label class="moreSettingsLabel" for="schoolTb">Program</label>
							    </br>
							    <input type="text" class="form-control" placeholder="Enter program">
							</div>
						</div>
						<div class="row">
							<div class="col-md-4">
							    <label class="moreSettingsLabel" for="quantity">Age</label>
								</br>
								<p>
								<input type="number" id="quantity" min="18" max="150">
								to
								<input type="number" id="quantity" min="18" max="150">
								</p>
							</div>
						</div>

						<div class="row">
							<div class="col-md-4">
								<label class="moreSettingsLabel" for="loc">Location</label>
								</br>
								<div class="well" id="loc" style="max-height: 300px;overflow: auto;">
									<ul class="list-group checked-list-box">
										<li class="list-group-item">
											<div class="custom-control custom-checkbox">
												<input type="checkbox" class="custom-control-input" id="loc1">
												<label class="custom-control-label" for="loc1">Near Me</label>
											</div>
										</li>
										<li class="list-group-item">
											<div class="custom-control custom-checkbox">
												<input type="checkbox" class="custom-control-input" id="loc2">
												<label class="custom-control-label" for="loc2">U.S. East</label>
											</div>
										</li>
										<li class="list-group-item">
											<div class="custom-control custom-checkbox">
												<input type="checkbox" class="custom-control-input" id="loc2">
												<label class="custom-control-label" for="loc2">U.S. Central</label>
											</div>
										</li>
										<li class="list-group-item">
											<div class="custom-control custom-checkbox">
												<input type="checkbox" class="custom-control-input" id="loc2">
												<label class="custom-control-label" for="loc2">U.S. West</label>
											</div>
										</li>
										<li class="list-group-item">
											<div class="custom-control custom-checkbox">
												<input type="checkbox" class="custom-control-input" id="loc2">
												<label class="custom-control-label" for="loc2">South America</label>
											</div>
										</li>
										<li class="list-group-item">
											<div class="custom-control custom-checkbox">
												<input type="checkbox" class="custom-control-input" id="loc2">
												<label class="custom-control-label" for="loc2">Europe</label>
											</div>
										</li>
										<li class="list-group-item">
											<div class="custom-control custom-checkbox">
												<input type="checkbox" class="custom-control-input" id="loc2">
												<label class="custom-control-label" for="loc2">Asia</label>
											</div>
										</li>
									</ul>
								</div>
							</div>
						</div>`;

function toggleMoreSettings() {
	moreSettingsOpen = !moreSettingsOpen;
	if(moreSettingsOpen){
		moreSettingsBtn.textContent = "Less Settings";
		moreSettingsBtn.className = "btn btn-light myBtns"
		moreSettingsContent.innerHTML = moreSettingsHTML;
	}
	else {
		moreSettingsBtn.textContent = "More Settings";
		moreSettingsBtn.className = "btn btn-primary myBtns"
		moreSettingsContent.innerHTML = '';
	}
}