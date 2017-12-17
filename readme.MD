### A Hangman Game Programmed in Javascript in Node.JS

### Goals: 
* Practice using the **Terminal**
* Install and use [**Node.JS**][node link] for a project
* Learn how to install and use simple [**NPM packages**][npm link] (using [**Yarn**][yarn link])
* Practice JS coding and control flow

### Outcomes:
* NPM packages are useful and easy to install. Good documentation makes them easy to use and good practice working with other people's code. 
* More experience using Regex to determine valid user inputs.
* Learning about [**JS Promise Object**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
* Built functional Hangman game that accounts for valid/invalid user inputs.
* Learning and practicing [**Markdown**](https://www.markdowntutorial.com/) by writing my first ReadMe documentation. 


### Getting Started

I've been using Visual Studio Code for my programming environment to date which has an easy to use intergrated Terminal. From there I installed [**Node.JS**][node link].

To run a Node JS file, I first had to use the commmand line to create directory and javascript file to work with and run: 

```
$ mkdir Hangman
$ cd Hangman
$ touch game.js
```

Once I created my ```game.js``` file, I could open it within VSCode and add the code below: 

```
console.log('hello world');

Switching back to the terminal, I make sure I am in the right Hangman directory and type ```node <filename>``` to run the JS file, in this case called ```game.js```

```
$ cd Hangman
$ node game.js
```

And voila, ```hello world``` will display in the Terminal.  Now I was ready to attempt some coding. 

[yarn link]: https://yarnpkg.com/en/docs/getting-started
[npm link]: https://www.npmjs.com/
[node link]: https://nodejs.org/en/