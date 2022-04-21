/**
 *  @author kiwi
 *  @date 2022.04.21
 *
 *  ☐ magicalTyperc 'return' drawing
 *  ☐ dialogSystem.textFrame
 *  ☐ hackBot-9S
 */
let font
let instructions

/* scene 1: typerc carriage return drawing */

function preload() {
    font = loadFont('data/consola.ttf')
}


function displayEnterGlyph() {
    translate(width/2, height/2)

    /* add red dot at origin */
    stroke(0, 100, 100)
    strokeWeight(4)
    point(0, 0)

    const WIDTH = 64
    display1x2Grid(WIDTH)

    /* draw return character */


    /* draw arrowhead */
}


/**
 * displays a 1x2 block of 4x4 grid squares per block
 * @param w the width of the grid
 */
function display1x2Grid(w) {
    /* base: 4x4 grid in each square; draw 1x2 grid */
    stroke(0, 0, 100, 30)
    strokeWeight(0.5)

    /* horizontal grid lines */
    for (let i=0; i<9; i++) {
        let verticalOffset = i * w/4
        line(0, -verticalOffset, w,-verticalOffset)
    }

    /* vertical grid lines */
    for (let i=0; i<5; i++) {
        let horizontalOffset = i * w/4
        line(horizontalOffset, 0, horizontalOffset, -2*w)
    }
}


function setup() {
    let cnv = createCanvas(600, 300)
    cnv.parent('#canvas')
    colorMode(HSB, 360, 100, 100, 100)
    textFont(font, 14)

    /* initialize instruction div */
    instructions = select('#ins')
    instructions.html(`<pre>
        [1] typerc carriage return demo
        [2] undef
        z → freeze sketch</pre>`)

    displayEnterGlyph()
    displayDebugCorner()
}


function draw() {
    // background(234, 34, 24)
    // displayDebugCorner()
}


/** 🧹 shows debugging info using text() 🧹 */
function displayDebugCorner() {
    const LEFT_MARGIN = 10
    const DEBUG_Y_OFFSET = height - 10 /* floor of debug corner */
    const LINE_SPACING = 2
    const LINE_HEIGHT = textAscent() + textDescent() + LINE_SPACING
    fill(0, 0, 100, 100) /* white */
    strokeWeight(0)

    text(`frameCount: ${frameCount}`,
        LEFT_MARGIN, DEBUG_Y_OFFSET - LINE_HEIGHT)
    text(`frameRate: ${frameRate().toFixed(1)}`,
        LEFT_MARGIN, DEBUG_Y_OFFSET)
}


function keyPressed() {
    /* stop sketch */
    if (key === 'z') {
        noLoop()
        instructions.html(`<pre>
            sketch stopped</pre>`)
    }
}