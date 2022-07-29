document.write('Soal 1')
document.write('<br>')
document.write('<br>')
for (let y = 1; y <= 9; y++){
   for (let x = 1; x <= 9; x++) {
      if (x == y || x == 5) {
         document.writeln(y * 2 - 1)
      } else if (x + y == 10 || y == 5) {
         document.writeln(x * 2 - 2)
      } else{
         document.writeln(' ~ ')
      }
   }
   document.write('<br>')
}

document.write('<br>')
document.write('<br>')
document.write('Soal 2')
document.write('<br>')
document.write('<br>')
for (let y = 1; y <= 9; y++) {
   for (let x = 1; x <= 9; x++) {
      if ( x <= y) {
         document.writeln(x * 2 - 1)
      } else {
         document.writeln(' ~ ')
      }
   }
   document.write('<br>')
}

document.write('<br>')
document.write('<br>')
document.write('Soal 3')
document.write('<br>')
document.write('<br>')
for (let y = 1; y <= 9; y++) {
   for (let x = 1; x <= 9; x++) {
      if (x + y >= 10) {
         document.writeln(-y * 2 + 18)
      } else {
         document.writeln(' ~ ')
      }
   }
   document.write('<br>')
}

document.write('<br>')
document.write('<br>')
document.write('Soal 4')
document.write('<br>')
document.write('<br>')
for (let y = 1; y <= 9; y++) {
   for (let x = 1; x <= 9; x++) {
      if (x == y) {
         document.writeln(y * 2 - 1)
      } else if (x + y == 10) {
         document.writeln(x * 2 - 2)
      } else if (x >= y && x + y <= 10) {
         document.writeln(' A ')
      } else if (x <= y && x + y >= 10) {
         document.writeln(' B ')
      } else {
         document.writeln(' ~ ')
      }
   }
   document.write('<br>')
}

document.write('<br>')
document.write('<br>')
document.write('Soal 5')
document.write('<br>')
document.write('<br>')
for (let y = 1; y <= 9; y++) {
   for (let x = 1; x <= 9; x++) {
      if (x == y) {
         document.writeln(y * 2 - 1)
      } else if (x + y == 10) {
         document.writeln(x * 2 - 2)
      } else if (x <= y && x + y <= 10) {
         document.writeln(' A ')
      } else if (x >= y && x + y >= 10) {
         document.writeln(' B ')
      } else {
         document.writeln(' ~ ')
      }
   }
   document.write('<br>')
}