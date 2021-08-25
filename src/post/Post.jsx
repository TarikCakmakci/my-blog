import "./post.css"

export default function Post() {
    return (
        <div className="post">
            <img className="postImg" src="https://img-s2.onedio.com/id-55c10ea31337126229e0759d/rev-0/w-635/f-jpg-webp/s-e3f02215dd768e1c5be127f97708528bfd94da42.webp" alt=""/>

            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Müzik</span>
                    <span className="postCat">Yaşam</span>
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
