import { useState } from "react";
import EffectSummary from "./EffectSymmary";

function EffectContainer() {
  const [isVisible, setIsvisible] = useState(true);

  return (
    <div>
      <button type="button" onClick={() => setIsvisible(true)}>나타나라</button>
      <button type="button" onClick={() => setIsvisible(false)}>사라져라</button>
      {isVisible && <EffectSummary />}
      {/* 논리연산자의 short-circuit을 이용한 조건부 렌더링 */}
    </div>
  );
}

export default EffectContainer;