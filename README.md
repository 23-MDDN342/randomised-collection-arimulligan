[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/uYb6fuja)
## 2024 MDDN342 Assignment 2: Randomised Collections

### The Good Shepherd


●README is clear and discusses design decisions / influences well.
## Longer Explanations Below
#### Overall Design Summary & Process
In the first few weeks, I am deciding on creating different sheeps' faces with varying inputs. The inputs that I will be keeping the ame are the facial expressions - as I will be making a joyful sheep face in the middle with sadder faces going further out from these happier faces. 

The purpose for doing this was to show someone who has the joy of the Lord set before them, and the light and love that they can share with the people around them. It is also how people who don't have Jesus in their life are lost sheep. 

I have now added in this one face to the arrangement to see the different randomness, and changed the liklihood of different random numbers, so it looks thoughtfully random. 

Made the sheep faces!! There are 3 types: full of joy, tired, and depressed.
The reason I have made the sheep 'humanized' is because the sheep are a metaphor for us humans. The metaphor is from the bible: we are the sheep, God is the shepherd, and Jesus is the gate to enter into the paddock (our relationship) with God the shepherd. I will be putting in a shepherd at some point, and then putting joyful sheep faces inside the paddock with Him, and the sheep outside this paddock will be tired and depressed. Because these sheep are the lost sheep - they are doing life without God.
    let following_the_shepherd = int(random(0, 3));
#### Parameters
1. fluffiList - it takes a list of random coordinates for the random placement of the sheeps head fluff. I have created a function which does this. This is not a parameter which can be used on the editor slider, because it is fully random and because it's a list of (x, y) coordinates which would be hard to represent on a single slider. I purposefully made the head fluff go above the guidelines, because peoples hair is always going outside of what you want it to (especially in windy Wellington). This is a bunch of continuous variables, with its bounds being: minY = -10, maxY = -4, minX = -5, and maxX = 5. However, the whole list has conditional randommess according to the face size - the minimum and maximum x and y coordinates vary according to how big or small the face is. There is also a chance of the sheep being bald!
2. Eye Size - the size of the eyes, makes the sheep either look really tired or really hyped up. I used weighted selection for this continuous variable, as it's very funny seeing a whole bunch of varying eyes in the sheep. Its bounds are: minimum: 1, maximum: 3.5.
3. Face Size - This used to be just a circle for the sheeps face, but I later on changed this to the sheeps' length of face, as sheep in real life have longer faces. This is also a continuous variable using weighted selection, and is used to decide the hair fluff shape. Its bounds are: minimum: 10, maximum: 15.
4. Ear Angle - It looks cute if some are droopy and some are barely visible. A continuous variable using weighted selection, with bounds: minimum: 0.3, maximum: 1.1 (the function receiving this variable uses PI, hence the small numbers).
5. Horizontal Eye Direction - A continuous variable using weighted selection, with bounds: minimum: -0.5, maximum: 0.5. This variable and the next is to bring variation in where the sheep are looking.
6. Vertical Eye Direction - A continuous variable using weighted selection, with bounds: minimum: 0, maximum: 2.
7. Wool Colour - This discrete variable uses Gaussian Selection. This is because sheep are more likely to be white (because the allele is the most dominant), and less likely to be brown, greyish, white, or black. I wanted to have authentic sheep colours, with authentic randomness. The bounds are: (1, 4.3). I made the black wool only appear if it's over 4, because black sheep are considered a rarity.
8. Earrings - I thought the sheep needed some detail, so I added two types of earrings, and then an option of no earrings. This is another Gaussian Selected discrete variable with the bounds: 1, 4. I included the method of gaussian selection because sheep usually wear no earrings, but on the nice occasion, they might!

##### References:
 - [Shepherd image](https://www.vecteezy.com/vector-art/24794172-jesus-the-good-shepherd-on-white).
 - [Sheep inspiration](https://classroomclipart.com/image/vector-clipart/cartoon-of-a-sheep-with-a-pink-nose-57282.htm)