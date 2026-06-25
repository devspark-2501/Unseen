export async function POST() {
  console.log("API HIT")

  return Response.json({
    gapScore: 87,
    hiddenSkills: ["Leadership"],
    evidence: ["Test evidence"],
    recommendations: ["Test recommendation"],
    summary: "Test summary"
  })
}