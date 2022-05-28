export default function Project({ name, previewImg, link, desc }) {
    return (
        <div className="project">
            <a href={link} target="_blank">
                <img src={`./${previewImg}`} alt="" />
                <h1>{name}</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum dolorem commodi voluptatibus culpa? Quo sed similique nemo recusandae iusto. Numquam modi reprehenderit eveniet pariatur iure autem ex quo facilis ut!</p>
                <p className="time">2022</p>
                <ul>
                    {desc.map((item, index) => <li key={index}>{item}</li>)}
                </ul>
            </a>
        </div>
    )
}