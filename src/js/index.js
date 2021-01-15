// Import SASS entrypoint so Webpack will treat it as a dependency
import '../styles/main.scss';

// Import modules
import { listifyAdjectives } from './myModule/myModule'

const mySecretKey = process.env.SECRET_KEY;

const whatWebpackIs = [
    'doop',
    'croosh',
    'rad',
    'sick'
]

console.log(`The secret is "${mySecretKey}"`)
console.log(`Webpack is totally ${listifyAdjectives(whatWebpackIs)}`)
