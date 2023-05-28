import { getTodosGroupedByColumn } from '@/lib/getTodosGroupedByColumn';
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface BoardState {
  board: IBoard;
  getBoard: () => void;
}

export const useBoardStore = create<BoardState>((set) => ({
    board:{
        columns: new Map<TypedColumn, IColumn>()
    },
    getBoard: async () => {
        const board = await getTodosGroupedByColumn();
        set({board});
    }
}))

