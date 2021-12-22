<template>
	<div class="h-screen w-full relative aspect-video box-border">
		<!-- bacground image -->
		<img
			src="./assets/Rectangle.png"
			alt="Rectangle photo"
			class="absolute h-full w-full object-cover object-top"
		/>
		<!-- overlay -->
		<div class="absolute bg-gradient-to-r from-black/90 to-black/20 inset-0"></div>
		<div class="absolute inset-0 container mx-auto">
			<!-- navigation -->
			<div class="flex justify-between items-center mt-4 border-b xl:border-none pb-2 xl:p-0">
				<!-- logo -->
				<img src="./assets/Digital Self.png" alt="dijital self logo" />

				<!-- navigation links -->
				<ul class="text-white space-x-6 whitespace-nowrap hidden xl:flex">
					<li>
						<a href="#">Manage Group</a>
					</li>
					<li>
						<a href="#">Control Your Career</a>
					</li>
					<li>
						<a href="#">Lead challenges</a>
					</li>
					<li>
						<a href="#">upcoming challenges</a>
					</li>
					<li>
						<a href="#">support</a>
					</li>
				</ul>

				<!-- sign-up links -->
				<div class="text-white space-x-5">
					<button class="border border-d-yellow hover:bg-d-yellow rounded-full px-3 pb-0.5">free sign-up</button>
					<button class="border border-d-yellow hover:bg-d-yellow rounded-full px-3 pb-0.5">login</button>
				</div>
			</div>
			<ul class="text-white space-x-6 whitespace-nowrap mt-4 flex xl:hidden">
				<li>
					<a href="#">Manage Group</a>
				</li>
				<li>
					<a href="#">Control Your Career</a>
				</li>
				<li>
					<a href="#">Lead challenges</a>
				</li>
				<li>
					<a href="#">upcoming challenges</a>
				</li>
				<li>
					<a href="#">support</a>
				</li>
			</ul>
			<!-- hero content -->
			<div class="flex mt-4 h-[calc(100vh-146px)] xl:h-[calc(100vh-100px)]">
				<!-- description -->
				<div class="text-white w-1/2 flex justify-center items-center">
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
				<div class="flex w-1/2 justify-center items-end">
					<img src="./assets/Template-Flat-Presentation.png" class="w-[564px] mb-20" />
				</div>
			</div>
		</div>
	</div>
</template>
