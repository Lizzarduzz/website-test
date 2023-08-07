import {useState, useEffect, useCallback} from 'react';
import {CSSTransition, TransitionGroup } from 'react-transition-group';
import TextTransition, { presets } from "react-text-transition";

const phText1 = [
    '"Thank you for the great service you provide for CPI"',
    '"Very impressed with their drone technology...would certainly use this business again"',
    '"Very professional and highly knowledgeable on all topics drone imagery"'
    ];

const phText2 = [
    'Billy Terry, Director of Operations, Consumers Power',
    'Davis Jacob, Manager, Voith Paper',
    'Tanner Hendricks, Agronomist, Wilbur-Ellis Company'
];

function Test1() {
    
    const [newText1, setnewText1] = useState("");
    const [newText2, setnewText2] = useState("");

    const shuffle1 = useCallback(() => {
        const num = Math.random()
        const index1 = Math.floor(num * phText1.length);
        setnewText1(phText1[index1]);
        const index2 = Math.floor(num * phText2.length);
        setnewText2(phText2[index2]);
    }, []);

    useEffect(() => {
        const intervalID = setInterval(shuffle1, 5000);
        return () => clearInterval(intervalID);
    }, [shuffle1])

    return(
        <div>
            <TextTransition springConfig={presets.slow}>
            <div>
                <p style={{display: 'block', fontSize:'1.2vw', fontWeight:'bold', marginBottom: '0.1vw'}}>{newText1}</p>
                <p style={{display: 'block', fontSize:'1.2vw', fontWeight:'bold', marginBottom: '0.1vw'}}>
                    -
                </p>
                <p style={{display: 'block', fontSize:'1.2vw', fontWeight:'bold'}}>{newText2}</p>
            </div>
            </TextTransition>
        </div>
    );
}


export default Test1;