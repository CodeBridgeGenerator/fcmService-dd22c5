import React from "react";
import { render, screen } from "@testing-library/react";

import FcmPage from "../FcmPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders fcm page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <FcmPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("fcm-datatable")).toBeInTheDocument();
    expect(screen.getByRole("fcm-add-button")).toBeInTheDocument();
});
