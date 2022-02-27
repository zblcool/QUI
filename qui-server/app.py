from flask import Flask
from projectq import MainEngine # import the main compiler engine
from projectq.ops import H, Measure,All,X ,QAA # import the operations we want to perform (Hadamard and measurement)
from projectq.meta import Compute,Control,Uncompute,Loop
import math
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
eng = MainEngine()  # create a default compiler (the back-end is a simulator)
qubit = eng.allocate_qubit()  # allocate 1 qubit

system_qubits = eng.allocate_qureg(3)
# Prepare the qaa_ancilla qubit in the |-> state
qaa_ancilla = eng.allocate_qubit()
X | qaa_ancilla
H | qaa_ancilla

def throw_value():


    def func_algorithm(eng,system_qubits):
        All(H) | system_qubits

    def func_oracle(eng,system_qubits,qaa_ancilla):
        # This oracle selects the state |010> as the one marked
        with Compute(eng):
            All(X) | system_qubits[0::2]
        with Control(eng, system_qubits):
            X | qaa_ancilla
        Uncompute(eng)



    # Creates the initial state form the Algorithm
    func_algorithm(eng, system_qubits)
    # Apply Quantum Amplitude Amplification the correct number of times
    num_it = int(math.pi/4.*math.sqrt(1 << 3))
    with Loop(eng, num_it):
        QAA(func_algorithm, func_oracle) | (system_qubits, qaa_ancilla)
   
    All(Measure) | system_qubits
    eng.flush() 
    result = [int(q) for q in system_qubits]
    # control_result = int(qaa_ancilla)
    print(result)
    return result



@app.route("/")
@cross_origin()
def hello_world():
    qNumbers = str(throw_value())

    return qNumbers