
strutureOptions = (
    [True, False, False],
    [False, False, True],
    [True, True, True]
)
pointsX = 0
pointsO = 0
def cleanPoints():
    global pointsX, pointsO

    pointsX = 0
    pointsO = 0


def separeDiagonal():
    global strutureOptions

    diagonals = list()
    diagonalReverse = list()
    indexReverse = 2
    for index, value in enumerate(strutureOptions):
        diagonals.append(value[index])
        diagonalReverse.append(value[indexReverse])

        indexReverse -= 1

    return [diagonals, diagonalReverse]


def separeColumns():
    global strutureOptions

    verticals = list()
    for next in range(0, len(strutureOptions)):
        verticals.append([value[next] for value in strutureOptions])
    return verticals


def incrementPoints(value):
    global pointsX, pointsO

    if value:
        pointsX += 1
    else:
        pointsO += 1


def verifyValues(datas):
    global pointsX, pointsO

    for line in datas:
        for value in line:
            incrementPoints(value)
        
        if pointsX == 3:
            print("X is the winner!")
            break
        elif pointsO == 3:
            print("O is the winner!")
            break

        cleanPoints()


def analisingDatas():
    global strutureOptions

    verifyValues(strutureOptions)
    verifyValues(separeColumns())
    verifyValues(separeDiagonal())

analisingDatas()