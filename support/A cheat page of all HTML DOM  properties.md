Attributes 
-------------------------------
attr.isId	Returns true if the attribute is of type Id, otherwise it returns false
attr.name	Returns the name of an attribute
attr.value	Sets or returns the value of the attribute
attr.specified	Returns true if the attribute has been specified, otherwise it returns false
 	 
nodemap.getNamedItem()	Returns a specified attribute node from a NamedNodeMap
nodemap.item()	Returns the attribute node at a specified index in a NamedNodeMap
nodemap.length	Returns the number of attribute nodes in a NamedNodeMap
nodemap.removeNamedItem()	Removes a specified attribute node
nodemap.setNamedItem()	Sets the specified attribute node (by name)

AVIOD THESE Property / Method (Reason for avoiding)
attr.appendChild()	Attributes don't have child nodes
attr.attributes	Attributes don't have attributes
attr.baseURI	use document.baseURI instead
attr.childNodes	Attributes don't have child nodes
attr.cloneNode()	Get or set the attr.value instead
attr.firstChild	Attributes don't have child nodes
attr.hasAttributes()	Attributes don't have attributes
attr.hasChildNodes	Attributes don't have child nodes
attr.insertBefore()	Attributes don't have child nodes
attr.isEqualNode()	Makes no sense
attr.isSameNode()	Makes no sense
attr.isSupported()	Is always true
attr.lastChild	Attributes don't have child nodes
attr.nextSibling	Attributes don't have siblings
attr.nodeName	Use attr.name instead
attr.nodeType	This is always 2 (ATTRIBUTE_NODE)
attr.nodeValue	Use attr.value instead
attr.normalize()	Attributes cannot be normalized
attr.ownerDocument	This is always your HTML document
attr.ownerElement	This is the HTML element you used to access the attribute
attr.parentNode	This is the HTML element you used to access the attribute
attr.previousSibling	Attributes don't have siblings
attr.removeChild	Attributes don't have child nodes
attr.replaceChild	Attributes don't have child nodes
attr.textContent	Use attr.value instead


