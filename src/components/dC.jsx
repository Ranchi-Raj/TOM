import video from '../assets/dC.mp4'
export default function cr_out() {
  return (
    <div>
      <video width="400" autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>
    </div>
  )
}