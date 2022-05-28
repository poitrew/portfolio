export default function Project({ name, previewImg, link, desc }) {
    return (
        <div className="project">
            <a href={link} target="_blank">
                <img src={`./${previewImg}`} alt="" />
                <h1>{name}</h1>
                <ul>
                    {desc.map((item, index) => <li key={index}>{item}</li>)}
                </ul>
            </a>
        </div>
    )
}