// 1-get_list_student_ids.js

function getListStudentsIds(list) {
  if (!Array.isArray(list)) {
    return [];
  }

  return list.map(student => student.id);
}

export default getListStudentsIds;
