const { Initializer, api } = require("actionhero");

const Oas = require("../classes/oas");

module.exports = class OasInitializer extends Initializer {
  constructor() {
    super();
    this.name = "oas";
  }

  async initialize() {
    if (api.env === "test") {
      api.oas = new Oas();
    }
  }

  async start() {
    if (api.env === "test") {
      await api.oas.buildOpenApiDocument();
      await api.oas.writeOpenApiDocument();
    }
  }
}
