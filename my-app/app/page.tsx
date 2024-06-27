"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { FloatingNav } from "../components/ui/floating-navbar"
import { TracingBeam } from "../components/ui/tracing-beams";
import { twMerge } from "tailwind-merge";
import { HoverBorderGradient } from "../components/ui/HoverBorderGradient";
import { PinContainer } from "@/components/ui/3d-pin";
import dynamic  from "next/dynamic";
import { FlipWords } from "@/components/ui/flip-words";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { motion } from "framer-motion";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { div } from "three/examples/jsm/nodes/Nodes.js";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import { SparklesCore } from "@/components/ui/sparkles";
import Xarrow from "react-xarrows";
import { TERipple } from "tw-elements-react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";



export default function Home() {
  return (
    
    <>
    <TracingBeam className="px-6">
    <section id="inicio">
  <SparklesPreview />
  {/* add two buttons */}
  <div className="flex justify-center gap-4 mt-[-7rem]">
    <a href="#processo" className="p-[2px] relative rounded-full">
      <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full" />
      <div className="px-5 py-2 bg-black relative group transition duration-200 text-white hover:bg-transparent rounded-full">
        O Nosso Processo
      </div>
    </a>

    <a href="#produtos" className="p-[2px] relative rounded-full">
      <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full" />
      <div className="px-5 py-2 bg-black relative group transition duration-200 text-white hover:bg-transparent rounded-full">
        Nossas Aplicações
      </div>
    </a>
  </div>
  </section>

      <FloatingNav
        navItems={[
          {
            image: "/logo.webp",
            link: "#inicio",
          },
          {
            name: "Processo",
            link: "#processo",
          },
          {
            name: "Aplicações",
            link: "#produtos",
          },
          {
            name: "Sobre Nós",
            link: "#sobre",
          },
        ]}
        className={twMerge("dark")}
      />

      

    <div className="flex items-center justify-center h-[15rem] relative">
      <div className="absolute inset-0 bg-transparent z-10">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_50%_60%_at_50%_0%,#000_95%,transparent_100%)]">
        </div>
      </div>
      <h1 className="text-5xl font-bold text-center text-slate-100 z-10 mt-4 custom-line-height">
        Como Melhoramos o <br /> Seu Negócio
      </h1>
    </div>

  <section id= "processo" className="bg-black text-white mb-0 ">
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">

      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
        <a
           id="block1" className="content-block block rounded-xl border border-white p-8 shadow-xl transition hover:border-red-500 hover:shadow-red-500"
          href="#"
        >
          <h1 className="text-4xl font-bold text-white">
            01.
          </h1>


          <h2 className="mt-4 text-xl font-bold text-white">Identificar Ineficiências</h2>

          <p className="mt-1 text-sm text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci
            distinctio alias voluptatum blanditiis laudantium.
          </p>
        </a>
        <a
          className="empty"
        ></a>
        
        <a
          className="empty"
        ></a>
  <a
          id= "block2" className="content-block block rounded-xl border border-white p-8 shadow-xl transition hover:border-yellow-600 hover:shadow-yellow-600"        href="#"
        >
          <h1 className="text-4xl font-bold text-white">
            02.
          </h1>

          <h2 className="mt-4 text-xl font-bold text-white">Propor soluções</h2>

          <p className="mt-1 text-sm text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci
            distinctio alias voluptatum blanditiis laudantium.
          </p>
        </a>
        <a
          id ="block3" className="content-block block rounded-xl border border-white p-8 shadow-xl transition hover:border-yellow-600 hover:shadow-yellow-600"    
          href="#"
        >
          <h1 className="text-4xl font-bold text-white">
            03.
          </h1>

          <h2 className="mt-4 text-xl font-bold text-white">Digital campaigns</h2>

          <p className="mt-1 text-sm text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci
            distinctio alias voluptatum blanditiis laudantium.
          </p>
        </a>
        <a
          className="empty"
        ></a>
        <a
          className="empty"
        ></a>
  <a
          id = "block4" className="block rounded-xl border border-white p-8 shadow-xl transition hover:border-yellow-600 hover:shadow-yellow-600" 
          href="#"
        > 
        <h1 className="text-4xl font-bold text-white">
        04.
          </h1>
          

          <h2 className="mt-4 text-xl font-bold text-white">Propor soluções</h2>

          <p className="mt-1 text-sm text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci
            distinctio alias voluptatum blanditiis laudantium.
          </p>
        </a>
        
      </div>
    {/* Xarrow components with curveness */}
    <Xarrow start="block1" end="block2" startAnchor="right" endAnchor="top" color="white" />
    <Xarrow start="block2" end="block3" startAnchor="left" endAnchor="top" color="white"/>
    <Xarrow start="block3" end="block4" startAnchor="right" endAnchor="top" color="white" />
    </div>
    
  </section>

  <section id="produtos" className="dark flex flex-col items-center mt-[-8rem]">
    <HeroScrollDemo />
    <p className="mt-[-13rem] text-xl text-gray-300 text-center"> 
      Todas as aplicações desenvolvidas estão na <br />nossa plataforma BlazeVerse. Explore!
    </p>
    <HoverBorderGradientDemo1 />
  </section>

  <section id= "sobre" className = "dark">
    <div className="mt-20 flex flex-col items-center justify-center ">
    <div className="absolute z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#000000_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]">
    </div>
      <h1 className="text-5xl font-bold text-center text-slate-100">
        Sobre Nós
      </h1>
      <div className = "flex items-center justify-center gap-20">
        <ThreeDCardDemo />
        <ThreeDCard />
      </div>
    </div>
    {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
  </section>


  
  <section id="contactos" className = "mb-4">
    <h1 className="text-5xl font-bold text-center text-slate-100 z-10 mt-4 custom-line-height">
      Adorariamos Falar <br /> Consigo
    </h1>
    <h2 className="text-2xl text-center text-slate-100 z-10 mt-4 custom-line-height">
      Menos de 20 minutos
    </h2>
    <div className = "mb-28">
    <CalendlyWidget />
    </div>
</section>     
</TracingBeam>
<FooterAdvancedExample />
  </>
  );
}


const CalendlyWidget = () => {
  useEffect(() => {
   
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="calendly-inline-widget"
      data-url="https://calendly.com/blazetaskpt/20min?hide_event_type_details=1&hide_gdpr_banner=1"
      style={{ minWidth: '320px', height: '700px' }}
    ></div>
  );
};



const content = [
  {
    title: "Collaborative Editing",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Identificar Ineficiencias
      </div>
    ),
  },
  {
    title: "Real time changes",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/linear.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Version control",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Desenvolver Solucoes
      </div>
    ),
  },
  {
    title: "Running out of content",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Implemtentação e Suporte
      </div>
    ),
  },
];


