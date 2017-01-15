int sensorPin = A0;    
int sensorvalue = 0;
int distance = 0;

void setup() {
  Serial.begin(9600);
}

void loop(){
  sensorvalue = analogRead(sensorPin); // read/store the value from sensor
  
  for(int  i = 63 ; i >= 0; i--){
    if(sensorvalue >= 35+10*i && sensorvalue <= 45+10*i){
       distance = 63-i;
    }
  }
   Serial.println(distance);
  delay(500);    
}
