from machine import Pin
import time
import dht
from umqtt.simple import MQTTClient
import ubinascii

mqtt_server = 'mqtt.thank-the-maker.org'
mqtt_port = 1883
mqtt_user = '***'
mqtt_password = '***'
client_id = ubinascii.hexlify(machine.unique_id())
topic = b'hacker'

def main():
  client = MQTTClient(client_id, mqtt_server, mqtt_port, mqtt_user, mqtt_password)
  client.connect()
  print("Connected to {}".format(mqtt_server))

  while True:
    #d = dht.DHT11(machine.Pin(5))  # NodeMCU D2
    d = dht.DHT22(machine.Pin(5))  # NodeMCU D2
    d.measure()
    data = d.temperature() # eg. 23 (°C)
    client.publish('{}/{}'.format(topic,client_id),
                    bytes(str(data), 'utf-8'))
    print('sensor temperature: {}'.format(data))
    time.sleep(2) 

if __name__ == '__main__':
    main()
