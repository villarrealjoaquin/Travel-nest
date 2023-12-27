import { Input } from "..";

export function InputFile({ onChange }: { onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }) {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Input onChange={onChange} id="picture" type="file" />
    </div>
  )
}