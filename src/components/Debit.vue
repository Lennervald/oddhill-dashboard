<template>
	<div class="views">
	  <div class="row">
	    <div class="col-12 hidden-lg-up">
	      <div class="headline-small-container">
	        <p class="headline-touch">{{ headline }}</p>
	      </div>
	    </div>
	  </div>

	  <div class="row">
	    <div class="col-12">
	      <div class="deb-links-container">
	        <p class="section-links">{{ links }}</p>
	      </div>
	    </div>
	  </div>

	  <div class="row">
	    <div class="col-1 col-md-2 col-lg-3">
	    </div>
	    <div class="col-10 col-md-8 col-lg-6">
					<div class="temp-box"></div>
	    </div>

	    <div class="hidden-md-down col-lg-3">
	      <div class="deb-values-large-container">
	        <div class="box-value-large">
	          <div class="value-square-large squ-1"></div>
	          <p class="text-value-large val-1">{{ value1 }}</p>
	        </div>
	        <div class="box-value-large">
	          <div class="value-square-large squ-2"></div>
	          <p class="text-value-large val-2">{{ value2 }}</p>
	        </div>
	      </div>
	    </div>
		</div>

		<div class="row">
	    <div class="hidden-lg-up col-12">
	      <div class="deb-values-small-container">
					<div class="box-value-small">
						<div class="value-square-small squ-2"></div>
						<p class="text-value-small val-2">{{ value2 }}</p>
						<div class="value-square-small squ-1"></div>
						<p class="text-value-small val-1">{{ value1 }}</p>
					</div>
	      </div>
	    </div>
		</div>
	</div>
	</template>

<script>
export default {
    data: function() {
        return {
            headline: 'debiteringsgrad',
            links: 'Vecka  |  Månad  |  År',
						value1: 'Klient',
						value2: 'Inhouse',
            number: '74'
        }
    }
}
</script>
