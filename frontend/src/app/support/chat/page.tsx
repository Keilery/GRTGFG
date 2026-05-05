"use client";

import { useState } from "react";
import { Card } from "@/components/ui/Card";
import { Avatar } from "@/components/ui/Avatar";
import { Button } from "@/components/ui/Button";
import { Send } from "lucide-react";

interface Msg {
  id: string;
  from: "me" | "support";
  text: string;
  time: string;
}

const INITIAL: Msg[] = [
  {
    id: "1",
    from: "support",
    text: "Здравствуйте! Меня зовут Анна. Чем могу помочь?",
    time: "11:00",
  },
];

export default function ChatPage() {
  const [messages, setMessages] = useState<Msg[]>(INITIAL);
  const [text, setText] = useState("");

  function send() {
    if (!text.trim()) return;
    const time = new Date().toLocaleTimeString("ru-RU", {
      hour: "2-digit",
      minute: "2-digit",
    });
    setMessages((m) => [
      ...m,
      { id: Math.random().toString(36).slice(2), from: "me", text, time },
    ]);
    setText("");
    setTimeout(() => {
      setMessages((m) => [
        ...m,
        {
          id: Math.random().toString(36).slice(2),
          from: "support",
          text: "Спасибо за сообщение, передам коллеге, который отвечает за этот раздел.",
          time: new Date().toLocaleTimeString("ru-RU", {
            hour: "2-digit",
            minute: "2-digit",
          }),
        },
      ]);
    }, 1200);
  }

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 pt-8">
      <Card padding="none" className="h-[70vh] flex flex-col">
        <div className="p-4 border-b border-white/[0.06] flex items-center gap-3">
          <Avatar src="https://avatars.githubusercontent.com/u/3?v=4" size="md" online />
          <div>
            <p className="font-semibold">Анна · Поддержка</p>
            <p className="text-xs text-success">онлайн</p>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {messages.map((m) => (
            <div
              key={m.id}
              className={`flex gap-3 ${m.from === "me" ? "flex-row-reverse" : ""}`}
            >
              <Avatar
                src={
                  m.from === "me"
                    ? "https://avatars.githubusercontent.com/u/1?v=4"
                    : "https://avatars.githubusercontent.com/u/3?v=4"
                }
                size="sm"
              />
              <div
                className={`max-w-[70%] rounded-ios px-4 py-2.5 text-sm ${
                  m.from === "me"
                    ? "bg-white text-black"
                    : "bg-white/[0.06] border border-white/[0.08]"
                }`}
              >
                <p>{m.text}</p>
                <p className="text-[10px] opacity-50 mt-1">{m.time}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="p-3 border-t border-white/[0.06] flex gap-2">
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && send()}
            placeholder="Сообщение..."
            className="flex-1 bg-white/[0.04] border border-white/[0.08] rounded-ios-sm px-4 py-2.5 text-sm outline-none focus:border-white/30"
          />
          <Button onClick={send} size="icon">
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </Card>
    </div>
  );
}
