
import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux'
import Router from "./router";
import store from './store';

/*初始化*/
renderWithHotReload(Router);

/*热更新*/
if (module.hot) {
    module.hot.accept("./router/index.js", () => {
        const Router = require("./router/index.js").default;
        renderWithHotReload(Router);
    });
}

//-------------------4、定义渲染函数
function renderWithHotReload(Router) {
    ReactDOM.render(
        <AppContainer>
            {/* <Provider store={store}> */}
                <BrowserRouter>
                    <Router />
                </BrowserRouter>
            {/* </Provider> */}
        </AppContainer>,
        document.getElementById("root")
    )
}