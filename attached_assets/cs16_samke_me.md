URL: https://cs16.samke.me/
---
## Installation

You can install cs16.css simply by pasting this to your html \`head\` tag:


Copy

```
<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/ekmas/cs16.css@main/css/cs16.min.css">
```

## Button

ButtonDisabled

Show code

Copy

```
<button class="cs-btn">Button</button>
<button disabled class="cs-btn">Disabled</button>
```

## Hr

* * *

Show code

Copy

```
<hr class="cs-hr" />
```

## Checkbox

Checkbox

Show code

Copy

```
<div class="cs-checkbox">
  <input id="checkbox" type="checkbox" />
  <label class="cs-checkbox__label" for="checkbox">Checkbox</label>
</div>
```

## Input

First name

Show code

Copy

```
<input class="cs-input" id="input" type="input" />
<label class="cs-input__label" for="input">First name</label>

<br />
<br />

<input type="text" value="John Doe" class="cs-input" />
<input type="text" disabled value="disabled" class="cs-input" />
```

## Select

Choose a car:VolvoSaabOpelAudi

Show code

Copy

```
<label class="cs-select__label" for="cars">Choose a car:</label>
<select class="cs-select" name="cars" id="cars">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="opel">Opel</option>
  <option value="audi">Audi</option>
</select>
```

## Radio Group

What is your favorite wild animal?

Elephant

Monkey

Cheetah

Giraffe

Show code

Copy

```
<fieldset class="cs-fieldset">
  <legend>What is your favorite wild animal?</legend>
  <div class="radio-wrapper">
    <input type="radio" name="animal" id="elephant" />
    <label for="elephant">Elephant</label>
  </div>
  <div class="radio-wrapper">
    <input type="radio" name="animal" id="monkey" />
    <label for="monkey">Monkey</label>
  </div>
  <div class="radio-wrapper">
    <input type="radio" name="animal" id="cheetah" />
    <label for="cheetah">Cheetah</label>
  </div>
  <div class="radio-wrapper">
    <input type="radio" name="animal" id="giraffe" />
    <label for="giraffe">Giraffe</label>
  </div>
</fieldset>
```

## Slider

Dark

Light

Brightness

Show code

Copy

```
<div class="cs-slider">
  <div class="value">
    <p>Dark</p>
    <p>Light</p>
  </div>
  <div class="ruler"></div>
  <input id="range" type="range" min="1" max="100" value="50" />
  <label for="range">Brightness</label>
</div>
```

## Dialog

Open dialog


Options

Lorem ipsum dolor sit amet consectetur adipisicing elit.
Distinctio ad suscipit aut asperiores laudantium error amet
sapiente et tempora numquam voluptates, velit sint quos
exercitationem unde obcaecati deleniti maiores officia natus
ipsa rem fuga commodi esse. Sunt repellendus ipsa illo a
accusantium consequuntur nihil dicta necessitatibus porro,
saepe, sed repudiandae!


OKCancelApply

Show code

Copy

```
<section>
  <button
    type="button"
    class="cs-btn"
    onclick="document.querySelector('.cs-dialog').showModal();"
  >
    Open dialog
  </button>
  <dialog class="cs-dialog">
    <form method="dialog">
      <div class="heading">
        <div class="wrapper">
          <div class="icon"></div>
          <p class="text">Options</p>
        </div>
        <button class="cs-btn close"></button>
      </div>
      <div class="content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Distinctio ad suscipit aut asperiores laudantium error amet
        sapiente et tempora numquam voluptates, velit sint quos
        exercitationem unde obcaecati deleniti maiores officia natus
        ipsa rem fuga commodi esse. Sunt repellendus ipsa illo a
        accusantium consequuntur nihil dicta necessitatibus porro,
        saepe, sed repudiandae!
      </div>
      <menu class="footer-btns">
        <button class="cs-btn">OK</button>
        <button class="cs-btn">Cancel</button>
        <button class="cs-btn">Apply</button>
      </menu>
    </form>
  </dialog>
</section>
```

## Tooltip

Right
Tooltip text

Left
Tooltip text

Top
Tooltip text

Bottom
Tooltip text

Show code

Copy

```
<div class="cs-tooltip">
  Right
  <span style="left: 125%" class="text">Tooltip text</span>
</div>
<br />
<div class="cs-tooltip">
  Left
  <span style="right: 125%" class="text">Tooltip text</span>
</div>
<br />
<div class="cs-tooltip">
  Top
  <span
    style="bottom: 100%; width: 100px; left: 50%; margin-left: -50px"
    class="text"
    >Tooltip text</span
  >
  <!-- set some width, and then set margin-left to be half of the width -->
</div>
<br />
<div class="cs-tooltip">
  Bottom
  <span
    style="top: 100%; width: 100px; left: 50%; margin-left: -50px"
    class="text"
    >Tooltip text</span
  >
  <!-- set some width, and then set margin-left to be half of the width -->
</div>
```

## Progress Bar

Show code

Copy

```
<div class="cs-progress-bar">
  <div style="width: 50%" class="bars"></div>
</div>
```

## Tabs

Tab One

## Tab One Content

Tab content...

Tab Two

## Tab Two Content

Tab content...

Tab Three

## Tab Three Content

Tab content...

Show code

Copy

```
<div class="cs-tabs">
  <input
    class="radiotab"
    name="tabs"
    tabindex="1"
    type="radio"
    id="tabone"
    checked="checked"
  />
  <label class="label" for="tabone">Tab One</label>
  <div class="panel" tabindex="1">
    <h2>Tab One Content</h2>
    <p>Tab content...</p>
  </div>
  <input
    class="radiotab"
    tabindex="1"
    name="tabs"
    type="radio"
    id="tabtwo"
  />
  <label class="label" for="tabtwo">Tab Two</label>
  <div class="panel" tabindex="1">
    <h2>Tab Two Content</h2>
    <p>Tab content...</p>
  </div>
  <input
    class="radiotab"
    tabindex="1"
    name="tabs"
    type="radio"
    id="tabthree"
  />
  <label class="label" for="tabthree">Tab Three</label>
  <div class="panel" tabindex="1">
    <h2>Tab Three Content</h2>
    <p>Tab content...</p>
  </div>
</div>
```