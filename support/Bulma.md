GOODIES:

---------------------------------------
Helpers
is-fullwidth	// Takes up the whole width (100%)
has-text-centered	// Centers the text
has-text-left	// Text is left-aligned
has-text-right	// Text is right-aligned
is-marginless	// Removes any margin
is-paddingless	// Removes any padding
is-unselectable	// Prevents the text from being selectable



grid:
is-vcentered // is vertically centered
is-gapless // no padding
is-multiline //
is-narrow // "column is-narrow" i  you want a column to only take the space it needs The other column(s) will fill up the remaining space.


hero:
is-fullheight // full height
is-medium // medium height
is-bold // you can generate a subtle gradient

section:



---------------------------------------
tile:

is-ancestor // will wrap all other tiles:

<div class="tile is-ancestor">
  <div class="tile is-4">
    <!-- 1/3 -->
  </div>
  <div class="tile">
    <!-- This tile will take the rest: 2/3 -->
  </div>
</div>

As soon as you want to add content to a tile, just:
is-parent //
is-child //

<div class="tile is-ancestor">
  <div class="tile is-4 is-vertical is-parent">
    <div class="tile is-child box">
      <p class="title">One</p>
    </div>
    <div class="tile is-child box">
      <p class="title">Two</p>
    </div>
  </div>
  <div class="tile is-parent">
    <div class="tile is-child box">
      <p class="title">Three</p>
    </div>
  </div>
</div>



---------------------------------------

BUILD IT UP using container and columns/tiles:

example
section class="hero"
  > hero-head > container
  > hero-body > container > columns
                                  > column is-5 > figure > img
                                  > column is-6 is-offset-1 > h1 + h2 etc




example:

<section class="hero is-fullheight is-default is-bold">
  <div class="hero-head">
    <div class="container">
    </div>
  </div>

  <div class="hero-body">
    <div class="container has-text-centered">
      <div class="columns is-vcentered">
        <div class="column is-5">
          <figure class="image">
            <img src="../assets/images/component_bgs/circle.png" alt="">
          </figure>
        </div>
        <div class="column is-6 is-offset-1">
          <h1 class="title is-2">
            Superhero Scaffolding
          </h1>
          <h2 class="subtitle is-4">
            Let this cover page describe a product or service.
          </h2>
          <br>
          <p class="has-text-centered">
            <a class="button is-large">
              Learn more
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

---------------------------------------
THESE ARE the big layout types:

.nav
.hero
.section
.footer

---------------------------------------

container: use conatiner & container-fluid.

---------------------------------------
Content:
A single class to handle WYSIWYG generated content, where only HTML tags are available
<div class="content">
  <h1>Hello World</h1>
</div>
---------------------------------------
IMAGES: use figure

<figure class="image is-128x128">
  <img src="http://bulma.io/images/placeholders/256x256.png">
</figure>

formats:

image is-square	// Square (or 1by1)
image is-1by1	// 1 by 1
image is-4by3	// 4 by 3
image is-3by2	// 3 by 2
image is-16by9	// 16 by 9

image is-16x16	// 16x16px etc
image is-24x24
image is-32x32
image is-48x48
image is-64x64
image is-96x96
image is-128x128

---------------------------------------
---------------------------------------
---------------------------------------
---------------------------------------
---------------------------------------
---------------------------------------
.is-mobile:

use is-mobile on "columns" is you want to overright the mobile full width.
ex:

<div class="columns is-mobile">
  <div class="column is-offset-1 is-2">
    <div class="burger">
      <img class="menu-icon" src="../../assets/images/icons/menu_open_icon.png" alt="">
    </div>
</div>
