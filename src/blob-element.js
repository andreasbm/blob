const template = document.createElement("template");
template.innerHTML = `
	<style>
		:host {
		    overflow: hidden;
		    display: block;
		}
	</style>
	<slot></slot>
`;

/**
 * Generates a random number from min to max (inclusive).
 * @param min
 * @param max
 * @returns {*}
 */
function random (min, max) {
	return (Math.random() * (max - min)) + min;
}

/**
 * Generates a random border radius.
 * @returns {string}
 */
function getRandomBorderRadius () {

	// Generate four random numbers, one for each corner
	const p1 = random(25, 75);
	const p2 = random(25, 75);
	const p3 = random(25, 75);
	const p4 = random(25, 75);

	// Create the variant for each corner
	const _p1 = 100 - p1;
	const _p2 = 100 - p2;
	const _p3 = 100 - p3;
	const _p4 = 100 - p4;

	// Return the border radius for the blob
	return `${p1}% ${_p1}% ${_p2}% ${p2}% / ${p3}% ${p4}% ${_p4}% ${_p3}%`;
}

/**
 * A custom blob element.
 */
export class BlobElement extends HTMLElement {

	/**
	 * Setup the component and set the border radius.
	 */
	constructor () {
		super();
		const shadow = this.attachShadow({mode: "open"});
		shadow.appendChild(template.content.cloneNode(true));
		this.setup();
	}

	/**
	 * Sets up the component.
	 */
	setup () {
		this.update();

		// Wait for the next frame before applying the transition
		requestAnimationFrame(() => {
			this.style.transition = `var(--blob-transition)`;
		});
	}

	/**
	 * Updates the border radius.
	 */
	update () {
		this.style.borderRadius = getRandomBorderRadius();
	}
}

window.customElements.define("blob-element", BlobElement);