Style [Object Properties]
-------------------------------
alignContent	Sets or returns the alignment between the lines inside a flexible container when the items do not use all available space	3
alignItems	Sets or returns the alignment for items inside a flexible container	3
alignSelf	Sets or returns the alignment for selected items inside a flexible container	3
animation	A shorthand property for all the animation properties below, except the animationPlayState property	3
animationDelay	Sets or returns when the animation will start	3
animationDirection	Sets or returns whether or not the animation should play in reverse on alternate cycles	3
animationDuration	Sets or returns how many seconds or milliseconds an animation takes to complete one cycle	3
animationFillMode	Sets or returns what values are applied by the animation outside the time it is executing	3
animationIterationCount	Sets or returns the number of times an animation should be played	3
animationName	Sets or returns a name for the @keyframes animation	3
animationTimingFunction	Sets or returns the speed curve of the animation	3
animationPlayState	Sets or returns whether the animation is running or paused	3
background	Sets or returns all the background properties in one declaration	1
backgroundAttachment	Sets or returns whether a background-image is fixed or scrolls with the page	1
backgroundColor	Sets or returns the background-color of an element	1
backgroundImage	Sets or returns the background-image for an element	1
backgroundPosition	Sets or returns the starting position of a background-image	1
backgroundRepeat	Sets or returns how to repeat (tile) a background-image	1
backgroundClip	Sets or returns the painting area of the background	3
backgroundOrigin	Sets or returns the positioning area of the background images	3
backgroundSize	Sets or returns the size of the background image	3
backfaceVisibility	Sets or returns whether or not an element should be visible when not facing the screen	3
border	Sets or returns borderWidth, borderStyle, and borderColor in one declaration	1
borderBottom	Sets or returns all the borderBottom* properties in one declaration	1
borderBottomColor	Sets or returns the color of the bottom border	1 
borderBottomLeftRadius	Sets or returns the shape of the border of the bottom-left corner	3
borderBottomRightRadius	Sets or returns the shape of the border of the bottom-right corner	3
borderBottomStyle	Sets or returns the style of the bottom border	1
borderBottomWidth	Sets or returns the width of the bottom border	1
borderCollapse	Sets or returns whether the table border should be collapsed into a single border, or not	2
borderColor	Sets or returns the color of an element's border (can have up to four values)	1
borderImage	A shorthand property for setting or returning all the borderImage* properties	3
borderImageOutset	Sets or returns the amount by which the border image area extends beyond the border box	3
borderImageRepeat	Sets or returns whether the image-border should be repeated, rounded or stretched	3
borderImageSlice	Sets or returns the inward offsets of the image-border	3
borderImageSource	Sets or returns the image to be used as a border	3
borderImageWidth	Sets or returns the widths of the image-border	3
borderLeft	Sets or returns all the borderLeft* properties in one declaration	1
borderLeftColor	Sets or returns the color of the left border	1
borderLeftStyle	Sets or returns the style of the left border	1
borderLeftWidth	Sets or returns the width of the left border	1
borderRadius	A shorthand property for setting or returning all the four border*Radius properties	3
borderRight	Sets or returns all the borderRight* properties in one declaration	1
borderRightColor	Sets or returns the color of the right border	1
borderRightStyle	Sets or returns the style of the right border	1
borderRightWidth	Sets or returns the width of the right border	1
borderSpacing	Sets or returns the space between cells in a table	2
borderStyle	Sets or returns the style of an element's border (can have up to four values)	1
borderTop	Sets or returns all the borderTop* properties in one declaration	1
borderTopColor	Sets or returns the color of the top border	1
borderTopLeftRadius	Sets or returns the shape of the border of the top-left corner	3
borderTopRightRadius	Sets or returns the shape of the border of the top-right corner	3
borderTopStyle	Sets or returns the style of the top border	1
borderTopWidth	Sets or returns the width of the top border	1
borderWidth	Sets or returns the width of an element's border (can have up to four values)	1
bottom	Sets or returns the bottom position of a positioned element	2
boxDecorationBreak	Sets or returns the behaviour of the background and border of an element at page-break, or, for in-line elements, at line-break.	3
boxShadow	Attaches one or more drop-shadows to the box	3
boxSizing	Allows you to define certain elements to fit an area in a certain way	3
captionSide	Sets or returns the position of the table caption	2
clear	Sets or returns the position of the element relative to floating objects	1
clip	Sets or returns which part of a positioned element is visible	2
color	Sets or returns the color of the text	1
columnCount	Sets or returns the number of columns an element should be divided into	3
columnFill	Sets or returns how to fill columns	3
columnGap	Sets or returns the gap between the columns	3
columnRule	A shorthand property for setting or returning all the columnRule* properties	3
columnRuleColor	Sets or returns the color of the rule between columns	3
columnRuleStyle	Sets or returns the style of the rule between columns	3
columnRuleWidth	Sets or returns the width of the rule between columns	3
columns	A shorthand property for setting or returning columnWidth and columnCount	3
columnSpan	Sets or returns how many columns an element should span across	3
columnWidth	Sets or returns the width of the columns	3
content	Used with the :before and :after pseudo-elements, to insert generated content	2
counterIncrement	Increments one or more counters	2
counterReset	Creates or resets one or more counters	2
cursor	Sets or returns the type of cursor to display for the mouse pointer	2
direction	Sets or returns the text direction	2
display	Sets or returns an element's display type	1
emptyCells	Sets or returns whether to show the border and background of empty cells, or not	2
filter	Sets or returns image filters (visual effects, like blur and saturation)	3
flex	Sets or returns the length of the item, relative to the rest	3
flexBasis	Sets or returns the initial length of a flexible item	3
flexDirection	Sets or returns the direction of the flexible items	3
flexFlow	A shorthand property for the flexDirection and the flexWrap properties	3
flexGrow	Sets or returns how much the item will grow relative to the rest	3
flexShrink	Sets or returns how the item will shrink relative to the rest	3
flexWrap	Sets or returns whether the flexible items should wrap or not	3
cssFloat	Sets or returns the horizontal alignment of an element	1
font	Sets or returns fontStyle, fontVariant, fontWeight, fontSize, lineHeight, and fontFamily in one declaration	1
fontFamily	Sets or returns the font family for text	1
fontSize	Sets or returns the font size of the text	1
fontStyle	Sets or returns whether the style of the font is normal, italic or oblique	1
fontVariant	Sets or returns whether the font should be displayed in small capital letters	1
fontWeight	Sets or returns the boldness of the font	1
fontSizeAdjust	Preserves the readability of text when font fallback occurs	3
fontStretch	Selects a normal, condensed, or expanded face from a font family	3
hangingPunctuation	Specifies whether a punctuation character may be placed outside the line box	3
height	Sets or returns the height of an element	1
hyphens	Sets how to split words to improve the layout of paragraphs	3
icon	Provides the author the ability to style an element with an iconic equivalent	3
imageOrientation	Specifies a rotation in the right or clockwise direction that a user agent applies to an image	3
justifyContent	Sets or returns the alignment between the items inside a flexible container when the items do not use all available space.	3
left	Sets or returns the left position of a positioned element	2
letterSpacing	Sets or returns the space between characters in a text	1
lineHeight	Sets or returns the distance between lines in a text	1
listStyle	Sets or returns listStyleImage, listStylePosition, and listStyleType in one declaration	1
listStyleImage	Sets or returns an image as the list-item marker	1
listStylePosition	Sets or returns the position of the list-item marker	1
listStyleType	Sets or returns the list-item marker type	1
margin	Sets or returns the margins of an element (can have up to four values)	1
marginBottom	Sets or returns the bottom margin of an element	1
marginLeft	Sets or returns the left margin of an element	1
marginRight	Sets or returns the right margin of an element	1
marginTop	Sets or returns the top margin of an element	1
maxHeight	Sets or returns the maximum height of an element	2
maxWidth	Sets or returns the maximum width of an element	2
minHeight	Sets or returns the minimum height of an element	2
minWidth	Sets or returns the minimum width of an element	2
navDown	Sets or returns where to navigate when using the arrow-down navigation key	3
navIndex	Sets or returns the tabbing order for an element	3
navLeft	Sets or returns where to navigate when using the arrow-left navigation key	3
navRight	Sets or returns where to navigate when using the arrow-right navigation key	3
navUp	Sets or returns where to navigate when using the arrow-up navigation key	3
opacity	Sets or returns the opacity level for an element	3
order	Sets or returns the order of the flexible item, relative to the rest	3
orphans	Sets or returns the minimum number of lines for an element that must be left at the bottom of a page when a page break occurs inside an element	2
outline	Sets or returns all the outline properties in one declaration	2
outlineColor	Sets or returns the color of the outline around a element	2
outlineOffset	Offsets an outline, and draws it beyond the border edge	3
outlineStyle	Sets or returns the style of the outline around an element	2
outlineWidth	Sets or returns the width of the outline around an element	2
overflow	Sets or returns what to do with content that renders outside the element box	2
overflowX	Specifies what to do with the left/right edges of the content, if it overflows the element's content area	3
overflowY	Specifies what to do with the top/bottom edges of the content, if it overflows the element's content area	3
padding	Sets or returns the padding of an element (can have up to four values)	1
paddingBottom	Sets or returns the bottom padding of an element	1
paddingLeft	Sets or returns the left padding of an element	1
paddingRight	Sets or returns the right padding of an element	1
paddingTop	Sets or returns the top padding of an element	1
pageBreakAfter	Sets or returns the page-break behavior after an element	2
pageBreakBefore	Sets or returns the page-break behavior before an element	2
pageBreakInside	Sets or returns the page-break behavior inside an element	2
perspective	Sets or returns the perspective on how 3D elements are viewed	3
perspectiveOrigin	Sets or returns the bottom position of 3D elements	3
position	Sets or returns the type of positioning method used for an element (static, relative, absolute or fixed)	2
quotes	Sets or returns the type of quotation marks for embedded quotations	2
resize	Sets or returns whether or not an element is resizable by the user	3
right	Sets or returns the right position of a positioned element	2
tableLayout	Sets or returns the way to lay out table cells, rows, and columns	2
tabSize	Sets or returns the length of the tab-character	3
textAlign	Sets or returns the horizontal alignment of text	1
textAlignLast	Sets or returns how the last line of a block or a line right before a forced line break is aligned when text-align is "justify"	3
textDecoration	Sets or returns the decoration of a text	1
textDecorationColor	Sets or returns the color of the text-decoration	3
textDecorationLine	Sets or returns the type of line in a text-decoration	3
textDecorationStyle	Sets or returns the style of the line in a text decoration	3
textIndent	Sets or returns the indentation of the first line of text	1
textJustify	Sets or returns the justification method used when text-align is "justify"	3
textOverflow	Sets or returns what should happen when text overflows the containing element	3
textShadow	Sets or returns the shadow effect of a text	3
textTransform	Sets or returns the capitalization of a text	1
top	Sets or returns the top position of a positioned element	2
transform	Applies a 2D or 3D transformation to an element	3
transformOrigin	Sets or returns the position of transformed elements	3
transformStyle	Sets or returns how nested elements are rendered in 3D space	3
transition	A shorthand property for setting or returning the four transition properties	3
transitionProperty	Sets or returns the CSS property that the transition effect is for	3
transitionDuration	Sets or returns how many seconds or milliseconds a transition effect takes to complete	3
transitionTimingFunction	Sets or returns the speed curve of the transition effect	3
transitionDelay	Sets or returns when the transition effect will start	3
unicodeBidi	Sets or returns whether the text should be overridden to support multiple languages in the same document	2
userSelect	Sets or returns whether the text of an element can be selected or not	2
verticalAlign	Sets or returns the vertical alignment of the content in an element	1
visibility	Sets or returns whether an element should be visible	2
whiteSpace	Sets or returns how to handle tabs, line breaks and whitespace in a text	1
width	Sets or returns the width of an element	1
wordBreak	Sets or returns line breaking rules for non-CJK scripts	3
wordSpacing	Sets or returns the spacing between words in a text	1
wordWrap	Allows long, unbreakable words to be broken and wrap to the next line	3
widows	Sets or returns the minimum number of lines for an element that must be visible at the top of a page	2
zIndex	Sets or returns the stack order of a positioned element	2

