<template>
	<!-- hero section -->
	<div class="relative h-screen">
		<img
			src="../assets/Rectangle.png"
			alt="Rectangle photo"
			class="absolute h-full w-full object-cover object-top"
		/>
		<!-- overlay -->
		<div class="absolute bg-gradient-to-r from-black/90 to-black/20 inset-0"></div>

		<div class="relative z-10 container mx-auto">
			<!-- navigation -->
			<div class="flex justify-between items-center py-2 whitespace-nowrap">
				<!-- logo -->
				<a href="/">
					<span class="sr-only">Digital Self</span>
					<img src="../assets/Digital Self.png" alt="dijital self logo" />
				</a>

				<!-- nav links -->
				<nav class="hidden xl:flex justify-center items-center space-x-5 text-white py-4">
					<a href="#">Pricing</a>

					<a href="#">Manage Group</a>

					<a href="#">Control Your Career</a>

					<a href="#">Lead challenges</a>

					<a href="#">upcoming challenges</a>

					<a href="#">support</a>
				</nav>

				<div class="text-white space-x-5 items-center flex">
					<button
						class="border border-d-yellow hover:bg-d-yellow rounded-full px-3 pb-0.5 hidden lg:block"
					>free sign-up</button>
					<button class="border border-d-yellow hover:bg-d-yellow rounded-full px-3 pb-0.5">login</button>

					<button type="button" class="text-d-yellow lg:hidden" aria-expanded="false">
						<span class="sr-only">Open menu</span>
						<svg
							class="h-6 w-6"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4 6h16M4 12h16M4 18h16"
							/>
						</svg>
					</button>
				</div>
				<!-- mobile menu button -->
			</div>
			<!-- nav links for medium desplay -->

			<nav class="hidden md:flex xl:hidden items-center space-x-5 text-white m-4">
				<a href="#">Pricing</a>

				<a href="#">Manage Group</a>

				<a href="#">Control Your Career</a>

				<a href="#">Lead challenges</a>

				<a href="#">upcoming challenges</a>

				<a href="#">support</a>
			</nav>

			<!-- navigation for mobile -->
			<div
				class="absolute top-0 inset-x-0 z-10 p-2 transition transform origin-top-right md:hidden hidden"
			>
				<div
					class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50"
				>
					<div class="pt-5 pb-6 px-5">
						<div class="flex items-center justify-between">
							<div class="-mr-2">
								<button
									type="button"
									class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
								>
									<span class="sr-only">Close menu</span>
									<!-- Heroicon name: outline/x -->
									<svg
										class="h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M6 18L18 6M6 6l12 12"
										/>
									</svg>
								</button>
							</div>
						</div>
					</div>
					<div class="py-6 px-5 space-y-6">
						<div class="grid grid-cols-2 gap-y-4 gap-x-8">
							<a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700">Pricing</a>
						</div>
						<div>
							<a
								href="#"
								class="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-d-yellow hover:bg-d-yellow/50"
							>Sign up</a>
							<p class="mt-6 text-center text-base font-medium text-gray-500">
								Existing customer?
								<a href="#" class="text-d-yellow hover:text-d-yellow/50">Sign in</a>
							</p>
						</div>
					</div>
				</div>
			</div>
			<!-- hero content -->
			<div class="flex mt-4 px-10 h-[calc(100vh-146px)] xl:h-[calc(100vh-100px)]">
				<!-- description -->
				<div class="text-white w-full md:w-1/2 flex justify-center items-center">
					<div class="space-y-8 w-[500px]">
						<h1 class="font-semibold text-4xl">
							Discover The True Potential Of You And Your People
							<span class="text-d-yellow">Remotely</span> !
						</h1>
						<p
							class="text-[18px]"
						>Do you want a way to easily manage, understand and engage your group remotely ? to create awesome challenges for them? A way to take control of your career ?</p>

						<button class="border bg-white text-d-yellow rounded-full px-3 pb-0.5">Free Consultation</button>
					</div>
				</div>

				<!-- dashboard -->
				<div class="hidden md:flex w-1/2 justify-center items-end">
					<img src="../assets/Template-Flat-Presentation.png" class="w-[564px] mb-20" />
				</div>
			</div>
		</div>
	</div>
	<!-- why hiring us -->
	<div class="flex flex-col lg:flex-row bg-gray-100">
		<div class="w-full lg:w-1/2 h-[calc(100vh/2)] lg:h-screen relative">
			<div class="bg-d-yellow h-1/2 w-full lg:h-full lg:w-1/2"></div>
			<div class="absolute top-0 w-full h-full flex justify-center items-center">
				<img src="../assets/Rectangle68.png" alt="why hiring us image" class="h-4/5" />
			</div>
		</div>
		<div class="flex justify-center items-center lg:w-1/2 px-10 mt-5">
			<div class="pb-10">
				<div>
					<h3 class="text-4xl">Why Hiring Us</h3>
					<span class="bg-d-yellow ml-2 h-1.5 w-5 rounded-l-md inline-block"></span>
					<span class="bg-d-yellow ml-4 h-1.5 w-20 rounded-r-md inline-block"></span>
				</div>
				<h4 class="text-2xl mt-8">
					You are accountable for knowing the information needed to
					stay connected with your professional
					<span
						class="text-d-yellow"
					>community</span>
					as well as with your own professional self!
				</h4>
				<p class="mt-8">
					In addition to
					<b>productivity</b> and
					<b>morale</b>, the strength of the
					<b>leadership and team connection</b>
					can impact
					<b>how team members view their value</b> in your organization.
				</p>
				<p class="mt-2">
					If there is
					<b>not a strong connection</b>, there's a good chance members will not feel
					connected to leadership or the organization, which can ultimately
					<b>lead a high turnover rate</b>!
				</p>
				<button
					class="border-2 font-semibold bg-gray-900 text-white rounded-full px-3 mt-8 py-0.5"
				>Free Consultation</button>
			</div>
		</div>
	</div>
	<!-- What we Offer -->
	<div class="flex flex-col lg:flex-row p-10 container mx-auto">
		<div class="flex justify-center items-center lg:w-1/2 mt-5">
			<div class="pb-10 text-center lg:text-left">
				<h3 class="text-4xl">What we Offer</h3>
				<span class="bg-d-yellow ml-2 h-1.5 w-5 rounded-l-md inline-block"></span>
				<span class="bg-d-yellow ml-4 h-1.5 w-20 rounded-r-md inline-block"></span>

				<h4 class="text-2xl mt-8">You Need A Way to Become and Remain Engaged!</h4>
				<h4
					class="text-2xl mt-8 text-d-yellow"
				>How Well Do You Really Know Your Team? How Self Aware Are You?</h4>
				<p class="mt-8">
					The world is changing... we don't get to interact with our teams, partners and groups in familiar ways
					With more highly distributed teams of both nationally & worldwide,
				</p>
				<p class="mt-2">
					<b>
						the need to know your people to drive
						optimal performance is critical to success.
					</b>
				</p>
			</div>
		</div>
		<div class="w-full lg:w-1/2 lg:pl-10 flex justify-center items-center">
			<img src="../assets/offer.png" alt="why hiring us image" />
		</div>
	</div>
	<div class="flex flex-wrap justify-center gap-4 py-10">
		<div class="bg-white relative shadow-md border overflow-hidden rounded-lg p-8 group">
			<div class="flex items-center">
				<img src="../assets/manage teams remotly.png" alt="manage teams remotly" />
				<h4 class="text-xl font-semibold w-40 ml-4">
					Manage Teams
					Remotely
				</h4>
			</div>
			<ul class="mt-4 list-disc w-60 mx-auto text-gray-600">
				<li class>Know who embraces the culture</li>
				<li>Identify the best for task delegation</li>
				<li>Understand a teams' diverse voice</li>
				<li>Cultivate team continuity daily</li>
				<li>Identify ways to inspire motivation</li>
				<li>Identify struggling team members</li>
				<li>Know areas to assist professional</li>
				<li>growth</li>
			</ul>
			<span class="absolute bottom-0 inset-x-0 bg-[#A65511] h-2 hidden group-hover:block"></span>
		</div>
		<div class="bg-white relative shadow-md border overflow-hidden rounded-lg p-8 group">
			<div class="flex items-center">
				<img src="../assets/control your career.png" alt="control your career" />
				<h4 class="text-xl font-semibold w-40 ml-4">Control Your Career</h4>
			</div>
			<ul class="mt-4 list-disc w-60 mx-auto text-gray-600">
				<li>Gain a tool to build camaraderie</li>
				<li>Encourage remote team building</li>
				<li>Creates healthy competition</li>
				<li>Open opportunities for recognition and rewards</li>
				<li>Method to promote desired behaviors & goal attainment</li>
				<li>Promote creativity and innovation among diverse perspectives</li>
			</ul>
			<span class="absolute bottom-0 inset-x-0 bg-[#A65511] h-2 hidden group-hover:block"></span>
		</div>
		<div class="bg-white relative shadow-md border overflow-hidden rounded-lg p-8 group">
			<div class="flex items-center">
				<img src="../assets/control your career.png" alt="Lead Powerful Challenges" />
				<h4 class="text-xl font-semibold w-40 ml-4">Lead Powerful Challenges</h4>
			</div>
			<ul class="mt-4 list-disc w-60 mx-auto text-gray-600">
				<li>Know who embraces the culture</li>
				<li>Identify the best for task delegation</li>
				<li>Understand a teams' diverse voice</li>
				<li>Cultivate team continuity daily</li>
				<li>Identify ways to inspire motivation</li>
				<li>Identify struggling team members</li>
				<li>Know areas to assist professional growth</li>
			</ul>
			<span class="absolute bottom-0 inset-x-0 bg-[#A65511] h-2 hidden group-hover:block"></span>
		</div>
	</div>
	<!-- upcoming changes -->
	<div class="container mx-auto px-10">
		<div>
			<h3 class="text-4xl">Upcoming Challenges</h3>
			<span class="bg-d-yellow ml-2 h-1.5 w-5 rounded-l-md inline-block"></span>
			<span class="bg-d-yellow ml-4 h-1.5 w-20 rounded-r-md inline-block"></span>
		</div>
		<div class="flex flex-wrap justify-center gap-4 py-10">
			<div class="bg-white relative shadow-md border overflow-hidden rounded-lg group max-w-[350px]">
				<div class="w-full">
					<img src="../assets/books.jpg" class="aspect-video w-full" alt />
				</div>
				<div class="p-4">
					<div>
						<span class="text-sm text-gray-500">category :</span>
						<h4>Challenge title here: some random text</h4>
					</div>
					<div class="mt-4">
						<span class="text-sm text-gray-500">Start on :</span>
						<h4>Sep 15, 17:00AM USA</h4>
					</div>

					<button class="mt-4 bg-d-yellow text-white px-5 py-2 rounded-lg">Request challenge</button>
				</div>
			</div>
			<div class="bg-white relative shadow-md border overflow-hidden rounded-lg group max-w-[350px]">
				<div class="w-full">
					<img src="../assets/image61.png" class="aspect-video w-full" alt />
				</div>
				<div class="p-4">
					<div>
						<span class="text-sm text-gray-500">category :</span>
						<h4>Challenge title here: some random text</h4>
					</div>
					<div class="mt-4">
						<span class="text-sm text-gray-500">Start on :</span>
						<h4>Sep 15, 17:00AM USA</h4>
					</div>

					<button class="mt-4 bg-d-yellow text-white px-5 py-2 rounded-lg">Request challenge</button>
				</div>
			</div>
			<div class="bg-white relative shadow-md border overflow-hidden rounded-lg group max-w-[350px]">
				<div class="w-full">
					<img src="../assets/image62.png" class="aspect-video w-full" alt />
				</div>
				<div class="p-4">
					<div>
						<span class="text-sm text-gray-500">category :</span>
						<h4>Challenge title here: some random text</h4>
					</div>
					<div class="mt-4">
						<span class="text-sm text-gray-500">Start on :</span>
						<h4>Sep 15, 17:00AM USA</h4>
					</div>

					<button class="mt-4 bg-d-yellow text-white px-5 py-2 rounded-lg">Request challenge</button>
				</div>
			</div>
			<div class="bg-white relative shadow-md border overflow-hidden rounded-lg group max-w-[350px]">
				<div class="w-full">
					<img src="../assets/image63.png" class="aspect-video w-full" alt />
				</div>
				<div class="p-4">
					<div>
						<span class="text-sm text-gray-500">category :</span>
						<h4>Challenge title here: some random text</h4>
					</div>
					<div class="mt-4">
						<span class="text-sm text-gray-500">Start on :</span>
						<h4>Sep 15, 17:00AM USA</h4>
					</div>

					<button class="mt-4 bg-d-yellow text-white px-5 py-2 rounded-lg">Request challenge</button>
				</div>
			</div>
		</div>
	</div>
	<!-- testimenials -->
	<div class="bg-gray-200 p-10 pb-24">
		<div class="container mx-auto">
			<div class="text-center">
				<h3 class="text-4xl">Testimenials</h3>
				<span class="bg-d-yellow ml-2 h-1.5 w-5 rounded-l-md inline-block"></span>
				<span class="bg-d-yellow ml-4 h-1.5 w-20 rounded-r-md inline-block"></span>
			</div>
			<div class="flex items-center overflow-x-auto justify-start lg:justify-center gap-4 mt-10">
				<div class="bg-white shadow-md rounded-lg p-8 flex-shrink-0 max-w-[350px]">
					<div class="flex items-center">
						<img src="../assets/image62.png" class="w-16 h-16 rounded-full shadow" alt="avatar" />
						<div class="ml-4">
							<span class="block text-xl font-semibold">Cheristine Eve</span>
							<span class="block text-sm text-gray-500">Founder & SEO</span>
						</div>
					</div>
					<div class="mt-4">
						<p
							class="text-gray-600 text-xl"
						>Lorem ipsum is simply free text dolor sit amet, consetur notted adipisic elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					</div>
				</div>
				<div class="bg-white shadow-md rounded-lg p-8 flex-shrink-0 max-w-[350px]">
					<div class="flex items-center">
						<img src="../assets/image62.png" class="w-16 h-16 rounded-full shadow" alt="avatar" />
						<div class="ml-4">
							<span class="block text-xl font-semibold">Cheristine Eve</span>
							<span class="block text-sm text-gray-500">Founder & SEO</span>
						</div>
					</div>
					<div class="mt-4">
						<p
							class="text-gray-600 text-xl"
						>Lorem ipsum is simply free text dolor sit amet, consetur notted adipisic elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					</div>
				</div>
				<div class="bg-white shadow-md rounded-lg p-8 flex-shrink-0 max-w-[350px]">
					<div class="flex items-center">
						<img src="../assets/image62.png" class="w-16 h-16 rounded-full shadow" alt="avatar" />
						<div class="ml-4">
							<span class="block text-xl font-semibold">Cheristine Eve</span>
							<span class="block text-sm text-gray-500">Founder & SEO</span>
						</div>
					</div>
					<div class="mt-4">
						<p
							class="text-gray-600 text-xl"
						>Lorem ipsum is simply free text dolor sit amet, consetur notted adipisic elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- your signature program -->
	<div class="p-10 pb-24 relative hidden lg:block">
		<div class="text-center">
			<h3 class="text-4xl">Your Singnature Program</h3>
			<span class="bg-d-yellow ml-2 h-1.5 w-5 rounded-l-md inline-block"></span>
			<span class="bg-d-yellow ml-4 h-1.5 w-20 rounded-r-md inline-block"></span>
		</div>
		<div class="absolute bottom-0 inset-x-0 bg-d-yellow h-1/2"></div>
		<div class="relative flex justify-center items-center pt-10">
			<img src="../assets/singnature.png" alt="Singnature image" />
		</div>
	</div>
	<!-- footer -->
	<div class="relative w-full">
		<img
			src="../assets/footer overlay.png"
			alt="Rectangle photo"
			class="absolute h-full w-full object-cover object-top"
		/>
		<!-- overlay -->
		<div class="absolute bg-gray-900/90 inset-0"></div>
		<div class="relative flex flex-wrap justify-around py-10 text-white container mx-auto">
			<div class="w-auto lg:w-1/4 text-center lg:text-left">
				<span>Contact</span>
				<ul class="mt-5 space-y-3 w-full">
					<li class="flex items-center">
						<img src="../assets/Vector1.png" alt="phone icon" />
						<div class="ml-4">
							<span class="block text-sm text-gray-300">Call Anytime</span>
							<span class="block text-xl font-semibold">+212 666 888 000</span>
						</div>
					</li>
					<li class="flex items-center">
						<img src="../assets/Vector2.png" alt="phone icon" />
						<div class="ml-4">
							<span class="block text-sm text-gray-300">Send Email</span>
							<span class="block text-xl font-semibold">example@email.com</span>
						</div>
					</li>
					<li class="flex items-center">
						<img src="../assets/Vector3.png" alt="phone icon" />
						<div class="ml-4">
							<span class="block text-sm text-gray-300">Visit Office</span>
							<span class="block text-xl font-semibold">80 Broklyn Street</span>
						</div>
					</li>
				</ul>
			</div>
			<div class="w-full lg:w-2/4 justify-around flex mt-10 lg:m-0">
				<div>
					<span>Links</span>
					<ul class="mt-5 space-y-3">
						<li class="block text-sm text-gray-300">Home</li>
						<li class="block text-sm text-gray-300">About Us</li>
						<li class="block text-sm text-gray-300">Forum</li>
						<li class="block text-sm text-gray-300">Challenges</li>
						<li class="block text-sm text-gray-300">Contact Us</li>
					</ul>
				</div>
				<div>
					<span>Challenges</span>
					<ul class="mt-5 space-y-3">
						<li class="block text-sm text-gray-300">categorie 1</li>
						<li class="block text-sm text-gray-300">categorie 2</li>
						<li class="block text-sm text-gray-300">categorie 3</li>
						<li class="block text-sm text-gray-300">categorie 4</li>
						<li class="block text-sm text-gray-300">categorie 5</li>
					</ul>
				</div>
			</div>
			<!-- logo -->

			<a class="w-full lg:w-1/4 mt-10 lg:m-0" href="/">
				<span class="sr-only">Digital Self</span>
				<img src="../assets/Digital Self.png" alt="dijital self logo" />
			</a>
		</div>
		<div class="relative flex justify-between pb-10 text-white container mx-auto">
			<span>copyright© 2021</span>
			<div class="flex text-white space-x-3">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="feather feather-twitter"
				>
					<path
						d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
					/>
				</svg>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="feather feather-linkedin"
				>
					<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
					<rect x="2" y="9" width="4" height="12" />
					<circle cx="4" cy="4" r="2" />
				</svg>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="feather feather-instagram"
				>
					<rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
					<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
					<line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
				</svg>
			</div>
		</div>
	</div>
</template>