import { useDispatch, useSelector } from "react-redux";

import type { TypedUseSelectorHook } from "react-redux/es/types";

import type { RootState, AppDispatch } from "../store/main.store";

export const useAppDispatchL: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector