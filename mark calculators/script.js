//internal mark calculation
var cat1 = document.getElementById("cat1")
var assign1 = document.getElementById("ass1")
var cat2 = document.getElementById("cat2")
var assign2 = document.getElementById("ass2")
var result = document.getElementById("result")

function calcInternalMark() {
    var cat1value = Number(cat1.value)
    var cat2value = Number(cat2.value)
    var ass1value = Number(assign1.value)
    var ass2value = Number(assign2.value)
    var mark = ((cat1value + cat2value + ass1value + ass2value) / 2) * 0.4
    result.value = mark
}
//external mark caculator
var semMark = document.getElementById("semMark")
var semResult = document.getElementById("externalMarkResult")
function calcExternalMark() {
    semMarkValue = Number(semMark.value)
    var mark = semMarkValue * 0.6
    semResult.value = mark
}

var internalMark = document.getElementById("internalMark")
var externalMark = document.getElementById("externalMark")
var totalMarkResult = document.getElementById("totalMarkResult")
function calcMark() {
    var internalValue = Number(internalMark.value)
    var externalValue = Number(externalMark.value)
    var totalMark = internalValue + externalValue
    totalMarkResult.value = totalMark
}

function addNewFields() {
    var container = document.getElementById("container")
    var newFields = document.createElement("div")
    newFields.innerHTML = `
<p><label>CAT2 mark: <input type="number" value="0"></label></p>
<p><label>Assignment1 mark: <input type="number" value="0"></label></p>`
    container.appendChild(newFields)
}