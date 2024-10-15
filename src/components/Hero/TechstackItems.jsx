import { NodeIcon, DjangoIcon, HtmlIcon, CssIcon, JsIcon, PyIcon, ReactIcon, PostgreIcon, FlaskIcon, SQLiteIcon } from '../SubComponents/Icons';


function TechstackItems() {
    const techStackItems = [
        { svg: <HtmlIcon size="tech-stack-item" />, bgColor: "#ff3700", alt: "HTML" },
        { svg: <CssIcon size="tech-stack-item" />, bgColor: "#0033ff", alt: "Css" },
        { svg: <JsIcon size="tech-stack-item" />, bgColor: "#ffe100", alt: "Js" },
        { svg: <PyIcon size="tech-stack-item" />, bgColor: "white", alt: "Python" },
        { svg: <DjangoIcon size="tech-stack-item" />, bgColor: "#092E20", alt: "Django" },
        { svg: <NodeIcon size="tech-stack-item" />, bgColor: "#333333", alt: "Node" },
        { svg: <ReactIcon size="tech-stack-item" />, bgColor: "#333333", alt: "React" },
        { svg: <PostgreIcon size="tech-stack-item" />, bgColor: "#0764b0", alt: "PostgreSQL" },
        
    ];

    return (
        <>
            {techStackItems.map((item, index) => (
                <div key={index} className="col-2 col-lg-1 col-md-2 col-sm-3 col-3 app-container">
                    <div class="app tech-stack" style={{ backgroundColor: item.bgColor }}>
                        {item.svg}
                    </div>
                </div>
            ))}
        </>
    );
}

export default TechstackItems;
