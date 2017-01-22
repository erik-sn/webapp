
import { expect } from "chai";
import * as sinon from "sinon";

import Hello from "../../src/components/hello";
import { sRender } from "../test_helper";

describe("Lets write tests!" , () => {

  describe("Hello" , () => {
    let component: any;
    const props = {
      params: {
        name: "hello world",
      },
    };
    const state = {};


    beforeEach(() => {
      component = sRender(Hello, props, state);
    });

    it("renders something", () => {
      expect(component).to.exist;
    });


  });

});
