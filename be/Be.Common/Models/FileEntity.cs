namespace Be.Common.Models
{
    public class FileEntity
    {
        public int Id { get; set; }
        public string FileName { get; set; }
        public string Path { get; set; }
        public string Size { get; set; }
        public string FileExtension { get; set; }
        public string OriginalFileName { get; set; }
    }
}
