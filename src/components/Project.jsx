export default function Project({ name, previewImg, link, desc, time, techs }) {
    return (
        <div className="project">
            <a href={link} target="_blank">
                <img src={`./${previewImg}`} alt="" />
                <div className="project-desc">
                    <h1>{name}</h1>
                    <p>{desc}</p>
                    <p className="time">{time}</p>
                    <ul>
                        {techs.map((item, index) => <li key={index}>{item}</li>)}
                    </ul>
                </div>
            </a>
        </div>
    )
}