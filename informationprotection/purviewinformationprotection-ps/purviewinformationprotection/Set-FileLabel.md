---
external help file: AIP.dll-Help.xml
Module Name: PurviewInformationProtection
online version: https://go.microsoft.com/fwlink/?linkid=2259827
schema: 1.0.0
---

# Set-AIPFileLabel

## SYNOPSIS
Sets the sensitivity label and protection for a file through manual labeling or autolabeling according to the label configuration or custom permissions. 

## SYNTAX

### SetLabel
```
Set-FileLabel [-Path] <String[]> -LabelId <Guid> [-JustificationMessage <String>] [-Owner <String>]
 [-PreserveFileDetails] [<CommonParameters>]
```

### SetLabelCustom
```
Set-FileLabel [-Path] <String[]> -LabelId <Guid> [-JustificationMessage <String>]
 -CustomPermissions <AIPCustomPermissions> [-Owner <String>] [-PreserveFileDetails] [<CommonParameters>]
```

### Custom
```
Set-FileLabel [-Path] <String[]> -CustomPermissions <AIPCustomPermissions> [-Owner <String>]
 [-PreserveFileDetails] [<CommonParameters>]
```

### SetAutoLabel
```
Set-FileLabel [-Path] <String[]> [-JustificationMessage <String>] [-Owner <String>] [-Force]
 [-PreserveFileDetails] [-AutoLabel] [<CommonParameters>]
```

### WhatIf
```
Set-FileLabel [-Path] <String[]> [-PreserveFileDetails] [-WhatIf] [-DiscoveryInfoTypes <String[]>]
 [<CommonParameters>]
```

## DESCRIPTION
For the Microsoft Purview Information Protection client, the **Set-FileLabel** cmdlet sets a sensitivity label for one or more files. This action can automatically apply protection when labels are configured to apply encryption. 

Additionally, you can use this cmdlet to apply custom permissions when they are created as an ad-hoc protection policy object with the [New-AIPCustomPermissions](New-AIPCustomPermissions.md) cmdlet. 

When the command runs successfully, any existing label or protection can be replaced.

