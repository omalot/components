import React from "react";
import { Eye, Pencil, Trash2 } from "lucide-react";

const TableCell = ({
  row,
  rows = [],
  action = {},
  showVertical = false,
  columns = [],
}) => {
  return (
    <tr className="hover:bg-blue-50">
      {columns.map((col) => (
        <td
          key={col.key}
          className={`px-2 py-2  border-b border-gray-300  align-top ${
            showVertical ? "border-l border-r" : ""
          }`}
        >
          <div className="w-full max-w-[300px] break-words whitespace-normal overflow-hidden text-ellipsis">
            {col.key === "action" ? (
              <div className="flex justify-center gap-2">
                {action.edit && (
                  <Pencil
                    size={20}
                    className="text-blue-400 hover:cursor-pointer"
                    onClick={() => action.edit(row)}
                  />
                )}
                {action.delete && (
                  <Trash2
                    size={24}
                    className="text-red-400 hover:cursor-pointer"
                    onClick={() => action.delete(row)}
                  />
                )}
                {action.view && (
                  <Eye
                    size={24}
                    className="text-gray-400 hover:cursor-pointer"
                    onClick={() => action.view(row)}
                  />
                )}
              </div>
            ) : (
              rows[col.key]?.(row) ?? ""
            )}
          </div>
        </td>
      ))}
    </tr>
  );
};

export default TableCell;
