import React from 'react'
import Monster from './Monster';

export default function MonsterList(props) {

    return (
        <div className="card-list">
            {(props.monsters.length !== 0) ?
                props.monsters.map((monster) => {
                    return <Monster key={monster.id} monster={monster} />
                })
                : null
            }
        </div>
    )
}
