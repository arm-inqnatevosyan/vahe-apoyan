export default defineAppConfig({
    ui: {
        button: {
            "padding": {
                "2xs": "px-2 py-1",
                "xs": "px-2.5 py-1.5",
                "sm": "px-2.5 py-1.5",
                "md": "px-10 py-3",
                "lg": "px-3.5 py-2.5",
                "xl": "px-3.5 py-2.5"
            },
            "rounded": "rounded-full",
            "color": {
                "red": {
                    "solid": "shadow-sm text-white bg-red-600 hover:bg-red-700 disabled:bg-red-600 dark:bg-gray-900 dark:hover:bg-gray-800/50",
                    "ghost": "text-gray-900 py-[28px] dark:text-white hover:bg-white dark:hover:bg-gray-900",
                },
            },
            "variant": {
                "my": "w-full max-w-[237px] rounded-[24px] bg-white  border-[#AFB8C7] border-[1px] flex flex-row justify-center items-center text-[#AFB8C7]",
                "lets-talk": "max-w-[585px] w-full bg-[#000] rounded-[7px] font-montserrat text-[12px] text-white text-center mt-[29px] flex justify-center"
            },
            "default": {
                "size": "md",
                "variant": "solid",
                "color": "red",
                "loadingIcon": "i-heroicons-arrow-path-20-solid"
            }
        },
        input: {
            "rounded": "rounded-full",
            "padding": {
                "2xs": "px-2 py-1",
                "xs": "px-2.5 py-1.5",
                "sm": "px-2.5 py-1.5",
                "md": "px-4  py-[8px]",
                "lg": "px-5 py-6",
                "xl": "px-6 py-7"
            },
            "variant": {
                "small": "max-w-[272px] w-full h-[40px] border border-[#C5C5C5] rounded-[7px] outline-none mt-[10px]",
                "big": "max-w-[585px] w-full h-[40px] border border-[#C5C5C5] rounded-[7px] outline-none mt-[10px]"
            },
        },        
        textarea: {
            "variant": {
                "contact": "max-w-[585px] w-full h-[200px] border border-[#C5C5C5] rounded-[7px] mt-[10px] outline-none	"
            },
        }
    }
})
