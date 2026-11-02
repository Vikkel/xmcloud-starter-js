"use client";

import { FormEvent, JSX, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  answerChat,
  suggestedPrompts,
  type ChatSource,
} from "lib/chat-knowledge";
import { recordSearchEvent } from "lib/cdp/cdp-session-tracker";
import { IconMessage, IconSend, IconX } from "lib/demo-icons";

interface ChatWidgetProps {
  params?: {
    RenderingIdentifier?: string;
  };
}

type ChatMessage = {
  id: string;
  role: "user" | "assistant";
  text: string;
  sources?: ChatSource[];
};

export const Default = ({ params }: ChatWidgetProps): JSX.Element => {
  const searchParams = useSearchParams();
  const listRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      role: "assistant",
      text: "Ask about milk-powder spray drying, MSD®, AddCool®, or the Arla case.",
    },
  ]);
  const id = params?.RenderingIdentifier;

  const openFromChatGpt =
    searchParams.get("utm_source")?.toLowerCase() === "chatgpt";

  useEffect(() => {
    if (openFromChatGpt) setOpen(true);
  }, [openFromChatGpt]);

  useEffect(() => {
    listRef.current?.scrollTo({
      top: listRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, open]);

  const ask = (query: string) => {
    const trimmed = query.trim();
    if (!trimmed) return;
    recordSearchEvent(trimmed, "chat");
    const answer = answerChat(trimmed);
    setMessages((prev) => [
      ...prev,
      { id: `u-${Date.now()}`, role: "user", text: trimmed },
      {
        id: `a-${Date.now()}`,
        role: "assistant",
        text: answer.text,
        sources: answer.sources,
      },
    ]);
    setInput("");
  };

  const submit = (event: FormEvent) => {
    event.preventDefault();
    ask(input);
  };

  return (
    <div className="gea-chat" id={id}>
      {open ? (
        <section className="gea-chat__panel" aria-label="GEA chat">
          <header>
            <strong>Ask GEA</strong>
            <button
              type="button"
              aria-label="Close chat"
              onClick={() => setOpen(false)}
            >
              <IconX />
            </button>
          </header>
          <div ref={listRef} className="gea-chat__log">
            {messages.map((message) => (
              <article key={message.id} className={message.role}>
                <p>{message.text}</p>
                {message.sources?.length ? (
                  <ul>
                    {message.sources.map((source) => (
                      <li key={source.href}>
                        <Link href={source.href}>{source.title}</Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </article>
            ))}
          </div>
          <div className="gea-chat__chips">
            {suggestedPrompts().map((prompt) => (
              <button key={prompt} type="button" onClick={() => ask(prompt)}>
                {prompt}
              </button>
            ))}
          </div>
          <form onSubmit={submit}>
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Ask about spray drying"
              aria-label="Message"
            />
            <button type="submit" aria-label="Send">
              <IconSend />
            </button>
          </form>
        </section>
      ) : null}
      <button
        type="button"
        className="gea-chat__toggle"
        aria-label={open ? "Close chat" : "Open chat"}
        onClick={() => setOpen((value) => !value)}
      >
        <IconMessage />
      </button>
    </div>
  );
};

export default Default;
