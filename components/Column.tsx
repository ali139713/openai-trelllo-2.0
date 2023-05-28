import { Draggable, Droppable } from "react-beautiful-dnd";

type Props = {
  id: TypedColumn;
  todos: ITodo[];
  index: number;
};

const columnMapping: {
  [key in TypedColumn]: string;
} = {
  Todo: "Todo",
  InProgress: "In Progress",
  Done: "Done",
};

function Column({ id, todos, index }: Props) {

  console.log('todos in column :',todos)

  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <Droppable droppableId={index.toString()} type="card">
            {(provided, snapshot) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className={`p-2 rounded-2xl shadow-sm ${
                  snapshot.isDraggingOver ? "bg-green-200" : "bg-white/50"
                }`}
              >
                <h2 className="flex justify-between font-bold text-xl p-2">
                    {columnMapping[id]}
                <span className="text-gray bg-gray-200 rounded-full px-2 py-2 text-sm">{todos.length}</span>
                </h2>
              </div>
            )}
          </Droppable>
        </div>
      )}
    </Draggable>
  );
}
export default Column;
