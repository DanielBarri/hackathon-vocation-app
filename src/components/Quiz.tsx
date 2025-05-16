"use client";
import { useState } from "react";

type Quiz = {
    answer: string;
};

const quiz = [
    {
        pregunta: "¿Qué te gusta hacer cuando estás solo o sola?",
        respuestas: [
            "Dibujar o pintar",
            "Leer o ver videos",
            "Jugar con juguetes o construir cosas",
            "Escribir historias",
            "Armar cosas o experimentar",
        ],
    },
    {
        pregunta: "¿Qué parte de la escuela te gusta más?",
        respuestas: [
            "Arte o música",
            "Ciencias o computación",
            "Deportes o educación física",
            "Matemáticas o resolver problemas",
            "Hablar con mis amigos o ayudar a otros",
        ],
    },
];

const Quiz = () => {
    const [activeQuestion, setActiveQuestion] = useState<number>(0);
    const [selectedAnswer, setSelectedAnswer] = useState<string>("");
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<
        number | null
    >(null);
    const [checked, setChecked] = useState(false);

    const onAnswerSelected = (answer: string, idx: number) => {
        if (checked && selectedAnswerIndex === idx) {
            setSelectedAnswerIndex(null);
            setSelectedAnswer("");
            setChecked(false);
        } else {
            setSelectedAnswerIndex(idx);
            setSelectedAnswer(answer);
            setChecked(true);
            console.log(answer);
        }
    };

    const nextQuestion = () => {
        setSelectedAnswerIndex(null);
        if (activeQuestion !== quiz.length - 1) {
            setActiveQuestion((prev) => prev + 1);
        } else {
            setActiveQuestion(0);
        }
        setChecked(false);
    };

    const prevQuestion = () => {
        setSelectedAnswerIndex(null);
        if (activeQuestion !== 0) {
            setActiveQuestion((prev) => prev - 1);
        } else {
            setActiveQuestion(0);
        }
    };

    return (
        <div className="h-full min-h-[680px] flex flex-col gap-6 justify-evenly">
            <h1 className="text-xl font-semibold pb-2 text-gray-400">Quiz</h1>
            <h1 className="h-1/6 text-center text-xl font-semibold">
                Pregunta {activeQuestion + 1}
            </h1>
            <div className="h-4/6 flex flex-col justify-baseline items-center gap-2">
                <h2 className="text-center font-semibold">
                    {quiz[activeQuestion].pregunta}
                </h2>
                {quiz[activeQuestion].respuestas.map((respuesta, idx) => (
                    <li
                        className={`border-1 border-gray-300 w-[300px] sm:w-[400px] p-2 rounded-md items-center justify-center list-none hover:bg-gray-200 hover:text-gray-500 ${
                            selectedAnswerIndex === idx
                                ? "bg-blue-600 text-white"
                                : "text-gray-500"
                        }`}
                        key={idx}
                        onClick={() => onAnswerSelected(selectedAnswer, idx)}>
                        <span className="font-semibold">{respuesta}</span>
                    </li>
                ))}
            </div>
            <div className="h-1/6 flex flex-row relative">
                <button
                    className={`w-[100px] h-[40px] rounded-md border-1 p-2 border-gray-300 text-gray-500 hover:bg-gray-200 absolute bottom-0 left-0 ${
                        activeQuestion === 0 && "hidden"
                    }`}
                    onClick={prevQuestion}>
                    Regresar
                </button>
                {checked ? (
                    <button
                        onClick={nextQuestion}
                        className="w-[100px] h-[40px] rounded-md border-1 p-2 border-gray-300 text-gray-500 hover:bg-gray-200 absolute right-0 bottom-0">
                        {activeQuestion === quiz.length - 1
                            ? "Finalizar"
                            : "Siguiente"}
                    </button>
                ) : (
                    <button
                        onClick={nextQuestion}
                        disabled
                        className="w-[100px] h-[40px] rounded-md border-1 p-2 border-gray-300 text-gray-500 hover:bg-red-500 hover:text-white absolute right-0 bottom-0">
                        {activeQuestion === quiz.length - 1
                            ? "Finalizar"
                            : "Siguiente"}
                    </button>
                )}
            </div>
        </div>
    );
};

export default Quiz;
