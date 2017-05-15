### MOST USEFUL FROM THE VUE.JS API (Most Useful Methods etc.)


### DIRECTVES

### v-on

 Attaches an event listener to the element. The event type is denoted by the argument. The expression can either be a method name or an inline statement, or simply omitted when there are modifiers present.

 IMPORTANT: Argument: event (required)
Example:
<button v-on:click="doThat('hello', $event)"></button>
-- If you need to pass more than one argument write it: 
(arg1, $event)

 Modifiers:
 .stop - call event.stopPropagation().
 .prevent - call event.preventDefault().
<span v-on:mousemove.stop="">STOP IT RIGHT HERE</span>

 .capture - add event listener in capture mode.
 .self - only trigger handler if event was dispatched from this element.
 .{keyCode | keyAlias} - only trigger handler on certain keys.
 .native - listen for a native event on the root element of component.
 .once - trigger handler at most once.
 .left - (2.2.0+) only trigger handler for left button mouse events.
 .right - (2.2.0+) only trigger handler for right button mouse events.
 .middle - (2.2.0+) only trigger handler for middle button mouse events.
 .passive - (2.3.0+) attaches a DOM event with { passive: true }.

### KEY MODIFIERS
https://vuejs.org/v2/guide/events.html#Key-Modifiers
.enter
.tab
.delete (captures both “Delete” and “Backspace” keys)
.esc
.space
.up
.down
.left
.right
 
<!-- method handler -->
 <button v-on:click="doThis"></button>
 <!-- inline statement -->
 <button v-on:click="doThat('hello', $event)"></button>
 <!-- shorthand -->
 <button @click="doThis"></button>
 <!-- stop propagation -->
 <button @click.stop="doThis"></button>
 <!-- prevent default -->
 <button @click.prevent="doThis"></button>
 <!-- prevent default without expression -->
 <form @submit.prevent></form>
 <!-- chain modifiers -->
 <button @click.stop.prevent="doThis"></button>
 <!-- key modifier using keyAlias -->
 <input @keyup.enter="onEnter">
 <!-- key modifier using keyCode -->
 <input @keyup.13="onEnter">
 <!-- the click event will be triggered at most once -->
 <button v-on:click.once="doThis"></button>
 
Listening to custom events on a child component (the handler is called when “my-event” is emitted on the child):

<my-component @my-event="handleThis"></my-component>
 <!-- inline statement -->
 <my-component @my-event="handleThis(123, $event)"></my-component>
 <!-- native event on component -->
 <my-component @click.native="onClick"></my-component>

Own Examples:
<p v-on:mousemove="updateCo">Coordinates: {{ x }} / {{ y }}</p>

x: 0,
y: 0

updateCo: function(event){
      this.x = event.clientX;
      this.y = event.clientY;
    }


### v-bind

  Dynamically bind one or more attributes, or a component prop to an expression.

 .prop - Bind as a DOM property instead of an attribute. (what’s the difference?)
 .camel - (2.1.0+) transform the kebab-case attribute name into camelCase.
 .sync - (2.3.0+) a syntax sugar that expands into a v-on handler for updating the bound value.
 Usage:

 Example:

 <a v-bind:href="mylink">Google</a>
 data: mylink: 'http://www.google.com'

 <!-- bind an attribute -->
 <img v-bind:src="imageSrc">
 <!-- shorthand -->
 <img :src="imageSrc">
 <!-- with inline string concatenation -->
 <img :src="'/path/to/images/' + fileName">
 <!-- class binding -->
 <div :class="{ red: isRed }"></div>
 <div :class="[classA, classB]"></div>
 <div :class="[classA, { classB: isB, classC: isC }]">
 <!-- style binding -->
 <div :style="{ fontSize: size + 'px' }"></div>
 <div :style="[styleObjectA, styleObjectB]"></div>
 <!-- binding an object of attributes -->
 <div v-bind="{ id: someProp, 'other-attr': otherProp }"></div>
 <!-- DOM attribute binding with prop modifier -->
 <div v-bind:text-content.prop="text"></div>
 <!-- prop binding. "prop" must be declared in my-component. -->
 <my-component :prop="someThing"></my-component>
 <!-- pass down parent props in common with a child component -->
 <child-component v-bind.prop="$props"></child-component>
 <!-- XLink -->
 <svg><a :xlink:special="foo"></a></svg>
 The .camel modifier allows camelizing a v-bind attribute name when using in-DOM templates, e.g. the SVG viewBox attribute:

 <svg :view-box.camel="viewBox"></svg>
 .camel is not needed if you are using string templates, or compiling with vue-loader/vueify.

