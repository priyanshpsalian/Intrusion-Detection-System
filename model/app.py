import base64
import flask
import matplotlib.pyplot as plt
from flask import Flask
from flask_cors import CORS
from flask import request, jsonify,Response

import os
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '2'
# os.environ["WERKZEUG_RUN_MAIN"] = "true"


# flask.Response
# import tensorflow as tf 
# import tensorflow_hub as hub 
import cv2 
import numpy as np
from mark_detector import MarkDetector
from pose_estimator import PoseEstimator


import face_recognition as fr
import face_recognition
from time import sleep
import imp
import time
import io,requests
import pytesseract
pytesseract.pytesseract.tesseract_cmd = 'C:/Program Files/Tesseract-OCR/tesseract'
import re
# from utils import *


app = Flask(__name__)
CORS(app,resources={r"/*":{"origin":"http://localhost:3000"}})
# multiple_people_detector = hub.load("https://tfhub.dev/tensorflow/efficientdet/d0/1")



# @app.route('/predict_people',methods=['GET','POST'])
# def predict_pose():
#     data = request.get_json()
#     # get image tensor 
#     output = multiple_people_detector(image, threshold = 0.5)
#     people = 0
#     for i in range(int(output['num_detections'][0])):
#         if classes[i] == 1 and scores[i] > threshold:
#             people += 1
#             ymin, xmin, ymax, xmax = boxes[i]
#             (left, right, top, bottom) = (xmin * im_width, xmax * im_width,
#                                           ymin * im_height, ymax * im_height)
#             draw.line([(left, top), (left, bottom), (right, bottom), (right, top), (left, top)],
#                       width=4, fill='red')

#     return jsonify({ 'people' : int(people) , 'image' : image})
def classify_face(im):
    """
    will find all of the faces in a given image and label
    them if it knows what they are

    :param im: str of file path
    :return: list of face names
    """
    faces = get_encoded_faces()
    faces_encoded = list(faces.values())
    known_face_names = list(faces.keys())

    img = cv2.imread(im, 1)
    #img = cv2.resize(img, (0, 0), fx=0.5, fy=0.5)
    #img = img[:,:,::-1]
 
    face_locations = face_recognition.face_locations(img)
    unknown_face_encodings = face_recognition.face_encodings(img, face_locations)

    face_names = []
    for face_encoding in unknown_face_encodings:
        # See if the face is a match for the known face(s)
        matches = face_recognition.compare_faces(faces_encoded, face_encoding)
        name = "Unknown"

        # use the known face with the smallest distance to the new face
        face_distances = face_recognition.face_distance(faces_encoded, face_encoding)
        best_match_index = np.argmin(face_distances)
        if matches[best_match_index]:
            name = known_face_names[best_match_index]
            print(name)

        face_names.append(name)

        # for (top, right, bottom, left), name in zip(face_locations, face_names):
        #     # Draw a box around the face
        #     cv2.rectangle(img, (left-20, top-20), (right+20, bottom+20), (255, 0, 0), 2)

        #     # Draw a label with a name below the face
        #     cv2.rectangle(img, (left-20, bottom -15), (right+20, bottom+20), (255, 0, 0), cv2.FILLED)
        #     font = cv2.FONT_HERSHEY_DUPLEX
        #     cv2.putText(img, name, (left -20, bottom + 15), font, 1.0, (255, 255, 255), 2)


    # Display the resulting image
    # while True:

        # cv2.imshow('Video', img)
        # if cv2.waitKey(1) & 0xFF == ord('q'):
            
        return face_names

def get_encoded_faces():
    """
    looks through the faces folder and encodes all
    the faces

    :return: dict of (name, image encoded)
    """
    encoded = {}

    for dirpath, dnames, fnames in os.walk("./faces"):
        for f in fnames:
            if f.endswith(".jpg") or f.endswith(".png"):
                face = fr.load_image_file("faces/" + f)
                encoding = fr.face_encodings(face)[0]
                encoded[f.split(".")[0]] = encoding

    return encoded



def readb64(uri):
   encoded_data = uri.split(',')[1]
   nparr = np.fromstring(base64.b64decode(encoded_data), np.uint8)
   img = cv2.imdecode(nparr, cv2.IMREAD_COLOR)
   img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
   return img

@app.route('/predict_person', methods = ['GET', 'POST']) 
def predict_person() : 
    # response.headers.add('Access-Control-Allow-Origin', '*')
    print("predictpose")
    cam = cv2.VideoCapture(0)
    cv2.namedWindow("test")
    img_counter = 0
    ret, frame = cam.read()
    if not ret:
        print("failed to grab frame")
        return
    cv2.imshow("test", frame)

    k = cv2.waitKey(1)

    # time.sleep(5) # after every 5 sec take ss
    img_name = "test.jpg".format(img_counter)
        # img_name = words[-1]+"opencv_frame_{}.png".format(img_counter)

    # path= 'C:/Users/Admin/Desktop/PRIYANSH/MPR/PRIYANSH/faces'
    # cv2.imwrite(img_name, frame)
    cv2.imwrite(img_name, frame)
    print("{} written!".format(img_name))
    img_counter += 1

    # time.sleep(2) # ML program

    if os.path.exists(os.path.join("absolute path",img_name)): #delete the file
        os.remove(os.path.join("absolute path",img_name))
    else:
        print("The file does not exist")
    name=classify_face("test.jpg")
    # response = flask.jsonify({'some': name})
    # response.headers.add('Access-Control-Allow-Origin', '*')
    # return response
    return name
    


