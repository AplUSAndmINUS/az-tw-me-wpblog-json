# TimerTrigger - JavaScript

The `TimerTrigger` makes it incredibly easy to have your functions executed on a schedule. This sample demonstrates a simple use case of calling your function every 5 minutes.

## How it works

For a `TimerTrigger` to work, you provide a schedule in the form of a [cron expression](https://en.wikipedia.org/wiki/Cron#CRON_expression)(See the link for full details). A cron expression is a string with 6 separate expressions which represent a given schedule via patterns. The pattern we use to represent every 2 hours is `0 0 */2 * * *`. This, in plain text, means: "When seconds is equal to 0, minutes is divisible by 5, for any hour, day of the month, month, day of the week, or year".

## Learn more

<TODO> Documentation

This app uses Node v18.16.0 and requires npm to run. You run the app using "npm start" from Terminal. 
The app currently runs within an Azure Function every two hours on a CRON job to pull a JSON and write it to an Azure Queue, stored with a Public CDN for my website! The CDN I will update here once I have the final URL. 
