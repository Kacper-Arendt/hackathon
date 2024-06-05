import s from './styles.module.css'
import {useRouter} from "next/navigation";

export const DistanceSummary = ({distance}: {distance: string}) => {
    const router = useRouter()
    
    
    return (
        <div className={s.distanceSummary}>
            <p>Odległość do pokonania</p>
            <p style={{color: '#ff52d9'}}>{distance}</p>
            <p>Czy jesteś gotowy/a na zmierzenie się ze swoim śladem węglowym?</p>
            <button type='button' className="btn btn-error text-white" onClick={()=> router.push('steps')}>Jeszcze jak</button>
        </div>
    )
}