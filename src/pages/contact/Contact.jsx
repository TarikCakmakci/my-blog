import "./contact.css"

export default function Contact() {
    return (
    <div className="contact">
        
            <span className="contactTitle">İLETİŞİM</span>
        <form className="contactForm">
            <label>Kullanıcı Adı</label>
                <input type="text" className="loginInput" placeholder="Kullanıcı adınızı giriniz..."></input>
            <label>Email</label>
                <input type="text" className="loginInput" placeholder="Mail adresinizi giriniz..."></input>
            <label>Mesajınız</label>
                <input type="text" className="loginInput" placeholder="Mesajınızı giriniz..."></input>    
            <button className="contactButton">Gönder</button>
           
        </form>
    </div>
    )
}
