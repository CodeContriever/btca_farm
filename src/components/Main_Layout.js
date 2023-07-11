import React from 'react'

const Main_Layout = () => {
  return (
    <main class="p-4 md:ml-64 h-auto pt-20">

      {/* First Gridbox */}
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        
        {/* Grid 1 */}
        <div
          class="border-2 border-dashed border-gray-300 rounded-lg dark:border-gray-600 h-32 md:h-64"
        >


        </div>

        {/* Grid 2 */}
        <div
          class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-32 md:h-64"
        >

        </div>

        {/* Grid 3 */}
        <div
          class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-32 md:h-64"
        >

        </div>

        {/* Grid 4 */}
        <div
          class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-32 md:h-64"
        >

        </div>

      </div>

      
      <div
        class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-96 mb-4"
      >

      </div>

      {/* Second Grid box */}
      <div class="grid grid-cols-2 gap-4 mb-4">

        {/* 1 */}
        <div
          class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"
        >

        </div>

        {/* 2 */}
        <div
          class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"
        >

        </div>

      </div>


      <div
        class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-96 mb-4"
      >

      </div>

      {/* Third Grid box */}
      <div class="grid grid-cols-2 gap-4">

        {/* 1 */}
        <div
          class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"
        >

        </div>

        {/* 2 */}
        <div
          class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"
        >

        </div>

        {/* 3 */}
        <div
          class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"
        >

        </div>

        {/* 4 */}
        <div
          class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"
        >

        </div>

      </div>

    </main>
  )
}

export default Main_Layout