function ThreeDCardDemo() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-white relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white border-white border-2 w-auto sm:w-[25rem] h-auto rounded-xl p-8">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          Diogo Cordeiro
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          Diretor Executivo
        </CardItem>
        <CardItem translateZ="80" className="w-full mt-4">
          <Image
            src="/FotoDiogobg1.jpg"
            height={800}
            width={400}
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="Diogo Cordeiro"
          />
        </CardItem>
        <div className="flex items-center mt-10">
          <CardItem
            translateZ={20}
            as ="a"
            href="https://www.linkedin.com/in/diogocordeiro-feup/"
            target="__blank"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Linkedin
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}

function ThreeDCard() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-white relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white border-white border-2 w-auto sm:w-[25rem] h-auto rounded-xl p-8">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          João Costa
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          Diretor Tecnológico
        </CardItem>
        <CardItem translateZ="80" className="w-full mt-4">
          <Image
            src="/FotoJoaobg1.jpg"
            height="300" 
            width="400"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="João Costa"
          />
        </CardItem>
        <div className="flex items-center mt-10">
          <CardItem
            translateZ={20}
            as ="a"
            href="https://www.linkedin.com/in/joaobcosta2001/"
            target="__blank"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Linkedin
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}

function SparklesPreview() {
  return (
    <div className="h-[45rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <h2 className="text-2xl font text-white">
        O Futuro Do Seu Negócio 
      </h2>

      <h1 className="md:text-8xl text-12xl lg:text-9xl font-bold text-center text-white relative z-20">
        BLAZETASK
      </h1>
      <div className="w-[40rem] h-40 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-red-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-red-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-yellow-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-yellow-500 to-transparent h-px w-1/4" />
 
        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
 
        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
  );
}





function BackgroundGradientDemo() {
  return (
    <div>
      <BackgroundGradient className="rounded-[22px] max-w-sm p-3 sm:p-10 bg-black dark:bg-zinc-900">
        <p className="text-base sm:text-xl text-white mt-4 mb-2 dark:text-neutral-200">
          1. Auditoria
        </p>
 
        <p className="text-sm text-neutral-200 dark:text-neutral-400">
          Our AI experts analyze your business to identify concrete AI use cases that drive increased growth & profitability.
        </p>
      </BackgroundGradient>
    </div>
  );
}

