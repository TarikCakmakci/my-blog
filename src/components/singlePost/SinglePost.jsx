import "./singlePost.css"

export default function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img className="singlePostImg"
                    src="https://images.pexels.com/photos/1144694/pexels-photo-1144694.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt="" />
                <h1 className="singlePostTitle">Lorem, ipsum dolor.
                    <div className="singlePostEdit">
                        <i className="singlePostIcon fas fa-edit"></i>
                        <i className="singlePostIcon far fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Yazar: <b>Tarık</b>
                    </span>
                    <span className="singlePostDate">1 saat önce</span>
                </div>
                <div className="singlePostDesc">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repellat sapiente in impedit repellendus aut obcaecati
                    qui quisquam consequatur, voluptatem doloribus veniam,
                    exercitationem officiis quasi fugit illo debitis accusamus
                    labore eum!Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repellat sapiente in impedit repellendus aut obcaecati
                    qui quisquam consequatur, voluptatem doloribus veniam,
                    exercitationem officiis quasi fugit illo debitis accusamus
                    labore eum!Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repellat sapiente in impedit repellendus aut obcaecati
                    qui quisquam consequatur, voluptatem doloribus veniam,
                    exercitationem officiis quasi fugit illo debitis accusamus
                    labore eum!Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repellat sapiente in impedit repellendus aut obcaecati
                    qui quisquam consequatur, voluptatem doloribus veniam,
                    exercitationem officiis quasi fugit illo debitis accusamus
                    labore eum!Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repellat sapiente in impedit repellendus aut obcaecati
                    qui quisquam consequatur, voluptatem doloribus veniam,
                    exercitationem officiis quasi fugit illo debitis accusamus
                    labore eum!Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repellat sapiente in impedit repellendus aut obcaecati
                    qui quisquam consequatur, voluptatem doloribus veniam,
                    exercitationem officiis quasi fugit illo debitis accusamus
                    labore eum!</p>
                </div>
                
            </div>
        </div>
    )
}
