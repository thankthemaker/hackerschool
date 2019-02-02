from machine import Pin
from umqtt.simple import MQTTClient
import ubinascii
import tm1637

mqtt_server = 'mqtt.thank-the-maker.org'
mqtt_port = 1883
mqtt_user = '***'
mqtt_password = '***'
client_id = ubinascii.hexlify(machine.unique_id())
topic = b'hacker'

tm = tm1637.TM1637(clk=Pin(5), dio=Pin(4))

def sub_cb(topic, msg):
    print((topic, msg))
    tm.temperature(msg) # show temperature '24*C'

def main(server=SERVER):
    c = MQTTClient(client_id, mqtt_server, mqtt_port, mqtt_user, mqtt_password)
    # Subscribed messages will be delivered to this callback
    c.set_callback(sub_cb)
    c.connect()
    c.subscribe(topic)
    print("Connected to %s, subscribed to %s topic" % (mqtt_server, topic))

    try:
        while True:
            c.wait_msg()
    finally:
        c.disconnect()

if __name__ == "__main__":
    main()