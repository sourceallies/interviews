import { guess } from "./index";

describe("guess", () => {
  it("should 'fail' or not 5 char words", () => {
    expect(guess("word")).toBe("error");
  });
  it("should recognise a correct guess", () => {
    expect(guess('words')).toBe("WORDS");
  });
  describe("should recognise an incorrect guess", () =>{
    it("for a totally wrong guess", () => {
      expect(guess('aaaaa')).toBe("_____");
    });
    it("for correct letter in wrong spot", () => {
      expect(guess('salad')).toBe("s___d");
    });
    it("for correct letter in correct spot", () => {
      expect(guess('witch')).toBe("W____")
    });
    it("for correct letter in correct spot, and correct letter in incorrect spot", () => {
      expect(guess('wrong')).toBe("Wro__")
    });
    it("case check for 3 game rules", () => {
      expect(guess('WRONG')).toBe("Wro__")
    });
  });
});
