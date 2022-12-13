
//import React from 'react';
//import {Link} from 'react-router-dom';
/*function List()
{
    const array = [1,2,3,4,5];
    const map1=array.map(x=>x);
    console.log(map1);
}*/
function List()
{
    const array=[
        {
            id:13,
            name:'xyz',
            roll:1
        },
        {
            id:12,
            name:'yzx',
            roll:2
        },
        {
            id:11,
            name:'zyx',
            roll:3
        },
    ];
    return(
        <div>
            {array.map(data =>
                    (
                       <div key={data.id}>
                        <p style={{background:'red', }}>My name is{data.name}</p>
                        <p style={{background:'blue'}}>My roll_no is{data.roll}</p>
                        </div>

                    ))
            }
        </div>
    )
    
}

export default  List;