//#include <FreqCount.h>//https://github.com/PaulStoffregen/FreqCount/archive/master.zip
#include <LiquidCrystal.h>

const int rs = 12, en = 11, d4 = 6, d5 = 4, d6 = 3, d7 = 7;
//12-PB4
//11-PB3
//6-PD6
//4-PD4
//3-PD3
//7-PD7
LiquidCrystal lcd(rs, en, d4, d5, d6, d7);
void setup() {
  lcd.begin(16, 2);// LCD 16X2
  pinMode(7, INPUT);
  pinMode(13, OUTPUT);
  lcd.setCursor(0, 0);
  lcd.print("F = ");
  //  FreqCount.begin(1000);
//
//  DDRD &= ~(1 << DDD5);     // Clear the PD4 pin
//  // PD5 is now an input
//  PORTD |= (1 << PORTD5);   // turn On the Pull-up
//  // PD5 is now an input with pull-up enabled
//  TIMSK |= (1 << TOIE1);    // enable timer interrupt
//  TCCR1B |= (1 << CS12) | (1 << CS11) | (1 << CS10);
//  // Turn on the counter,
//  sei();

}
unsigned long f; float f0;
int x, n = 3, r;

ISR (TIMER1_OVF_vect)
{
    // interrupt just fired
}

void loop() {


  //     lcd.setCursor(0,0);
  //    lcd.print("F = ");
  //  if(digitalRead(7)==HIGH){n++;x=0;delay(100);}
  //    lcd.setCursor(0,1);
  ////  if(n==1){x++;if(x==1){FreqCount.begin(100);}r=-1;lcd.print("T = 0.1 s ");}
  ////  if(n==2){x++;if(x==1){FreqCount.begin(10000);}r=1;lcd.print("T = 10 s ");}
  ////  if(n==3){x++;if(x==1){FreqCount.begin(1000);}r=0;lcd.print("T = 1 s  ");}
  //  if(n>3){n=1;}
  //    lcd.setCursor(0,0);
  //    lcd.print("F = ");
  //  if(f>=1000000 && n==3){f0=f/1000000.0;lcd.print(f0,6+r);lcd.print(" MHz");}
  //  if(f<1000000 && n==3){f0=f/1000.0;lcd.print(f0,3+r);lcd.print(" kHz");}
  //  if(f>=100000 && n==1){f0=f/100000.0;lcd.print(f0,6+r);lcd.print(" MHz");}
  //  if(f<100000 && n==1){f0=f/100.0;lcd.print(f0,3+r);lcd.print(" kHz");}
  //  if(f>=10000000 && n==2){f0=f/10000000.0;lcd.print(f0,6+r);lcd.print("MHz");}
  //  if(f<10000000 && n==2){f0=f/10000.0;lcd.print(f0,3+r);lcd.print(" kHz");}
  //
  ////  if (FreqCount.available()) {
  ////
  ////    f = FreqCount.read();
  ////
  ////
  ////  }
  lcd.setCursor(10, 1); lcd.print("***");
  delay(200);
  digitalWrite(13, digitalRead(13) ^ 1);
  lcd.clear();
}
