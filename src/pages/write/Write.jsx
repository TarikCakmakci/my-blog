import "./write.css"

export default function Write() {
    return (
        <div className="write">
            <img 
                className="writeImg" src="https://images.pexels.com/photos/4245826/pexels-photo-4245826.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i className="writeIcon fas fa-plus"></i>
                    </label>
                    <input type="file" id="fileInput" style={{ display: "none" }} />
                    <input type="text" placeholder="Başlık girmelisin.." className="writeInput" autoFocus={true} />
                </div>
                <div className="writeFormGroup">
                    <textarea placeholder="Anlat sen seversin..."
                        type="text" className="writeInput writeText">
                    </textarea>
                </div>
                <button className="writeSubmit">
                    Yükle
                </button>

            </form>
        </div>
    )
}
