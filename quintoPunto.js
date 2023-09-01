function sumarArreglos(nums1, nums2){
    let array = []
    for (let i=0; i<nums1.length; i++){
        array.push(nums1[i]+nums2[i])
    }
    return array
}
const nums1 = [2, 4, 6]
const nums2 = [2, 4, 6]
console.log(sumarArreglos(nums1, nums2)) 