Mouse [Events]
--------------------------------------
onclick	The event occurs when the user clicks on an element	2
oncontextmenu	The event occurs when the user right-clicks on an element to open a context menu	3
ondblclick	The event occurs when the user double-clicks on an element	2
onmousedown	The event occurs when the user presses a mouse button over an element	2
onmouseenter	The event occurs when the pointer is moved onto an element	2
onmouseleave	The event occurs when the pointer is moved out of an element	2
onmousemove	The event occurs when the pointer is moving while it is over an element	2
onmouseover	The event occurs when the pointer is moved onto an element, or onto one of its children	2
onmouseout	The event occurs when a user moves the mouse pointer out of an element, or out of one of its children	2
onmouseup	The event occurs when a user releases a mouse button over an element	2

Keyboard [ Events]
--------------------------------------
onkeydown	The event occurs when the user is pressing a key	2
onkeypress	The event occurs when the user presses a key	2
onkeyup	The event occurs when the user releases a key	2

Frame/Object[Events]
--------------------------------------
onabort	The event occurs when the loading of a resource has been aborted	2
onbeforeunload	The event occurs before the document is about to be unloaded	2
onerror	The event occurs when an error occurs while loading an external file	2
onhashchange	The event occurs when there has been changes to the anchor part of a URL	3
onload	The event occurs when an object has loaded	2
onpageshow	The event occurs when the user navigates to a webpage	3
onpagehide	The event occurs when the user navigates away from a webpage	3
onresize	The event occurs when the document view is resized	2
onscroll	The event occurs when an element's scrollbar is being scrolled	2
onunload	The event occurs once a page has unloaded (for <body>)	2

