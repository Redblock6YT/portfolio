import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import anime from 'animejs'

export default function Home() {
  const router = useRouter();
  var loading = false;
  const THRESHOLD = 15;

  function clickEvent(i) {
    console.log("click event")
    const backgroundVideos = document.getElementById("backgroundVideos");
    anime({
      targets: backgroundVideos.children,
      opacity: 0,
      duration: 10000,
      delay: anime.stagger(50),
    })
    const video = document.createElement("video");
    if (i <= 4) {
      video.src = "rygbtrans.mp4"
      video.muted = true;
      video.style.opacity = "0"
      video.className = styles.fsvideo;
      console.log("click")
      document.getElementById("main").appendChild(video);
    }
    setTimeout(() => {
      if (i <= 4) {
        anime({
          targets: video,
          opacity: 1,
        })
        video.play();
        setTimeout(() => {
          if (i == 0) {
            router.push("https://accounts.rygb.tech");
          } else if (i == 1) {
            router.push("https://points.rygb.tech");
          } else if (i == 2) {
            router.push("https://live.rygb.tech");
          } else if (i == 3) {
            router.push("https://manager.rygb.tech/dash?demo=true");
          } else if (i == 4) {
            router.push("https://storyteller.pages.dev/")
          }

        }, 1000)
      }
    }, 1000)
  }

  function load() {
    if (loading) return;
    loading = true;
    console.log("load")
    const backgroundVideos = document.getElementById("backgroundVideos");
    for (let i = 0; i < 12; i++) {
      if (i > 4) {
        const video = document.createElement("video");
        video.src = "static.mp4"
        video.autoplay = true;
        video.loop = true;
        video.muted = true;
        video.play()
        video.style.opacity = "0";
        video.className = styles.video
        backgroundVideos.appendChild(video);
        const card = video;
        function handleHover(e) {
          const { clientX, clientY, currentTarget } = e;
          const { clientWidth, clientHeight, offsetLeft, offsetTop } = currentTarget;

          const horizontal = (clientX - offsetLeft) / clientWidth;
          const vertical = (clientY - offsetTop) / clientHeight;
          const rotateX = (THRESHOLD / 2 - horizontal * THRESHOLD).toFixed(2);
          const rotateY = (vertical * THRESHOLD - THRESHOLD / 2).toFixed(2);
          //`perspective(${clientWidth}px) scale(1.1) rotateX(${rotateY}deg) rotateY(${rotateX}deg) scale3d(1, 1, 1)`
          anime({
            targets: card,
            perspective: `${clientWidth}px`,
            rotateX: rotateY,
            rotateY: rotateX,
            scale: 1.1,
          })
        }

        function resetStyles(e) {
          anime({
            targets: card,
            perspective: `${e.currentTarget.clientWidth}px`,
            rotateX: 0,
            rotateY: 0,
            scale: 1,
          })
          //`perspective(${e.currentTarget.clientWidth}px) rotateX(0deg) scale(1) rotateY(0deg)`,
        }
        card.addEventListener("mousemove", handleHover);
        card.addEventListener("mouseleave", resetStyles);
      } else {
        const img = document.createElement("img");
        img.src = i + ".png"
        img.style.opacity = "0";
        img.className = styles.video
        img.style.cursor = "pointer"
        img.onclick = () => clickEvent(i);
        backgroundVideos.appendChild(img);
        const card = img;
        function handleHover(e) {
          const { clientX, clientY, currentTarget } = e;
          const { clientWidth, clientHeight, offsetLeft, offsetTop } = currentTarget;

          const horizontal = (clientX - offsetLeft) / clientWidth;
          const vertical = (clientY - offsetTop) / clientHeight;
          const rotateX = (THRESHOLD / 2 - horizontal * THRESHOLD).toFixed(2);
          const rotateY = (vertical * THRESHOLD - THRESHOLD / 2).toFixed(2);
          //`perspective(${clientWidth}px) scale(1.1) rotateX(${rotateY}deg) rotateY(${rotateX}deg) scale3d(1, 1, 1)`
          anime({
            targets: card,
            perspective: `${clientWidth}px`,
            rotateX: rotateY,
            rotateY: rotateX,
            scale: 1.1,
          })
        }

        function resetStyles(e) {
          anime({
            targets: card,
            perspective: `${e.currentTarget.clientWidth}px`,
            rotateX: 0,
            rotateY: 0,
            scale: 1,
          })

        }
        card.addEventListener("mousemove", handleHover);
        card.addEventListener("mouseleave", resetStyles);
      }
      setTimeout(() => {
        anime({
          targets: backgroundVideos.children,
          opacity: 1,
          duration: 10000,
          delay: anime.stagger(50),
        })
      }, 1000)
    }
  }

  useEffect(() => {
    load();
  }, [router.isReady]);

  return (
    <>
      <Head>
        <title>Marcus Mauricio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id="main">
        <h1 className={styles.texttop}>Most sites require an RYGB Account. Click the first channel to create one.</h1>
        <div id="backgroundVideos" className={styles.bggrid}>

        </div>
        <h1 className={styles.text}>Click a channel to view a website - Marcus Mauricio - 2023</h1>
      </div>
    </>
  )
}
