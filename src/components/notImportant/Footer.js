import React from "react"

function Footer() {

    // Untuk mendapatkan tahun saat ini
    const getYear = () => {
        const year = new Date().getFullYear()
        return year
    }

    return(
            <footer className="footer">
                <div className="container text-center">
                    <div className="copyright">
                        {getYear()} Copyright Muhammad Rizky &#169; All right reserved
                    </div>
                </div>
            </footer>
    )
}

export default Footer