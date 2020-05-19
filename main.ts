function 計算 (答え: number) {
    while (!(input.buttonIsPressed(Button.A))) {
    	
    }
    basic.showString(convertToText(答え))
}
function パーセントで求める (元の値: number, パーセント: number) {
    return 元の値 * (パーセント / 100)
}
計算(パーセントで求める(1000, 100 - 50))
計算(パーセントで求める(3800, 100 - 10))
計算(パーセントで求める(2300, 100 - 30))
計算(パーセントで求める(2800 + (780 + 280), 100 - 5))
basic.forever(function () {
	
})
