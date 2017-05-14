Globaly in main.js;

Vue.directive('');

--- pass in 2 args:
1. The name
2. the object....
	Here we have hooks: (most used are)
	bind(el, binding, vnode) & 
	update(el, binding, vnode, oldVnode)


example:
Vue.directive('highlight', {
	bind(el, binding, vnode){
		el.style.backgroundColor = 'green';
}
});

and to use it on a dom element use v-highlight


----------- You can also determine the option/value: 

Vue.directive('highlight', {
	bind(el, binding, vnode){
		el.style.backgroundColor = binding.value;
}
});

v-highlight="'red'"


----------- You can also add arguments!

Vue.directive('highlight', {
	bind(el, binding, vnode){
		if(binding.arg == 'background'){
			el.style.backgroundColor = binding.value;
	} else {
	el.style.color = binding.value;
}
}
});


v-highlight:background="'red'"



----------- Adding modifier

if you add a modifier like this:
v-highlight:background.delayed="'red'"

Vue.directive('highlight', {
	bind(el, binding, vnode){
		let delay = 0;

		if(binding.modifiers['delayed']){
			delay = 2000;
		}

		setTimeout(() => {
			if(binding.arg == 'background'){
				el.style.backgroundColor = binding.value;
			} else {
				el.style.color = binding.value;
			}
		}, delay);
	}
});


