// Создать компонент CommentsList, который отображает список комментариев. Каждый комментарий должен иметь кнопку для его удаления.
//При нажатии на кнопку комментарий должен удаляться из списка.

import { useState } from "react";

function CommentList() {
  const [comments, setComments] = useState([
    { id: 1, text: "Это первый комментарий" },
    { id: 2, text: "Это второй комментарий" },
    { id: 3, text: "Это третий комментарий" },
  ]);
  const deleteItem = (id) => {
    const updatedItems = comments.filter((comment) => comment.id !== id);
    setComments(updatedItems);
  };

  return (
    <div>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            {comment.text}
            <button
              onClick={() => {
                deleteItem(comment.id);
              }}
            >
              удалить
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CommentList;
