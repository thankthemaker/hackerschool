#include <TM1637Display.h>
#include <ESP8266WiFi.h>
#include <PubSubClient.h>

const int CLK = D1; //Set the CLK pin connection to the display
const int DIO = D2; //Set the DIO pin connection to the display

WiFiClient espClient;
PubSubClient client(espClient);

const char* ssid = "***";
const char* password = "***";

const char* mqtt_server = "mqtt.thank-the-maker.org";
const char* mqtt_user = "***";
const char* mqtt_pass = "***";

int NumStep = 0;  //Variable to interate

TM1637Display display(CLK, DIO);  //set up the 4-Digit Display.

void setup()
{
  Serial.begin(115200);
  Serial.println("");
  display.setBrightness(0x0a);  //set the diplay to maximum brightness
  display.showNumberDec(0, true, 4, 0); //Display the Variable value;
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
    if (client.connect("Temperature_Server", mqtt_user, mqtt_pass)) {
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
  display.showNumberDec(temperature.toInt(), false, 4, 0); //Display the Variable value;
}

