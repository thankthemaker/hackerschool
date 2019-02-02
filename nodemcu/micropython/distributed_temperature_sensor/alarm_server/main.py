from machine import Pin, PWM
import time
from umqtt.simple import MQTTClient
import ubinascii

mqtt_server = 'mqtt.thank-the-maker.org'
mqtt_port = 1883
mqtt_user = '***'
mqtt_password = '***'
client_id = ubinascii.hexlify(machine.unique_id())
topic = b'hacker'

beeper = PWM(Pin(5, Pin.OUT), freq=440, duty=512)

def alarm() {
    for tone in range(700, 800):
        beeper.freq(tone)
        time.sleep(15)
    for tone in range(800, 700):
        beeper.freq(tone)
        time.sleep(15)
    time.sleep(500)
    #beeper.deinit()

def sub_cb(topic, msg):
    print((topic, msg))
    if msg > 30:
        alarm()

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