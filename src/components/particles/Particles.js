import Particles from 'react-tsparticles';

const ParticleBackground = () => {

    const particlesInit = (main) => {
        console.log(main);
    
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
      };
    
      const particlesLoaded = (container) => {
        console.log(container);
      };

    return(
        <div>
            <Particles
                id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fpsLimit: 70,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 100,
              duration: 1,
              opacity: 0.7,
              size: 40,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 3,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 600,
            },
            value: 50,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
      }}

                />
        </div>
    )
};

export default ParticleBackground;