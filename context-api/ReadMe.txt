Here, we can use context data anywhere in the program by just 
following the given steps.

import { MyContext } from '@/Helper/Context'
import  { useContext } from 'react'

//Store the context data and us it by the variable name.
const user = useContext(MyContext);

