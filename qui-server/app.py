from flask import Flask
from projectq import MainEngine  # import the main compiler engine
from projectq.ops import H, Measure  # import the operations we want to perform (Hadamard and measurement)

app = Flask(__name__)
eng = MainEngine()  # create a default compiler (the back-end is a simulator)
qubit = eng.allocate_qubit()  # allocate 1 qubit

def throw_value():
    H | qubit  # apply a Hadamard gate
    Measure | qubit  # measure the qubit

    eng.flush()  # flush all gates (and execute measurements)
    return "Measured {}".format(int(qubit)) 



@app.route("/")
def hello_world():
    qNumbers = str(throw_value())
    return "<p>Hello, World!"+qNumbers+"</p>"