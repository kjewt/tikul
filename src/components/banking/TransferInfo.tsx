import { useState, useCallback } from "react"
import { Account } from "../auth/Account"
import { AccountPW } from "../auth/AccountPW"
import { Bank } from "../auth/Bank"
import { Money } from "../auth/Money";
import { Categories } from "./Categories";
import { BtnTransfer } from "./BtnTransfer";
import type { ChildrenValue } from "../../types/Types"


export const TransferInfo = (): JSX.Element => {
    // const navigate = useNavigate();
    const [account, setAccount] = useState<ChildrenValue>({ value: "", valid: false })
    const [bank, setBank] = useState<ChildrenValue>({ value: "", valid: false })
    const [money, setMoney] = useState<ChildrenValue>({ value: "", valid: false })
    const [accountPW, setAccountPW] = useState<ChildrenValue>({ value: "", valid: false })
    const [category, setCategory] = useState<ChildrenValue>({ value: "", valid: false })

    const handleAccount = useCallback((newAccount: ChildrenValue) => {
        setAccount(newAccount)
    }, [])

    const handleBank = useCallback((newBank: ChildrenValue) => {
        setBank(newBank)
    }, [])

    const handleMoney = useCallback((money: ChildrenValue) => {
        setMoney(money)
    }, [])

    const handleAccountPW = useCallback((newAccountPW: ChildrenValue) => {
        setAccountPW(newAccountPW)
    }, [])

    const handleCategory = useCallback((newCategory: ChildrenValue) => {
        setCategory(newCategory)
    }, [])

    console.log(account, bank, accountPW, money, category)
    //    

    //     const handleTransfer = async () => {
    //         try {
    //             // 입력된 은행 이름과 계좌번호로 유저 검색
    //             const usersRef = collection(db, 'users');
    //             const q = query(usersRef, where('bankName', '==', transferBankName), where('account', '==', accountNumber));
    //             const querySnapshot = await getDocs(q);

    //             // 입력한 은행 이름과 계좌번호와 일치하는 유저가 찾아지면
    //             if (!querySnapshot.empty) {



    //                 // 송금하는 현재 유저의 "details" 컬렉션에 송금 내역 추가
    //                 const user = firebaseAuth.currentUser;
    //                 if (!user) {
    //                     console.log('로그인이 필요합니다.');
    //                     // 로그인 페이지로 이동하거나 로그인을 유도하는 메시지를 표시할 수 있습니다.
    //                     navigate('/not-a-user'); // 로그인 페이지로 이동
    //                     return;
    //                 }
    //                 const currentUserDocRef = doc(db, 'users', user.uid);

    //                 // 문서 데이터 가져오기
    //                 const currentUserDocSnap = await getDoc(currentUserDocRef);
    //                 const currentUserData = currentUserDocSnap.data();

    //                 if (currentUserData) {
    //                     const currentUserDetailsRef = collection(db, 'users', user.uid, 'details');
    //                     const addTransaction = {
    //                         amount: transferAmount,
    //                         description: description,
    //                         isWithdrawal: 0, // 0은 송금
    //                         category: ` 보낸 계좌: ${accountData.bankName} ${accountData.account}`,
    //                         date: new Date(),
    //                     }
    //                     await addDoc(currentUserDetailsRef, addTransaction);
    //                     setTransactions((prevDetails) => [...prevDetails, addTransaction]);

    //                     await updateDoc(currentUserDocRef, {
    //                         balance: currentUserData.balance - Number(transferAmount),
    //                     });
    //                     // const userDoc = querySnapshot.docs[0].ref;
    //                     const userDoc = querySnapshot.docs[0];
    //                     const userRef = doc(db, 'users', userDoc.id);

    //                     // 돈 받는 유저의 "details" 컬렉션에 송금 내역 추가
    //                     const detailsRef = collection(db, 'users', userDoc.id, 'details');
    //                     await addDoc(detailsRef, {
    //                         amount: transferAmount,
    //                         description: description,
    //                         isWithdrawal: 1, //1는 입금 
    //                         category: ` 보낸 계좌: ${accountData.bankName} ${accountData.account}`,
    //                         date: new Date(),
    //                     });
    //                     await updateDoc(userRef, {
    //                         balance: userDoc.data().balance + Number(transferAmount),
    //                     });

    //                     // 송금 성공 후 입력 필드 초기화
    //                     setAccountNumber('');
    //                     setTransferAmount('');
    //                     setPassword('');
    //                     setIsComplete(true);
    //                     console.log('송금 성공! 유저에게 내역이 추가되었습니다.');
    //                 }

    //             } else {
    //                 console.log('입력한 은행 이름과 계좌번호와 일치하는 유저를 찾을 수 없습니다.');
    //             }
    //         } catch (error) {
    //             console.log('송금 실패:', error);
    //         }
    //     };

    //     console.log(`${isCorrectAccountPassword}:비밀번호`)

    //     const handelToHome = () => {
    //         setIsComplete(false);
    //         setIsBanking(0)
    //     }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };
    return (<>
        <form onSubmit={handleSubmit}>
            <div className="flex items-center justify-center">
                <div className="w-[330px] mb-16">
                    <Account onAccountChange={handleAccount} />
                    <Bank onBankChange={handleBank} />
                    <Money onMoneyChange={handleMoney} />
                    <Categories onCategoryChange={handleCategory} />
                    <AccountPW onAccountPWChange={handleAccountPW} />

                    <BtnTransfer />




                </div>
            </div>
        </form>




    </>);
};