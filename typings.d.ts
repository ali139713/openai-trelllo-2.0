interface IBoard {
columns: Map<TypedColumn, IColumn>
}

type TypedColumn = "Todo" | "InProgress" | "Done"

interface IColumn {
    id: TypedColumn,
    todos: ITodo[]
}

interface ITodo{
 $id: string;
 $createdAt: string;
 titile: string;
 status: TypedColumn;
 image? :string;
}

interface Image {
    bucketId: string;
    fileId: string;
}