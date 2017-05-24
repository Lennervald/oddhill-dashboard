<template>
	<div class="views">

		<section class="hero current-projects-page-wrapper is-fullwidth">
			<div class="hero-head component-head-spacer is-vcentered">
				<div class="columns">
					<div class="column">
						<!-- <h1>THIS CURRENT PROJECTS</h1> -->

					</div>
				</div>
			</div>

			<div class="hero-body component-body">
				<div class="columns is-mobile is-vcentered">
					<div class="column is-offset-1 is-10">
		<div class="tile is-ancestor">
			<div class="tile is-parent is-hidden-tablet is-hidden-desktop">
				<article class="tile is-child notification is-danger">
					<p class="title">Wide tile</p>
					<p class="subtitle">Aligned with the right tile</p>
					<div class="content">
						<!-- Content -->
					</div>
				</article>
			</div>
						<div class="tile is-parent">
							<article class="tile is-child notification is-danger">
								<p class="title">Wide tile</p>
								<p class="subtitle">Aligned with the right tile</p>
							</article>
						</div>
						<div class="tile is-parent is-hidden-mobile">
							<article class="tile is-child title-wrapper has-text-right">
								<div class="projekt-title-box">
									<p class="subtitle project-values under-lined">{{valueCommits}} {{projectObj[0]}} | {{valueHours}} {{projectObj[1]}}</p>
									<p class="title project-title">{{projectname}}</p>
								</div>
							</article>
						</div>
</div>

						<div class="tile is-ancestor">
							<div class="tile is-vertical is-8">
								<div class="tile">


									<div class="tile is-parent is-vertical">
										<article class="tile is-child notification img-box">
											<div class="color-filter"></div>
											<div class="image-cont">
											</div>
										</article>
										<article class="tile is-child notification is-warning">
											<p class="title">...tiles</p>
											<p class="subtitle">Bottom tile</p>
										</article>
									</div>
									<div class="tile is-parent">
										<article class="tile is-child notification is-info">
											<p class="title">Middle tile</p>
											<p class="subtitle">With an image</p>
											<figure class="image is-4by3">
												<img src="http://bulma.io/images/placeholders/640x480.png">
											</figure>
										</article>
									</div>
								</div>
								<div class="tile is-parent">
									<article class="tile is-child notification is-danger">
										<p class="title">Wide tile</p>
										<p class="subtitle">Aligned with the right tile</p>
										<div class="content">
											<!-- Content -->
										</div>
									</article>
								</div>
							</div>
							<div class="tile is-parent">
								<article class="tile is-child notification is-success">
									<div class="content">
										<p class="title">Tall tile</p>
										<p class="subtitle">With even more content</p>
										<div class="content">
											<!-- Content -->
										</div>
									</div>
								</article>
							</div>
						</div>
					</div>
			</div>





			</div>





			<div class="hero-foot is-vcentered">
				<div class="columns">
					<div class="column has-text-left is-hidden-desktop">
						<img class="footer-icon-mobile" src="../assets/images/oh_logo.png" alt="">
					</div>
				</div>
			</div>
		</section>

	</div>
</template>


<script>

export default {
    data: function() {
        return {
					projectname: "Malmö Stadsteater",
					projectObj: ["Commits", "Timmar"],
					valueCommits: "178",
					valueHours: "178",


        }
    }
}
</script>
