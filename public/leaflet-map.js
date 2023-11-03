class LeafletMap extends HTMLElement {
  static observedAttributes = ["x", "y"];

  constructor() {
    super();
    this.x = 51.0517983;
    this.y = 4.4515703;
    this.mapElem = null;
  }

  connectedCallback() {
    this.innerHTML = `<div>
        <div id="map"></div>
    </div>`;

    this.mapElem = L.map("map").setView([this.x, this.y], 13);

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(this.mapElem);
  }

  attributeChangedCallback(name, oldValue, newValue) {
    setTimeout(() => {
      console.log(
        `Attribute ${name} has changed from ${oldValue} to ${newValue}.`
      );
      if (name === "x") {
        this.mapElem.setView([newValue, this.y], 13);
      }
      if (name === "y") {
        this.mapElem.setView([this.x, newValue], 13);
      }
    }, 1000);
  }
}
