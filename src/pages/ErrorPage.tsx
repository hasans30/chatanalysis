import React, { memo } from 'react';
import './ErrorPage.css'
const ErrorPage = memo(() => {
    return (
        <div className="errorpage">
            <h1>Code missing</h1>
            <p>
                Welcome to whatsapp report page.
                please contact owner for code to see report.
            </p>
        </div>
    );
});

export default ErrorPage;