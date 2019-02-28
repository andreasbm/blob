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
 * The sharpness sharpness of the blob.
 * @type {number}
 */
const DEFAULT_SHARPNESS = 25;

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
function getRandomBorderRadius (sharpness) {

	// Get the min and max sharpness
	const min = 50 - sharpness;
	const max = 50 + sharpness;

	// Generate four random numbers, one for each corner
	const n1 = random(min, max);
	const n2 = random(min, max);
	const n3 = random(min, max);
	const n4 = random(min, max);

	// Create the variant for each corner
	const p1 = 100 - n1;
	const p2 = 100 - n2;
	const p3 = 100 - n3;
	const p4 = 100 - n4;

	// Return the border radius for the blob
	return `${n1}% ${p1}% ${p2}% ${n2}% / ${n3}% ${n4}% ${p4}% ${p3}%`;
}

/**
 * A custom blob element.
 */
export class BlobElement extends HTMLElement {

	// The attributes that updates the blob
	static get observedAttributes () {
		return ["sharpness"];
	}

	/**
	 * Setup the component and set the border radius.
	 */
	constructor () {
		super();
		const shadow = this.attachShadow({mode: "open"});
		shadow.appendChild(template.content.cloneNode(true));
		this.setup();
	}

	// The sharpness of the blob sharpness (0 = circle) (100 = rect)
	set sharpness (v) {
		this.setAttribute("sharpness", v);
	}

	get sharpness () {
		return parseInt(this.getAttribute("sharpness") || DEFAULT_SHARPNESS );
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
	 * Update the blob each time an observed attribute changes.
	 */
	attributeChangedCallback () {
		this.update();
	}

	/**
	 * Updates the border radius.
	 */
	update () {
		console.log("NEW STYLE", this.sharpness);
		this.style.borderRadius = getRandomBorderRadius(this.sharpness);
	}
}

window.customElements.define("blob-element", BlobElement);