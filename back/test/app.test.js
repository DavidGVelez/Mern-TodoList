const app = require("../server");
const chai = require("chai");
const chaiHttp = require("chai-http");

const { expect } = chai;

chai.use(chaiHttp);
chai.use(require("chai-like"));
chai.use(require("chai-things"));

describe("Test!", () => {
  it("should return a todo array", (done) => {
    chai
      .request(app)
      .get("/")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an("array");
        done();
      });
  });
  it("expecting to have an item with bajar a la perra", (done) => {
    chai
      .request(app)
      .get("/")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an("array").that.contains.something.like({
          description: "bajar a la perra",
        });
        done();
      });
  });
});
