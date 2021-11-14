import './App.css';
import { useState, useEffect } from 'react';


function Map() {

    const arr = new Array(4).fill(0);
    const [map44, map44변경] = useState(랜덤추가(arr.map(() => {
        return new Array(4).fill(0)
    })));
    function randPlus(map44) {
        const ranMap = 랜덤추가(map44);
        return ranMap;
    }
    const [TouchPosition, setTouchPosition] = useState()


    function 랜덤추가(map44) {
        const new_map44 = map44.map(item => ([...item]));
        const zero_list = []
        for (let i = 0; i < 4; i++) {
            var idx = new_map44[i].indexOf(0);
            while (idx != -1) {
                zero_list.push([i, idx]);
                idx = new_map44[i].indexOf(0, idx + 1)
            }
        }

        if (zero_list.length === 0) {
            return new_map44;
        }
        var zero_ran = Math.floor(Math.random() * zero_list.length);
        var 랜덤위치 = zero_list[zero_ran];
        if (Math.random() < 0.8) {
            new_map44[랜덤위치[0]][랜덤위치[1]] = 2;
        } else {
            new_map44[랜덤위치[0]][랜덤위치[1]] = 4;
        }
        return new_map44
    };

    function 왼쪽(map44) {
        const new_map44 = map44.map(item => ([...item]));
        for (let i = 0; i < 4; i++) {
            if (map44[i][0] === map44[i][1]) {
                new_map44[i][0] = new_map44[i][0] * 2;
                new_map44[i][1] = 0;
                if (map44[i][2] === map44[i][3]) {
                    new_map44[i][2] = new_map44[i][2] * 2;
                    new_map44[i][3] = 0;
                }
            } else if (map44[i][1] === map44[i][2]) {
                new_map44[i][1] = new_map44[i][1] * 2;
                new_map44[i][2] = 0;
            } else if (map44[i][2] === map44[i][3]) {
                new_map44[i][2] = new_map44[i][2] * 2;
                new_map44[i][3] = 0;
            }
        }
        return new_map44;
    }

    function 왼쪽정렬(map44) {
        const new_map44 = map44.map(item => ([...item]));
        for (let i = 0; i < 4; i++) {
            new_map44[i] = map44[i].filter((x) => x !== 0).concat(map44[i].filter((x) => x === 0));
        }
        return new_map44;
    };

    // for 문을 이용해서 회전 함수 하나로 합쳐보기 and 왼쪽,아래,위,오른쪽도 하나도 합쳐보자
    function rotate(map44, k) {
        const rotated_map = map44.map(item => ([...item]));
        var origin = map44.map(item => ([...item]));
        for (let z = 0; z < k; z++) {
            for (let i = 0; i < 4; i++) {
                for (let j = 0; j < 4; j++) {
                    rotated_map[j][3 - i] = origin[i][j];

                }
            }
            origin = rotated_map.map(item => ([...item]));
        }
        return rotated_map;
    }

    // function 오른쪽90회전(map44) {

    //     const rotated_map = map44.map(item => ([...item]));
    //     const origin = map44.map(item => ([...item]));
    //     for (let i = 0; i < 4; i++) {
    //         for (let j = 0; j < 4; j++) {
    //             rotated_map[j][3 - i] = origin[i][j];
    //         }
    //     }
    //     return rotated_map;
    // }

    // function 오른쪽180회전(map44) {

    //     const rotated_map = map44.map(item => ([...item]));
    //     const origin = map44.map(item => ([...item]));
    //     for (let i = 0; i < 4; i++) {
    //         for (let j = 0; j < 4; j++) {
    //             rotated_map[3 - i][3 - j] = origin[i][j];
    //         }
    //     }
    //     return rotated_map;
    // }

    // function 오른쪽270회전(map44) {

    //     const rotated_map = map44.map(item => ([...item]));
    //     const origin = map44.map(item => ([...item]));
    //     for (let i = 0; i < 4; i++) {
    //         for (let j = 0; j < 4; j++) {
    //             rotated_map[3 - j][i] = origin[i][j];
    //         }
    //     }
    //     return rotated_map;
    // }

    function key_move(map44, a) {
        const rotatedMap = rotate(map44, a);
        const movedMap1 = 왼쪽정렬(rotatedMap);
        const leftMap = 왼쪽(movedMap1);
        const movedMap2 = 왼쪽정렬(leftMap);
        const rotatedMap2 = rotate(movedMap2, 4 - a);
        if (JSON.stringify(rotatedMap2) == JSON.stringify(map44)) {
            map44변경(rotatedMap2);
        } else {
            const newMap = randPlus(rotatedMap2);
            map44변경(newMap);
        };
    }

    function move_result(map44, a) {
        const rotatedMap = rotate(map44, a);
        const movedMap1 = 왼쪽정렬(rotatedMap);
        const leftMap = 왼쪽(movedMap1);
        const movedMap2 = 왼쪽정렬(leftMap);
        const rotatedMap2 = rotate(movedMap2, 4 - a);
        if (JSON.stringify(rotatedMap2) == JSON.stringify(map44)) {
            return rotatedMap2;
        } else {
            const newMap = randPlus(rotatedMap2);
            return newMap
        };
    }
    // function 왼쪽으로(map44) {
    //     const movedMap1 = 왼쪽정렬(map44);
    //     const leftMap = 왼쪽(movedMap1);
    //     const movedMap2 = 왼쪽정렬(leftMap);
    //     if (JSON.stringify(movedMap2) == JSON.stringify(map44)) {
    //         map44변경(movedMap2);
    //     } else {
    //         const newMap = randPlus(movedMap2);
    //         map44변경(newMap);
    //     };
    // }

    // function 아래(map44) {
    //     const rotatedMap = rotate(map44, 1);
    //     const movedMap1 = 왼쪽정렬(rotatedMap);
    //     const leftMap = 왼쪽(movedMap1);
    //     const movedMap2 = 왼쪽정렬(leftMap);
    //     const rotatedMap2 = rotate(movedMap2, 3);
    //     if (JSON.stringify(rotatedMap2) == JSON.stringify(map44)) {
    //         map44변경(rotatedMap2);
    //     } else {
    //         const newMap = randPlus(rotatedMap2);
    //         map44변경(newMap);
    //     };
    // }

    // function 오른쪽(map44) {
    //     const rotatedMap = rotate(map44, 2);
    //     const movedMap1 = 왼쪽정렬(rotatedMap);
    //     const leftMap = 왼쪽(movedMap1);
    //     const movedMap2 = 왼쪽정렬(leftMap);
    //     const rotatedMap2 = rotate(movedMap2, 2);
    //     if (JSON.stringify(rotatedMap2) == JSON.stringify(map44)) {
    //         map44변경(rotatedMap2);
    //     } else {
    //         const newMap = randPlus(rotatedMap2);
    //         map44변경(newMap);
    //     };
    // }

    // function 위로(map44) {
    //     const rotatedMap = rotate(map44, 3);
    //     const movedMap1 = 왼쪽정렬(rotatedMap);
    //     const leftMap = 왼쪽(movedMap1);
    //     const movedMap2 = 왼쪽정렬(leftMap);
    //     const rotatedMap2 = rotate(movedMap2, 1);
    //     if (JSON.stringify(rotatedMap2) == JSON.stringify(map44)) {
    //         map44변경(rotatedMap2);
    //     } else {
    //         const newMap = randPlus(rotatedMap2);
    //         map44변경(newMap);
    //     };
    // }

    // 움직일 수 없는 랜덤 생성 안되게
    window.onkeydown = (e) => {
        if (e.keyCode === 37) {
            key_move(map44, 4)
        } else if (e.keyCode === 38) {
            key_move(map44, 3)
        } else if (e.keyCode === 39) {
            key_move(map44, 2)
        } else if (e.keyCode === 40) {
            key_move(map44, 1)
        }
    }

    function paint() {
        return (
            map44.map((e) => {
                const td = e.map((num) => {
                    return (
                        <td className={'color_' + num}>{num === 0 ? "" : num}</td>
                    )
                });
                return (<tr>{td}</tr>)
            })
        )
    }

    function score() {
        var total = 0;
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                total += map44[i][j]
            }
        }
        return total;
    }

    function con_Gameover() {
        const game_over = []
        for (let i = 0; i < 4; i++) {
            if (JSON.stringify(move_result(map44, i)) == JSON.stringify(map44)) {
                game_over.push(0)
            }
        }
        if (JSON.stringify(game_over) == JSON.stringify([0, 0, 0, 0])) {
            return (
                <>
                    <div className="game_end">
                        <div style={{ marginTop: '300px', opacity: '1' }}>
                            <h1 style={{ fontSize: '50px' }}>Game Over</h1>
                            <h1 className="restart" style={{ cursor: 'pointer', fontSize: '30px' }} onClick={() => (window.location.reload())}>New Game</h1>
                        </div>
                    </div>
                </>
            )
        }
    }

    function game_success() {
        for (let i = 0; i < 4; i++) {
            if (map44[i].find(e => e == 2048)) {
                return (
                    <>
                        <div className="game_end">
                            <div style={{ marginTop: '300px', opacity: '1' }}>
                                <h1 className="success">Congratulation !</h1>
                            </div>
                        </div>
                    </>
                )
            }
        }

    }

    function touchEnd(e) {
        const distanceX = TouchPosition.x - e.changedTouches[0].pageX
        const distanceY = TouchPosition.y - e.changedTouches[0].pageY
        if (distanceX < -30) {
            key_move(map44, 2)
        }
        if (distanceX > 30) {
            key_move(map44, 4)
        }
        if (distanceY > 30) {
            key_move(map44, 3)
        }
        if (distanceY < -30) {
            key_move(map44, 1)
        }
    }

    return (
        <>

            {
                con_Gameover()
            }
            {
                game_success()
            }
            <h1 className="score">Score: {score()}</h1>
            <table onTouchStart={(e) => setTouchPosition({
                x: e.changedTouches[0].pageX,
                y: e.changedTouches[0].pageY
            })} onTouchEnd={touchEnd}>

                <thead></thead>
                <tbody>
                    {
                        paint()
                    }
                </tbody>
            </table>
        </>


    )
}


export default Map;