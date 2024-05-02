[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/uYb6fuja)
## 2024 MDDN342 Assignment 2: Randomised Collections

### The Good Shepherd

The Good Shepherd is a design output which shows a shepherd sliding across a grassy area with rolling hills, filled with sheep. The faces of the sheep are randomised and can change colour, size, accessories and more! The most important factor which changes in the sheep is their emotions: because sheep need a shepherd, and are filled with joy when the shepherd slides across them. Before the shepherd comes to them, they are depressed, and if the sheep don't follow their shepherd, they get tired and confused on what their life is about. This whole picture is a metaphor for us as humans (the sheep) and Jesus (the good shepherd), because life can get depressing if Jesus doesn't show up in our lives. Then, if we choose to not follow Him after he shows up, then life gets tiring and confusing - there is no purpose to life anymore without following Him - in my honest opinion. Because "what good will it be for someone to gain the whole world, yet forfeit their soul?" (Matthew 16:26).

## Longer Explanations Below
#### Parameters
1. fluffiList - it takes a list of random coordinates for the random placement of the sheeps head fluff. I have created a function which does this. This is not a parameter which can be used on the editor slider, because it is fully random and because it's a list of (x, y) coordinates which would be hard to represent on a single slider. I purposefully made the head fluff go above the guidelines, because peoples hair is always going outside of what you want it to (especially in windy Wellington). This is a bunch of continuous variables, with its bounds being: minY = -10, maxY = -4, minX = -5, and maxX = 5. However, the whole list has conditional randommess according to the face size - the minimum and maximum x and y coordinates vary according to how big or small the face is. There is also a chance of the sheep being bald!
2. Eye Size - the size of the eyes, makes the sheep either look really tired or really hyped up. I used weighted selection for this continuous variable, as it's very funny seeing a whole bunch of varying eyes in the sheep. Its bounds are: minimum: 1, maximum: 3.5.
3. Face Size - This used to be just a circle for the sheeps face, but I later on changed this to the sheeps' length of face, as sheep in real life have longer faces. This is also a continuous variable using weighted selection, and is used to decide the hair fluff shape. Its bounds are: minimum: 10, maximum: 15.
4. Ear Angle - It looks cute if some are droopy and some are barely visible. A continuous variable using weighted selection, with bounds: minimum: 0.3, maximum: 1.1 (the function receiving this variable uses PI, hence the small numbers).
5. Horizontal Eye Direction - A continuous variable using weighted selection, with bounds: minimum: -0.5, maximum: 0.5. This variable and the next is to bring variation in where the sheep are looking.
6. Vertical Eye Direction - A continuous variable using weighted selection, with bounds: minimum: 0, maximum: 2.
7. Wool Colour - This discrete variable uses Gaussian Selection. This is because sheep are more likely to be white (because the allele is the most dominant), and less likely to be brown, greyish, white, or black. I wanted to have authentic sheep colours, with authentic randomness. The bounds are: (1, 4.3). I made the black wool only appear if it's over 4, because black sheep are considered a rarity.
8. Earrings - I thought the sheep needed some detail, so I added two types of earrings, and then an option of no earrings. This is another Gaussian Selected discrete variable with the bounds: 1, 4. I included the method of gaussian selection because sheep usually wear no earrings, but on the nice occasion, they might!

#### Overall Design Justifications & Process

**Inspiration Justification**
The inspiration was basically the parable that Jesus told his disciples about leaving the 99 sheep that follow Him for the 1 lost sheep (Luke 15:4-7). The shepherd in this design is Jesus walking out to all the lost sheep who are in need of Him, and if they decide to follow Him will have a life full of joy (which is eternal, whereas happiness is temporary). In Matthew 11:28-30, Jesus says: “Come to me, all you who are weary and burdened, and I will give you rest. Take my yoke upon you and learn from me, for I am gentle and humble in heart, and you will find rest for your souls. For my yoke is easy and my burden is light.”

The purpose for doing this was to show someone who has the joy of the Lord set before them, and the light and love that they can find in Jesus and share with the people around them. It is also how people who don't have Jesus in their life are lost sheep, but Jesus will leave the 99 for any of those lost sheep.

**Arrangement Justification**
I made the sheep have a randomised layout in the paddock because that is how sheep are usually: there is no structure to where they are in the field. I made the sheep higher up smaller, as I was trying to create the feel of an actual landscape, with the closer you are to them, the more you can see their detail.

I made the sheep follow the shepherd a little way after he walks past them because sometimes it takes time to want to follow him. Only a third of the sheep do decide to follow him in my code, leaving the others who chose not to behind in the paddock. Sometimes the sheep which are further away are standing on top of sheep closer to the viewer, and that is because my code isn't perfect, but sheep in real life are! I made the shepherd picture slide in front of all the sheep because he is the main point on why the sheeps' lives and emotions change.

The colour and aesthetic was inspired by the simple cartoons that churches might show little kids - like the veggie tales cartoons and other simple cartoons with simple meanings about Jesus.

**Face Justification**
Because of this metaphor, this is the reason why I have made the sheep 'humanized' in the emotions they show. I was inspired by the sheep picture referenced below, which also created the inspiration to make the sheep cute in stature, and was why I included pink cheeks, nose, and tongue.
The rest of the justifications are up in the parameters section.

**Process Reflection**
Starting from the idea of wanting to create one happy sheep and then sadder sheep the further away they are from this sheep in a circle formation has definitely changed. I am glad I kept the deeper meaning and sheep metaphor, but in my opinion, including the good shepherd with more interactive sheep made it a lot more fun to watch! I thoroughly enjoyed creating really cool faces with different sheep, and creating a whole Sheep class for them was interesting in JavaScript.

By Arianna Mulligan

##### References:
 - [Shepherd image](https://www.vecteezy.com/vector-art/24794172-jesus-the-good-shepherd-on-white).
 - [Sheep inspiration](https://classroomclipart.com/image/vector-clipart/cartoon-of-a-sheep-with-a-pink-nose-57282.htm)