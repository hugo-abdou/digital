<template>
	<!-- hero section -->
	<div class="relative">
		<img
			src="../assets/Rectangle.png"
			alt="Rectangle photo"
			class="absolute h-full w-full object-cover object-top"
		/>
		<!-- overlay -->
		<div class="absolute bg-gradient-to-r from-[#000]/70 via-[#000]/70 to-[#000]/20 inset-0"></div>

		<div class="relative z-10 container mx-auto p-9">
			<!-- navigation -->
			<div class="flex justify-between items-center whitespace-nowrap">
				<!-- logo -->
				<a href="/">
					<span class="sr-only">Digital Self</span>
					<img src="../assets/Digital Self.png" alt="dijital self logo" />
				</a>

				<!-- nav links -->
				<nav class="hidden 2xl:flex justify-center items-center space-x-5 text-white text-p-sm py-4">
					<a href="#">Manage Group</a>
					<a href="#">Control Your Career</a>
					<a href="#">Lead challenges</a>
					<a href="#">upcoming challenges</a>
					<a href="#">support</a>
				</nav>

				<div class="text-white text-p-sm space-x-5 items-center flex">
					<button
						class="border border-d-yellow hover:bg-d-yellow rounded-full px-6 py-2 hidden lg:block"
					>free sign-up</button>
					<button class="border border-d-yellow hover:bg-d-yellow rounded-full px-6 py-2">login</button>

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

			<nav class="hidden md:flex 2xl:hidden items-center space-x-5 text-white my-4">
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
			<div class="flex my-32">
				<!-- description -->
				<div class="text-white w-full lg:w-1/2 flex justify-center items-center">
					<div class="space-y-8 w-[681px]">
						<h1 class="font-medium text-h2 md:text-h1">
							Discover The True Potential Of You And Your People
							<span class="text-d-yellow">Remotely</span> !
						</h1>
						<p class="text-p-sm md:text-p">
							Do you want a way to easily
							<b class="underline">manage</b>,
							<b class="underline">understand</b> and
							<b class="underline">engage</b> your group remotely ? to create awesome
							<b class="underline">challenges</b> for them? A way to take
							<b class="underline">control</b> of your career ?
						</p>

						<button
							class="border bg-white text-d-yellow text-p-sm md:text-p rounded-full px-12 py-4"
						>Free Consultation</button>
					</div>
				</div>

				<!-- dashboard -->
				<div class="hidden lg:flex w-1/2 justify-center items-end">
					<img src="../assets/Template-Flat-Presentation.png" class="mb-20" />
				</div>
			</div>
		</div>
	</div>
	<!-- why hiring us -->
	<div class="relative flex flex-col lg:flex-row bg-gray-lv-1 px-10">
		<div class="bg-d-yellow absolute left-0 w-full lg:w-1/4 h-1/4 lg:h-auto lg:inset-y-0"></div>
		<div class="relative w-full lg:w-1/2 flex justify-center items-center mt-20 lg:mt-0">
			<img src="../assets/Rectangle68.png" alt="why hiring us image" />
		</div>

		<div class="flex justify-center items-center lg:w-1/2 py-28">
			<div class="pb-10">
				<div>
					<h3 class="text-p md:text-h2">Why Hiring Us</h3>
					<span class="bg-d-yellow ml-2 h-1.5 w-5 rounded-l-md inline-block"></span>
					<span class="bg-d-yellow ml-4 h-1.5 w-20 rounded-r-md inline-block"></span>
				</div>
				<h4 class="text-p-sm md:text-p mt-8">
					You are accountable for knowing the information needed to
					stay connected with your professional
					<span
						class="text-d-yellow"
					>community</span>
					as well as with your own professional self!
				</h4>
				<p class="mt-8 text-p-xs md:text-p-sm">
					In addition to
					<b>productivity</b> and
					<b>morale</b>, the strength of the
					<b>leadership and team connection</b>
					can impact
					<b>how team members view their value</b> in your organization.
				</p>
				<p class="mt-2 text-p-xs md:text-p-sm">
					If there is
					<b>not a strong connection</b>, there's a good chance members will not feel
					connected to leadership or the organization, which can ultimately
					<b>lead a high turnover rate</b>!
				</p>
				<button
					class="border-2 font-semibold bg-black text-white text-p-xs md:text-p-sm rounded-full mt-8 px-12 py-4"
				>Free Consultation</button>
			</div>
		</div>
	</div>
	<!-- What we Offer -->
	<div class="flex flex-col lg:flex-row container mx-auto px-9 mt-28">
		<div class="flex justify-center items-center lg:w-1/2 mt-5">
			<div class="pb-10 text-center lg:text-left">
				<h3 class="text-p md:text-h2">What we Offer</h3>
				<span class="bg-d-yellow ml-2 h-1.5 w-5 rounded-l-md inline-block"></span>
				<span class="bg-d-yellow ml-4 h-1.5 w-20 rounded-r-md inline-block"></span>

				<h4 class="text-p-sm md:text-p mt-8">You Need A Way to Become and Remain Engaged!</h4>
				<h4
					class="text-p mt-8 text-d-yellow"
				>How Well Do You Really Know Your Team? How Self Aware Are You?</h4>
				<p class="mt-8 text-p-xs md:text-p-sm">
					The world is changing... we don't get to interact with our teams, partners and groups in familiar ways
					With more highly distributed teams of both nationally & worldwide,
				</p>
				<p class="mt-2 text-p-xs md:text-p-sm">
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
	<div class="flex flex-wrap justify-center gap-4 mt-20">
		<div
			class="bg-white relative max-w-[355px] shadow-lg border overflow-hidden rounded-lg px-7 py-8 group"
		>
			<div class="flex items-center">
				<img src="../assets/manage teams remotly.png" alt="manage teams remotly" />
				<h4 class="text-p font-semibold ml-3">
					Manage Teams
					Remotely
				</h4>
			</div>
			<ul class="mt-9 px-2.5 list-disc text-gray-600 font-normal text-p-sm">
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
		<div
			class="bg-white relative max-w-[355px] shadow-lg border overflow-hidden rounded-lg px-7 py-8 group"
		>
			<div class="flex items-center">
				<img src="../assets/control your career.png" alt="control your career" />
				<h4 class="text-xl font-semibold w-40 ml-4">Control Your Career</h4>
			</div>
			<ul class="mt-9 px-2.5 list-disc text-gray-600 font-normal text-p-sm">
				<li>Gain a tool to build camaraderie</li>
				<li>Encourage remote team building</li>
				<li>Creates healthy competition</li>
				<li>Open opportunities for recognition and rewards</li>
				<li>Method to promote desired behaviors & goal attainment</li>
				<li>Promote creativity and innovation among diverse perspectives</li>
			</ul>
			<span class="absolute bottom-0 inset-x-0 bg-[#A65511] h-2 hidden group-hover:block"></span>
		</div>
		<div
			class="bg-white relative max-w-[355px] shadow-lg border overflow-hidden rounded-lg px-7 py-8 group"
		>
			<div class="flex items-center">
				<img src="../assets/control your career.png" alt="Lead Powerful Challenges" />
				<h4 class="text-xl font-semibold w-40 ml-4">Lead Powerful Challenges</h4>
			</div>
			<ul class="mt-9 px-2.5 list-disc text-gray-600 font-normal text-p-sm">
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
	<div class="container mx-auto mt-24 px-9">
		<div>
			<h3 class="text-p md:text-h2">Upcoming Challenges</h3>
			<span class="bg-d-yellow ml-2 h-1.5 w-5 rounded-l-md inline-block"></span>
			<span class="bg-d-yellow ml-4 h-1.5 w-20 rounded-r-md inline-block"></span>
		</div>
		<div class="flex flex-wrap justify-center gap-4 pt-16 pb-44">
			<div class="bg-white relative shadow-lg border overflow-hidden rounded-lg group max-w-[250px]">
				<div class="w-full">
					<img src="../assets/books.jpg" class="aspect-video w-full" alt />
				</div>
				<div class="p-4">
					<div>
						<span class="text-p-xs text-gray-500">category :</span>
						<h4 class="text-p-sm">Challenge title here: some random text</h4>
					</div>
					<div class="mt-6">
						<span class="text-p-xs text-gray-500">Start on :</span>
						<h4 class="text-p-sm">Sep 15, 17:00AM USA</h4>
					</div>

					<button class="mt-6 bg-d-yellow text-white px-8 py-2 rounded-lg">Request challenge</button>
				</div>
			</div>
			<div class="bg-white relative shadow-lg border overflow-hidden rounded-lg group max-w-[250px]">
				<div class="w-full">
					<img src="../assets/image61.png" class="aspect-video w-full" alt />
				</div>
				<div class="p-4">
					<div>
						<span class="text-p-xs text-gray-500">category :</span>
						<h4 class="text-p-sm">Challenge title here: some random text</h4>
					</div>
					<div class="mt-6">
						<span class="text-p-xs text-gray-500">Start on :</span>
						<h4 class="text-p-sm">Sep 15, 17:00AM USA</h4>
					</div>

					<button class="mt-6 bg-d-yellow text-white px-8 py-2 rounded-lg">Request challenge</button>
				</div>
			</div>
			<div class="bg-white relative shadow-lg border overflow-hidden rounded-lg group max-w-[250px]">
				<div class="w-full">
					<img src="../assets/image62.png" class="aspect-video w-full" alt />
				</div>
				<div class="p-4">
					<div>
						<span class="text-p-xs text-gray-500">category :</span>
						<h4 class="text-p-sm">Challenge title here: some random text</h4>
					</div>
					<div class="mt-6">
						<span class="text-p-xs text-gray-500">Start on :</span>
						<h4 class="text-p-sm">Sep 15, 17:00AM USA</h4>
					</div>

					<button class="mt-6 bg-d-yellow text-white px-8 py-2 rounded-lg">Request challenge</button>
				</div>
			</div>
			<div class="bg-white relative shadow-lg border overflow-hidden rounded-lg group max-w-[250px]">
				<div class="w-full">
					<img src="../assets/image63.png" class="aspect-video w-full" alt />
				</div>
				<div class="p-4">
					<div>
						<span class="text-p-xs text-gray-500">category :</span>
						<h4 class="text-p-sm">Challenge title here: some random text</h4>
					</div>
					<div class="mt-6">
						<span class="text-p-xs text-gray-500">Start on :</span>
						<h4 class="text-p-sm">Sep 15, 17:00AM USA</h4>
					</div>

					<button class="mt-6 bg-d-yellow text-white px-8 py-2 rounded-lg">Request challenge</button>
				</div>
			</div>
		</div>
	</div>
	<!-- testimenials -->
	<div class="bg-gray-lv-1 pb-44 pt-12">
		<div class="container mx-auto">
			<div class="text-center">
				<h3 class="text-p md:text-h2">Testimenials</h3>
				<span class="bg-d-yellow ml-2 h-1.5 w-5 rounded-l-md inline-block"></span>
				<span class="bg-d-yellow ml-4 h-1.5 w-20 rounded-r-md inline-block"></span>
			</div>
			<div class="flex items-center overflow-x-auto p-5 justify-start lg:justify-center gap-4 mt-10">
				<div class="bg-white shadow-md rounded-lg p-8 flex-shrink-0 max-w-[350px]">
					<div class="flex items-center">
						<img src="../assets/image62.png" class="w-16 h-16 rounded-full shadow" alt="avatar" />
						<div class="ml-4">
							<span class="block text-xl font-semibold">Cheristine Eve</span>
							<span class="block text-sm text-gray-500">Founder & SEO</span>
						</div>
					</div>
					<div class="mt-6">
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
					<div class="mt-6">
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
					<div class="mt-6">
						<p
							class="text-gray-600 text-xl"
						>Lorem ipsum is simply free text dolor sit amet, consetur notted adipisic elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- your signature program -->
	<div class="pb-24 pt-24 relative hidden lg:block">
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
		<div class="absolute bg-[#000]/90 inset-0"></div>
		<div class="relative flex flex-wrap py-10 text-white container mx-auto px-9">
			<div class="w-auto lg:w-1/4 lg:text-left">
				<span>Contact</span>
				<ul class="mt-5 space-y-3 w-full">
					<li class="flex items-center">
						<img src="../assets/Vector1.png" alt="phone icon" />
						<div class="ml-4">
							<span class="block text-sm text-gray-400">Call Anytime</span>
							<span class="block text-xl font-semibold text-gray-300">+212 666 888 000</span>
						</div>
					</li>
					<li class="flex items-center">
						<img src="../assets/Vector2.png" alt="phone icon" />
						<div class="ml-4">
							<span class="block text-sm text-gray-400">Send Email</span>
							<span class="block text-xl font-semibold text-gray-300">example@email.com</span>
						</div>
					</li>
					<li class="flex items-center">
						<img src="../assets/Vector3.png" alt="phone icon" />
						<div class="ml-4">
							<span class="block text-sm text-gray-400">Visit Office</span>
							<span class="block text-xl font-semibold text-gray-300">80 Broklyn Street</span>
						</div>
					</li>
				</ul>
			</div>
			<div class="w-full lg:w-2/4 flex lg:justify-center mt-10 lg:m-0">
				<div class="w-1/2">
					<span class="text-gray-300">Links</span>
					<ul class="mt-5 space-y-3">
						<li class="block text-sm text-gray-400">Home</li>
						<li class="block text-sm text-gray-400">About Us</li>
						<li class="block text-sm text-gray-400">Forum</li>
						<li class="block text-sm text-gray-400">Challenges</li>
						<li class="block text-sm text-gray-400">Contact Us</li>
					</ul>
				</div>
				<div>
					<span class="text-gray-300">Challenges</span>
					<ul class="mt-5 space-y-3">
						<li class="block text-sm text-gray-400">categorie 1</li>
						<li class="block text-sm text-gray-400">categorie 2</li>
						<li class="block text-sm text-gray-400">categorie 3</li>
						<li class="block text-sm text-gray-400">categorie 4</li>
						<li class="block text-sm text-gray-400">categorie 5</li>
					</ul>
				</div>
			</div>
			<div class="flex text-white space-x-3 lg:hidden w-full mt-9">
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
			<!-- logo -->

			<a class="w-full lg:w-1/4 mt-10 lg:m-0" href="/">
				<span class="sr-only">Digital Self</span>
				<img src="../assets/Digital Self.png" alt="dijital self logo" />
			</a>
		</div>
		<div class="relative container mx-auto px-9 text-white text-p-sm font-normal lg:hidden">
			<p>
				<b>My company</b> dolor sit amet, consectetur adipiscing elit. A vitae in enim at diam eu vitae.consectetur adipiscing elit. A vitae in enim at diam eu vitae.consectetur adipiscing elit. A vitae in enim at diam eu vitae.consectetur adipiscing elit.
			</p>
		</div>
		<div class="relative container mx-auto mt-14 lg:mt-0 px-9">
			<div class="flex justify-between py-5 text-white border-t lg:border-none">
				<span>copyright© 2021</span>
				<div class="text-white space-x-3 hidden lg:flex">
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
	</div>
</template>