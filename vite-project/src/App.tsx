import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button } from "@/components/ui/button"; // 수정된 import

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        {/* shadcn Button 컴포넌트 사용 */}
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        
        {/* 다양한 variant 예시 */}
        <Button variant="outline">테스트</Button>
        <Button variant="destructive">삭제</Button>
        <Button variant="ghost" size="sm">작은 버튼</Button>
        
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;