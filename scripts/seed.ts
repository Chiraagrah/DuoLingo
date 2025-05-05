import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";
import {neon} from "@neondatabase/serverless";

import * as schema from "../db/schema";

const sql = neon(process.env.DATABASE_URL!);
// @ts-ignore
const db = drizzle(sql, { schema });

const main = async () => {
    try{
        console.log("Seeding database");

        await db.delete(schema.courses);
        await db.delete(schema.userProgress);
        await db.delete(schema.units);
        await db.delete(schema.lessons);
        await db.delete(schema.challenges);
        await db.delete(schema.challengeOptions);
        await db.delete(schema.challengeProgress);
        await db.delete(schema.userSubscription);

        await db.insert(schema.courses).values([ {
            id:1,
            title: "Spanish",
            imageSrc: "/es.svg",
            },
            {
                id:2,
                title: "Italian",
                imageSrc: "/it.svg",
            },
            {
                id:3,
                title: "French",
                imageSrc: "/fr.svg",
            },
            {
                id:4,
                title: "Croatian",
                imageSrc: "/hr.svg",
            },
            {
                id:5,
                title: "Japanese",
                imageSrc: "/jp.svg",
            },
            {
                id: 6,
                title: "Class 10 Math",
                imageSrc: "/math.svg",
            },

        ]);
        
        await db.insert(schema.units).values([
            {
                id:10,
                courseId:1,
                title: "Unit 1",
                description: "Introduction to Spanish",
                order: 1,
            },
            {
                id: 60,
                courseId: 6,
                title: "Real Numbers",
                description: "Understanding Euclid’s Lemma and number properties",
                order: 1,
            },
        ]);

        await db.insert(schema.lessons).values([
            {
                id:101,
                unitId:10,
                order:1,
                title: "Nouns",
            },
            {
                id:102,
                unitId:10,
                order:2,
                title: "Verbs",
            },
            {
                id:103,
                unitId:10,
                order:3,
                title: "Verbs",
            },
            {
                id:104,
                unitId:10,
                order:4,
                title: "Verbs",
            },
            {
                id:105,
                unitId:10,
                order:5,
                title: "Verbs",
            },
            {
                id: 601,
                unitId: 60,
                order: 1,
                title: "Euclid’s Division Lemma",
            },
            {
                id: 602,
                unitId: 60,
                order: 2,
                title: "Fundamental Theorem of Arithmetic",
              },
        ]);

        await db.insert(schema.challenges).values([
            {
                id: 1001,
                lessonId: 101,
                type: "SELECT",
                order: 1,
                question: 'Which one of these is the "the man" ?',
            },
            {
                id: 1002,
                lessonId: 101,
                type: "ASSIST",
                order: 2,
                question: '"the man"',
            },
            {
                id: 1003,
                lessonId: 101,
                type: "SELECT",
                order: 3,
                question: 'Which one of these is the "the robot" ?',
            },
            { 
                id: 6001,
                lessonId: 601,
                type: "SELECT", 
                order: 1, 
                question: "Use the division algorithm to find the result of 43 ÷ 7." 
            },
            { 
                id: 6002, 
                lessonId: 601,
                type: "SELECT",
                order: 2, 
                question: "Fill in the blanks: a = b__ + __, where 0 ≤ r < b." 
            },
            { 
                id: 6003, 
                lessonId: 601, 
                type: "SELECT", 
                order: 3, 
                question: "What are the quotient and remainder when 123 is divided by 12?" 
            },
            { 
                id: 6004, 
                lessonId: 601, 
                type: "SELECT", 
                order: 4, 
                question: "What is the HCF of 65 and 117 using Euclid’s algorithm?" 
            },
            { 
                id: 6005, 
                lessonId: 601, 
                type: "SELECT", 
                order: 5, 
                question: "Find the HCF of 84 and 120 using Euclid’s algorithm." 
            },
            { 
                id: 6006, 
                lessonId: 601, 
                type: "SELECT", 
                order: 6, 
                question: "If 135 = 11q + r and 0 ≤ r < 11, which pair is valid?" 
            },
            { 
                id: 6007, 
                lessonId: 601, 
                type: "SELECT", 
                order: 7, 
                question: "Two rods of lengths 168 cm and 144 cm are to be cut into equal lengths. What is the greatest possible length?" 
            },
            { 
                id: 6008, 
                lessonId: 601, 
                type: "SELECT", 
                order: 8, 
                question: "A circular garden (168m) and a square lawn (144m) need equal-length rods for fencing. What is the maximum rod length?" 
            },
            { 
                id: 6009, 
                lessonId: 601, 
                type: "SELECT", 
                order: 9, 
                question: "Why does repeatedly subtracting the smaller number from the larger one not change the HCF?" 
            },
            { 
                id: 6010, 
                lessonId: 601, 
                type: "SELECT", 
                order: 10, 
                question: "What is the output of hcf(84, 120) in the given Python code snippet?" 
            },
        ]);
        await db.insert(schema.challenges).values([
            {
              id: 6101,
              lessonId: 602,
              type: "SELECT",
              order: 1,
              question: "What is the prime factorisation of 84?",
            },
            {
              id: 6102,
              lessonId: 602,
              type: "SELECT",
              order: 2,
              question: "Which of these numbers is not a prime number?",
            },
            {
              id: 6103,
              lessonId: 602,
              type: "SELECT",
              order: 3,
              question: "Which of the following is a correct statement of the Fundamental Theorem of Arithmetic?",
            },
            {
              id: 6104,
              lessonId: 602,
              type: "SELECT",
              order: 4,
              question: "What is the HCF of 36 and 48 using prime factorisation?",
            },
            {
              id: 6105,
              lessonId: 602,
              type: "SELECT",
              order: 5,
              question: "What is the LCM of 18 and 24 using prime factorisation?",
            },
            {
              id: 6106,
              lessonId: 602,
              type: "SELECT",
              order: 6,
              question: "The HCF of two numbers is 4, and their product is 320. What is their LCM?",
            },
            {
              id: 6107,
              lessonId: 602,
              type: "SELECT",
              order: 7,
              question: "Which one of these is a unique factorisation of 120?",
            },
            {
              id: 6108,
              lessonId: 602,
              type: "SELECT",
              order: 8,
              question: "What does the uniqueness in the Fundamental Theorem mean?",
            },
            {
              id: 6109,
              lessonId: 602,
              type: "SELECT",
              order: 9,
              question: "If HCF × LCM = product of two numbers, what is LCM of 8 and 9?",
            },
            {
              id: 6110,
              lessonId: 602,
              type: "SELECT",
              order: 10,
              question: "Which of the following numbers has the same prime factorisation as 2 × 3 × 3 × 5?",
            },
          ]);

        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 1001, //Which one of theses is "the man" ?
                imageSrc: "/man.svg",
                correct: true,
                text: "El hombre",
                audioSrc: "/es_man.mp3",
            },
            {
                challengeId: 1001,
                imageSrc: "/woman.svg",
                correct: false,
                text: "la mujer",
                audioSrc: "/es_woman.mp3",
            },
            {
                challengeId: 1001,
                imageSrc: "/robot.svg",
                correct: false,
                text: "el robot",
                audioSrc: "/es_robot.mp3",
            },
        ]);
        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 1002, // "the man" ?
                correct: true,
                text: "El hombre",
                audioSrc: "/es_man.mp3",
            },
            {
                challengeId: 1002,
                correct: false,
                text: "la mujer",
                audioSrc: "/es_woman.mp3",
            },
            {
                challengeId: 1002,
                correct: false,
                text: "el robot",
                audioSrc: "/es_robot.mp3",
            },
        ]);
        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 1003, //Which one of theses is "the robot" ?
                imageSrc: "/man.svg",
                correct: false,
                text: "El hombre",
                audioSrc: "/es_man.mp3",
            },
            {
                challengeId: 1003,
                imageSrc: "/woman.svg",
                correct: false,
                text: "la mujer",
                audioSrc: "/es_woman.mp3",
            },
            {
                challengeId: 1003,
                imageSrc: "/robot.svg",
                correct: true,
                text: "el robot",
                audioSrc: "/es_robot.mp3",
            },
        ]);
        await db.insert(schema.challengeOptions).values([
            // Challenge 6001
            { challengeId: 6001, text: "43 = 7 × 5 + 6", correct: false },
            { challengeId: 6001, text: "43 = 7 × 6 + 1", correct: true },
            { challengeId: 6001, text: "43 = 7 × 7 + 2", correct: false },

            // Challenge 6002
            { challengeId: 6002, text: "m and n", correct: false },
            { challengeId: 6002, text: "b and a", correct: false },
            { challengeId: 6002, text: "q and r", correct: true },

            // Challenge 6003
            { challengeId: 6003, text: "q = 10, r = 3", correct: false },
            { challengeId: 6003, text: "q = 9, r = 3", correct: true },
            { challengeId: 6003, text: "q = 8, r = 2", correct: false },

            // Challenge 6004
            { challengeId: 6004, text: "HCF = 1", correct: false },
            { challengeId: 6004, text: "HCF = 13", correct: true },
            { challengeId: 6004, text: "HCF = 7", correct: false },

            // Challenge 6005
            { challengeId: 6005, text: "HCF = 12", correct: true },
            { challengeId: 6005, text: "HCF = 6", correct: false },
            { challengeId: 6005, text: "HCF = 8", correct: false },

            // Challenge 6006
            { challengeId: 6006, text: "q = 11, r = 12", correct: false },
            { challengeId: 6006, text: "q = 12, r = 4", correct: true },
            { challengeId: 6006, text: "q = 14, r = -5", correct: false },

            // Challenge 6007
            { challengeId: 6007, text: "14 cm", correct: false },
            { challengeId: 6007, text: "28 cm", correct: true },
            { challengeId: 6007, text: "24 cm", correct: false },

            // Challenge 6008
            { challengeId: 6008, text: "14 m", correct: false },
            { challengeId: 6008, text: "28 m", correct: true },
            { challengeId: 6008, text: "24 m", correct: false },

            // Challenge 6009
            { challengeId: 6009, text: "Because HCF(a, b) = HCF(b, a - b)", correct: true },
            { challengeId: 6009, text: "Because subtraction eliminates the remainder", correct: false },
            { challengeId: 6009, text: "Because HCF decreases with each step", correct: false },

            // Challenge 6010
            { challengeId: 6010, text: "6", correct: false },
            { challengeId: 6010, text: "12", correct: true },
            { challengeId: 6010, text: "24", correct: false },
        ]);
        await db.insert(schema.challengeOptions).values([
            // 6101
            { challengeId: 6101, text: "2 × 2 × 3 × 7", correct: true },
            { challengeId: 6101, text: "2 × 3 × 5 × 7", correct: false },
            { challengeId: 6101, text: "2 × 6 × 7", correct: false },
          
            // 6102
            { challengeId: 6102, text: "29", correct: false },
            { challengeId: 6102, text: "27", correct: true },
            { challengeId: 6102, text: "17", correct: false },
          
            // 6103
            { challengeId: 6103, text: "Every number is prime", correct: false },
            { challengeId: 6103, text: "Every number is divisible by 2", correct: false },
            { challengeId: 6103, text: "Every composite number has a unique prime factorisation", correct: true },
          
            // 6104
            { challengeId: 6104, text: "12", correct: true },
            { challengeId: 6104, text: "6", correct: false },
            { challengeId: 6104, text: "18", correct: false },
          
            // 6105
            { challengeId: 6105, text: "36", correct: false },
            { challengeId: 6105, text: "96", correct: false },
            { challengeId: 6105, text: "72", correct: true },
          
            // 6106
            { challengeId: 6106, text: "80", correct: true },
            { challengeId: 6106, text: "40", correct: false },
            { challengeId: 6106, text: "100", correct: false },
          
            // 6107
            { challengeId: 6107, text: "2 × 6 × 10", correct: false },
            { challengeId: 6107, text: "2 × 4 × 15", correct: false },
            { challengeId: 6107, text: "2 × 2 × 2 × 3 × 5", correct: true },
          
            // 6108
            { challengeId: 6108, text: "Each number has infinite factors", correct: false },
            { challengeId: 6108, text: "Each composite number has one prime factorisation (order doesn’t matter)", correct: true },
            { challengeId: 6108, text: "Each number is divisible by only one prime", correct: false },
          
            // 6109
            { challengeId: 6109, text: "72", correct: true },
            { challengeId: 6109, text: "36", correct: false },
            { challengeId: 6109, text: "18", correct: false },
          
            // 6110
            { challengeId: 6110, text: "90", correct: false },
            { challengeId: 6110, text: "270", correct: true },
            { challengeId: 6110, text: "60", correct: false },
          ]);
          await db.insert(schema.lessons).values([
            {
              id: 603,
              unitId: 60,
              order: 3,
              title: "Irrational Numbers",
            },
          ]);
          
          await db.insert(schema.challenges).values([
            {
              id: 6201,
              lessonId: 603,
              type: "SELECT",
              order: 1,
              question: "Which of the following is an irrational number?",
            },
            {
              id: 6202,
              lessonId: 603,
              type: "SELECT",
              order: 2,
              question: "Which of these square roots is irrational?",
            },
            {
              id: 6203,
              lessonId: 603,
              type: "SELECT",
              order: 3,
              question: "What type of number is √2?",
            },
            {
              id: 6204,
              lessonId: 603,
              type: "SELECT",
              order: 4,
              question: "Which number is NOT irrational?",
            },
            {
              id: 6205,
              lessonId: 603,
              type: "SELECT",
              order: 5,
              question: "Which expression is irrational?",
            },
            {
              id: 6206,
              lessonId: 603,
              type: "SELECT",
              order: 6,
              question: "Which of the following is a valid proof idea for proving √2 is irrational?",
            },
            {
              id: 6207,
              lessonId: 603,
              type: "SELECT",
              order: 7,
              question: "What do we assume when beginning to prove √2 is irrational?",
            },
            {
              id: 6208,
              lessonId: 603,
              type: "SELECT",
              order: 8,
              question: "Why can't an irrational number be written as a ratio?",
            },
            {
              id: 6209,
              lessonId: 603,
              type: "SELECT",
              order: 9,
              question: "Which of the following is irrational: √5, √9, 3.14, 5/2?",
            },
            {
              id: 6210,
              lessonId: 603,
              type: "SELECT",
              order: 10,
              question: "What kind of decimal expansion do irrational numbers have?",
            },
          ]);
          
          await db.insert(schema.challengeOptions).values([
            // 6201
            { challengeId: 6201, text: "1/2", correct: false },
            { challengeId: 6201, text: "0.25", correct: false },
            { challengeId: 6201, text: "√3", correct: true },
          
            // 6202
            { challengeId: 6202, text: "√4", correct: false },
            { challengeId: 6202, text: "√2", correct: true },
            { challengeId: 6202, text: "√9", correct: false },
          
            // 6203
            { challengeId: 6203, text: "Rational", correct: false },
            { challengeId: 6203, text: "Irrational", correct: true },
            { challengeId: 6203, text: "Natural", correct: false },
          
            // 6204
            { challengeId: 6204, text: "√3", correct: false },
            { challengeId: 6204, text: "√5", correct: false },
            { challengeId: 6204, text: "√9", correct: true },
          
            // 6205
            { challengeId: 6205, text: "2 + √2", correct: true },
            { challengeId: 6205, text: "3 + 1", correct: false },
            { challengeId: 6205, text: "5/4", correct: false },
          
            // 6206
            { challengeId: 6206, text: "Take √2 as a decimal and multiply by 100", correct: false },
            { challengeId: 6206, text: "Assume √2 = a/b, where a and b are integers with no common factors", correct: true },
            { challengeId: 6206, text: "Use a calculator to check decimals", correct: false },
          
            // 6207
            { challengeId: 6207, text: "That √2 = 1.41", correct: false },
            { challengeId: 6207, text: "That √2 is rational", correct: true },
            { challengeId: 6207, text: "That √2 is irrational", correct: false },
          
            // 6208
            { challengeId: 6208, text: "Because it’s too long", correct: false },
            { challengeId: 6208, text: "Because it’s negative", correct: false },
            { challengeId: 6208, text: "Because its decimal expansion never terminates or repeats", correct: true },
          
            // 6209
            { challengeId: 6209, text: "√9", correct: false },
            { challengeId: 6209, text: "√5", correct: true },
            { challengeId: 6209, text: "5/2", correct: false },
          
            // 6210
            { challengeId: 6210, text: "Non-terminating and non-repeating", correct: true },
            { challengeId: 6210, text: "Terminating", correct: false },
            { challengeId: 6210, text: "Repeating", correct: false },
          ]);
          await db.insert(schema.lessons).values([
            {
              id: 604,
              unitId: 60,
              order: 4,
              title: "Decimal Expansions of Rational Numbers",
            },
          ]);
          
          await db.insert(schema.challenges).values([
            {
              id: 6301,
              lessonId: 604,
              type: "SELECT",
              order: 1,
              question: "Which of the following has a terminating decimal expansion?",
            },
            {
              id: 6302,
              lessonId: 604,
              type: "SELECT",
              order: 2,
              question: "Which number has a non-terminating repeating decimal expansion?",
            },
            {
              id: 6303,
              lessonId: 604,
              type: "SELECT",
              order: 3,
              question: "What is the decimal form of 1/4?",
            },
            {
              id: 6304,
              lessonId: 604,
              type: "SELECT",
              order: 4,
              question: "Which denominator leads to a terminating decimal?",
            },
            {
              id: 6305,
              lessonId: 604,
              type: "SELECT",
              order: 5,
              question: "Which denominator will always give a repeating decimal expansion?",
            },
            {
              id: 6306,
              lessonId: 604,
              type: "SELECT",
              order: 6,
              question: "What kind of decimal expansion does 1/7 have?",
            },
            {
              id: 6307,
              lessonId: 604,
              type: "SELECT",
              order: 7,
              question: "When is a rational number’s decimal expansion terminating?",
            },
            {
              id: 6308,
              lessonId: 604,
              type: "SELECT",
              order: 8,
              question: "1/2, 1/4, 1/5 – what do their denominators have in common?",
            },
            {
              id: 6309,
              lessonId: 604,
              type: "SELECT",
              order: 9,
              question: "If the denominator has primes other than 2 or 5, what happens?",
            },
            {
              id: 6310,
              lessonId: 604,
              type: "SELECT",
              order: 10,
              question: "Which of the following is correct about 13/20?",
            },
          ]);
          await db.insert(schema.challengeOptions).values([
            // 6301
            { challengeId: 6301, text: "7/9", correct: false },
            { challengeId: 6301, text: "3/8", correct: true },
            { challengeId: 6301, text: "1/3", correct: false },
          
            // 6302
            { challengeId: 6302, text: "3/4", correct: false },
            { challengeId: 6302, text: "22/7", correct: true },
            { challengeId: 6302, text: "1/2", correct: false },
          
            // 6303
            { challengeId: 6303, text: "0.75", correct: false },
            { challengeId: 6303, text: "0.25", correct: true },
            { challengeId: 6303, text: "0.2", correct: false },
          
            // 6304
            { challengeId: 6304, text: "11", correct: false },
            { challengeId: 6304, text: "7", correct: false },
            { challengeId: 6304, text: "8", correct: true },
          
            // 6305
            { challengeId: 6305, text: "10", correct: false },
            { challengeId: 6305, text: "8", correct: false },
            { challengeId: 6305, text: "Denominator = 7", correct: true },
          
            // 6306
            { challengeId: 6306, text: "Terminating", correct: false },
            { challengeId: 6306, text: "Non-terminating repeating", correct: true },
            { challengeId: 6306, text: "Non-repeating terminating", correct: false },
          
            // 6307
            { challengeId: 6307, text: "If denominator is prime", correct: false },
            { challengeId: 6307, text: "If numerator is even", correct: false },
            { challengeId: 6307, text: "If the denominator has only 2s and/or 5s", correct: true },
          
            // 6308
            { challengeId: 6308, text: "All are greater than 1", correct: false },
            { challengeId: 6308, text: "All have prime factor 3", correct: false },
            { challengeId: 6308, text: "All have prime factors 2 or 5 only", correct: true },
          
            // 6309
            { challengeId: 6309, text: "It gives a terminating decimal", correct: false },
            { challengeId: 6309, text: "It gives a non-terminating repeating decimal", correct: true },
            { challengeId: 6309, text: "It becomes irrational", correct: false },
          
            // 6310
            { challengeId: 6310, text: "It has a terminating decimal", correct: true },
            { challengeId: 6310, text: "It is irrational", correct: false },
            { challengeId: 6310, text: "It has a non-terminating decimal", correct: false },
          ]);
          await db.insert(schema.lessons).values([
            {
              id: 605,
              unitId: 60,
              order: 5,
              title: "Real Numbers – Miscellaneous Review",
            },
          ]);
          
          await db.insert(schema.challenges).values([
            {
              id: 6401,
              lessonId: 605,
              type: "SELECT",
              order: 1,
              question: "What is the HCF of 130 and 210 using Euclid’s algorithm?",
            },
            {
              id: 6402,
              lessonId: 605,
              type: "SELECT",
              order: 2,
              question: "Prove: If p is a prime and p divides a², then p divides a.",
            },
            {
              id: 6403,
              lessonId: 605,
              type: "SELECT",
              order: 3,
              question: "The product of HCF and LCM of two numbers is 144. If one number is 12, what is the other?",
            },
            {
              id: 6404,
              lessonId: 605,
              type: "SELECT",
              order: 4,
              question: "Which number cannot be expressed as a product of prime numbers?",
            },
            {
              id: 6405,
              lessonId: 605,
              type: "SELECT",
              order: 5,
              question: "Which proof starts with assuming √5 = a/b and leads to contradiction?",
            },
            {
              id: 6406,
              lessonId: 605,
              type: "SELECT",
              order: 6,
              question: "Which of these decimal expansions is non-terminating and repeating?",
            },
            {
              id: 6407,
              lessonId: 605,
              type: "SELECT",
              order: 7,
              question: "What does the Fundamental Theorem of Arithmetic state?",
            },
            {
              id: 6408,
              lessonId: 605,
              type: "SELECT",
              order: 8,
              question: "Which denominator results in a terminating decimal: 14, 25, or 33?",
            },
            {
              id: 6409,
              lessonId: 605,
              type: "SELECT",
              order: 9,
              question: "Which of these is irrational: √7, 2.333..., or 7/5?",
            },
            {
              id: 6410,
              lessonId: 605,
              type: "SELECT",
              order: 10,
              question: "Which of these uses Euclid’s division lemma: a = bq + r?",
            },
          ]);
          
          await db.insert(schema.challengeOptions).values([
            // 6401
            { challengeId: 6401, text: "10", correct: false },
            { challengeId: 6401, text: "5", correct: false },
            { challengeId: 6401, text: "130 = 210 × 0 + 130 → 210 = 130 × 1 + 80 → 130 = 80 × 1 + 50 → 80 = 50 × 1 + 30 → 50 = 30 × 1 + 20 → 30 = 20 × 1 + 10 → 20 = 10 × 2 + 0 → HCF = 10", correct: true },
          
            // 6402
            { challengeId: 6402, text: "This is a property used to prove irrationality of √p", correct: true },
            { challengeId: 6402, text: "It proves even numbers", correct: false },
            { challengeId: 6402, text: "It proves HCF = LCM", correct: false },
          
            // 6403
            { challengeId: 6403, text: "12", correct: false },
            { challengeId: 6403, text: "24", correct: true },
            { challengeId: 6403, text: "36", correct: false },
          
            // 6404
            { challengeId: 6404, text: "17", correct: false },
            { challengeId: 6404, text: "91", correct: false },
            { challengeId: 6404, text: "1", correct: true },
          
            // 6405
            { challengeId: 6405, text: "Proof of irrationality of √5", correct: true },
            { challengeId: 6405, text: "Decimal expansion of 0.5", correct: false },
            { challengeId: 6405, text: "HCF of 25 and 45", correct: false },
          
            // 6406
            { challengeId: 6406, text: "1/6 = 0.1666...", correct: true },
            { challengeId: 6406, text: "1/4 = 0.25", correct: false },
            { challengeId: 6406, text: "2/5 = 0.4", correct: false },
          
            // 6407
            { challengeId: 6407, text: "Every composite number has a unique prime factorisation", correct: true },
            { challengeId: 6407, text: "Every number has an HCF", correct: false },
            { challengeId: 6407, text: "Every number is irrational", correct: false },
          
            // 6408
            { challengeId: 6408, text: "25", correct: true },
            { challengeId: 6408, text: "14", correct: false },
            { challengeId: 6408, text: "33", correct: false },
          
            // 6409
            { challengeId: 6409, text: "2.333...", correct: false },
            { challengeId: 6409, text: "√7", correct: true },
            { challengeId: 6409, text: "7/5", correct: false },
          
            // 6410
            { challengeId: 6410, text: "Euclid’s Division Lemma", correct: true },
            { challengeId: 6410, text: "Irrationality Proof", correct: false },
            { challengeId: 6410, text: "Decimal Expansion Formula", correct: false },
          ]);
          await db.insert(schema.units).values([
            {
              id: 61,
              courseId: 6,
              title: "Polynomials",
              description: "Understand polynomials, their zeroes, relationships, and division algorithms",
              order: 2,
            },
          ]);
          await db.insert(schema.lessons).values([
            {
              id: 701,
              unitId: 61,
              order: 1,
              title: "Introduction to Polynomials",
            },
          ]);
          
          await db.insert(schema.challenges).values([
            { id: 7001, lessonId: 701, type: "SELECT", order: 1, question: "Which of the following is a polynomial?" },
            { id: 7002, lessonId: 701, type: "SELECT", order: 2, question: "What is the degree of the polynomial 5x³ + 3x² - 2x + 7?" },
            { id: 7003, lessonId: 701, type: "SELECT", order: 3, question: "Which of these is a constant polynomial?" },
            { id: 7004, lessonId: 701, type: "SELECT", order: 4, question: "What is the coefficient of x² in 7x² - 4x + 1?" },
            { id: 7005, lessonId: 701, type: "SELECT", order: 5, question: "Which of the following is a linear polynomial?" },
            { id: 7006, lessonId: 701, type: "SELECT", order: 6, question: "What is the value of the polynomial 2x + 3 at x = 4?" },
            { id: 7007, lessonId: 701, type: "SELECT", order: 7, question: "What is the number of terms in the polynomial x² + 3x + 4?" },
            { id: 7008, lessonId: 701, type: "SELECT", order: 8, question: "Which of these is not a term in the polynomial 4x³ + 2x² + x?" },
            { id: 7009, lessonId: 701, type: "SELECT", order: 9, question: "What is the degree of a constant polynomial?" },
            { id: 7010, lessonId: 701, type: "SELECT", order: 10, question: "Which one is a binomial?" },
          ]);
          
          await db.insert(schema.challengeOptions).values([
            // 7001
            { challengeId: 7001, text: "x² + 3x + 2", correct: true },
            { challengeId: 7001, text: "1/x", correct: false },
            { challengeId: 7001, text: "√x", correct: false },
          
            // 7002
            { challengeId: 7002, text: "3", correct: true },
            { challengeId: 7002, text: "2", correct: false },
            { challengeId: 7002, text: "1", correct: false },
          
            // 7003
            { challengeId: 7003, text: "7", correct: true },
            { challengeId: 7003, text: "x + 3", correct: false },
            { challengeId: 7003, text: "x² + 4", correct: false },
          
            // 7004
            { challengeId: 7004, text: "7", correct: true },
            { challengeId: 7004, text: "-4", correct: false },
            { challengeId: 7004, text: "1", correct: false },
          
            // 7005
            { challengeId: 7005, text: "2x + 3", correct: true },
            { challengeId: 7005, text: "x² + 1", correct: false },
            { challengeId: 7005, text: "x³ - 1", correct: false },
          
            // 7006
            { challengeId: 7006, text: "11", correct: false },
            { challengeId: 7006, text: "8", correct: false },
            { challengeId: 7006, text: "11 (since 2×4 + 3 = 11)", correct: true },
          
            // 7007
            { challengeId: 7007, text: "3", correct: true },
            { challengeId: 7007, text: "2", correct: false },
            { challengeId: 7007, text: "4", correct: false },
          
            // 7008
            { challengeId: 7008, text: "x²", correct: false },
            { challengeId: 7008, text: "x", correct: false },
            { challengeId: 7008, text: "2x", correct: true },
          
            // 7009
            { challengeId: 7009, text: "0", correct: true },
            { challengeId: 7009, text: "1", correct: false },
            { challengeId: 7009, text: "Not defined", correct: false },
          
            // 7010
            { challengeId: 7010, text: "x + 1", correct: true },
            { challengeId: 7010, text: "x² + x + 1", correct: false },
            { challengeId: 7010, text: "x³", correct: false },
          ]);
          await db.insert(schema.lessons).values([
            {
              id: 702,
              unitId: 61,
              order: 2,
              title: "Zeroes of a Polynomial",
            },
          ]);
          
          await db.insert(schema.challenges).values([
            { id: 7011, lessonId: 702, type: "SELECT", order: 1, question: "What is a zero of a polynomial?" },
            { id: 7012, lessonId: 702, type: "SELECT", order: 2, question: "If p(x) = x² - 5x + 6, what are its zeroes?" },
            { id: 7013, lessonId: 702, type: "SELECT", order: 3, question: "What is the value of the polynomial x² - 4x + 3 at x = 1?" },
            { id: 7014, lessonId: 702, type: "SELECT", order: 4, question: "Which value of x makes the polynomial x² - 1 zero?" },
            { id: 7015, lessonId: 702, type: "SELECT", order: 5, question: "How many zeroes can a cubic polynomial have at most?" },
            { id: 7016, lessonId: 702, type: "SELECT", order: 6, question: "What is the value of p(x) = 2x + 3 when x = -3/2?" },
            { id: 7017, lessonId: 702, type: "SELECT", order: 7, question: "Which of the following is not a zero of p(x) = x² + 2x + 1?" },
            { id: 7018, lessonId: 702, type: "SELECT", order: 8, question: "A zero of the polynomial x² - 7x + 10 is:" },
            { id: 7019, lessonId: 702, type: "SELECT", order: 9, question: "Which equation represents a quadratic polynomial with zeroes 2 and 3?" },
            { id: 7020, lessonId: 702, type: "SELECT", order: 10, question: "If x - 5 is a factor of a polynomial, what is a zero of the polynomial?" },
          ]);
          
          await db.insert(schema.challengeOptions).values([
            // 7011
            { challengeId: 7011, text: "A value of x where the polynomial equals zero", correct: true },
            { challengeId: 7011, text: "The highest power of x", correct: false },
            { challengeId: 7011, text: "The constant term", correct: false },
          
            // 7012
            { challengeId: 7012, text: "2 and 3", correct: true },
            { challengeId: 7012, text: "-2 and -3", correct: false },
            { challengeId: 7012, text: "1 and 6", correct: false },
          
            // 7013
            { challengeId: 7013, text: "0", correct: false },
            { challengeId: 7013, text: "0 (because 1² - 4×1 + 3 = 0)", correct: true },
            { challengeId: 7013, text: "2", correct: false },
          
            // 7014
            { challengeId: 7014, text: "x = 1", correct: false },
            { challengeId: 7014, text: "x = -1", correct: false },
            { challengeId: 7014, text: "x = ±1", correct: true },
          
            // 7015
            { challengeId: 7015, text: "3", correct: true },
            { challengeId: 7015, text: "2", correct: false },
            { challengeId: 7015, text: "4", correct: false },
          
            // 7016
            { challengeId: 7016, text: "0", correct: true },
            { challengeId: 7016, text: "1", correct: false },
            { challengeId: 7016, text: "-3", correct: false },
          
            // 7017
            { challengeId: 7017, text: "-1", correct: false },
            { challengeId: 7017, text: "0", correct: true },
            { challengeId: 7017, text: "-1 and -1", correct: false },
          
            // 7018
            { challengeId: 7018, text: "x = 5", correct: true },
            { challengeId: 7018, text: "x = 1", correct: false },
            { challengeId: 7018, text: "x = -10", correct: false },
          
            // 7019
            { challengeId: 7019, text: "x² - 5x + 6", correct: true },
            { challengeId: 7019, text: "x² + 5x + 6", correct: false },
            { challengeId: 7019, text: "x² - 2x - 3", correct: false },
          
            // 7020
            { challengeId: 7020, text: "x = 5", correct: true },
            { challengeId: 7020, text: "x = -5", correct: false },
            { challengeId: 7020, text: "x = 0", correct: false },
          ]);
          await db.insert(schema.lessons).values([
            {
              id: 703,
              unitId: 61,
              order: 3,
              title: "Relationship between Zeroes and Coefficients",
            },
          ]);
          
          await db.insert(schema.challenges).values([
            { id: 7021, lessonId: 703, type: "SELECT", order: 1, question: "What is the sum of zeroes of p(x) = x² - 5x + 6?" },
            { id: 7022, lessonId: 703, type: "SELECT", order: 2, question: "What is the product of zeroes of p(x) = x² - 3x - 10?" },
            { id: 7023, lessonId: 703, type: "SELECT", order: 3, question: "For p(x) = ax² + bx + c, what is sum of the zeroes?" },
            { id: 7024, lessonId: 703, type: "SELECT", order: 4, question: "For p(x) = ax² + bx + c, what is product of the zeroes?" },
            { id: 7025, lessonId: 703, type: "SELECT", order: 5, question: "Which pair of zeroes matches p(x) = x² - 7x + 12?" },
            { id: 7026, lessonId: 703, type: "SELECT", order: 6, question: "If sum of zeroes = 4 and product = 3, what is the polynomial?" },
            { id: 7027, lessonId: 703, type: "SELECT", order: 7, question: "Which of these is true for p(x) = x² + 2x + 1?" },
            { id: 7028, lessonId: 703, type: "SELECT", order: 8, question: "If p(x) = x² - (α+β)x + αβ, what are α and β?" },
            { id: 7029, lessonId: 703, type: "SELECT", order: 9, question: "If one zero is 3 and sum is 5, what is the other zero?" },
            { id: 7030, lessonId: 703, type: "SELECT", order: 10, question: "What is the relation between coefficients and zeroes of x² - 9x + 20?" },
          ]);
          
          await db.insert(schema.challengeOptions).values([
            // 7021
            { challengeId: 7021, text: "5", correct: true },
            { challengeId: 7021, text: "6", correct: false },
            { challengeId: 7021, text: "11", correct: false },
          
            // 7022
            { challengeId: 7022, text: "3", correct: false },
            { challengeId: 7022, text: "-10", correct: true },
            { challengeId: 7022, text: "30", correct: false },
          
            // 7023
            { challengeId: 7023, text: "b/a", correct: false },
            { challengeId: 7023, text: "c/a", correct: false },
            { challengeId: 7023, text: "-b/a", correct: true },
          
            // 7024
            { challengeId: 7024, text: "-b/a", correct: false },
            { challengeId: 7024, text: "c/a", correct: true },
            { challengeId: 7024, text: "-c/a", correct: false },
          
            // 7025
            { challengeId: 7025, text: "2 and 6", correct: false },
            { challengeId: 7025, text: "1 and 12", correct: false },
            { challengeId: 7025, text: "3 and 4", correct: true },
          
            // 7026
            { challengeId: 7026, text: "x² + 4x - 3", correct: false },
            { challengeId: 7026, text: "x² - 3x + 4", correct: false },
            { challengeId: 7026, text: "x² - 4x + 3", correct: true },
          
            // 7027
            { challengeId: 7027, text: "Zeroes are -1 and -1", correct: true },
            { challengeId: 7027, text: "Zeroes are 1 and 1", correct: false },
            { challengeId: 7027, text: "Zeroes are 2 and -2", correct: false },
          
            // 7028
            { challengeId: 7028, text: "Coefficients of x", correct: false },
            { challengeId: 7028, text: "Zeroes of the polynomial", correct: true },
            { challengeId: 7028, text: "Intercepts", correct: false },
          
            // 7029
            { challengeId: 7029, text: "-3", correct: false },
            { challengeId: 7029, text: "2", correct: true },
            { challengeId: 7029, text: "8", correct: false },
          
            // 7030
            { challengeId: 7030, text: "Sum = 20, Product = 9", correct: false },
            { challengeId: 7030, text: "Sum = -9, Product = -20", correct: false },
            { challengeId: 7030, text: "Sum = 9, Product = 20", correct: true },
          ]);
          
          await db.insert(schema.lessons).values([
            {
              id: 704,
              unitId: 61,
              order: 4,
              title: "Division Algorithm for Polynomials",
            },
          ]);
          
          await db.insert(schema.challenges).values([
            { id: 7031, lessonId: 704, type: "SELECT", order: 1, question: "Which expression represents the Division Algorithm for polynomials?" },
            { id: 7032, lessonId: 704, type: "SELECT", order: 2, question: "What is the degree of the remainder if p(x) is divided by d(x)?" },
            { id: 7033, lessonId: 704, type: "SELECT", order: 3, question: "If p(x) = x³ - 3x² + 5 and d(x) = x - 1, what is the degree of q(x)?" },
            { id: 7034, lessonId: 704, type: "SELECT", order: 4, question: "What is the quotient when x² + 5x + 6 is divided by x + 2?" },
            { id: 7035, lessonId: 704, type: "SELECT", order: 5, question: "What is the remainder when x² + 4x + 3 is divided by x + 1?" },
            { id: 7036, lessonId: 704, type: "SELECT", order: 6, question: "What does the remainder become if d(x) is a factor of p(x)?" },
            { id: 7037, lessonId: 704, type: "SELECT", order: 7, question: "What type of expression is r(x) in division algorithm?" },
            { id: 7038, lessonId: 704, type: "SELECT", order: 8, question: "If p(x) is divided by a linear polynomial, the degree of remainder is:" },
            { id: 7039, lessonId: 704, type: "SELECT", order: 9, question: "What is the quotient if p(x) = x² - 1 and d(x) = x - 1?" },
            { id: 7040, lessonId: 704, type: "SELECT", order: 10, question: "Which of these verifies the division: p(x) = (x + 2)(x - 3) + r(x)?" },
          ]);
          
          await db.insert(schema.challengeOptions).values([
            // 7031
            { challengeId: 7031, text: "p(x) = d(x) + q(x) + r(x)", correct: false },
            { challengeId: 7031, text: "p(x) = d(x)q(x) + r(x)", correct: true },
            { challengeId: 7031, text: "p(x) = q(x)/d(x) + r(x)", correct: false },
          
            // 7032
            { challengeId: 7032, text: "Equal to degree of d(x)", correct: false },
            { challengeId: 7032, text: "Less than degree of d(x)", correct: true },
            { challengeId: 7032, text: "Greater than degree of d(x)", correct: false },
          
            // 7033
            { challengeId: 7033, text: "2", correct: true },
            { challengeId: 7033, text: "1", correct: false },
            { challengeId: 7033, text: "3", correct: false },
          
            // 7034
            { challengeId: 7034, text: "x + 3", correct: true },
            { challengeId: 7034, text: "x + 2", correct: false },
            { challengeId: 7034, text: "x - 3", correct: false },
          
            // 7035
            { challengeId: 7035, text: "1", correct: false },
            { challengeId: 7035, text: "0", correct: true },
            { challengeId: 7035, text: "2", correct: false },
          
            // 7036
            { challengeId: 7036, text: "d(x)", correct: false },
            { challengeId: 7036, text: "1", correct: false },
            { challengeId: 7036, text: "0", correct: true },
          
            // 7037
            { challengeId: 7037, text: "Same degree as d(x)", correct: false },
            { challengeId: 7037, text: "A polynomial of lower degree than d(x)", correct: true },
            { challengeId: 7037, text: "A constant", correct: false },
          
            // 7038
            { challengeId: 7038, text: "1", correct: false },
            { challengeId: 7038, text: "0", correct: true },
            { challengeId: 7038, text: "2", correct: false },
          
            // 7039
            { challengeId: 7039, text: "x + 1", correct: true },
            { challengeId: 7039, text: "x - 1", correct: false },
            { challengeId: 7039, text: "x² - 2x + 1", correct: false },
          
            // 7040
            { challengeId: 7040, text: "Only if r(x) = 0", correct: false },
            { challengeId: 7040, text: "Yes, it fits the form p(x) = d(x)q(x) + r(x)", correct: true },
            { challengeId: 7040, text: "No, it's wrong format", correct: false },
          ]);
          await db.insert(schema.lessons).values([
            {
              id: 705,
              unitId: 61,
              order: 5,
              title: "Polynomials – Miscellaneous Review",
            },
          ]);
          
          await db.insert(schema.challenges).values([
            { id: 7041, lessonId: 705, type: "SELECT", order: 1, question: "Which of the following is not a polynomial?" },
            { id: 7042, lessonId: 705, type: "SELECT", order: 2, question: "How many zeroes can a cubic polynomial have at most?" },
            { id: 7043, lessonId: 705, type: "SELECT", order: 3, question: "What is the sum of zeroes of p(x) = x² - 4x + 3?" },
            { id: 7044, lessonId: 705, type: "SELECT", order: 4, question: "Which polynomial has zeroes -2 and 5?" },
            { id: 7045, lessonId: 705, type: "SELECT", order: 5, question: "What is the remainder when x² - 3x + 2 is divided by x - 1?" },
            { id: 7046, lessonId: 705, type: "SELECT", order: 6, question: "What is the degree of remainder when a polynomial is divided by a quadratic?" },
            { id: 7047, lessonId: 705, type: "SELECT", order: 7, question: "If one zero is 4 and the product is 12, what is the other zero?" },
            { id: 7048, lessonId: 705, type: "SELECT", order: 8, question: "Which of these polynomials has only one zero?" },
            { id: 7049, lessonId: 705, type: "SELECT", order: 9, question: "Which of the following correctly represents the division algorithm?" },
            { id: 7050, lessonId: 705, type: "SELECT", order: 10, question: "Find the quotient when x² - 2x - 8 is divided by x - 4." },
          ]);
          
          await db.insert(schema.challengeOptions).values([
            // 7041
            { challengeId: 7041, text: "x² + 1", correct: false },
            { challengeId: 7041, text: "√x + 2", correct: true },
            { challengeId: 7041, text: "x³ - x", correct: false },
          
            // 7042
            { challengeId: 7042, text: "3", correct: true },
            { challengeId: 7042, text: "2", correct: false },
            { challengeId: 7042, text: "4", correct: false },
          
            // 7043
            { challengeId: 7043, text: "4", correct: true },
            { challengeId: 7043, text: "3", correct: false },
            { challengeId: 7043, text: "1", correct: false },
          
            // 7044
            { challengeId: 7044, text: "x² - 3x - 10", correct: false },
            { challengeId: 7044, text: "x² - 3x - 5", correct: false },
            { challengeId: 7044, text: "x² - 3x - 10 (since (-2)+(5)=3 and (-2)*(5)=-10)", correct: true },
          
            // 7045
            { challengeId: 7045, text: "0", correct: true },
            { challengeId: 7045, text: "1", correct: false },
            { challengeId: 7045, text: "2", correct: false },
          
            // 7046
            { challengeId: 7046, text: "Less than 2", correct: true },
            { challengeId: 7046, text: "2", correct: false },
            { challengeId: 7046, text: "Greater than 2", correct: false },
          
            // 7047
            { challengeId: 7047, text: "3", correct: true },
            { challengeId: 7047, text: "8", correct: false },
            { challengeId: 7047, text: "1", correct: false },
          
            // 7048
            { challengeId: 7048, text: "x² + 1", correct: false },
            { challengeId: 7048, text: "x² - 2x + 1", correct: true },
            { challengeId: 7048, text: "x² - 3x + 2", correct: false },
          
            // 7049
            { challengeId: 7049, text: "p(x) = d(x)q(x) + r(x)", correct: true },
            { challengeId: 7049, text: "p(x) = q(x)d(x) + r(x)", correct: false },
            { challengeId: 7049, text: "p(x) = r(x)d(x) + q(x)", correct: false },
          
            // 7050
            { challengeId: 7050, text: "x + 2", correct: true },
            { challengeId: 7050, text: "x - 4", correct: false },
            { challengeId: 7050, text: "x - 2", correct: false },
          ]);
          
        console.log("Seeding Finished");
    }catch (error){
        console.error(error);
        throw new Error("Failed to seed database");
    }
};

main();