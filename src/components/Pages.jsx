import { Button, Center, Spacer } from "@chakra-ui/react";

function PagesButton({page,setPage}){
    function IncreasePage(){
        setPage(page+1)
    }
    function DecreasePage(){
        setPage(page-1)
    }
    return <Center>
        <div>
        <Button disabled={page==1?true:false} onClick={DecreasePage}>-1</Button>
        <Button disabled>{page}</Button>
        <Button onClick={IncreasePage}>+1</Button>
    </div>
    </Center>
}

export default PagesButton