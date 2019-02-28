{{ template:title }}

<a href="https://appnest-demo.firebaseapp.com/blob/">
	<p align="center">
	  <img src="https://raw.githubusercontent.com/andreasbm/blob/master/assets/demo.gif" alt="Demo" width="300" />
	</p>
</a>

[The blob is waiting for you here](https://appnest-demo.firebaseapp.com/blob/).

## Usage

Add the `blob-element` to your html and you're ready to go.

```html
<blob-element></blob-element>
```

If you want to change the sharpness of the blob you can change the `sharpness` attribute to a number between `0` and `100`. A sharpness of `0` will turn the blob into a circle. The default `sharpness` is `25`.

```html
<blob-element sharpness="30"></blob-element>
```

Remember to give your blob a width, a height and a background of some sort. If you want transitions on your blob you can set the `--blob-transition` css variable. Have fun!

## Inspiration

During the [February 2019 week 3 #CodePenChallenge](https://codepen.io/challenges/2019/february/3) the theme was blob shapes. I found [this](https://codepen.io/LekovicMilos/full/omVzYv) awesome blob generator and decided to turn it into a reusable web component.

{{ template:license }}