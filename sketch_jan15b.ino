int sensorPin = A0;    
int sensorvalue = 0;
int distance = 0;

void setup() {
  Serial.begin(9600);
}

void loop(){
  sensorvalue = analogRead(sensorPin); // read/store the value from sensor
  
  for(int  i = 42 ; i >= 0; i--){
    if(sensorvalue >= 245+10*i && sensorvalue <= 255+10*i){
       distance = 42-i;
    }
  }
   Serial.println(distance);
  delay(500);    
}