Form [Keyboard Events]
--------------------------------------
onblur	The event occurs when an element loses focus	2
onchange	The event occurs when the content of a form element, the selection, or the checked state have changed (for <input>, <keygen>, <select>, and <textarea>)	2
onfocus	The event occurs when an element gets focus	2
onfocusin	The event occurs when an element is about to get focus	2
onfocusout	The event occurs when an element is about to lose focus	2
oninput	The event occurs when an element gets user input	3
oninvalid	The event occurs when an element is invalid	3
onreset	The event occurs when a form is reset	2
onsearch	The event occurs when the user writes something in a search field (for <input="search">)	3
onselect	The event occurs after the user selects some text (for <input> and <textarea>)	2
onsubmit	The event occurs when a form is submitted	2

Drag Events [Events]
--------------------------------------
ondrag	The event occurs when an element is being dragged	3
ondragend	The event occurs when the user has finished dragging an element	3
ondragenter	The event occurs when the dragged element enters the drop target	3
ondragleave	The event occurs when the dragged element leaves the drop target	3
ondragover	The event occurs when the dragged element is over the drop target	3
ondragstart	The event occurs when the user starts to drag an element	3
ondrop	The event occurs when the dragged element is dropped on the drop target	3

Clipboard [Events]
--------------------------------------
oncopy	The event occurs when the user copies the content of an element	 
oncut	The event occurs when the user cuts the content of an element	 
onpaste	The event occurs when the user pastes some content in an element	 
Print Events
Event	Description	DOM
onafterprint	The event occurs when a page has started printing, or if the print dialogue box has been closed	3
onbeforeprint	The event occurs when a page is about to be printed	3
Media Events
Event	Description	DOM


