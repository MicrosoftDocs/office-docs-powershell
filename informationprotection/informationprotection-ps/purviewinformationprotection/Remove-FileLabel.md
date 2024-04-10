---
external help file: AIP.dll-Help.xml
Module Name: PurviewInformationProtection
online version: https://go.microsoft.com/fwlink/?linkid=2259828
schema: 1.0.0
---

# Remove-FileLabel 

## SYNOPSIS
Removes the sensitivity label for a file or removes the protection according to the label configuration or custom permissions.

## SYNTAX

### RemoveLabel
```
Remove-FileLabel [-Path] <String[]> [-JustificationMessage <String>] [-RemoveLabel] [-PreserveFileDetails]
 [<CommonParameters>]
```

### RemoveLabelProtection
```
Remove-FileLabel [-Path] <String[]> [-JustificationMessage <String>] [-RemoveLabel] [-RemoveProtection]
 [-PreserveFileDetails] [<CommonParameters>]
```

### RemoveProtection
```
Remove-FileLabel [-Path] <String[]> [-JustificationMessage <String>] [-RemoveProtection] [-PreserveFileDetails]
 [<CommonParameters>]
```

## DESCRIPTION
For the Microsoft Purview Information Protection client, the **Remove-FileLabel** cmdlet removes a sensitivity label for one or more files. 

## EXAMPLES

### Example 1: Remove a label from a file

```
PS C:\> Remove-FileLabel C:\Projects\Analysis.docx -RemoveLabel -JustificationMessage 'The previous label no longer applies'

FileName                   Status Comment
--------                   ------ ------------
C:\Projects\Analysis.docx  Success
```

This command removes the existing label from the file named **C:\Projects\Analysis.docx**, and specifies a mandatory justification message.

This justification method is required because the relevant sensitivity label policy setting is enabled to require justification for removing a label.

> [!NOTE]
> If the label you're removing was protecting your file using a template, this command removes both the label and the protection.
>
> If the label you're removing was protecting your file using custom permissions, this command removes only the label.
>

### Example 8: Remove protection from a file 

```
PS C:\> Remove-FileLabel C:\Projects\Analysis.docx -RemoveProtection

FileName                   Status Comment
--------                   ------ ------------
C:\Projects\Analysis.docx  Success
```

This command removes protection from a single file named **Analysis.docx**. 

### Example 9: Remove protection and a label from a file

```
PS C:\> Set-AIPFileLabel C:\Projects\Analysis.docx -RemoveProtection -RemoveLabel -JustificationMessage 'The previous label no longer applies'

FileName                   Status Comment
--------                   ------ ------------
C:\Projects\Analysis.docx  Success
```

This command removes the label and custom protection from a single file named **Analysis.docx**. Because the policy is configured to require justification to remove a label, the justification reason is also supplied so that the command can complete without prompting the user for the reason.



## PARAMETERS

### -JustificationMessage
The justification reason for removing a label or removing protection if the sensitivity labeling policy requires users to supply this information. If removing a label triggers the justification and this reason is not supplied, the label is not removed. In this case, the status returned is "Skipped" with the comment "Justification required".

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Path
Specifies a local path, network path, or SharePoint Server URL to the files for which you want to remove the label and protection information. 

Wildcards are not supported and WebDav locations are not supported.

For SharePoint paths, the following are supported:

- SharePoint Server 2022
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

### -PreserveFileDetails
Specify this parameter to leave the modified date (Windows and SharePoint) and modified by (SharePoint) values unchanged for documents that you label:

- For local or network files, the **Date modified** value remains unchanged.

- For SharePoint files, the **Modified date** and **Modified by** values remain unchanged.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoveLabel
Removes any label that has been applied to a file.

```yaml
Type: SwitchParameter
Parameter Sets: RemoveLabel, RemoveLabelProtection
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RemoveProtection

Removes protection from a file. If the file is labeled, the label is not removed.

You must have sufficient usage rights or be a super user for your organization to remove protection from files. For more information, see [Configuring super users for Azure Rights Management and discovery services or data recovery](/azure/information-protection/configure-super-users).

Use the **Remove-FileLabel** PowerShell cmdlet to enable removal of protection from container files (**zip**, **.rar**, **.7z**, and **.pst**).

> [!NOTE]
> - This remove protection capability is disabled by default and must first be enabled using the [Set-LabelPolicy](/azure/information-protection/rms-client/clientv2-admin-guide-customizations#enable-removal-of-protection-from-compressed-files) cmdlet.
>
> - For .pst files, 5 GB is the maximum file size supported with this cmdlet.
>

```yaml
Type: SwitchParameter
Parameter Sets: RemoveLabelProtection, RemoveProtection
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

## INPUTS

### System.String[]

## OUTPUTS

### Microsoft.InformationProtection.Powershell.AIP.Results.SetAIPFileResult

## NOTES

## RELATED LINKS

[Get-FileStatus](Get-FileStatus.md)

[New-AIPCustomPermissions](NewCustomPermissions.md)

[Set-FileLabel](Set-FileLabel.md)

[Set-Authentication](Set-Authentication.md)
