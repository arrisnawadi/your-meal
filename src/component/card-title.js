class CardTitle extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
        this.title = this.getAttribute("title") || null;
    }

    render() {
        this._shadowRoot.innerHTML = `
        <style>
            :host {
                margin-bottom:.75rem;
            }

            h6 {
                font-size: 24px;
                text-align:center!important;
                margin-top:0;
                font-size:1rem;
                font-weight:500;
                line-height:1.2;
            }

        </style>
        <h6>${this.title}</h6>
        `;
    }
}

customElements.define("card-title", CardTitle);