export default function Project({ name, previewImg, link, desc, time, techs }) {
    return (
        <div className="project">
            <a href={link} target="_blank">
                <img className="project-img" src={`./${previewImg}`} alt="" />
                <div className="project-desc">
                    <h3>{name}</h3>
                    <p>{desc}</p>
                    <p className="time">{time}</p>
                    <ul>
                        {techs.map((item, index) => <li key={index}><img src={`./${item.img}`} alt="" />{item.name}</li>)}
                    </ul>
                </div>
            </a>
        </div>
    )
}