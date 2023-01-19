using Be.Common.Models;
using Microsoft.AspNetCore.Http;
using System;
using System.Configuration;
using System.IO;

namespace Be.Common.Utils
{
    public static class FileHelper
    {

        public static int UploadFileMaxFileSizeInMb
        {
            get
            {
                if (int.TryParse(ConfigurationManager.AppSettings["UploadFile_MaxFileSize_InMb"], out var number))
                {
                    return number;
                }
                return 10;
            }
        }

        public static bool IsValidFileUpload(string fileStoragePath, IFormFile fileStream, ref FileEntity fileEntity)
        {
            var fileExt = Path.GetExtension(fileStream.FileName);
            if (fileExt != null)
            {
                fileEntity.FileExtension = fileExt;
                fileExt = fileExt.Replace(".", "");
                //if (UploadFileAllowExt.IndexOf("," + fileExt + ",", StringComparison.Ordinal) < 0)
                //{
                //    return false;
                //}
                if (fileStream.Length > UploadFileMaxFileSizeInMb * 1024 * 1024)
                {
                    return false;
                }

                if (!fileStoragePath.EndsWith("\\"))
                {
                    fileStoragePath += "\\";
                }

                var fileNameWithoutExt = Path.GetFileNameWithoutExtension(fileEntity.FileName);


                fileEntity.FileName = fileNameWithoutExt + "." + fileExt;

                var fullPath = Path.Combine(fileStoragePath, fileEntity.FileName);

                if (File.Exists(fullPath))
                {
                    fileEntity.FileName = Path.GetFileNameWithoutExtension(fileEntity.FileName) + "-" +
                                    DateTime.UtcNow.ToString("yyyyMMddHHmmssfff") + "." + fileExt;
                }
            }
            return true;
        }

        public static string GetMimeTypeByFileExtension(string fileExt)
        {
            fileExt = fileExt.ToLower().Replace(".", "");
            switch (fileExt)
            {
                case "doc":
                    return "application/msword";

                case "docx":
                    return "application/vnd.openxmlformats-officedocument.wordprocessingml.document";

                case "xls":
                    return "application/vnd.ms-excel";

                case "xlsx":
                    return "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";

                case "jpg":
                    return "image/jpeg";

                case "png":
                    return "image/png";

                default:
                    return "application/pdf";
            }
        }

        public static int GetInt(string s)
        {
            if (int.TryParse(s, out var number))
            {
                return number;
            }
            return 0;
        }
    }
}
