const Contact = () => {
	return (
		<section id="contact" className="overflow-hidden">
			<div className="container">
				<div className="-mx-4 flex flex-wrap">
					<div className="w-full px-4 lg:w-7/12 xl:w-8/12">
						<div
							className="wow fadeInUp mb-12 rounded-2xl py-11 px-8 bg-primary/10 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
							data-wow-delay=".15s
              "
						>
							<h2 className="mb-3 text-2xl font-bold text-white sm:text-3xl lg:text-2xl xl:text-3xl">
								Contact us
							</h2>
							<p className="mb-12 text-base font-medium text-body-color"></p>
							<form>
								<div className="-mx-4 flex flex-wrap">
									<div className="w-full px-4 md:w-1/2">
										<div className="mb-8">
											<label
												htmlFor="name"
												className="mb-3 block text-sm font-medium text-white"
											>
												Your Name
											</label>
											<input
												type="text"
												placeholder="Enter your name"
												className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color outline-none focus:border-primary focus-visible:shadow-none bg-primary/15 shadow-signUp"
											/>
										</div>
									</div>
									<div className="w-full px-4 md:w-1/2">
										<div className="mb-8">
											<label
												htmlFor="email"
												className="mb-3 block text-sm font-medium text-white"
											>
												Your Email
											</label>
											<input
												type="email"
												placeholder="Enter your email"
												className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color outline-none focus:border-primary focus-visible:shadow-none bg-primary/15 shadow-signUp"
											/>
										</div>
									</div>
									<div className="w-full px-4">
										<div className="mb-8">
											<label
												htmlFor="message"
												className="mb-3 block text-sm font-medium text-white"
											>
												Your Message
											</label>
											<textarea
												name="message"
												rows="5"
												placeholder="Enter your Message"
												className="w-full resize-none rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color outline-none focus:border-primary focus-visible:shadow-none bg-primary/15 shadow-signUp"
											></textarea>
										</div>
									</div>
									<div className="w-full px-4">
										<button className="rounded-2xl shadow-md bg-dark  py-4 px-10 text-base font-semibold text-white duration-300 ease-in-out hover:translate-y-[-2px] hover:shadow-lg">
											Submit
										</button>
									</div>
								</div>
							</form>
						</div>
					</div>
					<div className="w-full px-4 lg:w-5/12 xl:w-4/12">
						<div
							className="wow fadeInUp relative z-10 rounded-2xl p-8 bg-primary/10 sm:p-11 lg:p-8 xl:p-11"
							data-wow-delay=".2s"
						>
							<h3 className="mb-4 text-2xl font-bold leading-tight text-white">
								Contact
							</h3>
							<p className="mb-11 border-b pb-3 text-base font-medium leading-relaxed text-body-color border-white border-opacity-25">
								You can contact us at the following addresses:
							</p>
							<p className="mb-11 pb-3 text-base font-medium leading-relaxed text-body-color border-white border-opacity-25">
								Secretary-General: +90 535 567 1139
								<br/>
								{}
								<br/>
								E-Mail: <a href="mailto:altunbetulece8@gmail.com">altunbetulece8@gmail.com</a>
								<br/>
								Instagram: <a href="https://www.instagram.com/rayfelmun/">@rayfelmun</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
