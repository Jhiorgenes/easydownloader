interface Props {
  icon: string
}

export const Social = ({ icon }: Props) => {
  return (
    <div
      className="
      hover:bg-gray-800 cursor-pointer transition-all h-10 w-10 rounded-full justify-center items-center flex"
    >
      <img className="h-6 w-6" src={icon} alt="" />
    </div>
  )
}
