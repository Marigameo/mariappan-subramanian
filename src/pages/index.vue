<template>
    <Html class="bg-black text-white" />
  <div class="relative max-w-6xl w-full mx-auto px-6">
    <SpriteMap />
    <Spotlight class="z-[1]" />
    <div class="z-[2] relative flex flex-col min-h-screen">
      <TheHeader class="xl:mt-4" />
      <section class="s1">
      <div class="main-container">
        <div class="intro-wrapper">
          <div class="nav-wrapper">
            <div class="dots-wrapper">
              <div id="dot-1" class="browser-dot"></div>
              <div id="dot-2" class="browser-dot"></div>
              <div id="dot-3" class="browser-dot"></div>
            </div>

            <ul id="navigation">
              <li>
                <a href="https://www.linkedin.com/in/marigameo/" target="_blank"
                  >Hire me ?</a
                >
              </li>
            </ul>
          </div>
          
          <div class="left-column">
            <img id="profile_pic" src="../assets/profile.svg" alt="Smile Gupta" />
          </div>

          <div class="right-column">
            <div id="preview-shadow">
              <div id="preview">
                <div id="corner-tl" class="corner"></div>
                <div id="corner-tr" class="corner"></div>
                <h3>Hey! I'm 👋</h3>
                <p>
                  <span class="green-text">Mariappan Subramanian</span> -- I make and break things in <span class="yellow-text">Javascript</span>. Off the work, I do speak at <span class="orange-text">tech meetups, write blogs and teach</span> occassionally.
                </p>
                <div id="corner-br" class="corner"></div>
                <div id="corner-bl" class="corner"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h2 class="font-bold text-2xl md:text-3xl mt-20 md:mt-24 logo-text">Worked for the best</h2>
      <section class="logos-wrapper">
        <Companies/>
      </section>
    </section>
      <h2 class="font-bold text-2xl md:text-3xl mt-20 md:mt-24">Featured Talks</h2>
      <p class="mt-2 max-w-[90ch]">
        I dwell to shape myself as a Community Contributor by passion.
        <a href="https://www.linkedin.com/in/marigameo" class="link cream-text" target="_blank">
          Still a space? </a
        >.
      </p>
      <TalksGrid class="mt-4 md:mt-8" />
      <div class="gap-2 lg:gap-6 pt-8 inline-flex justify-center lg:pt-12">
        <a href="/talks" class="rounded bg-green-100 bg-opacity-[0.1] border-[1px] border-green-50 border-opacity-[0.1] hover:border-opacity-[0.7] hover:bg-opacity-[0.2] transition-all px-6 py-2" disabled="false">View more talks</a></div>
        <h2 class="font-bold text-2xl md:text-3xl mt-20 md:mt-24">Handpicked Projects</h2>
        <p class="mt-2 max-w-[90ch]">
          I am a hobbyist software developer and a tinkerer.
        <a href="https://www.linkedin.com/in/marigameo" class="link cream-text" target="_blank">
          Coffee with me? </a
        >.
      </p>
      <ProjectsGrid class="mt-4 md:mt-8" />
      <div class="gap-2 lg:gap-6 pt-8 inline-flex justify-center lg:pt-12">
        <a href="https://github.com/Marigameo/" target="_blank" class="rounded bg-green-100 bg-opacity-[0.1] border-[1px] border-green-50 border-opacity-[0.1] hover:border-opacity-[0.7] hover:bg-opacity-[0.2] transition-all px-6 py-2" disabled="false">View all projects</a>
      </div>
      <h2 class="font-bold text-2xl md:text-3xl mt-20 md:mt-24">Pinned Posts</h2>
      <p class="mt-2 max-w-[90ch]">
        I do medidate with words & craft confusions pairing thoughts.
      </p>
      <BlogList class="mt-4 md:mt-8" />
      <div class="gap-2 lg:gap-6 pt-8 inline-flex justify-center lg:pt-12">
        <a href="https://medium.com/@mariappan" target="_blank" class="rounded bg-green-100 bg-opacity-[0.1] border-[1px] border-green-50 border-opacity-[0.1] hover:border-opacity-[0.7] hover:bg-opacity-[0.2] transition-all px-6 py-2" disabled="false">Read more posts</a>
      </div>
      <span class="flex-grow" />
      <TheFooter class="mt-12" />
    </div>
  </div>
</template>