import "./write.css"

export default function Write() {
    return (
        <div className="write">
            <img 
                className="writeImg" src="https://picsum.photos/4000/4024" alt="" />
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
