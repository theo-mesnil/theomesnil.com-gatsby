# Menu Animation

## Sandbox

Simple animations on element :before for menu hover with CSS3

[Demo](https://www.theomesnil.com/demo/menu-animation/) / [Direct Download](https://www.theomesnil.com/demo/menu-animation/MenuAnimation.zip)

![alt text](https://www.theomesnil.com/data/images/menu-animation.gif "theomesnil.com")

## How to contribute

1. Fork this repo
2. Edit the `index.html` and `menu-animation.css`

### index.html

```html
<section class="navigation navigation-NEXT-NUMBER">
  <div class="title">Menu | NEXT-NUMBER</div>
  <ul>
    <li class="active"><a href="#">Home</a></li>
    <li><a href="#">Gallery</a></li>
    <li><a href="#">Shop</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</section>
```

### css/menu-animation.css

```css
/***/
/*** NEXT-NUMBER ***/

.navigation-NEXT-NUMBER li a {
  transition: color 500ms ease-in-out;
}
.navigation-NEXT-NUMBER li a::before {
  height: 3px;
  background: #00a29a;
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  transform: scale3d(0, 1, 1);
  transition: transform 500ms;
}
.navigation-NEXT-NUMBER li:hover a {
  color: #00a29a;
}
.navigation-NEXT-NUMBER li.active a::before {
  transform: scale3d(1, 1, 1);
  transition: transform 500ms cubic-bezier(0.57, 1, 0.3, 1.73);
}
```

And push to create a pull request

## ![alt text](https://avatars2.githubusercontent.com/u/11488084?v=3&s=25 "theomesnil.com") About me

Follow me on [Twitter](https://twitter.com/theomesnil) - [Github](https://github.com/mesniltheo) - [Dribbble](https://dribbble.com/theomesnil)

[© Théo Mesnil - 2020](https://www.theomesnil.com)
