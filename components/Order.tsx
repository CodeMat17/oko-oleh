const Order = () => {
  return (
    <div className='relative px-2 py-12 max-w-6xl mx-auto '>
      <h2 className='text-center text-2xl tracking-widest md:text-3xl font-semibold'>
        ORDER OF FUNERAL SERVICE
      </h2>
      <div className='mt-10 text-lg space-y-3 max-w-4xl mx-auto'>
        <div className='bg-sky-500/10 rounded-lg overflow-hidden'>
          <h3 className='font-medium bg-sky-200/70  dark:bg-sky-200/20 p-4'>
            THE APPROACH
          </h3>
          <div className='px-4 pb-4 pt-2'>
            <p>
              1. Processional Hymn with hymn with scriptural sentences SS&S 964,
              ABU 145
            </p>

            <p> 2. Call to worship: RCH 27, ABU 306</p>
            <p> 3. Sentences</p>
            <p> 4. Prayer of Adoration, Confession and Supplication</p>
            <p>5. Anthem</p>
          </div>
        </div>

        <div className='bg-sky-500/10 rounded-lg overflow-hidden'>
          <h3 className='font-medium bg-sky-200/70 dark:bg-sky-200/20 p-4'>
            THE WORD
          </h3>
          <div className='px-4 pb-4 pt-2'>
            {" "}
            <p>6. Old testament lesson</p>
            <p>7. New Testament lesson</p>
            <p>8. Biography/Tributes/Condolences</p>
            <p>9. Moment of silence and Prayer</p>
            <p>10. Hymn before the sermon: SS&S 1084, ABU 84</p>
            <p>11. SS&S 901, ABU 191</p>
          </div>
        </div>

        <div className='bg-sky-500/10 rounded-lg overflow-hidden'>
          <h3 className='font-medium bg-sky-200/70 dark:bg-sky-200/20 p-4'>
            THE RESPONSE
          </h3>
          <div className='px-4 pb-4 pt-2'>
            {" "}
            <p>
              12. Prayer of thanksgiving, intercession and Lord&apos;s prayer
            </p>
            <p>13. Prayer for the bereaved family</p>
            <p>14. Offerings</p>
            <p>15. Dedication of offering</p>
            <p>16. Announcement</p>
            <p>17. Closing hymns: SS&S 901, ABU 184</p>
            <p>18. Benediction</p>
            <p>19. Recessional Hymn: RCH 488, ABU 184</p>
          </div>
        </div>
        <div className='bg-sky-500/10 rounded-lg overflow-hidden'>
          <h3 className='font-medium bg-sky-200/70 dark:bg-sky-200/20 p-4'>
            AT THE GRAVE SIDE
          </h3>
          <div className='px-4 pb-4 pt-2'>
            {" "}
            <p>20. Hymn: SS&S 152, ABU 50</p>
            <p>21. Sentences</p>
            <p>22. Consecration of the grave</p>
            <p>23. Benediction</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
