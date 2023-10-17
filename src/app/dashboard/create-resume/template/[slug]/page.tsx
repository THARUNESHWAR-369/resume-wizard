import BaseProtectedNav from "@/components/base/_base_protected.nav";

export default function Page({ params }: { params: { slug: string } }) {
    return (
        <main>
            <BaseProtectedNav />
            <section className="mb-0">
                <div className="cv-container">
                    <div className="content">
                        <div className="header">
                            <h1>Create Resume</h1>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}