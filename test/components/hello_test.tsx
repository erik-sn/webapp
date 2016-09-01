
import { expect } from "chai";
import sinon from "sinon";
import { sRender } from "../test_helper.tsx";

import Hello from "../../src/components/hello.tsx";

describe("Lets write tests!" , () => {

  describe("Hello" , () => {
    let component;
    const props = {};
    const state = {};

    beforeEach(() => {
      component = sRender(Hello);
    });

    it("renders something", () => {
      expect(component).to.exist;
    });


  });

});
