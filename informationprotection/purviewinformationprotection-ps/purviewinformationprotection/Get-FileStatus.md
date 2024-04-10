---
external help file: AIP.dll-Help.xml
Module Name: PurviewInformationProtection
online version: https://go.microsoft.com/fwlink/?linkid=2258952
schema: 1.0.0
---

# Get-FileStatus

## SYNOPSIS
Gets the Microsoft Purview Information Protection label and protection information for a specified file or files.

## SYNTAX

```
Get-FileStatus [-Path] <String[]> [<CommonParameters>]
```

## DESCRIPTION
The **Get-FileStatus** cmdlet returns the status of a specified file or all files in a specified path. This status includes whether the file has a label, and if it does, the label name, who applied it, how it was applied, and when. 

If your files are stored in SharePoint Online, use the [Get-FileSensitivityLabelInfo](/powershell/module/sharepoint-online/get-filesensitivitylabelinfo) cmdlet from the **SharePointOnlinePowerShell** module instead.

The status returned in the **Get-FileStatus** cmdlet also includes whether the file is protected by Rights Management, and if it is, what Rights Management template was used to apply this protection. If the file was protected with custom permissions (an ad-hoc rights policy) instead of a template, "Restricted Access" is displayed instead of the template name. In addition, the [Rights Management owner and Rights Management issuer](/information-protection/configure-usage-rights#rights-management-issuer-and-rights-management-owner) is displayed, and when the file was protected.

This cmdlet returns label information from your own tenant only.

Note that password-protected files always return the protection status of **False**.

You can run this cmdlet non-interactively. 

## EXAMPLES


### Example 1: Get the label and protection status of a single file

```
PS C:\> Get-FileStatus -Path \\Finance\Projects\Project.docx

FileName        : \\Finance\Projects\Project.docx
IsLabeled       : True
MainLabelId     : 074e257c-1234-1234-1234-34a182080e71
MainLabelName   : Confidential
SubLabelId      : d9f23ae3-1234-1234-1234-f515f824c57b
SubLabelName    : Finance group
LabelingMethod  : Privileged
LabelDate       : 12/12/2016 12:24:36 PM
IsRMSProtected  : True
RMSTemplateId   : e6ee2481-1234-1234-1234-f744eacd53b0
RMSTemplateName : Contoso - Confidential Finance
RMSOwner        : John@Contoso.com
RMSIssuer       : John@Contoso.com
ContentId       : 4ca757d2-83bf-4ec3-b93b-c7fe9433bf33
```

This command provides information about a file that is labeled as "Confidential \ Finance group", which is a label that is configured for your tenant. This file was labeled manually by John and it is also protected by using the Rights Management template, "Contoso - Confidential Finance". 

### Example 2: Get the label and protection status for all files in a  folder and export the results to a CSV file
```
PS C:\> Get-FileStatus -Path \\Finance\Projects\ | Export-Csv C:\Reports\Report.csv
```

This command gets the label and protection information of all files on the Finance server, in the Projects folder and any of its subfolders. The results are exported to the file named **Report.csv** so that they can be more easily searched and sorted. If a previous report exists in **C:\Reports\Report.csv**, it will be overwritten.

### Example 3: List the files labeled "Confidential" and export the results to a CSV file
```
PS C:\> Get-FileStatus -Path \\Finance\Projects\ | Where-Object {$_.MainLabelName -eq 'Confidential'} | Export-Csv C:\Reports\Report.csv
```

This command gets the label and protection information for just the files that are labeled "Confidential" (regardless of their sublabel) on the Finance server, in the Projects folder and any of its subfolders. The results are exported to the file named **Report.csv** so that they can be more easily searched and sorted. If a previous report exists in **C:\Reports\Report.csv**, it will be overwritten.

### Example 4: Count of files with a "Confidential" label
```
PS C:\> (Get-FileStatus -Path C:\Projects\ | Where-Object {$_.MainLabelName -eq 'Confidential'}).Count

5
```

This command provides the number of files with the "Confidential" label that are in the **C:\Projects** folder and any of its subfolders. In this example, 5 files are found.

## PARAMETERS

### -Path

Specifies a local path, network path, or SharePoint Server URL to the files for which you want to get the label and protection information. Wildcards are not supported.

For SharePoint paths, the following are supported:

- SharePoint Server 2019
- SharePoint Server 2016
- SharePoint Server 2013

For example:

- C:\Folder\
- C:\Folder\Filename
- \\\Server\Folder
- http://sharepoint.contoso.com/Shared%20Documents/Folder

Paths can include spaces when you enclose the path value with quotes.

```yaml
Type: String[]
Parameter Sets: (All)
Aliases: FullName, FileName

Required: True
Position: 0
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. 

For more information, see [about_CommonParameters](/powershell/module/microsoft.powershell.core/about/about_commonparameters).

## INPUTS

### System.String[]

## OUTPUTS

### Microsoft.InformationProtection.Powershell.AIP.Results.GetAIPFileStatusResult

## NOTES

## RELATED LINKS

[Set-Authentication](Set-Authentication.md)

[Set-FileLabel](Set-FileLabel.md)
