import {
  motion,
  useMotionValue,
  useTransform,
  useAnimationFrame,
  MotionValue,
} from "framer-motion";
import { JSX, useRef } from "react";

type Phase = "fly" | "down" | "wait" | "up";

export default function Fly({ baseY }: { baseY: number }): JSX.Element {
  const x: MotionValue<number> = useMotionValue(-20);

  const waveY: MotionValue<number> = useMotionValue(0);
  const pauseY: MotionValue<number> = useMotionValue(0);
  const rotate: MotionValue<number> = useMotionValue(0);

  const downWaveProgress = useRef<number>(0);
  const upWaveProgress = useRef<number>(0);

  const time = useRef<number>(10);
  const phase = useRef<Phase>("fly");
  const waitTimer = useRef<number>(0);
  const hasPausedAtCenter = useRef<boolean>(false);

  const y = useTransform(
    [waveY, pauseY],
    (values: number[]) => baseY + values[0] + values[1]
  );

  const upWave = (): void => {
    const t = upWaveProgress.current;

    const wave = Math.sin(t * Math.PI);

    // reverse direction
    pauseY.set(-60 + 60 * wave);

    // forward arc
    x.set(x.get() + wave * 0.6);

    if (t >= 1) {
      upWaveProgress.current = 0;
      pauseY.set(0);
      phase.current = "fly";
    }
  };

  const downWave = (delta: number): void => {
    downWaveProgress.current += delta * 0.0009;

    const t = Math.max(downWaveProgress.current, 1);

    // half sine wave (0 → 1 → 0)
    const wave = Math.sin(t * Math.PI);

    pauseY.set(20 * wave);

    // slight backward arc
    x.set(x.get() - wave * 1);

    if (t >= 5) {
      upWaveProgress.current = downWaveProgress.current;
      downWaveProgress.current = 0;
      phase.current = "wait";
      waitTimer.current = 0;
    }
  };

  useAnimationFrame((_: number, delta: number) => {
    time.current += delta / 250;
    rotate.set(Math.sin(time.current) * 10);

    const halfScreen = window.innerWidth / 2.5;

    // 🟢 FLYING
    if (phase.current === "fly") {
      x.set(x.get() + delta * 0.15);
      waveY.set(Math.sin(time.current) * 10);

      if (!hasPausedAtCenter.current) {
        if (x.get() + 50 >= halfScreen) {
          phase.current = "down";
          hasPausedAtCenter.current = true;
          waveY.set(0);
        }

        // 🚫 Trigger ONLY ONCE
        if (x.get() >= halfScreen) {
          phase.current = "down";
          hasPausedAtCenter.current = true;
          waveY.set(0);
        }
      }
    }

    // 🔽 DOWN
    if (phase.current === "down") {
      downWave(delta);
    }

    // ⏱ WAIT
    if (phase.current === "wait") {
      waitTimer.current += delta;
      if (waitTimer.current >= 2000) {
        phase.current = "up";
      }
    }

    // 🔼 UP
    if (phase.current === "up") {
      upWave();
    }

    // 🔁 RESET AFTER EXIT
    if (x.get() > window.innerWidth + 120) {
      x.set(-120);
      waveY.set(0);
      pauseY.set(0);
      phase.current = "fly";
      hasPausedAtCenter.current = false;
      time.current = 0;
    }
  });

  return (
    <div className="h-full w-full z-20">
      <motion.svg
        width="50"
        height="50"
        viewBox="0 0 50 50"
        style={{ x, y, rotate }}
        className="overflow-visible w-9 h-9 md:w-12.5 md:h-12.5"
      >
        <svg
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#d42525"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M148.113 270.455C178.811 224.075 242.668 181.298 297.992 215.94C304.883 220.254 314.779 228.618 316.462 236.906C325.434 281.055 219.899 337.713 168.712 307.497C164.995 305.3 145.854 281.143 143.853 281.636C137.464 283.209 118.718 290.291 114.019 294.914C113.573 295.353 132.91 288.624 150.246 288.624"
              stroke="#474306"
              strokeOpacity="0.9"
              strokeWidth="16"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>{" "}
            <path
              d="M191.543 237.122C205.369 258.398 200.625 296.531 200.625 311.775"
              stroke="#474306"
              strokeOpacity="0.9"
              strokeWidth="16"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>{" "}
            <path
              d="M228.193 220.22C239.777 244.764 237.816 272.365 232.076 297.689"
              stroke="#474306"
              strokeOpacity="0.9"
              strokeWidth="16"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>{" "}
            <path
              d="M284.838 251.531C284.957 252.267 284.477 252.976 284.297 253.7"
              stroke="#474306"
              strokeOpacity="0.9"
              strokeWidth="16"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>{" "}
            <path
              d="M215.398 191.049C218.251 170.409 164.043 73.6845 139.078 86.0953C118.061 96.542 179.056 165.553 186.868 173.32C193.432 179.846 212.414 199.306 208.263 191.049C202.171 178.929 175.365 166.868 164.043 161.975C63.9156 118.688 52.5083 209.528 152.632 194.597C167.952 192.312 183.247 188.576 198.279 186.085"
              stroke="#474306"
              strokeOpacity="0.9"
              strokeWidth="16"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>{" "}
          </g>
        </svg>
      </motion.svg>
    </div>
  );
}
