import { LocalNotifications } from '@capacitor/local-notifications'
import { Share } from '@capacitor/share'
import { Camera, CameraResultType } from '@capacitor/camera'

let bmiResult = ''

async function calculateBMI() {
  const heightInput = document.getElementById('height').value
  const weightInput = document.getElementById('weight').value

  // Validation
  if (!heightInput || !weightInput) {
    alert('Vui lòng nhập đầy đủ chiều cao và cân nặng!')
    return
  }

  const height = parseFloat(heightInput)
  const weight = parseFloat(weightInput)

  // Kiểm tra giá trị có phải là số hợp lệ không
  if (isNaN(height) || isNaN(weight)) {
    alert('Chiều cao và cân nặng phải là số!')
    return
  }

  // Kiểm tra giá trị âm
  if (height <= 0 || weight <= 0) {
    alert('Chiều cao và cân nặng phải là số dương!')
    return
  }

  // Kiểm tra phạm vi hợp lý
  if (height < 50 || height > 300) {
    alert('Chiều cao phải nằm trong khoảng 50 cm đến 300 cm!')
    return
  }
  if (weight < 10 || weight > 500) {
    alert('Cân nặng phải nằm trong khoảng 10 kg đến 500 kg!')
    return
  }

  // Chuyển chiều cao sang mét và tính BMI
  const heightInMeters = height / 100
  const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(1)
  let status = ''

  if (bmi < 18.5) status = 'Gầy'
  else if (bmi < 25) status = 'Bình thường'
  else if (bmi < 30) status = 'Thừa cân'
  else status = 'Béo phì'

  bmiResult = `Chỉ số BMI: ${bmi} - ${status}`
  document.getElementById('result').innerText = bmiResult
  document.getElementById('shareBtn').style.display = 'block'

  // Local Notification
  await LocalNotifications.schedule({
    notifications: [
      {
        title: 'Kết quả BMI',
        body: bmiResult,
        id: 1,
        schedule: { at: new Date(Date.now() + 1000) }
      }
    ]
  })
}

async function shareResult() {
  await Share.share({
    title: 'Kết quả BMI của tôi',
    text: bmiResult,
    url: 'https://example.com',
    dialogTitle: 'Chia sẻ BMI'
  })
}

async function takePhoto() {
  const image = await Camera.getPhoto({
    quality: 90,
    allowEditing: false,
    resultType: CameraResultType.DataUrl
  })

  const imageElement = document.createElement('img')
  imageElement.src = image.dataUrl
  imageElement.style.maxWidth = '200px'
  document.getElementById('photo').innerHTML = ''
  document.getElementById('photo').appendChild(imageElement)
}

window.calculateBMI = calculateBMI
window.shareResult = shareResult
window.takePhoto = takePhoto
