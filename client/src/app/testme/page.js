import React from 'react'
import { Switch } from '@nextui-org/react'

function Toggle() {
    return (
        <div>
            <Switch
      defaultSelected
      size="lg"
      color="#fff"
      startContent={<div>
        Hello
      </div>}
      endContent={<div>
        hi
      </div>}
    >
    </Switch>
        </div>
    )
}

export default Toggle