You can run this cmdlet non-interactively. For more information, see the [Unified labeling client admin guide](/information-protection/rms-client/clientv2-admin-guide-powershell#how-to-label-files-non-interactively-for-azure-information-protection).

> [!NOTE]
> When running the **Set-FileLabel** cmdlet in a loop, add these two lines after the cmdlet:
> **[GC]::Collect()**    
**[GC]::WaitForPendingFinalizers()** 
> 

## EXAMPLES

### Example 1: Apply the "General" label to all files that do not currently have a label
```
PS C:\> Get-FileStatus -Path \\Finance\Projects\ | where {$_.IsLabeled -eq $False} | Set-FileLabel -LabelId d9f23ae3-4321-4321-4321-f515f824c57b
FileName                              Status Comment
--------                              ------ ------------
\\Finance\Projects\Image.jpg          Success
\\Finance\Projects\Pricelist.pdf      Success
\\Finance\Projects\Announcement.docx  Success
\\Finance\Projects\Analysis.xlsx      Success
```

This command first identifies all files that are not labeled by using the **Get-FileStatus** cmdlet. Then, these files are labeled by specifying the "General" label by its ID.

### Example 2: Apply the "General" label to .docx files that are not labeled
```
PS C:\> Get-ChildItem C:\Projects\*.docx -File -Recurse | Get-FileStatus | where {$_.IsLabeled -eq $False} | Set-FileLabel -LabelId d9f23ae3-1234-1234-1234-f515f824c57b
FileName                   Status  Comment
--------                   ------  ------------
C:\Projects\Analysis.docx  Success
C:\Projects\Projects.docx  Success
```

This command first identifies all **.docx** files in the **C:\Projects** folder (and its subfolders) by using [Get-Child-Item](/powershell/module/microsoft.powershell.management/get-childitem?view=powershell-7), then finds from these files the ones that are not labeled by using the **Get-FileStatus** cmdlet. The resulting files are then labeled by specifying the "General" label by its ID.

> [!NOTE]
> This command makes use of the **Path** alias of FullName, so that [Get-Child-Item](/powershell/module/microsoft.powershell.management/get-childitem) can be used with **Get-FileStatus**. 
> 

### Example 3: Apply the "General" label to all files in a folder and any of its subfolders
```
PS C:\> Set-FileLabel -Path C:\Projects\ -LabelId d9f23ae3-1324-1234-1234-f515f824c57b
FileName                    Status      Comment
--------                    ------      ------------
C:\Projects\Project1.docx   Success
C:\Projects\Datasheet.pdf   Success
C:\Projects\Image.jpg       Success
C:\Projects\Analysis.xlsx   Skipped    No label to apply
C:\Projects\Dashboard.xlsx  Success
```

This command sets a label named "General" on all files in the **Projects** folder and any of its subfolders.

If the General label is configured to apply encryption, the files that were successfully labeled with this command will also be encrypted. In this case, the Rights Management owner (who has the Rights Management Full Control permission) of these files is the user who ran the PowerShell command.

In this example, one file was not labeled (skipped) because it required justification. This might be the intended outcome to ensure that a file with a higher classification label or protection isn't accidentally overwritten with a lower classification label or has protection removed. 

To enable this safeguard, the Office 365 classification label policy must be configured to require justification for removing a label or lowering the classification. When you then run this command without the **JustificationMessage** parameter and the label triggers justification, the file is skipped with the comment "No label to apply". 

### Example 4: Apply the "General" label to a single file, which requires justification
```
PS C:\> Set-FileLabel -Path \\Finance\Projects\Analysis.xlsx -LabelId d9f23ae3-1324-1234-1234-f515f824c57b -JustificationMessage 'The previous label no longer applies'
FileName                          Status      Comment
--------                          ------      ------------
\\finance\projects\analysis.xlsx  Success
```

This command sets the "General" label for a file that is already labeled with a higher sensitivity label. The sensitivity label policy is configured to require justification for removing a label or lowering the classification. Because the command includes a justification message, the new label is successfully applied.


### Example 5: Protect a file with custom permissions

```
PS C:\> $permissions = New-CustomPermissions -Users user1@contoso.com, user2@vanarsdel.com -Permissions Reviewer -ExpirationDate (Get-Date -Month 1 -Day 1 -Year 2020)
PS C:\> Set-FileLabel C:\Projects\Analysis.docx -CustomPermissions $permissions

FileName                   Status Comment
--------                   ------ ------------
C:\Projects\Analysis.docx  Success
```

The first command creates an ad-hoc protection policy object that grants users from different organizations usage rights from the Reviewer permissions, and also applies an expiration date.

The second command protects a single file named **Analysis.docx** by using the custom permissions in the stored ad-hoc protection policy object.

### Example 6: Apply a label and custom permissions to file

```
PS C:\> $permissions = New-CustomPermissions -Users a@a.com, b@b.com -Permissions Reviewer 
PS C:\> Set-FileLabel C:\Projects\Analysis.docx -LabelId d9f23ae3-1324-1234-1234-f515f824c57b -CustomPermissions $permissions

FileName                   Status Comment
--------                   ------ ------------
C:\Projects\Analysis.docx  Success
```

The first command creates an ad-hoc protection policy object that grants users from different organizations usage rights from the Reviewer permissions, and also applies an expiration date.

The second command applies a label to a single file named **Analysis.docx** and also protects the file by using the custom permissions in the stored ad-hoc protection policy object. If the label is configured for protection settings, they are replaced by the custom permissions.

### Example 7: Scan all files in a folder and any of its subfolders, and apply labels according to the configured conditions for automatic labeling
```
PS C:\> Set-FileLabel -AutoLabel -Path C:\Projects\ -PreserveFileDetails


FileName      : C:\Projects\Project1.docx
Status        : Success
Comment       :
MainLabelName : Confidential
MainLabelId   : 074e257c-1234-1234-1234-34a182080e71
SubLabelName  : Finance group
SubLabelId    : d9f23ae3-1234-1234-1234-f515f824c57b

FileName      : C:\Projects\Datasheet.pdf
Status        : Skipped
Comment       : No label to apply
MainLabelName : 
MainLabelId   : 
SubLabelName  : 
SubLabelId    : 

FileName      : C:\Projects\Analysis.xlsx
Status        : Skipped
Comment       : No label to apply
MainLabelName : 
MainLabelId   : 
SubLabelName  : 
SubLabelId    : 

FileName      : C:\Projects\Pricelist.xlsx
Status        : Skipped
Comment       : No label to apply
MainLabelName : 
MainLabelId   : 
SubLabelName  : 
SubLabelId    : 

FileName      : C:\Projects\Dashboard.xlsx
Status        : Success
Comment       : 
MainLabelName : Public
MainLabelId   : f018e9e7-0cfc-4c69-b27a-ac3cb7df43cc
SubLabelName  : 
SubLabelId    :
```

This command scans all files in the Projects folder and any of its subfolders, and sets labels according to the configured conditions in the auto labeling policy. In this example, there are five files and two files are automatically labeled. The **Datasheet.pdf** file is not labeled because its contents does not match the configured conditions for automatic labeling **Analysis.xlsx** was already manually labeled, and **Pricelist.xlsx** has a higher label. Because the command is run without the *-Force* parameter, the existing labels for **Analysis.xlsx** and **Pricelist.xlsx** are not overwritten.

If the applied labels are also configured to apply Rights Management protection, the files that are successfully labeled with this command are also protected. In this case, the Rights Management owner (who has the Rights Management Full Control permission) of these files is the user who ran the PowerShell command.

Because the PreserveFileDetails parameter is specified, the Date Modified of the labeled files remains unchanged.



### Example 8: Scan all files in a folder and any of its subfolders, and apply labels according to the configured conditions for automatic labeling, overriding any existing labels

```
PS C:\> Set-FileLabel -Autolabel -Path C:\Projects\ -Force -PreserveFileDetails


FileName      : C:\Projects\Project1.docx
Status        : Success
Comment       :
MainLabelName : Confidential
MainLabelId   : 074e257c-1234-1234-1234-34a182080e71
SubLabelName  : Finance group
SubLabelId    : d9f23ae3-1234-1234-1234-f515f824c57b

FileName      : C:\Projects\Datasheet.pdf
Status        : Skipped
Comment       : No label to apply
MainLabelName : 
MainLabelId   : 
SubLabelName  : 
SubLabelId    : 

FileName      : C:\Projects\Analysis.xlsx
Status        : Success
Comment       :
MainLabelName : Public
MainLabelId   : f018e9e7-0cfc-4c69-b27a-ac3cb7df43cc
SubLabelName  : 
SubLabelId    : 

FileName      : C:\Projects\Pricelist.xlsx
Status        : Success
Comment       :
MainLabelName : Public
MainLabelId   : f018e9e7-0cfc-4c69-b27a-ac3cb7df43cc
SubLabelName  : 
SubLabelId    : 

FileName      : C:\Projects\Dashboard.xlsx
Status        : Success
Comment       : 
MainLabelName : Public
MainLabelId   : f018e9e7-0cfc-4c69-b27a-ac3cb7df43cc
SubLabelName  : 
SubLabelId    :
```

This command is similar to the previous example in that it also scans all files in the Projects folder and any of its subfolders, and sets labels according to the configured conditions for auto labeling. However, this time, because the command includes the *-Force* parameter, it also replaces the existing label for **Dashboard.xlsx**, and **Pricelist.xlsx**. 

The contents of **Datasheet.pdf** did not match any configured conditions and this file remains without a label.

### Example 9: Scan a file in WhatIf mode for all known sensitive information types

```
PS C:\> Set-FileLabel -AutoLabel -Path C:\Projects\Project1.docx -WhatIf -DiscoveryInfoTypes All


MainLabelName           : General
MainLabelId             : 89a453df-5df4-4976-8191-jdn2fsf9560a
SubLabelName            :
SubLabelId              :
WhatIf                  : True
MatchedInformationTypes : {Credit Card Number, U.S. Social Security Number (SSN), International Classification of
                          Diseases (ICD-10-CM), International Classification of Diseases (ICD-9-CM)}
LastModifiedBy          :
LastModifiedTime        : 8/19/2014 5:11:26 AM
FileName                : C:\Projects\Project1.docx
Status                  : Success
Comment                 :
```

This command discovers all known information types in Project1.docx file without applying protection or a label.

### Example 10: Scan a file in WhatIf mode for specific sensitive information types

```
PS C:\> Set-FileLabel -AutoLabel -Path C:\Projects\Project1.docx -WhatIf -DiscoveryInfoTypes "50842eb7-edc8-4019-85dd-5a5c1f2bb085","a44669fe-0d48-453d-a9b1-2cc83f2cba77"

MainLabelName           : General
MainLabelId             : 89a453df-5df4-4976-8191-jdn2fsf9560a
SubLabelName            :
SubLabelId              :
WhatIf                  : True
MatchedInformationTypes : {Credit Card Number, U.S. Social Security Number (SSN)}
LastModifiedBy          :
LastModifiedTime        : 8/19/2014 5:11:26 AM
FileName                : Project1.docx
Status                  : Success
Comment                 :

```

This command discovers the specific information types of "Credit Card Number", and "Social Security Number (SSN)" in **Project1.docx** file without applying protection or a label.


### Example 11: Scan a file in WhatIf mode for specific sensitive information types and display the values found

```
PS C:\> $x=Set-FileLabel -AutoLabel -Path "C:\Projects\Project1.docx" -WhatIf -DiscoveryInfoTypes "50842eb7-edc8-4019-85dd-5a5c1f2bb085","a44669fe-0d48-453d-a9b1-2cc83f2cba77"
PS C:\> $x.MatchedInformationTypes

RulePackageSetId  : 00000000-0000-0000-0000-000000000000
RulePackageId     : 00000000-0000-0000-0000-000000000000
RuleId            : 50842eb7-edc8-4019-85dd-5a5c1f2bb085
Name              : Credit Card Number
Count             : 1
UniqueCount       : 1
Confidence        : 85
SensitiveContents : {Offset: 2089, Length: 19}
 
RulePackageSetId  : 00000000-0000-0000-0000-000000000000
RulePackageId     : 00000000-0000-0000-0000-000000000000
RuleId            : a44669fe-0d48-453d-a9b1-2cc83f2cba77
Name              : U.S. Social Security Number (SSN)
Count             : 1
UniqueCount       : 1
Confidence        : 85
SensitiveContents : {Offset: 7063, Length: 11}


PS C:\> $x.MatchedInformationTypes[0].SensitiveContents | fl

Offset  : 2089
Length  : 19
Value   : 4539-9572-7949-2212
Context : OLOGICAL SCIENCES     Credit Card #
          Expiration Date:      4539-9572-7949-2212
          8/2009                Department:     BIOLOGICAL SCIENCES     Anticipa
```

Similar to the previous example, the first command discovers the specific information types of "Credit Card Number", and "Social Security Number (SSN)" in **Project1.docx** file without applying protection or a label. However, in this example, the results are stored in a variable for further processing.

The second command is then used to display the contents of the matched information types, which includes the SensitiveContents parameter.

The final command displays and formats for easier reading the data that's identified by the first sensitive information type, which in this example, is the credit card details.


## PARAMETERS

### -AutoLabel
When -AutoLabel is used, cmdlet runs in auto-labeling mode. When -AutoLabel cmdlet is not used, runs in manual labeling mode. 

```yaml
Type: SwitchParameter
Parameter Sets: SetAutoLabel
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CustomPermissions
Specifies the variable name that stores an ad-hoc protection policy, which was created by using the [New-CustomPermissions](New-CustomPermissions.md) cmdlet. The ad-hoc protection policy is used to protect the file or files with custom permissions.

```yaml
Type: AIPCustomPermissions
Parameter Sets: SetLabelCustom, Custom
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DiscoveryInfoTypes
Specify the sensitive information types to be discovered when you use the *WhatIf* parameter.

If you want to search for specific sensitive information types, specify the **Entity id** number for that information type, which you can find listed in [Sensitive information types in Exchange Server](/Exchange/policy-and-compliance/data-loss-prevention/sensitive-information-types?view=exchserver-2019). 

For example, "50842eb7-edc8-4019-85dd-5a5c1f2bb085" is the number to specify for the Credit Card Number sensitive information type.

```yaml
Type: String[]
Parameter Sets: WhatIf
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
Replaces an existing label when the configured conditions apply.

```yaml
Type: SwitchParameter
Parameter Sets: SetAutoLabel
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -JustificationMessage
The justification reason for lowering the classification label, removing a label, or removing protection, if the sensitivity policy requires users to supply this information. If setting a label triggers the justification and this reason is not supplied, the label is not applied. In this case, the status returned is "Skipped" with the comment "Justification required".

```yaml
Type: String
Parameter Sets: SetLabel, SetLabelCustom, SetAutoLabel
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LabelId
Specifies the identity (ID) of the label to apply. When a label has sublabels, always specify the ID of just a sublabel and not the parent label. 

To find the label ID:

The label ID value is not displayed in the Microsoft Purview compliance portal. However, you can use the following Office 365 Security & Compliance Center PowerShell command to find this value: `Get-Label | Format-Table -Property DisplayName, Name, Guid`

For files that have labels applied, you can also run the [Get-FileStatus](Get-FileStatus.md) cmdlet to identify the label ID (MainLabelId or SubLabelId).

```yaml
Type: Guid
Parameter Sets: SetLabel, SetLabelCustom
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Owner
Specifies owner for applying label or protection to the file. 

```yaml
Type: String
Parameter Sets: SetLabel, SetLabelCustom, Custom, SetAutoLabel
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Path
Specifies a local path, network path, or SharePoint Server URL to the files for which you want to get the label and protection information. 

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

### -WhatIf
Shows what would happen if the cmdlet runs.
The cmdlet is not run.

```yaml
Type: SwitchParameter
Parameter Sets: WhatIf
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

[New-CustomPermissions](New-CustomPermissions.md)

[Set-Authentication](Set-Authentication.md)
