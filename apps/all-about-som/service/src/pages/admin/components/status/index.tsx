// Hooks
import useStatusAdmin from '@pages/admin/components/status/hooks/useStatusAdmin';

// Components
import { Button, Label, RadioGroup, RadioGroupItem } from '@younyikim/ui';
import AdminNav from '@pages/admin/components/nav';

const index = () => {
  const { options, setSelectedValue, handleSaveClick } = useStatusAdmin();

  return (
    <section className="scrollbar-hide flex h-svh w-full flex-col items-center justify-start overflow-hidden bg-white px-20 pb-20">
      <AdminNav title="Status 수정" />
      <div className="mt-[8.7rem] h-full w-full p-16">
        <h3 className="text-xl">현재 솜이의 위치 변경하기</h3>
        <RadioGroup
          defaultValue={options[0].value}
          className="pt-16"
          onValueChange={(value) => setSelectedValue(value)}
        >
          {options.map((item) => (
            <div key={item.id} className="flex items-center space-x-2">
              <RadioGroupItem value={item.value} id={item.id} />
              <Label htmlFor="r1" className="text-lg">
                {item.label}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>
      <div className="flex h-full w-full items-end justify-center py-20">
        <Button
          variant="default"
          size="xl"
          className="w-2/3 text-lg"
          onClick={handleSaveClick}
        >
          저장
        </Button>
      </div>
    </section>
  );
};

export default index;
