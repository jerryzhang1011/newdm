import React from "react";
const About = () => {
    return (
        <div className="about">
            <h1>"Gentlemen's Agreement"</h1>
            <div className="img-container">
                <img id="agreement" src="https://github.com/jerryzhang1011/src/blob/main/agreement.png?raw=true"/>
            </div>
            <div className="agreement-content">
                <div className="agreements">
                    <h2>"Three Men Agreement"</h2>
                    <p>When three men reach a consensus, the remaining one unconditionally obeys.</p>
                </div>
                <div className="agreements">
                    <h2>"Copy Right Law"</h2>
                    <p>Images featuring individuals from the Zizhong Group cannot be forwarded to others unless consent is granted by the individuals depicted in the images.</p>
                </div>
                <div className="agreements">
                    <h2>"Loyalty"</h2>
                    <p>Should not, at the expense of betraying a man, seek to please other men or women (such as sharing unflattering photos or spreading rumors).</p>
                </div>
            </div>
        </div>
    );
};
 
export default About;