@app.route('/predict_pose', methods = ['GET', 'POST']) 
def predict_pose() : 
    print("pose")
    # return jsonify({"name":"kk"})
    data = request.get_json(force = True) 
    image = r'{}'.format(data['img'])
    # print(type(image), image)
    image= readb64(image)
    plt.imshow(image)
    # plt.show()
    # plt.imsave(image, 'sample.jpg');
    height, width = image.shape[0], image.shape[1]
    pose_estimator = PoseEstimator(img_size=(height, width))
    mark_detector = MarkDetector()

    facebox = mark_detector.extract_cnn_facebox(image)
        # Any face found?
    frame = image
    if facebox is not None:

        # Step 2: Detect landmarks. Crop and feed the face area into the
        # mark detector.
        x1, y1, x2, y2 = facebox
        face_img = frame[y1: y2, x1: x2]

        # Run the detection.
        marks = mark_detector.detect_marks(face_img)

        # Convert the locations from local face area to the global image.
        marks *= (x2 - x1)
        marks[:, 0] += x1
        marks[:, 1] += y1

        # Try pose estimation with 68 points.
        pose = pose_estimator.solve_pose_by_68_points(marks)

        # All done. The best way to show the result would be drawing the
        # pose on the frame in realtime.

        # Do you want to see the pose annotation?
        img, pose = pose_estimator.draw_annotation_box(frame, pose[0], pose[1], color=(0, 255, 0))

        # Do you want to see the head axes?
        # pose_estimator.draw_axes(frame, pose[0], pose[1])

        # Do you want to see the marks?
        # mark_detector.draw_marks(frame, marks, color=(0, 255, 0))

        # Do you want to see the facebox?
        # mark_detector.draw_box(frame, [facebox])
        img = list(img)
        return jsonify({'img' : 'face found', 'pose' : pose})
    else :
        return jsonify({'message' : 'face not found', 'img' : 'img'})


@app.route('/add_person', methods = ['GET', 'POST']) 
def add_person() : 
    print("add_person")
    data = request.get_json(force = True)
    # image= readb64(data['img'])
    words=data['img']
    print(words)

    # taking image
    cam = cv2.VideoCapture(0)
    cv2.namedWindow("test")
    img_counter = 0
    ret, frame = cam.read()
    if not ret:
        print("failed to grab frame")
        return
    cv2.imshow("test", frame)

    k = cv2.waitKey(1)

    # time.sleep(5) # after every 5 sec take ss
    img_name = words+".png".format(img_counter)
        # img_name = words[-1]+"opencv_frame_{}.png".format(img_counter)

    path= 'C:/Users/Admin/Desktop/PRIYANSH/DJ HACKATHON/BACKEND/model/faces'
    
    # cv2.imwrite(img_name, frame)
    cv2.imwrite(os.path.join(path , img_name), frame)
    print("{} written!".format(img_name))
    img_counter += 1

    # time.sleep(2) # ML program

    if os.path.exists(os.path.join("absolute path",img_name)): #delete the file
        os.remove(os.path.join("absolute path",img_name))
    else:
        print("The file does not exist")
    return jsonify({'message' : 'added', 'img' : 'img'})

@app.route('/predict_people',methods=['GET','POST'])
def predict() : 
    data = request.get_json(force = True)
    image= readb64(data['img'])
    im_width, im_height = image.shape[0], image.shape[1]
    image = image.reshape((1, image.shape[0], image.shape[1], 3))
    # return jsonify({'data' : data})
    data = multiple_people_detector(image)

    boxes = data['detection_boxes'].numpy()[0]
    classes = data['detection_classes'].numpy()[0]
    scores = data['detection_scores'].numpy()[0]

    threshold = 0.5
    people = 0
    for i in range(int(data['num_detections'][0])):
        if classes[i] == 1 and scores[i] > threshold:
            people += 1
            ymin, xmin, ymax, xmax = boxes[i]
            (left, right, top, bottom) = (xmin * im_width, xmax * im_width,
                                          ymin * im_height, ymax * im_height)
            # draw.line([(left, top), (left, bottom), (right, bottom), (right, top), (left, top)],
            #           width=4, fill='red')

    return jsonify({ 'people' : int(people) , 'image' : 'image'})


@app.route('/save_img', methods=['GET', 'POST']) 
def save() : 
    data = request.get_json(force = True)
    image = r'{}'.format(data['img'])
    user = data['user']
    image= readb64(image)
    base_dir = os.getcwd()
    path = r"{}\images\{}.jpg".format(base_dir, user[0:-10])
    print(path)
    plt.imsave(image, path)
    return jsonify({'path' : path})


if __name__ == '__main__':
    app.run(debug=True,threaded=True)
    # app.run(host='0.0.0.0',port=8080)