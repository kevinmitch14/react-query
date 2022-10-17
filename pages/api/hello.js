// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const supabaseUrl = 'https://jbwkznrlqhpwaumbwnun.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impid2t6bnJscWhwd2F1bWJ3bnVuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjU5NTk2MTcsImV4cCI6MTk4MTUzNTYxN30.bzy0d2Dwjv2FRZoZJv9aHUgClz8hFs5lJiWrk3rOrr8'
const supabase = createClient(supabaseUrl, supabaseKey)


export default async function handler(req, res) {
  // res.status(200).json({ name: 'John Doe' })
  const { data, error } = await supabase
    .from('countries')
    .select()
  console.log(data);
  res.json(data)
}
