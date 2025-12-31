import React, { useState } from 'react';
import { Terminal, MessageCircle, Sparkles } from 'lucide-react';

import themeStyles from '../utils/themeStyles';

const AIStatusConsole = ({ theme, monthsRemaining, phase }) => {
    const [log, setLog] = useState(null);
    const [loading, setLoading] = useState(false);

    const activeStyle = themeStyles[theme];

    const generateStatus = async () => {
        setLoading(true);
        setLog(null);

        // 🔴 Inject your API key at runtime
        const apiKey = '';

        const role =
            theme === 'car'
                ? 'a futuristic cyber-mechanic AI'
                : 'a cute, fluffy master baker AI';

        const context =
            theme === 'car'
                ? 'upgrading a high-performance vehicle system'
                : 'baking the ultimate mochi';

        const tone =
            theme === 'car'
                ? 'technical, cool, cryptic, sci-fi'
                : 'warm, bubbly, excited, cute';

        const prompt = `
      Act as ${role}.
      We are currently ${context}.
      Launch in ${monthsRemaining} months (Phase: ${phase}).
      One sentence. Under 25 words.
      Tone: ${tone}.
    `;

        try {
            const res = await fetch(
                `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`,
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        contents: [{ parts: [{ text: prompt }] }]
                    })
                }
            );

            const data = await res.json();
            const text =
                data?.candidates?.[0]?.content?.parts?.[0]?.text;

            setLog(text || 'System offline. Retry later.');
        } catch (err) {
            console.error(err);
            setLog('Connection failed. Offline mode active.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div
            className={`w-full max-w-2xl mt-6 p-4 rounded-xl border-2 border-dashed ${activeStyle.consoleBg}`}
        >
            <div className="flex items-center gap-2 mb-3">
                {theme === 'car' ? (
                    <Terminal size={18} />
                ) : (
                    <MessageCircle size={18} />
                )}
                <span className="text-xs font-bold uppercase tracking-widest opacity-80">
                    {theme === 'car' ? 'AI_SYSTEM_LOG' : "Baker's Diary AI"}
                </span>
            </div>

            <div className="min-h-[60px] flex items-center justify-center text-center">
                {loading ? (
                    <div className="flex items-center gap-2 animate-pulse">
                        <Sparkles size={16} />
                        <span className="text-sm">Generating update…</span>
                    </div>
                ) : log ? (
                    <p className="text-sm italic">"{log}"</p>
                ) : (
                    <p className="text-sm opacity-50 italic">
                        System idle. Generate a status update.
                    </p>
                )}
            </div>

            <button
                onClick={generateStatus}
                disabled={loading}
                className={`w-full mt-3 py-2 rounded-lg text-xs font-bold uppercase tracking-widest ${activeStyle.buttonSelected}`}
            >
                <Sparkles size={14} className="inline mr-2" />
                Generate Status
            </button>
        </div>
    );
};

export default AIStatusConsole;
