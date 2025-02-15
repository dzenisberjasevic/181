

import bg from '../img/181keepersbg.png'
const Home=()=>{
return(
   
<>




<section class="ftco-section">
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-md-6 text-center mb-5">
					<h2 class="heading-section"><span style={{color:"#d42228", fontWeight:"bold"}}>18</span><span style={{color:"#009846", fontWeight:"bold"}}>1</span> Keepers Montenegro</h2>
				</div>
			</div>
			<div class="row justify-content-center">
				<div class="col-md-12">
					<div class="wrapper">
						<div class="row mb-5">
							<div class="col-md-3">
								<div class="dbox w-100 text-center">
			        		<div class="icon d-flex align-items-center justify-content-center">
			        			<span class="fa fa-map-marker"></span>
			        		</div>
			        		<div class="text">
				            <p style={{color:"#009846"}}><span>Address:</span> Ulcinj,Montenegro</p>
				          </div>
			          </div>
							</div>
							<div class="col-md-3">
								<div class="dbox w-100 text-center">
			        		<div class="icon green d-flex align-items-center justify-content-center">
			        			<span class="fa fa-phone"></span>
			        		</div>
			        		<div class="text">
				            <p><span>Phone:</span> <a style={{color:"#d42228"}} href="tel://+38269253061">+382 69 253 061</a></p>
				          </div>
			          </div>
							</div>
							<div class="col-md-3">
								<div class="dbox w-100 text-center">
			        		<div class="icon d-flex align-items-center justify-content-center">
			        			<span class="fa fa-paper-plane"></span>
			        		</div>
			        		<div class="text">
				            <p><span>Email:</span> <a style={{color:"#009846"}} href="mailto:xhb181keepers@gmail.com"> xhb181keepers@gmail.com</a></p>
				          </div>
			          </div>
							</div>
							<div class="col-md-3">
								<div class="dbox w-100 text-center">
			        		<div class="icon green d-flex align-items-center justify-content-center">
			        			<span class="fa fa-globe"></span>
			        		</div>
			        		<div class="text">
				            <p><span>Website:</span> <a style={{color:"#d42228"}} href="#">181keepers.me</a></p>
				          </div>
			          </div>
							</div>
						</div>
						<div class="row no-gutters">
							<div class="col-md-7">
								<div class="contact-wrap w-100 p-md-5 p-4">
									<h3 class="mb-4">Order now</h3>
									<div id="form-message-warning" class="mb-4"></div> 
				      		<div id="form-message-success" class="mb-4">
				            Your message was sent, thank you!
				      		</div>
									<form method="POST" id="contactForm" name="contactForm" class="contactForm">
										<div class="row">
											<div class="col-md-6">
												<div class="form-group">
													<label class="label" for="name">First Name</label>
													<input type="text" class="form-control" name="name" id="name" placeholder="First Name"/>
												</div>
											</div>
											<div class="col-md-6"> 
												<div class="form-group">
													<label class="label" for="email">Last Name</label>
													<input type="email" class="form-control" name="email" id="email" placeholder="Last Name"/>
												</div>
											</div>
											<div class="col-md-12">
												<div class="form-group">
													<label class="label" for="subject">Email </label>
													<input type="text" class="form-control" name="subject" id="subject" placeholder="Email"/>
												</div>
											</div>
											<div class="col-md-12">
												<div class="form-group">
													<label class="label" for="subject">City </label>
													<input type="text" class="form-control" name="subject" id="subject" placeholder="City"/>
												</div>
											</div>
											<div class="col-md-12">
												<div class="form-group">
													<label class="label" for="subject">Country </label>
													<input type="text" class="form-control" name="subject" id="subject" placeholder="Country"/>
												</div>
											</div>
											<div class="col-md-12">
												<div class="form-group">
													<label class="label" for="subject">Adress </label>
													<input type="text" class="form-control" name="subject" id="subject" placeholder="Adress"/>
												</div>
											</div>
											<div class="col-md-12">
												<div class="form-group">
													<label class="label" for="subject">Postal Code </label>
													<input type="text" class="form-control" name="subject" id="subject" placeholder="Postal Code"/>
												</div>
											</div>
											<div class="col-md-12">
												<div class="form-group">
													<label class="label" for="subject">Color </label>
													<input type="text" class="form-control" name="subject" id="subject" placeholder="Color"/>
												</div>
											</div>
											<div class="col-md-12">
												<div class="form-group">
													<label class="label" for="#">Message</label>
													<textarea name="message" class="form-control" id="message" cols="30" rows="4" placeholder="Message"></textarea>
												</div>
											</div>
											<div class="col-md-12">
												<div class="form-group">
													<input className='btn submitbtn' type="submit" value="Send Message" />
													<div class="submitting"></div>
												</div>
											</div>
										</div>
									</form>
								</div>
							</div>
							<div class="col-md-5 d-flex align-items-stretch">
								<div class="info-wrap w-100  img bgdiv" >
									<img className='bgphoto' src={bg} alt="181 Keepers Montenegro" />
			          </div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>




</>

    
)
}

export default Home;