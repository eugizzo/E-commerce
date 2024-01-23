from fastapi import FastAPI, HTTPException
from gtts import gTTS
import os
# import docker

app = FastAPI()

# Connect to the Docker daemon
# client = docker.from_env()

# Replace these variables with your Docker container details
container_name = "asterisk-container222"
new_sound_text = "Hello, this is a TTS-generated sound."

SOUNDS_DIR: str = "sounds/test"  # Removed leading '/' in the directory path
file_id = len(os.listdir(SOUNDS_DIR)) + 1
file_path = f"{SOUNDS_DIR}/sound-{file_id}.mp3"  # Changed file extension to mp3
# Generate TTS audio
tts = gTTS(text=new_sound_text, lang="en")
tts.save(file_path)

# Convert the TTS audio to the desired format (e.g., WAV)
# os.system(f"ffmpeg -i {file_path} -acodec pcm_s16le -ar 16000 {file_path.replace('.mp3', '.wav')}")

# Copy the new sound file into the Docker container
container_path = "/usr/share/asterisk/sounds/imihigo/"
os.system(f"docker cp {file_path.replace('.mp3', '.wav')} {container_name}:{container_path}")

# Clean up temporary files
# os.remove(file_path)
# os.remove(file_path.replace('.mp3', '.wav'))

# # Restart Asterisk container
# container = client.containers.get(container_name)
# container.restart()

# Check if the container exists
# if container:
#     print(container)
