import "./register.css"


export default function Register() {
    return (
        <div className="register">
            <span className="registerTitle">Kayıt Ol</span>
        <form className="registerForm">
            <label>Kullanıcı Adı</label>
                <input type="text" className="registerInput" placeholder="Kullanıcı adınızı giriniz..."></input>
            <label>Email</label>
                <input type="text" className="registerInput" placeholder="Mail adresinizi giriniz..."></input>
            <label>Şifre</label>
                <input type="password" className="registerInput" placeholder="Şifrenizi giriniz..."></input>    
            <button className="registerButton">Kayıt Ol</button>      
        </form>
        
        

    </div>
       
    )
}
