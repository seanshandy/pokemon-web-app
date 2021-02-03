import React from 'react';
import { css, jsx } from '@emotion/react'

import "./ErrorPage.css";

function ErrorPage() {
    return (
        <div css={css`
        font-size: 5rem;
        font-weigth: bold;
        text-transform: uppercase;
        text-align: center;
        `} className="not-found">
            404 Not Found...
        </div>
    )
}

export default ErrorPage
