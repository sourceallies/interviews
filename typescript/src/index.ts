
/*
  X X X X
   X X X
    X X
     X

  10 pins total
  assume input is valid

  Scoring
The score for each frame is based on the number of pins you knock down.

A simple roll is when you use both balls in a frame and do not knock down all 10 pins. Your score for that frame is the total number of pins knocked down.
A Strike (X) is when you knock down all 10 pins with your first ball. You will not roll a second ball for this frame. Your score for this strike frame is 10 plus the number of pins knocked down on your next two rolls.
A Spare (/) is when you knock down all 10 pins using both of your rolls in a frame. Your score for this spare frame is 10 plus the number of pins knocked down on your next roll.

A Strike (X) in frame 10 with the first ball. If you get a strike with the first ball in frame 10 you will roll 2 more balls. This rule is only for frame 10!
A Spare (/) in frame 10 If you get a spare in frame 10 with your first 2 balls you will roll one more ball. This rule is only for frame 10!
The maximum score for a perfect game is 300.
*/

interface FrameInput {
  pinsHit: number[],
}



export function calculateFrameScore(input: FrameInput): number | 'X' | '/' {
  let frameScore: number = 0;
  const isLastFrame = input.pinsHit.length === 3;
  let response: number | 'X' | '/';

  for (let i = 0; i < input.pinsHit.length; i++) {
    const roll = input.pinsHit[i];
    if (i === 0 && roll === 10 && !isLastFrame) {
      return 'X';
    } else {
      frameScore += roll;
      response = frameScore;
    }
    if (frameScore === 10 && !isLastFrame) {
      return '/'
    }
  }

  return response;
}

export function calculateRunningScore(input: FrameInput[]): number {
  let totalScore = 0;
  let isLastFrame = false;
  input.forEach((i: FrameInput, index: number) => {
    if (index === 9) isLastFrame = true;
    const currentFrameScore = calculateFrameScore(i);
    const nextRoll = input[index + 1];
    if (currentFrameScore === '/') {
      if (isLastFrame) {
        totalScore += Number(currentFrameScore);
      } else {
        totalScore += 10 + nextRoll.pinsHit[0];
      }
    } else if (currentFrameScore === 'X') {
      if (isLastFrame) {
        totalScore += Number(currentFrameScore);
      } else {
        totalScore += 10 + nextRoll.pinsHit[0];
        if (nextRoll.pinsHit[1]) {
          totalScore += nextRoll.pinsHit[1]
        } else {
          const nextNextRoll = input[index + 2];
          totalScore += nextNextRoll.pinsHit[0];
        }
      }
    } else {
      totalScore += Number(currentFrameScore);
    }
  });
  return totalScore;
}

export function getNextRollScore(input: FrameInput[], currentFrameIndex: number, currentRoll: 'X' | '/'): number {
  let result = 0;
  const nextScore = calculateFrameScore(input[currentFrameIndex + 1]);
  console.log(nextScore);
  if (nextScore === 'X') {
    const val = getNextRollScore(input, currentFrameIndex + 1, 'X');
    console.log(val)
    result += val;
  } else {
    result = (10 + input[currentFrameIndex + 1].pinsHit[0] + (currentRoll === 'X' ? input[currentFrameIndex + 1].pinsHit[1] : 0));
  }
  return result;
}