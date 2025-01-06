
# Sonic JS

**Sonic JS** is an in-browser music creation tool inspired by Sonic Pi, utilizing the powerful [Tone.js](https://tonejs.github.io/) library for sound synthesis and [Monaco Editor](https://microsoft.github.io/monaco-editor/) for code editing. With a rich feature set, it provides autocomplete suggestions, Tone.js integration, and more to help you create music in a unique and intuitive way.

## 🚀 Installation

To set up **Sonic JS** locally, follow these steps:

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/sonic-js.git
cd sonic-js
```

### 2. Install Dependencies

Use npm or yarn to install the required packages:

```bash
npm install
# or
yarn install
```

### 3. Start the Development Server

Launch the app in your default browser:

```bash
npm run dev
# or
yarn dev
```

The development server will start at `http://localhost:5173`.

## 🎧 Features

- **Monaco Editor Integration**: Seamlessly embedded Monaco Editor for an enhanced coding experience with syntax highlighting, autocomplete, and error checking.
- **Tone.js Integration**: Easily create and manipulate sounds with Tone.js’s powerful synthesis, effects, and transport features.
- **Autocomplete & Snippets**: Basic autocomplete for Tone.js classes, methods, and loops. Fast access to common patterns for sound creation.
- **Loops & Patterns**: Easily create and manage loops with Tone.js’s Loop object, synced to the Tone.Transport.

---

## ✨ Key Snippets and Autocomplete Features

Sonic JS includes dynamic autocomplete features to make coding with Tone.js effortless. Here are a few highlights:

### Instruments
Start typing `tone.hello` to see a list of Tone.js instruments, such as:  
- `tone.hello.Synth`  
- `tone.hello.AMSynth`  
- `tone.hello.FMSynth`  

Once selected, Sonic JS will automatically insert hello world example code for that instrument. Example:

```javascript
const synth = new Tone.Synth().toDestination();
synth.triggerAttackRelease("C4", "8n");
```

### Loops
Quickly generate looping music patterns using the `tone.loop` snippet:

```javascript
const synth = new Tone.Synth().toDestination();
const loop = new Tone.Loop((time) => {
  synth.triggerAttackRelease("C4", "8n", time);
}, "4n");

loop.start(0);
Tone.Transport.start();
```

---

SOON TO BE
<details>

## 🌐 Live Demo

Check out a live demo of Sonic JS here: [Live Demo](https://your-demo-link.com)

---

## 📸 Screenshots

### Editor Interface
![Sonic JS Editor](https://your-screenshot-link.com/editor-interface.png)

### Autocomplete Suggestions
![Autocomplete Suggestions](https://your-screenshot-link.com/autocomplete-suggestions.png)

---
</details>

## 👩‍💻 Authors and Contributors

**Tom Portugez** - Creator and Maintainer  
<!-- Feel free to add Tom Portugez and contact information here. -->

Special thanks to the Tone.js and Monaco Editor communities for their incredible tools and documentation.

---

## 📬 Contact

Have questions or feedback? Reach out at:  
📧 **chip.luxury.ewa@gmail.com**  
💼 **LinkedIn: [Tom Portugez](https://www.linkedin.com/in/tomportugez/)**

---

## ⭐ Acknowledgments

- [Sonic Pi](https://sonic-pi.net/) - The inspiration for this project.  
- [Tone.js](https://tonejs.github.io/) - The music synthesis library powering Sonic JS.  
- [Monaco Editor](https://microsoft.github.io/monaco-editor/) - The robust in-browser code editor.  

---

## 🙌 Support

If you like this project, consider giving it a ⭐ on GitHub or sharing it with others who might enjoy it.

---

## 🎉 Let’s Jam!

Unleash your creativity and explore the endless possibilities of coding music with **Sonic JS**.