Mouse [Events]
--------------------------------------
onabort	The event occurs when the loading of a media is aborted	3
oncanplay	The event occurs when the browser can start playing the media (when it has buffered enough to begin)	3
oncanplaythrough	The event occurs when the browser can play through the media without stopping for buffering	3
ondurationchange	The event occurs when the duration of the media is changed	3
onemptied	The event occurs when something bad happens and the media file is suddenly unavailable (like unexpectedly disconnects)	3
onended	The event occurs when the media has reach the end (useful for messages like "thanks for listening")	3
onerror	The event occurs when an error occurred during the loading of a media file	3
onloadeddata	The event occurs when media data is loaded	3
onloadedmetadata	The event occurs when meta data (like dimensions and duration) are loaded	3
onloadstart	The event occurs when the browser starts looking for the specified media	3
onpause	The event occurs when the media is paused either by the user or programmatically	3
onplay	The event occurs when the media has been started or is no longer paused	3
onplaying	The event occurs when the media is playing after having been paused or stopped for buffering	3
onprogress	The event occurs when the browser is in the process of getting the media data (downloading the media)	3
onratechange	The event occurs when the playing speed of the media is changed	3
onseeked	The event occurs when the user is finished moving/skipping to a new position in the media	3
onseeking	The event occurs when the user starts moving/skipping to a new position in the media	3
onstalled	The event occurs when the browser is trying to get media data, but data is not available	3
onsuspend	The event occurs when the browser is intentionally not getting media data	3
ontimeupdate	The event occurs when the playing position has changed (like when the user fast forwards to a different point in the media)	3
onvolumechange	The event occurs when the volume of the media has changed (includes setting the volume to "mute")	3
onwaiting	The event occurs when the media has paused but is expected to resume (like when the media pauses to buffer more data)	3


Animation Events [Events]
--------------------------------------
Event	Description	DOM
animationend	The event occurs when a CSS animation has completed	3
animationiteration	The event occurs when a CSS animation is repeated	3
animationstart	The event occurs when a CSS animation has started	3

Transition Events [Events]
--------------------------------------
transitionend	The event occurs when a CSS transition has completed	3



Server-Sent Events [Events]
--------------------------------------
onerror	The event occurs when an error occurs with the event source	 
onmessage	The event occurs when a message is received through the event source	 
onopen	The event occurs when a connection with the event source is opened	 

