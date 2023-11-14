
ffBtn.addEventListener("click", (): void => {
    const response: boolean = verifyTypes(strutureDatas[0][0],optionTurn);
    if (response && continuePlay) {
            strutureDatas[0][0] = optionTurn;
            insertOptionInFront(ffBtn);
            
            optionTurn = !optionTurn;
            setStyleOption()
    }
})

fsBtn.addEventListener("click", (): void => {
    const response: boolean = verifyTypes(strutureDatas[0][1],optionTurn);
    if (response && continuePlay) {
        strutureDatas[0][1] = optionTurn;
        insertOptionInFront(fsBtn);

        optionTurn = !optionTurn;
        setStyleOption()
    }
})

ftBtn.addEventListener("click", (): void => {
    const response: boolean = verifyTypes(strutureDatas[0][2],optionTurn);
    if (response && continuePlay) {
        strutureDatas[0][2] = optionTurn;
        insertOptionInFront(ftBtn);

        optionTurn = !optionTurn;
        setStyleOption()
    }
})


sfBtn.addEventListener("click", (): void => {
    const response: boolean = verifyTypes(strutureDatas[1][0],optionTurn);
    if (response && continuePlay) {
        strutureDatas[1][0] = optionTurn;
        insertOptionInFront(sfBtn);
        
        optionTurn = !optionTurn;
        setStyleOption()
    }
})

ssBtn.addEventListener("click", (): void => {
    const response: boolean = verifyTypes(strutureDatas[1][1],optionTurn);
    if (response && continuePlay) {
        strutureDatas[1][1] = optionTurn;
        insertOptionInFront(ssBtn);

        optionTurn = !optionTurn;
        setStyleOption()
    }
})

stBtn.addEventListener("click", (): void => {
    const response: boolean = verifyTypes(strutureDatas[1][2],optionTurn);
    if (response && continuePlay) {
        strutureDatas[1][2] = optionTurn;
        insertOptionInFront(stBtn);

        optionTurn = !optionTurn;
        setStyleOption()
    }
})


tfBtn.addEventListener("click", (): void => {
    const response: boolean = verifyTypes(strutureDatas[2][0],optionTurn);
    if (response && continuePlay) {
        strutureDatas[2][0] = optionTurn;
        insertOptionInFront(tfBtn);
        
        optionTurn = !optionTurn;
        setStyleOption()
    }
})

tsBtn.addEventListener("click", (): void => {
    const response: boolean = verifyTypes(strutureDatas[2][1],optionTurn);
    if (response && continuePlay) {
        strutureDatas[2][1] = optionTurn;
        insertOptionInFront(tsBtn);

        optionTurn = !optionTurn;
        setStyleOption()
    }
})

ttBtn.addEventListener("click", (): void => {
    const response: boolean = verifyTypes(strutureDatas[2][2],optionTurn);
    if (response && continuePlay) {
        strutureDatas[2][2] = optionTurn;
        insertOptionInFront(ttBtn);

        optionTurn = !optionTurn;
        setStyleOption()
    }
})
