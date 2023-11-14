import { ButtonUi } from "../../../../components/ui/button";
import { Textarea } from "../../../../components/ui/textarea";

function FeedbackWidget() {
  return (
    <>
      <section className="flex w-[90%] m-auto flex-col gap-3 my-3 lg:w-full">
        <label htmlFor="message" className="font-bold">Realiza una reseña</label>
        <Textarea placeholder="Que te parecio el departamento" />
        <p className="text-sm text-muted-foreground">Tu comentario nos ayuda a mejorar!</p>
        <ButtonUi className="bg-[#FF385C] hover:bg-[#ff385db1]">Enviar</ButtonUi>
      </section>
    </>
  )
}
export default FeedbackWidget;