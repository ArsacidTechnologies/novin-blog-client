import { ChangeEvent, useState } from "react";
import { useEffect, useRef } from "react";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";


import type { AppDispatch, AppState } from "./store";

export const useForm =
  <TContent>(defaultValues: TContent) =>
    (handler: (content: TContent) => void) =>
      async (event: ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();
        event.persist();

        const form = event.target as HTMLFormElement;
        const elements = Array.from(form.elements) as HTMLInputElement[];
        const data = elements
          .filter((element) => element.hasAttribute("name"))
          .reduce(
            (object, element) => ({
              ...object,
              [`${element.getAttribute("name")}`]: element.value,
            }),
            defaultValues
          );
        await handler(data);
        form.reset();
      };

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
