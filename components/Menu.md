## Componente Menu

![image](https://github.com/user-attachments/assets/35cfa008-f45c-4173-b525-9ba79947df97)


` Code `
```html
<div class="bg-[#1b1b1b] rounded-lg border border-white/10">
  <div class="p-2 flex-col w-[340px]">
    <div
      class="text-white items-center justify-between mb-2 flex w-full py-auto"
    >
      <p class="px-1 font-sans text-[16px] font-semibold">
        Switch branches/tags
      </p>
      <div
        class="flex items-center justify-center h-8 w-8 rounded-md hover:bg-white/10 duration-200 transition-all ease-in-out"
      >
        <svg
          xml:space="preserve"
          viewBox="0 0 460.775 460.775"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xmlns="http://www.w3.org/2000/svg"
          id="Capa_1"
          version="1.1"
          width="12px"
          height="10px"
          fill="#fff"
        >
          <path
            d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55
	c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55
	c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505
	c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55
	l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719
	c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z"
          ></path>
        </svg>
      </div>
    </div>
    <input
    placeholder="Find projects..."
      class="px-2 text-[14px] bg-[#171616] text-white p-[3px] border border-white/10 w-full rounded-md outline-none ring-2 ring-blue-500/0 focus:ring-blue-500"
    />
  </div>
  <div class="h-[1px] w-full bg-white/10"></div>
  <div class="p-2 flex items-center justify-center w-[340px] h-16">
    <p class="text-white/70 font-sans">Nothing to show</p>
  </div>
</div>
```

```html
<div class="bg-[#1b1b1b] p-4 border border-white/10 rounded-lg">
  <div class="flex items-center justify-center my-4">
    <h2 class="text-white text-[22px] font-sans font-bold">Login</h2>
  </div>
  <div class="flex flex-col gap-4">
    <div class="flex flex-col">
      <span class="text-white/70 font-sans text-[14px] my-1">Username</span>
      <input
        type="text"
        name="text"
        class="px-3 w-[280px] text-[14px] bg-[#171616] text-white p-2 border border-white/10 rounded-md outline-none ring-2 ring-blue-500/0 focus:ring-blue-500"
        placeholder="Enter your username..."
      />
    </div>
    <div class="flex flex-col">
      <span class="text-white/70 font-sans text-[14px] my-1">Password</span>
      <input
        type="password"
        name="text"
        class="px-3 w-[280px] text-[14px] bg-[#171616] text-white p-2 border border-white/10 rounded-md outline-none ring-2 ring-blue-500/0 focus:ring-blue-500"
        placeholder="Enter your password..."
      />
    </div>

    <div class="flex flex-col mt-2">
      <button
        type="submit"
        class="font-semibold px-3 w-full text-[14px] bg-blue-700 hover:bg-opacity-80 text-white p-2 border border-white/10 rounded-md outline-none"
        placeholder="Enter your password..."
      >
        Sign in
      </button>
    </div>
  </div>
  <div class="flex items-center my-4">
    <div class="flex-grow border-t border-white/20"></div>
    <span class="mx-4 text-white/70">or</span>
    <div class="flex-grow border-t border-white/20"></div>
  </div>
  <div class="flex flex-col mt-2">
      <button
        class="font-semibold px-3 w-full text-[14px] bg-zinc-800 hover:bg-opacity-80 text-white p-2 border border-white/10 rounded-md outline-none"
        placeholder="Enter your password..."
      >
        GitHub
      </button>
    </div>
</div>
```
