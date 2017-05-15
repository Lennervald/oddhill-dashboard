Use slot for sharing data between Parent > Child 

simple example: 
---------------------
App.vue:


<template>
  <div class="container">
    <app-quote-grid :quotes="quotes"></app-quote-grid>
  </div>
</template>

<script>
import QuoteGrid from './components/QuoteGrid.vue';

export default {
    data () {
      return {
        quotes: ['Just a quote to see something'],
        maxQuotes: 10
      }
    },
    components: {
      appQuoteGrid: QuoteGrid
    } 
  }
</script>

<style lang="scss" scoped>
  @import 'sass/main.scss';
</style>

QuoteGrid.vue

<template>
	<div class="row">
		<app-quote v-for="quote in quotes">{{ quote }}</app-quote>
	</div>
</template>

<script>
	import Quote from './Quote.vue';

	export default{
		props: ['quotes'],
		components: {
			appQuote: Quote
		}
	}
</script>

Quote.vue
<template>
	<div class="col-sm-6 col-md-4 col-lg-3">
		<div class="panel panel-default">
			<div class="panel-body quote">
				<slot></slot>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		
	}
</script>

<style>
	.panel-body {
		font-family: 'Dancing Script', serif;
		font-size: 24px;
	}

	.quote {
		cursor: pointer;
	}

	.quote:hover {
		background-color: #CCC;
	}
</style>


--------------------------------------
Using EMIT to pass data from the Child to the Parent:


NewQuote.vue

<template>
	<div>
		<form>
			<div class="col-8">
				<label>Quote</label>
				<textarea class="form-control" rows="3" v-model="quote"></textarea>
			</div>
			<div class="col-8">
				<button class="btn btn-primary" @click.prevent="createNew">Add Quote</button>
			</div>
		</form>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				quote: ''
			}
		},
		methods: {
			createNew(){
				this.$emit('quoteAdded', this.quote);
				this.quote = '';
			}
		}
	}
</script>

App.vue

<template>
  <div class="container">
    <app-new-quote @quoteAdded="submitQuote"></app-new-quote>
    <app-quote-grid :quotes="quotes"></app-quote-grid>
  </div>
</template>

<script>
import QuoteGrid from './components/QuoteGrid.vue';
import NewQuote from './components/NewQuote.vue';

export default {
    data () {
      return {
        quotes: ['Just a quote to see something'],
        maxQuotes: 10
      }
    },
    methods: {
      submitQuote(value){
        this.quotes.push(value);
      }
    },
    components: {
      appQuoteGrid: QuoteGrid,
      appNewQuote: NewQuote
    } 
  }
</script>

<style lang="scss" scoped>
  @import 'sass/main.scss';
</style>


Delete with native etc
-----------------------'

ín QuoteGrid.vue

<template>
	<div class="row">
		<app-quote v-for="(quote, index) in quotes" @click.native="deleteQuote(index)">{{ quote }}</app-quote>
	</div>
</template>

<script>
	import Quote from './Quote.vue';

	export default{
		props: ['quotes'],
		components: {
			appQuote: Quote
		},
		methods: {
			deleteQuote(index){
				this.$emit('objDeleted', index)
			}
		}
	}
</script>

and App.vue

<template>
  <div class="container">
    <app-new-quote @quoteAdded="submitQuote"></app-new-quote>
    <app-quote-grid :quotes="quotes" @objDeleted="deleteQuote"></app-quote-grid>
    <div class="row">
      <div class="col-12 text-center">
        <div class="alert alert-info">
          Info: Click on a Quote to delete it!
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import QuoteGrid from './components/QuoteGrid.vue';
import NewQuote from './components/NewQuote.vue';

export default {
    data () {
      return {
        quotes: ['Just a quote to see something'],
        maxQuotes: 10
      }
    },
    methods: {
      submitQuote(value){
        this.quotes.push(value);
      },
      deleteQuote(index){
        this.quotes.splice(index, 1);
      }
    },
    components: {
      appQuoteGrid: QuoteGrid,
      appNewQuote: NewQuote
    } 
  }
</script>

<style lang="scss" scoped>
  @import 'sass/main.scss';
</style>