### v-model

Create a two-way binding on a form input element or a component. For detailed usage and other notes, see the Guide section linked below.

Limited to:

<input>
<select>
<textarea>
components
Modifiers:

.lazy - listen to change events instead of input
.number - cast input string to numbers
.trim - trim input



### Conditional Deirectives

v-if and v-else
Conditionally render the element based on the truthy-ness of the expression value. 
The element and its contained directives / components are destroyed and re-constructed during toggles. 
If the element is a <template> element, its content will be extracted as the conditional block.

Example:
Denote the “else block” for v-if or a v-if/v-else-if chain.
 <div v-if="Math.random() > 0.5">
   Now you see me
 </div>
 <div v-else>
   Now you don't
 </div>

```
 
v-else-if

Example:
Denote the “else if block” for v-if. Can be chained.
 <div v-if="type === 'A'">A</div>
 <div v-else-if="type === 'B'">B</div>
 <div v-else-if="type === 'C'">C</div>
 <div v-else>
   Not A/B/C
 </div>

```

v-for
Render the element or template block multiple times based on the source data. The directive’s value must use the special syntax alias in expression to provide an alias for the current element being iterated on:

 <div v-for="item in items">
   {{ item.text }}
 </div>

 Alternatively, you can also specify an alias for the index (or the key if used on an Object):

 <div v-for="(item, index) in items"></div>
 <div v-for="(val, key) in object"></div>
 <div v-for="(val, key, index) in object"></div>
 The default behavior of v-for will try to patch the elements in-place without moving them. To force it to reorder elements, you need to provide an ordering hint with the key special attribute:

 <div v-for="item in items" :key="item.id">
   {{ item.text }}
 </div>





### Some other Basic ones

v-text

Updates the element’s textContent. If you need to update the part of textContent, you should use {{ Mustache }} interpolations.
Example:
<span v-text="msg"></span>
<!-- same as -->
<span>{{msg}}</span>

```

v-html

Updates the element’s innerHTML. Note that the contents are inserted as plain HTML - they will not be compiled as Vue templates. If you find yourself trying to compose templates using v-html, try to rethink the solution by using components instead.
Example:
<div v-html="html"></div>

```

v-show
Toggle’s the element’s display CSS property based on the truthy-ness of the expression value.
This directive triggers transitions when its condition changes.
Example:
<alert show>
  {{title}}
</alert>

```

v-pre

Skip compilation for this element and all its children. 
You can use this for displaying raw mustache tags. 
Skipping large numbers of nodes with no directives on them can also speed up compilation.

Example:
<span v-pre>{{ this will not be compiled }}</span>

```

v-cloak

This directive will remain on the element until the associated Vue instance finishes compilation. Combined with CSS rules such as [v-cloak] { display: none }, this directive can be used to hide un-compiled mustache bindings until the Vue instance is ready.

Example:

[v-cloak] {
   display: none;
 }
 <div v-cloak>
   {{ message }}
 </div>
 The <div> will not be visible until the compilation is done.

```

 v-once

 Render the element and component once only. 

<!-- single element -->
 <span v-once>This will never change: {{msg}}</span>
 <!-- the element have children -->
 <div v-once>
   <h1>comment</h1>
   <p>{{msg}}</p>
 </div>
 <!-- component -->
 <my-component v-once :comment="msg"></my-component>
 <!-- v-for directive -->
 <ul>
   <li v-for="i in list" v-once>{{i}}</li>
 </ul>





