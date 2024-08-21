import * as dotenv from 'dotenv'

export const getEnv = function() 
{
dotenv.config({
    override: true,
    //path: `src/helper/env/.env.stage`
    path: `src/helper/env/.env.${process.env.ENV}`
})
}