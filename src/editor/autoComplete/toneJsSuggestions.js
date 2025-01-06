import { languages } from "monaco-editor";

export const suggestions = [
  // tone.hello.Synth
  {
    label: "tone.hello.Synth",
    kind: languages.CompletionItemKind.Function,
    insertText: "const synth = new Tone.Synth().toDestination();\nsynth.triggerAttackRelease('C4', '8n');",
    detail: "Creates a Synth instrument.",
    documentation: "https://tonejs.github.io/docs/15.0.4/Synth",
  },
  // tone.hello.AMSynth
  {
    label: "tone.hello.AMSynth",
    kind: languages.CompletionItemKind.Function,
    insertText: "const amSynth = new Tone.AMSynth().toDestination();\namSynth.triggerAttackRelease('C4', '8n');",
    detail: "Creates an AMSynth for amplitude modulation synthesis.",
    documentation: "https://tonejs.github.io/docs/15.0.4/AMSynth",
  },
  // tone.hello.FMSynth
  {
    label: "tone.hello.FMSynth",
    kind: languages.CompletionItemKind.Function,
    insertText: "const fmSynth = new Tone.FMSynth().toDestination();\nfmSynth.triggerAttackRelease('C4', '8n');",
    detail: "Creates an FMSynth for frequency modulation synthesis.",
    documentation: "https://tonejs.github.io/docs/15.0.4/FMSynth",
  },
  // tone.hello.DuoSynth
  {
    label: "tone.hello.DuoSynth",
    kind: languages.CompletionItemKind.Function,
    insertText: "const duoSynth = new Tone.DuoSynth().toDestination();\nduoSynth.triggerAttackRelease('C4', '8n');",
    detail: "Creates a DuoSynth, a dual voice synthesizer.",
    documentation: "https://tonejs.github.io/docs/15.0.4/DuoSynth",
  },
  // tone.hello.MembraneSynth
  {
    label: "tone.hello.MembraneSynth",
    kind: languages.CompletionItemKind.Function,
    insertText:
      "const membraneSynth = new Tone.MembraneSynth().toDestination();\nmembraneSynth.triggerAttackRelease('C2', '8n');",
    detail: "Creates a MembraneSynth for percussive sounds.",
    documentation: "https://tonejs.github.io/docs/15.0.4/MembraneSynth",
  },
  // tone.hello.MetalSynth
  {
    label: "tone.hello.MetalSynth",
    kind: languages.CompletionItemKind.Function,
    insertText: "const metalSynth = new Tone.MetalSynth().toDestination();\nmetalSynth.triggerAttackRelease('C4', '8n');",
    detail: "Creates a MetalSynth for metallic and industrial sounds.",
    documentation: "https://tonejs.github.io/docs/15.0.4/MetalSynth",
  },
  {
    label: "tone.loop",
    kind: languages.CompletionItemKind.Snippet,
    insertText:
      "const loop = new Tone.Loop((time) => {\n" +
      "  // Your loop logic here\n" +
      "}, '${interval}');\n" +
      "loop.start(0);\n" +
      "Tone.Transport.start();",
    insertTextRules: languages.CompletionItemInsertTextRule.InsertAsSnippet,
    detail: "Create a Tone.js loop.",
    documentation:
      "Creates a new Tone.Loop. Define the loop logic inside the function. 'interval' sets the loop timing (e.g., '4n').\n" +
      "Documentation: https://tonejs.github.io/docs/15.0.4/Loop",
  },
];
