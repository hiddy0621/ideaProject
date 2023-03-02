export default function excludeExtractSample() {
  type ExcludeGrade = 'A' | 'B' | 'C' | 'D' | 'E'
  type SubExcludeGrade = Exclude<ExcludeGrade, 'E'>
  // type SubGrade = "A" | "B" | "C" | "D" となる

  // これも Omit 同様、タイポなどに気をつける必要あり

  // Extract は 任意の型だけと抽出
  type ExtractGrade = 'A' | 'B' | 'C' | 'D' | 'E'
  type FailExtractEGrade = Extract<ExtractGrade, 'D' | 'E'>
  type FailGrade = 'D' | 'E'
}
