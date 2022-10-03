import { useState, useEffect } from "react"
import { Text , StyleSheet} from "react-native"
import { Camera, CameraPermissionStatus, useCameraDevices } from 'react-native-vision-camera';

function Cameras(){
    const [cameraPermission, setCameraPermission] = useState();
    const [microphonePermission, setMicrophonePermission] = useState();

       
      
        useEffect(() => {
          Camera.getCameraPermissionStatus().then(setCameraPermission);
          Camera.getMicrophonePermissionStatus().then(setMicrophonePermission);
        }, []);

        console.log(`Re-rendering Navigator. Camera: ${cameraPermission} | Microphone: ${microphonePermission}`);
console.log(devices)
        const devices = useCameraDevices()
        const device = devices.back
      
        if (device == null) return <Text>nope</Text>
        return (
          <Camera
            style={StyleSheet.absoluteFill}
            device={device}
            isActive={true}
          />
        )
}

export default Cameras