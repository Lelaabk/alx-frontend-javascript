// main.ts

interface MajorCredits {
  credits: number;
  brand: "MajorCredits";
}

interface MinorCredits {
  credits: number;
  brand: "MinorCredits";
}

function sumMajorCredits(subject1: MajorCredits, subject2: MinorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: "MajorCredits"
  };
}
function sumMinorCredits(subject1: MinorCredits, subject2: MajorCredits): MinorCredits {
    return {
      credits: subject1.credits + subject2.credits,
      brand: "MinorCredits"
    };
  }
