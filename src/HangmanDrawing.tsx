// put them in a variable because you don't always show them
const Head = (
  <div
    style={{
      width: "50px",
      height: "50px",
      borderRadius: "100%",
      border: "10px solid black",
      position: "absolute",
      top: "50px",
      right: "-30px",
    }}
  ></div>
);

const Body = (
  <div
    style={{
      width: "10px",
      height: "100px",
      background: "black",
      position: "absolute",
      top: "120px",
      right: 0,
    }}
  ></div>
);

const Right_Arm = (
  <div
    style={{
      width: "100px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "150px",
      right: "-100px",
      rotate: "-30deg",
      // This makes it so it stays at the left buttom no matter what
      transformOrigin: "left bottom",
    }}
  ></div>
);

const Left_Arm = (
  <div
    style={{
      width: "100px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "150px",
      right: "10px",
      rotate: "30deg",
      // This makes it so it stays at the left buttom no matter what
      transformOrigin: "right bottom",
    }}
  ></div>
);

const Right_Leg = (
  <div
    style={{
      width: "100px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "210px",
      right: "-90px",
      rotate: "60deg",
      // This makes it so it stays at the left buttom no matter what
      transformOrigin: "left bottom",
    }}
  ></div>
);

const left_Leg = (
  <div
    style={{
      width: "100px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "210px",
      right: 0,
      rotate: "-60deg",
      // This makes it so it stays at the left buttom no matter what
      transformOrigin: "right bottom",
    }}
  ></div>
);

const Body_Parts = [Head, Body, Right_Arm, Left_Arm, Right_Leg, left_Leg]

type HangmanDrawingProps = {
  numberOfGuesses: number
}

export function HangmanDrawing({ numberOfGuesses } : HangmanDrawingProps) {
  return (
    <div style={{ position: "relative" }}>
      {Body_Parts.slice(0, numberOfGuesses)}
      <div
        style={{
          height: "50px",
          width: "10px",
          background: "black",
          position: "absolute",
          top: 0,
          right: 0,
        }}
      />
      <div
        style={{
          height: "10px",
          width: "200px",
          background: "black",
          marginLeft: "120px",
        }}
      />
      <div
        style={{
          height: "400px",
          width: "10px",
          background: "black",
          marginLeft: "120px",
        }}
      />
      <div style={{ height: "10px", width: "250px", background: "black" }} />
    </div>
  );
}
