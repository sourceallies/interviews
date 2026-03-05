import { calculateFrameScore, calculateRunningScore, getNextRollScore } from "./index";

describe("Bowling Game", () => {
  describe("Calculate Score By Frame", () => {
    it("Get frame score for no pins hit", () => {
      expect(calculateFrameScore({ pinsHit: [0, 0] })).toBe(0);
    });
    it("Get frame score for 9 pins hit", () => {
      expect(calculateFrameScore({ pinsHit: [9, 0] })).toBe(9);
    });
    it("Get frame score for 10 pins hit on both rolls", () => {
      expect(calculateFrameScore({ pinsHit: [1, 9] })).toBe('/');
    });
    it("Get frame score for 10 pins hit on first roll", () => {
      expect(calculateFrameScore({ pinsHit: [10, 0] })).toBe('X');
    });
    it("Get frame score for final frame", () => {
      expect(calculateFrameScore({ pinsHit: [5, 5, 9] })).toBe(19);
    });
    it("Get frame score for final frame - variant", () => {
      expect(calculateFrameScore({ pinsHit: [10, 5, 3] })).toBe(18);
    });
  });
});
describe("Calculate Score By Multi-Frames", () => {
  it("Get running score for 2 frames thrown", () => {
    const input = [
      { pinsHit: [0, 0] },
      { pinsHit: [0, 0] }
    ];

    expect(calculateRunningScore(input)).toBe(0);
  });
  it("Get running score for 5 frames thrown - no strikes or spares", () => {
    const input = [
      { pinsHit: [5, 0] },
      { pinsHit: [0, 5] },
      { pinsHit: [2, 2] },
      { pinsHit: [1, 2] },
      { pinsHit: [2, 0] }
    ];

    expect(calculateRunningScore(input)).toBe(19);
  });
  it("Get running score for 5 frames thrown - one spare", () => {
    const input = [
      { pinsHit: [5, 0] },
      { pinsHit: [0, 5] },
      { pinsHit: [8, 2] },
      { pinsHit: [1, 2] },
      { pinsHit: [2, 0] }
    ];

    expect(calculateRunningScore(input)).toBe(26);
  });
  it("Get running score for 5 frames thrown - one strike", () => {
    const input = [
      { pinsHit: [5, 0] },
      { pinsHit: [0, 5] },
      { pinsHit: [10] },
      { pinsHit: [1, 2] },
      { pinsHit: [2, 0] }
    ];

    expect(calculateRunningScore(input)).toBe(28);
  });
  it("Get running score for 6 frames thrown - multiple strike", () => {
    const input = [
      { pinsHit: [10] }, // X + X (2) + X (3) => 30
      { pinsHit: [10] }, // X + X (3) + X (4) => 30
      { pinsHit: [10] }, // X + X (4) + X (5)  => 30
      { pinsHit: [10] }, // X + X (5) + 5  => 25
      { pinsHit: [10] }, // X + 5 + 4
      { pinsHit: [5, 4] }, // 9
    ];

    expect(calculateRunningScore(input)).toBe(143);
  });
  it("Get running score for 10 frames thrown - standard end frame ", () => {
    const input = [
      { pinsHit: [10] }, // X + X (2) + X (3) => 30
      { pinsHit: [10] }, // X + X (3) + X (4) => 30
      { pinsHit: [10] }, // X + X (4) + X (5)  => 30
      { pinsHit: [10] }, // X + X (5) + 5  => 25
      { pinsHit: [10] }, // X + 5 + 4
      { pinsHit: [5, 4] }, // 9
      { pinsHit: [5, 4] }, // 9
      { pinsHit: [5, 4] }, // 9
      { pinsHit: [5, 4] }, // 9
      { pinsHit: [5, 4] }, // 9
    ];

    expect(calculateRunningScore(input)).toBe(179);
  });
  it("Get running score for 10 frames thrown - spare end frame ", () => {
    const input = [
      { pinsHit: [10] },
      { pinsHit: [10] },
      { pinsHit: [10] },
      { pinsHit: [10] },
      { pinsHit: [10] },
      { pinsHit: [5, 4] },
      { pinsHit: [5, 4] },
      { pinsHit: [5, 4] },
      { pinsHit: [5, 4] },
      { pinsHit: [5, 5, 9] },
    ];

    expect(calculateRunningScore(input)).toBe(189);
  });
  it("Get running score for 10 frames thrown - strike end frame ", () => {
    const input = [
      { pinsHit: [10] },
      { pinsHit: [10] },
      { pinsHit: [10] },
      { pinsHit: [10] },
      { pinsHit: [10] },
      { pinsHit: [5, 4] },
      { pinsHit: [5, 4] },
      { pinsHit: [5, 4] },
      { pinsHit: [5, 4] },
      { pinsHit: [10, 5, 3] },
    ];

    expect(calculateRunningScore(input)).toBe(188);
  });
  it("Get running score for perfect game", () => {
    const input = [
      { pinsHit: [10] },
      { pinsHit: [10] },
      { pinsHit: [10] },
      { pinsHit: [10] },
      { pinsHit: [10] },
      { pinsHit: [10] },
      { pinsHit: [10] },
      { pinsHit: [10] },
      { pinsHit: [10] },
      { pinsHit: [10, 10, 10] },
    ];

    expect(calculateRunningScore(input)).toBe(300);
  });
});
