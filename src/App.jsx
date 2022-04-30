import React from "react";
import "./styles.css";

export const App = () => {
  return (
    <>
      <div>
        <input placeholder="ToDoを入力" />
        <button>追加</button>
      </div>
      ;
      <div>
        <p>未完了のToDo</p>
        <ul>
          <li>
            <div>
              <p>あいう</p>
              <button>完了</button>
              <button>削除</button>
            </div>
          </li>
          <li>
            <div>
              <p></p>
              <button>完了</button>
              <button>削除</button>
            </div>
          </li>
        </ul>
      </div>
      ;
      <div>
        <p>完了のToDo</p>
        <ul>
          <li>
            <div>
              <p>えお</p>
              <button>戻す</button>
            </div>
          </li>
        </ul>
      </div>
      ;
    </>
  );
};
