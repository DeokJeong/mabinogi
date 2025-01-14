<template>
  <div>searchbox
    <div class="flex gap-2.5">
      <select name="" id="" class="block w-max min-w-32 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm placeholder-slate-400
        focus:outline-none focus:border-main invalid:border-pink-500 invalid:text-pink-600 invalid:bg-pink-100 focus:invalid:border-pink-400 
      ">
        <option value="">1</option>
        <option value="">2</option>
        <option value="">3</option>
      </select>
      <input type="text" placeholder="검색어" class="block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm placeholder-slate-400
        focus:outline-none focus:border-main invalid:border-pink-500 invalid:text-pink-600 invalid:bg-pink-100 focus:invalid:border-pink-400 
      " />
      <select name="" id="" class="block w-max min-w-32 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm placeholder-slate-400
        focus:outline-none focus:border-main invalid:border-pink-500 invalid:text-pink-600 invalid:bg-pink-100 focus:invalid:border-pink-400 
      ">
        <option value="">1</option>
        <option value="">2</option>
        <option value="">3</option>
      </select>
      <input type="date" class="block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm placeholder-slate-400
        focus:outline-none focus:border-main invalid:border-pink-500 invalid:text-pink-600 invalid:bg-pink-100 focus:invalid:border-pink-400 
      " />
      <input type="date" class="block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm placeholder-slate-400
        focus:outline-none focus:border-main invalid:border-pink-500 invalid:text-pink-600 invalid:bg-pink-100 focus:invalid:border-pink-400 
      " />
      <button type="submit"
        class="w-max flex-none bg-main border-none rounded-md px-3 py-2 font-bold ">
        검색
      </button>
    </div>
  </div>
</template>