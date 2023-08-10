import React, {useEffect, useRef} from 'react';
import Matter from 'matter-js';
import fox from './fox3-r.png'
import fox2 from './fox5-r.png'
import fox3 from './fox6-r.png'

export const TimeScale = () => {
  const boxRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    let Engine = Matter.Engine;
    let Render = Matter.Render;
    let Runner = Matter.Runner;
    let Composites = Matter.Composites;
    let Common = Matter.Common;
    let MouseConstraint = Matter.MouseConstraint;
    let Mouse = Matter.Mouse;
    let Composite = Matter.Composite;
    let Bodies = Matter.Bodies;

    let engine = Engine.create();
    let world = engine.world;

    let render = Render.create({
      element: boxRef.current,
      engine: engine,
      canvas: canvasRef.current,
      options: {
        width: 800,
        height: 600,
        showAngleIndicator: false,
        wireframes: false
      }
    });

    Render.run(render);

    let runner = Runner.create();
    Runner.run(runner, engine);

    Composite.add(world, [
      Bodies.rectangle(400, 0, 800, 50, {isStatic: true}),
      Bodies.rectangle(400, 600, 800, 50, {isStatic: true}),
      Bodies.rectangle(800, 300, 50, 600, {isStatic: true}),
      Bodies.rectangle(0, 300, 50, 600, {isStatic: true})
    ]);


    let bodyOptions = {
      frictionAir: 0,
      friction: 0.0001,
      restitution: 0.8,
      render: {
        sprite: {
          xScale: 0.15,
          yScale: 0.15,
          texture: fox3
        }
      }
    };

    Composite.add(world, Composites.stack(20, 100, 15, 3, 20, 40, function (x, y) {
      return Bodies.circle(x, y, Common.random(10, 20), bodyOptions);
    }));

    Composite.add(world, Composites.stack(50, 50, 8, 3, 0, 0, function (x, y) {
      switch (Math.round(Common.random(0, 1))) {
        case 0:
          if (Common.random() < 0.8) {
            bodyOptions.render = {
              sprite: {
                xScale: 0.15,
                yScale: 0.15,
                texture: fox
              }
            }
            return Bodies.rectangle(x, y, Common.random(20, 50), Common.random(20, 50), bodyOptions);
          } else {
            bodyOptions.render = {
              sprite: {
                xScale: 0.15,
                yScale: 0.15,
                texture: fox2
              }
            }
            return Bodies.rectangle(x, y, Common.random(80, 120), Common.random(20, 30), bodyOptions);
          }
        case 1:
          return Bodies.polygon(x, y, Math.round(Common.random(4, 8)), Common.random(20, 50), bodyOptions);
      }
    }));

    let mouse = Mouse.create(render.canvas);
    let mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false
        }
      }
    });

    Composite.add(world, mouseConstraint);

    render.mouse = mouse;

    Matter.Render.lookAt(render, {
      min: {x: 0, y: 0},
      max: {x: 800, y: 600}
    });

    return () => {
      Matter.Render.stop(render);
      Matter.Runner.stop(runner);
    };
  }, []);

  return (
    <div
      ref={boxRef}
      style={{
        width: 800,
        height: 600
      }}
    >
      <canvas ref={canvasRef}/>
    </div>
  );
};
