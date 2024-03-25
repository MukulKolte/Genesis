import React from 'react'

function Enrollments() {
    return (
        <div>
            <Header />
            <nav id="navbar">
                <div class="container">
                    <ul>
                        <li><a href="/participant">Home</a></li>
                        <li><a href="/user_enrollments">Enrollments</a></li>
                    </ul>
                </div>
            </nav>

            <Footer />
        </div>
    )
}

export default Enrollments
