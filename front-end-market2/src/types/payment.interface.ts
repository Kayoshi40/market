interface Amount {
  value: string
  currence: string
}

interface Recipient {
  account_id: string
  gateway_id: string
}

interface PaymentMethod {
  type: string
  id: number //в видосе стринга
  saved: boolean
}

interface Confirmation {
  type: string
  return_url: string
  confirmation_url: string
}

export interface IPaymentResponse {
  id: number  //тоже стринга была
  status: string
  amount: Amount
  recipient: Recipient
  payment_method: PaymentMethod
}