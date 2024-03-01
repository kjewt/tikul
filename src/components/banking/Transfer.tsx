import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { accountDataState } from "../../state/atoms"
import { TransferInfo } from './TransferInfo';

export const Transfer = (): JSX.Element => {
    const [accountData] = useRecoilState(accountDataState);

    return (
        <div className="container min-h-screen">
            <div className="flex flex-col items-center">
                <div className="text-center">
                    <p className="py-3">송금하기</p>
                </div>

                <div className="card w-96 bg-accent shadow-xl">
                    <div className="m-3 rounded-xl bg-base-100 p-2 text-left">
                        <Link to="/home/banking" className="link-primary underline">이전으로</Link>
                        <div className="user-account px-4 pt-4 text-sm font-bold">
                            <div className="border-b border-accent flex justify-center">
                                <span>내 계좌 | &nbsp;</span>
                                <span className="">{accountData.bank}&nbsp;</span>
                                <span className="">{accountData.account}</span>
                            </div>
                            <div className="flex justify-center p-4">📍송금할 계좌 정보를 입력하세요.</div>
                        </div>
                        <TransferInfo />
                    </div>
                </div>

            </div>
        </div>
    );

};


