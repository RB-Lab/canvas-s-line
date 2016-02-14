# Canvas S-Line
## Geometry type for [canvas-tree](https://www.npmjs.com/package/canvas-tree)

### Creates Path2D object represented S-curved line

#### Installation

```bash
    $ npm install --save canvas-s-line
```

#### Usage

```javascript

    import sLine from 'canvas-s-line';
    import createCanvas from 'canvas-tree';

    const style = {
        fromx: 60,
        fromy: 80,
        tox: 130,
        toy: 120,
        stroke: '#3333ff',
        strokeWidth: 2,
        hover: {
            stroke: '#ff3333'
        }
    }

    const $canvas = document.getElementById('canvas');

    // as geometry type for
    const canvas = createCanvas($canvas);

    canvas.update({
        children: [
            {
                geometry: sLine,
                children: [],
                style
            }
        ]
    });

    // standalone
    const path = sLine(style);
    const ctx = $canvas.getContext('2d');
    ctx.lineWidth = style.strokeWidth;
    ctx.strokeStyle = style.stroke;
    ctx.stroke(path);
    // if(ctx.isPointInStroke(path, x, y)) ... etc...

```
