import './App.css';
import { useState, useEffect } from 'react';

function Map(props) {

    const arr = new Array(4).fill(0);
    const [map44, map44변경] = useState(arr.map(() => {
        return new Array(4).fill(1)
    }));

    useEffect(() => {
        //숫자 랜덤 생성
    })


    function 왼쪽() {
        for (let i = 0; i < 4; i++) {
            if (map44[i][0] === map44[i][1]) {
                const new_map44 = [...map44];
                new_map44[i][0] = new_map44[i][0] * 2;
                new_map44[i][1] = 0;
                map44변경(new_map44)
                if (map44[i][2] === map44[i][3]) {
                    const new_map44 = [...map44];
                    new_map44[i][2] = new_map44[i][2] * 2;
                    new_map44[i][3] = 0;
                    map44변경(new_map44)
                }
            } else if (map44[i][1] === map44[i][2]) {
                const new_map44 = [...map44];
                new_map44[i][1] = new_map44[i][1] * 2;
                new_map44[i][2] = 0;
                map44변경(new_map44)
            } else if (map44[i][2] === map44[i][3]) {
                const new_map44 = [...map44];
                new_map44[i][2] = new_map44[i][2] * 2;
                new_map44[i][3] = 0;
                map44변경(new_map44)
            } else {
                // 그대로 두기
            }
        }
    }

    function 왼쪽정렬() {
        const new_map44 = [...map44]
        for (let i = 0; i < 4; i++) {
            new_map44[i] = map44[i].filter((x) => x !== 0).concat(map44[i].filter((x) => x === 0));
        }
        map44변경(new_map44);
    };


    function 오른쪽90회전() {

        const rotated_map = [...map44]
        let origin = map44.map(item => ([...item]));
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                rotated_map[j][3 - i] = origin[i][j];
            }
        }
        map44변경(rotated_map)
    }

    function 오른쪽180회전() {
        for (let i = 0; i < 2; i++) {
            오른쪽90회전()
        }
    }


    function 오른쪽270회전() {
        for (let i = 0; i < 3; i++) {
            오른쪽90회전()
        }
    }

    function 아래() {
        오른쪽90회전();
        왼쪽();
        왼쪽정렬();
        오른쪽270회전();
    }
    return (
        <>
            <table>
                <thead></thead>
                <tbody>
                    {
                        map44.map((e) => {
                            const td = e.map((num) => {
                                return (
                                    <td>{num === 0 ? "" : num}</td>
                                )
                            });
                            return (<tr>{td}</tr>)
                        })
                    }
                    <button onClick={() => { 왼쪽(); 왼쪽정렬() }}>왼쪽</button>
                    <button onClick={() => { 아래() }}>아래</button>
                    <button onClick={() => { 오른쪽180회전(); 왼쪽(); 왼쪽정렬(); }}>오른쪽</button>
                    <button onClick={() => { 오른쪽90회전() }}>회전</button>
                </tbody>
            </table>
        </>


    )
}

export default Map;

