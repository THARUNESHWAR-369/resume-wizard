

import React from 'react'

type CenterBoxObjProps = {
    children: React.ReactNode;
}

function CenterBoxObj({ children }: CenterBoxObjProps) {
    return (
        <section className="center-box-object mb-0 flex justify-center p-2">
            <div className="center-box-container bg-white w-full max-w-[25em] h-fit p-2 rounded-md box-shadow-1">
                {children}
            </div>
        </section>
    );
}

export default CenterBoxObj