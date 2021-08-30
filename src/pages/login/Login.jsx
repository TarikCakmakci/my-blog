import "./login.css"


export default function Login() {
    return (
        <div className="login">
            <span className="loginTitle">Giriş</span>
        <form className="loginForm">
            <label>Kullanıcı Adı</label>
                <input type="text" className="loginInput" placeholder="Kullanıcı adınızı giriniz..."></input>
            <label>Email</label>
                <input type="text" className="loginInput" placeholder="Mail adresinizi giriniz..."></input>
            <label>Şifre</label>
                <input type="password" className="loginInput" placeholder="Şifrenizi giriniz..."></input>    
            <button className="loginButton">Giriş Yap</button>
            <button className="loginRegisterButton">Kayıt Ol</button>      
        </form>
        
        

    </div>
       
    )
}
