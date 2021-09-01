import "./post.css"

export default function Post() {
    return (
        <div className="post">
            <img className="postImg" src="https://images.pexels.com/photos/1144694/pexels-photo-1144694.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""/>

            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">ABOUT LOREM W</span>
                </div>
            <span className="postTitle">
                Lorem, ipsum dolor sit amet
            </span>
            <hr/>
            </div>
            <div className="postDesc">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
                autem ipsam sequi perspiciatis fuga sint aut ut explicabo, 
                voluptatum, est consectetur necessitatibus distinctio molestiae nam doloremque vero.
                Maiores, voluptas nihil.Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
                autem ipsam sequi perspiciatis fuga sint aut ut explicabo, 
                voluptatum, est consectetur necessitatibus distinctio molestiae nam doloremque vero.
                Maiores, voluptas nihil.
            </p>
            </div>
            <hr/>
            <span className="postDate">1 saat önce</span>
        </div>
    )
}
