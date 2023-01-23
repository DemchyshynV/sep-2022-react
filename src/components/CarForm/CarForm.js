import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../../validators/carValidator";
import {carService} from "../../services";
import {useEffect} from "react";

const CarForm = ({setCars,updateCar}) => {
    const {register, handleSubmit, reset, formState: {errors, isValid}, setValue} = useForm({
        mode: 'all',
        resolver: joiResolver(carValidator)
    });

    useEffect(() => {
        if (updateCar){
            setValue('brand', updateCar.brand)
            setValue('price', updateCar.price)
            setValue('year', updateCar.year)
        }
    }, [updateCar])

    const submit = async (car) => {
        const {data} = await carService.create(car);
        setCars(prev=>[...prev, data])
        reset()
    };

    return (
        // <form onSubmit={handleSubmit(submit)}>
        //     <input type="text" placeholder={'brand'} {...register('brand', {
        //         pattern: {
        //             value: /^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/,
        //             message: 'Тільки букви від 1 до 20 символів'
        //         },
        //         required:{value:true, message:'required'}
        //     }
        //     )}/>
        //     {errors.brand && <span>{errors.brand.message}</span>}
        //     <input type="text" placeholder={'price'} {...register('price', {
        //         valueAsNumber: true,
        //         min: {value: 0, message: 'Мінімум 0'},
        //         max: {value: 1000000, message: 'Максимум 1000000'},
        //
        //     })}/>
        //     {errors.price && <span>{errors.price.message}</span>}
        //     <input type="text" placeholder={'year'} {...register('year', {
        //             valueAsNumber: true,
        //             min: {value: 1990, message: 'Мін 1990'},
        //             max: {value: new Date().getFullYear(), message: `Max ${new Date().getFullYear()}`}
        //         }
        //     )}/>
        //     {errors.year&&<span>{errors.year.message}</span>}
        //     <button>Save</button>
        // </form>
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'brand'} {...register('brand')}/>
            {errors.brand && <span>{errors.brand.message}</span>}
            <input type="text" placeholder={'price'} {...register('price')}/>
            {errors.price && <span>{errors.price.message}</span>}
            <input type="text" placeholder={'year'} {...register('year')}/>
            {errors.year && <span>{errors.year.message}</span>}
            <button disabled={!isValid}>{updateCar?'Update':'Create'}</button>
        </form>
    );
};

export {CarForm};