function BackgroundGradientDemo1() {
  return (
    <div>
      <BackgroundGradient className="rounded-[22px] max-w-sm p-3 sm:p-8 bg-black dark:bg-zinc-900">
        <p className="text-base sm:text-xl text-white mt-4 mb-2 dark:text-neutral-200">
          2. Desenvolvimento e Implementação
        </p>
 
        <p className="text-sm text-neutral-200 dark:text-neutral-400">
         We build and implement custom AI solutions on best-in-class vendors, depending on the use cases identified
        </p>
      </BackgroundGradient>
    </div>
  );
}

function BackgroundGradientDemo2() {
  return (
    <div>
      <BackgroundGradient className="rounded-[22px] max-w-sm p-3 sm:p-8 bg-black dark:bg-zinc-900">
        <p className="text-base sm:text-xl text-white mt-4 mb-2 dark:text-neutral-200">
          3. Resultados & Benefícios
        </p>
 
        <p className="text-sm text-neutral-200 dark:text-neutral-400">
          As your long-term AI partner, we are dedicated to continuously refine existing solutions to meet your ever-evolving needs.
        </p>
      </BackgroundGradient>
    </div>
  );
}


function HoverBorderGradientDemo() {
  return (
    <div className="m-40 flex justify-center text-center">
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="bg-black text-white flex items-center space-x-2"
      >
        <span>BlazeVerse</span>
      </HoverBorderGradient>
    </div>
  );
}

function HoverBorderGradientDemo1() {
  return (
    <div className="m-4 flex justify-center text-center">
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="bg-white text-black flex items-center space-x-2 "
      >
        <strong>BlazeVerse</strong>
      </HoverBorderGradient>
    </div>
  );
}


function AnimatedPinDemo() {
  return (
    <div className="h-[40rem] w-full flex items-center justify-center ">
      <PinContainer
        title="LinkedIn do Diogo"
        href="https://www.linkedin.com/in/diogocordeiro-feup/"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            Diogo Cordeiro
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">

            <span className="text-slate-500 ">
               Diretor Executivo
            </span>
          </div>
          <Image src="/FotoDiogo.jpg" alt="Diogo" className="flex flex-1 w-full h-full object-cover rounded-lg mt-4" />
          </div>
      </PinContainer>
    </div>
  );
}


 
 
function GridBackgroundDemo() {
  return (
    <div className="dark">
      <div className="h-[50rem] w-full bg-dot-thick dark:bg-black bg-white grid-pattern relative flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
          Backgrounds
        </p>
      </div>
    </div>
  );
}


function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Todos os Produtos na <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                BlazeVerse
              </span>
            </h1>
          </>
        }
      >
        <Image
          src={`/blazeverse1.webp`}
          alt="BlazeVerse image"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}



function FooterAdvancedExample() {
    return (
        <footer className="bg-black text-center text-white border-t border-white">
            <div className="container px-6 pt-6 mx-auto">
                {/* <!-- Social media icons container --> */}
                <div className="mb-6 gap-20 flex justify-center w-full">
                    <TERipple rippleColor="light">
                        <a

                            type="button"
                            className="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:bg-transparent flex items-center justify-center"
                            href = "https://www.facebook.com/blazetask"
                            target = "_blank"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="mx-auto h-full w-4"
                                fill="currentColor"
                                viewBox="0 0 24 24">
                                <path
                                    d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                            </svg>
                        </a>
                    </TERipple>

                  

                    <TERipple rippleColor="light">
                        <a

                            type="button"
                            className="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:bg-transparent flex items-center justify-center"

                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="mx-auto h-full w-4"
                                fill="currentColor"
                                viewBox="0 0 24 24">
                                <path
                                    d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z"
                                    fillRule="evenodd"
                                    clipRule="evenodd" />
                            </svg>
                        </a>
                    </TERipple>


                    <TERipple rippleColor="light">
                        <a

                            type="button"
                            className="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:bg-transparent flex items-center justify-center"
                            href = "https://www.instagram.com/blazetask/"
                            target = "_blank"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="mx-auto h-full w-4"
                                fill="currentColor"
                                viewBox="0 0 24 24">
                                <path
                                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                        </a>
                    </TERipple>

                  
                </div>

                {/* <!-- Copyright information --> */}
                <div className="mb-6">
                    <p>
                        geral@blazetask.com

                    </p>
                </div>
            </div>  
            {/* <!-- Copyright section --> */}
            <div
                className="p-4 text-center bg-gradient-to-r from-red-500 to-yellow-500">
                BlazeTask:
                <a className="text-white" href="https://tw-elements.com/"
                > Transforme O Seu Negócio</a>
            </div>
        </footer>
    );
}