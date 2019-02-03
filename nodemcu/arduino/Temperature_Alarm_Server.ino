#include <ESP8266WiFi.h>
#include <PubSubClient.h>

WiFiClient espClient;
PubSubClient client(espClient);

int buzzerPin = D1;

const char* ssid = "***";
const char* password = "***";

const char* mqtt_server = "mqtt.thank-the-maker.org";
const char* mqtt_user = "***";
const char* mqtt_pass = "***";

void setup() {
  Serial.begin(115200);
  Serial.println("");
  pinMode(buzzerPin, OUTPUT);
  setup_wifi();
  client.setServer(mqtt_server, 1883);
  client.setCallback(callback);
}

void loop() {
  
  if (!client.connected()) {
    reconnect();
  }
  client.loop();
}

void setup_wifi() {
  delay(10);
  // We start by connecting to a WiFi network
  Serial.println();
  Serial.print("Connecting to ");
  Serial.println(ssid);

  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }

  Serial.println("");
  Serial.println("WiFi connected");
  Serial.println("IP address: ");
  Serial.println(WiFi.localIP());
}

void reconnect() {
  // Loop until we're reconnected
  while (!client.connected()) {
    Serial.print("Attempting MQTT connection...");
    // Attempt to connect
    if (client.connect("Alarm_Server", mqtt_user, mqtt_pass)) {
      Serial.println("connected");
      client.subscribe("techtalk/temperature");

    } else {
      Serial.print("failed, rc=");
      Serial.print(client.state());
      Serial.println(" try again in 5 seconds");
      // Wait 5 seconds before retrying
      delay(5000);
    }
  }
}

void callback(char* topic, byte* payload, unsigned int length) {
  Serial.print("Message arrived [");
  Serial.print(topic);
  Serial.print("] ");
  String temperature  = "";
  for (int i = 0; i < length; i++) {
    temperature += (char)payload[i];
  }
  
  Serial.println("Temperature: " + temperature);
  temperature.replace(",", "");
  temperature.replace(".", "");

  if(temperature.toInt() > 3000) {
    alarm();
  }
  noTone(buzzerPin);
}

void alarm() {
  int i=0;

  for(i=700;i<800;i++){
    tone(buzzerPin,i);
    delay(15);
  }
  for(i=800;i>700;i--){
    tone(buzzerPin,i);
    delay(15);
  }
  delay(500);
 }