Misc Events [Events]
--------------------------------------
onmessage	The event occurs when a message is received through or from an object (WebSocket, Web Worker, Event Source or a child frame or a parent window)	3
onmousewheel	Deprecated. Use the onwheel event instead	 
ononline	The event occurs when the browser starts to work online	3
onoffline	The event occurs when the browser starts to work offline	3
onpopstate	The event occurs when the window's history changes	3
onshow	The event occurs when a <menu> element is shown as a context menu	3
onstorage	The event occurs when a Web Storage area is updated	3
ontoggle	The event occurs when the user opens or closes the <details> element	3
onwheel	The event occurs when the mouse wheel rolls up or down over an element	3
Touch Events
Event	Description	DOM
ontouchcancel	The event occurs when the touch is interrupted	 
ontouchend	The event occurs when a finger is removed from a touch screen	 
ontouchmove	The event occurs when a finger is dragged across the screen	 
ontouchstart	The event occurs when a finger is placed on a touch screen	 
Event Object
Constants
Constant	Description	DOM
CAPTURING_PHASE	The current event phase is the capture phase (1)	1
AT_TARGET	The current event is in the target phase, i.e. it is being evaluated at the event target (2)	2
BUBBLING_PHASE	The current event phase is the bubbling phase (3)	3
Properties
Property	Description	DOM
bubbles	Returns whether or not a specific event is a bubbling event	2
cancelable	Returns whether or not an event can have its default action prevented	2
currentTarget	Returns the element whose event listeners triggered the event	2
defaultPrevented	Returns whether or not the preventDefault() method was called for the event	3
eventPhase	Returns which phase of the event flow is currently being evaluated	2
isTrusted	Returns whether or not an event is trusted	3
target	Returns the element that triggered the event	2
timeStamp	Returns the time (in milliseconds relative to the epoch) at which the event was created	2
type	Returns the name of the event	2
view	Returns a reference to the Window object where the event occured	2
Methods
Method	Description	DOM
preventDefault()	Cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur	2
stopImmediatePropagation()	Prevents other listeners of the same event from being called	3
stopPropagation()	Prevents further propagation of an event during event flow	2
MouseEvent Object
Property	Description	DOM
altKey	Returns whether the "ALT" key was pressed when the mouse event was triggered	2
button	Returns which mouse button was pressed when the mouse event was triggered	2
buttons	Returns which mouse buttons were pressed when the mouse event was triggered	3
clientX	Returns the horizontal coordinate of the mouse pointer, relative to the current window, when the mouse event was triggered	2
clientY	Returns the vertical coordinate of the mouse pointer, relative to the current window, when the mouse event was triggered	2
ctrlKey	Returns whether the "CTRL" key was pressed when the mouse event was triggered	2
detail	Returns a number that indicates how many times the mouse was clicked	2
metaKey	Returns whether the "META" key was pressed when an event was triggered	2
pageX	Returns the horizontal coordinate of the mouse pointer, relative to the document, when the mouse event was triggered	 
pageY	Returns the vertical coordinate of the mouse pointer, relative to the document, when the mouse event was triggered	 
relatedTarget	Returns the element related to the element that triggered the mouse event	2
screenX	Returns the horizontal coordinate of the mouse pointer, relative to the screen, when an event was triggered	2
screenY	Returns the vertical coordinate of the mouse pointer, relative to the screen, when an event was triggered	2
shiftKey	Returns whether the "SHIFT" key was pressed when an event was triggered	2
which	Returns which mouse button was pressed when the mouse event was triggered	2
KeyboardEvent Object
Property	Description	DOM
altKey	Returns whether the "ALT" key was pressed when the key event was triggered	2
ctrlKey	Returns whether the "CTRL" key was pressed when the key event was triggered	2
charCode	Returns the Unicode character code of the key that triggered the onkeypress event	2
key	Returns the key value of the key represented by the event	3
keyCode	Returns the Unicode character code of the key that triggered the onkeypress event, or the Unicode key code of the key that triggered the onkeydown or onkeyup event	2
location	Returns the location of a key on the keyboard or device	3
metaKey	Returns whether the "meta" key was pressed when the key event was triggered	2
shiftKey	Returns whether the "SHIFT" key was pressed when the key event was triggered	2
which	Returns the Unicode character code of the key that triggered the onkeypress event, or the Unicode key code of the key that triggered the onkeydown or onkeyup event	2
HashChangeEvent Object
Property	Description	DOM
newURL	Returns the URL of the document, after the hash has been changed	
oldURL	Returns the URL of the document, before the hash was changed	
PageTransitionEvent Object
Property	Description	DOM
persisted	Returns whether the webpage was cached by the browser	 
FocusEvent Object
Property	Description	DOM
relatedTarget	Returns the element related to the element that triggered the event	3
AnimationEvent Object
Property	Description	DOM
animationName	Returns the name of the animation	
elapsedTime	Returns the number of seconds an animation has been running	
TransitionEvent Object
Property	Description	DOM
propertyName	Returns the name of the CSS property associated with the transition	
elapsedTime	Returns the number of seconds a transition has been running	
WheelEvent Object
Property	Description	DOM
deltaX	Returns the horizontal scroll amount of a mouse wheel (x-axis)	3
deltaY	Returns the vertical scroll amount of a mouse wheel (y-axis)	3
deltaZ	Returns the scroll amount of a mouse wheel for the z-axis	3
deltaMode	Returns a number that represents the unit of measurements for delta values (pixels, lines or pages)


