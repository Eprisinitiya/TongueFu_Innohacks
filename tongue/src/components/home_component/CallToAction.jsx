import React from 'react'
import Container from './Container'
import { Link } from 'react-router-dom'
import { FaWandMagicSparkles } from "react-icons/fa6";

function CallToAction() {
  return (
<div class="relative py-16 mt-4">
  <div aria-hidden="true" class="absolute inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20">
    <div class="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
    <div class="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
  </div>
  <Container>
    <div class="relative">
      <div class="flex items-center justify-center -space-x-2">
  <FaWandMagicSparkles size={90} />

      </div>
      <div class="mt-6 m-auto space-y-6 md:w-8/12 lg:w-7/12">
        <h1 class="text-center text-4xl font-bold text-gray-800 dark:text-white md:text-5xl">Stop Stuttering, Start Chattering!</h1>
        <br></br>
        <div class="flex flex-wrap justify-center gap-6">
          <Link
              href="/register"
              class="relative flex h-12 w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
            >
              <span class="relative text-base font-semibold text-white dark:text-dark"
                >Get Started</span
              >
            </Link>
            <Link
              href="/about"
              class="relative flex h-12 w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-primary/10 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 sm:w-max"
            >
              <span
                class="relative text-base font-semibold text-primary dark:text-white"
                >More about</span
              >
          </Link>
        </div>
      </div>
    </div>
  </Container>
</div>
  )
}

export default CallToAction