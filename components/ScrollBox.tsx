"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const words = `Oxygen gets you high. In a catastrophic emergency, we're taking giant, panicked breaths. Suddenly you become euphoric, docile.<br/> You accept your fate. It's all right here. Emergency water landing, six hundred miles an hour. Blank faces, calm as Hindu cows. Jokester began sneaking into the castle in the middle of the night and
        leaving jokes all over the place: under the king&apos;s pillow, in his
        soup, even in the royal toilet. The king was furious, but he
        couldn&apos;t seem to stop Jokester. And then, one day, the people of
        the kingdom discovered that the jokes left by Jokester were so funny
        that they couldn&apos;t help but laugh. And once they started laughing,
        they couldn&apos;t stop. Jokester began sneaking into the castle in the
        middle of the night and leaving jokes all over the place: under the
        king&apos;s pillow, in his soup, even in the royal toilet. The king was
        furious, but he couldn&apos;t seem to stop Jokester. And then, one day,
        the people of the kingdom discovered that the jokes left by Jokester
        were so funny that they couldn&apos;t help but laugh. And once they
        started laughing, they couldn&apos;t stop. Jokester began sneaking into
        the castle in the middle of the night and leaving jokes all over the
        place: under the king&apos;s pillow, in his soup, even in the royal
        toilet. The king was furious, but he couldn&apos;t seem to stop
        Jokester. And then, one day, the people of the kingdom discovered that
        the jokes left by Jokester were so funny that they couldn&apos;t help
        but laugh. And once they started laughing, they couldn&apos;t stop.
`;

const ScrollBox = () => {
  return (
    <div className='w-full max-w-3xl mx-auto px-4 py-12'>
      <h1 className='text-center font-medium text-2xl tracking-wider'>
        TRIBUTES
      </h1>
      <ScrollArea className='mt-8 h-[400px] w-full rounded-md border p-4'>
        <TextGenerateEffect duration={2} filter={false} words={words} />
      </ScrollArea>
    </div>
  );
};

export default ScrollBox;