elements [ Properties and Methods]
----------------------------

The following properties and methods can be used on all HTML elements:

element.accessKey	Sets or returns the accesskey attribute of an element
element.addEventListener()	Attaches an event handler to the specified element
element.appendChild()	Adds a new child node, to an element, as the last child node
element.attributes	Returns a NamedNodeMap of an element's attributes
element.blur()	Removes focus from an element
element.childElementCount	Returns the number of child elements an element has
element.childNodes	Returns a collection of an element's child nodes (including text and comment nodes)
element.children	Returns a collection of an element's child element (excluding text and comment nodes)
element.classList	Returns the class name(s) of an element
element.className	Sets or returns the value of the class attribute of an element
element.click()	Simulates a mouse-click on an element
element.clientHeight	Returns the height of an element, including padding
element.clientLeft	Returns the width of the left border of an element
element.clientTop	Returns the width of the top border of an element
element.clientWidth	Returns the width of an element, including padding
element.cloneNode()	Clones an element
element.compareDocumentPosition()	Compares the document position of two elements
element.contains()	Returns true if a node is a descendant of a node, otherwise false
element.contentEditable	Sets or returns whether the content of an element is editable or not
element.dir	Sets or returns the value of the dir attribute of an element
element.firstChild	Returns the first child node of an element
element.firstElementChild	Returns the first child element of an element
element.focus()	Gives focus to an element
element.getAttribute()	Returns the specified attribute value of an element node
element.getAttributeNode()	Returns the specified attribute node
element.getElementsByClassName()	Returns a collection of all child elements with the specified class name
element.getElementsByTagName()	Returns a collection of all child elements with the specified tag name
element.getFeature()	Returns an object which implements the APIs of a specified feature
element.hasAttribute()	Returns true if an element has the specified attribute, otherwise false
element.hasAttributes()	Returns true if an element has any attributes, otherwise false
element.hasChildNodes()	Returns true if an element has any child nodes, otherwise false
element.id	Sets or returns the value of the id attribute of an element
element.innerHTML	Sets or returns the content of an element
element.insertBefore()	Inserts a new child node before a specified, existing, child node
element.isContentEditable	Returns true if the content of an element is editable, otherwise false
element.isDefaultNamespace()	Returns true if a specified namespaceURI is the default, otherwise false
element.isEqualNode()	Checks if two elements are equal
element.isSameNode()	Checks if two elements are the same node
element.isSupported()	Returns true if a specified feature is supported on the element
element.lang	Sets or returns the value of the lang attribute of an element
element.lastChild	Returns the last child node of an element
element.lastElementChild	Returns the last child element of an element
element.namespaceURI	Returns the namespace URI of an element
element.nextSibling	Returns the next node at the same node tree level
element.nextElementSibling	Returns the next element at the same node tree level
element.nodeName	Returns the name of a node
element.nodeType	Returns the node type of a node
element.nodeValue	Sets or returns the value of a node
element.normalize()	Joins adjacent text nodes and removes empty text nodes in an element
element.offsetHeight	Returns the height of an element, including padding, border and scrollbar
element.offsetWidth	Returns the width of an element, including padding, border and scrollbar
element.offsetLeft	Returns the horizontal offset position of an element
element.offsetParent	Returns the offset container of an element
element.offsetTop	Returns the vertical offset position of an element
element.ownerDocument	Returns the root element (document object) for an element
element.parentNode	Returns the parent node of an element
element.parentElement	Returns the parent element node of an element
element.previousSibling	Returns the previous node at the same node tree level
element.previousElementSibling	Returns the previous element at the same node tree level
element.querySelector()	Returns the first child element that matches a specified CSS selector(s) of an element
element.querySelectorAll()	Returns all child elements that matches a specified CSS selector(s) of an element
element.removeAttribute()	Removes a specified attribute from an element
element.removeAttributeNode()	Removes a specified attribute node, and returns the removed node
element.removeChild()	Removes a child node from an element
element.replaceChild()	Replaces a child node in an element
element.removeEventListener()	Removes an event handler that has been attached with the addEventListener() method
element.scrollHeight	Returns the entire height of an element, including padding
element.scrollIntoView()	Scrolls the specified element into the visible area of the browser window
element.scrollLeft	Sets or returns the number of pixels an element's content is scrolled horizontally
element.scrollTop	Sets or returns the number of pixels an element's content is scrolled vertically
element.scrollWidth	Returns the entire width of an element, including padding
element.setAttribute()	Sets or changes the specified attribute, to the specified value
element.setAttributeNode()	Sets or changes the specified attribute node
element.style	Sets or returns the value of the style attribute of an element
element.tabIndex	Sets or returns the value of the tabindex attribute of an element
element.tagName	Returns the tag name of an element
element.textContent	Sets or returns the textual content of a node and its descendants
element.title	Sets or returns the value of the title attribute of an element
element.toString()	Converts an element to a string
 	 
