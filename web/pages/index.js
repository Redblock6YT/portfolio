import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import anime from 'animejs'

export default function Home() {
  const router = useRouter();
  var loading = false;
  var confirm = 0;
  var focusedIndex = null;
  var projects = {
    accounts: {
      name: "RYGB Accounts",
      notes: "",
      functionalityType: "Frontend & Backend",
      statuses: ["Development Complete (for now)"],
      image: "accounts.webp",
      link: "https://accounts.rygb.tech",
      description: "Meet Accounts, the heart of everything RYGB. With an RYGB Account, you can use RYGB Services."
    },
    live: {
      name: "RYGB Live (Version 0.1)",
      notes: "",
      functionalityType: "Frontend & Backend",
      statuses: ["Needs Rebranding", "Development Paused", "Current version completed in ~1 month"],
      description: "Video Social Media Platform Concept",
      image: "live.webp",
      link: "https://live.rygb.tech"
    },
    manager: {
      name: "RYGB Manager",
      functionalityType: "Frontend & Backend",
      notes: "One of my most advanced projects.",
      statuses: ["Development In Progress (~1 year)", "Redesign Planned"],
      image: "manager.webp",
      link: "https://manager.rygb.tech/dash?demo=true",
      description: "Manage your Employees, Products, Points Store, Kiosks and more, all in one place. See helpful Analytics at a glance and customize your Dashboard to you."
    },
    points: {
      name: "RYGB Points",
      notes: "",
      functionalityType: "Frontend & Backend",
      statuses: ["Development In Progress (~4 months)"],
      image: "points.webp",
      link: "https://points.rygb.tech",
      description: "Could you imagine if you never had to give your phone number to sign up for a store's rewards again? Or not have to download tons of apps to get rewards. Access them all in one, secure place. Meet Points."
    },
    nourishdmv: {
      name: "NourishDMV",
      functionalityType: "Frontend & Backend",
      notes: "For Future Buisiness Leaders of America Website Design Competition. One of my most beautifully designed projects.",
      statuses: ["Development Complete"],
      awards: [{ title: "2nd Place - Website Design", from: "Maryland FBLA Region #3 Leadership Conference" }, { title: "2nd Place - Website Design", from: "Maryland FBLA State Leadership Conference" }],
      github: "https://github.com/Redblock6YT/NourishDMV",
      link: "https://nourishdmv.rygb.tech",
      image: "nourishdmv.svg",
      description: "Meet the NourishDMV Website, a dynamic, responsive, modern website with features included to measure the success of the NourishDMV non-profit and more."
    },
    brushandgrain: {
      name: "Brush & Grain",
      functionalityType: "Frontend & Backend",
      notes: "",
      statuses: ["Redesign Planned", "Development Complete (for now)"],
      image: "bglogoscren.png",
      link: "https://brushandgrain.com",
      description: "This is a website for my dad's buisiness, Brush & Grain. This site also includes a online quote request form, which sends a copy of the quote request (called an Order Export) to the user, and another copy for my dad to view in RYGB Manager."
    },
    brushandgrainstore: {
      name: "Brush & Grain Store",
      functionalityType: "Frontend & Backend",
      statuses: ["Development In Progress (~3 months)", "Extension of Points Store"],
      notes: "Products, Orders & Design managed in RYGB Manager.",
      image: "brushgrainstore.webp",
      link: "https://brushandgrain.com/store",
      description: "Shop all of Brush & Grain's unique, handmade products from bottle stoppers to benches."
    },
    fblanlc2024vlog: {
      name: "My First NLC Experience as a High School Freshman | FBLA NLC 2024 Vlog",
      statuses: ["Published"],
      notes: "The best video I have ever made.",
      image: "nlc24vlogthumbnail.png",
      link: "https://youtu.be/ttXgyub-1WA?si=j5T5_zb0wmHwyXPz",
      description: "Experience the National Leadership Conference like you were there with me through my FBLA NLC 2024 Vlog."
    }
  }

  function expandedView(i) {
    if (focusedIndex != null) return;
    confirm = 1;
    focusedIndex = i;
    const expandedImg = document.getElementById("expandedImg");
    const expandedAbout = document.getElementById("expandedAbout");
    const expandedButton = document.getElementById("expandedButton");
    const expandedAwards = document.getElementById("expandedAwards");
    const awards = document.getElementById("awards");
    const projawards = projects[i].awards;
    const project = projects[i];
    const notes = project.notes;
    console.log(projects[i]);
    console.log(projects[i].notes)
    expandedImg.src = project.image;
    document.getElementById("projectName").innerHTML = project.name;
    expandedAbout.innerHTML = project.description;
    var statuses = project.statuses;
    document.getElementById("chips").innerHTML = "";
    awards.style.display = "block";
    expandedAwards.innerHTML = "";
    if (projawards != null) {
      for (var i = 0; i < projawards.length; i++) {
        var award = projawards[i];
        var awardDiv = document.createElement("div");
        awardDiv.className = styles.award;
        var title = document.createElement("h2");
        title.innerHTML = award.title;
        var from = document.createElement("h3");
        from.innerHTML = award.from;
        awardDiv.appendChild(title);
        awardDiv.appendChild(from);
        expandedAwards.appendChild(awardDiv);
      }
    }


    for (var i = 0; i < statuses.length; i++) {
      var chip = document.createElement("div");
      chip.className = styles.devStatusChip;

      var chipText = document.createElement("p");
      var text = statuses[i];
      chipText.innerHTML = statuses[i];

      if (text == "Needs Rebranding") chip.style.backgroundColor = "#b70000";
      if (text == "Development Paused") chip.style.backgroundColor = "#c97900";
      if (text.includes("Development In Progress")) {
        chip.style.animation = styles.pulse + " 3s infinite";
        chip.style.backgroundColor = "#fbac29ff"
      }

      chip.appendChild(chipText);
      document.getElementById("chips").appendChild(chip);
    }

    if (notes != "") {
      document.getElementById("expandedNotes").style.display = "block";
    } else {
      document.getElementById("expandedNotes").style.display = "none";
    }
    expandedNotes.innerHTML = notes;

    expandedButton.innerHTML = "Go"
    anime({
      targets: document.getElementById("main").children,
      scale: 0.8,
      filter: "blur(30px)",
      easing: "easeInOutQuad",
      opacity: 0.5,
      duration: 500,
    })
    const expandedView = document.getElementById("expandedView");
    expandedView.style.display = "grid"
    anime({
      targets: expandedView,
      opacity: 1,
      filter: "blur(0px)",
      scale: 1,
      translateX: "-50%",
      translateY: "-50%",
      easing: "easeInOutQuad",
      duration: 500,
    })
  }

  function go() {
    if (focusedIndex == null) return;
    if (confirm == 1) {
      const project = projects[focusedIndex];
      router.push(project.link);
    }
  }

  function back() {
    if (confirm == 1) {
      //goback
      confirm = 0;
      focusedIndex = null;
      const expandedView = document.getElementById("expandedView");
      anime({
        targets: document.getElementById("main").children,
        scale: 1,
        opacity: 1,
        filter: "blur(0px)",
        easing: "easeInOutQuad",
        duration: 500,
      })

      anime({
        targets: expandedView,
        opacity: 0,
        filter: "blur(30px)",
        scale: 1.5,
        translateX: "-30%",
        translateY: "-50%",
        easing: "easeInOutQuad",
        duration: 500,
        complete: () => {
          expandedView.style.display = "none"
        }
      })
    }
  }

  function clickEvent(i) {
    console.log("click event")
    const backgroundVideos = document.getElementById("backgroundVideos");
    if (focusedIndex != null) return;
    /*
    if (confirm == 1) {
      anime({
        targets: backgroundVideos.children,
        opacity: 0,
        scale: 0,
        easing: "easeInOutQuad",
        duration: 500,
        delay: anime.stagger(30),
      })
    }
    const video = document.createElement("video");
    if (i <= 4 && confirm == 1) {
      video.src = "rygbtrans.mp4"
      video.muted = true;
      video.style.opacity = "0"
      video.className = styles.fsvideo;
      console.log("click")
      document.getElementById("main").appendChild(video);
    }
    */
    setTimeout(() => {
      expandedView(i);
    }, 100)
  }

  function load() {
    if (loading) return;
    loading = true;
    console.log("load")
    const backgroundVideos = document.getElementById("backgroundVideos");
    for (let i = 0; i < 12; i++) {
      if (i > 10) {
        const video = document.createElement("video");
        video.src = "static.mp4"
        video.autoplay = true;
        video.loop = true;
        video.muted = true;
        video.play()
        video.style.opacity = "0";
        video.className = styles.videoCard
        backgroundVideos.appendChild(video);
        const card = video;
      } else {
        const img = document.createElement("img");
        img.src = i + ".png"
        img.style.opacity = "0";
        img.className = styles.videoCard
        img.style.cursor = "pointer"
        img.onclick = () => clickEvent(i);
        backgroundVideos.appendChild(img);
        const card = img;
      }
    }
  }

  useEffect(() => {
    //load();
  }, [router.isReady]);

  return (
    <>
      <Head>
        <title>by Marcus Mauricio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.navbar}>
        <div style={{ fontFamily: "Outfit, sans-serif", marginLeft: "20px", color: "black" }}><a style={{ fontWeight: "200" }}>by </a>Marcus Mauricio</div>
      </div>
      <div id="main" onClick={() => back()}>
        <div style={{ margin: "auto", width: "100%" }}>
          <div id="herocontainer" style={{ backgroundColor: "#fee7bf", paddingTop: "55px" }}>
            <div id="hero" className={styles.hero} onClick={() => clickEvent("fblanlc2024vlog")} style={{ backgroundImage: "url('/vlogavayt.png')" }}></div>
            <div className={styles.stdivider} style={{ marginTop: "0px" }}></div>
          </div>
          <div>
            <div>
              <p className={styles.headertext} style={{ position: "absolute", textWrap: "nowrap", textAlign: "center", transform: "translateX(-50%)", left: "50%", opacity: 0.1 }}>At a glance At a glance At a glance At a glance At a glance At a glance At a glance At a glance</p>
              <h1 className={styles.headertext} style={{ marginBottom: "0px", textAlign: "center" }}><a style={{ fontWeight: "normal" }}>I am</a> Marcus Mauricio</h1>
            </div>
            <p className={styles.paragraph} style={{marginTop: "10px"}}>I'm a Full Stack Website Developer and High School Sophomore from Maryland. I love trying new things, exploring, spending time with family & friends, and coding.</p>
          </div>

          <div style={{ backgroundColor: "#edaa7433" }}>
            <div className={styles.divider}></div>
            <div className={styles.innerContent}>
              <h1 className={styles.headertext} style={{ marginBottom: "0px" }}>My Skills</h1>
              <h3 className={styles.subheadertext}>Full Stack Website Developer</h3>
              <div className={styles.sixgrid} style={{ width: "100%", margin: "auto" }}>
                <div className={styles.card}>JavaScript</div>
                <div className={styles.card}>HTML</div>
                <div className={styles.card}>CSS</div>
                <div className={styles.card}>Next.js / React</div>
                <div className={styles.card}>NodeJS</div>
                <div className={styles.card}>ExpressJS</div>
                <div className={styles.card}>MongoDB</div>
                <div className={styles.card}>MongoDB Atlas</div>
                <div className={styles.card}>Mongoose ODM</div>
                <div className={styles.card}>Cloudflare</div>
                <div className={styles.card}>Google App Engine</div>
                <div className={styles.card}>GitHub</div>
              </div>
              <h3 className={styles.subheadertext}>Design</h3>
              <div className={styles.sixgrid} style={{ width: "100%", margin: "auto" }}>
                <div className={styles.card}>Figma</div>
              </div>

              <h3 className={styles.subheadertext}>Basic Video Editing</h3>
              <div className={styles.sixgrid} style={{ width: "100%", margin: "auto" }}>
                <div className={styles.card}>Davinci Resolve</div>
              </div>
              <h3 className={styles.subheadertext}>Other</h3>
              <div className={styles.sixgrid} style={{ width: "100%", margin: "auto" }}>
                <div className={styles.card}>Java</div>
                <div className={styles.card}>Spigot API</div>
                <div className={styles.card}>Ubuntu/Linux</div>
                <div className={styles.card}>Setup & Manage Minecraft Servers with Pterodactyl Panel</div>
              </div>
            </div>
            <div className={styles.divider}></div>
          </div>


          <div className={styles.innerContent}>
            <h1 className={styles.headertext}>All Projects</h1>
            <h3 className={styles.subheadertext}>Websites</h3>
            <div id="backgroundVideos" className={styles.bggrid}>
              <img src="nourishdmv.svg" className={styles.videoCard} onClick={() => clickEvent("nourishdmv")} />
              <img src="bglogoscren.png" onClick={() => clickEvent("brushandgrain")} className={styles.videoCard} />
              <img src="accounts.webp" onClick={() => clickEvent("accounts")} className={styles.videoCard} />
              <img src="live.webp" style={{ display: "none" }} onClick={() => clickEvent("live")} className={styles.videoCard} />
              <img src="manager.webp" onClick={() => clickEvent("manager")} className={styles.videoCard} />
              <img src="points.webp" style={{ display: "none" }} onClick={() => clickEvent("points")} className={styles.videoCard} />
              <img src="brushgrainstore.webp" style={{ display: "none" }} onClick={() => clickEvent("brushandgrainstore")} className={styles.videoCard} />
            </div>
            <h3 className={styles.subheadertext}>Videos</h3>
            <div id="backgroundVideos" className={styles.bggrid}>
              <img src="nlc24vlogthumbnail.png" className={styles.videoCard} onClick={() => clickEvent("fblanlc2024vlog")} />
              <img src="nlc24vlogthumbnail.png" style={{visibility: "hidden"}} className={styles.videoCard} onClick={() => clickEvent("fblanlc2024vlog")} />
              <img src="nlc24vlogthumbnail.png" style={{visibility: "hidden"}} className={styles.videoCard} onClick={() => clickEvent("fblanlc2024vlog")} />
              <img src="nlc24vlogthumbnail.png" style={{visibility: "hidden"}} className={styles.videoCard} onClick={() => clickEvent("fblanlc2024vlog")} />
              <img src="nlc24vlogthumbnail.png" style={{visibility: "hidden"}} className={styles.videoCard} onClick={() => clickEvent("fblanlc2024vlog")} />
              <img src="nlc24vlogthumbnail.png" style={{visibility: "hidden"}} className={styles.videoCard} onClick={() => clickEvent("fblanlc2024vlog")} />
              <img src="nlc24vlogthumbnail.png" style={{visibility: "hidden"}} className={styles.videoCard} onClick={() => clickEvent("fblanlc2024vlog")} />
            </div>
          </div>
        </div>
      </div>
      <div id="expandedView" className={styles.expandedView} style={{ transform: "scale(1.5) translateX(-30%) translateY(-50%)" }}>
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
          <img id="expandedImg" className={styles.expandedImg}></img>
        </div>

        <div style={{ paddingRight: "20px" }}>
          <div style={{ padding: "0px 15px" }}>
            <h1 className={styles.expandedHeader} id="projectName" style={{ display: "inline-block" }}></h1>
            <h3 className={styles.expandedAbout} style={{ fontStyle: "italic", display: "none", fontSize: "25px" }} id="expandedNotes">Notes</h3>
            <div className={styles.divider} style={{ marginBottom: "10px", marginTop: "10px" }}></div>
            <div id="chips">
            </div>
            <div id="awards" style={{ display: "none" }}>
              <div className={styles.divider} style={{ marginBottom: "10px", marginTop: "10px" }}></div>
              <h1 className={styles.expandedSubheader}>Awards</h1>
              <div id="expandedAwards"></div>
            </div>

            <p id="expandedAwards" className={styles.expandedAbout}></p>
            <div className={styles.divider} style={{ marginBottom: "10px", marginTop: "10px" }}></div>
            <h1 className={styles.expandedSubheader}>Description</h1>
            <p id="expandedAbout" className={styles.expandedAbout}></p>
          </div>

          <div style={{ marginTop: "25px" }}>
            <button id="expandedButton" className={styles.dsbutton} onClick={() => go()}>Go</button>
            <button id="expandedButton" className={styles.dsbutton} onClick={() => back()}>Back</button>
          </div>
        </div>
      </div>
    </>
  )
}
