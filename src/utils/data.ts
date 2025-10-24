export const locationData: { id: number, code: string, name: string }[] = [
    {
        id: 1, code:
            "NSW"
        , name:
            "New South Wales Clinic"
    },

    {
        id: 2, code:
            "QLD"
        , name:
            "Queensland Diagnostic Center"
    },

    {
        id: 3, code:
            "VIC"
        , name:
            "Victoria Imaging"
    },

    {
        id: 4, code:
            "WA"
        , name:
            "Western Australia Radiology"
    },

];


export const inventoryData:{id:number, code:string, name:string, category:string, feeLevel:string, amount:number, gap:number}[] = 
[
    {
        id: 1,
        code:
            "56220"
        ,
        name:
            "CT Cervical Spine without Contrast"
        ,

        category:

            "CTC - CT Cervical"
        ,

        feeLevel:

            "Medicare"
        ,
        amount: 250.56,
        gap: 0.0,
    },
    {
        id: 2,
        code:
            "56221"
        ,
        name:
            "CT Cervical Spine with Contrast"
        ,

        category:

            "CTC - CT Cervical"
        ,

        feeLevel:

            "Private"
        ,
        amount: 320.75,
        gap: 15.0,
    }
];