nodelist.item()	Returns the node at the specified index in a NodeList
nodelist.length	Returns the number of nodes in a NodeList

Document Object Properties and Methods
----------------------
document.activeElement	Returns the currently focused element in the document
document.addEventListener()	Attaches an event handler to the document
document.adoptNode()	Adopts a node from another document
document.anchors	Returns a collection of all <a> elements in the document that have a name attribute
document.applets	Returns a collection of all <applet> elements in the document
document.baseURI	Returns the absolute base URI of a document
document.body	Sets or returns the document's body (the <body> element)
document.close()	Closes the output stream previously opened with document.open()
document.cookie	Returns all name/value pairs of cookies in the document
document.charset	Deprecated. Use document.characterSet instead. Returns the character encoding for the document
document.characterSet	Returns the character encoding for the document
document.createAttribute()	Creates an attribute node
document.createComment()	Creates a Comment node with the specified text
document.createDocumentFragment()	Creates an empty DocumentFragment node
document.createElement()	Creates an Element node
document.createTextNode()	Creates a Text node
document.doctype	Returns the Document Type Declaration associated with the document
document.documentElement	Returns the Document Element of the document (the <html> element)
document.documentMode	Returns the mode used by the browser to render the document
document.documentURI	Sets or returns the location of the document
document.domain	Returns the domain name of the server that loaded the document
document.domConfig	Obsolete. Returns the DOM configuration of the document
document.embeds	Returns a collection of all <embed> elements the document
document.forms	Returns a collection of all <form> elements in the document
document.getElementById()	Returns the element that has the ID attribute with the specified value
document.getElementsByClassName()	Returns a NodeList containing all elements with the specified class name
document.getElementsByName()	Returns a NodeList containing all elements with a specified name
document.getElementsByTagName()	Returns a NodeList containing all elements with the specified tag name
document.hasFocus()	Returns a Boolean value indicating whether the document has focus
document.head	Returns the <head> element of the document
document.images	Returns a collection of all <img> elements in the document
document.implementation	Returns the DOMImplementation object that handles this document
document.importNode()	Imports a node from another document
document.inputEncoding	Returns the encoding, character set, used for the document
document.lastModified	Returns the date and time the document was last modified
document.links	Returns a collection of all <a> and <area> elements in the document that have a href attribute
document.normalize()	Removes empty Text nodes, and joins adjacent nodes
document.normalizeDocument()	Removes empty Text nodes, and joins adjacent nodes
document.open()	Opens an HTML output stream to collect output from document.write()
document.querySelector()	Returns the first element that matches a specified CSS selector(s) in the document
document.querySelectorAll()	Returns a static NodeList containing all elements that matches a specified CSS selector(s) in the document
document.readyState	Returns the (loading) status of the document
document.referrer	Returns the URL of the document that loaded the current document
document.removeEventListener()	Removes an event handler from the document (that has been attached with the addEventListener() method)
document.renameNode()	Renames the specified node
document.scripts	Returns a collection of <script> elements in the document
document.strictErrorChecking	Sets or returns whether error-checking is enforced or not
document.title	Sets or returns the title of the document
document.URL	Returns the full URL of the HTML document
document.write()	Writes HTML expressions or JavaScript code to a document
document.writeln()	Same as write(), but adds a newline character after each statement
