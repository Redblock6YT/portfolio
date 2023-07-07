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
  var confirm = 0;

  function expandedView(i) {
    confirm = 1;
    const expandedImg = document.getElementById("expandedImg");
    const expandedImgB = document.getElementById("expandedImgB");
    const expandedAbout = document.getElementById("expandedAbout");
    if (i == 0) {
      expandedImg.src = "0.png"
      expandedImgB.src = "0.png"
      expandedAbout.innerHTML = "Meet Accounts, the heart of everything RYGB. It allows you to use RYGB services, interact with other RYGB users and create your own Manager store."
      expandedStatus.innerHTML = "Done (for now)"
    } else if (i == 1) {
      expandedImg.src = "1.png"
      expandedImgB.src = "1.png"
      expandedAbout.innerHTML = "Could you imagine if you never had to give your phone number to sign up for a store's rewards again? Or not have to download tons of apps to get rewards. Access them all in one place without giving out personal info. Meet Points."
      expandedStatus.innerHTML = "In Development (~4 months)"
    } else if (i == 2) {
      expandedImg.src = "2.png"
      expandedImgB.src = "2.png"
      expandedAbout.innerHTML = "View all of your Kiosk Security Cameras, and other security cameras in one place. Meet Live."
      expandedStatus.innerHTML = "Needs Rebranding. In Development (~2 months)"
    } else if (i == 3) {
      expandedImg.src = "3.png"
      expandedImgB.src = "3.png"
      expandedAbout.innerHTML = "Manage your Employees, Products, Points Store, Kiosk and more, all in one place. See helpful Anylitics at a glance and customize your Dashboard to you. Meet Manager."
      expandedStatus.innerHTML = "In Development (~2 Years & going amazing)"
    } else if (i == 4) {
      expandedImg.src = "4.png"
      expandedImgB.src = "4.png"
    }
  }

  function clickEvent(i) {
    console.log("click event")
    const backgroundVideos = document.getElementById("backgroundVideos");
    anime({
      targets: backgroundVideos.children,
      opacity: 0,
      scale: 0,
      easing: "easeInOutQuad",
      duration: 500,
      delay: anime.stagger(30),
    })
    const video = document.createElement("video");
    if (i <= 4 && confirm == 1) {
      video.src = "rygbtrans.mp4"
      video.muted = true;
      video.style.opacity = "0"
      video.className = styles.fsvideo;
      console.log("click")
      document.getElementById("main").appendChild(video);
    }
    setTimeout(() => {
      if (i <= 4) {
        if (i != 4 && i != 1 && i != 2 && confirm == 1) {
          anime({
            targets: video,
            opacity: 1,
            easing: "easeInOutQuad",
            duration: 300,
          })
        }

        video.play();
        setTimeout(() => {
          if (i == 0) {
            if (confirm == 1) {
              router.push("https://accounts.rygb.tech");
            } else {
              expandedView(i);
            }

          } else if (i == 1) {
            if (confirm == 1) {
              router.push("https://points.rygb.tech");
            } else {
              expandedView(i);
            }
          } else if (i == 2) {
            if (confirm == 1) {
              router.push("https://live.rygb.tech");
            } else {
              expandedView(i);
            }
          } else if (i == 3) {
            if (confirm == 1) {
              router.push("https://manager.rygb.tech/dash?demo=true");
            } else {
              expandedView(i);
            }
          } else if (i == 4) {
            if (confirm == 1) {
              router.push("https://storyteller.pages.dev/")
            } else {
              expandedView(i);
            }
          }

        }, 1000)
      }
    }, 400)
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
    }
    setTimeout(() => {
      anime({
        targets: backgroundVideos.children,
        opacity: 1,
        easing: "easeInOutQuad",
        delay: anime.stagger(50),
      })
    }, 1000)
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
        <div id="backgroundVideos" className={styles.bggrid}>

        </div>
        <h1 className={styles.text}>Click a channel to view a website - Marcus Mauricio - 2023</h1>
      </div>
      <div id="expanded" className={styles.expandedView}>
        <div style={{marginLeft: "180px"}}>
          <img id="expandedImg" className={styles.expandedImg}></img>
          <img id="expandedImgB" className={styles.expandedImgB}></img>
        </div>

        <div>
          <h1 className={styles.expandedHeader}>ABOUT</h1>
          <p id="expandedAbout" className={styles.expandedAbout}></p>
          <h1 className={styles.expandedHeader}>STATUS</h1>
          <p id="expandedStatus" className={styles.expandedAbout}></p>
          <button className={styles.dsbutton}>Go</button>
        </div>
      </div>
    </>
  )
}
